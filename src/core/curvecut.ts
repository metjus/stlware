/**
 * Curved cuts: the user draws a closed line on the model (round a neck, under a collar) and
 * the model is cut along a curved surface that passes through that line. The seam on the
 * outside follows the line exactly; inside, the two pieces can overlap so they register:
 *
 * - plug: the middle of one piece stands up into the other (solid models);
 * - ring: a thin tongue inside the wall goes into a groove (works for hollow models too).
 *
 * The surface is a height field over the plane that fits the line best: every point of the
 * line has its height above that plane, and the heights in between are blended (inverse
 * distance). The cutter is that surface as a very thin sheet (plus the clearance walls of the
 * overlap); the model minus the cutter falls apart into the pieces, like the straight cut.
 */
import * as THREE from 'three';
import { PaintMesh, subsetMesh } from './mesh';
import { orthoBasis, type V3 } from './cap';
import { fromManifoldMesh, joinShells, loadManifold, makeBvh } from './split';
import type { MeshBVH } from 'three-mesh-bvh';
import type { P2 } from './planecut';

export type OverlapStyle = 'none' | 'plug' | 'ring';

export interface OverlapOptions {
  style: OverlapStyle;
  /** How far the plug / tongue reaches into the other piece (mm). */
  depth: number;
  /** Material kept between the outside surface and the plug / tongue (mm). */
  wall: number;
  /** Width of the ring tongue (mm). */
  width: number;
  /** Gap round the plug / tongue on every side and at its top (mm). */
  gap: number;
  /** The plug / tongue stands on the piece below the surface (pointing along the normal) or above it. */
  side: 'below' | 'above';
}

export const OVERLAP_DEFAULTS: OverlapOptions = { style: 'plug', depth: 3, wall: 1.5, width: 1.2, gap: 0.15, side: 'below' };

/** The surface through a drawn line. */
export interface CurveFit {
  /** Normal of the best plane (pointing up as far as it can) and its offset. */
  n: V3;
  d: number;
  u: V3;
  w: V3;
  /** Origin of the plane frame (on the plane). */
  o: V3;
  /** The line, evenly resampled, in the plane frame (anticlockwise) and the heights above the plane. */
  poly: P2[];
  heights: number[];
  /** Length of the line (mm). */
  length: number;
}

export type FitError = 'short' | 'folds';

const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a: ArrayLike<number>, b: ArrayLike<number>) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/** Points evenly spaced along the closed line, about `step` apart (at most `max`). */
export function resampleClosed(pts: V3[], step: number, max = 240): V3[] {
  const n = pts.length;
  const seg: number[] = [];
  let total = 0;
  for (let i = 0; i < n; i++) {
    const a = pts[i], b = pts[(i + 1) % n];
    const l = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    seg.push(l);
    total += l;
  }
  if (total <= 0) return pts.slice();
  const count = Math.max(12, Math.min(max, Math.round(total / step)));
  const out: V3[] = [];
  let i = 0, at = 0; // segment i starts at arc length `at`
  for (let k = 0; k < count; k++) {
    const s = (total * k) / count;
    while (i < n - 1 && at + seg[i] < s) at += seg[i++];
    const t = seg[i] > 0 ? (s - at) / seg[i] : 0;
    const a = pts[i], b = pts[(i + 1) % n];
    out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]);
  }
  return out;
}

const segsCross = (p1: P2, p2: P2, p3: P2, p4: P2) => {
  const d = (a: P2, b: P2, c: P2) => (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
  const d1 = d(p3, p4, p1), d2 = d(p3, p4, p2), d3 = d(p1, p2, p3), d4 = d(p1, p2, p4);
  return ((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0));
};

/** Whether the closed 2D polygon crosses itself. */
export function selfCrossing(poly: P2[]): boolean {
  const n = poly.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 2; j < n; j++) {
      if (i === 0 && j === n - 1) continue;
      if (segsCross(poly[i], poly[(i + 1) % n], poly[j], poly[(j + 1) % n])) return true;
    }
  }
  return false;
}

/** The plane that fits the closed line and the line's heights over it. */
export function fitCurve(points: V3[]): CurveFit | FitError {
  if (points.length < 3) return 'short';
  let length = 0;
  for (let i = 0; i < points.length; i++) {
    const a = points[i], b = points[(i + 1) % points.length];
    length += Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
  }
  if (length < 1) return 'short';
  const pts = resampleClosed(points, Math.max(0.25, length / 240));
  const c: V3 = [0, 0, 0];
  for (const p of pts) for (let k = 0; k < 3; k++) c[k] += p[k] / pts.length;
  // Newell's normal: the direction the line goes round
  let n: V3 = [0, 0, 0];
  for (let i = 0; i < pts.length; i++) {
    const a = cross(sub(pts[i], c), sub(pts[(i + 1) % pts.length], c));
    n = [n[0] + a[0], n[1] + a[1], n[2] + a[2]];
  }
  const l = Math.hypot(...n);
  if (l < 1e-9) return 'short';
  n = [n[0] / l, n[1] / l, n[2] / l];
  if (n[2] < -1e-6) n = [-n[0], -n[1], -n[2]];
  const d = dot(n, c);
  const [u, w] = orthoBasis(n);
  const o: V3 = [n[0] * d, n[1] * d, n[2] * d];
  let poly: P2[] = [], heights: number[] = [];
  for (const p of pts) {
    const r = sub(p, o);
    poly.push([dot(r, u), dot(r, w)]);
    heights.push(dot(p, n) - d);
  }
  let area = 0;
  for (let i = 0; i < poly.length; i++) {
    const p = poly[i], q = poly[(i + 1) % poly.length];
    area += p[0] * q[1] - q[0] * p[1];
  }
  if (Math.abs(area) < 1e-6) return 'short';
  if (area < 0) {
    poly = poly.reverse();
    heights = heights.reverse();
  }
  if (selfCrossing(poly)) return 'folds';
  // a light smoothing of the heights: a line snapped back and forth between a crease and the
  // surface next to it would make the surface needlessly steep
  const hs = heights.slice();
  for (let i = 0; i < hs.length; i++) heights[i] = 0.25 * hs[(i + hs.length - 1) % hs.length] + 0.5 * hs[i] + 0.25 * hs[(i + 1) % hs.length];
  return { n, d, u, w, o, poly, heights, length };
}

const bvhs = new WeakMap<PaintMesh, MeshBVH>();

/**
 * Where strokes leave a gap (the model was turned between them, or the line closes back to
 * its start), the straight piece between them would run through the inside of the model and
 * the cut would stop short of the surface there. Such gaps are filled with points on the
 * surface: each point of the straight piece goes out (away from the middle of the line) to
 * where it leaves the model, or in to where it meets it when it is outside.
 */
export function bridgeGaps(pm: PaintMesh, pts: V3[], cols: number[], maxGap: number): { pts: V3[]; cols: number[] } {
  if (pts.length < 2) return { pts, cols };
  let bvh = bvhs.get(pm);
  if (!bvh) {
    bvh = makeBvh(pm.positions, pm.index);
    bvhs.set(pm, bvh);
  }
  const c: V3 = [0, 0, 0];
  for (const p of pts) for (let k = 0; k < 3; k++) c[k] += p[k] / pts.length;
  const out: V3[] = [], oc: number[] = [];
  const ray = new THREE.Ray();
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length];
    out.push(a);
    oc.push(cols[i] ?? 0);
    const len = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
    if (len <= maxGap) continue;
    const n = Math.ceil(len / (maxGap / 2));
    for (let k = 1; k < n; k++) {
      const t = k / n;
      const q: V3 = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const d: V3 = [q[0] - c[0], q[1] - c[1], q[2] - c[2]];
      const l = Math.hypot(...d);
      if (l < 1e-9) continue;
      const dir = new THREE.Vector3(d[0] / l, d[1] / l, d[2] / l);
      ray.origin.set(...q);
      ray.direction.copy(dir);
      const hits = bvh.raycast(ray, THREE.DoubleSide).sort((x, y) => x.distance - y.distance);
      let hit = hits.find((h) => h.face && h.face.normal.dot(dir) > 0); // leaving the model
      if (!hit || (hits[0] !== hit)) {
        // outside here: come back in towards the middle
        ray.direction.copy(dir).negate();
        const back = bvh.raycast(ray, THREE.DoubleSide).sort((x, y) => x.distance - y.distance)[0];
        if (back && back.distance < l) hit = back;
        else if (!hit) continue;
      }
      out.push([hit.point.x, hit.point.y, hit.point.z]);
      oc.push(hit.faceIndex != null ? pm.faceColor[hit.faceIndex] ?? 0 : 0);
    }
  }
  return { pts: out, cols: oc };
}

/** Height of the surface over the plane at a 2D point (inverse distance blend of the line's heights). */
export function heightAt(fit: CurveFit, x: number, y: number): number {
  let sw = 0, sh = 0;
  const P = fit.poly, H = fit.heights;
  for (let i = 0; i < P.length; i++) {
    const dx = P[i][0] - x, dy = P[i][1] - y;
    const d2 = dx * dx + dy * dy;
    if (d2 < 1e-12) return H[i];
    const wgt = 1 / (d2 * d2); // power 4 on distance: stays close to the line near it
    sw += wgt;
    sh += wgt * H[i];
  }
  return sh / sw;
}

/** Model point from plane frame (x, y, height z). */
export function fitTo3(fit: CurveFit, x: number, y: number, z: number): V3 {
  const { o, u, w, n } = fit;
  return [o[0] + u[0] * x + w[0] * y + n[0] * z, o[1] + u[1] * x + w[1] * y + n[1] * z, o[2] + u[2] * x + w[2] * y + n[2] * z];
}

/** Model point -> plane frame (x, y, height). */
export function fitTo2(fit: CurveFit, p: ArrayLike<number>): V3 {
  const r: V3 = [p[0] - fit.o[0], p[1] - fit.o[1], p[2] - fit.o[2]];
  return [dot(r, fit.u), dot(r, fit.w), dot(r, fit.n)];
}

type Wasm = Awaited<ReturnType<typeof loadManifold>>;
type Man = InstanceType<Wasm['Manifold']>;
type CS = InstanceType<Wasm['CrossSection']>;

/** Edge length the sheets are refined to, so they can bend with the surface. */
function refineLength(fit: CurveFit) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const [x, y] of fit.poly) [minX, maxX, minY, maxY] = [Math.min(minX, x), Math.max(maxX, x), Math.min(minY, y), Math.max(maxY, y)];
  return Math.max(0.1, Math.min(3, Math.max(maxX - minX, maxY - minY) / 70));
}

/** Margin the sheet reaches past the line, so it goes cleanly through the model's surface. */
export const SHEET_MARGIN = 1.5;
const SHEET = 0.01;

/**
 * The cutter in model space: a thin sheet along the surface, with the overlap's clearance
 * walls and roof where the plug / tongue is. `plugRegion` overrides the overlap's footprint.
 */
function buildCutter(w: Wasm, fit: CurveFit, o: OverlapOptions, keep: <T extends { delete(): void }>(m: T) => T, wall = o.wall, fine = 1): { cutter: Man; overlap: boolean } {
  const { Manifold, CrossSection } = w;
  const L = refineLength(fit) / fine;
  const outline = keep(new CrossSection([fit.poly], 'Positive'));
  const grown = keep(outline.offset(SHEET_MARGIN, 'Round', 2, 16));
  const s = o.side === 'above' ? -1 : 1;
  const warp = (m: Man) =>
    keep(
      keep(keep(m.refineToLength(L)).warpBatch((v: Float64Array, count: number) => {
        for (let i = 0; i < count; i++) v[3 * i + 2] += heightAt(fit, v[3 * i], v[3 * i + 1]);
      })),
    );
  const slab = (cs: CS, z0: number, z1: number) => {
    const lo = Math.min(z0, z1), hi = Math.max(z0, z1);
    return warp(keep(keep(Manifold.extrude(cs, hi - lo)).translate([0, 0, lo])));
  };
  let region: CS | null = null;
  if (o.style !== 'none' && o.depth > 0) {
    // rounded off (opened by 1 mm), so a jagged line doesn't make a jagged plug
    const inner = keep(keep(outline.offset(-wall - 1, 'Round', 2, 16)).offset(1, 'Round', 2, 16));
    region = o.style === 'ring' ? keep(inner.subtract(keep(inner.offset(-o.width, 'Round', 2, 16)))) : inner;
    if (region.area() < 1e-3) region = null;
  }
  const parts: Man[] = [];
  if (!region) parts.push(slab(grown, -SHEET / 2, SHEET / 2));
  else {
    const g = Math.max(o.gap, SHEET);
    const roof = keep(region.offset(g, 'Round', 2, 16));
    parts.push(slab(keep(grown.subtract(region)), -SHEET / 2, SHEET / 2));
    // the clearance round the plug / tongue and over it, as one cup (open towards the seam),
    // bent with the surface in one go so its walls and roof can't come apart; it reaches a
    // little past the seam into the other piece (a hidden slot) so it surely meets the sheet
    const under = 0.5;
    const outer = keep(keep(Manifold.extrude(roof, o.depth + g + under)).translate([0, 0, -under]));
    const hole = keep(keep(Manifold.extrude(region, o.depth + under + 1)).translate([0, 0, -under - 1]));
    let cup = keep(outer.subtract(hole));
    if (s < 0) cup = keep(cup.mirror([0, 0, 1]));
    parts.push(warp(cup));
  }
  const local = parts.length === 1 ? parts[0] : keep(Manifold.union(parts));
  const { u, w: ww, n, o: org } = fit;
  const cutter = keep(local.transform([u[0], u[1], u[2], 0, ww[0], ww[1], ww[2], 0, n[0], n[1], n[2], 0, org[0], org[1], org[2], 1]));
  return { cutter, overlap: !!region };
}

/** The cutter as a triangle mesh (model space), for the preview. */
export async function curveCutterMesh(fit: CurveFit, o: OverlapOptions): Promise<{ positions: Float32Array; index: Uint32Array } | null> {
  const w = await loadManifold();
  const garbage = new Set<{ delete(): void }>();
  const keep = <T extends { delete(): void }>(m: T) => (garbage.add(m), m);
  try {
    const { cutter } = buildCutter(w, fit, o, keep);
    return fromManifoldMesh(cutter.getMesh());
  } catch (e) {
    console.warn(e);
    return null;
  } finally {
    garbage.forEach((g) => g.delete());
  }
}

/** Whether a model point lies inside the mesh (odd crossings of a ray). */
function insideMesh(bvh: MeshBVH, p: V3, dir: V3): number {
  const hits = bvh.raycast(new THREE.Ray(new THREE.Vector3(...p), new THREE.Vector3(...dir)), THREE.DoubleSide);
  return hits.length;
}

/**
 * Wall to keep so the overlap stays inside the model: the wall is grown (up to +4 mm) until
 * the outer edge of the clearance round the plug / tongue is enclosed by the model at every
 * height it reaches, at least 0.4 mm from the surface. Returns the wall used and how many
 * of the tested points still poke out.
 */
export async function fitOverlapWall(pm: PaintMesh, fit: CurveFit, o: OverlapOptions, bvh?: MeshBVH): Promise<{ wall: number; out: number }> {
  if (o.style === 'none' || o.depth <= 0) return { wall: o.wall, out: 0 };
  const { CrossSection } = await loadManifold();
  const tree = bvh ?? makeBvh(pm.positions, pm.index);
  const outline = new CrossSection([fit.poly], 'Positive');
  const s = o.side === 'above' ? -1 : 1;
  const g = Math.max(o.gap, SHEET);
  let best = { wall: o.wall, out: Infinity };
  try {
    for (let extra = 0; extra <= 4.001; extra += 0.5) {
      const wall = o.wall + extra;
      const edge = outline.offset(-wall + g, 'Round', 2, 16);
      const polys = edge.toPolygons();
      edge.delete();
      const pts: P2[] = [];
      for (const poly of polys) {
        const step = Math.max(1, Math.floor(poly.length / 48));
        for (let i = 0; i < poly.length; i += step) pts.push([poly[i][0], poly[i][1]]);
      }
      if (!pts.length) break; // nothing left for an overlap
      let out = 0;
      const target = new THREE.Vector3();
      const info = { point: new THREE.Vector3(), distance: 0, faceIndex: 0 };
      for (const [x, y] of pts) {
        const h = heightAt(fit, x, y);
        for (const t of [0.35, 0.7, 1]) {
          const p = fitTo3(fit, x, y, h + s * (o.depth + g) * t);
          // enclosed: rays both ways along u cross the model an odd number of times or, in a hollow, twice+ each way
          const a = insideMesh(tree, p, fit.u), b = insideMesh(tree, p, [-fit.u[0], -fit.u[1], -fit.u[2]]);
          const enclosed = a > 0 && b > 0 && (o.style === 'plug' ? true : a % 2 === 1);
          target.set(...p);
          const near = tree.closestPointToPoint(target, info, 0, 0.4);
          if (!enclosed || (near && near.distance < 0.4)) out++;
        }
      }
      if (out < best.out) best = { wall, out };
      if (out === 0) break;
    }
  } finally {
    outline.delete();
  }
  return best.out === Infinity ? { wall: o.wall, out: 0 } : best;
}

export interface CurveCutResult {
  pieces: { mesh: PaintMesh; object: number; cut: boolean }[];
  failed: number[];
  /** The overlap was built (false when the line encloses too little for it). */
  overlap: boolean;
  /** Wall actually kept (grown so the overlap stays inside), and points that still poke out. */
  wall: number;
  pokesOut: number;
}

/**
 * Cut the model along the curved surface through the line. `lineColours` colour the new
 * faces: each takes the colour of the nearest line point (`linePoints`).
 */
export async function cutByCurve(pm: PaintMesh, fit: CurveFit, o: OverlapOptions, linePoints: V3[], lineColours: number[]): Promise<CurveCutResult> {
  const wasm = await loadManifold();
  const { Manifold, Mesh } = wasm;
  const garbage = new Set<{ delete(): void }>();
  const keep = <T extends { delete(): void }>(m: T) => (garbage.add(m), m);
  const result: CurveCutResult = { pieces: [], failed: [], overlap: false, wall: o.wall, pokesOut: 0 };
  try {
    const objects = Array.from(new Set(pm.faceObject)).sort((a, b) => a - b);
    const fitted = await fitOverlapWall(pm, fit, o);
    result.wall = fitted.wall;
    result.pokesOut = fitted.out;
    // the cutter is bent from small flat triangles; where the surface is very wavy a coarse one
    // can leak (the pieces stay joined), so an object that doesn't part is tried again finer
    const cutters: Man[] = [];
    const cutterAt = (k: number) => {
      while (cutters.length <= k) {
        const c = buildCutter(wasm, fit, o, keep, fitted.wall, cutters.length ? 2.5 : 1);
        result.overlap = c.overlap;
        cutters.push(c.cutter);
      }
      return cutters[k];
    };
    const cb = cutterAt(0).boundingBox();
    for (const id of objects) {
      const obj = objects.length > 1 ? subsetMesh(pm, (f) => pm.faceObject[f] === id) : pm;
      const whole = () => result.pieces.push({ mesh: obj, object: id, cut: false });
      const b = obj.bounds();
      if (b[3] < cb.min[0] || b[0] > cb.max[0] || b[4] < cb.min[1] || b[1] > cb.max[1] || b[5] < cb.min[2] || b[2] > cb.max[2]) {
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
      let kept: Man[] = [];
      for (let attempt = 0; attempt < 2 && kept.length < 2; attempt++) {
        const comps = keep(model.subtract(cutterAt(attempt))).decompose();
        comps.forEach((c) => garbage.add(c));
        // crumbs (the sheet's margin nicking a nearby detail) are dropped: pieces under 0.01 mm³
        kept = comps.filter((c) => c.volume() > 0.01);
      }
      if (kept.length < 2) {
        whole();
        continue;
      }
      for (const comp of kept) {
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
          if (fromModel[k] || !linePoints.length) continue;
          let x = 0, y = 0, z = 0;
          for (let c = 0; c < 3; c++) {
            const v = t.index[3 * k + c];
            x += t.positions[3 * v] / 3;
            y += t.positions[3 * v + 1] / 3;
            z += t.positions[3 * v + 2] / 3;
          }
          let best = Infinity, colour = 0;
          for (let i = 0; i < linePoints.length; i++) {
            const p = linePoints[i];
            const d2 = (p[0] - x) ** 2 + (p[1] - y) ** 2 + (p[2] - z) ** 2;
            if (d2 < best) [best, colour] = [d2, lineColours[i] ?? 0];
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

/**
 * Snapping the drawn line to the model's sharp edges, corners and folds. Two kinds of target:
 *
 * - crease edges: faces meeting at more than 30° (hard edges of low-poly and CAD models); a
 *   point snaps onto the nearest point of such an edge;
 * - folds of sculpted models, where the bend is spread over many small faces: every vertex
 *   gets a score, how far it sits off the average of its neighbours along its normal (in
 *   edge lengths, smoothed a little), and vertices scoring well above the model's usual
 *   values count as a fold.
 *
 * The strongest, nearest target within the radius wins.
 */
export class CreaseSnapper {
  private cell: number;
  /** Grid cell -> crease edge ids (>= 0) and fold vertices (stored as -1 - v). */
  private grid = new Map<number, number[]>();
  private edges: number[] = [];
  private fold: Float32Array;
  constructor(private pm: PaintMesh, angle = 30) {
    const P = pm.positions, I = pm.index, V = pm.vertexCount;
    const fn = pm.normals(), fa = pm.areas();
    const b = pm.bounds();
    this.cell = Math.max(0.5, Math.hypot(b[3] - b[0], b[4] - b[1], b[5] - b[2]) / 150);
    // crease edges
    const cos = Math.cos((angle * Math.PI) / 180);
    const first = new Map<number, number>();
    for (let f = 0; f < pm.faceCount; f++) {
      for (let e = 0; e < 3; e++) {
        const a = I[3 * f + e], c = I[3 * f + ((e + 1) % 3)];
        const key = a < c ? a * V + c : c * V + a;
        const g = first.get(key);
        if (g === undefined) {
          first.set(key, f);
          continue;
        }
        const d = fn[3 * f] * fn[3 * g] + fn[3 * f + 1] * fn[3 * g + 1] + fn[3 * f + 2] * fn[3 * g + 2];
        if (d < cos) this.edges.push(a, c);
      }
    }
    for (let i = 0; i < this.edges.length / 2; i++) {
      const a = this.edges[2 * i], c = this.edges[2 * i + 1];
      const len = Math.hypot(P[3 * c] - P[3 * a], P[3 * c + 1] - P[3 * a + 1], P[3 * c + 2] - P[3 * a + 2]);
      const steps = Math.max(1, Math.ceil(len / this.cell));
      let last = NaN;
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const k = this.key(P[3 * a] + (P[3 * c] - P[3 * a]) * t, P[3 * a + 1] + (P[3 * c + 1] - P[3 * a + 1]) * t, P[3 * a + 2] + (P[3 * c + 2] - P[3 * a + 2]) * t);
        if (k !== last) this.add(k, i);
        last = k;
      }
    }
    // folds
    const vn = new Float32Array(V * 3);
    const sum = new Float64Array(V * 3), cnt = new Float32Array(V), elen = new Float64Array(V);
    for (let f = 0; f < pm.faceCount; f++) {
      for (let e = 0; e < 3; e++) {
        const a = I[3 * f + e], c = I[3 * f + ((e + 1) % 3)];
        for (let k = 0; k < 3; k++) vn[3 * a + k] += fn[3 * f + k] * fa[f];
        const l = Math.hypot(P[3 * c] - P[3 * a], P[3 * c + 1] - P[3 * a + 1], P[3 * c + 2] - P[3 * a + 2]);
        for (const [x, y] of [[a, c], [c, a]]) {
          for (let k = 0; k < 3; k++) sum[3 * x + k] += P[3 * y + k];
          cnt[x]++;
          elen[x] += l;
        }
      }
    }
    let score = new Float32Array(V);
    for (let v = 0; v < V; v++) {
      if (!cnt[v]) continue;
      const nl = Math.hypot(vn[3 * v], vn[3 * v + 1], vn[3 * v + 2]) || 1;
      let d = 0;
      for (let k = 0; k < 3; k++) d += (vn[3 * v + k] / nl) * (sum[3 * v + k] / cnt[v] - P[3 * v + k]);
      score[v] = Math.abs(d) / (elen[v] / cnt[v] || 1);
    }
    for (let it = 0; it < 2; it++) {
      const acc = new Float32Array(V), n = new Float32Array(V);
      for (let f = 0; f < pm.faceCount; f++) {
        for (let e = 0; e < 3; e++) {
          const a = I[3 * f + e], c = I[3 * f + ((e + 1) % 3)];
          acc[a] += score[c];
          acc[c] += score[a];
          n[a]++;
          n[c]++;
        }
      }
      const next = new Float32Array(V);
      for (let v = 0; v < V; v++) next[v] = n[v] ? 0.5 * score[v] + (0.5 * acc[v]) / n[v] : score[v];
      score = next;
    }
    // a fold: well above what most of this model scores (fine sculpts only: a low-poly model
    // bends at every vertex, its edges above do the job)
    const sample: number[] = [];
    const step = Math.max(1, Math.floor(V / 20000));
    for (let v = 0; v < V; v += step) sample.push(score[v]);
    sample.sort((x, y) => x - y);
    const median = sample[Math.floor(sample.length / 2)] ?? 0;
    const threshold = Math.max(0.03, median * 4);
    this.fold = new Float32Array(V);
    if (median < 0.05) {
      for (let v = 0; v < V; v++) {
        if (score[v] < threshold) continue;
        this.fold[v] = Math.min(1, score[v] / (threshold * 3)) * 0.9;
        this.add(this.key(P[3 * v], P[3 * v + 1], P[3 * v + 2]), -1 - v);
      }
    }
  }
  private add(k: number, item: number) {
    const arr = this.grid.get(k);
    if (arr) arr.push(item);
    else this.grid.set(k, [item]);
  }
  private key(x: number, y: number, z: number) {
    const c = this.cell;
    return this.cellKey(Math.floor(x / c), Math.floor(y / c), Math.floor(z / c));
  }
  private cellKey(i: number, j: number, k: number) {
    return ((i + 4096) * 8192 + (j + 4096)) * 8192 + (k + 4096);
  }
  /** The best crease / fold point within `radius` of `p` (stronger and nearer wins), or null. */
  snap(p: V3, radius: number): V3 | null {
    const P = this.pm.positions, c = this.cell;
    const r = Math.ceil(radius / c);
    const cx = Math.floor(p[0] / c), cy = Math.floor(p[1] / c), cz = Math.floor(p[2] / c);
    let best: V3 | null = null, bs = 0;
    const r2 = radius * radius;
    const tried = new Set<number>();
    const consider = (q: V3, weight: number) => {
      const d2 = (q[0] - p[0]) ** 2 + (q[1] - p[1]) ** 2 + (q[2] - p[2]) ** 2;
      if (d2 > r2) return;
      const s = weight * (1 - (0.6 * d2) / r2);
      if (s > bs) [bs, best] = [s, q];
    };
    for (let i = -r; i <= r; i++) {
      for (let j = -r; j <= r; j++) {
        for (let k = -r; k <= r; k++) {
          const arr = this.grid.get(this.cellKey(cx + i, cy + j, cz + k));
          if (!arr) continue;
          for (const it of arr) {
            if (tried.has(it)) continue;
            tried.add(it);
            if (it < 0) {
              const v = -1 - it;
              consider([P[3 * v], P[3 * v + 1], P[3 * v + 2]], this.fold[v]);
              continue;
            }
            const a = this.edges[2 * it], b = this.edges[2 * it + 1];
            const ax = P[3 * a], ay = P[3 * a + 1], az = P[3 * a + 2];
            const dx = P[3 * b] - ax, dy = P[3 * b + 1] - ay, dz = P[3 * b + 2] - az;
            const l2 = dx * dx + dy * dy + dz * dz || 1e-30;
            const t = Math.max(0, Math.min(1, ((p[0] - ax) * dx + (p[1] - ay) * dy + (p[2] - az) * dz) / l2));
            consider([ax + dx * t, ay + dy * t, az + dz * t], 1);
          }
        }
      }
    }
    return best;
  }
}
