/**
 * Finer colour edges: split the triangles along colour borders into smaller ones, so a
 * border can follow a cleaner line. The shape does not change (new corners sit on the old
 * triangles), and the mesh stays closed: a neighbour that gets a new corner on one edge is
 * split in two, one with two or three new corners is split in four (red-green refinement).
 */
import { PaintMesh } from './mesh';

export interface RefineResult {
  mesh: PaintMesh;
  /** Faces of the input that were split. */
  split: number;
}

/**
 * Split faces touching a colour border (sharing a corner with a face of another colour)
 * `levels` times; each level makes their triangles four times smaller.
 * `allowed(f)` can keep faces (e.g. of hidden models) out. Returns null when there is no border.
 */
export function refineBorders(pm: PaintMesh, levels = 2, allowed?: (f: number) => boolean): RefineResult | null {
  let mesh = pm;
  let split = 0;
  let allow = allowed;
  for (let l = 0; l < levels; l++) {
    const marks = borderFaces(mesh, allow);
    if (!marks.count) break;
    if (l === 0) split = marks.count;
    const res = splitFaces(mesh, marks.faces);
    if (allow) {
      // carry the allowed faces over to the new faces through their parents
      const prev = allow, ok = new Uint8Array(res.mesh.faceCount);
      for (let f = 0; f < ok.length; f++) ok[f] = prev(res.parent[f]) ? 1 : 0;
      allow = (f: number) => ok[f] === 1;
    }
    mesh = res.mesh;
  }
  return mesh === pm ? null : { mesh, split };
}

/** Faces sharing a corner with a face of another colour. */
function borderFaces(pm: PaintMesh, allowed?: (f: number) => boolean) {
  const { start, faces: vf } = pm.vertexFaces();
  const ix = pm.index, fc = pm.faceColor;
  const onBorder = new Uint8Array(pm.vertexCount);
  for (let v = 0; v < pm.vertexCount; v++) {
    const c = fc[vf[start[v]]];
    for (let k = start[v] + 1; k < start[v + 1]; k++) {
      if (fc[vf[k]] !== c) {
        onBorder[v] = 1;
        break;
      }
    }
  }
  const faces = new Uint8Array(pm.faceCount);
  let count = 0;
  for (let f = 0; f < pm.faceCount; f++) {
    if (allowed && !allowed(f)) continue;
    if (onBorder[ix[3 * f]] || onBorder[ix[3 * f + 1]] || onBorder[ix[3 * f + 2]]) {
      faces[f] = 1;
      count++;
    }
  }
  return { faces, count };
}

/**
 * Split the marked faces in four and their neighbours as needed so no corner lands in the
 * middle of an edge. `parent[f]` is the input face each output face came from.
 */
export function splitFaces(pm: PaintMesh, marked: Uint8Array): { mesh: PaintMesh; parent: Uint32Array } {
  const nb = pm.neighbours();
  const ix = pm.index;
  const n = pm.faceCount;
  // edges to split, per half-edge (3f + e); a face with two or more split edges is split in four
  const four = marked.slice();
  const cut = new Uint8Array(3 * n);
  const stack: number[] = [];
  for (let f = 0; f < n; f++) if (four[f]) stack.push(f);
  while (stack.length) {
    const f = stack.pop()!;
    for (let e = 0; e < 3; e++) {
      if (cut[3 * f + e]) continue;
      cut[3 * f + e] = 1;
      const g = nb[3 * f + e];
      if (g < 0) continue;
      // the same edge seen from g
      for (let k = 0; k < 3; k++) {
        if (nb[3 * g + k] === f && sameEdge(ix, f, e, g, k)) {
          cut[3 * g + k] = 1;
          break;
        }
      }
      if (!four[g] && cut[3 * g] + cut[3 * g + 1] + cut[3 * g + 2] >= 2) {
        four[g] = 1;
        stack.push(g);
      }
    }
  }
  // new corners at the middle of each cut edge, shared by both faces
  const p = pm.positions;
  const extra: number[] = [];
  const mid = new Int32Array(3 * n).fill(-1);
  let nv = pm.vertexCount;
  for (let f = 0; f < n; f++) {
    for (let e = 0; e < 3; e++) {
      const h = 3 * f + e;
      if (!cut[h] || mid[h] >= 0) continue;
      const a = ix[h], b = ix[3 * f + ((e + 1) % 3)];
      const v = nv++;
      extra.push((p[3 * a] + p[3 * b]) / 2, (p[3 * a + 1] + p[3 * b + 1]) / 2, (p[3 * a + 2] + p[3 * b + 2]) / 2);
      mid[h] = v;
      const g = nb[h];
      if (g >= 0) for (let k = 0; k < 3; k++) if (nb[3 * g + k] === f && sameEdge(ix, f, e, g, k)) mid[3 * g + k] = v;
    }
  }
  const positions = new Float32Array(p.length + extra.length);
  positions.set(p);
  positions.set(extra, p.length);
  const out: number[] = [];
  const parent: number[] = [];
  const add = (f: number, a: number, b: number, c: number) => {
    out.push(a, b, c);
    parent.push(f);
  };
  for (let f = 0; f < n; f++) {
    const a = ix[3 * f], b = ix[3 * f + 1], c = ix[3 * f + 2];
    const count = cut[3 * f] + cut[3 * f + 1] + cut[3 * f + 2];
    if (four[f]) {
      const ab = mid[3 * f], bc = mid[3 * f + 1], ca = mid[3 * f + 2];
      add(f, a, ab, ca);
      add(f, ab, b, bc);
      add(f, ca, bc, c);
      add(f, ab, bc, ca);
    } else if (count === 1) {
      const e = cut[3 * f] ? 0 : cut[3 * f + 1] ? 1 : 2;
      const v0 = ix[3 * f + e], v1 = ix[3 * f + ((e + 1) % 3)], v2 = ix[3 * f + ((e + 2) % 3)];
      const m = mid[3 * f + e];
      add(f, v0, m, v2);
      add(f, m, v1, v2);
    } else add(f, a, b, c);
  }
  const par = Uint32Array.from(parent);
  const faceColor = new Uint8Array(par.length);
  const faceObject = new Uint16Array(par.length);
  for (let f = 0; f < par.length; f++) {
    faceColor[f] = pm.faceColor[par[f]];
    faceObject[f] = pm.faceObject[par[f]];
  }
  return { mesh: new PaintMesh(positions, Uint32Array.from(out), faceColor, faceObject), parent: par };
}

/** Whether edge e of face f and edge k of face g join the same two corners. */
function sameEdge(ix: Uint32Array, f: number, e: number, g: number, k: number) {
  const a = ix[3 * f + e], b = ix[3 * f + ((e + 1) % 3)];
  const c = ix[3 * g + k], d = ix[3 * g + ((k + 1) % 3)];
  return (a === d && b === c) || (a === c && b === d);
}
