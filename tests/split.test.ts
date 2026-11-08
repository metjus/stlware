import { describe, expect, it } from 'vitest';
import * as THREE from 'three';
import { PaintMesh } from '../src/core/mesh';
import { buildParts, splitColours, openEdges, pickBody, makeBvh, socketGoesThrough, type SplitOptions, type TriMesh } from '../src/core/split';
import { capShape } from '../src/core/cap';

function sphere(paint: (c: THREE.Vector3) => number, radius = 10, w = 64, h = 32) {
  const g = new THREE.SphereGeometry(radius, w, h).rotateX(Math.PI / 2).toNonIndexed(); // poles on z, like Blender
  const positions = new Float32Array(g.getAttribute('position').array);
  const n = positions.length / 9;
  const colors = new Uint8Array(n);
  for (let t = 0; t < n; t++) {
    const c = new THREE.Vector3();
    for (let k = 0; k < 3; k++) c.add(new THREE.Vector3(positions[9 * t + 3 * k], positions[9 * t + 3 * k + 1], positions[9 * t + 3 * k + 2]));
    colors[t] = paint(c.divideScalar(3));
  }
  return PaintMesh.fromSoup({ positions, colors });
}

const opts = (o: Partial<SplitOptions> = {}): SplitOptions => ({
  tolerance: 0.2, depth: 1.5, bodyChoice: 0, flatBottom: true, keepUncut: true, minThickness: 0, cutOffGap: 0,
  cut: [], mode: [], ...o,
});

function volume(m: TriMesh) {
  let v = 0;
  const p = m.positions, ix = m.index;
  for (let f = 0; f < ix.length / 3; f++) {
    const a = ix[3 * f] * 3, b = ix[3 * f + 1] * 3, c = ix[3 * f + 2] * 3;
    v += (p[a] * (p[b + 1] * p[c + 2] - p[b + 2] * p[c + 1]) - p[a + 1] * (p[b] * p[c + 2] - p[b + 2] * p[c]) + p[a + 2] * (p[b] * p[c + 1] - p[b + 1] * p[c])) / 6;
  }
  return v;
}

/** Smallest distance from part vertices inside the model to the body surface. */
function gaps(part: TriMesh, body: TriMesh, inside: number) {
  const bvh = makeBvh(body.positions, body.index);
  const out: number[] = [];
  for (let v = 0; v < part.positions.length / 3; v++) {
    const p = new THREE.Vector3(part.positions[3 * v], part.positions[3 * v + 1], part.positions[3 * v + 2]);
    if (p.length() >= inside) continue;
    out.push(bvh.closestPointToPoint(p, { point: new THREE.Vector3(), distance: 0, faceIndex: 0 })!.distance);
  }
  return out.sort((a, b) => a - b);
}

describe('split', () => {
  it('picks the body colour', () => {
    expect(pickBody([0, 0], 0)).toBe(null);
    expect(pickBody([5, 9, 1], 0)).toBe(1);
    expect(pickBody([5, 9, 1], 3)).toBe(2);
    expect(pickBody([5, 9, 0], 3)).toBe(1); // chosen colour unused: auto
  });

  it('caps a wavy loop with inner points, wound along the loop', () => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < 40; i++) {
      const a = (i / 40) * Math.PI * 2;
      pts.push([10 * Math.cos(a), 10 * Math.sin(a), Math.sin(3 * a)]);
    }
    const cap = capShape(pts);
    expect(cap.inner.length).toBeGreaterThan(10);
    expect(cap.tris.length).toBe(40 - 2 + 2 * cap.inner.length);
    // the loop's own edges appear in the cap in loop order
    const edges = new Set(cap.tris.flatMap((t) => [0, 1, 2].map((k) => `${t[k]},${t[(k + 1) % 3]}`)));
    expect(edges.has('0,1')).toBe(true);
  });

  it('makes a flat-bottom inlay that fits its pocket with the tolerance', async () => {
    const m = sphere((c) => (c.z > 6 ? 1 : 0));
    const r = (await splitColours(m, 2, opts({ tolerance: 0.2, depth: 2 })))!;
    expect(r.bodyIndex).toBe(0);
    expect(r.parts.length).toBe(1);
    expect(openEdges(r.body)).toBe(0);
    expect(openEdges(r.parts[0].mesh)).toBe(0);
    expect(Array.from(new Set(r.body.faceColor))).toEqual([0]);
    const g = gaps(r.parts[0].mesh, r.body, 9.99);
    expect(g.length).toBeGreaterThan(0);
    expect(g[0]).toBeGreaterThan(0.19);
    expect(g[g.length >> 1]).toBeLessThan(0.25);
    // flat bottom: every bottom vertex at one height, depth below the lowest painted point
    const zs = new Set<number>();
    const p = r.parts[0].mesh.positions;
    let lowest = Infinity;
    for (let v = 0; v < p.length / 3; v++) {
      const len = Math.hypot(p[3 * v], p[3 * v + 1], p[3 * v + 2]);
      if (len > 9.95) lowest = Math.min(lowest, p[3 * v + 2]);
    }
    for (let v = 0; v < p.length / 3; v++) if (p[3 * v + 2] < lowest - 0.5) zs.add(+p[3 * v + 2].toFixed(3));
    expect(Array.from(zs)).toEqual([+(lowest - 2).toFixed(3)]);
  });

  it('keeps everything closed with neighbouring colours', async () => {
    const m = sphere((c) => (c.z > 5 ? 1 : c.x > 5 ? 2 : 0));
    const r = (await splitColours(m, 3, opts({ tolerance: 0.05, depth: 1 })))!;
    expect(r.parts.length).toBe(2);
    expect(openEdges(r.body)).toBe(0);
    for (const part of r.parts) expect(openEdges(part.mesh)).toBe(0);
  });

  it('cuts surface-following parts without a boolean, closed', async () => {
    const m = sphere((c) => (c.z > 6 ? 1 : c.x > 6 ? 2 : 0)); // the colours touch at a single vertex here
    const r = (await splitColours(m, 3, opts({ flatBottom: false })))!;
    expect(openEdges(r.body)).toBe(0);
    for (const part of r.parts) expect(openEdges(part.mesh)).toBe(0);
    const one = (await splitColours(sphere((c) => (c.z > 6 ? 1 : 0)), 2, opts({ flatBottom: false })))!;
    const g = gaps(one.parts[0].mesh, one.body, 9.9); // below the surface (rim points slide along it)
    expect(g[0]).toBeGreaterThan(0.18);
    expect(g[g.length >> 1]).toBeLessThan(0.25);
  });

  it('cuts a colour off whole: volumes add up, both closed', async () => {
    const m = sphere((c) => (c.z > 6 ? 1 : 0));
    const total = volume(m);
    const r = (await splitColours(m, 2, opts({ mode: ['inlay', 'cutoff'] })))!;
    expect(r.parts[0].cutOff).toBe(true);
    expect(openEdges(r.body)).toBe(0);
    expect(openEdges(r.parts[0].mesh)).toBe(0);
    expect(volume(r.body) + volume(r.parts[0].mesh)).toBeCloseTo(total, 1);
    expect(volume(r.parts[0].mesh)).toBeGreaterThan(0);
  });

  it('Cut Off Gap shortens the part at the cut', async () => {
    const m = sphere((c) => (c.z > 6 ? 1 : 0));
    const exact = (await splitColours(m, 2, opts({ mode: ['inlay', 'cutoff'] })))!;
    const gapped = (await splitColours(m, 2, opts({ mode: ['inlay', 'cutoff'], cutOffGap: 0.3 })))!;
    const minZ = (t: TriMesh) => Math.min(...Array.from({ length: t.positions.length / 3 }, (_, v) => t.positions[3 * v + 2]));
    expect(minZ(gapped.parts[0].mesh) - minZ(exact.parts[0].mesh)).toBeCloseTo(0.3, 2);
    expect(openEdges(gapped.parts[0].mesh)).toBe(0);
  });

  it('connectors: a peg on one side, a socket on the other, both closed', async () => {
    const m = sphere((c) => (c.z > 6 ? 1 : 0));
    const plain = (await splitColours(m, 2, opts({ mode: ['inlay', 'cutoff'] })))!;
    const connector = { enabled: true, size: 4, length: 3, tolerance: 0.2, chamfer: 0, angle: 0, pegOn: 'body' as const };
    const r = (await splitColours(m, 2, opts({ mode: ['inlay', 'cutoff'], connector })))!;
    expect(r.warnings).toEqual([]);
    expect(openEdges(r.body)).toBe(0);
    expect(openEdges(r.parts[0].mesh)).toBe(0);
    // the peg sticks out of the body: 4 x 4 x 3 = 48 mm3 (the cap is slightly domed, so a bit less)
    const added = volume(r.body) - volume(plain.body);
    expect(added).toBeGreaterThan(40);
    expect(added).toBeLessThan(49);
    // the socket is bigger by the tolerance: 4.4 x 4.4 x 3.2 = 62 mm3
    const removed = volume(plain.parts[0].mesh) - volume(r.parts[0].mesh);
    expect(removed).toBeGreaterThan(added);
    expect(removed).toBeLessThan(63);
    // the body's peg keeps the body colour
    expect(new Set(r.body.faceColor)).toEqual(new Set([0]));

    const onPart = (await splitColours(m, 2, opts({ mode: ['inlay', 'cutoff'], connector: { ...connector, pegOn: 'part' } })))!;
    expect(volume(onPart.parts[0].mesh)).toBeGreaterThan(volume(plain.parts[0].mesh) + 40);
    expect(volume(onPart.body)).toBeLessThan(volume(plain.body) - 40);
    expect(openEdges(onPart.body)).toBe(0);
  });

  it('connectors: too big for the cut gives a warning and no peg', async () => {
    const m = sphere((c) => (c.z > 6 ? 1 : 0));
    const r = (await splitColours(m, 2, opts({ mode: ['inlay', 'cutoff'], connector: { enabled: true, size: 14, length: 3, tolerance: 0.2, chamfer: 0, angle: 0, pegOn: 'body' } })))!;
    expect(r.warnings.map((w) => w.kind)).toEqual(['connectorTooBig']);
  });

  it('connectors: warns when the socket would go through a thin part', async () => {
    const m = sphere((c) => (c.z > 8 ? 1 : 0)); // the cap is about 2 mm thick at the middle
    const r = (await splitColours(m, 2, opts({ mode: ['inlay', 'cutoff'], connector: { enabled: true, size: 3, length: 3, tolerance: 0.2, chamfer: 0, angle: 0, pegOn: 'body' } })))!;
    expect(r.warnings.map((w) => w.kind)).toContain('connectorThrough');
  });

  it('connectors: the peg does not poke out of a thin piece behind the cut', async () => {
    // the body is the bottom cap, 4 mm thick at the middle; the peg is 6 mm wide
    const m = sphere((c) => (c.z > -6 ? 1 : 0));
    const r = (await splitColours(m, 2, opts({ bodyChoice: 1, flatBottom: false, mode: ['inlay', 'cutoff'], connector: { enabled: true, size: 6, length: 3, tolerance: 0.2, chamfer: 0, angle: 0, pegOn: 'body' } })))!;
    let zmin = Infinity;
    for (let i = 2; i < r.body.positions.length; i += 3) zmin = Math.min(zmin, r.body.positions[i]);
    expect(zmin).toBeGreaterThan(-10.01);
    expect(openEdges(r.body)).toBe(0);
  });

  it('connectors: peg and socket are apart by the tolerance', async () => {
    const m = sphere((c) => (c.z > 3 ? 1 : 0));
    for (const [pegOn, chamfer, angle, gap, tol] of [['body', 0, 0, 0, 0.1], ['body', 0.5, 45, 0.5, 0.3], ['part', 0.8, 30, 0, 0.2], ['part', 0.5, 60, 0.5, 0.3]] as const) {
      const r = (await splitColours(m, 2, opts({ bodyChoice: 1, cutOffGap: gap, mode: ['inlay', 'cutoff'], connector: { enabled: true, size: 4, length: 3, tolerance: tol, chamfer, angle, pegOn } })))!;
      expect(r.warnings).toEqual([]);
      const [withPeg, withSocket] = pegOn === 'body' ? [r.body, r.parts[0].mesh] : [r.parts[0].mesh, r.body];
      const bvh = makeBvh(withSocket.positions, withSocket.index);
      let min = Infinity;
      for (let v = 0; v < withPeg.positions.length / 3; v++) {
        const p = new THREE.Vector3(withPeg.positions[3 * v], withPeg.positions[3 * v + 1], withPeg.positions[3 * v + 2]);
        // the peg's corners inside the other piece
        if (Math.hypot(p.x, p.y) > 3 || (pegOn === 'body' ? p.z < 3.3 + gap : p.z > 2.7)) continue;
        min = Math.min(min, bvh.closestPointToPoint(p)!.distance);
      }
      expect(min).toBeCloseTo(tol, 2);
    }
  });

  it('connectors: the preview check finds a socket that would go through', async () => {
    const m = sphere((c) => (c.z > 8 ? 1 : 0));
    const res = buildParts(m, 2, opts({ bodyChoice: 1, mode: ['inlay', 'cutoff'] }));
    const j = res.parts[0].joints![0];
    const co = { enabled: true, size: 3, length: 3, tolerance: 0.2, chamfer: 0, angle: 0, pegOn: 'body' as const };
    expect(socketGoesThrough(res.parts[0].shape, j, co, 0)).toBe(true);
    // the socket in the body (the whole model stands in for it) has plenty of room
    expect(socketGoesThrough(m, j, { ...co, pegOn: 'part' }, 0)).toBe(false);
  });

  it('leaves out a cut-off colour thinner than Min Thickness, without a hole', async () => {
    const m = sphere((c) => (c.z > 6 ? 1 : 0));
    const r = buildParts(m, 2, opts({ mode: ['inlay', 'cutoff'], minThickness: 50 }));
    expect(r.parts.length).toBe(0);
    expect(openEdges(r.work)).toBe(0);
    expect(r.work.faceColor.every((c) => c === 0)).toBe(true);
  });

  it('cut off and flat-bottom inlay together', async () => {
    const m = sphere((c) => (c.z > 6 ? 1 : Math.abs(c.z) < 2 && c.y > 0 ? 2 : 0));
    const r = (await splitColours(m, 3, opts({ mode: ['inlay', 'cutoff', 'inlay'] })))!;
    expect(r.parts.length).toBe(2);
    expect(openEdges(r.body)).toBe(0);
    for (const part of r.parts) expect(openEdges(part.mesh)).toBe(0);
  });

  it('unticked colours stay painted or become the body colour', async () => {
    const m = sphere((c) => (c.z > 6 ? 1 : c.z < -6 ? 2 : 0));
    const keep = (await splitColours(m, 3, opts({ cut: [true, true, false] })))!;
    expect(keep.parts.length).toBe(1);
    expect(new Set(keep.body.faceColor).has(2)).toBe(true);
    const merge = (await splitColours(m, 3, opts({ cut: [true, true, false], keepUncut: false })))!;
    expect(Array.from(new Set(merge.body.faceColor))).toEqual([0]);
    expect(await splitColours(m, 3, opts({ cut: [true, false, false] }))).toBe(null);
  });

  it('warns when the part would go through a thin model', () => {
    const m = sphere((c) => (c.z > 2 ? 1 : 0), 3, 32, 16);
    const r = buildParts(m, 2, opts({ depth: 5 }));
    expect(r.parts[0].report.worst).not.toBe(null);
    expect(r.parts[0].report.bad.size).toBeGreaterThan(0);
  });
});
