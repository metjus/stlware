import { describe, expect, it } from 'vitest';
import { zipSync, strToU8 } from 'fflate';
import { PaintMesh } from '../src/core/mesh';
import { PaintSession } from '../src/core/paint';
import { readStl, writeStl } from '../src/core/stl';
import { readObj, parseMtl } from '../src/core/obj';
import { paintColorCode, decodePaint, encodePaint, splitLeaves, read3mf, write3mf, type PaintTree } from '../src/core/threemf';

// unit cube, 8 vertices, 12 outward triangles
const CUBE_V = [[0, 0, 0], [10, 0, 0], [10, 10, 0], [0, 10, 0], [0, 0, 10], [10, 0, 10], [10, 10, 10], [0, 10, 10]];
const CUBE_T = [[0, 2, 1], [0, 3, 2], [4, 5, 6], [4, 6, 7], [0, 1, 5], [0, 5, 4], [1, 2, 6], [1, 6, 5], [2, 3, 7], [2, 7, 6], [3, 0, 4], [3, 4, 7]];

function cubeSoup(colors?: number[]) {
  const positions = new Float32Array(CUBE_T.flatMap((t) => t.flatMap((i) => CUBE_V[i])));
  return { positions, colors: colors ? Uint8Array.from(colors) : undefined };
}

/** Every edge used by exactly two faces, once in each direction. */
function watertight(index: ArrayLike<number>) {
  const edges = new Map<string, number>();
  for (let f = 0; f < index.length / 3; f++) {
    for (let e = 0; e < 3; e++) {
      const k = `${index[3 * f + e]},${index[3 * f + ((e + 1) % 3)]}`;
      edges.set(k, (edges.get(k) ?? 0) + 1);
    }
  }
  for (const [k, n] of edges) {
    const [a, b] = k.split(',');
    if (n !== 1 || edges.get(`${b},${a}`) !== 1) return false;
  }
  return true;
}

function randomTree(rng: () => number, depth = 0): PaintTree {
  if (depth > 2 || rng() < 0.4) return Math.floor(rng() * 20);
  const sides = 1 + Math.floor(rng() * 3);
  const special = sides === 3 ? 0 : Math.floor(rng() * 3);
  return [sides, special, Array.from({ length: sides + 1 }, () => randomTree(rng, depth + 1))];
}

function rng(seed: number) {
  return () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
}

describe('mesh', () => {
  it('welds a cube soup into 8 vertices and pairs every edge', () => {
    const m = PaintMesh.fromSoup(cubeSoup());
    expect(m.vertexCount).toBe(8);
    expect(m.faceCount).toBe(12);
    expect(watertight(m.index)).toBe(true);
    expect(Array.from(m.neighbours()).every((n) => n >= 0)).toBe(true);
    expect(m.areas().reduce((a, b) => a + b, 0)).toBeCloseTo(600);
  });

  it('drops degenerate triangles and keeps colours in step', () => {
    const soup = cubeSoup([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const extra = new Float32Array([1, 1, 1, 1, 1, 1, 2, 2, 2]);
    const positions = new Float32Array(soup.positions.length + 9);
    positions.set(soup.positions.subarray(0, 9 * 5));
    positions.set(extra, 9 * 5);
    positions.set(soup.positions.subarray(9 * 5), 9 * 6);
    const colors = Uint8Array.from([0, 1, 2, 3, 4, 99, 5, 6, 7, 8, 9, 10, 11]);
    const m = PaintMesh.fromSoup({ positions, colors });
    expect(m.faceCount).toBe(12);
    expect(Array.from(m.faceColor)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
});

describe('paint', () => {
  it('fills by angle, stops at colour, undoes and redoes', () => {
    const m = PaintMesh.fromSoup(cubeSoup());
    const s = new PaintSession(m);
    expect(s.region(0, { sameColour: true, maxAngle: 30 }).length).toBe(2); // one cube side
    expect(s.region(0, { sameColour: true, maxAngle: null }).length).toBe(12);
    s.apply([2, 3], 1);
    expect(s.region(0, { sameColour: true, maxAngle: null }).length).toBe(10);
    s.undo();
    expect(m.faceColor[2]).toBe(0);
    s.redo();
    expect(m.faceColor[2]).toBe(1);
  });

  it('removes a colour and shifts higher ones down', () => {
    const m = PaintMesh.fromSoup(cubeSoup([0, 1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0]));
    const s = new PaintSession(m);
    s.removeColour(2);
    expect(Array.from(m.faceColor.slice(0, 4))).toEqual([0, 1, 0, 2]);
  });

  it('fills an enclosed unpainted gap', () => {
    const m = PaintMesh.fromSoup(cubeSoup([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]));
    const s = new PaintSession(m);
    expect(s.fillGaps(1, 1000)).toBe(1);
    expect(Array.from(m.faceColor).every((c) => c === 1)).toBe(true);
    expect(s.fillGaps(1, 1000)).toBe(0);
  });

  it('smooths a single odd face', () => {
    const m = PaintMesh.fromSoup(cubeSoup([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]));
    const s = new PaintSession(m);
    s.smooth([11]);
    expect(m.faceColor[11]).toBe(0);
  });
});

describe('stl / obj', () => {
  it('round-trips binary STL', () => {
    const m = PaintMesh.fromSoup(cubeSoup());
    const bin = writeStl(m.positions, m.index);
    const back = PaintMesh.fromSoup(readStl(bin.buffer as ArrayBuffer));
    expect(back.faceCount).toBe(12);
    expect(back.vertexCount).toBe(8);
  });

  it('reads ASCII STL', () => {
    const text = 'solid t\nfacet normal 0 0 1\nouter loop\nvertex 0 0 0\nvertex 1 0 0\nvertex 0 1 0\nendloop\nendfacet\nendsolid t\n';
    expect(readStl(strToU8(text).buffer as ArrayBuffer).positions.length).toBe(9);
  });

  it('reads OBJ with MTL colours', () => {
    const mtl = parseMtl('newmtl red\nKd 1 0 0\nnewmtl blue\nKd 0 0 1\n');
    const obj = readObj('v 0 0 0\nv 1 0 0\nv 1 1 0\nv 0 1 0\nusemtl red\nf 1 2 3\nusemtl blue\nf 1 3 4\n', mtl);
    expect(obj.palette).toEqual(['#FF0000', '#0000FF']);
    expect(Array.from(obj.colors)).toEqual([0, 1]);
  });
});

describe('3mf', () => {
  it('encodes known paint codes', () => {
    expect([0, 1, 2, 3, 4, 5, 6].map(paintColorCode)).toEqual(['', '4', '8', '0C', '1C', '2C', '3C']);
    expect(paintColorCode(16)).toBe('DC');
    expect(() => paintColorCode(19)).toThrow();
  });

  it('decodes and round-trips paint trees', () => {
    expect(['4', '8', '0C', '1C', 'DC'].map(decodePaint)).toEqual([1, 2, 3, 4, 16]);
    const r = rng(7);
    for (let i = 0; i < 300; i++) {
      const tree = randomTree(r);
      expect(decodePaint(encodePaint(tree))).toEqual(tree);
    }
    for (let n = 1; n <= 16; n++) expect(decodePaint(paintColorCode(n))).toBe(n);
    expect(() => decodePaint('3')).toThrow();
  });

  it('split leaves cover the triangle with the same winding', () => {
    const r = rng(3);
    for (let i = 0; i < 100; i++) {
      const verts = [[0, 0], [8, 0], [0, 6]];
      const mids = new Map<string, number>();
      const midpoint = (a: number, b: number) => {
        const k = a < b ? `${a},${b}` : `${b},${a}`;
        if (!mids.has(k)) {
          verts.push([(verts[a][0] + verts[b][0]) / 2, (verts[a][1] + verts[b][1]) / 2]);
          mids.set(k, verts.length - 1);
        }
        return mids.get(k)!;
      };
      const leaves = splitLeaves([0, 1, 2], randomTree(r), midpoint);
      const area = (a: number, b: number, c: number) =>
        ((verts[b][0] - verts[a][0]) * (verts[c][1] - verts[a][1]) - (verts[c][0] - verts[a][0]) * (verts[b][1] - verts[a][1])) / 2;
      expect(leaves.reduce((s, [a, b, c]) => s + area(a, b, c), 0)).toBeCloseTo(24);
      expect(leaves.every(([a, b, c]) => area(a, b, c) > 0)).toBe(true);
    }
  });

  it('round-trips its own export with exact colours', () => {
    const m = PaintMesh.fromSoup(cubeSoup());
    const fc = Uint8Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]);
    const data = write3mf(m.positions, m.index, fc, [{ hex: '#FFFFFF', filament: 1 }, { hex: '#FFBFCC', filament: 2 }], 'Cube');
    const imp = read3mf(data);
    expect(imp.palette).toEqual(['#FFFFFF', '#FFBFCC']);
    const back = PaintMesh.fromSoup(imp);
    expect(back.faceCount).toBe(12);
    expect(watertight(back.index)).toBe(true);
    expect(Array.from(back.faceColor).filter((c) => c === 1).length).toBe(2);
  });

  it('reads a Bambu Studio project with split painting, parts and modifiers', () => {
    const HEAD = '<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:p="http://schemas.microsoft.com/3dmanufacturing/production/2015/06">';
    const meshXml = (verts: number[][], tris: number[][], paint: string[] | null, id: string) =>
      `<object id="${id}" type="model"><mesh><vertices>${verts.map((v) => `<vertex x="${v[0]}" y="${v[1]}" z="${v[2]}"/>`).join('')}</vertices><triangles>${tris
        .map((t, i) => `<triangle v1="${t[0]}" v2="${t[1]}" v3="${t[2]}"${paint && paint[i] ? ` paint_color="${paint[i]}"` : ''}/>`)
        .join('')}</triangles></mesh></object>`;
    const paint = new Array(12).fill('');
    paint[2] = encodePaint(2);
    paint[3] = encodePaint([3, 0, [2, 0, 4, [1, 1, [0, 2]]]]);
    paint[4] = encodePaint([1, 2, [3, 0]]);
    const tetraT = [[0, 2, 1], [0, 1, 3], [1, 2, 3], [2, 0, 3]];
    const sub = HEAD + '<resources>' + meshXml(CUBE_V, CUBE_T, paint, '1') +
      meshXml([[20, 0, 0], [22, 0, 0], [20, 2, 0], [20, 0, 2]], tetraT, null, '3') +
      meshXml([[0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]], tetraT, null, '4') + '</resources><build/></model>';
    const root = HEAD + '<metadata name="Application">BambuStudio-02.01.00.00</metadata><resources>' +
      '<object id="2" type="model"><components>' +
      '<component p:path="/3D/Objects/object_1.model" objectid="1" transform="1 0 0 0 1 0 0 0 1 0 0 0"/>' +
      '<component p:path="/3D/Objects/object_1.model" objectid="3" transform="1 0 0 0 1 0 0 0 1 0 0 5"/>' +
      '<component p:path="/3D/Objects/object_1.model" objectid="4" transform="1 0 0 0 1 0 0 0 1 0 0 0"/>' +
      '</components></object></resources>' +
      '<build><item objectid="2" transform="1 0 0 0 1 0 0 0 1 120 110 0"/></build></model>';
    const settings = '<?xml version="1.0" encoding="UTF-8"?><config><object id="2">' +
      '<metadata key="name" value="Kitty"/><metadata key="extruder" value="1"/>' +
      '<part id="1" subtype="normal_part"><metadata key="extruder" value="1"/></part>' +
      '<part id="3" subtype="normal_part"><metadata key="extruder" value="3"/></part>' +
      '<part id="4" subtype="modifier_part"><metadata key="extruder" value="2"/></part>' +
      '</object></config>';
    const data = zipSync({
      '3D/3dmodel.model': strToU8(root),
      '3D/Objects/object_1.model': strToU8(sub),
      'Metadata/model_settings.config': strToU8(settings),
      'Metadata/project_settings.config': strToU8('{"filament_colour": ["#FFFFFF", "#000000", "#E72727", "#2761E7"]}'),
    });
    const imp = read3mf(data);
    expect(imp.source).toBe('bambu');
    expect(imp.splitTriangles).toBe(2);
    expect(imp.objectNames).toEqual(['Kitty']);
    expect(imp.palette).toEqual(['#FFFFFF', '#000000', '#E72727', '#2761E7']);
    const m = PaintMesh.fromSoup(imp);
    const counts = [0, 0, 0, 0];
    m.faceColor.forEach((c) => counts[c]++);
    expect(m.bounds()[0]).toBe(120);
    // the cube stays closed after split painting, modifier left out
    const cubeFaces = Array.from({ length: m.faceCount }, (_, f) => f).filter((f) => m.positions[m.index[3 * f] * 3] < 135);
    const idx = cubeFaces.flatMap((f) => [m.index[3 * f], m.index[3 * f + 1], m.index[3 * f + 2]]);
    expect(watertight(idx)).toBe(true);
    expect(counts[2]).toBe(5); // the tetra part (4) + one side leaf, filament 3
    expect(counts.reduce((a, b) => a + b)).toBeGreaterThan(21);
  });
});
