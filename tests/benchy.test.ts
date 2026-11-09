import { it, expect } from 'vitest';
// @ts-ignore
import { readFileSync } from 'fs';
import { gunzipSync } from 'fflate';
import { readStl } from '../src/core/stl';
import { PaintMesh } from '../src/core/mesh';
import { splitColours, openEdges } from '../src/core/split';
it('cutting the Benchy chimney off keeps its bore as a hole and caps in the roof colour', async () => {
  const buf = gunzipSync(new Uint8Array(readFileSync('public/samples/3dbenchy.stl.bin')));
  const soup: any = readStl(buf.buffer as ArrayBuffer);
  const pm = PaintMesh.fromSoup(soup);
  const p = pm.positions, ix = pm.index;
  for (let f = 0; f < pm.faceCount; f++) {
    const c = [0, 1, 2].map((k) => (p[3 * ix[3 * f] + k] + p[3 * ix[3 * f + 1] + k] + p[3 * ix[3 * f + 2] + k]) / 3);
    const r = Math.hypot(c[0] + 4, c[1]);
    if (r < 3.6 && c[2] > 38.9) pm.faceColor[f] = 2;
    else if (r < 1.6 && c[2] > 36.9) pm.faceColor[f] = 2;
    else if (c[2] > 38.2 && r < 8) pm.faceColor[f] = 1; // red roof around
  }
  const r = (await splitColours(pm, 3, { tolerance: 0.2, depth: 1.5, bodyChoice: 0, flatBottom: true, keepUncut: true, minThickness: 0, cutOffGap: 0, cut: [false, false, true], mode: ['inlay', 'inlay', 'cutoff'] }))!;
  expect(openEdges(r.body)).toBe(0);
  expect(openEdges(r.parts[0].mesh)).toBe(0);
  // body: probe straight down the bore axis -> body faces near axis between 37 and 38.3
  const bp = r.body.positions, bi = r.body.index;
  let boreFaces = 0; const capCols: Record<number, number> = {};
  for (let f = 0; f < bi.length / 3; f++) {
    const c = [0, 1, 2].map((k) => (bp[3 * bi[3 * f] + k] + bp[3 * bi[3 * f + 1] + k] + bp[3 * bi[3 * f + 2] + k]) / 3);
    const rr = Math.hypot(c[0] + 4, c[1]);
    if (rr < 1.6 && c[2] < 38.3 && c[2] > 36.9) boreFaces++;
    if (rr < 2.7 && c[2] > 38.2 && c[2] < 39) capCols[r.body.faceColor[f]] = (capCols[r.body.faceColor[f]] || 0) + 1;
  }
  expect(boreFaces).toBeGreaterThan(0);
  expect(Object.keys(capCols)).toEqual(['1']);
}, 60000);
