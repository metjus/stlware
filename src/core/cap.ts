/**
 * Closing a loop of points with a cap (port of the add-on's _cap_quads / _cap / fan).
 *
 * The cap has inner points spaced like the loop's edges (constrained Delaunay
 * triangles, so no long slivers) and the inner points take their heights smoothly
 * from the loop, so the cap follows a loop that isn't flat.
 */
import cdt2d from 'cdt2d';
import earcut from 'earcut';

export type V3 = [number, number, number];

export interface CapShape {
  /** New points inside the loop. */
  inner: V3[];
  /** Triangles: index < loop length = loop point, else inner point (index - n). Wound along the loop. */
  tris: number[][];
}

export const CAP_MAX_POINTS = 40000;

const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const len = (a: V3) => Math.hypot(a[0], a[1], a[2]);
const scale = (a: V3, s: number): V3 => [a[0] * s, a[1] * s, a[2] * s];

/** Newell normal of a loop (unnormalised) and its centre. */
export function loopFrame(points: V3[]) {
  const n = points.length;
  const centre: V3 = [0, 0, 0];
  for (const p of points) {
    centre[0] += p[0] / n;
    centre[1] += p[1] / n;
    centre[2] += p[2] / n;
  }
  let normal: V3 = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    const c = cross(sub(points[i], centre), sub(points[(i + 1) % n], centre));
    normal = [normal[0] + c[0], normal[1] + c[1], normal[2] + c[2]];
  }
  return { centre, normal };
}

export function orthoBasis(n: V3): [V3, V3] {
  const a: V3 = Math.abs(n[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
  let u = cross(n, a);
  u = scale(u, 1 / len(u));
  const w = cross(n, u);
  return [u, w];
}

/** Wind triangles along the loop (loop edge i -> i+1 as listed). */
function windAlong(tris: number[][], n: number): number[][] {
  let along: boolean | null = null;
  outer: for (const t of tris) {
    for (let k = 0; k < 3; k++) {
      const i = t[k], j = t[(k + 1) % 3];
      if (i < n && j < n) {
        if (j === (i + 1) % n) along = true;
        else if (i === (j + 1) % n) along = false;
        if (along !== null) break outer;
      }
    }
  }
  return along === false ? tris.map((t) => [t[0], t[2], t[1]]) : tris;
}

/** Uniform grid over 2D points for nearest-point queries. */
class Grid2 {
  private cells = new Map<string, number[]>();
  constructor(private pts: [number, number][], private size: number) {
    pts.forEach((p, i) => {
      const k = this.key(p[0], p[1]);
      const list = this.cells.get(k);
      if (list) list.push(i);
      else this.cells.set(k, [i]);
    });
  }
  private key(x: number, y: number) {
    return `${Math.floor(x / this.size)},${Math.floor(y / this.size)}`;
  }
  /** Up to k nearest points as [index, distance], searching outward ring by ring. */
  nearest(x: number, y: number, k: number): [number, number][] {
    const cx = Math.floor(x / this.size), cy = Math.floor(y / this.size);
    const found: [number, number][] = [];
    for (let r = 0; r < 4096; r++) {
      for (let i = cx - r; i <= cx + r; i++) {
        for (let j = cy - r; j <= cy + r; j++) {
          if (Math.max(Math.abs(i - cx), Math.abs(j - cy)) !== r) continue;
          for (const idx of this.cells.get(`${i},${j}`) ?? []) {
            const p = this.pts[idx];
            found.push([idx, Math.hypot(p[0] - x, p[1] - y)]);
          }
        }
      }
      // every point within r * size is found once ring r is done
      if (found.length >= k) {
        found.sort((a, b) => a[1] - b[1]);
        if (found[k - 1][1] <= r * this.size) return found.slice(0, k);
      }
      if (found.length >= this.pts.length) break;
    }
    found.sort((a, b) => a[1] - b[1]);
    return found.slice(0, k);
  }
}

/** The tidy cap, or null when the loop folds over itself seen along its average direction. */
export function capTidy(points: V3[], forbid?: (i: number, j: number) => boolean): CapShape | null {
  const n = points.length;
  if (n < 3) return null;
  const { centre, normal: raw } = loopFrame(points);
  const nl = len(raw);
  if (nl < 1e-12) return null;
  const normal = scale(raw, 1 / nl);
  const [u, w] = orthoBasis(normal);
  const flat: [number, number][] = points.map((p) => {
    const d = sub(p, centre);
    return [dot(d, u), dot(d, w)];
  });
  const height = points.map((p) => dot(sub(p, centre), normal));
  const edges = points.map((p, i) => len(sub(p, points[(i + 1) % n]))).sort((a, b) => a - b);
  let step = edges[n >> 1] || 1e-6;

  let lo = [Infinity, Infinity], hi = [-Infinity, -Infinity];
  for (const [x, y] of flat) {
    lo = [Math.min(lo[0], x), Math.min(lo[1], y)];
    hi = [Math.max(hi[0], x), Math.max(hi[1], y)];
  }
  while (((hi[0] - lo[0]) / step) * ((hi[1] - lo[1]) / step) > CAP_MAX_POINTS) step *= 1.5;
  const loopGrid = new Grid2(flat, step);
  const inner2: [number, number][] = [];
  for (let gx = lo[0] + step / 2; gx < hi[0]; gx += step) {
    for (let gy = lo[1] + step / 2; gy < hi[1]; gy += step) {
      // even-odd rule
      let inside = false;
      for (let i = 0; i < n; i++) {
        const [x0, y0] = flat[i];
        const [x1, y1] = flat[(i + 1) % n];
        if (y0 > gy !== y1 > gy) {
          const xAt = x0 + ((gy - y0) * (x1 - x0)) / (y1 - y0 || 1e-30);
          if (gx < xAt) inside = !inside;
        }
      }
      if (!inside) continue;
      if (loopGrid.nearest(gx, gy, 1)[0][1] > step * 0.5) inner2.push([gx, gy]);
    }
  }

  const cons: [number, number][] = flat.map((_, i) => [i, (i + 1) % n]);
  let tris: number[][] = [];
  // A cap triangle must not use a chord between two loop points that is already an
  // edge of the mesh (it would get four faces): put a point on such chords and redo.
  for (let attempt = 0; attempt < 4; attempt++) {
    const pts = [...flat, ...inner2];
    try {
      tris = cdt2d(pts, cons, { exterior: false });
    } catch {
      return null;
    }
    if (tris.length !== n - 2 + 2 * inner2.length) return null; // loop folds or points coincide
    const bad = forbid ? forbiddenChords(tris, n, forbid) : [];
    if (!bad.length) break;
    if (attempt === 3) return null;
    for (const [i, j] of bad) inner2.push([(flat[i][0] + flat[j][0]) / 2, (flat[i][1] + flat[j][1]) / 2]);
  }

  const k = Math.min(8, n);
  const inner: V3[] = inner2.map(([x, y]) => {
    let total = 0, weight = 0;
    for (const [i, d] of loopGrid.nearest(x, y, k)) {
      const wgt = 1 / Math.max(d, 1e-9) ** 2;
      total += height[i] * wgt;
      weight += wgt;
    }
    const h = total / weight;
    return [
      centre[0] + u[0] * x + w[0] * y + normal[0] * h,
      centre[1] + u[1] * x + w[1] * y + normal[1] * h,
      centre[2] + u[2] * x + w[2] * y + normal[2] * h,
    ];
  });
  return { inner, tris: windAlong(tris, n) };
}

function forbiddenChords(tris: number[][], n: number, forbid: (i: number, j: number) => boolean): [number, number][] {
  const out = new Map<string, [number, number]>();
  for (const t of tris) {
    for (let k = 0; k < 3; k++) {
      const i = t[k], j = t[(k + 1) % 3];
      if (i >= n || j >= n || (i + 1) % n === j || (j + 1) % n === i) continue;
      if (forbid(i, j)) out.set(i < j ? `${i},${j}` : `${j},${i}`, [i, j]);
    }
  }
  return Array.from(out.values());
}

/** Plain triangles over the loop (earcut), or null. */
export function capPlain(points: V3[], forbid?: (i: number, j: number) => boolean): CapShape | null {
  const n = points.length;
  const { centre, normal: raw } = loopFrame(points);
  const nl = len(raw);
  if (nl < 1e-12) return null;
  const [u, w] = orthoBasis(scale(raw, 1 / nl));
  const flat: number[] = [];
  for (const p of points) {
    const d = sub(p, centre);
    flat.push(dot(d, u), dot(d, w));
  }
  const idx = earcut(flat);
  if (idx.length !== (n - 2) * 3) return null;
  const tris: number[][] = [];
  for (let i = 0; i < idx.length; i += 3) tris.push([idx[i], idx[i + 1], idx[i + 2]]);
  if (forbid && forbiddenChords(tris, n, forbid).length) return null;
  return { inner: [], tris: windAlong(tris, n) };
}

/** How to close a loop: tidy, else plain triangles, else a fan from its centre. */
export function capShape(points: V3[], forbid?: (i: number, j: number) => boolean): CapShape {
  const tidy = capTidy(points, forbid);
  if (tidy) return tidy;
  const plain = capPlain(points, forbid);
  if (plain) return plain;
  const n = points.length;
  const { centre } = loopFrame(points);
  return { inner: [centre], tris: points.map((_, i) => [i, (i + 1) % n, n]) };
}
