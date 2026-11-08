import { describe, it, expect } from 'vitest';
import { buildFilaments, writeObj, sameColour } from '../src/core/palette';
import { PaintMesh, joinMeshes, scaleMesh, subsetMesh } from '../src/core/mesh';

describe('filament slots', () => {
  const pal = [
    { hex: '#FF0000', name: 'Red', slot: 0 },
    { hex: '#FE0101', name: 'Red 2', slot: 0 },
    { hex: '#0000FF', name: 'Blue', slot: 1 },
    { hex: '#00FF00', name: 'Green', slot: 0 },
    { hex: '#FFFFFF', name: 'Unused', slot: 0 },
  ];
  it('keeps hand-picked slots and merges close colours', () => {
    const { filaments, map } = buildFilaments(pal, new Set([0, 1, 2, 3]), true, 0.02);
    expect(filaments.map((f) => f.filament)).toEqual([1, 2, 3]);
    expect(map).toEqual([1, 1, 0, 2, -1]);
  });
  it('without merging every colour gets its own slot', () => {
    const { filaments } = buildFilaments(pal, new Set([0, 1, 2, 3]), false, 0.02);
    expect(filaments.map((f) => f.filament)).toEqual([1, 2, 3, 4]);
  });
  it('compares per channel', () => {
    expect(sameColour('#808080', '#838080', 0.02)).toBe(true);
    expect(sameColour('#808080', '#8A8080', 0.02)).toBe(false);
  });
});

describe('obj and mesh helpers', () => {
  const tri = new PaintMesh(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]), new Uint32Array([0, 1, 2]), new Uint8Array([0]));
  it('writes obj with materials', () => {
    const { obj, mtl } = writeObj(tri.positions, tri.index, [0], [{ hex: '#FF0000', name: 'Red', filament: 2, members: [0] }], 'M', 'm.mtl');
    expect(obj).toContain('usemtl F2_Red');
    expect(obj).toContain('f 1 2 3');
    expect(mtl).toContain('Kd 1 0 0');
  });
  it('joins and scales', () => {
    const j = joinMeshes(tri, tri, () => 3);
    expect(j.faceCount).toBe(2);
    expect(Array.from(j.index)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(Array.from(j.faceColor)).toEqual([0, 3]);
    expect(scaleMesh(tri, 10).positions[3]).toBe(10);
  });
  it('keeps objects apart when joining and subsetting', () => {
    const j = joinMeshes(tri, joinMeshes(tri, tri, () => 1), () => 2);
    expect(Array.from(j.faceObject)).toEqual([0, 1, 2]);
    const s = subsetMesh(j, (f) => j.faceObject[f] !== 1);
    expect(s.faceCount).toBe(2);
    expect(s.vertexCount).toBe(6);
    expect(Array.from(s.faceObject)).toEqual([0, 2]);
    expect(Array.from(s.faceColor)).toEqual([0, 2]);
    expect(Array.from(s.index)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(joinMeshes(tri, tri, () => 0, 7).faceObject[1]).toBe(7);
  });
});
