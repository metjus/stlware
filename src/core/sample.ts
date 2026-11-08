/**
 * The sample model: a small sitting cat built from simple shapes (Manifold booleans), so it is
 * one closed solid that stands on a flat bottom, with ears, eyes, muzzle, paws and tail to paint.
 */
import type { Soup } from './mesh';

type V3 = [number, number, number];
type ManifoldToplevel = Awaited<ReturnType<typeof import('manifold-3d').default>>;

export function sampleCat(wasm: ManifoldToplevel): Soup {
  const { Manifold } = wasm;
  const made: { delete(): void }[] = [];
  const keep = <T extends { delete(): void }>(m: T) => (made.push(m), m);
  const ball = (r: number, at: V3, s: V3 = [1, 1, 1], seg = 72) => keep(keep(keep(Manifold.sphere(r, seg)).scale(s)).translate(at));

  const parts = [
    ball(16, [0, 0, 15], [1, 0.9, 1.08]), // body
    ball(14, [0, -1, 39], [1.12, 1, 0.93]), // head
    ball(5.2, [0, -12.2, 35.5], [1.35, 0.75, 0.8], 48), // muzzle
    ball(1.6, [0, -16, 37.6], [1.3, 1, 0.9], 32), // nose
    ball(2.4, [-5.6, -13.2, 41.5], [1, 0.6, 1.15], 32), // eyes
    ball(2.4, [5.6, -13.2, 41.5], [1, 0.6, 1.15], 32),
    ball(5.2, [-7.5, -11.5, 3.5], [1, 1.35, 0.75], 48), // front paws
    ball(5.2, [7.5, -11.5, 3.5], [1, 1.35, 0.75], 48),
    ball(6.5, [-11, 3, 5], [1, 1.4, 0.8], 48), // back legs
    ball(6.5, [11, 3, 5], [1, 1.4, 0.8], 48),
  ];
  // ears: cones leaning outwards
  for (const side of [-1, 1]) {
    const cone = keep(Manifold.cylinder(11, 6, 0.6, 48));
    parts.push(keep(keep(cone.rotate([-8, side * 24, 0])).translate([side * 8.5, -1, 45])));
  }
  // tail: a chain of hulled balls curling round the body
  const tail: V3[] = [];
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    const a = Math.PI * (0.5 + 0.72 * t);
    tail.push([Math.cos(a) * -17, Math.sin(a) * 14 + 4, 3.2 + 4 * Math.sin(Math.PI * t)]);
  }
  for (let i = 0; i < tail.length - 1; i++) {
    const r0 = 3.4 - 0.12 * i, r1 = 3.4 - 0.12 * (i + 1);
    parts.push(keep(Manifold.hull([ball(r0, tail[i], [1, 1, 1], 32), ball(r1, tail[i + 1], [1, 1, 1], 32)])));
  }
  const all = keep(Manifold.union(parts));
  // flat bottom so it stands
  const floor = keep(keep(Manifold.cube([200, 200, 200], true)).translate([0, 0, 100.6]));
  const cat = keep(keep(all.intersect(floor)).translate([0, 0, -0.6]));
  // dense, even triangles so the brush paints smoothly
  const fine = keep(cat.refineToLength(0.7));
  const mesh = fine.getMesh();
  made.forEach((m) => m.delete());

  const { vertProperties: vp, triVerts: tv, numProp } = mesh;
  const positions = new Float32Array(tv.length * 3);
  for (let i = 0; i < tv.length; i++) for (let k = 0; k < 3; k++) positions[3 * i + k] = vp[tv[i] * numProp + k];
  return { positions };
}
