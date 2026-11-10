/**
 * Split painted colours into separate printable parts (port of the add-on's split.py).
 *
 * The body colour stays one piece. Every other ticked colour becomes a part:
 * - Inlay: the painted surface is the part's top, it goes `depth` into the model and
 *   sits in a pocket that is `tolerance` larger on every side. With a flat bottom the
 *   pockets are cut with a boolean (Manifold); without, the body is built directly.
 * - Cut Off: the colour is cut away whole with flat cuts, one in the plane of each of its
 *   edge loops (Manifold), so a ragged painted edge still gives a straight cut. Bits thinner
 *   than `minThickness` are left out, and `cutOffGap` takes that much more off the part at
 *   the cut (a gap for glue). A model that isn't closed is cut along the painted edge.
 */
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';
import { PaintMesh } from './mesh';
import earcut from 'earcut';
import { capShape, capTidyHoles, loopFrame, orthoBasis, type CapShape, type V3 } from './cap';
import { jointOf, connectorShapes, connectorReach, connectorJoints, pegFrame, type ConnectorOptions, type Joint } from './connector';

export const PRESETS = { resin: { tolerance: 0.05, depth: 1.0 }, fdm: { tolerance: 0.2, depth: 1.5 } } as const;
export const MAX_SHELL = 3;
const KIND_BOTTOM = 0, KIND_TOP = 1, KIND_RIM = 2;

export type CutMode = 'inlay' | 'cutoff';

export interface SplitOptions {
  tolerance: number;
  depth: number;
  /** 1-based colour for the body, 0 = Auto (largest painted area). */
  bodyChoice: number;
  flatBottom: boolean;
  /** Colours that aren't cut stay painted on the body (else they become the body colour). */
  keepUncut: boolean;
  /** Cut Off: leave out bits thinner than this (mm), 0 = cut everything. */
  minThickness: number;
  /** Cut Off: gap between the part and the body at the cut (mm). */
  cutOffGap: number;
  /** Per colour: cut it into a part (default true). */
  cut: boolean[];
  /** Per colour: how it is cut (default inlay). */
  mode: CutMode[];
  /** Cut Off: peg and socket at every cut. */
  connector?: ConnectorOptions;
}

export interface TriMesh {
  positions: Float32Array;
  index: Uint32Array;
}

export interface Report {
  tooCurved: boolean;
  /** [model thickness, needed] at the worst spot. */
  worst: [number, number] | null;
  /** Part vertices where the part would go through. */
  bad: Set<number>;
  deepest: number;
  /** Smallest spare thickness beyond the part (negative = goes through). */
  margin: number | null;
  dropped: number;
  /** Cut Off: the part is only a thin skin (the colour is a patch on the surface, Inlay suits it). */
  flat?: boolean;
}

export interface PartInfo {
  colour: number;
  shape: TriMesh;
  report: Report;
  area: number;
  cutOff: boolean;
  /** Cut Off: where the part meets the body. */
  joints?: Joint[];
}

export interface BuildResult {
  bodyIndex: number | null;
  parts: PartInfo[];
  /** The model after the Cut Off colours were cut away (the body before pockets). */
  work: PaintMesh;
  /** Cut Off colours that flat cuts couldn't free (left on the body). */
  notFreed?: number[];
}

export type Warning =
  | { kind: 'thin'; colour: number; have: number; need: number }
  | { kind: 'curved'; colour: number }
  | { kind: 'dropped'; colour: number; faces: number }
  | { kind: 'flatPatch'; colour: number }
  | { kind: 'notFreed'; colour: number }
  | { kind: 'covered'; colour: number }
  | { kind: 'failed'; colour: number }
  | { kind: 'connectorTooBig'; colour: number; room: number }
  | { kind: 'connectorFailed'; colour: number }
  | { kind: 'connectorThrough'; colour: number; onBody: boolean }
  | { kind: 'notClosed' };

export interface SplitResult {
  bodyIndex: number;
  body: TriMesh & { faceColor: Uint8Array };
  parts: { colour: number; mesh: TriMesh; cutOff: boolean; joints?: Joint[] }[];
  warnings: Warning[];
}

const newReport = (): Report => ({ tooCurved: false, worst: null, bad: new Set(), deepest: 0, margin: null, dropped: 0 });

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

export function colourAreas(pm: PaintMesh, colours: number): number[] {
  const areas = new Array(colours).fill(0);
  const a = pm.areas();
  pm.faceColor.forEach((c, f) => {
    if (c < colours) areas[c] += a[f];
  });
  return areas;
}

/** Body colour index, or null if nothing is painted. */
export function pickBody(areas: number[], choice: number): number | null {
  if (!areas.some((a) => a > 0)) return null;
  if (choice > 0 && choice <= areas.length && areas[choice - 1] > 0) return choice - 1;
  let best = 0;
  areas.forEach((a, i) => {
    if (a > areas[best]) best = i;
  });
  return best;
}

export function makeBvh(positions: Float32Array, index: Uint32Array): MeshBVH {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  g.setIndex(new THREE.BufferAttribute(index, 1));
  return new MeshBVH(g, { indirect: true });
}

/** Builds a triangle mesh with shared vertices. */
class Builder {
  pos: number[] = [];
  idx: number[] = [];
  kind: number[] = [];
  vert(p: ArrayLike<number>, kind = -1) {
    this.pos.push(p[0], p[1], p[2]);
    this.kind.push(kind);
    return this.pos.length / 3 - 1;
  }
  tri(a: number, b: number, c: number) {
    if (a !== b && b !== c && a !== c) this.idx.push(a, b, c);
  }
  quad(a: number, b: number, c: number, d: number) {
    this.tri(a, b, c);
    this.tri(a, c, d);
  }
  mesh(): TriMesh {
    return { positions: Float32Array.from(this.pos), index: Uint32Array.from(this.idx) };
  }
}

const P = (pos: ArrayLike<number>, v: number): V3 => [pos[3 * v], pos[3 * v + 1], pos[3 * v + 2]];

/** Directed rim edges [a, b] (in the faces' winding) of a face set. */
function rimEdges(pm: PaintMesh, faces: ArrayLike<number>, inSet: (f: number) => boolean): [number, number][] {
  const nb = pm.neighbours();
  const ix = pm.index;
  const out: [number, number][] = [];
  for (let i = 0; i < faces.length; i++) {
    const f = faces[i];
    for (let e = 0; e < 3; e++) {
      const g = nb[3 * f + e];
      if (g < 0 || !inSet(g)) out.push([ix[3 * f + e], ix[3 * f + ((e + 1) % 3)]]);
    }
  }
  return out;
}

/** Closed loops of vertices from directed rim edges. */
function rimCycles(edges: [number, number][]): number[][] {
  const following = new Map<number, number[]>();
  for (const [a, b] of edges) {
    const l = following.get(a);
    if (l) l.push(b);
    else following.set(a, [b]);
  }
  const cycles: number[][] = [];
  while (following.size) {
    const start = following.keys().next().value as number;
    const cycle = [start];
    let v = start;
    for (;;) {
      const outs = following.get(v);
      if (!outs || !outs.length) {
        following.delete(v);
        break;
      }
      const w = outs.pop()!;
      if (!outs.length) following.delete(v);
      if (w === start) break;
      cycle.push(w);
      v = w;
    }
    if (cycle.length >= 3) cycles.push(cycle);
  }
  return cycles;
}

/** Edge-connected islands of a face set. */
function islands(pm: PaintMesh, faces: ArrayLike<number>, inSet: (f: number) => boolean): number[][] {
  const nb = pm.neighbours();
  const seen = new Set<number>();
  const out: number[][] = [];
  for (let i = 0; i < faces.length; i++) {
    const f0 = faces[i];
    if (seen.has(f0)) continue;
    seen.add(f0);
    const island = [f0];
    for (let k = 0; k < island.length; k++) {
      const f = island[k];
      for (let e = 0; e < 3; e++) {
        const g = nb[3 * f + e];
        if (g >= 0 && !seen.has(g) && inSet(g)) {
          seen.add(g);
          island.push(g);
        }
      }
    }
    out.push(island);
  }
  return out;
}

/** Angle-weighted vertex normals and even-thickness (shell) factors of a mesh. */
export function vertexNormals(positions: ArrayLike<number>, index: ArrayLike<number>): { normals: Float32Array; shells: Float32Array } {
  const vc = positions.length / 3;
  const normals = new Float32Array(vc * 3);
  const fn = new Float32Array(index.length);
  const angles = new Float32Array(index.length);
  for (let f = 0; f < index.length / 3; f++) {
    const v = [index[3 * f], index[3 * f + 1], index[3 * f + 2]];
    const p = v.map((i) => P(positions, i));
    let n = cross3(sub3(p[1], p[0]), sub3(p[2], p[0]));
    const l = Math.hypot(n[0], n[1], n[2]);
    if (l < 1e-20) continue;
    n = [n[0] / l, n[1] / l, n[2] / l];
    for (let c = 0; c < 3; c++) {
      const a = sub3(p[(c + 1) % 3], p[c]), b = sub3(p[(c + 2) % 3], p[c]);
      const la = Math.hypot(...a), lb = Math.hypot(...b);
      const ang = la && lb ? Math.acos(Math.max(-1, Math.min(1, dot3(a, b) / (la * lb)))) : 0;
      angles[3 * f + c] = ang;
      for (let k = 0; k < 3; k++) normals[3 * v[c] + k] += n[k] * ang;
    }
    fn[3 * f] = n[0];
    fn[3 * f + 1] = n[1];
    fn[3 * f + 2] = n[2];
  }
  for (let v = 0; v < vc; v++) {
    const l = Math.hypot(normals[3 * v], normals[3 * v + 1], normals[3 * v + 2]) || 1;
    normals[3 * v] /= l;
    normals[3 * v + 1] /= l;
    normals[3 * v + 2] /= l;
  }
  const acc = new Float32Array(vc), accAng = new Float32Array(vc);
  for (let f = 0; f < index.length / 3; f++) {
    for (let c = 0; c < 3; c++) {
      const v = index[3 * f + c];
      const d = Math.abs(normals[3 * v] * fn[3 * f] + normals[3 * v + 1] * fn[3 * f + 1] + normals[3 * v + 2] * fn[3 * f + 2]);
      const ang = angles[3 * f + c];
      acc[v] += (d > 1e-6 ? 1 / d : MAX_SHELL) * ang;
      accAng[v] += ang;
    }
  }
  const shells = new Float32Array(vc);
  for (let v = 0; v < vc; v++) shells[v] = Math.min(accAng[v] ? acc[v] / accAng[v] : 1, MAX_SHELL);
  return { normals, shells };
}

const sub3 = (a: number[], b: number[]): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot3 = (a: number[], b: number[]) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross3 = (a: number[], b: number[]): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/**
 * The shortest move m with m·n >= dist for every normal n (a vertex pushed out at least
 * `dist` from the plane of every face around it), or the best of `fallback` iterations
 * when no small active set works. The result is capped at dist * MAX_SHELL.
 */
export function offsetMove(normals: V3[], dist: number, start: V3): V3 {
  const uniq: V3[] = [];
  for (const n of normals) if (!uniq.some((u) => dot3(u, n) > 0.9995)) uniq.push(n);
  const ok = (m: V3) => uniq.every((n) => dot3(m, n) >= dist * (1 - 1e-4));
  let best: V3 | null = null;
  let bestLen = Infinity;
  const consider = (m: V3 | null) => {
    if (!m) return;
    const l = Math.hypot(...m);
    if (l < bestLen && ok(m)) {
      best = m;
      bestLen = l;
    }
  };
  const k = uniq.length;
  if (k <= 12) {
    for (let a = 0; a < k; a++) {
      consider(scale3(uniq[a], dist));
      for (let b = a + 1; b < k; b++) {
        consider(solveActive([uniq[a], uniq[b]], dist));
        for (let c = b + 1; c < k; c++) consider(solveActive([uniq[a], uniq[b], uniq[c]], dist));
      }
    }
  }
  let move: V3 = best ?? start;
  if (!best) {
    for (let it = 0; it < 200 && uniq.length; it++) {
      let worst = uniq[0], wd = Infinity;
      for (const n of uniq) {
        const d = dot3(move, n);
        if (d < wd) {
          wd = d;
          worst = n;
        }
      }
      const short = dist - wd;
      if (short <= dist * 1e-4) break;
      move = [move[0] + worst[0] * short, move[1] + worst[1] * short, move[2] + worst[2] * short];
    }
  }
  const ml = Math.hypot(...move);
  if (ml > dist * MAX_SHELL) move = scale3(move, (dist * MAX_SHELL) / ml);
  return move;
}

const scale3 = (a: V3, s: number): V3 => [a[0] * s, a[1] * s, a[2] * s];

/** Minimal-norm point on the intersection of the planes m·n_i = dist. */
function solveActive(ns: V3[], dist: number): V3 | null {
  // m = sum(l_i n_i), with G l = dist * 1, G = Gram matrix
  const k = ns.length;
  const G = ns.map((a) => ns.map((b) => dot3(a, b)));
  const rhs = new Array(k).fill(dist);
  const l = solveSmall(G, rhs);
  if (!l) return null;
  const m: V3 = [0, 0, 0];
  ns.forEach((n, i) => {
    m[0] += n[0] * l[i];
    m[1] += n[1] * l[i];
    m[2] += n[2] * l[i];
  });
  return m;
}

function solveSmall(A: number[][], b: number[]): number[] | null {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    if (Math.abs(M[p][c]) < 1e-9) return null;
    [M[c], M[p]] = [M[p], M[c]];
    for (let r = 0; r < n; r++) {
      if (r === c) continue;
      const f = M[r][c] / M[c][c];
      for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k];
    }
  }
  return M.map((row, i) => row[n] / row[i]);
}

/** Face normals of a TriMesh and the faces around each vertex. */
function meshAdjacency(m: TriMesh) {
  const vc = m.positions.length / 3, fc = m.index.length / 3;
  const fn = new Float32Array(fc * 3);
  for (let f = 0; f < fc; f++) {
    const a = P(m.positions, m.index[3 * f]), b = P(m.positions, m.index[3 * f + 1]), c = P(m.positions, m.index[3 * f + 2]);
    const n = cross3(sub3(b, a), sub3(c, a));
    const l = Math.hypot(...n) || 1;
    fn.set([n[0] / l, n[1] / l, n[2] / l], 3 * f);
  }
  const vf: number[][] = Array.from({ length: vc }, () => []);
  for (let i = 0; i < m.index.length; i++) vf[m.index[i]].push((i / 3) | 0);
  return { fn, vf };
}

/**
 * Model thickness from `origin` along `dir`: counts shells entered and left so
 * overlapping pieces of a mesh are one solid. null if the ray never comes out.
 */
export function thickness(bvh: MeshBVH, origin: V3, dir: V3): number | null {
  const ray = new THREE.Ray(new THREE.Vector3(...origin), new THREE.Vector3(...dir));
  const hits = bvh.raycast(ray, THREE.DoubleSide);
  hits.sort((a, b) => a.distance - b.distance);
  let inside = 1;
  for (const h of hits) {
    const n = h.face?.normal;
    if (!n) continue;
    inside += n.x * dir[0] + n.y * dir[1] + n.z * dir[2] > 0 ? -1 : 1;
    if (inside <= 0) return h.distance;
  }
  return null;
}

function check(report: Report, vertex: number, need: number, have: number | null) {
  report.deepest = Math.max(report.deepest, need);
  if (have === null) return;
  const spare = have - need;
  if (report.margin === null || spare < report.margin) report.margin = spare;
  if (spare < 0) {
    report.bad.add(vertex);
    if (!report.worst || need - have > report.worst[1] - report.worst[0]) report.worst = [have, need];
  }
}

// ---------------------------------------------------------------------------
// Inlay parts
// ---------------------------------------------------------------------------

/** Closed solid per island: the patch on top, straight walls along the island's
 *  average normal and a flat bottom `depth` below its lowest point. */
function flatSolid(pm: PaintMesh, faces: number[], depth: number, bvh: MeshBVH | null, tolerance: number, eps: number) {
  const report = newReport();
  const b = new Builder();
  const inSet = new Uint8Array(pm.faceCount);
  for (const f of faces) inSet[f] = 1;
  const fnorm = pm.normals();
  const areas = pm.areas();
  const pos = pm.positions;
  for (const island of islands(pm, faces, (f) => inSet[f] === 1)) {
    let n: V3 = [0, 0, 0];
    for (const f of island) for (let k = 0; k < 3; k++) n[k] += fnorm[3 * f + k] * areas[f];
    const l = Math.hypot(...n);
    if (l < 1e-12) continue;
    n = [n[0] / l, n[1] / l, n[2] / l];
    if (island.some((f) => fnorm[3 * f] * n[0] + fnorm[3 * f + 1] * n[1] + fnorm[3 * f + 2] * n[2] < 0)) report.tooCurved = true;
    const verts = new Set<number>();
    for (const f of island) for (let c = 0; c < 3; c++) verts.add(pm.index[3 * f + c]);
    const height = new Map<number, number>();
    let floor = Infinity;
    for (const v of verts) {
      const h = dot3(P(pos, v), n);
      height.set(v, h);
      floor = Math.min(floor, h);
    }
    floor -= depth;
    const top = new Map<number, number>();
    for (const v of verts) top.set(v, b.vert(P(pos, v), KIND_TOP));
    for (const f of island) b.tri(top.get(pm.index[3 * f])!, top.get(pm.index[3 * f + 1])!, top.get(pm.index[3 * f + 2])!);
    const bottom = new Map<number, number>();
    const rim = rimEdges(pm, island, (f) => inSet[f] === 1);
    const low = (v: number) => {
      let i = bottom.get(v);
      if (i === undefined) {
        const p = P(pos, v), d = height.get(v)! - floor;
        i = b.vert([p[0] - n[0] * d, p[1] - n[1] * d, p[2] - n[2] * d], KIND_BOTTOM);
        bottom.set(v, i);
      }
      return i;
    };
    for (const [a, c] of rim) b.quad(top.get(c)!, top.get(a)!, low(a), low(c));
    // the floor: rim loops (outer + holes) triangulated in the bottom plane, facing -n
    floorFill(b, rimCycles(rim).map((cy) => cy.map(low)), n);

    if (bvh) {
      for (const v of verts) {
        const p = P(pos, v);
        const have = thickness(bvh, [p[0] - n[0] * eps, p[1] - n[1] * eps, p[2] - n[2] * eps], [-n[0], -n[1], -n[2]]);
        check(report, top.get(v)!, height.get(v)! - floor + tolerance, have === null ? null : have + eps);
      }
    }
  }
  return { shape: b.mesh(), report };
}

/** Triangulate flat loops (outer loops wound counter-clockwise seen from +n, holes clockwise), facing -n. */
function floorFill(b: Builder, loops: number[][], n: V3) {
  const [u, w] = basis(n);
  const flat = loops.map((loop) => loop.map((v) => {
    const p = [b.pos[3 * v], b.pos[3 * v + 1], b.pos[3 * v + 2]];
    return [dot3(p, u), dot3(p, w)] as [number, number];
  }));
  const area = flat.map((pts) => {
    let s = 0;
    for (let i = 0; i < pts.length; i++) {
      const [x0, y0] = pts[i], [x1, y1] = pts[(i + 1) % pts.length];
      s += x0 * y1 - x1 * y0;
    }
    return s / 2;
  });
  const outers = loops.map((_, i) => i).filter((i) => area[i] > 0);
  const holes = loops.map((_, i) => i).filter((i) => area[i] <= 0);
  const holesOf = new Map<number, number[]>(outers.map((o) => [o, []]));
  for (const h of holes) {
    const [hx, hy] = flat[h][0];
    const owner = outers.filter((o) => pointInPoly(hx, hy, flat[o])).sort((a, c) => Math.abs(area[a]) - Math.abs(area[c]))[0];
    if (owner !== undefined) holesOf.get(owner)!.push(h);
  }
  for (const o of outers) {
    const ids = [o, ...holesOf.get(o)!];
    const coords: number[] = [];
    const vmap: number[] = [];
    const holeStarts: number[] = [];
    for (const i of ids) {
      if (i !== o) holeStarts.push(vmap.length);
      flat[i].forEach((p, k) => {
        coords.push(p[0], p[1]);
        vmap.push(loops[i][k]);
      });
    }
    const t = earcutFill(coords, holeStarts);
    for (let i = 0; i < t.length; i += 3) b.tri(vmap[t[i]], vmap[t[i + 2]], vmap[t[i + 1]]); // reversed: faces -n
  }
}

function earcutFill(coords: number[], holes: number[]) {
  return earcut(coords, holes.length ? holes : undefined);
}

function pointInPoly(x: number, y: number, pts: [number, number][]) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i], [xj, yj] = pts[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

function basis(n: V3): [V3, V3] {
  const a: V3 = Math.abs(n[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
  let u = cross3(n, a);
  const l = Math.hypot(...u);
  u = [u[0] / l, u[1] / l, u[2] / l];
  return [u, cross3(n, u)];
}

/**
 * Where a face set touches itself at a single vertex (a bow tie), each side gets its
 * own copy of that vertex. Returns a key per (face, corner vertex): the vertex itself,
 * or a distinct negative key for each extra fan of faces around it.
 */
function sectorKeys(pm: PaintMesh, inSet: (f: number) => boolean) {
  const { start, faces } = pm.vertexFaces();
  const ix = pm.index;
  const extra = new Map<string, number>(); // "f,v" -> key
  let next = -1;
  const done = new Set<number>();
  const visit = (v: number) => {
    if (done.has(v)) return;
    done.add(v);
    const around: number[] = [];
    for (let k = start[v]; k < start[v + 1]; k++) if (inSet(faces[k])) around.push(faces[k]);
    if (around.length < 2) return;
    // faces around v joined through edges that contain v
    const parent = new Map(around.map((f) => [f, f]));
    const find = (f: number): number => (parent.get(f) === f ? f : find(parent.get(f)!));
    const edgeOwner = new Map<number, number>();
    for (const f of around) {
      for (let c = 0; c < 3; c++) {
        const w = ix[3 * f + c];
        if (w === v) continue;
        const o = edgeOwner.get(w);
        if (o === undefined) edgeOwner.set(w, f);
        else parent.set(find(f), find(o));
      }
    }
    const roots = new Map<number, number>();
    for (const f of around) {
      const r = find(f);
      if (!roots.has(r)) roots.set(r, roots.size === 0 ? v : next--);
      const key = roots.get(r)!;
      if (key !== v) extra.set(`${f},${v}`, key);
    }
  };
  return (f: number, v: number) => {
    visit(v);
    return extra.get(`${f},${v}`) ?? v;
  };
}

/** Directed rim edges with the face they belong to. */
function rimEdgesWithFace(pm: PaintMesh, faces: ArrayLike<number>, inSet: (f: number) => boolean): [number, number, number][] {
  const nb = pm.neighbours();
  const ix = pm.index;
  const out: [number, number, number][] = [];
  for (let i = 0; i < faces.length; i++) {
    const f = faces[i];
    for (let e = 0; e < 3; e++) {
      const g = nb[3 * f + e];
      if (g < 0 || !inSet(g)) out.push([ix[3 * f + e], ix[3 * f + ((e + 1) % 3)], f]);
    }
  }
  return out;
}

/** Surface-following solid: the patch on top, a copy `depth` inward (model normals,
 *  even thickness) as the bottom, walls along the patch edge. */
function surfaceSolid(pm: PaintMesh, faces: number[], depth: number, model: { normals: Float32Array; shells: Float32Array }) {
  const b = new Builder();
  const inSet = new Uint8Array(pm.faceCount);
  for (const f of faces) inSet[f] = 1;
  const isIn = (f: number) => inSet[f] === 1;
  const sector = sectorKeys(pm, isIn);
  const rim = rimEdgesWithFace(pm, faces, isIn);
  const rimVerts = new Set<number>();
  for (const [a, c] of rim) {
    rimVerts.add(a);
    rimVerts.add(c);
  }
  const top = new Map<number, number>(), bottom = new Map<number, number>();
  const pos = pm.positions;
  /** Part top vertex for model vertex v (in face f's fan); also makes its bottom twin. */
  const ensure = (f: number, v: number) => {
    const key = sector(f, v);
    if (!top.has(key)) {
      const p = P(pos, v);
      top.set(key, b.vert(p, rimVerts.has(v) ? KIND_RIM : KIND_TOP));
      const s = depth * model.shells[v];
      bottom.set(key, b.vert([p[0] - model.normals[3 * v] * s, p[1] - model.normals[3 * v + 1] * s, p[2] - model.normals[3 * v + 2] * s], KIND_BOTTOM));
    }
    return key;
  };
  const topOf = new Map<number, number>(); // model vertex -> a part top vertex (for the report)
  for (const f of faces) {
    const k = [0, 1, 2].map((c) => ensure(f, pm.index[3 * f + c]));
    for (let c = 0; c < 3; c++) if (!topOf.has(pm.index[3 * f + c])) topOf.set(pm.index[3 * f + c], top.get(k[c])!);
    b.tri(top.get(k[0])!, top.get(k[1])!, top.get(k[2])!);
    b.tri(bottom.get(k[2])!, bottom.get(k[1])!, bottom.get(k[0])!);
  }
  for (const [a, c, f] of rim) {
    const ka = sector(f, a), kc = sector(f, c);
    b.quad(top.get(kc)!, top.get(ka)!, bottom.get(ka)!, bottom.get(kc)!);
  }
  return { mesh: b.mesh(), kind: b.kind, topOf };
}

/** Pull a surface solid in by `dist`: walls and bottom move inward at least `dist`
 *  from every face around them; the top stays on the surface (its rim slides along it). */
function shrinkPart(m: TriMesh, kind: number[], dist: number) {
  if (dist <= 0) return;
  const { fn, vf } = meshAdjacency(m);
  const isTopFace = (f: number) => [0, 1, 2].every((c) => kind[m.index[3 * f + c]] !== KIND_BOTTOM);
  const moves: [number, V3][] = [];
  for (let v = 0; v < kind.length; v++) {
    if (kind[v] === KIND_TOP) continue;
    const normals = vf[v].map((f) => [fn[3 * f], fn[3 * f + 1], fn[3 * f + 2]] as V3);
    if (!normals.length) continue;
    let vn: V3 = [0, 0, 0];
    for (const n of normals) vn = [vn[0] + n[0], vn[1] + n[1], vn[2] + n[2]];
    const l = Math.hypot(...vn) || 1;
    // pulled in: -move is pushed out from every face
    const inv = offsetMove(normals, dist, [(vn[0] / l) * dist, (vn[1] / l) * dist, (vn[2] / l) * dist]);
    let move: V3 = [-inv[0], -inv[1], -inv[2]];
    if (kind[v] === KIND_RIM) {
      let up: V3 = [0, 0, 0];
      for (const f of vf[v]) if (isTopFace(f)) up = [up[0] + fn[3 * f], up[1] + fn[3 * f + 1], up[2] + fn[3 * f + 2]];
      const ul = Math.hypot(...up);
      if (ul > 1e-12) {
        up = [up[0] / ul, up[1] / ul, up[2] / ul];
        const d = dot3(move, up);
        move = [move[0] - up[0] * d, move[1] - up[1] * d, move[2] - up[2] * d];
      }
    }
    moves.push([v, move]);
  }
  for (const [v, mv] of moves) for (let k = 0; k < 3; k++) m.positions[3 * v + k] += mv[k];
}

/** Offset a closed solid outward by at least `dist` from every face (a pocket). */
export function grow(src: TriMesh, dist: number): TriMesh {
  const m: TriMesh = { positions: src.positions.slice(), index: src.index };
  const { fn, vf } = meshAdjacency(m);
  const { normals: vn } = vertexNormals(m.positions, m.index);
  const moves: V3[] = [];
  for (let v = 0; v < m.positions.length / 3; v++) {
    const normals = vf[v].map((f) => [fn[3 * f], fn[3 * f + 1], fn[3 * f + 2]] as V3);
    const move = normals.length ? offsetMove(normals, dist, [vn[3 * v] * dist, vn[3 * v + 1] * dist, vn[3 * v + 2] * dist]) : ([0, 0, 0] as V3);
    moves.push(move);
  }
  moves.forEach((mv, v) => {
    for (let k = 0; k < 3; k++) m.positions[3 * v + k] += mv[k];
  });
  return m;
}

function surfaceReport(pm: PaintMesh, faces: number[], bvh: MeshBVH, depth: number, tolerance: number, eps: number, model: { normals: Float32Array }, topOf: (v: number) => number) {
  const report = newReport();
  const verts = new Set<number>();
  for (const f of faces) for (let c = 0; c < 3; c++) verts.add(pm.index[3 * f + c]);
  for (const v of verts) {
    const p = P(pm.positions, v);
    const n = [model.normals[3 * v], model.normals[3 * v + 1], model.normals[3 * v + 2]];
    const have = thickness(bvh, [p[0] - n[0] * eps, p[1] - n[1] * eps, p[2] - n[2] * eps], [-n[0], -n[1], -n[2]]);
    check(report, topOf(v), depth + tolerance, have === null ? null : have + eps);
  }
  return report;
}

/** The body for surface-following parts, without a boolean: the model minus the cut
 *  faces, plus each pocket's floor and walls joined to the model's own vertices. */
function surfaceBody(pm: PaintMesh, cut: (c: number) => boolean, pocketDepth: number, model: { normals: Float32Array; shells: Float32Array }, bodySlot: number) {
  const pos = Array.from(pm.positions);
  const idx: number[] = [];
  const colours: number[] = [];
  const inCut = (f: number) => cut(pm.faceColor[f]);
  const sector = sectorKeys(pm, inCut);
  const floor = new Map<number, number>();
  const low = (f: number, v: number) => {
    const key = sector(f, v);
    let i = floor.get(key);
    if (i === undefined) {
      const s = pocketDepth * model.shells[v];
      pos.push(pm.positions[3 * v] - model.normals[3 * v] * s, pm.positions[3 * v + 1] - model.normals[3 * v + 1] * s, pm.positions[3 * v + 2] - model.normals[3 * v + 2] * s);
      i = pos.length / 3 - 1;
      floor.set(key, i);
    }
    return i;
  };
  const cutFaces: number[] = [];
  for (let f = 0; f < pm.faceCount; f++) {
    if (inCut(f)) cutFaces.push(f);
    else {
      idx.push(pm.index[3 * f], pm.index[3 * f + 1], pm.index[3 * f + 2]);
      colours.push(pm.faceColor[f]);
    }
  }
  for (const f of cutFaces) {
    idx.push(low(f, pm.index[3 * f]), low(f, pm.index[3 * f + 1]), low(f, pm.index[3 * f + 2]));
    colours.push(bodySlot);
  }
  for (const [a, c, f] of rimEdgesWithFace(pm, cutFaces, inCut)) {
    idx.push(a, c, low(f, c), a, low(f, c), low(f, a));
    colours.push(bodySlot, bodySlot);
  }
  return { positions: Float32Array.from(pos), index: Uint32Array.from(idx), faceColor: Uint8Array.from(colours) };
}

// ---------------------------------------------------------------------------
// Cut Off
// ---------------------------------------------------------------------------

/** Whether the model is thinner than minThickness at a face: surfaces facing each other
 *  round a point half that far below it. A sharp edge of a thick part doesn't count. */
function isThin(bvh: MeshBVH, pm: PaintMesh, f: number, minThickness: number): boolean {
  const n = pm.normals();
  const ix = pm.index, p = pm.positions;
  const r = minThickness * 0.5;
  const centre: V3 = [0, 0, 0];
  for (let c = 0; c < 3; c++) for (let k = 0; k < 3; k++) centre[k] += p[3 * ix[3 * f + c] + k] / 3;
  const probe = new THREE.Vector3(centre[0] - n[3 * f] * r, centre[1] - n[3 * f + 1] * r, centre[2] - n[3 * f + 2] * r);
  const sphere = new THREE.Sphere(probe, r * 1.02);
  const r2 = sphere.radius * sphere.radius;
  const tmp = new THREE.Vector3();
  const dirs: V3[] = [];
  let thin = false;
  bvh.shapecast({
    intersectsBounds: (box) => box.intersectsSphere(sphere),
    intersectsTriangle: (tri, g) => {
      tri.closestPointToPoint(probe, tmp);
      if (tmp.distanceToSquared(probe) > r2) return false;
      const m: V3 = [n[3 * g], n[3 * g + 1], n[3 * g + 2]];
      if (dirs.some((d) => dot3(m, d) < -0.5)) {
        thin = true;
        return true;
      }
      if (dirs.every((d) => dot3(m, d) < 0.95)) dirs.push(m);
      return false;
    },
  });
  return thin;
}

/** Faces where the model is at least minThickness thick, without islands under 4 faces. */
function solidFaces(pm: PaintMesh, faces: number[], bvh: MeshBVH, minThickness: number): number[] {
  const kept = new Set(faces.filter((f) => !isThin(bvh, pm, f, minThickness)));
  const out: number[] = [];
  for (const island of islands(pm, Array.from(kept), (f) => kept.has(f))) if (island.length >= 4) out.push(...island);
  return out;
}

/** Whether two vertices share a face. */
function hasEdge(pm: PaintMesh, a: number, b: number) {
  const { start, faces } = pm.vertexFaces();
  for (let k = start[a]; k < start[a + 1]; k++) {
    const f = faces[k];
    if (pm.index[3 * f] === b || pm.index[3 * f + 1] === b || pm.index[3 * f + 2] === b) return true;
  }
  return false;
}

const coordKey = (p: ArrayLike<number>, v: number) => `${p[3 * v].toFixed(5)},${p[3 * v + 1].toFixed(5)},${p[3 * v + 2].toFixed(5)}`;

/** A rim loop that lies flat: its plane (normal as the loop's frame) and its outline in it. */
interface FlatLoop {
  centre: V3;
  normal: V3;
  u: V3;
  w: V3;
  flat: [number, number][];
  eps: number;
}

function flatLoop(pts: V3[]): FlatLoop | null {
  const { centre, normal: raw } = loopFrame(pts);
  const l = Math.hypot(...raw);
  if (l < 1e-12) return null;
  const normal: V3 = [raw[0] / l, raw[1] / l, raw[2] / l];
  let size = 0;
  for (const p of pts) size = Math.max(size, Math.hypot(p[0] - centre[0], p[1] - centre[1], p[2] - centre[2]));
  const eps = Math.max(0.02, size * 0.005);
  const h = (p: V3) => (p[0] - centre[0]) * normal[0] + (p[1] - centre[1]) * normal[1] + (p[2] - centre[2]) * normal[2];
  if (pts.some((p) => Math.abs(h(p)) > eps)) return null;
  const [u, w] = orthoBasis(normal);
  const flat = pts.map((p): [number, number] => {
    const d: V3 = [p[0] - centre[0], p[1] - centre[1], p[2] - centre[2]];
    return [dot3(d, u), dot3(d, w)];
  });
  return { centre, normal, u, w, flat, eps };
}

const height = (fl: FlatLoop, p: ArrayLike<number>, o = 0) =>
  (p[o] - fl.centre[0]) * fl.normal[0] + (p[o + 1] - fl.centre[1]) * fl.normal[1] + (p[o + 2] - fl.centre[2]) * fl.normal[2];

function insideFlat(fl: FlatLoop, p: ArrayLike<number>, o = 0) {
  const d: V3 = [p[o] - fl.centre[0], p[o + 1] - fl.centre[1], p[o + 2] - fl.centre[2]];
  const x = dot3(d, fl.u), y = dot3(d, fl.w);
  let inside = false;
  const n = fl.flat.length;
  for (let i = 0; i < n; i++) {
    const [x0, y0] = fl.flat[i];
    const [x1, y1] = fl.flat[(i + 1) % n];
    if (y0 > y !== y1 > y && x < x0 + ((y - y0) * (x1 - x0)) / (y1 - y0 || 1e-30)) inside = !inside;
  }
  return inside;
}

/** Per rim loop of `colour`: the colour most of the faces just outside it have. */
function outsideColours(pm: PaintMesh, colour: number) {
  const nb = pm.neighbours();
  const ix = pm.index;
  const out = new Map<string, number>();
  for (let f = 0; f < pm.faceCount; f++) {
    if (pm.faceColor[f] !== colour) continue;
    for (let e = 0; e < 3; e++) {
      const g = nb[3 * f + e];
      if (g >= 0 && pm.faceColor[g] !== colour) out.set(`${ix[3 * f + e]},${ix[3 * f + ((e + 1) % 3)]}`, pm.faceColor[g]);
    }
  }
  return (cycle: number[], fallback: number) => {
    const count = new Map<number, number>();
    cycle.forEach((a, i) => {
      const c = out.get(`${a},${cycle[(i + 1) % cycle.length]}`);
      if (c !== undefined) count.set(c, (count.get(c) ?? 0) + 1);
    });
    let best = fallback, most = 0;
    for (const [c, k] of count) if (k > most) [best, most] = [c, k];
    return best;
  };
}

/**
 * Where a colour's edge lies flat (e.g. a chimney standing on a roof), the colour's faces
 * that reach behind that plane, inside the outline (e.g. the chimney's bore going down
 * into the roof), belong to the body: split them at the plane and give the part behind it
 * the colour around the cut, so cutting the colour off leaves that hole in the body.
 * `origin` maps each face of the result to the face it came from.
 */
function keepHolesBehindCuts(pm: PaintMesh, colour: number): { pm: PaintMesh; origin: Int32Array } {
  let origin = Int32Array.from({ length: pm.faceCount }, (_, f) => f);
  const faces: number[] = [];
  for (let f = 0; f < pm.faceCount; f++) if (pm.faceColor[f] === colour) faces.push(f);
  const around = outsideColours(pm, colour);
  const loops: { fl: FlatLoop; paint: number }[] = [];
  for (const cycle of rimCycles(rimEdges(pm, faces, (f) => pm.faceColor[f] === colour))) {
    const fl = flatLoop(cycle.map((v) => P(pm.positions, v)));
    if (fl) loops.push({ fl, paint: around(cycle, pm.faceColor[faces[0]]) });
  }
  for (const { fl, paint } of loops) {
    const p0 = pm.positions, ix = pm.index;
    const hv = new Float64Array(pm.vertexCount);
    for (let v = 0; v < pm.vertexCount; v++) {
      const h = height(fl, p0, 3 * v);
      hv[v] = Math.abs(h) <= fl.eps * 0.5 ? 0 : h;
    }
    const centroidAt = (a: number, b: number, c: number) => [0, 1, 2].map((k) => (p0[3 * a + k] + p0[3 * b + k] + p0[3 * c + k]) / 3);
    // the colour's faces that cross the plane inside the outline get cut at it
    const pos = Array.from(p0);
    const mid = new Map<string, number>();
    const ekey = (a: number, b: number) => (a < b ? `${a},${b}` : `${b},${a}`);
    let behind = false;
    for (const f of faces) {
      const t = [ix[3 * f], ix[3 * f + 1], ix[3 * f + 2]];
      const hs = t.map((v) => hv[v]);
      if (!hs.some((h) => h < 0)) continue;
      if (!insideFlat(fl, centroidAt(t[0], t[1], t[2]))) continue;
      behind = true;
      for (let k = 0; k < 3; k++) {
        const a = t[k], b = t[(k + 1) % 3];
        if (hv[a] * hv[b] >= 0 || mid.has(ekey(a, b))) continue;
        const s = hv[a] / (hv[a] - hv[b]);
        pos.push(...[0, 1, 2].map((j) => p0[3 * a + j] + (p0[3 * b + j] - p0[3 * a + j]) * s));
        mid.set(ekey(a, b), pos.length / 3 - 1);
      }
    }
    if (!behind) continue;
    const idx: number[] = [], col: number[] = [], obj: number[] = [], org: number[] = [];
    const isBehind = (a: number, b: number, c: number) => {
      const q = [a, b, c].map((v) => (v < hv.length ? hv[v] : 0));
      return q.every((h) => h <= 0) && q.some((h) => h < 0);
    };
    const add = (a: number, b: number, c: number, f: number) => {
      idx.push(a, b, c);
      const c0 = pm.faceColor[f];
      const ctr = [0, 1, 2].map((k) => (pos[3 * a + k] + pos[3 * b + k] + pos[3 * c + k]) / 3);
      col.push(c0 === colour && isBehind(a, b, c) && insideFlat(fl, ctr) ? paint : c0);
      obj.push(pm.faceObject[f]);
      org.push(origin[f]);
    };
    for (let f = 0; f < pm.faceCount; f++) {
      const t = [ix[3 * f], ix[3 * f + 1], ix[3 * f + 2]];
      const m = [0, 1, 2].map((k) => mid.get(ekey(t[k], t[(k + 1) % 3])));
      const cuts = m.filter((x) => x !== undefined).length;
      if (cuts === 0) add(t[0], t[1], t[2], f);
      else if (cuts === 1) {
        const k = m.findIndex((x) => x !== undefined);
        const a = t[k], b = t[(k + 1) % 3], c = t[(k + 2) % 3], x = m[k]!;
        add(a, x, c, f);
        add(x, b, c, f);
      } else {
        // two cut edges: the corner between them on its own, the rest as two triangles
        const k = [0, 1, 2].find((j) => m[j] !== undefined && m[(j + 2) % 3] !== undefined)!;
        const a = t[k], b = t[(k + 1) % 3], c = t[(k + 2) % 3];
        const xab = m[k]!, xca = m[(k + 2) % 3]!;
        add(a, xab, xca, f);
        add(xab, b, c, f);
        add(xab, c, xca, f);
      }
    }
    pm = new PaintMesh(Float32Array.from(pos), Uint32Array.from(idx), Uint8Array.from(col), Uint16Array.from(obj));
    origin = Int32Array.from(org);
    faces.length = 0;
    for (let f = 0; f < pm.faceCount; f++) if (pm.faceColor[f] === colour) faces.push(f);
  }
  return { pm, origin };
}

interface CapGroup {
  cycles: number[][]; // outline first, then holes
  shape: CapShape;
  normal: V3; // unit, out of the body
  /** Taken from the body's cap (the part side of the same cut). */
  fromBody?: boolean;
}

/** Caps for rim loops: loops that lie in one plane, one inside the other, share one cap with holes. */
function capGroups(pm: PaintMesh, cycles: number[][], known?: (cycles: number[][]) => CapGroup | undefined): CapGroup[] {
  const pts = cycles.map((c) => c.map((v) => P(pm.positions, v)));
  const flats = pts.map(flatLoop);
  const used = new Set<number>();
  const groups: CapGroup[] = [];
  const unit = (pp: V3[]): V3 => {
    const { normal } = loopFrame(pp);
    const l = Math.hypot(...normal) || 1;
    return [normal[0] / l, normal[1] / l, normal[2] / l];
  };
  for (let i = 0; i < cycles.length; i++) {
    const fi = flats[i];
    if (!fi || used.has(i)) continue;
    const holes: number[] = [];
    for (let j = 0; j < cycles.length; j++) {
      const fj = flats[j];
      if (j === i || !fj || used.has(j)) continue;
      if (dot3(fi.normal, fj.normal) > -0.999) continue; // a hole runs the other way round
      if (Math.abs(height(fi, pts[j][0])) > fi.eps) continue;
      if (!insideFlat(fi, pts[j][0])) continue;
      holes.push(j);
    }
    if (!holes.length) continue;
    const mine = [cycles[i], ...holes.map((j) => cycles[j])];
    const same = known?.(mine);
    if (same) {
      // the body's cap over the same loops: map its loop points onto these loops' order
      const at = new Map<number, number>();
      mine.flat().forEach((v, k) => at.set(v, k));
      const theirs = same.cycles.flat();
      const n = theirs.length;
      if (theirs.every((v) => at.has(v)) && n === at.size) {
        const tris = same.shape.tris.map((t) => t.map((k) => (k < n ? at.get(theirs[k])! : k)));
        used.add(i);
        holes.forEach((j) => used.add(j));
        groups.push({ cycles: mine, shape: { inner: same.shape.inner, tris }, normal: same.normal, fromBody: true });
        continue;
      }
    }
    const shape = capTidyHoles([pts[i], ...holes.map((j) => pts[j])]);
    if (!shape) continue;
    used.add(i);
    holes.forEach((j) => used.add(j));
    groups.push({ cycles: [cycles[i], ...holes.map((j) => cycles[j])], shape, normal: fi.normal });
  }
  for (let i = 0; i < cycles.length; i++) {
    if (used.has(i)) continue;
    const cycle = cycles[i];
    groups.push({ cycles: [cycle], shape: capShape(pts[i], (a, b) => hasEdge(pm, cycle[a], cycle[b])), normal: unit(pts[i]) });
  }
  return groups;
}

/**
 * Bits of other colours that the colour closes in on every side and that are smaller
 * than it (e.g. the unpainted bore of a painted chimney) go with it: cut off without
 * them they'd be left floating on the body. Returns a recoloured copy (same faces).
 */
function absorbEnclosed(pm: PaintMesh, colour: number): { pm: PaintMesh; added: number[] } {
  const fc = pm.faceColor;
  const others: number[] = [];
  let colourArea = 0;
  const area = pm.areas();
  for (let f = 0; f < pm.faceCount; f++) {
    if (fc[f] === colour) colourArea += area[f];
    else others.push(f);
  }
  const nb = pm.neighbours();
  const added: number[] = [];
  for (const island of islands(pm, others, (f) => fc[f] !== colour)) {
    let a = 0;
    for (const f of island) a += area[f];
    if (a >= colourArea) continue;
    let closed = true, touches = false;
    for (const f of island) {
      for (let e = 0; e < 3; e++) {
        const g = nb[3 * f + e];
        if (g < 0) closed = false;
        else if (fc[g] === colour) touches = true;
      }
    }
    if (closed && touches) added.push(...island);
  }
  if (!added.length) return { pm, added };
  const col = Uint8Array.from(fc);
  for (const f of added) col[f] = colour;
  return { pm: pm.withColours(col), added };
}

/**
 * Cut colour `colour` away from `pm` along its edge. Returns the new body (holes capped)
 * and the part (the solid faces, closed by the same caps), or a null part when it is all too thin.
 * Caps take the colour around the cut.
 */
function cutOff(painted: PaintMesh, colour: number, bodySlot: number, bvh: MeshBVH | null, minThickness: number, gap: number) {
  const faces0: number[] = [];
  for (let f = 0; f < painted.faceCount; f++) if (painted.faceColor[f] === colour) faces0.push(f);
  const solid0 = new Set(bvh && minThickness > 0 ? solidFaces(painted, faces0, bvh, minThickness) : faces0);
  const dropped = faces0.length - solid0.size;
  const { pm: pm0, added } = absorbEnclosed(painted, colour);
  for (const f of added) solid0.add(f);
  const { pm, origin } = keepHolesBehindCuts(pm0, colour);
  const isColour = (f: number) => pm.faceColor[f] === colour;
  const faces: number[] = [];
  for (let f = 0; f < pm.faceCount; f++) if (isColour(f)) faces.push(f);
  const solid = faces.filter((f) => solid0.has(origin[f]));
  const around = outsideColours(pm, colour);

  // the body: the colour comes off, each hole is capped
  const pos = Array.from(pm.positions);
  const idx: number[] = [];
  const colours: number[] = [];
  for (let f = 0; f < pm.faceCount; f++) {
    if (isColour(f)) continue;
    idx.push(pm.index[3 * f], pm.index[3 * f + 1], pm.index[3 * f + 2]);
    colours.push(pm.faceColor[f]);
  }
  const loopKey = (cycle: number[]) => cycle.map((v) => coordKey(pm.positions, v)).sort().join('|');
  const bodyCaps = new Map<string, { keys: string[]; shape: CapShape; normal: V3 }>();
  const bodyGroups = new Map<string, CapGroup>();
  for (const g of capGroups(pm, rimCycles(rimEdges(pm, faces, isColour)))) {
    const paint = around(g.cycles[0], bodySlot);
    const at: number[] = g.cycles.flat();
    const base = pos.length / 3;
    g.shape.inner.forEach((p, i) => {
      pos.push(...p);
      at.push(base + i);
    });
    for (const t of g.shape.tris) {
      idx.push(at[t[0]], at[t[1]], at[t[2]]);
      colours.push(paint);
    }
    if (g.cycles.length === 1) {
      const keys = g.cycles[0].map((v) => coordKey(pm.positions, v));
      bodyCaps.set(loopKey(g.cycles[0]), { keys, shape: g.shape, normal: g.normal });
    } else bodyGroups.set(g.cycles.map(loopKey).sort().join('/'), g);
  }
  const body = new PaintMesh(Float32Array.from(pos), Uint32Array.from(idx), Uint8Array.from(colours));

  if (!solid.length) return { body, part: null, dropped };

  // the part: the solid faces, closed by the body's caps where the rim is the same
  const b = new Builder();
  const copy = new Map<number, number>();
  const cv = (v: number) => {
    let i = copy.get(v);
    if (i === undefined) {
      i = b.vert(P(pm.positions, v));
      copy.set(v, i);
    }
    return i;
  };
  const inSolid = new Set(solid);
  for (const f of solid) b.tri(cv(pm.index[3 * f]), cv(pm.index[3 * f + 1]), cv(pm.index[3 * f + 2]));
  const gapVerts = new Map<number, V3>(); // part vertex -> move for the Cut Off Gap
  const joints: Joint[] = [];
  for (const g of capGroups(pm, rimCycles(rimEdges(pm, solid, (f) => inSolid.has(f))), (cycles) => bodyGroups.get(cycles.map(loopKey).sort().join('/')))) {
    let shape = g.shape;
    let normal: V3 | null = null;
    const cycle = g.cycles[0];
    if (g.cycles.length === 1) {
      const keys = cycle.map((v) => coordKey(pm.positions, v));
      const same = bodyCaps.get(loopKey(cycle));
      const n = cycle.length;
      if (same && same.keys.length === n && same.keys[(same.keys.indexOf(keys[0]) + 1) % n] === keys[1 % n]) {
        // the body's cap, re-indexed to this cycle's start (both run the same way)
        const shift = same.keys.indexOf(keys[0]);
        shape = { inner: same.shape.inner, tris: same.shape.tris.map((t) => t.map((i) => (i < n ? (i - shift + n) % n : i))) };
        normal = same.normal;
      }
    } else if (g.fromBody) normal = g.normal;
    const verts = g.cycles.flat().map(cv);
    for (const p of shape.inner) verts.push(b.vert(p));
    for (const t of shape.tris) b.tri(verts[t[0]], verts[t[2]], verts[t[1]]); // reversed
    if (normal) {
      const j = jointOf(cycle.map((v) => P(pm.positions, v)));
      if (j) joints.push({ ...j, normal });
      if (gap > 0) for (const v of verts) gapVerts.set(v, [normal[0] * gap, normal[1] * gap, normal[2] * gap]);
    }
  }
  for (const [v, mv] of gapVerts) for (let k = 0; k < 3; k++) b.pos[3 * v + k] += mv[k];
  return { body, part: b.mesh(), dropped, joints };
}

/**
 * The normal of the plane that fits a loop best (least squares over its edges, so dense
 * stretches don't count more), turned to point like `along`.
 */
function fitNormal(loop: V3[], along: V3): V3 {
  const n = loop.length;
  const c: V3 = [0, 0, 0];
  let total = 0;
  const w = loop.map((p, i) => {
    const q = loop[(i + 1) % n], r = loop[(i + n - 1) % n];
    return (Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) + Math.hypot(p[0] - r[0], p[1] - r[1], p[2] - r[2])) / 2;
  });
  loop.forEach((p, i) => {
    for (let k = 0; k < 3; k++) c[k] += p[k] * w[i];
    total += w[i];
  });
  if (total < 1e-12) return along;
  for (let k = 0; k < 3; k++) c[k] /= total;
  const m = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  loop.forEach((p, i) => {
    const d = [p[0] - c[0], p[1] - c[1], p[2] - c[2]];
    for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) m[3 * a + b] += w[i] * d[a] * d[b];
  });
  // smallest eigenvector: power iteration on (trace * I - M)
  const tr = m[0] + m[4] + m[8];
  let v: V3 = [along[0], along[1], along[2]];
  for (let it = 0; it < 100; it++) {
    const x: V3 = [0, 1, 2].map((a) => tr * v[a] - (m[3 * a] * v[0] + m[3 * a + 1] * v[1] + m[3 * a + 2] * v[2])) as V3;
    const l = Math.hypot(...x);
    if (l < 1e-20) return along;
    v = [x[0] / l, x[1] / l, x[2] / l];
  }
  if (dot3(v, along) < 0) v = [-v[0], -v[1], -v[2]];
  // a loop that is mostly a line (no plane to speak of) keeps its own winding normal
  if (dot3(v, along) < 0.5) v = along;
  return v;
}

/**
 * The plane to cut a rim loop at: of a few likely directions (the loop's own, its best fit,
 * the axes, the surface the colour stands on) the one that best keeps the colour on one side
 * and the rest on the other, near the loop. A painted edge follows the triangles, so it is
 * ragged: this finds the straight cut it stands for. Where the colour stands on a surface
 * (a chimney on a roof), the cut goes just above that surface.
 */
function bestPlane(pm: PaintMesh, cycle: number[], loop: V3[], own: V3, centre: V3, isPaint: (f: number) => boolean, eps: number): { n: V3; d: number } {
  const pos = pm.positions, ix = pm.index;
  let reach = 0;
  for (const p of loop) reach = Math.max(reach, Math.hypot(p[0] - centre[0], p[1] - centre[1], p[2] - centre[2]));
  // the faces near the loop: grown out from it, both sides, a few mm
  const R = Math.max(2, 0.25 * reach);
  const lg = new Map<string, number[]>();
  const cell = R;
  const ck = (x: number, y: number, z: number) => `${Math.floor(x / cell)},${Math.floor(y / cell)},${Math.floor(z / cell)}`;
  loop.forEach((p, i) => {
    const k = ck(p[0], p[1], p[2]);
    const l = lg.get(k);
    if (l) l.push(i);
    else lg.set(k, [i]);
  });
  const near = (x: number, y: number, z: number) => {
    const cx = Math.floor(x / cell), cy = Math.floor(y / cell), cz = Math.floor(z / cell);
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (let c = -1; c <= 1; c++) {
      for (const i of lg.get(`${cx + a},${cy + b},${cz + c}`) ?? []) {
        const p = loop[i];
        if ((p[0] - x) ** 2 + (p[1] - y) ** 2 + (p[2] - z) ** 2 < R * R) return true;
      }
    }
    return false;
  };
  const { start, faces: vfaces } = pm.vertexFaces();
  const nb = pm.neighbours();
  const band: number[] = [];
  const seen = new Set<number>();
  for (const v of cycle) for (let i = start[v]; i < start[v + 1]; i++) if (!seen.has(vfaces[i])) {
    seen.add(vfaces[i]);
    band.push(vfaces[i]);
  }
  const area = pm.areas();
  const ctr = (f: number): V3 => [0, 1, 2].map((k) => (pos[3 * ix[3 * f] + k] + pos[3 * ix[3 * f + 1] + k] + pos[3 * ix[3 * f + 2] + k]) / 3) as V3;
  for (let i = 0; i < band.length && band.length < 20000; i++) {
    for (let e = 0; e < 3; e++) {
      const g = nb[3 * band[i] + e];
      if (g < 0 || seen.has(g)) continue;
      seen.add(g);
      const c = ctr(g);
      if (near(c[0], c[1], c[2])) band.push(g);
    }
  }
  // candidate directions, all turned to point into the colour
  const cands: V3[] = [own, fitNormal(loop, own)];
  for (let a = 0; a < 3; a++) {
    const v: V3 = [0, 0, 0];
    v[a] = Math.sign(own[a]) || 1;
    if (dot3(v, own) > Math.cos((30 * Math.PI) / 180)) cands.push(v);
  }
  const ground: V3 = [0, 0, 0];
  for (const f of band) {
    if (isPaint(f)) continue;
    const fn = pm.normals();
    for (let k = 0; k < 3; k++) ground[k] += fn[3 * f + k] * area[f];
  }
  const gl = Math.hypot(...ground);
  if (gl > 1e-12 && dot3(ground, own) / gl > Math.cos((30 * Math.PI) / 180)) cands.push([ground[0] / gl, ground[1] / gl, ground[2] / gl]);

  let best: { n: V3; d: number; score: number } | null = null;
  for (const n of cands) {
    const hs = band.map((f) => ({ h: dot3(n, ctr(f)), a: area[f], paint: isPaint(f), f }));
    hs.sort((x, y) => x.h - y.h);
    // cut after position i: below = body side, above = colour side
    let wrong = 0;
    for (const x of hs) if (!x.paint) wrong += x.a; // everything on the colour side at first
    let bestI = -1, bestWrong = wrong;
    for (let i = 0; i < hs.length; i++) {
      wrong += hs[i].paint ? hs[i].a : -hs[i].a;
      if (wrong < bestWrong - 1e-9) [bestWrong, bestI] = [wrong, i];
    }
    const below = hs[bestI]?.h ?? (hs[0]?.h ?? 0) - eps;
    const above = hs[bestI + 1]?.h ?? below + eps;
    // the top of the surface the colour stands on, when it is clear of the colour
    let top = -Infinity;
    for (let i = 0; i <= bestI; i++) {
      if (hs[i].paint) continue;
      const f = hs[i].f;
      for (let k = 0; k < 3; k++) top = Math.max(top, dot3(n, P(pos, ix[3 * f + k])));
    }
    const d = top > -Infinity && top < above ? top + eps : (below + above) / 2;
    // an axis gets a little head start: models are mostly drawn square
    const axis = Math.max(Math.abs(n[0]), Math.abs(n[1]), Math.abs(n[2])) === 1;
    const score = bestWrong * (axis ? 0.9 : 1);
    if (!best || score < best.score) best = { n, d, score };
  }
  return best ?? { n: own, d: dot3(own, centre) };
}

/** A plane a colour's edge lies in (about): n·x = d, with the edge's outline. */
interface CutPlane {
  n: V3;
  d: number;
  /** The edge loops in this plane (the first is the biggest). */
  loops: V3[][];
  area: number;
  paint: number;
}

/**
 * The planes to cut a colour off along: one per edge loop, fitted to the loop. Loops that
 * lie in the same plane (an outline and its holes) share one. Biggest first, at most 16.
 */
function cutPlanes(pm: PaintMesh, isPaint: (f: number) => boolean, colour: number, bodySlot: number): CutPlane[] {
  const faces: number[] = [];
  for (let f = 0; f < pm.faceCount; f++) if (isPaint(f)) faces.push(f);
  const around = outsideColours(pm, colour);
  let size = 0;
  {
    const p = pm.positions;
    const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
    for (let i = 0; i < p.length; i++) {
      lo[i % 3] = Math.min(lo[i % 3], p[i]);
      hi[i % 3] = Math.max(hi[i % 3], p[i]);
    }
    size = Math.hypot(hi[0] - lo[0], hi[1] - lo[1], hi[2] - lo[2]);
  }
  const eps = Math.max(0.02, size * 1e-3);
  const planes: CutPlane[] = [];
  for (const cycle of rimCycles(rimEdges(pm, faces, isPaint))) {
    const loop = cycle.map((v) => P(pm.positions, v));
    const { centre, normal: raw } = loopFrame(loop);
    const l = Math.hypot(...raw);
    if (l < 1e-9) continue;
    const { n, d } = bestPlane(pm, cycle, loop, [raw[0] / l, raw[1] / l, raw[2] / l], centre, isPaint, eps);
    planes.push({ n, d, loops: [loop], area: l / 2, paint: around(cycle, bodySlot) });
  }
  planes.sort((a, b) => b.area - a.area);
  const out: CutPlane[] = [];
  for (const pl of planes) {
    const same = out.find((o) => Math.abs(dot3(o.n, pl.n)) > 0.999 && Math.abs(o.d - Math.sign(dot3(o.n, pl.n)) * pl.d) < eps);
    if (same) same.loops.push(...pl.loops);
    else if (out.length < 16) out.push(pl);
  }
  return out;
}

/**
 * Cut Off with straight cuts (Manifold). Every edge loop of the colour gets a flat cut in
 * the plane that fits it best, only as wide as the loop (a disc, a little wider so the ragged
 * edge is covered). The model falls apart at the cuts, and the pieces that are mostly the
 * colour become the part. Exact and closed, and the cut is flat even where the painted edge
 * is ragged. Null when that doesn't work out (the model isn't a closed solid, or the cuts
 * don't free the colour because its edge isn't flat): then the edge-following cut is used.
 */
async function planeCut(painted: PaintMesh, colour: number, bodySlot: number, bvh: MeshBVH | null, minThickness: number, gap: number) {
  const wasm = await loadManifold();
  const { Manifold, Mesh, CrossSection } = wasm;
  type Man = InstanceType<typeof Manifold>;
  const garbage = new Set<{ delete(): void }>();
  const keep = <T extends { delete(): void }>(m: T) => (garbage.add(m), m);
  const done = <T,>(v: T) => {
    garbage.forEach((g) => g.delete());
    return v;
  };
  try {
    const faces0: number[] = [];
    for (let f = 0; f < painted.faceCount; f++) if (painted.faceColor[f] === colour) faces0.push(f);
    const solid = new Set(bvh && minThickness > 0 ? solidFaces(painted, faces0, bvh, minThickness) : faces0);
    const dropped = faces0.length - solid.size;
    const { pm, added } = absorbEnclosed(painted, colour);
    for (const f of added) solid.add(f);
    const isPaint = (f: number) => solid.has(f);
    const planes = cutPlanes(pm, isPaint, colour, bodySlot);
    if (!planes.length) return done(null);

    const modelID = Manifold.reserveIDs(1);
    const mesh = new Mesh({
      numProp: 3, vertProperties: pm.positions, triVerts: pm.index,
      faceID: Uint32Array.from({ length: pm.faceCount }, (_, i) => i),
      runIndex: Uint32Array.of(0, pm.index.length), runOriginalID: Uint32Array.of(modelID),
    });
    mesh.merge();
    const model = keep(new Manifold(mesh));
    if (model.status() !== 'NoError' || model.isEmpty()) return done(null);
    const area = pm.areas();
    let paintTotal = 0;
    for (const f of solid) paintTotal += area[f];

    // a disc per plane: the loops seen in the plane, grown a little, as a thin slab (or a
    // thicker one, for the gap), placed in the plane
    const T = 0.002; // the slab the model is parted with (mm)
    const discs = planes.map((pl) => {
      const [u, w] = orthoBasis(pl.n);
      const o: V3 = [pl.n[0] * pl.d, pl.n[1] * pl.d, pl.n[2] * pl.d];
      let rag = 0;
      const polys = pl.loops.map((loop) => {
        const poly = loop.map((p): [number, number] => {
          const q: V3 = [p[0] - o[0], p[1] - o[1], p[2] - o[2]];
          rag = Math.max(rag, Math.abs(dot3(q, pl.n)));
          return [dot3(q, u), dot3(q, w)];
        });
        let a = 0;
        for (let i = 0; i < poly.length; i++) a += poly[i][0] * poly[(i + 1) % poly.length][1] - poly[(i + 1) % poly.length][0] * poly[i][1];
        return a < 0 ? poly.reverse() : poly; // all one way round: the disc covers every loop
      });
      const cs = keep(keep(new CrossSection(polys, 'Positive')).offset(Math.min(Math.max(0.5, rag * 2), 3), 'Round', 2, 16));
      const slab = (from: number, to: number) => {
        const m = keep(Manifold.extrude(cs, to - from));
        // local x, y, z -> u, w, n, from the plane's origin, lifted to `from`
        return keep(m.transform([u[0], u[1], u[2], 0, w[0], w[1], w[2], 0, pl.n[0], pl.n[1], pl.n[2], 0, o[0] + pl.n[0] * from, o[1] + pl.n[1] * from, o[2] + pl.n[2] * from, 1]));
      };
      return { pl, slab };
    });
    const slabs = keep(Manifold.union(discs.map((c) => c.slab(-T / 2, T / 2))));
    const apart = keep(model.subtract(slabs));
    const inSlabs = keep(model.intersect(slabs));

    // the pieces that are mostly the colour (by the model's own surface in them)
    const chosen: Man[] = [];
    const rest: Man[] = [inSlabs];
    let paintArea = 0;
    for (const comp of apart.decompose()) {
      keep(comp);
      const m = comp.getMesh();
      let yes = 0, no = 0;
      for (let r = 0; r < m.runOriginalID.length; r++) {
        if (m.runOriginalID[r] !== modelID) continue;
        for (let t = m.runIndex[r] / 3; t < m.runIndex[r + 1] / 3; t++) {
          const f = m.faceID[t];
          if (isPaint(f)) yes += area[f];
          else no += area[f];
        }
      }
      // (faces split by a cut count with their whole area: good enough to weigh pieces)
      if (yes > no) {
        chosen.push(comp);
        paintArea += yes;
      } else rest.push(comp);
    }
    // the cuts didn't free most of the colour: its edge isn't flat, or it is only a patch
    // on the surface. Nothing is cut (the edge-following cut makes a mess of these).
    if (paintArea < 0.5 * paintTotal) return done({ body: painted, part: null, dropped, joints: [] as Joint[], thin: false, notFreed: true });

    const around = (p: V3) => {
      let best = bodySlot, near = Infinity;
      for (const pl of planes) {
        const h = Math.abs(dot3(pl.n, p) - pl.d);
        if (h < near) [near, best] = [h, pl.paint];
      }
      return best;
    };
    const toBody = (man: Man) => {
      const m = man.getMesh();
      const t = fromManifoldMesh(m);
      const col = new Uint8Array(t.index.length / 3);
      const fromModel = new Uint8Array(col.length);
      for (let r = 0; r < m.runOriginalID.length; r++) {
        if (m.runOriginalID[r] !== modelID) continue;
        for (let k = m.runIndex[r] / 3; k < m.runIndex[r + 1] / 3; k++) {
          const f = m.faceID[k];
          col[k] = pm.faceColor[f];
          // the colour left on the body (thin bits, a bore below the cut) takes the colour
          // around the cut, like the cut face
          fromModel[k] = pm.faceColor[f] === colour ? 0 : 1;
        }
      }
      for (let k = 0; k < col.length; k++) {
        if (fromModel[k]) continue;
        const c = [0, 1, 2].map((j) => (t.positions[3 * t.index[3 * k] + j] + t.positions[3 * t.index[3 * k + 1] + j] + t.positions[3 * t.index[3 * k + 2] + j]) / 3) as V3;
        col[k] = around(c);
      }
      return new PaintMesh(t.positions, t.index, col);
    };
    // the body: the other pieces and the slabs put back together
    const body = toBody(keep(Manifold.union(rest)));
    let partMan = keep(Manifold.union(chosen));

    // which side of each cut the part is on: joints, the gap
    const joints: Joint[] = [];
    let capArea = 0;
    const probe = 0.05;
    for (const { pl, slab } of discs) {
      const front = keep(partMan.intersect(slab(T / 2, T / 2 + probe))).volume();
      const back = keep(partMan.intersect(slab(-T / 2 - probe, -T / 2))).volume();
      if (front < 1e-9 && back < 1e-9) continue;
      const side = front >= back ? 1 : -1;
      capArea += pl.area;
      const n: V3 = side > 0 ? pl.n : [-pl.n[0], -pl.n[1], -pl.n[2]];
      const flat = pl.loops[0].map((p): V3 => {
        const h = dot3(pl.n, p) - pl.d;
        return [p[0] - pl.n[0] * h, p[1] - pl.n[1] * h, p[2] - pl.n[2] * h];
      });
      const j = jointOf(flat);
      if (j) joints.push({ ...j, normal: n });
      if (gap > 0) partMan = keep(partMan.subtract(side > 0 ? slab(0, T / 2 + gap) : slab(-T / 2 - gap, 0)));
    }
    const part = partMan.isEmpty() ? null : fromManifoldMesh(partMan.getMesh());
    // a patch on the surface cut off is a skin about as big as its cut: Inlay is meant for that
    const thin = capArea > 0.75 * paintArea;
    return done({ body, part, dropped, joints, thin, notFreed: false });
  } catch (err) {
    console.warn('straight cut failed', err);
    return done(null);
  }
}

/**
 * Closed pieces of the mesh painted all in one of `colours` (shells modelled on their own,
 * like eyeballs pushed into a head): taken out of the mesh, each colour's shells as one mesh.
 */
function detachShells(pm: PaintMesh, colours: Set<number>): { rest: PaintMesh; shells: Map<number, TriMesh> } {
  const shells = new Map<number, TriMesh>();
  const nb = pm.neighbours();
  const all = Array.from({ length: pm.faceCount }, (_, f) => f);
  const take = new Uint8Array(pm.faceCount);
  const byColour = new Map<number, number[]>();
  for (const comp of islands(pm, all, () => true)) {
    const c = pm.faceColor[comp[0]];
    if (!colours.has(c) || comp.length === pm.faceCount) continue;
    if (!comp.every((f) => pm.faceColor[f] === c && nb[3 * f] >= 0 && nb[3 * f + 1] >= 0 && nb[3 * f + 2] >= 0)) continue;
    for (const f of comp) take[f] = 1;
    const l = byColour.get(c);
    if (l) l.push(...comp);
    else byColour.set(c, comp);
  }
  if (!byColour.size) return { rest: pm, shells };
  const sub = (faces: number[]) => {
    const map = new Map<number, number>();
    const pos: number[] = [];
    const idx: number[] = [];
    for (const f of faces) {
      for (let k = 0; k < 3; k++) {
        const v = pm.index[3 * f + k];
        let i = map.get(v);
        if (i === undefined) {
          i = map.size;
          map.set(v, i);
          pos.push(pm.positions[3 * v], pm.positions[3 * v + 1], pm.positions[3 * v + 2]);
        }
        idx.push(i);
      }
    }
    return { positions: Float32Array.from(pos), index: Uint32Array.from(idx) };
  };
  for (const [c, faces] of byColour) shells.set(c, sub(faces));
  const keep = all.filter((f) => !take[f]);
  const m = sub(keep);
  return {
    rest: new PaintMesh(m.positions, m.index, Uint8Array.from(keep, (f) => pm.faceColor[f]), Uint16Array.from(keep, (f) => pm.faceObject[f])),
    shells,
  };
}

// ---------------------------------------------------------------------------
// Building the parts
// ---------------------------------------------------------------------------

/** Work out the body colour and every part, without booleans (also used for the preview). */
export async function buildParts(src: PaintMesh, colours: number, o: SplitOptions): Promise<BuildResult> {
  const areas = colourAreas(src, colours);
  const bodyIndex = pickBody(areas, o.bodyChoice);
  if (bodyIndex === null || areas.filter((a) => a > 0).length < 2) return { bodyIndex, parts: [], work: src };
  const wanted = areas.map((_, i) => i).filter((i) => i !== bodyIndex && areas[i] > 0 && o.cut[i] !== false);
  const cutOffs = wanted.filter((i) => o.mode[i] === 'cutoff');
  const parts: PartInfo[] = [];
  const notFreed: number[] = [];
  let work = src;
  // pieces of the model that are whole shells in one colour (e.g. eyes modelled as balls
  // stuck into the head) are parts as they are: no cut, no flat bottom; the body gets a
  // pocket for them like for an inlay
  {
    const { rest, shells } = detachShells(work, new Set(wanted));
    work = rest;
    for (const [c, shape] of shells) parts.push({ colour: c, shape, report: newReport(), area: areas[c], cutOff: false });
  }
  if (cutOffs.length) {
    const whole = o.minThickness > 0 ? makeBvh(src.positions, src.index) : null;
    for (const c of cutOffs) {
      const straight = await planeCut(work, c, bodyIndex, whole, o.minThickness, o.cutOffGap);
      const { body, part, dropped, joints } = straight ?? cutOff(work, c, bodyIndex, whole, o.minThickness, o.cutOffGap);
      work = body;
      const report = newReport();
      report.dropped = dropped;
      if (straight?.thin) report.flat = true;
      if (straight?.notFreed) notFreed.push(c);
      if (part) parts.push({ colour: c, shape: part, report, area: areas[c], cutOff: true, joints });
    }
  }
  const inlays = wanted.filter((i) => !cutOffs.includes(i));
  if (!inlays.length) return { bodyIndex, parts, work, notFreed };
  const bvh = makeBvh(work.positions, work.index);
  const eps = Math.max(o.depth, o.tolerance) * 1e-3;
  const model = o.flatBottom ? null : vertexNormals(work.positions, work.index);
  for (const c of inlays) {
    const faces: number[] = [];
    for (let f = 0; f < work.faceCount; f++) if (work.faceColor[f] === c) faces.push(f);
    if (!faces.length) continue; // all of it was whole shells
    if (o.flatBottom) {
      const { shape, report } = flatSolid(work, faces, o.depth, bvh, o.tolerance, eps);
      parts.push({ colour: c, shape, report, area: areas[c], cutOff: false });
    } else {
      // the pocket is depth + tolerance deep; the part, pulled in by the tolerance,
      // is `depth` thick with its top flush with the surface
      const { mesh, kind, topOf } = surfaceSolid(work, faces, o.depth + o.tolerance, model!);
      shrinkPart(mesh, kind, o.tolerance);
      const report = surfaceReport(work, faces, bvh, o.depth, o.tolerance, eps, model!, (v) => topOf.get(v)!);
      parts.push({ colour: c, shape: mesh, report, area: areas[c], cutOff: false });
    }
  }
  return { bodyIndex, parts, work, notFreed };
}

// ---------------------------------------------------------------------------
// Booleans (Manifold, loaded on first use)
// ---------------------------------------------------------------------------

type ManifoldTop = Awaited<ReturnType<typeof import('manifold-3d').default>>;
let manifoldPromise: Promise<ManifoldTop> | null = null;
let manifoldWasmUrl: string | undefined;

/** Where manifold.wasm is served from (set by the app; Node tests find it themselves). */
export function setManifoldWasmUrl(url: string) {
  manifoldWasmUrl = url;
}

export function loadManifold(): Promise<ManifoldTop> {
  if (!manifoldPromise) {
    manifoldPromise = import('manifold-3d').then(async (m) => {
      const wasm = await m.default(manifoldWasmUrl ? { locateFile: () => manifoldWasmUrl! } : undefined);
      wasm.setup();
      return wasm;
    });
  }
  return manifoldPromise;
}

/** Split the model: the body plus one part per cut colour. */
export async function splitColours(src: PaintMesh, colours: number, o: SplitOptions): Promise<SplitResult | null> {
  const { bodyIndex, parts: infos, work, notFreed } = await buildParts(src, colours, o);
  if (bodyIndex === null) return null;
  if (!infos.length) {
    if (!notFreed?.length) return null;
    // nothing could be cut: say why (the caller shows the warnings and keeps the model)
    return { bodyIndex, body: { positions: work.positions, index: work.index, faceColor: work.faceColor }, parts: [], warnings: notFreed.map((colour) => ({ kind: 'notFreed', colour })) };
  }
  const warnings: Warning[] = (notFreed ?? []).map((colour) => ({ kind: 'notFreed', colour }));
  const parts: SplitResult['parts'] = [];
  for (const info of infos) {
    if (!info.cutOff) continue;
    if (info.report.dropped) warnings.push({ kind: 'dropped', colour: info.colour, faces: info.report.dropped });
    if (info.report.flat) warnings.push({ kind: 'flatPatch', colour: info.colour });
    parts.push({ colour: info.colour, mesh: info.shape, cutOff: true, joints: info.joints });
  }
  const inlays = infos.filter((i) => !i.cutOff);
  for (const info of inlays) {
    if (info.report.tooCurved) warnings.push({ kind: 'curved', colour: info.colour });
    if (info.report.worst) warnings.push({ kind: 'thin', colour: info.colour, have: info.report.worst[0], need: info.report.worst[1] });
  }
  const cutSlots = new Set(infos.map((i) => i.colour));
  let body: TriMesh & { faceColor: Uint8Array };

  if (!inlays.length) {
    body = { positions: work.positions, index: work.index, faceColor: work.faceColor.slice() };
  } else if (!o.flatBottom) {
    for (const info of inlays) parts.push({ colour: info.colour, mesh: info.shape, cutOff: false });
    const inlaySlots = new Set(inlays.map((i) => i.colour));
    body = surfaceBody(work, (c) => inlaySlots.has(c), o.depth + o.tolerance, vertexNormals(work.positions, work.index), bodyIndex);
  } else {
    const wasm = await loadManifold();
    const { Manifold, Mesh } = wasm;
    const garbage = new Set<{ delete(): void }>();
    const toManifold = (m: TriMesh, faceID?: Uint32Array) => {
      const mesh = new Mesh({ numProp: 3, vertProperties: m.positions, triVerts: m.index, faceID });
      mesh.merge();
      const man = new Manifold(mesh);
      garbage.add(man);
      return man;
    };
    let bodyMan;
    const bodyID = Manifold.reserveIDs(1);
    try {
      const mesh = new Mesh({
        numProp: 3, vertProperties: work.positions, triVerts: work.index,
        faceID: Uint32Array.from({ length: work.faceCount }, (_, i) => i),
        runIndex: Uint32Array.of(0, work.index.length), runOriginalID: Uint32Array.of(bodyID),
      });
      mesh.merge();
      bodyMan = new Manifold(mesh);
      garbage.add(bodyMan);
      if (bodyMan.status() !== 'NoError') throw new Error(bodyMan.status());
    } catch {
      garbage.forEach((g) => g.delete());
      return { bodyIndex, body: { positions: work.positions, index: work.index, faceColor: work.faceColor }, parts: [], warnings: [{ kind: 'notClosed' }] };
    }
    const eps = Math.max(o.depth, o.tolerance) * 1e-3;
    let pockets: InstanceType<typeof Manifold> | null = null;
    // Bigger parts stay whole; smaller ones are trimmed by the pockets made so far.
    for (const info of [...inlays].sort((a, b) => b.area - a.area)) {
      let partMan;
      try {
        partMan = toManifold(info.shape);
        if (partMan.status() !== 'NoError' || partMan.isEmpty()) throw new Error('bad part');
      } catch {
        warnings.push({ kind: 'failed', colour: info.colour });
        continue;
      }
      if (pockets) {
        partMan = partMan.subtract(pockets);
        garbage.add(partMan);
      }
      const pm = partMan.getMesh();
      if (!pm.triVerts.length) warnings.push({ kind: 'covered', colour: info.colour });
      else parts.push({ colour: info.colour, mesh: fromManifoldMesh(pm), cutOff: false });
      try {
        const pocket = toManifold(grow(info.shape, Math.max(o.tolerance, eps)));
        pockets = pockets ? Manifold.union(pockets, pocket) : pocket;
        garbage.add(pockets);
      } catch {
        warnings.push({ kind: 'failed', colour: info.colour });
      }
    }
    const cut = pockets ? bodyMan.subtract(pockets) : bodyMan;
    garbage.add(cut);
    const mesh = cut.getMesh();
    const tri = mesh.triVerts.length / 3;
    const faceColor = new Uint8Array(tri).fill(bodyIndex);
    for (let r = 0; r < mesh.runOriginalID.length; r++) {
      if (mesh.runOriginalID[r] !== bodyID) continue;
      for (let t = mesh.runIndex[r] / 3; t < mesh.runIndex[r + 1] / 3; t++) faceColor[t] = work.faceColor[mesh.faceID[t]];
    }
    body = { ...fromManifoldMesh(mesh), faceColor };
    garbage.forEach((g) => g.delete());
  }

  if (o.connector?.enabled && parts.some((p) => p.joints?.length)) {
    body = await addConnectors(body, parts, o.connector, o.cutOffGap, bodyIndex, warnings);
  }

  // body colours: cut colours (pocket walls, leftovers) become the body colour; the rest
  // stay painted with keepUncut, else everything is the body colour
  body.faceColor = body.faceColor.map((c) => (!o.keepUncut || cutSlots.has(c) ? bodyIndex : c));
  return { bodyIndex, body, parts, warnings };
}

/** Pegs on one side of every Cut Off joint and sockets in the other (Manifold booleans). */
async function addConnectors(
  body: TriMesh & { faceColor: Uint8Array },
  parts: SplitResult['parts'],
  co: ConnectorOptions,
  gap: number,
  bodyIndex: number,
  warnings: Warning[],
): Promise<TriMesh & { faceColor: Uint8Array }> {
  const wasm = await loadManifold();
  const { Manifold, Mesh } = wasm;
  const garbage = new Set<{ delete(): void }>();
  const keep = <T extends { delete(): void }>(m: T) => (garbage.add(m), m);
  const solid = (m: TriMesh) => {
    const mesh = new Mesh({ numProp: 3, vertProperties: m.positions, triVerts: m.index });
    mesh.merge();
    return keep(new Manifold(mesh));
  };
  const bodyID = Manifold.reserveIDs(1);
  let bodyMan;
  try {
    const mesh = new Mesh({
      numProp: 3, vertProperties: body.positions, triVerts: body.index,
      faceID: Uint32Array.from({ length: body.index.length / 3 }, (_, i) => i),
      runIndex: Uint32Array.of(0, body.index.length), runOriginalID: Uint32Array.of(bodyID),
    });
    mesh.merge();
    bodyMan = keep(new Manifold(mesh));
    if (bodyMan.status() !== 'NoError') throw new Error(bodyMan.status());
  } catch {
    garbage.forEach((g) => g.delete());
    warnings.push({ kind: 'notClosed' });
    return body;
  }
  const reach = connectorReach(co);
  for (const part of parts) {
    if (!part.cutOff || !part.joints?.length) continue;
    try {
      let partMan = solid(part.mesh);
      if (partMan.status() !== 'NoError') throw new Error('part');
      let changed = false;
      for (const j of part.joints.flatMap((jt) => connectorJoints(jt, co))) {
        if (j.room < reach) {
          warnings.push({ kind: 'connectorTooBig', colour: part.colour, room: j.room });
          continue;
        }
        if (socketGoesThrough(co.pegOn === 'body' ? part.mesh : body, j, co, gap)) {
          warnings.push({ kind: 'connectorThrough', colour: part.colour, onBody: co.pegOn !== 'body' });
        }
        const embed = pegEmbed(co.pegOn === 'body' ? body : part.mesh, j, co, gap);
        const { peg, socket } = connectorShapes(j, co, gap, embed);
        const pegMan = solid(peg), socketMan = solid(socket);
        if (co.pegOn === 'body') {
          bodyMan = keep(bodyMan.add(pegMan));
          partMan = keep(partMan.subtract(socketMan));
        } else {
          partMan = keep(partMan.add(pegMan));
          bodyMan = keep(bodyMan.subtract(socketMan));
        }
        changed = true;
      }
      if (changed) part.mesh = fromManifoldMesh(partMan.getMesh());
    } catch {
      warnings.push({ kind: 'connectorFailed', colour: part.colour });
    }
  }
  const mesh = bodyMan.getMesh();
  const tri = mesh.triVerts.length / 3;
  const faceColor = new Uint8Array(tri).fill(bodyIndex);
  for (let r = 0; r < mesh.runOriginalID.length; r++) {
    if (mesh.runOriginalID[r] !== bodyID) continue;
    for (let t = mesh.runIndex[r] / 3; t < mesh.runIndex[r + 1] / 3; t++) faceColor[t] = body.faceColor[mesh.faceID[t]];
  }
  garbage.forEach((g) => g.delete());
  return { ...fromManifoldMesh(mesh), faceColor };
}

const bvhCache = new WeakMap<Uint32Array, MeshBVH>();

/** Where a ray along `dir` from `origin` first enters the mesh (0 when it starts inside) and then leaves it. */
function crossing(m: TriMesh, origin: V3, dir: V3): { entry: number; exit: number } | null {
  const ray = new THREE.Ray(new THREE.Vector3(...origin), new THREE.Vector3(...dir));
  let bvh = bvhCache.get(m.index);
  if (!bvh || bvh.geometry.getAttribute('position').array !== m.positions) {
    bvh = makeBvh(m.positions, m.index);
    bvhCache.set(m.index, bvh);
  }
  const hits = bvh.raycast(ray, THREE.DoubleSide).sort((a, b) => a.distance - b.distance);
  let entry: number | null = null;
  for (const h of hits) {
    const n = h.face?.normal;
    if (!n) continue;
    const out = n.x * dir[0] + n.y * dir[1] + n.z * dir[2] > 0;
    if (!out) entry ??= h.distance;
    else return { entry: entry ?? 0, exit: h.distance };
  }
  return null;
}

/**
 * Whether the socket would come out of the far side of `other` (the piece that gets it),
 * keeping a 0.4 mm wall. `other` may also be the whole model when the socket goes in the body.
 */
export function socketGoesThrough(other: TriMesh, j: Joint, co: ConnectorOptions, gap: number): boolean {
  const { base, axis } = pegFrame(j, co, gap);
  const back = co.size + gap;
  const origin: V3 = [base[0] - axis[0] * back, base[1] - axis[1] * back, base[2] - axis[2] * back];
  const c = crossing(other, origin, axis);
  if (!c) return false;
  const tip = back + gap + co.length + co.tolerance;
  return tip > c.exit - 0.4;
}

/**
 * How deep the peg can reach back into its own piece: down to the cut surface at least
 * (plus a little, so it joins), at most the peg size and never closer than 0.4 mm to the
 * piece's far side, so it can't poke out of a thin piece.
 */
export function pegEmbed(own: TriMesh, j: Joint, co: ConnectorOptions, gap: number): number {
  const { base, axis } = pegFrame(j, co, gap);
  const lift = Math.max(co.size, 2);
  const origin: V3 = [base[0] + axis[0] * lift, base[1] + axis[1] * lift, base[2] + axis[2] * lift];
  const c = crossing(own, origin, [-axis[0], -axis[1], -axis[2]]);
  if (!c) return Math.max(co.size, 1);
  const surface = c.entry - lift; // below the base (negative when the cut bulges out)
  const back = c.exit - lift;
  return Math.max(surface + 0.2, 0.05, Math.min(co.size, back - 0.4));
}

function fromManifoldMesh(m: { vertProperties: Float32Array; triVerts: Uint32Array; numProp: number }): TriMesh {
  if (m.numProp === 3) return { positions: m.vertProperties.slice(), index: m.triVerts.slice() };
  const vc = m.vertProperties.length / m.numProp;
  const positions = new Float32Array(vc * 3);
  for (let v = 0; v < vc; v++) for (let k = 0; k < 3; k++) positions[3 * v + k] = m.vertProperties[v * m.numProp + k];
  return { positions, index: m.triVerts.slice() };
}

/** Edges not shared by exactly two faces (0 for a closed, printable solid). */
export function openEdges(m: TriMesh): number {
  const count = new Map<string, number>();
  for (let f = 0; f < m.index.length / 3; f++) {
    for (let e = 0; e < 3; e++) {
      const a = m.index[3 * f + e], b = m.index[3 * f + ((e + 1) % 3)];
      const k = a < b ? `${a},${b}` : `${b},${a}`;
      count.set(k, (count.get(k) ?? 0) + 1);
    }
  }
  let open = 0;
  for (const n of count.values()) if (n !== 2) open++;
  return open;
}
