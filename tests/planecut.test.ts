import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { PaintMesh, joinMeshes } from '../src/core/mesh';
import { openEdges } from '../src/core/split';
import { anglesOfNormal, cutByPlane, inSection, normalFromAngles, planeFrame, planeSections, sliceLoops, type CutPlane } from '../src/core/planecut';

/** A closed box as its own shell, painted one colour. */
function box(x: number, y: number, z: number, sx: number, sy: number, sz: number, colour = 0) {
  const g = new THREE.BoxGeometry(sx, sy, sz, 2, 2, 4).translate(x, y, z).toNonIndexed();
  const positions = new Float32Array(g.getAttribute('position').array);
  return PaintMesh.fromSoup({ positions, colors: new Uint8Array(positions.length / 9).fill(colour) });
}

/** A "hand": a palm with three fingers pushed into it (overlapping shells, like many sculpts). */
function hand() {
  const parts = [box(0, 0, 5, 30, 10, 10, 0), box(-10, 0, 20, 6, 6, 24, 1), box(0, 0, 22, 6, 6, 28, 2), box(10, 0, 20, 6, 6, 24, 1)];
  return parts.reduce((a, b) => joinMeshes(a, b, (c) => c, 0));
}

const volume = (m: PaintMesh) => {
  let v = 0;
  const p = m.positions, ix = m.index;
  for (let f = 0; f < m.faceCount; f++) {
    const a = ix[3 * f] * 3, b = ix[3 * f + 1] * 3, c = ix[3 * f + 2] * 3;
    v += (p[a] * (p[b + 1] * p[c + 2] - p[b + 2] * p[c + 1]) - p[a + 1] * (p[b] * p[c + 2] - p[b + 2] * p[c]) + p[a + 2] * (p[b] * p[c + 1] - p[b + 1] * p[c])) / 6;
  }
  return v;
};

describe('plane cut', () => {
  const plane: CutPlane = { n: [0, 0, 1], d: 25 };

  it('angles and normals round-trip', () => {
    for (const [t, a] of [[0, 0], [90, 0], [90, 90], [30, 200], [150, 45]]) {
      const n = normalFromAngles(t, a);
      const back = anglesOfNormal(n);
      expect(back.tilt).toBeCloseTo(t, 6);
      if (t !== 0) expect(back.turn).toBeCloseTo(a, 6);
    }
  });

  it('finds one section per finger', async () => {
    const m = hand();
    expect(sliceLoops(m, plane).length).toBe(3);
    const s = await planeSections(m, plane);
    expect(s.length).toBe(3);
    for (const sec of s) expect(sec.area).toBeCloseTo(36, 3);
    const { to2 } = planeFrame(plane);
    expect(s.filter((sec) => inSection(sec, to2([0, 0, 25]))).length).toBe(1);
    expect(s.filter((sec) => inSection(sec, to2([5, 0, 25]))).length).toBe(0);
    // across the palm, where the fingers are pushed in: one section, overlaps joined
    const palm = await planeSections(m, { n: [0, 0, 1], d: 9 });
    expect(palm.length).toBe(1);
    expect(palm[0].area).toBeCloseTo(300, 2);
  });

  it('cuts only the middle finger', async () => {
    const m = hand();
    const s = await planeSections(m, plane);
    const { to2 } = planeFrame(plane);
    const chosen = s.map((sec) => inSection(sec, to2([0, 0, 25])));
    const res = await cutByPlane(m, plane, s, chosen);
    expect(res.failed).toEqual([]);
    expect(res.pieces.length).toBe(2);
    const [a, b] = res.pieces.map((p) => p.mesh).sort((x, y) => volume(x) - volume(y));
    expect(openEdges(a)).toBe(0);
    expect(openEdges(b)).toBe(0);
    // the tip: 6 x 6 x (36 - 25) above the cut
    expect(volume(a)).toBeCloseTo(6 * 6 * 11, 0);
    // painted colours stay, the cut face takes the finger's colour
    expect(new Set(a.faceColor)).toEqual(new Set([2]));
    expect(new Set(b.faceColor)).toEqual(new Set([0, 1, 2]));
  });

  it('cuts every section, and tilted planes too', async () => {
    const m = hand();
    const s = await planeSections(m, plane);
    const res = await cutByPlane(m, plane, s, s.map(() => true));
    expect(res.pieces.length).toBe(4);
    const tilted: CutPlane = { n: normalFromAngles(20, 0), d: 0 };
    tilted.d = 20 * tilted.n[2];
    const st = await planeSections(m, tilted);
    const rt = await cutByPlane(m, tilted, st, st.map(() => true));
    const total = rt.pieces.reduce((v, p) => v + volume(p.mesh), 0);
    const whole = res.pieces.reduce((v, p) => v + volume(p.mesh), 0);
    expect(rt.pieces.length).toBeGreaterThanOrEqual(2);
    expect(Math.abs(total - whole)).toBeLessThan(whole * 0.002);
    for (const p of rt.pieces) expect(openEdges(p.mesh)).toBe(0);
  });

  it('leaves a model alone when nothing is chosen or the plane misses it', async () => {
    const m = hand();
    const s = await planeSections(m, plane);
    expect((await cutByPlane(m, plane, s, s.map(() => false))).pieces.length).toBe(1);
    expect(await planeSections(m, { n: [0, 0, 1], d: 100 })).toEqual([]);
  });
});
