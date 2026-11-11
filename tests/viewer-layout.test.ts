import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { PaintMesh } from '../src/core/mesh';
import { renderLayout } from '../src/viewer';

function mesh() {
  const g = new THREE.BoxGeometry(2, 2, 2, 3, 3, 3).toNonIndexed();
  const s = new THREE.SphereGeometry(1, 24, 12).translate(3, 0, 0).toNonIndexed();
  const a = g.getAttribute('position').array as Float32Array, b = s.getAttribute('position').array as Float32Array;
  const positions = new Float32Array(a.length + b.length);
  positions.set(a);
  positions.set(b, a.length);
  return PaintMesh.fromSoup({ positions });
}

describe('render layout', () => {
  for (const ownerFirst of [true, false]) {
    it(`every face owns one vertex (owner ${ownerFirst ? 'first' : 'last'}), shape and winding kept`, () => {
      const pm = mesh();
      const L = renderLayout(pm, ownerFirst);
      const slots = L.positions.length / 3;
      expect(L.index.length).toBe(pm.index.length);
      expect(slots).toBeLessThan(pm.faceCount * 3); // shared where smooth
      expect(slots).toBeGreaterThanOrEqual(pm.faceCount); // one owner per face
      const seen = new Set<number>();
      const fn = pm.normals();
      for (let f = 0; f < pm.faceCount; f++) {
        const own = L.owner[f];
        expect(seen.has(own)).toBe(false);
        seen.add(own);
        expect(L.index[3 * f + (ownerFirst ? 0 : 2)]).toBe(own);
        // the same three points as the paint mesh, in the same order up to rotation
        const want = [0, 1, 2].map((c) => Array.from(pm.positions.subarray(3 * pm.index[3 * f + c], 3 * pm.index[3 * f + c] + 3)).join());
        const got = [0, 1, 2].map((c) => Array.from(L.positions.subarray(3 * L.index[3 * f + c], 3 * L.index[3 * f + c] + 3)).join());
        const r = want.indexOf(got[0]);
        expect(r).toBeGreaterThanOrEqual(0);
        expect(got).toEqual([want[r], want[(r + 1) % 3], want[(r + 2) % 3]]);
        // normals point the face's way (not flipped)
        for (let c = 0; c < 3; c++) {
          const v = L.index[3 * f + c];
          const d = (L.normals[3 * v] * fn[3 * f] + L.normals[3 * v + 1] * fn[3 * f + 1] + L.normals[3 * v + 2] * fn[3 * f + 2]) / 127;
          expect(d).toBeGreaterThan(0.3);
        }
      }
    });
  }
});
