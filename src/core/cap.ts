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

/**
 * A cap for a loop that folds over itself seen from any one direction (e.g. a cut that wraps
 * round a ridge): start from plain triangles (or a fan), then split long inner edges, flip
 * edges towards well-shaped triangles and smooth the inner points, so the cap becomes an even
 * mesh with edges about as long as the loop's (no long slivers) that spans the loop like a
 * membrane. Null when the start can't be made.
 */
export function capRemesh(points: V3[], forbid?: (i: number, j: number) => boolean): CapShape | null {
  const n = points.length;
  if (n < 3) return null;
  const pos: V3[] = points.map((p) => [p[0], p[1], p[2]]);
  let tris: number[][];
  const plain = capPlain(points);
  if (plain) tris = plain.tris.map((t) => t.slice());
  else {
    const { centre } = loopFrame(points);
    pos.push(centre);
    tris = points.map((_, i) => [i, (i + 1) % n, n]);
  }
  const edgeLens = points.map((p, i) => len(sub(p, points[(i + 1) % n]))).sort((a, b) => a - b);
  let target = edgeLens[n >> 1] || 1e-3;
  let area = 0;
  for (const t of tris) area += len(cross(sub(pos[t[1]], pos[t[0]]), sub(pos[t[2]], pos[t[0]]))) / 2;
  const expected = area / (0.433 * target * target);
  if (expected > CAP_MAX_POINTS) target *= Math.sqrt(expected / CAP_MAX_POINTS);

  const K = 0x100000;
  const key = (a: number, b: number) => (a < b ? a * K + b : b * K + a);
  const isLoopEdge = (a: number, b: number) => a < n && b < n && ((a + 1) % n === b || (b + 1) % n === a);
  const badChord = (a: number, b: number) => a < n && b < n && !isLoopEdge(a, b) && !!forbid?.(a, b);
  let edges = new Map<number, number[]>();
  const rebuild = () => {
    edges = new Map();
    tris.forEach((t, i) => {
      for (let k = 0; k < 3; k++) {
        const e = key(t[k], t[(k + 1) % 3]);
        const list = edges.get(e);
        if (list) list.push(i);
        else edges.set(e, [i]);
      }
    });
  };
  const elen = (a: number, b: number) => len(sub(pos[a], pos[b]));
  /** Whether the angles at c and d opposite the edge a-b add up to more than 180° (flip it). */
  const opposite = (c: number, d: number, a: number, b: number) => {
    const pa = pos[a], pb = pos[b], pc = pos[c], pd = pos[d];
    const x1 = pa[0] - pc[0], y1 = pa[1] - pc[1], z1 = pa[2] - pc[2], x2 = pb[0] - pc[0], y2 = pb[1] - pc[1], z2 = pb[2] - pc[2];
    const x3 = pa[0] - pd[0], y3 = pa[1] - pd[1], z3 = pa[2] - pd[2], x4 = pb[0] - pd[0], y4 = pb[1] - pd[1], z4 = pb[2] - pd[2];
    const cosC = x1 * x2 + y1 * y2 + z1 * z2, sinC = Math.hypot(y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - y1 * x2);
    const cosD = x3 * x4 + y3 * y4 + z3 * z4, sinD = Math.hypot(y3 * z4 - z3 * y4, z3 * x4 - x3 * z4, x3 * y4 - y3 * x4);
    // sin(C + D) < 0 (scaled by the edge lengths, which are positive)
    return sinC * cosD + cosC * sinD < -1e-12 * (sinC + sinD + 1e-30);
  };
  const triNormal = (t: number[]) => cross(sub(pos[t[1]], pos[t[0]]), sub(pos[t[2]], pos[t[0]]));
  /** The triangle rotated so it starts with the edge {a, b}. */
  const startAt = (t: number[], a: number, b: number) => {
    for (let k = 0; k < 3; k++) {
      const x = t[k], y = t[(k + 1) % 3];
      if ((x === a && y === b) || (x === b && y === a)) return [x, y, t[(k + 2) % 3]];
    }
    return t;
  };

  const split = () => {
    rebuild();
    const todo: [number, number, number][] = [];
    for (const [e, list] of edges) {
      if (list.length !== 2) continue; // the loop's own edges stay
      const a = Math.floor(e / K), b = e % K;
      const l = elen(a, b);
      if (l > target * 1.33 || badChord(a, b)) todo.push([l, a, b]);
    }
    todo.sort((x, y) => y[0] - x[0]);
    const touched = new Set<number>();
    let count = 0;
    for (const [, a, b] of todo) {
      const list = edges.get(key(a, b))!;
      if (list.some((i) => touched.has(i))) continue;
      const m = pos.length;
      pos.push([(pos[a][0] + pos[b][0]) / 2, (pos[a][1] + pos[b][1]) / 2, (pos[a][2] + pos[b][2]) / 2]);
      for (const i of list) {
        const [x, y, z] = startAt(tris[i], a, b);
        tris[i] = [x, m, z];
        touched.add(i);
        touched.add(tris.length);
        tris.push([m, y, z]);
      }
      count++;
    }
    return count;
  };

  const flip = (fresh: boolean) => {
    if (fresh) rebuild();
    let count = 0;
    for (const e of Array.from(edges.keys())) {
      const list = edges.get(e);
      if (!list || list.length !== 2) continue;
      const a = Math.floor(e / K), b = e % K;
      const [i, j] = list;
      const t1 = startAt(tris[i], a, b), t2 = startAt(tris[j], a, b);
      if (t1[0] === t2[0]) continue; // not wound the same way
      const [x, y, c] = t1, d = t2[2];
      if (c === d || edges.has(key(c, d)) || badChord(c, d)) continue;
      if (!opposite(c, d, x, y)) continue;
      const n1 = [c, x, d], n2 = [d, y, c];
      const before = triNormal(t1);
      if (dot(triNormal(n1), before) <= 0 || dot(triNormal(n2), before) <= 0) continue;
      tris[i] = n1;
      tris[j] = n2;
      edges.delete(e);
      // the four outer edges now belong to the new triangles
      for (const [p, q, ti] of [[c, x, i], [x, d, i], [d, y, j], [y, c, j]] as const) {
        const l = edges.get(key(p, q));
        if (l) edges.set(key(p, q), l.map((v) => (v === i || v === j ? ti : v)));
      }
      edges.set(key(c, d), [i, j]);
      count++;
    }
    return count;
  };

  const smooth = (rounds: number) => {
    const m = pos.length;
    const sum = new Float64Array(m * 3), cnt = new Uint32Array(m);
    for (let r = 0; r < rounds; r++) {
      sum.fill(0);
      cnt.fill(0);
      for (const t of tris) {
        for (let k = 0; k < 3; k++) {
          const a = t[k], b = t[(k + 1) % 3];
          for (let d = 0; d < 3; d++) {
            sum[3 * a + d] += pos[b][d];
            sum[3 * b + d] += pos[a][d];
          }
          cnt[a]++;
          cnt[b]++;
        }
      }
      for (let v = n; v < m; v++) if (cnt[v]) pos[v] = [sum[3 * v] / cnt[v], sum[3 * v + 1] / cnt[v], sum[3 * v + 2] / cnt[v]];
    }
  };


  for (let round = 0; round < 60; round++) {
    const s = split();
    for (let f = 0; f < 2 && flip(f === 0); f++);
    smooth(2);
    if (!s || pos.length - n > CAP_MAX_POINTS) break;
  }
  for (let f = 0; f < 8 && flip(f === 0); f++) smooth(2);
  smooth(8);
  rebuild();
  for (const [e, list] of edges) {
    if (list.length === 2 && badChord(Math.floor(e / K), e % K)) return null;
  }
  if (tris.length !== n - 2 + 2 * (pos.length - n)) return null;
  return { inner: pos.slice(n), tris: windAlong(tris, n) };
}

/** How to close a loop: tidy, else an even mesh grown from plain triangles, else plain, else a fan. */
export function capShape(points: V3[], forbid?: (i: number, j: number) => boolean): CapShape {
  const tidy = capTidy(points, forbid);
  if (tidy) return tidy;
  const even = capRemesh(points, forbid);
  if (even) return even;
  const plain = capPlain(points, forbid);
  if (plain) return plain;
  const n = points.length;
  const { centre } = loopFrame(points);
  return { inner: [centre], tris: points.map((_, i) => [i, (i + 1) % n, n]) };
}

/**
 * A tidy cap over a flat outline with holes: `loops[0]` is the outline, the others are
 * holes inside it, all in one plane. Indices in `tris` run over the loops' points in order
 * (loop 0, then loop 1, ...) and then `inner`. Wound like loop 0. Null when it can't be made.
 */
export function capTidyHoles(loops: V3[][]): CapShape | null {
  const points = loops.flat();
  const total = points.length;
  if (loops.some((l) => l.length < 3)) return null;
  const { centre, normal: raw } = loopFrame(loops[0]);
  const nl = len(raw);
  if (nl < 1e-12) return null;
  const normal = scale(raw, 1 / nl);
  const [u, w] = orthoBasis(normal);
  const flat: [number, number][] = points.map((p) => {
    const d = sub(p, centre);
    return [dot(d, u), dot(d, w)];
  });
  const cons: [number, number][] = [];
  const segs: [number, number][] = [];
  let start = 0;
  for (const l of loops) {
    for (let i = 0; i < l.length; i++) {
      cons.push([start + i, start + ((i + 1) % l.length)]);
      segs.push([start + i, start + ((i + 1) % l.length)]);
    }
    start += l.length;
  }
  const edges = segs.map(([a, b]) => len(sub(points[a], points[b]))).sort((a, b) => a - b);
  let step = edges[edges.length >> 1] || 1e-6;
  let lo = [Infinity, Infinity], hi = [-Infinity, -Infinity];
  for (const [x, y] of flat) {
    lo = [Math.min(lo[0], x), Math.min(lo[1], y)];
    hi = [Math.max(hi[0], x), Math.max(hi[1], y)];
  }
  while (((hi[0] - lo[0]) / step) * ((hi[1] - lo[1]) / step) > 2500) step *= 1.25; // a flat cap needs no fine grid
  const grid = new Grid2(flat, step);
  const inner2: [number, number][] = [];
  for (let gx = lo[0] + step / 2; gx < hi[0]; gx += step) {
    for (let gy = lo[1] + step / 2; gy < hi[1]; gy += step) {
      let inside = false; // even-odd over every loop, so holes stay empty
      for (const [a, b] of segs) {
        const [x0, y0] = flat[a];
        const [x1, y1] = flat[b];
        if (y0 > gy !== y1 > gy) {
          const xAt = x0 + ((gy - y0) * (x1 - x0)) / (y1 - y0 || 1e-30);
          if (gx < xAt) inside = !inside;
        }
      }
      if (inside && grid.nearest(gx, gy, 1)[0][1] > step * 0.5) inner2.push([gx, gy]);
    }
  }
  let tris: number[][];
  try {
    tris = cdt2d([...flat, ...inner2], cons, { exterior: false });
  } catch {
    return null;
  }
  if (tris.length !== total - 2 + 2 * (loops.length - 1) + 2 * inner2.length) return null;
  // wind like loop 0: its signed area tells which way round it runs
  let area0 = 0;
  for (let i = 0; i < loops[0].length; i++) {
    const [x0, y0] = flat[i], [x1, y1] = flat[(i + 1) % loops[0].length];
    area0 += x0 * y1 - x1 * y0;
  }
  const all = [...flat, ...inner2];
  tris = tris.map((t) => {
    const [a, b, c] = t.map((i) => all[i]);
    const s = (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    return s * area0 >= 0 ? t : [t[0], t[2], t[1]];
  });
  const inner: V3[] = inner2.map(([x, y]) => [
    centre[0] + u[0] * x + w[0] * y,
    centre[1] + u[1] * x + w[1] * y,
    centre[2] + u[2] * x + w[2] * y,
  ]);
  return { inner, tris };
}
