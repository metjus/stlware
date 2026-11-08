/**
 * The sample model: a small standing figure built from simple rounded shapes (Manifold
 * booleans), one closed solid on flat feet, with head, hair, top, shorts, arms, legs and
 * shoes to paint in different colours.
 */
import type { Soup } from './mesh';

type V3 = [number, number, number];
type ManifoldToplevel = Awaited<ReturnType<typeof import('manifold-3d').default>>;

export function sampleFigure(wasm: ManifoldToplevel): Soup {
  const { Manifold } = wasm;
  const made: { delete(): void }[] = [];
  const keep = <T extends { delete(): void }>(m: T) => (made.push(m), m);
  const ball = (r: number, at: V3, s: V3 = [1, 1, 1], seg = 48) => keep(keep(keep(Manifold.sphere(r, seg)).scale(s)).translate(at));
  /** A rounded limb through a chain of balls ([x, y, z, radius]). */
  const limb = (pts: [number, number, number, number][], s: V3 = [1, 1, 1]) => {
    const segs = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [a, b] = [pts[i], pts[i + 1]];
      segs.push(keep(Manifold.hull([ball(a[3], [a[0], a[1], a[2]], s, 40), ball(b[3], [b[0], b[1], b[2]], s, 40)])));
    }
    return keep(Manifold.union(segs));
  };

  const parts = [
    // torso: chest, waist and hips blended into one
    limb([[0, 0, 62, 9.5], [0, 0.5, 52, 7.6], [0, 0, 44, 9.2]], [1.25, 0.72, 1]),
    // head, neck and hair
    ball(8.2, [0, -0.6, 83], [0.9, 1, 1.08], 64),
    limb([[0, 0, 70, 3.2], [0, 0, 76, 3]]),
    ball(8.7, [0, 0.9, 85.2], [0.94, 1.02, 0.98], 64),
    limb([[0, 4.8, 82, 5], [0, 6.2, 75, 3.6]]), // hair at the back
    // legs and shoes
    ...[-1, 1].flatMap((s) => [
      limb([[s * 5.5, 0, 42, 6], [s * 5.8, 0.4, 24, 4.3], [s * 6, 0.8, 7, 3]]),
      limb([[s * 6, 0.4, 3.2, 3.6], [s * 6.1, -6.5, 2.6, 3.1]], [1, 1, 0.95]),
      // arms
      limb([[s * 13, 0, 63, 3.6], [s * 16.5, 0.2, 51, 2.9], [s * 18.5, -1.5, 40, 2.5], [s * 18.8, -2, 36.5, 2.8]]),
    ]),
    ball(4.6, [-11.5, 0, 64.5], [1, 0.95, 1]), // shoulders
    ball(4.6, [11.5, 0, 64.5], [1, 0.95, 1]),
  ];
  const all = keep(Manifold.union(parts));
  // flat soles so it stands
  const floor = keep(keep(Manifold.cube([300, 300, 300], true)).translate([0, 0, 150.2]));
  const fig = keep(keep(all.intersect(floor)).translate([0, 0, -0.2]));
  // dense, even triangles so the brush paints smoothly
  const fine = keep(fig.refineToLength(0.9));
  const mesh = fine.getMesh();
  made.forEach((m) => m.delete());

  const { vertProperties: vp, triVerts: tv, numProp } = mesh;
  const positions = new Float32Array(tv.length * 3);
  for (let i = 0; i < tv.length; i++) for (let k = 0; k < 3; k++) positions[3 * i + k] = vp[tv[i] * numProp + k];
  return { positions };
}
