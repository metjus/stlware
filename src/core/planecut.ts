/**
 * Straight cuts: part a model along a plane. Where the plane meets the model it shows one
 * or more sections (a hand cut across the fingers: one per finger). Every section can be
 * cut or left whole, so a cut can take off just one finger.
 *
 * The cut is a very thin slab (Manifold) over the chosen sections only: the model minus the
 * slab falls apart into the pieces. Faces keep their colour; the new faces of the cut take
 * the colour of the surface next to them.
 */
import { PaintMesh, subsetMesh } from './mesh';
import { orthoBasis, type V3 } from './cap';
import { fromManifoldMesh, joinShells, loadManifold, pegEmbed, socketGoesThrough, type TriMesh } from './split';
import { connectorReach, connectorShapes, type ConnectorOptions, type Joint } from './connector';

/** A plane: the points p with n · p = d (n of length 1). */
export interface CutPlane {
  n: V3;
  d: number;
}

export type P2 = [number, number];

/** One separate piece of the model's cross-section in the plane (an outline and its holes). */
export interface Section {
  /** Outline(s) in the plane's own 2D frame (see `planeFrame`), outer ones anticlockwise. */
  polys: P2[][];
  /** mm². */
  area: number;
  /** A point well inside it (model space), for a label. */
  centre: V3;
  /** 2D bounds [minX, minY, maxX, maxY]. */
  box: [number, number, number, number];
}

/** The plane's 2D frame: model point p -> ((p - o) · u, (p - o) · w). */
export function planeFrame(pl: CutPlane) {
  const [u, w] = orthoBasis(pl.n);
  const o: V3 = [pl.n[0] * pl.d, pl.n[1] * pl.d, pl.n[2] * pl.d];
  const to2 = (p: ArrayLike<number>): P2 => {
    const x = p[0] - o[0], y = p[1] - o[1], z = p[2] - o[2];
    return [x * u[0] + y * u[1] + z * u[2], x * w[0] + y * w[1] + z * w[2]];
  };
  const to3 = (q: P2): V3 => [o[0] + u[0] * q[0] + w[0] * q[1], o[1] + u[1] * q[0] + w[1] * q[1], o[2] + u[2] * q[0] + w[2] * q[1]];
  return { u, w, o, to2, to3 };
}

/** Normal from tilt (angle from Z, degrees) and turn (around Z from X, degrees). */
export function normalFromAngles(tilt: number, turn: number): V3 {
  const t = (tilt * Math.PI) / 180, a = (turn * Math.PI) / 180;
  return [Math.sin(t) * Math.cos(a), Math.sin(t) * Math.sin(a), Math.cos(t)];
}

export function anglesOfNormal(n: V3): { tilt: number; turn: number } {
  const tilt = (Math.acos(Math.max(-1, Math.min(1, n[2]))) * 180) / Math.PI;
  let turn = Math.hypot(n[0], n[1]) < 1e-9 ? 0 : (Math.atan2(n[1], n[0]) * 180) / Math.PI;
  if (turn < 0) turn += 360;
  return { tilt, turn };
}

/**
 * Where the plane cuts the triangles, chained into closed loops (2D, plane frame). Each
 * loop runs the same way round relative to the material, so outlines and holes come out
 * opposite ways round. `skip` leaves faces out (hidden models).
 */
export function sliceLoops(pm: PaintMesh, pl: CutPlane, skip?: Uint8Array | null): P2[][] {
  const { n, d } = pl;
  const P = pm.positions, I = pm.index;
  const h = new Float64Array(pm.vertexCount);
  for (let v = 0; v < pm.vertexCount; v++) h[v] = n[0] * P[3 * v] + n[1] * P[3 * v + 1] + n[2] * P[3 * v + 2] - d;
  const { to2 } = planeFrame(pl);
  const V = pm.vertexCount;
  // segment from the point on the edge going above -> below to the one going below -> above
  const next = new Map<number, number>(); // edge key where a segment starts -> where it ends
  const point = new Map<number, P2>();
  const at = (a: number, b: number) => {
    const key = a < b ? a * V + b : b * V + a;
    if (!point.has(key)) {
      const t = h[a] / (h[a] - h[b]);
      const p = [0, 1, 2].map((k) => P[3 * a + k] + (P[3 * b + k] - P[3 * a + k]) * t);
      point.set(key, to2(p));
    }
    return key;
  };
  for (let f = 0; f < pm.faceCount; f++) {
    if (skip && skip[f]) continue;
    const a = I[3 * f], b = I[3 * f + 1], c = I[3 * f + 2];
    const sa = h[a] > 0, sb = h[b] > 0, sc = h[c] > 0;
    if (sa === sb && sb === sc) continue;
    let down = -1, up = -1;
    const tri = [a, b, c], s = [sa, sb, sc];
    for (let k = 0; k < 3; k++) {
      const i = tri[k], j = tri[(k + 1) % 3];
      if (s[k] && !s[(k + 1) % 3]) down = at(i, j);
      else if (!s[k] && s[(k + 1) % 3]) up = at(i, j);
    }
    if (down >= 0 && up >= 0) next.set(down, up);
  }
  const loops: P2[][] = [];
  const used = new Set<number>();
  for (const start of next.keys()) {
    if (used.has(start)) continue;
    const loop: P2[] = [];
    let k: number | undefined = start;
    while (k !== undefined && !used.has(k)) {
      used.add(k);
      loop.push(point.get(k)!);
      k = next.get(k);
    }
    if (loop.length >= 3) loops.push(loop);
  }
  return loops;
}

const signedArea = (poly: P2[]) => {
  let a = 0;
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i], q = poly[(i + 1) % poly.length];
    a += p[0] * q[1] - q[0] * p[1];
  }
  return a / 2;
};

/** The separate sections where the plane meets the model, biggest first. */
export async function planeSections(pm: PaintMesh, pl: CutPlane, skip?: Uint8Array | null): Promise<Section[]> {
  const loops = sliceLoops(pm, pl, skip);
  if (!loops.length) return [];
  const { CrossSection } = await loadManifold();
  // a model wound inside out gives every loop the other way round
  if (loops.reduce((s, l) => s + signedArea(l), 0) < 0) loops.forEach((l) => l.reverse());
  const garbage: { delete(): void }[] = [];
  try {
    // overlapping shells (eyes pushed into a head) are one section
    const all = new CrossSection(loops, 'Positive');
    garbage.push(all);
    const parts = all.decompose();
    garbage.push(...parts);
    const { to3 } = planeFrame(pl);
    const out: Section[] = [];
    for (const cs of parts) {
      const area = cs.area();
      if (area < 1e-6) continue;
      const polys = cs.toPolygons().map((poly) => poly.map((p) => [p[0], p[1]] as P2));
      const b = cs.bounds();
      out.push({ polys, area, centre: to3(innerPoint(polys)), box: [b.min[0], b.min[1], b.max[0], b.max[1]] });
    }
    return out.sort((a, b) => b.area - a.area);
  } finally {
    garbage.forEach((g) => g.delete());
  }
}

/** Whether a 2D point lies inside the section (even-odd over its outlines). */
export function inSection(s: Section, q: P2): boolean {
  if (q[0] < s.box[0] || q[0] > s.box[2] || q[1] < s.box[1] || q[1] > s.box[3]) return false;
  let inside = false;
  for (const poly of s.polys) {
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i], [xj, yj] = poly[j];
      if (yi > q[1] !== yj > q[1] && q[0] < ((xj - xi) * (q[1] - yi)) / (yj - yi) + xi) inside = !inside;
    }
  }
  return inside;
}

/** A point inside the polygons, far from their edges (scanline through the middle, widest run). */
function innerPoint(polys: P2[][]): P2 {
  let minY = Infinity, maxY = -Infinity;
  for (const p of polys) for (const q of p) [minY, maxY] = [Math.min(minY, q[1]), Math.max(maxY, q[1])];
  let best: P2 = polys[0][0], width = -1;
  for (const f of [0.5, 0.35, 0.65, 0.2, 0.8]) {
    const y = minY + (maxY - minY) * f;
    const xs: number[] = [];
    for (const poly of polys) {
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const [xi, yi] = poly[i], [xj, yj] = poly[j];
        if (yi > y !== yj > y) xs.push(xi + ((y - yi) * (xj - xi)) / (yj - yi));
      }
    }
    xs.sort((a, b) => a - b);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      if (xs[k + 1] - xs[k] > width) {
        width = xs[k + 1] - xs[k];
        best = [(xs[k] + xs[k + 1]) / 2, y];
      }
    }
  }
  return best;
}

export interface CutResult {
  /** One mesh per piece (its faces' faceObject is the object it came from). */
  pieces: { mesh: PaintMesh; object: number; cut: boolean }[];
  /** Objects that couldn't be cut (not a closed solid). */
  failed: number[];
  /** Connectors put in, and those left out: no room on the section (its room, mm), or the socket would come out the far side. */
  connectors: { placed: number; noRoom: number[]; through: number };
}

/** Peg and socket at every cut: `pegs[i]` are the pegs on section i (2D, plane frame). */
export interface CutConnectors {
  co: ConnectorOptions;
  /** The peg stands on the piece below the plane (pointing along the normal) or above it. */
  side: 'below' | 'above';
  pegs: P2[][];
}

/** Distance from a 2D point to the nearest edge of the section. */
export function roomAt(s: Section, q: P2): number {
  let best = Infinity;
  for (const poly of s.polys) {
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [x0, y0] = poly[j], [x1, y1] = poly[i];
      const dx = x1 - x0, dy = y1 - y0;
      const t = Math.max(0, Math.min(1, ((q[0] - x0) * dx + (q[1] - y0) * dy) / (dx * dx + dy * dy || 1e-30)));
      best = Math.min(best, Math.hypot(x0 + t * dx - q[0], y0 + t * dy - q[1]));
    }
  }
  return best;
}

/** The point of the section farthest from its edges (where a connector has the most room), and that room. */
export function sectionPole(s: Section): { q: P2; room: number } {
  let best: { q: P2; room: number } = { q: [(s.box[0] + s.box[2]) / 2, (s.box[1] + s.box[3]) / 2], room: -1 };
  let [x0, y0, x1, y1] = s.box;
  for (let pass = 0; pass < 4; pass++) {
    const N = 16;
    for (let i = 0; i <= N; i++) {
      for (let k = 0; k <= N; k++) {
        const q: P2 = [x0 + ((x1 - x0) * i) / N, y0 + ((y1 - y0) * k) / N];
        if (!inSection(s, q)) continue;
        const room = roomAt(s, q);
        if (room > best.room) best = { q, room };
      }
    }
    // look closer around the best point
    const hx = (x1 - x0) / 8, hy = (y1 - y0) / 8;
    [x0, x1, y0, y1] = [best.q[0] - hx, best.q[0] + hx, best.q[1] - hy, best.q[1] + hy];
  }
  return best.room < 0 ? { q: best.q, room: 0 } : best;
}

/**
 * Cut the model along the plane, only through the chosen sections. Every object of the mesh
 * is cut on its own; an object the cut doesn't part stays one piece, as it was.
 */
export async function cutByPlane(pm: PaintMesh, pl: CutPlane, sections: Section[], chosen: boolean[], conn?: CutConnectors): Promise<CutResult> {
  const wasm = await loadManifold();
  const { Manifold, Mesh, CrossSection } = wasm;
  const garbage = new Set<{ delete(): void }>();
  const keep = <T extends { delete(): void }>(m: T) => (garbage.add(m), m);
  const result: CutResult = { pieces: [], failed: [], connectors: { placed: 0, noRoom: [], through: 0 } };
  try {
    const yes = sections.filter((_, i) => chosen[i]);
    const no = sections.filter((_, i) => !chosen[i]);
    const objects = Array.from(new Set(pm.faceObject)).sort((a, b) => a - b);
    if (!yes.length) {
      for (const id of objects) result.pieces.push({ mesh: objects.length > 1 ? subsetMesh(pm, (f) => pm.faceObject[f] === id) : pm, object: id, cut: false });
      return result;
    }
    // the slab: the chosen sections grown a little (so the cut goes cleanly through the
    // model's surface), kept clear of the sections left whole
    const T = 0.002;
    let cs = keep(keep(new CrossSection(yes.flatMap((s) => s.polys), 'Positive')).offset(0.5, 'Round', 2, 16));
    if (no.length) cs = keep(cs.subtract(keep(keep(new CrossSection(no.flatMap((s) => s.polys), 'Positive')).offset(0.01, 'Round', 2, 16))));
    const { u, w, o } = planeFrame(pl);
    const n = pl.n;
    const slab = keep(
      keep(Manifold.extrude(cs, T)).transform([u[0], u[1], u[2], 0, w[0], w[1], w[2], 0, n[0], n[1], n[2], 0, o[0] - (n[0] * T) / 2, o[1] - (n[1] * T) / 2, o[2] - (n[2] * T) / 2, 1]),
    );
    const sb = slab.boundingBox();
    const solid = (m: TriMesh) => {
      const mesh = new Mesh({ numProp: 3, vertProperties: m.positions, triVerts: m.index });
      mesh.merge();
      return keep(new Manifold(mesh));
    };
    const { to3 } = planeFrame(pl);
    // every peg wanted: where, and whether there is room for it
    const wanted: { centre: V3; room: number }[] = [];
    if (conn) {
      const reach = connectorReach(conn.co);
      sections.forEach((sec, i) => {
        if (!chosen[i]) return;
        for (const q of conn.pegs[i] ?? []) {
          const room = roomAt(sec, q);
          if (room < reach) result.connectors.noRoom.push(room);
          else wanted.push({ centre: to3(q), room });
        }
      });
    }
    const up: V3 = conn?.side === 'above' ? [-pl.n[0], -pl.n[1], -pl.n[2]] : pl.n;
    const upOffset = conn?.side === 'above' ? -pl.d : pl.d;
    for (const id of objects) {
      const obj = objects.length > 1 ? subsetMesh(pm, (f) => pm.faceObject[f] === id) : pm;
      const whole = () => result.pieces.push({ mesh: obj, object: id, cut: false });
      // quick test: does the plane go through this object at all?
      const b = obj.bounds();
      if (b[3] < sb.min[0] || b[0] > sb.max[0] || b[4] < sb.min[1] || b[1] > sb.max[1] || b[5] < sb.min[2] || b[2] > sb.max[2]) {
        whole();
        continue;
      }
      const modelID = Manifold.reserveIDs(1);
      const mesh = new Mesh({
        numProp: 3, vertProperties: obj.positions, triVerts: obj.index,
        faceID: Uint32Array.from({ length: obj.faceCount }, (_, i) => i),
        runIndex: Uint32Array.of(0, obj.index.length), runOriginalID: Uint32Array.of(modelID),
      });
      mesh.merge();
      const model0 = keep(new Manifold(mesh));
      if (model0.status() !== 'NoError' || model0.isEmpty()) {
        result.failed.push(id);
        whole();
        continue;
      }
      const model = joinShells(Manifold, model0, garbage);
      let apart = keep(model.subtract(slab));
      // connectors: sockets go into the pieces on the far side now (only beyond the plane, so
      // the peg's own piece is untouched); the pegs are added to their pieces once apart
      const pegs: { peg: ReturnType<typeof solid>; probe: V3 }[] = [];
      for (const w of wanted) {
        const c = w.centre;
        if (c[0] < b[0] - 1 || c[0] > b[3] + 1 || c[1] < b[1] - 1 || c[1] > b[4] + 1 || c[2] < b[2] - 1 || c[2] > b[5] + 1) continue;
        const j: Joint = { centre: c, normal: up, room: w.room, loop: [] };
        const co = { ...conn!.co, pegOn: 'body' as const };
        if (socketGoesThrough(obj, j, co, 0)) result.connectors.through++;
        const { peg, socket } = connectorShapes(j, co, 0, pegEmbed(obj, j, co, 0));
        apart = keep(apart.subtract(keep(solid(socket).trimByPlane(up, upOffset))));
        pegs.push({ peg: solid(peg), probe: [c[0] - up[0] * 0.05, c[1] - up[1] * 0.05, c[2] - up[2] * 0.05] });
      }
      const comps = apart.decompose();
      comps.forEach((c) => garbage.add(c));
      for (const { peg, probe } of pegs) {
        // the piece it stands on: the smallest one around the point just below the peg
        let best = -1, size = Infinity;
        comps.forEach((comp, k) => {
          const bb = comp.boundingBox();
          if ([0, 1, 2].some((a) => probe[a] < bb.min[a] - 1e-3 || probe[a] > bb.max[a] + 1e-3)) return;
          const v = (bb.max[0] - bb.min[0]) * (bb.max[1] - bb.min[1]) * (bb.max[2] - bb.min[2]);
          if (v < size) [best, size] = [k, v];
        });
        if (best < 0) continue;
        comps[best] = keep(comps[best].add(peg));
        result.connectors.placed++;
      }
      if (comps.length < 2) {
        whole();
        continue;
      }
      // the cut faces take the colour of the model's surface where it meets the plane (nearest
      // crossing triangle; at most a few thousand of them are looked at)
      const rim = crossings(obj, pl, 3000);
      for (const comp of comps) {
        const m = comp.getMesh();
        const t = fromManifoldMesh(m);
        const nf = t.index.length / 3;
        const col = new Uint8Array(nf);
        const fromModel = new Uint8Array(nf);
        for (let r = 0; r < m.runOriginalID.length; r++) {
          if (m.runOriginalID[r] !== modelID) continue;
          for (let k = m.runIndex[r] / 3; k < m.runIndex[r + 1] / 3; k++) {
            col[k] = obj.faceColor[m.faceID[k]];
            fromModel[k] = 1;
          }
        }
        for (let k = 0; k < nf; k++) {
          if (fromModel[k]) continue;
          let x = 0, y = 0, z = 0;
          for (let c = 0; c < 3; c++) {
            const v = t.index[3 * k + c];
            x += t.positions[3 * v] / 3;
            y += t.positions[3 * v + 1] / 3;
            z += t.positions[3 * v + 2] / 3;
          }
          let best = Infinity, colour = 0;
          for (let i = 0; i < rim.colour.length; i++) {
            const dx = rim.at[3 * i] - x, dy = rim.at[3 * i + 1] - y, dz = rim.at[3 * i + 2] - z;
            const d2 = dx * dx + dy * dy + dz * dz;
            if (d2 < best) [best, colour] = [d2, rim.colour[i]];
          }
          col[k] = colour;
        }
        result.pieces.push({ mesh: new PaintMesh(t.positions, t.index, col, new Uint16Array(nf).fill(id)), object: id, cut: true });
      }
    }
    return result;
  } finally {
    garbage.forEach((g) => g.delete());
  }
}

/** Centres and colours of (up to `max`, evenly picked) triangles the plane goes through. */
function crossings(pm: PaintMesh, pl: CutPlane, max: number) {
  const P = pm.positions, I = pm.index, n = pl.n;
  const side = (v: number) => n[0] * P[3 * v] + n[1] * P[3 * v + 1] + n[2] * P[3 * v + 2] > pl.d;
  const faces: number[] = [];
  for (let f = 0; f < pm.faceCount; f++) {
    const a = side(I[3 * f]), b = side(I[3 * f + 1]), c = side(I[3 * f + 2]);
    if (a !== b || b !== c) faces.push(f);
  }
  const step = Math.max(1, faces.length / max);
  const picked: number[] = [];
  for (let i = 0; i < faces.length; i += step) picked.push(faces[Math.floor(i)]);
  const at = new Float64Array(picked.length * 3);
  const colour = new Uint8Array(picked.length);
  picked.forEach((f, i) => {
    for (let c = 0; c < 3; c++) {
      const v = I[3 * f + c];
      for (let k = 0; k < 3; k++) at[3 * i + k] += P[3 * v + k] / 3;
    }
    colour[i] = pm.faceColor[f];
  });
  return { at, colour };
}
