/**
 * 3MF reading and writing, ported from the Blender add-on (reader3mf.py, writers.py).
 *
 * Writing: a standard 3MF colour group (Bambu Studio reads it and opens its
 * colour-to-filament dialog) plus Bambu's per-triangle paint_color filament codes.
 *
 * Reading: Bambu Studio and PrusaSlicer projects (filament painting, per-part
 * filaments, filament colours) and standard 3MF colours.
 */
import { unzipSync, zipSync, strToU8, strFromU8 } from 'fflate';
import type { ColouredSoup } from './obj';

export const MAX_FILAMENTS = 16;

// ---------------------------------------------------------------------------
// Paint strings
// ---------------------------------------------------------------------------

/** Encode a filament slot as a Bambu/Prusa per-triangle paint string. 1 -> "4", 2 -> "8", 3 -> "0C", 4 -> "1C". */
export function paintColorCode(filament: number): string {
  if (filament <= 0) return '';
  if (filament < 3) return (filament << 2).toString(16).toUpperCase();
  if (filament - 3 > 0xf) throw new Error(`filament slot ${filament} is out of range`);
  return (filament - 3).toString(16).toUpperCase() + 'C';
}

export type PaintTree = number | [number, number, PaintTree[]]; // leaf state | [splitSides, special, children]

/** Decode one triangle's paint string (mirrors TriangleSelector::deserialize). */
export function decodePaint(code: string): PaintTree {
  const nib = Array.from(code.trim()).reverse().map((ch) => parseInt(ch, 16));
  let pos = 0;
  const read = () => {
    if (pos >= nib.length || Number.isNaN(nib[pos])) throw new Error('paint string ended early');
    return nib[pos++];
  };
  const node = (): PaintTree => {
    const c = read();
    const splitSides = c & 0b11;
    if (splitSides === 0) {
      if ((c & 0b1100) === 0b1100) {
        let extra = read(), runs = 0;
        while (extra === 0b1111) {
          runs++;
          extra = read();
        }
        return extra + 15 * runs + 3;
      }
      return c >> 2;
    }
    const special = c >> 2;
    const children: PaintTree[] = new Array(splitSides + 1);
    for (let i = splitSides; i >= 0; i--) children[i] = node();
    return [splitSides, special, children];
  };
  return node();
}

export function encodePaint(tree: PaintTree): string {
  const nibbles: number[] = [];
  const emit = (n: PaintTree) => {
    if (typeof n === 'number') {
      if (n < 3) nibbles.push(n << 2);
      else {
        nibbles.push(0b1100);
        n -= 3;
        while (n >= 15) {
          nibbles.push(0b1111);
          n -= 15;
        }
        nibbles.push(n);
      }
    } else {
      const [splitSides, special, children] = n;
      nibbles.push((special << 2) | splitSides);
      for (let i = children.length - 1; i >= 0; i--) emit(children[i]);
    }
  };
  emit(tree);
  return nibbles.reverse().map((v) => v.toString(16).toUpperCase()).join('');
}

/** Leaf triangles [a, b, c, state] of a painted triangle (TriangleSelector::perform_split). */
export function splitLeaves(tri: number[], tree: PaintTree, midpoint: (i: number, j: number) => number): number[][] {
  if (typeof tree === 'number') return [[tri[0], tri[1], tri[2], tree]];
  const [splitSides, special, children] = tree;
  const v = [0, 1, 2].map((k) => tri[(special + k) % 3]);
  let tris: number[][];
  if (splitSides === 1) {
    const m12 = midpoint(v[2], v[1]);
    tris = [[v[0], v[1], m12], [m12, v[2], v[0]]];
  } else if (splitSides === 2) {
    const m01 = midpoint(v[1], v[0]);
    const m02 = midpoint(v[0], v[2]);
    tris = [[v[0], m01, m02], [m01, v[1], m02], [v[1], v[2], m02]];
  } else {
    const m01 = midpoint(v[1], v[0]), m12 = midpoint(v[2], v[1]), m20 = midpoint(v[0], v[2]);
    tris = [[v[0], m01, m20], [m01, v[1], m12], [m12, v[2], m20], [m01, m12, m20]];
  }
  const out: number[][] = [];
  tris.forEach((t, i) => out.push(...splitLeaves(t, children[i], midpoint)));
  return out;
}

// ---------------------------------------------------------------------------
// Writing
// ---------------------------------------------------------------------------

export interface ExportColour {
  hex: string; // #RRGGBB
  filament: number; // 1-based slot
}

const CONTENT_TYPES = `<?xml version="1.0" encoding="UTF-8"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
 <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
 <Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/>
</Types>
`;

const RELS = `<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
 <Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/>
</Relationships>
`;

function fmt(v: number): string {
  let s = v.toFixed(6).replace(/0+$/, '').replace(/\.$/, '');
  if (s === '-0' || s === '') s = '0';
  return s;
}

function xmlAttr(s: string) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** The 3D/3dmodel.model XML. faceColour indexes `colours`. */
export function build3mfModel(
  positions: Float32Array,
  index: Uint32Array,
  faceColour: ArrayLike<number>,
  colours: ExportColour[],
  objectName = 'Model',
): string {
  const out: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>\n',
    '<model unit="millimeter" xml:lang="en-US" ' +
      'xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" ' +
      'xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02">\n',
    ' <metadata name="Application">STLware Paint</metadata>\n',
    ' <resources>\n',
    '  <m:colorgroup id="1">\n', // Bambu matches the literal tag names "m:colorgroup" / "m:color"
  ];
  for (const c of colours) out.push(`   <m:color color="${c.hex.toUpperCase()}"/>\n`);
  out.push('  </m:colorgroup>\n');
  out.push(`  <object id="2" type="model" name="${xmlAttr(objectName)}" pid="1" pindex="0">\n`);
  out.push('   <mesh>\n    <vertices>\n');
  for (let i = 0; i < positions.length; i += 3) {
    out.push(`     <vertex x="${fmt(positions[i])}" y="${fmt(positions[i + 1])}" z="${fmt(positions[i + 2])}"/>\n`);
  }
  out.push('    </vertices>\n    <triangles>\n');
  const codes = colours.map((c) => paintColorCode(c.filament));
  for (let f = 0; f < index.length / 3; f++) {
    const ci = faceColour[f];
    const paint = codes[ci] ? ` paint_color="${codes[ci]}"` : '';
    out.push(`     <triangle v1="${index[3 * f]}" v2="${index[3 * f + 1]}" v3="${index[3 * f + 2]}" pid="1" p1="${ci}"${paint}/>\n`);
  }
  out.push('    </triangles>\n   </mesh>\n  </object>\n');
  out.push(' </resources>\n <build>\n  <item objectid="2"/>\n </build>\n</model>\n');
  return out.join('');
}

export function write3mf(
  positions: Float32Array,
  index: Uint32Array,
  faceColour: ArrayLike<number>,
  colours: ExportColour[],
  objectName = 'Model',
): Uint8Array {
  const model = build3mfModel(positions, index, faceColour, colours, objectName);
  return zipSync(
    {
      '[Content_Types].xml': strToU8(CONTENT_TYPES),
      '_rels/.rels': strToU8(RELS),
      '3D/3dmodel.model': strToU8(model),
    },
    { level: 6 },
  );
}

// ---------------------------------------------------------------------------
// Reading
// ---------------------------------------------------------------------------

type Mat = number[]; // 3MF 3x4 row-vector matrix, 12 numbers
const IDENTITY: Mat = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];

const UNITS_MM: Record<string, number> = {
  micron: 0.001, millimeter: 1, centimeter: 10, inch: 25.4, foot: 304.8, meter: 1000,
};

export const DEFAULT_FILAMENT_COLOURS = ['#FFFFFF', '#000000', '#E72727', '#2761E7', '#2BA84A', '#F2C200',
  '#8E44AD', '#F28C28', '#7A4A2B', '#808080', '#FF8FB1', '#00B3B3', '#C0C0C0', '#4B0082', '#9ACD32', '#800000'];

function parseTransform(text: string | undefined): Mat {
  if (!text) return IDENTITY;
  const v = text.trim().split(/\s+/).map(Number);
  return v.length === 12 && v.every((x) => Number.isFinite(x)) ? v : IDENTITY;
}

/** Transform that applies a first, then b. */
function compose(a: Mat, b: Mat): Mat {
  const out: number[] = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 3; c++) {
      let s = 0;
      for (let k = 0; k < 3; k++) s += a[r * 3 + k] * b[k * 3 + c];
      if (r === 3) s += b[9 + c];
      out.push(s);
    }
  }
  return out;
}

function hex(colour: string): string {
  let c = colour.trim().toUpperCase();
  if (!c.startsWith('#')) c = '#' + c;
  return c.length >= 7 ? c.slice(0, 7) : '#808080';
}

interface RawMesh {
  vertices: number[];
  triangles: number[];
  paint: string[];
  colour: (string | null)[]; // resolved hex or null
  rawColour: ([string, number] | null)[];
}

interface ModelFile {
  unitMm: number;
  meshes: Map<string, RawMesh>;
  components: Map<string, [string | null, string, Mat][]>;
  names: Map<string, string>;
  build: [string | null, string, Mat][];
  application: string;
}

const TAG_RE = /<(\/?)([A-Za-z_][\w.-]*:)?([A-Za-z_][\w.-]*)((?:\s+[^\s=>/]+\s*=\s*(?:"[^"]*"|'[^']*'))*)\s*(\/?)>/g;
const ATTR_RE = /([^\s=]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;

function attrs(text: string): Record<string, string> {
  const out: Record<string, string> = {};
  if (!text) return out;
  ATTR_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = ATTR_RE.exec(text))) {
    const name = m[1];
    const value = decodeEntities(m[2] ?? m[3] ?? '');
    out[name] = value;
    const colon = name.indexOf(':');
    if (colon >= 0) {
      const local = name.slice(colon + 1);
      // keep the unprefixed names too (path, mmu_segmentation), unless taken
      if (!(local in out)) out[local] = value;
    }
  }
  return out;
}

function decodeEntities(s: string) {
  return s.indexOf('&') < 0 ? s : s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, '&');
}

/** Parse one .model file with a fast tag scanner (works for millions of triangles). */
function parseModel(xml: string): ModelFile {
  const model: ModelFile = { unitMm: 1, meshes: new Map(), components: new Map(), names: new Map(), build: [], application: '' };
  const groups = new Map<string, string[]>();
  const objDefault = new Map<string, [string, number]>();
  let current: string | null = null;
  let mesh: RawMesh | null = null;
  let group: string[] | null = null;
  let groupId = '';
  let inApplicationMeta = false;
  TAG_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = TAG_RE.exec(xml))) {
    const closing = m[1] === '/';
    const tag = m[3];
    const selfClosing = m[5] === '/';
    if (closing) {
      if (tag === 'object') {
        current = null;
        mesh = null;
      } else if ((tag === 'colorgroup' || tag === 'basematerials') && group) {
        groups.set(groupId, group);
        group = null;
      }
      continue;
    }
    switch (tag) {
      case 'vertex': {
        const a = attrs(m[4]);
        mesh?.vertices.push(+a.x, +a.y, +a.z);
        break;
      }
      case 'triangle': {
        if (!mesh) break;
        const a = attrs(m[4]);
        mesh.triangles.push(+a.v1, +a.v2, +a.v3);
        mesh.paint.push(a.paint_color || a['slic3rpe:mmu_segmentation'] || a.mmu_segmentation || '');
        let pid = a.pid;
        let p1 = a.p1;
        if (pid === undefined && current && objDefault.has(current)) {
          const d = objDefault.get(current)!;
          pid = d[0];
          if (p1 === undefined) p1 = String(d[1]);
        }
        mesh.rawColour.push(pid !== undefined && p1 !== undefined ? [pid, +p1] : null);
        break;
      }
      case 'model': {
        const a = attrs(m[4]);
        model.unitMm = UNITS_MM[a.unit ?? 'millimeter'] ?? 1;
        break;
      }
      case 'object': {
        const a = attrs(m[4]);
        current = a.id;
        if (a.name) model.names.set(current, a.name);
        if (a.pid !== undefined) objDefault.set(current, [a.pid, +(a.pindex ?? 0)]);
        break;
      }
      case 'mesh':
        if (current) {
          mesh = { vertices: [], triangles: [], paint: [], colour: [], rawColour: [] };
          model.meshes.set(current, mesh);
        }
        break;
      case 'colorgroup':
      case 'basematerials':
        groupId = attrs(m[4]).id;
        group = [];
        if (selfClosing) {
          groups.set(groupId, group);
          group = null;
        }
        break;
      case 'color':
        group?.push(hex(attrs(m[4]).color ?? '#808080'));
        break;
      case 'base':
        group?.push(hex(attrs(m[4]).displaycolor ?? '#808080'));
        break;
      case 'components':
        if (current) model.components.set(current, []);
        break;
      case 'component': {
        const a = attrs(m[4]);
        if (current) model.components.get(current)?.push([a.path ?? null, a.objectid, parseTransform(a.transform)]);
        break;
      }
      case 'item': {
        const a = attrs(m[4]);
        model.build.push([a.path ?? null, a.objectid, parseTransform(a.transform)]);
        break;
      }
      case 'metadata': {
        const a = attrs(m[4]);
        inApplicationMeta = a.name === 'Application' && !selfClosing;
        if (inApplicationMeta) {
          const end = xml.indexOf('<', TAG_RE.lastIndex);
          model.application = decodeEntities(xml.slice(TAG_RE.lastIndex, end).trim());
        }
        break;
      }
    }
  }
  for (const mesh of model.meshes.values()) {
    mesh.colour = mesh.rawColour.map((c) => {
      const cols = c ? groups.get(c[0]) : undefined;
      return cols && c && c[1] >= 0 && c[1] < cols.length ? cols[c[1]] : null;
    });
  }
  return model;
}

function metaMap(el: Element, selector = ':scope > metadata'): Record<string, string> {
  const out: Record<string, string> = {};
  el.querySelectorAll(selector).forEach((m) => {
    const k = m.getAttribute('key');
    if (k) out[k] = m.getAttribute('value') ?? '';
  });
  return out;
}

interface BambuPart { subtype: string; extruder: number; name: string }
interface BambuObject { name: string; extruder: number; parts: Map<string, BambuPart> }

function parseXml(text: string): Document | null {
  if (typeof DOMParser === 'undefined') return null;
  const doc = new DOMParser().parseFromString(text, 'application/xml');
  return doc.getElementsByTagName('parsererror').length ? null : doc;
}

function bambuSettings(files: Record<string, Uint8Array>): Map<string, BambuObject> {
  const out = new Map<string, BambuObject>();
  const data = files['Metadata/model_settings.config'];
  const doc = data && parseXml(strFromU8(data));
  if (!doc) return out;
  doc.querySelectorAll('object').forEach((obj) => {
    const meta = metaMap(obj);
    const parts = new Map<string, BambuPart>();
    obj.querySelectorAll(':scope > part').forEach((part) => {
      const pm = metaMap(part);
      parts.set(part.getAttribute('id') ?? '', {
        subtype: part.getAttribute('subtype') ?? 'normal_part',
        extruder: parseInt(pm.extruder ?? '0', 10) || 0,
        name: pm.name ?? '',
      });
    });
    out.set(obj.getAttribute('id') ?? '', { name: meta.name ?? '', extruder: parseInt(meta.extruder ?? '1', 10) || 1, parts });
  });
  return out;
}

function filamentColours(files: Record<string, Uint8Array>): string[] {
  const project = files['Metadata/project_settings.config'];
  if (project) {
    try {
      const cfg = JSON.parse(strFromU8(project));
      const cols: string[] = cfg.filament_colour ?? [];
      if (cols.length) return cols.map(hex);
    } catch {
      /* not JSON */
    }
  }
  const prusa = files['Metadata/Slic3r_PE.config'];
  if (prusa) {
    const text = strFromU8(prusa);
    for (const key of ['extruder_colour', 'filament_colour']) {
      const m = new RegExp(`^; ${key} = (.*)$`, 'm').exec(text);
      if (m) {
        const cols = m[1].split(';').filter((c) => c.trim());
        if (cols.length) return cols.map(hex);
      }
    }
  }
  return [];
}

type Range = [number, number, number | null];

function prusaVolumes(files: Record<string, Uint8Array>): Map<string, { def: number; ranges: Range[]; name: string }> {
  const out = new Map<string, { def: number; ranges: Range[]; name: string }>();
  const data = files['Metadata/Slic3r_PE_model.config'];
  const doc = data && parseXml(strFromU8(data));
  if (!doc) return out;
  doc.querySelectorAll('object').forEach((obj) => {
    const meta: Record<string, string> = {};
    obj.querySelectorAll(':scope > metadata[type="object"]').forEach((m) => {
      meta[m.getAttribute('key') ?? ''] = m.getAttribute('value') ?? '';
    });
    const def = parseInt(meta.extruder ?? '1', 10) || 1;
    const ranges: Range[] = [];
    obj.querySelectorAll(':scope > volume').forEach((vol) => {
      const vm = metaMap(vol);
      const first = parseInt(vol.getAttribute('firstid') ?? '0', 10);
      const last = parseInt(vol.getAttribute('lastid') ?? '0', 10);
      if (vm.modifier === '1' || (vm.volume_type ?? 'ModelPart') !== 'ModelPart') ranges.push([first, last, null]);
      else ranges.push([first, last, parseInt(vm.extruder ?? '0', 10) || def]);
    });
    out.set(obj.getAttribute('id') ?? '', { def, ranges, name: meta.name ?? '' });
  });
  return out;
}

type ColourKey = string; // "f<n>" filament or "#RRGGBB"

class Builder {
  vertices: number[] = [];
  private mid = new Map<string, number>();
  private leaves: [number, number, number, ColourKey, number][] = [];
  /** Object number given to the triangles added next. */
  object = 0;
  splitTriangles = 0;

  private midpoint = (i: number, j: number) => {
    const key = i < j ? `${i},${j}` : `${j},${i}`;
    let m = this.mid.get(key);
    if (m === undefined) {
      const v = this.vertices;
      v.push((v[3 * i] + v[3 * j]) / 2, (v[3 * i + 1] + v[3 * j + 1]) / 2, (v[3 * i + 2] + v[3 * j + 2]) / 2);
      m = v.length / 3 - 1;
      this.mid.set(key, m);
    }
    return m;
  };

  addMesh(mesh: RawMesh, t: Mat, unitMm: number, defaultKey: (i: number) => ColourKey, skip?: (i: number) => boolean) {
    const base = this.vertices.length / 3;
    const v = mesh.vertices;
    for (let i = 0; i < v.length; i += 3) {
      const x = v[i], y = v[i + 1], z = v[i + 2];
      this.vertices.push(
        (x * t[0] + y * t[3] + z * t[6] + t[9]) * unitMm,
        (x * t[1] + y * t[4] + z * t[7] + t[10]) * unitMm,
        (x * t[2] + y * t[5] + z * t[8] + t[11]) * unitMm,
      );
    }
    const n = mesh.triangles.length / 3;
    for (let i = 0; i < n; i++) {
      if (skip?.(i)) continue;
      const tri = [mesh.triangles[3 * i] + base, mesh.triangles[3 * i + 1] + base, mesh.triangles[3 * i + 2] + base];
      const own = mesh.colour[i];
      const fallback = own ?? defaultKey(i);
      const code = mesh.paint[i];
      if (!code) {
        this.leaves.push([tri[0], tri[1], tri[2], fallback, this.object]);
        continue;
      }
      let tree: PaintTree;
      try {
        tree = decodePaint(code);
      } catch {
        tree = 0;
      }
      if (typeof tree === 'number' && own) {
        this.leaves.push([tri[0], tri[1], tri[2], own, this.object]); // files with both: the exact colour wins
        continue;
      }
      if (typeof tree !== 'number') this.splitTriangles++;
      for (const [a, b, c, state] of splitLeaves(tri, tree, this.midpoint)) {
        this.leaves.push([a, b, c, state ? 'f' + state : fallback, this.object]);
      }
    }
  }

  private chain(a: number, b: number): number[] {
    const m = this.mid.get(a < b ? `${a},${b}` : `${b},${a}`);
    if (m === undefined) return [];
    return [...this.chain(a, m), m, ...this.chain(m, b)];
  }

  /** Triangles (with T-junctions resolved so the mesh stays closed) and their colour keys. */
  finish(): { positions: number[]; keys: ColourKey[]; objects: number[] } {
    const positions: number[] = [];
    const keys: ColourKey[] = [];
    const objects: number[] = [];
    const v = this.vertices;
    const push = (i: number) => positions.push(v[3 * i], v[3 * i + 1], v[3 * i + 2]);
    for (const [a, b, c, key, obj] of this.leaves) {
      const ring = [a, ...this.chain(a, b), b, ...this.chain(b, c), c, ...this.chain(c, a)];
      if (ring.length === 3) {
        push(a); push(b); push(c);
        keys.push(key);
        objects.push(obj);
        continue;
      }
      // a triangle with extra points on its sides: fan from its centroid
      const cx = (v[3 * a] + v[3 * b] + v[3 * c]) / 3;
      const cy = (v[3 * a + 1] + v[3 * b + 1] + v[3 * c + 1]) / 3;
      const cz = (v[3 * a + 2] + v[3 * b + 2] + v[3 * c + 2]) / 3;
      for (let k = 0; k < ring.length; k++) {
        positions.push(cx, cy, cz);
        push(ring[k]);
        push(ring[(k + 1) % ring.length]);
        keys.push(key);
        objects.push(obj);
      }
    }
    return { positions, keys, objects };
  }
}

export interface Imported extends ColouredSoup {
  source: 'bambu' | 'prusa' | '3mf';
  objectCount: number;
  splitTriangles: number;
}

/** Read a 3MF into one coloured triangle soup (all objects at their plate positions). */
export function read3mf(data: Uint8Array): Imported {
  const files = unzipSync(data);
  let rootPath = '3D/3dmodel.model';
  const rels = files['_rels/.rels'];
  if (rels) {
    const m = /Target="([^"]+)"[^>]*Type="[^"]*\/3dmodel"|Type="[^"]*\/3dmodel"[^>]*Target="([^"]+)"/.exec(strFromU8(rels));
    if (m) rootPath = (m[1] ?? m[2]).replace(/^\//, '');
  }
  const cache = new Map<string, ModelFile>();
  const modelFile = (p: string | null): [string, ModelFile] => {
    const path = (p ?? rootPath).replace(/^\//, '');
    let mf = cache.get(path);
    if (!mf) {
      const bytes = files[path];
      if (!bytes) throw new Error(`3MF is missing ${path}`);
      mf = parseModel(strFromU8(bytes));
      cache.set(path, mf);
    }
    return [path, mf];
  };
  const [rootName, root] = modelFile(rootPath);
  const bambu = bambuSettings(files);
  const prusa = prusaVolumes(files);
  const filamentHex = filamentColours(files);
  const source: Imported['source'] = root.application.startsWith('BambuStudio') || bambu.size
    ? 'bambu'
    : prusa.size || root.application.includes('PrusaSlicer') ? 'prusa' : '3mf';

  const builder = new Builder();
  let objectCount = 0;
  const objectNames: string[] = [];
  for (const [itemPath, objectId, itemTransform] of root.build) {
    const [itemName] = modelFile(itemPath);
    const settings = itemName === rootName ? bambu.get(objectId) : undefined;
    builder.object = objectCount;
    objectNames.push(settings?.name || prusa.get(objectId)?.name || root.names.get(objectId) || `Object ${objectCount + 1}`);
    objectCount++;
    const walk = (path: string | null, oid: string, transform: Mat, partExtruder: number, depth: number) => {
      if (depth > 16) return;
      const [p, model] = modelFile(path);
      const comps = model.components.get(oid);
      if (comps) {
        for (const [cpath, cid, ct] of comps) {
          const part = p === rootName ? settings?.parts.get(cid) : undefined;
          if (part && part.subtype !== 'normal_part') continue; // modifiers, negative volumes, blockers
          walk(cpath ?? p, cid, compose(ct, transform), part?.extruder || partExtruder, depth + 1);
        }
        return;
      }
      const mesh = model.meshes.get(oid);
      if (!mesh) return;
      let skip: ((i: number) => boolean) | undefined;
      let defaultKey = (_i: number): ColourKey => 'f' + partExtruder;
      const pv = p === rootName ? prusa.get(oid) : undefined;
      if (pv) {
        const lookup = (i: number) => {
          for (const [first, last, ex] of pv.ranges) if (first <= i && i <= last) return ex;
          return pv.def;
        };
        skip = (i) => lookup(i) === null;
        defaultKey = (i) => 'f' + (lookup(i) ?? pv.def);
      }
      builder.addMesh(mesh, transform, model.unitMm, defaultKey, skip);
    };
    walk(itemName, objectId, itemTransform, settings?.extruder || 1, 0);
  }
  const { positions, keys, objects } = builder.finish();

  // Colour keys -> palette, filaments first in number order, then rgb colours in order of use.
  const used = Array.from(new Set(keys));
  used.sort((a, b) => {
    const fa = a.startsWith('f') ? +a.slice(1) : Infinity;
    const fb = b.startsWith('f') ? +b.slice(1) : Infinity;
    return fa - fb;
  });
  const palette: string[] = [];
  const names: string[] = [];
  const keyIndex = new Map<ColourKey, number>();
  for (const key of used) {
    keyIndex.set(key, palette.length);
    if (key.startsWith('f')) {
      const n = +key.slice(1);
      palette.push(n > 0 && n <= filamentHex.length ? filamentHex[n - 1] : DEFAULT_FILAMENT_COLOURS[(n - 1 + 16) % 16]);
      names.push(`Filament ${n}`);
    } else {
      palette.push(key);
      names.push(key);
    }
  }
  const colors = Uint8Array.from(keys, (k) => keyIndex.get(k)!);
  return {
    positions: Float32Array.from(positions), colors, palette, names, source, objectCount, splitTriangles: builder.splitTriangles,
    objects: Uint16Array.from(objects), objectNames,
  };
}
