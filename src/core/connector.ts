/**
 * Connectors for Cut Off parts: a square peg on one side of the cut and a matching
 * socket (the peg grown by the tolerance) in the other, so the parts locate and hold.
 */
import { loopFrame, orthoBasis, type V3 } from './cap';

export interface ConnectorOptions {
  enabled: boolean;
  /** Side of the square peg at its base (mm). */
  size: number;
  /** How far the peg sticks out of the cut (mm). */
  length: number;
  /** Gap between peg and socket on every side and at the tip (mm). */
  tolerance: number;
  /** How far down the sides the chamfer round the peg's top face reaches (mm, 0 = sharp edges). */
  chamfer: number;
  /** Angle of that chamfer, measured from the side (degrees; 45 = a normal chamfer). */
  angle: number;
  /** Which piece gets the peg; the other gets the socket. */
  pegOn: 'body' | 'part';
}

export const CONNECTOR_DEFAULTS: ConnectorOptions = { enabled: false, size: 4, length: 4, tolerance: 0.2, chamfer: 0.5, angle: 45, pegOn: 'body' };

/** Where a Cut Off part meets the body: a point on the cut, its normal (out of the body) and the room around it. */
export interface Joint {
  centre: V3;
  normal: V3;
  /** Distance from the centre to the nearest point of the cut's edge, in the cut's plane. */
  room: number;
}

const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

/** The joint of a closed cut loop, or null when the loop's centre isn't inside it. */
export function jointOf(points: V3[]): Joint | null {
  const { centre, normal: raw } = loopFrame(points);
  const l = Math.hypot(...raw);
  if (l < 1e-12) return null;
  const normal: V3 = [raw[0] / l, raw[1] / l, raw[2] / l];
  const [u, w] = orthoBasis(normal);
  const flat = points.map((p) => {
    const d = sub(p, centre);
    return [dot(d, u), dot(d, w)] as [number, number];
  });
  let inside = false;
  let room = Infinity;
  for (let i = 0; i < flat.length; i++) {
    const [x0, y0] = flat[i], [x1, y1] = flat[(i + 1) % flat.length];
    if (y0 > 0 !== y1 > 0 && 0 < x0 + ((0 - y0) * (x1 - x0)) / (y1 - y0 || 1e-30)) inside = !inside;
    const dx = x1 - x0, dy = y1 - y0;
    const t = Math.max(0, Math.min(1, -(x0 * dx + y0 * dy) / (dx * dx + dy * dy || 1e-30)));
    room = Math.min(room, Math.hypot(x0 + t * dx, y0 + t * dy));
  }
  return inside ? { centre, normal, room } : null;
}

/** Half the diagonal of the socket: the room the connector needs around the joint's centre. */
export function connectorReach(o: ConnectorOptions) {
  return (o.size / 2 + o.tolerance) * Math.SQRT2;
}

/**
 * A closed square prism along `axis` from `base`, given as rings of [height, side]
 * (bottom to top); neighbouring rings are joined by walls and the ends are capped.
 */
function rings(base: V3, axis: V3, levels: [number, number][]) {
  const [u, w] = orthoBasis(axis);
  const positions: number[] = [];
  const corners: [number, number][] = [[-1, -1], [1, -1], [1, 1], [-1, 1]];
  for (const [z, side] of levels) {
    for (const [a, b] of corners) {
      for (let k = 0; k < 3; k++) positions.push(base[k] + axis[k] * z + u[k] * (a * side) / 2 + w[k] * (b * side) / 2);
    }
  }
  const index: number[] = [];
  // walls between rings (outward with axis = u × w)
  for (let r = 0; r < levels.length - 1; r++) {
    for (let c = 0; c < 4; c++) {
      const a = 4 * r + c, b = 4 * r + ((c + 1) % 4), a2 = a + 4, b2 = b + 4;
      index.push(a, b, b2, a, b2, a2);
    }
  }
  const t = 4 * (levels.length - 1);
  index.push(0, 2, 1, 0, 3, 2); // bottom, facing -axis
  index.push(t, t + 1, t + 2, t, t + 2, t + 3); // top, facing +axis
  return { positions: Float32Array.from(positions), index: Uint32Array.from(index) };
}

/**
 * The chamfer actually used: height along the peg and inset of the top face per side
 * (the top face keeps at least 20 % of the peg's size, the chamfer at most half its length).
 */
export function chamferOf(o: ConnectorOptions): { height: number; inset: number } {
  const ang = (Math.min(75, Math.max(0, o.angle)) * Math.PI) / 180;
  let height = Math.min(Math.max(0, o.chamfer), o.length / 2);
  let inset = height * Math.tan(ang);
  const maxInset = o.size * 0.4;
  if (inset > maxInset) {
    height *= maxInset / inset;
    inset = maxInset;
  }
  return inset > 1e-4 && height > 1e-4 ? { height, inset } : { height: 0, inset: 0 };
}

/** Where the peg stands: its base point and the direction it points in. */
export function pegFrame(j: Joint, o: ConnectorOptions, gap: number): { base: V3; axis: V3 } {
  const onBody = o.pegOn === 'body';
  const axis: V3 = onBody ? j.normal : [-j.normal[0], -j.normal[1], -j.normal[2]];
  const base: V3 = onBody ? j.centre : [j.centre[0] + j.normal[0] * gap, j.centre[1] + j.normal[1] * gap, j.centre[2] + j.normal[2] * gap];
  return { base, axis };
}

/**
 * The peg and its socket for one joint; `gap` is the Cut Off gap between the two pieces.
 * `embed` is how far the peg reaches back into its own piece (so it joins it even where the
 * cut is domed); it must stay inside that piece, so pass what the piece allows.
 */
export function connectorShapes(j: Joint, o: ConnectorOptions, gap: number, embed = Math.max(o.size, 1)) {
  const { base, axis } = pegFrame(j, o, gap);
  const length = o.length + gap; // measured from the piece it stands on, across the gap
  const s0 = o.size, t = o.tolerance;
  const { height: c, inset: i } = chamferOf(o);
  if (!c) {
    return {
      peg: rings(base, axis, [[-embed, s0], [0, s0], [length, s0]]),
      socket: rings(base, axis, [[-embed, s0 + 2 * t], [0, s0 + 2 * t], [length + t, s0 + 2 * t]]),
    };
  }
  const peg = rings(base, axis, [[-embed, s0], [0, s0], [length - c, s0], [length, s0 - 2 * i]]);
  // the socket is the peg grown by the tolerance everywhere: sides, chamfer and tip
  const l = Math.hypot(c, i);
  const sideZ = length - c + (t * (l - c)) / i; // where the grown side meets the grown chamfer
  const topX = s0 / 2 + (t * l - (c + t) * i) / c; // half side where the grown chamfer meets the grown top
  const socket = rings(base, axis, [[-embed, s0 + 2 * t], [0, s0 + 2 * t], [sideZ, s0 + 2 * t], [length + t, 2 * topX]]);
  return { peg, socket };
}
