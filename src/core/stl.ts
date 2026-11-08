/** STL (binary and ASCII) reading and binary writing. */
import type { Soup } from './mesh';

export function readStl(buffer: ArrayBuffer): Soup {
  const bytes = new Uint8Array(buffer);
  if (isBinary(buffer)) {
    const view = new DataView(buffer);
    const count = view.getUint32(80, true);
    const positions = new Float32Array(count * 9);
    for (let t = 0; t < count; t++) {
      const o = 84 + t * 50 + 12;
      for (let k = 0; k < 9; k++) positions[t * 9 + k] = view.getFloat32(o + k * 4, true);
    }
    return { positions };
  }
  const text = new TextDecoder().decode(bytes);
  const re = /vertex\s+(\S+)\s+(\S+)\s+(\S+)/g;
  const values: number[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) values.push(+m[1], +m[2], +m[3]);
  const usable = values.length - (values.length % 9);
  return { positions: Float32Array.from(values.slice(0, usable)) };
}

function isBinary(buffer: ArrayBuffer): boolean {
  if (buffer.byteLength < 84) return false;
  const count = new DataView(buffer).getUint32(80, true);
  if (84 + count * 50 === buffer.byteLength) return true;
  const head = new TextDecoder().decode(new Uint8Array(buffer, 0, Math.min(512, buffer.byteLength)));
  return !(head.trimStart().startsWith('solid') && head.includes('facet'));
}

/** Binary STL of the given triangles (positions per vertex, index per corner). */
export function writeStl(positions: Float32Array, index: Uint32Array, faces?: ArrayLike<number>, name = 'STLware'): Uint8Array {
  const list = faces ?? { length: index.length / 3 };
  const count = list.length;
  const out = new Uint8Array(84 + count * 50);
  const view = new DataView(out.buffer);
  const header = new TextEncoder().encode(name.slice(0, 80));
  out.set(header, 0);
  view.setUint32(80, count, true);
  for (let i = 0; i < count; i++) {
    const f = faces ? faces[i] : i;
    const a = index[3 * f] * 3, b = index[3 * f + 1] * 3, c = index[3 * f + 2] * 3;
    const ux = positions[b] - positions[a], uy = positions[b + 1] - positions[a + 1], uz = positions[b + 2] - positions[a + 2];
    const vx = positions[c] - positions[a], vy = positions[c + 1] - positions[a + 1], vz = positions[c + 2] - positions[a + 2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const len = Math.hypot(nx, ny, nz) || 1;
    nx /= len; ny /= len; nz /= len;
    const o = 84 + i * 50;
    view.setFloat32(o, nx, true);
    view.setFloat32(o + 4, ny, true);
    view.setFloat32(o + 8, nz, true);
    let k = o + 12;
    for (const v of [a, b, c]) {
      view.setFloat32(k, positions[v], true);
      view.setFloat32(k + 4, positions[v + 1], true);
      view.setFloat32(k + 8, positions[v + 2], true);
      k += 12;
    }
  }
  return out;
}
