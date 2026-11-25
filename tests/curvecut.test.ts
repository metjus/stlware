import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { PaintMesh, joinMeshes } from '../src/core/mesh';
import { openEdges } from '../src/core/split';
import { CreaseSnapper, OVERLAP_DEFAULTS, cutByCurve, fitCurve, heightAt, selfCrossing, type CurveFit } from '../src/core/curvecut';
import type { V3 } from '../src/core/cap';

/** A turned figurine round Z: body (r 15), neck (r 6, z 32..40), head (r 12). */
function figurine(scale = 1, segments = 64, flip = false) {
  const prof: [number, number][] = [[0, 0], [15, 0], [15, 28], [6, 32], [6, 40], [12, 44], [12, 58], [0, 62]];
  const pts = prof.map(([r, z]) => new THREE.Vector2(r * scale, z));
  const g = new THREE.LatheGeometry(pts, segments).toNonIndexed();
  g.rotateX(Math.PI / 2); // lathe turns round Y; make it Z
  const positions = new Float32Array(g.getAttribute('position').array);
  if (flip) for (let i = 0; i < positions.length; i += 9) for (let k = 0; k < 3; k++) [positions[i + 3 + k], positions[i + 6 + k]] = [positions[i + 6 + k], positions[i + 3 + k]];
  return PaintMesh.fromSoup({ positions, colors: new Uint8Array(positions.length / 9) });
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

/** A wavy line round the neck (on its surface). */
function neckLine(r = 6, wave = 1.5, n = 90): V3[] {
  // lathe has r=6 between z 32 and 40 but its faces are flat: points sit just inside, fine
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return [r * Math.cos(a), -r * Math.sin(a), 36 + wave * Math.sin(2 * a)] as V3;
  });
}

describe('curved cut', () => {
  it('fits a plane through the line and keeps its heights', () => {
    const fit = fitCurve(neckLine()) as CurveFit;
    expect(typeof fit).toBe('object');
    expect(fit.n[2]).toBeGreaterThan(0.99);
    // heights round the line: the wave
    const hs = fit.heights;
    expect(Math.max(...hs) - Math.min(...hs)).toBeGreaterThan(2.5);
    const [x, y] = fit.poly[5];
    expect(heightAt(fit, x, y)).toBeCloseTo(fit.heights[5], 6);
    expect(selfCrossing(fit.poly)).toBe(false);
  });

  it('refuses a line that folds over itself', () => {
    // a limaçon: a loop with a smaller loop inside it
    const eight: V3[] = Array.from({ length: 80 }, (_, i) => {
      const a = (i / 80) * Math.PI * 2;
      const r = 1 + 2 * Math.cos(a);
      return [10 * r * Math.cos(a), 10 * r * Math.sin(a), 0] as V3;
    });
    expect(fitCurve(eight)).toBe('folds');
    expect(fitCurve([[0, 0, 0], [0.1, 0, 0]])).toBe('short');
  });

  for (const style of ['none', 'plug', 'ring'] as const) {
    it(`cuts a figurine at the neck (${style})`, async () => {
      const pm = figurine();
      const line = neckLine();
      const fit = fitCurve(line) as CurveFit;
      const o = { ...OVERLAP_DEFAULTS, style, wall: 1.2, depth: 3 };
      const t0 = Date.now();
      const res = await cutByCurve(pm, fit, o, line, line.map(() => 0));
      const pieces = res.pieces.filter((p) => p.cut);
      expect(pieces.length).toBe(2);
      for (const p of pieces) expect(openEdges({ positions: p.mesh.positions, index: p.mesh.index })).toBe(0);
      const [a, b] = pieces.map((p) => p.mesh).sort((m, n) => m.bounds()[5] - n.bounds()[5]);
      const total = volume(pm);
      // nothing much is lost: only the clearance
      expect(volume(a) + volume(b)).toBeGreaterThan(total * 0.985);
      expect(volume(a) + volume(b)).toBeLessThan(total * 1.0001);
      if (style !== 'none') {
        expect(res.overlap).toBe(true);
        // the lower piece reaches up into the head (plug / tongue), past the highest point of the seam
        expect(a.bounds()[5]).toBeGreaterThan(37.5 + 2);
      } else {
        expect(a.bounds()[5]).toBeLessThan(37.6);
      }
      console.log(style, 'ms', Date.now() - t0, 'wall', res.wall, 'out', res.pokesOut, 'vol', volume(a).toFixed(1), volume(b).toFixed(1));
    });
  }

  it('plug on the upper piece reaches down', async () => {
    const pm = figurine();
    const line = neckLine();
    const fit = fitCurve(line) as CurveFit;
    const res = await cutByCurve(pm, fit, { ...OVERLAP_DEFAULTS, side: 'above' }, line, line.map(() => 0));
    const [, b] = res.pieces.map((p) => p.mesh).sort((m, n) => m.bounds()[5] - n.bounds()[5]);
    expect(b.bounds()[2]).toBeLessThan(34.5 - 2);
  });

  it('grows the wall when the plug would poke out of a narrowing neck', async () => {
    // a cone-shaped neck: radius shrinks fast above the line
    const prof: [number, number][] = [[0, 0], [15, 0], [15, 28], [8, 34], [4, 40], [12, 44], [12, 58], [0, 62]];
    const g = new THREE.LatheGeometry(prof.map(([r, z]) => new THREE.Vector2(r, z)), 64).toNonIndexed();
    g.rotateX(Math.PI / 2);
    const positions = new Float32Array(g.getAttribute('position').array);
    const pm = PaintMesh.fromSoup({ positions, colors: new Uint8Array(positions.length / 9) });
    const line: V3[] = Array.from({ length: 80 }, (_, i) => {
      const a = (i / 80) * Math.PI * 2;
      return [7.33 * Math.cos(a), -7.33 * Math.sin(a), 35] as V3;
    });
    const fit = fitCurve(line) as CurveFit;
    const res = await cutByCurve(pm, fit, { ...OVERLAP_DEFAULTS, depth: 3, wall: 1 }, line, line.map(() => 0));
    expect(res.wall).toBeGreaterThan(1.5);
    expect(res.pokesOut).toBe(0);
    expect(res.pieces.filter((p) => p.cut).length).toBe(2);
  });

  it('snaps to a crease and not on flat faces', () => {
    const pm = figurine(1, 48);
    const s = new CreaseSnapper(pm);
    // near the body's top edge (r 15, z 28): snaps onto it
    const q = s.snap([15, 0.5, 26.5], 3);
    expect(q).not.toBeNull();
    expect(Math.abs(q![2] - 28)).toBeLessThan(0.8);
    // middle of the flat-ish head side, far from any edge: nothing
    expect(s.snap([12, 0, 51], 2)).toBeNull();
  });
});
