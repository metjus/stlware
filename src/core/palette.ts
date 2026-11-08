/**
 * Filament slots for export (port of the add-on's build_palette) and the OBJ + MTL writer.
 */
import type { ExportColour } from './threemf';

export interface SlotColour {
  hex: string;
  name: string;
  /** Filament slot chosen by hand (1-based), 0 = automatic. */
  slot: number;
}

export interface Filament extends ExportColour {
  name: string;
  /** Palette colours that print with this filament. */
  members: number[];
}

function rgb(hex: string): [number, number, number] {
  const v = parseInt(hex.replace('#', ''), 16);
  return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255];
}

/** Colours match when every channel is within `tolerance` (0..1). */
export function sameColour(a: string, b: string, tolerance: number): boolean {
  const x = rgb(a), y = rgb(b);
  return x.every((v, i) => Math.abs(v - y[i]) <= tolerance + 1e-9);
}

/**
 * Filaments for the used palette colours, and for every palette colour the filament
 * index it prints with (-1 when unused). Hand-picked slots come first and are shared
 * by colours that pick the same one; the rest take the next free slot, sharing one
 * when their colours match within `tolerance` (if `merge`).
 */
export function buildFilaments(palette: SlotColour[], used: Set<number>, merge: boolean, tolerance: number) {
  const filaments: Filament[] = [];
  const map = new Array<number>(palette.length).fill(-1);
  const auto: number[] = [];
  palette.forEach((c, i) => {
    if (!used.has(i)) return;
    if (c.slot > 0) {
      const same = filaments.findIndex((f) => f.filament === c.slot);
      if (same >= 0) {
        filaments[same].members.push(i);
        map[i] = same;
      } else {
        map[i] = filaments.length;
        filaments.push({ hex: c.hex.toUpperCase(), name: c.name, filament: c.slot, members: [i] });
      }
    } else auto.push(i);
  });
  const taken = new Set(filaments.map((f) => f.filament));
  let next = 1;
  for (const i of auto) {
    const c = palette[i];
    const match = merge ? filaments.findIndex((f) => sameColour(f.hex, c.hex, tolerance)) : -1;
    if (match >= 0) {
      filaments[match].members.push(i);
      map[i] = match;
      continue;
    }
    while (taken.has(next)) next++;
    taken.add(next);
    map[i] = filaments.length;
    filaments.push({ hex: c.hex.toUpperCase(), name: c.name, filament: next, members: [i] });
  }
  return { filaments, map };
}

const fmt = (v: number) => {
  const s = v.toFixed(6).replace(/0+$/, '').replace(/\.$/, '');
  return s === '-0' || s === '' ? '0' : s;
};

/** Material names like the add-on's: F<slot>_<name>. */
function mtlName(f: Filament) {
  return `F${f.filament}_${(f.name || f.hex).replace(/[^A-Za-z0-9_-]+/g, '_')}`;
}

/** OBJ + MTL text; faceColour indexes `filaments`. Bambu Studio's colour dialog reads the Kd colours. */
export function writeObj(positions: Float32Array, index: Uint32Array, faceColour: ArrayLike<number>, filaments: Filament[], name: string, mtlFile: string) {
  const names = filaments.map(mtlName);
  const mtl = ['# STLware Paint\n'];
  filaments.forEach((f, i) => {
    const [r, g, b] = rgb(f.hex);
    mtl.push(`\nnewmtl ${names[i]}\nKa 0 0 0\nKd ${fmt(r)} ${fmt(g)} ${fmt(b)}\nKs 0 0 0\nd 1\nillum 1\n`);
  });
  const obj = ['# STLware Paint\n', `mtllib ${mtlFile}\n`, `o ${name.replace(/\s+/g, '_') || 'Model'}\n`];
  for (let i = 0; i < positions.length; i += 3) obj.push(`v ${fmt(positions[i])} ${fmt(positions[i + 1])} ${fmt(positions[i + 2])}\n`);
  const faces = index.length / 3;
  const order = Array.from({ length: faces }, (_, f) => f).sort((a, b) => faceColour[a] - faceColour[b]);
  let current = -1;
  for (const f of order) {
    const c = faceColour[f];
    if (c !== current) {
      obj.push(`usemtl ${names[c]}\n`);
      current = c;
    }
    obj.push(`f ${index[3 * f] + 1} ${index[3 * f + 1] + 1} ${index[3 * f + 2] + 1}\n`);
  }
  return { obj: obj.join(''), mtl: mtl.join('') };
}
