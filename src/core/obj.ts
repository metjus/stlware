/** OBJ reading (with optional MTL colours) for importing coloured models. */
import type { Soup } from './mesh';

export interface ColouredSoup extends Soup {
  colors: Uint8Array;
  /** sRGB hex per colour index. */
  palette: string[];
  names: string[];
}

export function parseMtl(text: string): Map<string, string> {
  const out = new Map<string, string>();
  let current = '';
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line.startsWith('newmtl ')) current = line.slice(7).trim();
    else if (line.startsWith('Kd ') && current) {
      const [r, g, b] = line.slice(3).trim().split(/\s+/).map(Number);
      out.set(current, rgbHex(r, g, b));
    }
  }
  return out;
}

export function rgbHex(r: number, g: number, b: number): string {
  const h = (v: number) => Math.round(Math.max(0, Math.min(1, v || 0)) * 255).toString(16).padStart(2, '0');
  return ('#' + h(r) + h(g) + h(b)).toUpperCase();
}

export function readObj(text: string, mtl?: Map<string, string>): ColouredSoup {
  const verts: number[] = [];
  const vcol: (string | null)[] = [];
  const pos: number[] = [];
  const colours: number[] = [];
  const palette: string[] = [];
  const names: string[] = [];
  const keyIndex = new Map<string, number>();
  let currentKey = '';
  const objects: number[] = [];
  const objectNames: string[] = [];
  let currentObject = -1;
  const colourOf = (key: string, hex: string, name: string) => {
    let i = keyIndex.get(key);
    if (i === undefined) {
      i = palette.length;
      keyIndex.set(key, i);
      palette.push(hex);
      names.push(name);
    }
    return i;
  };
  const defaultHex = ['#D9D9D9', '#E72727', '#2761E7', '#2BA84A', '#F2C200', '#8E44AD', '#F28C28', '#000000'];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line.startsWith('v ')) {
      const p = line.slice(2).trim().split(/\s+/).map(Number);
      verts.push(p[0], p[1], p[2]);
      vcol.push(p.length >= 6 ? rgbHex(p[3], p[4], p[5]) : null);
    } else if (line.startsWith('o ') || (line.startsWith('g ') && currentObject < 0)) {
      objectNames.push(line.slice(2).trim() || `Object ${objectNames.length + 1}`);
      currentObject = objectNames.length - 1;
    } else if (line.startsWith('usemtl ')) {
      currentKey = line.slice(7).trim();
    } else if (line.startsWith('f ')) {
      const idx = line.slice(2).trim().split(/\s+/).map((tok) => {
        const v = parseInt(tok.split('/')[0], 10);
        return v < 0 ? verts.length / 3 + v : v - 1;
      });
      let c: number;
      const vc = vcol[idx[0]];
      if (vc) c = colourOf('vc' + vc, vc, vc);
      else if (currentKey) c = colourOf('m' + currentKey, mtl?.get(currentKey) ?? defaultHex[keyIndex.size % defaultHex.length], currentKey);
      else c = colourOf('', '#D9D9D9', 'Base');
      for (let k = 1; k + 1 < idx.length; k++) {
        for (const v of [idx[0], idx[k], idx[k + 1]]) pos.push(verts[3 * v], verts[3 * v + 1], verts[3 * v + 2]);
        colours.push(c);
        objects.push(Math.max(0, currentObject));
      }
    }
  }
  return {
    positions: Float32Array.from(pos), colors: Uint8Array.from(colours), palette, names,
    objects: Uint16Array.from(objects), objectNames: objectNames.length ? objectNames : undefined,
  };
}
