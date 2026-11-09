import { it, expect } from 'vitest';
// @ts-ignore
import { readFileSync } from 'fs';
import { gunzipSync } from 'fflate';
import { readStl } from '../src/core/stl';
import { PaintMesh } from '../src/core/mesh';
import { splitColours, openEdges, type TriMesh } from '../src/core/split';

/** Benchy with a red roof (1) and its chimney (2) cut off; the bore painted or not. */
async function cutChimney(paintBore: boolean) {
  const buf = gunzipSync(new Uint8Array(readFileSync('public/samples/3dbenchy.stl.bin')));
  const pm = PaintMesh.fromSoup(readStl(buf.buffer as ArrayBuffer) as any);
  const p = pm.positions, ix = pm.index;
  for (let f = 0; f < pm.faceCount; f++) {
    const c = [0, 1, 2].map((k) => (p[3 * ix[3 * f] + k] + p[3 * ix[3 * f + 1] + k] + p[3 * ix[3 * f + 2] + k]) / 3);
    const r = Math.hypot(c[0] + 4, c[1]);
    if (r > 1.6 && r < 3.6 && c[2] > 38.9) pm.faceColor[f] = 2;
    else if (paintBore && r < 1.6 && c[2] > 36.9) pm.faceColor[f] = 2;
    else if (c[2] > 38.2 && r < 8) pm.faceColor[f] = 1;
  }
  return (await splitColours(pm, 3, { tolerance: 0.2, depth: 1.5, bodyChoice: 0, flatBottom: true, keepUncut: true, minThickness: 0, cutOffGap: 0, cut: [false, false, true], mode: ['inlay', 'inlay', 'cutoff'] }))!;
}

function facesNearChimney(m: TriMesh, test: (r: number, z: number) => boolean) {
  const p = m.positions, ix = m.index;
  const out: number[] = [];
  for (let f = 0; f < ix.length / 3; f++) {
    const c = [0, 1, 2].map((k) => (p[3 * ix[3 * f] + k] + p[3 * ix[3 * f + 1] + k] + p[3 * ix[3 * f + 2] + k]) / 3);
    if (test(Math.hypot(c[0] + 4, c[1]), c[2])) out.push(f);
  }
  return out;
}

for (const paintBore of [true, false]) {
  it(`cutting the Benchy chimney off (bore ${paintBore ? 'painted' : 'not painted'}) leaves the bore as a hole in the roof, capped in the roof colour`, async () => {
    const r = await cutChimney(paintBore);
    expect(openEdges(r.body)).toBe(0);
    expect(openEdges(r.parts[0].mesh)).toBe(0);
    // the bore goes on below the roof as a hole
    expect(facesNearChimney(r.body, (rr, z) => rr < 1.6 && z > 36.9 && z < 38.3).length).toBeGreaterThan(0);
    // nothing of the chimney is left standing on the body
    expect(facesNearChimney(r.body, (rr, z) => rr < 3.6 && z > 39.2).length).toBe(0);
    // the cap is in the roof colour
    const cap = facesNearChimney(r.body, (rr, z) => rr < 2.7 && z > 38.2 && z < 39);
    expect(new Set(cap.map((f) => r.body.faceColor[f]))).toEqual(new Set([1]));
  }, 60000);
}
