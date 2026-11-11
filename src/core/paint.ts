/**
 * Painting logic, independent of rendering: Brush (faces given by the viewer),
 * Fill (connected region with an angle limit), Smooth, Fill Gaps, undo / redo.
 * Ported from the Blender add-on's PaintSession.
 */
import { PaintMesh } from './mesh';

export const GAP_ENCLOSED = 0.6; // share of a gap's border that must be the target colour

/** The faces a stroke changed and their colours before it (typed arrays: a Fill can touch a million faces). */
class Stroke {
  faces: Uint32Array;
  before: Uint8Array;
  size = 0;

  constructor(capacity = 256) {
    this.faces = new Uint32Array(capacity);
    this.before = new Uint8Array(capacity);
  }

  add(face: number, colour: number) {
    if (this.size === this.faces.length) {
      const faces = new Uint32Array(this.size * 2);
      faces.set(this.faces);
      this.faces = faces;
      const before = new Uint8Array(this.size * 2);
      before.set(this.before);
      this.before = before;
    }
    this.faces[this.size] = face;
    this.before[this.size++] = colour;
  }

  /** Done adding: drop the spare room. */
  trim() {
    this.faces = this.faces.slice(0, this.size);
    this.before = this.before.slice(0, this.size);
  }
}

export interface RegionOptions {
  /** Stop where the colour changes. */
  sameColour: boolean;
  /** Stop at edges bending more than this many degrees (null = ignore angles). */
  maxAngle: number | null;
}

export class PaintSession {
  readonly mesh: PaintMesh;
  private undoStack: Stroke[] = [];
  private redoStack: Stroke[] = [];
  private stroke: Stroke | null = null;
  /** 1 for faces already in the current stroke (so their first colour is the one kept). */
  private inStroke: Uint8Array;
  /** Called with the faces whose colour changed. */
  onChange: (faces: Iterable<number>) => void = () => {};

  constructor(mesh: PaintMesh) {
    this.mesh = mesh;
    this.inStroke = new Uint8Array(mesh.faceCount);
  }

  get canUndo() {
    return this.undoStack.length > 0;
  }
  get canRedo() {
    return this.redoStack.length > 0;
  }

  begin() {
    // a stroke that never got its end() (lost pointer-up) is kept as its own undo step
    if (this.stroke) this.end();
    this.stroke = new Stroke();
  }

  end() {
    const stroke = this.stroke;
    if (stroke && stroke.size) {
      const mark = this.inStroke;
      for (let i = 0; i < stroke.size; i++) mark[stroke.faces[i]] = 0;
      stroke.trim();
      this.undoStack.push(stroke);
      if (this.undoStack.length > 200) this.undoStack.shift();
      this.redoStack = [];
    }
    this.stroke = null;
  }

  /** Paint faces; returns how many changed. Outside begin()/end() it is its own undo step. */
  apply(faces: Iterable<number>, colour: number): number {
    const own = !this.stroke;
    if (own) this.begin();
    const fc = this.mesh.faceColor;
    const stroke = this.stroke!;
    const mark = this.inStroke;
    const changed: number[] = [];
    for (const f of faces) {
      const old = fc[f];
      if (old === colour) continue;
      if (!mark[f]) {
        mark[f] = 1;
        stroke.add(f, old);
      }
      fc[f] = colour;
      changed.push(f);
    }
    if (changed.length) this.onChange(changed);
    if (own) this.end();
    return changed.length;
  }

  undo(): boolean {
    return this.swap(this.undoStack, this.redoStack);
  }

  redo(): boolean {
    return this.swap(this.redoStack, this.undoStack);
  }

  private swap(from: Stroke[], to: Stroke[]): boolean {
    const stroke = from.pop();
    if (!stroke) return false;
    const fc = this.mesh.faceColor;
    const back = new Stroke(stroke.size);
    for (let i = 0; i < stroke.size; i++) {
      const f = stroke.faces[i];
      back.add(f, fc[f]);
      fc[f] = stroke.before[i];
    }
    to.push(back);
    this.onChange(stroke.faces);
    return true;
  }

  /** After colour `index` was removed: its faces become colour 0, higher colours move down. */
  removeColour(index: number) {
    const remap = (c: number) => (c === index ? 0 : c > index ? c - 1 : c);
    const fc = this.mesh.faceColor;
    for (let f = 0; f < fc.length; f++) fc[f] = remap(fc[f]);
    for (const stack of [this.undoStack, this.redoStack]) {
      for (const stroke of stack) for (let i = 0; i < stroke.size; i++) stroke.before[i] = remap(stroke.before[i]);
    }
    this.onChange(allFaces(fc.length));
  }

  /** Swap two colour slots everywhere (used when reordering the palette). */
  replaceColour(from: number, to: number) {
    const faces: number[] = [];
    const fc = this.mesh.faceColor;
    for (let f = 0; f < fc.length; f++) if (fc[f] === from) faces.push(f);
    return this.apply(faces, to);
  }

  /** The connected faces around `seed` (Fill). */
  region(seed: number, opts: RegionOptions): Uint32Array {
    const nb = this.mesh.neighbours();
    const fc = this.mesh.faceColor;
    const target = fc[seed];
    const minDot = opts.maxAngle === null ? null : Math.cos((opts.maxAngle * Math.PI) / 180);
    const n = minDot === null ? null : this.mesh.normals();
    const seen = new Uint8Array(this.mesh.faceCount);
    const out: number[] = [seed];
    seen[seed] = 1;
    for (let i = 0; i < out.length; i++) {
      const f = out[i];
      for (let e = 0; e < 3; e++) {
        const g = nb[3 * f + e];
        if (g < 0 || seen[g]) continue;
        if (opts.sameColour && fc[g] !== target) continue;
        if (n && minDot !== null) {
          const d = n[3 * f] * n[3 * g] + n[3 * f + 1] * n[3 * g + 1] + n[3 * f + 2] * n[3 * g + 2];
          if (d < minDot) continue;
        }
        seen[g] = 1;
        out.push(g);
      }
    }
    return Uint32Array.from(out);
  }

  /**
   * Even out jagged colour borders: each face in `faces` takes the colour covering most
   * area among itself and the faces touching it, `iterations` times.
   */
  smooth(faces: Iterable<number>, iterations = 3) {
    const region = Array.from(faces);
    const { start, faces: vf } = this.mesh.vertexFaces();
    const ix = this.mesh.index;
    const areas = this.mesh.areas();
    const fc = this.mesh.faceColor;
    const near: Uint32Array[] = region.map((f) => {
      const set = new Set<number>();
      for (let c = 0; c < 3; c++) {
        const v = ix[3 * f + c];
        for (let k = start[v]; k < start[v + 1]; k++) set.add(vf[k]);
      }
      set.delete(f);
      return Uint32Array.from(set);
    });
    const votes = new Map<number, number>();
    for (let it = 0; it < iterations; it++) {
      const changes = new Map<number, number[]>();
      region.forEach((f, i) => {
        const current = fc[f];
        votes.clear();
        votes.set(current, areas[f]);
        for (const g of near[i]) votes.set(fc[g], (votes.get(fc[g]) ?? 0) + areas[g]);
        let best = current;
        let bestVotes = votes.get(current)!;
        for (const [c, v] of votes) {
          if (v > bestVotes) {
            best = c;
            bestVotes = v;
          }
        }
        if (best !== current) {
          if (!changes.has(best)) changes.set(best, []);
          changes.get(best)!.push(f);
        }
      });
      if (!changes.size) break;
      for (const [c, list] of changes) this.apply(list, c);
    }
  }

  /**
   * Islands of unpainted faces (colour 0; with anyColour, any colour but target) of at most
   * maxArea mm² whose border is mostly the target colour.
   */
  findGaps(target: number, maxArea: number, anyColour = false): number[][] {
    const { faceCount, faceColor: fc, index: ix, positions: p } = this.mesh;
    if (target === 0 && !anyColour) return [];
    const nb = this.mesh.neighbours();
    const areas = this.mesh.areas();
    const cand = (f: number) => (anyColour ? fc[f] !== target : fc[f] === 0);
    const edgeLen = (f: number, e: number) => {
      const a = ix[3 * f + e] * 3, b = ix[3 * f + ((e + 1) % 3)] * 3;
      return Math.hypot(p[a] - p[b], p[a + 1] - p[b + 1], p[a + 2] - p[b + 2]);
    };
    const seen = new Uint8Array(faceCount);
    const gaps: number[][] = [];
    for (let seed = 0; seed < faceCount; seed++) {
      if (seen[seed] || !cand(seed)) continue;
      seen[seed] = 1;
      const stack = [seed];
      const island: number[] = [];
      let total = 0, tooBig = false, borderTarget = 0, borderOther = 0;
      while (stack.length) {
        const f = stack.pop()!;
        total += areas[f];
        if (total > maxArea) tooBig = true;
        else island.push(f);
        for (let e = 0; e < 3; e++) {
          const g = nb[3 * f + e];
          if (g < 0) continue;
          if (cand(g)) {
            if (!seen[g]) {
              seen[g] = 1;
              stack.push(g);
            }
          } else if (fc[g] === target) borderTarget += edgeLen(f, e);
          else borderOther += edgeLen(f, e);
        }
      }
      if (!tooBig && borderTarget > 0 && borderTarget >= GAP_ENCLOSED * (borderTarget + borderOther)) {
        gaps.push(island);
      }
    }
    return gaps;
  }

  /** Fill every gap with the target colour as one undo step; returns the number of gaps. */
  fillGaps(target: number, maxArea: number, anyColour = false): number {
    const gaps = this.findGaps(target, maxArea, anyColour);
    if (!gaps.length) return 0;
    this.apply(gaps.flat(), target);
    return gaps.length;
  }
}

function* allFaces(n: number) {
  for (let f = 0; f < n; f++) yield f;
}
