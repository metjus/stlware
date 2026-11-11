/**
 * The paintable mesh: welded vertices, triangles and one colour per triangle,
 * plus the connectivity that Fill, Smooth and Fill Gaps need (built once, lazily).
 *
 * Everything is in typed arrays so models with millions of triangles stay fast.
 */

export interface Soup {
  /** 9 floats per triangle (three corners, x y z), millimetres. */
  positions: Float32Array;
  /** Colour index per triangle (optional, 0 when missing). */
  colors?: Uint8Array;
  /** Object number per triangle (optional, 0 when missing) and the objects' names. */
  objects?: Uint16Array;
  objectNames?: string[];
}

export class PaintMesh {
  readonly positions: Float32Array; // 3 per vertex
  readonly index: Uint32Array; // 3 per face
  readonly faceCount: number;
  readonly vertexCount: number;
  faceColor: Uint8Array;
  /** Which object (model) each triangle belongs to. */
  faceObject: Uint16Array;

  private _normals: Float32Array | null = null;
  private _areas: Float32Array | null = null;
  private _neighbours: Int32Array | null = null;
  private _vertexFaces: { start: Uint32Array; faces: Uint32Array } | null = null;

  constructor(positions: Float32Array, index: Uint32Array, faceColor?: Uint8Array, faceObject?: Uint16Array) {
    this.positions = positions;
    this.index = index;
    this.faceCount = index.length / 3;
    this.vertexCount = positions.length / 3;
    this.faceColor = faceColor ?? new Uint8Array(this.faceCount);
    this.faceObject = faceObject ?? new Uint16Array(this.faceCount);
  }

  /** The same mesh with other face colours (shares everything worked out from the shape). */
  withColours(faceColor: Uint8Array): PaintMesh {
    const m = new PaintMesh(this.positions, this.index, faceColor, this.faceObject);
    m._normals = this._normals;
    m._areas = this._areas;
    m._neighbours = this._neighbours;
    m._vertexFaces = this._vertexFaces;
    return m;
  }

  /** The same mesh with vertices moved (the triangles are unchanged, so the connectivity holds). */
  withPositions(positions: Float32Array): PaintMesh {
    const m = new PaintMesh(positions, this.index, this.faceColor, this.faceObject);
    m._neighbours = this._neighbours;
    m._vertexFaces = this._vertexFaces;
    return m;
  }

  /** Build from a triangle soup: identical corners are merged, degenerate triangles dropped. */
  static fromSoup(soup: Soup): PaintMesh {
    const { positions: welded, index } = weld(soup.positions);
    const n = index.length / 3;
    const keep = new Uint32Array(index.length);
    const colors = new Uint8Array(n);
    const objects = new Uint16Array(n);
    let f = 0;
    for (let t = 0; t < n; t++) {
      const a = index[3 * t], b = index[3 * t + 1], c = index[3 * t + 2];
      if (a === b || b === c || a === c) continue;
      keep[3 * f] = a;
      keep[3 * f + 1] = b;
      keep[3 * f + 2] = c;
      colors[f] = soup.colors ? soup.colors[t] : 0;
      objects[f] = soup.objects ? soup.objects[t] : 0;
      f++;
    }
    return new PaintMesh(welded, keep.slice(0, 3 * f), colors.slice(0, f), objects.slice(0, f));
  }

  /** Unit normal per face (3 floats). */
  normals(): Float32Array {
    if (!this._normals) this.computeNormalsAndAreas();
    return this._normals!;
  }

  /** Area per face, mm². */
  areas(): Float32Array {
    if (!this._areas) this.computeNormalsAndAreas();
    return this._areas!;
  }

  private computeNormalsAndAreas() {
    const { positions: p, index: ix, faceCount } = this;
    const normals = new Float32Array(faceCount * 3);
    const areas = new Float32Array(faceCount);
    for (let f = 0; f < faceCount; f++) {
      const a = ix[3 * f] * 3, b = ix[3 * f + 1] * 3, c = ix[3 * f + 2] * 3;
      const ux = p[b] - p[a], uy = p[b + 1] - p[a + 1], uz = p[b + 2] - p[a + 2];
      const vx = p[c] - p[a], vy = p[c + 1] - p[a + 1], vz = p[c + 2] - p[a + 2];
      const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
      const len = Math.hypot(nx, ny, nz);
      areas[f] = len / 2;
      const inv = len > 0 ? 1 / len : 0;
      normals[3 * f] = nx * inv;
      normals[3 * f + 1] = ny * inv;
      normals[3 * f + 2] = nz * inv;
    }
    this._normals = normals;
    this._areas = areas;
  }

  /**
   * The face across each edge: neighbours[3f + e] is the face sharing edge e
   * (corner e to corner e+1) of face f, or -1 at an open or non-manifold edge.
   */
  neighbours(): Int32Array {
    if (this._neighbours) return this._neighbours;
    const { index: ix, faceCount } = this;
    const halfEdges = faceCount * 3;
    const nb = new Int32Array(halfEdges).fill(-1);
    let size = 1;
    while (size < halfEdges * 2) size <<= 1;
    const mask = size - 1;
    const keyLo = new Int32Array(size);
    const keyHi = new Int32Array(size);
    const value = new Int32Array(size).fill(-1); // half-edge id, -2 once paired
    for (let h = 0; h < halfEdges; h++) {
      const f = (h / 3) | 0;
      const e = h - 3 * f;
      const a = ix[h], b = ix[3 * f + ((e + 1) % 3)];
      const lo = a < b ? a : b, hi = a < b ? b : a;
      let slot = (Math.imul(lo, 0x9e3779b1) ^ Math.imul(hi, 0x85ebca6b)) & mask;
      for (;;) {
        const v = value[slot];
        if (v === -1) {
          keyLo[slot] = lo;
          keyHi[slot] = hi;
          value[slot] = h;
          break;
        }
        if (keyLo[slot] === lo && keyHi[slot] === hi) {
          if (v >= 0) {
            const g = (v / 3) | 0;
            if (g !== f) {
              nb[h] = g;
              nb[v] = f;
            }
            value[slot] = -2; // a third face on this edge stays unpaired
          }
          break;
        }
        slot = (slot + 1) & mask;
      }
    }
    this._neighbours = nb;
    return nb;
  }

  /** Faces around each vertex (CSR: faces[start[v] .. start[v+1]]). */
  vertexFaces(): { start: Uint32Array; faces: Uint32Array } {
    if (this._vertexFaces) return this._vertexFaces;
    const { index: ix, vertexCount } = this;
    const start = new Uint32Array(vertexCount + 1);
    for (let i = 0; i < ix.length; i++) start[ix[i] + 1]++;
    for (let v = 0; v < vertexCount; v++) start[v + 1] += start[v];
    const fill = start.slice(0, vertexCount);
    const faces = new Uint32Array(ix.length);
    for (let i = 0; i < ix.length; i++) faces[fill[ix[i]]++] = (i / 3) | 0;
    this._vertexFaces = { start, faces };
    return this._vertexFaces;
  }

  /** Axis-aligned bounds: [minX, minY, minZ, maxX, maxY, maxZ]. */
  bounds(): number[] {
    const p = this.positions;
    const b = [Infinity, Infinity, Infinity, -Infinity, -Infinity, -Infinity];
    for (let i = 0; i < p.length; i += 3) {
      for (let k = 0; k < 3; k++) {
        const v = p[i + k];
        if (v < b[k]) b[k] = v;
        if (v > b[k + 3]) b[k + 3] = v;
      }
    }
    return b;
  }

  /**
   * Smooth-shading normals for every corner (9 floats per face), averaging only the
   * faces around a vertex that bend less than `creaseDeg` from the face itself,
   * so hard edges stay sharp.
   */
  cornerNormals(creaseDeg = 50): Float32Array {
    const fn = this.normals();
    const areas = this.areas();
    const { start, faces } = this.vertexFaces();
    const { index: ix, faceCount } = this;
    const out = new Float32Array(faceCount * 9);
    const minDot = Math.cos((creaseDeg * Math.PI) / 180);
    for (let f = 0; f < faceCount; f++) {
      const fx = fn[3 * f], fy = fn[3 * f + 1], fz = fn[3 * f + 2];
      for (let c = 0; c < 3; c++) {
        const v = ix[3 * f + c];
        let x = 0, y = 0, z = 0;
        for (let k = start[v]; k < start[v + 1]; k++) {
          const g = faces[k];
          const gx = fn[3 * g], gy = fn[3 * g + 1], gz = fn[3 * g + 2];
          if (g === f || fx * gx + fy * gy + fz * gz >= minDot) {
            const w = areas[g];
            x += gx * w;
            y += gy * w;
            z += gz * w;
          }
        }
        const len = Math.hypot(x, y, z) || 1;
        const o = 9 * f + 3 * c;
        out[o] = x / len;
        out[o + 1] = y / len;
        out[o + 2] = z / len;
      }
    }
    return out;
  }
}

/** Merge corners closer than 1e-4 mm. Returns welded positions and an index per corner. */
export function weld(soup: Float32Array): { positions: Float32Array; index: Uint32Array } {
  const corners = soup.length / 3;
  let size = 1;
  while (size < corners * 2) size <<= 1;
  const mask = size - 1;
  const table = new Int32Array(size).fill(-1);
  const qx = new Int32Array(corners), qy = new Int32Array(corners), qz = new Int32Array(corners);
  const out = new Float32Array(soup.length);
  const index = new Uint32Array(corners);
  const q = 1e4;
  let count = 0;
  for (let i = 0; i < corners; i++) {
    const x = soup[3 * i], y = soup[3 * i + 1], z = soup[3 * i + 2];
    const ix = Math.round(x * q) | 0, iy = Math.round(y * q) | 0, iz = Math.round(z * q) | 0;
    let slot = (Math.imul(ix, 73856093) ^ Math.imul(iy, 19349663) ^ Math.imul(iz, 83492791)) & mask;
    for (;;) {
      const j = table[slot];
      if (j < 0) {
        table[slot] = count;
        qx[count] = ix;
        qy[count] = iy;
        qz[count] = iz;
        out[3 * count] = x;
        out[3 * count + 1] = y;
        out[3 * count + 2] = z;
        index[i] = count++;
        break;
      }
      if (qx[j] === ix && qy[j] === iy && qz[j] === iz) {
        index[i] = j;
        break;
      }
      slot = (slot + 1) & mask;
    }
  }
  return { positions: out.slice(0, count * 3), index };
}

/** Two meshes as one (each keeps its own position); `colourOf` maps b's colours. */
export function joinMeshes(a: PaintMesh, b: PaintMesh, colourOf: (c: number) => number, objectOffset?: number): PaintMesh {
  const positions = new Float32Array(a.positions.length + b.positions.length);
  positions.set(a.positions);
  positions.set(b.positions, a.positions.length);
  const index = new Uint32Array(a.index.length + b.index.length);
  index.set(a.index);
  const off = a.vertexCount;
  for (let i = 0; i < b.index.length; i++) index[a.index.length + i] = b.index[i] + off;
  const faceColor = new Uint8Array(a.faceCount + b.faceCount);
  faceColor.set(a.faceColor);
  for (let f = 0; f < b.faceCount; f++) faceColor[a.faceCount + f] = colourOf(b.faceColor[f]);
  const faceObject = new Uint16Array(a.faceCount + b.faceCount);
  faceObject.set(a.faceObject);
  const objOffset = objectOffset ?? (a.faceCount ? objectsIn(a).reduce((x, y) => Math.max(x, y), 0) + 1 : 0);
  for (let f = 0; f < b.faceCount; f++) faceObject[a.faceCount + f] = b.faceObject[f] + objOffset;
  return new PaintMesh(positions, index, faceColor, faceObject);
}

function objectsIn(m: PaintMesh): number[] {
  return Array.from(new Set(m.faceObject));
}

/** Only the faces where `keep` is true (unused vertices dropped), colours and objects kept. */
export function subsetMesh(m: PaintMesh, keep: (f: number) => boolean): PaintMesh {
  const map = new Int32Array(m.vertexCount).fill(-1);
  const idx = new Uint32Array(m.index.length);
  const col = new Uint8Array(m.faceCount);
  const obj = new Uint16Array(m.faceCount);
  let nf = 0, nv = 0;
  for (let f = 0; f < m.faceCount; f++) {
    if (!keep(f)) continue;
    for (let c = 0; c < 3; c++) {
      const v = m.index[3 * f + c];
      if (map[v] < 0) map[v] = nv++;
      idx[3 * nf + c] = map[v];
    }
    col[nf] = m.faceColor[f];
    obj[nf] = m.faceObject[f];
    nf++;
  }
  const pos = new Float32Array(nv * 3);
  for (let v = 0; v < m.vertexCount; v++) {
    const t = map[v];
    if (t < 0) continue;
    pos[3 * t] = m.positions[3 * v];
    pos[3 * t + 1] = m.positions[3 * v + 1];
    pos[3 * t + 2] = m.positions[3 * v + 2];
  }
  return new PaintMesh(pos, idx.slice(0, 3 * nf), col.slice(0, nf), obj.slice(0, nf));
}

/** The mesh scaled about the origin, colours kept. */
export function scaleMesh(m: PaintMesh, factor: number): PaintMesh {
  return new PaintMesh(m.positions.map((v) => v * factor), m.index, m.faceColor, m.faceObject);
}
