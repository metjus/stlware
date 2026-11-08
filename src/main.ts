import './style.css';
import * as THREE from 'three';
import { PaintMesh, type Soup } from './core/mesh';
import { PaintSession } from './core/paint';
import { readStl, writeStl } from './core/stl';
import { readObj, parseMtl } from './core/obj';
import { read3mf, write3mf, MAX_FILAMENTS } from './core/threemf';
import { buildFilaments, writeObj } from './core/palette';
import { joinMeshes, scaleMesh, subsetMesh } from './core/mesh';
import { connectorShapes, connectorReach, connectorJoints, jointAt, rayHitsJoint, type Joint } from './core/connector';
import { buildParts, splitColours, socketGoesThrough, colourAreas, pickBody, setManifoldWasmUrl, PRESETS, type CutMode, type SplitOptions, type SplitResult, type Warning } from './core/split';
import manifoldWasmUrl from 'manifold-3d/manifold.wasm?url';
import { zipSync, strToU8, gunzipSync } from 'fflate';
import { FILAMENTS } from './core/filaments';
import { Viewer, MAX_COLOURS, type Hit } from './viewer';
import { t, applyStatic, setLang, getLang, type Lang } from './i18n';

type Tool = 'brush' | 'eraser' | 'fill' | 'smooth' | 'navigate';

interface Colour {
  hex: string;
  name: string;
  /** Filament slot chosen by hand, 0 = automatic. */
  slot: number;
  /** Split: cut this colour into a part, and how. */
  cut: boolean;
  mode: CutMode;
}

const mk = (hex: string, name: string): Colour => ({ hex, name, slot: 0, cut: true, mode: 'inlay' });
setManifoldWasmUrl(manifoldWasmUrl);

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

const settings = loadSettings();
const state = {
  tool: 'brush' as Tool,
  active: 0,
  palette: [mk('#D1D3D5', 'Light Gray')] as Colour[],
  mesh: null as PaintMesh | null,
  session: null as PaintSession | null,
  fileName: '',
  page: 'paint' as 'paint' | 'split' | 'export',
  /** 1-based body colour, 0 = auto. */
  bodyChoice: 0,
  previewOn: false,
  result: null as SplitResult | null,
  resultVisible: [] as boolean[],
  /** Objects (models) in the scene, by the mesh's faceObject number. */
  objects: [] as { name: string; visible: boolean }[],
  /** Connectors placed by hand (model space). */
  connPoints: [] as [number, number, number][],
};

function loadSettings() {
  const defaults = {
    size: 4, strength: 3, angle: 30, fillSharp: true, stopColour: true, sym: [false, false, false], gap: 10, gapAny: false,
    preset: 'resin', tolerance: 0.05, depth: 1, minThickness: 0, cutOffGap: 0, flatBottom: true, keepUncut: true,
    mergeSame: true, colourTolerance: 0.02, partsFormat: 'stl', explode: 0,
    connOn: false, connSize: 4, connLength: 4, connTol: 0.2, connChamfer: 0.5, connChamferAngle: 45, connPegOn: 'body', connPlace: 'auto',
  };
  try {
    return { ...defaults, ...JSON.parse(localStorage.getItem('stlware.settings') || '{}') };
  } catch {
    return defaults;
  }
}

function saveSettings() {
  try {
    localStorage.setItem('stlware.settings', JSON.stringify(settings));
  } catch {
    /* ignore */
  }
}

const viewer = new Viewer($('viewport'));

// ---------------------------------------------------------------------------
// Loading models
// ---------------------------------------------------------------------------

const DEFAULT_PALETTE: Colour[] = [
  mk('#D1D3D5', 'Light Gray'),
];

function showLoading(text: string | null) {
  $('loading').hidden = text === null;
  $('loadingText').textContent = text ?? '';
}

let toastTimer = 0;
function toast(text: string, error = false) {
  const el = $('toast');
  el.textContent = text;
  el.classList.toggle('error', error);
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => (el.hidden = true), error ? 7000 : 3500);
}

const nextFrame = () => new Promise<void>((r) => requestAnimationFrame(() => setTimeout(r, 0)));

async function openFiles(files: File[], add = false) {
  const model = files.find((f) => /\.(stl|3mf|obj)$/i.test(f.name));
  if (!model) return;
  const mtlFile = files.find((f) => /\.mtl$/i.test(f.name));
  showLoading(t.loading);
  await nextFrame();
  try {
    const buf = await model.arrayBuffer();
    const ext = model.name.split('.').pop()!.toLowerCase();
    let soup: Soup;
    let palette: Colour[] | null = null;
    if (ext === 'stl') {
      soup = readStl(buf);
    } else if (ext === 'obj') {
      const mtl = mtlFile ? parseMtl(await mtlFile.text()) : undefined;
      const obj = readObj(new TextDecoder().decode(buf), mtl);
      soup = obj;
      palette = obj.palette.map((hex, i) => mk(hex, colourName(hex, obj.names[i])));
    } else {
      const imp = read3mf(new Uint8Array(buf));
      soup = imp;
      palette = imp.palette.map((hex, i) => mk(hex, colourName(hex, imp.names[i])));
      const src = imp.source === 'bambu' ? 'Bambu Studio' : imp.source === 'prusa' ? 'PrusaSlicer' : '3MF';
      toast(t.importedFrom(src, imp.objectCount));
    }
    if (!soup.positions.length) throw new Error('no triangles');
    if (palette && palette.length > MAX_COLOURS) {
      soup.colors = capColours(soup.colors!, palette);
      palette = palette.slice(0, MAX_COLOURS);
      toast(t.tooManyColours);
    }
    showLoading(t.preparing);
    await nextFrame();
    const names = soup.objectNames?.length ? soup.objectNames : [model.name.replace(/\.(stl|3mf|obj)$/i, '')];
    if (add && state.mesh) addModel(PaintMesh.fromSoup(soup), palette, model.name, names);
    else {
      state.objects = names.map((name) => ({ name, visible: true }));
      load(PaintMesh.fromSoup(soup), palette, model.name);
    }
  } catch (err) {
    console.error(err);
    toast(`${t.errorRead}: ${model.name}`, true);
  } finally {
    showLoading(null);
  }
}

/** A filament's name for a known colour, else the given name. */
function colourName(hex: string, fallback: string) {
  for (const line of FILAMENTS) {
    const hit = line.colours.find((c) => c.hex.toUpperCase() === hex.toUpperCase());
    if (hit) return hit.name;
  }
  return fallback;
}

/** Map colours above MAX_COLOURS onto the closest of the first MAX_COLOURS. */
function capColours(colors: Uint8Array, palette: Colour[]): Uint8Array {
  const rgb = palette.map((c) => new THREE.Color(c.hex));
  const map = palette.map((_, i) => {
    if (i < MAX_COLOURS) return i;
    let best = 0, dist = Infinity;
    for (let k = 0; k < MAX_COLOURS; k++) {
      const d = (rgb[i].r - rgb[k].r) ** 2 + (rgb[i].g - rgb[k].g) ** 2 + (rgb[i].b - rgb[k].b) ** 2;
      if (d < dist) {
        dist = d;
        best = k;
      }
    }
    return best;
  });
  return colors.map((c) => map[c]);
}

function load(mesh: PaintMesh, palette: Colour[] | null, name: string, keepView = false) {
  clearResult();
  state.connPoints = [];
  lastJoints = [];
  state.mesh = mesh;
  state.session = new PaintSession(mesh);
  state.session.onChange = (faces) => {
    visibleCache = null;
    viewer.updateFaces(faces);
    updateUndo();
    schedulePreview(800);
  };
  state.fileName = name;
  if (!keepView) {
    state.palette = palette && palette.length ? palette : DEFAULT_PALETTE.map((c) => ({ ...c }));
    state.active = Math.min(1, state.palette.length - 1);
    state.bodyChoice = 0;
  }
  viewer.setPalette(state.palette.map((c) => c.hex));
  viewer.setMesh(mesh);
  // every object number in the mesh has an outliner entry
  objectFaces = new Uint32Array(Math.max(state.objects.length, 1));
  let top = 0;
  for (let f = 0; f < mesh.faceCount; f++) {
    const o = mesh.faceObject[f];
    if (o >= objectFaces.length) {
      const grown = new Uint32Array(o + 1);
      grown.set(objectFaces);
      objectFaces = grown;
    }
    objectFaces[o]++;
    top = Math.max(top, o);
  }
  while (state.objects.length <= top) state.objects.push({ name: `Object ${state.objects.length + 1}`, visible: true });
  applyHidden();
  $('empty').hidden = true;
  $('fileName').textContent = name;
  $('triCount').textContent = `${mesh.faceCount.toLocaleString()} ${t.triangles}`;
  ($('exportBtn') as HTMLButtonElement).disabled = false;
  renderPalette();
  updateUndo();
  schedulePreview(0);
  if (state.tool === 'navigate' && !matchMedia('(pointer: coarse)').matches) setTool('brush');
}

/** #3DBenchy (CC BY-ND 4.0, unmodified), gzip-compressed in samples/. */
async function sampleModel() {
  showLoading(t.loading);
  await nextFrame();
  try {
    const res = await fetch('samples/3dbenchy.stl.bin');
    if (!res.ok) throw new Error(`${res.status}`);
    const stl = gunzipSync(new Uint8Array(await res.arrayBuffer()));
    showLoading(t.preparing);
    await nextFrame();
    state.objects = [{ name: '3DBenchy', visible: true }];
    load(PaintMesh.fromSoup(readStl(stl.buffer.slice(stl.byteOffset, stl.byteOffset + stl.byteLength))), null, '3DBenchy.stl');
    toast(t.benchyCredit);
  } catch (err) {
    console.error(err);
    toast(`${t.errorRead}: 3DBenchy`, true);
  } finally {
    showLoading(null);
  }
}

// ---------------------------------------------------------------------------
// Painting
// ---------------------------------------------------------------------------

const canvas = viewer.renderer.domElement;
let painting = false;
let lastScreen: { x: number; y: number } | null = null;
let strokeColour = 1;
let fillPreview: { face: number; key: string; faces: Uint32Array } | null = null;

function brushRadius() {
  return settings.size / 2;
}

/** The hit plus its mirror images for the active symmetry axes. */
function mirrored(hit: Hit): Hit[] {
  const out = [hit];
  const c = viewer.centre;
  settings.sym.forEach((on: boolean, axis: number) => {
    if (!on) return;
    for (const h of out.slice()) {
      const p = h.point.clone();
      p.setComponent(axis, 2 * c.getComponent(axis) - p.getComponent(axis));
      const m = viewer.nearestFace(p);
      if (m) {
        const n = h.normal.clone();
        n.setComponent(axis, -n.getComponent(axis));
        out.push({ face: m.face, point: m.point, normal: n });
      }
    }
  });
  return out;
}

function dab(hit: Hit) {
  const s = state.session!;
  const faces = new Set<number>();
  for (const h of mirrored(hit)) {
    faces.add(h.face);
    viewer.facesInSphere(h.point, h.normal, brushRadius(), faces);
  }
  if (state.tool === 'smooth') s.smooth(faces, settings.strength);
  else s.apply(faces, strokeColour);
}

function strokeTo(x: number, y: number) {
  if (!lastScreen) return;
  const hit0 = viewer.raycast(x, y);
  const ppm = hit0 ? viewer.pixelsPerMm(hit0.point) : 1;
  const step = Math.max(2, brushRadius() * ppm * 0.35);
  const dx = x - lastScreen.x, dy = y - lastScreen.y;
  const dist = Math.hypot(dx, dy);
  if (dist < step) return;
  const n = Math.floor(dist / step);
  for (let i = 1; i <= n; i++) {
    const px = lastScreen.x + (dx * i) / n, py = lastScreen.y + (dy * i) / n;
    const hit = i === n ? hit0 : viewer.raycast(px, py);
    if (hit) dab(hit);
  }
  lastScreen = { x, y };
}

function regionFor(hit: Hit): Uint32Array {
  const s = state.session!;
  const opts = { sameColour: settings.stopColour, maxAngle: settings.fillSharp ? Math.min(179, settings.angle) : null };
  const key = `${settings.fillSharp}|${settings.angle}|${settings.stopColour}|${settings.sym.join()}`;
  if (fillPreview && fillPreview.key === key && fillPreview.face === hit.face) return fillPreview.faces;
  // moving within the previewed area keeps the same region
  if (fillPreview && fillPreview.key === key && settings.sym.every((v: boolean) => !v)) {
    const prev = fillPreview.faces;
    if (prev.length > 64 && containsFace(prev, hit.face)) return prev;
  }
  let faces: Uint32Array;
  const seeds = mirrored(hit);
  if (seeds.length === 1) faces = s.region(hit.face, opts);
  else {
    const all = new Set<number>();
    for (const h of seeds) for (const f of s.region(h.face, opts)) all.add(f);
    faces = Uint32Array.from(all);
  }
  if (state.objects.some((o) => !o.visible)) faces = faces.filter((f) => !viewer.isHidden(f));
  fillPreview = { face: hit.face, key, faces };
  return faces;
}

let sortedCache: { src: Uint32Array; sorted: Uint32Array } | null = null;
function containsFace(faces: Uint32Array, f: number) {
  if (!sortedCache || sortedCache.src !== faces) sortedCache = { src: faces, sorted: faces.slice().sort() };
  const a = sortedCache.sorted;
  let lo = 0, hi = a.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (a[mid] === f) return true;
    if (a[mid] < f) lo = mid + 1;
    else hi = mid - 1;
  }
  return false;
}

function invalidatePreview() {
  fillPreview = null;
  viewer.setHighlight(null);
}

let hoverQueued: PointerEvent | null = null;
// --- connectors placed by hand (Split page) ---------------------------------

let lastJoints: Joint[] = [];
let lastGap = 0;

function placing() {
  return state.page === 'split' && settings.connOn && settings.connPlace === 'manual' && state.previewOn && !state.result && !!state.mesh;
}

/** The cut under the cursor: where on it, and a placed peg there (to remove) if any. */
function pickCut(e: PointerEvent): { joint: Joint; remove: number } | null {
  const ray = viewer.modelRay(e.clientX, e.clientY);
  const o: [number, number, number] = [ray.origin.x, ray.origin.y, ray.origin.z];
  const d: [number, number, number] = [ray.direction.x, ray.direction.y, ray.direction.z];
  let best: { t: number; j: Joint } | null = null;
  for (const j of lastJoints) {
    const t = rayHitsJoint(j, o, d);
    if (t !== null && (!best || t < best.t)) best = { t, j };
  }
  if (!best) return null;
  const p: [number, number, number] = [o[0] + d[0] * best.t, o[1] + d[1] * best.t, o[2] + d[2] * best.t];
  const joint = jointAt(best.j, p);
  if (!joint) return null;
  const co = splitOptions().connector!;
  const near = co.size / 2 + co.tolerance;
  const remove = state.connPoints.findIndex((q) => Math.hypot(q[0] - joint.centre[0], q[1] - joint.centre[1], q[2] - joint.centre[2]) < near);
  return { joint, remove };
}

function hoverPlace(e: PointerEvent) {
  const pick = e.buttons ? null : pickCut(e);
  if (!pick) {
    viewer.setGhost(null);
    canvas.style.cursor = '';
    return;
  }
  const co = splitOptions().connector!;
  const at = pick.remove >= 0 ? jointAt(pick.joint, state.connPoints[pick.remove]) ?? pick.joint : pick.joint;
  const { peg } = connectorShapes(at, co, lastGap, 0.05);
  const fits = at.room >= connectorReach(co);
  viewer.setGhost({ ...peg, hex: pick.remove >= 0 ? '#f87171' : fits ? '#2dd4bf' : '#f87171' });
  canvas.style.cursor = pick.remove >= 0 || fits ? 'pointer' : 'not-allowed';
}

function clickPlace(e: PointerEvent) {
  const pick = pickCut(e);
  if (!pick) return false;
  if (pick.remove >= 0) state.connPoints.splice(pick.remove, 1);
  else {
    if (pick.joint.room < connectorReach(splitOptions().connector!)) {
      toast(t.partNoRoom(pick.joint.room), true);
      return true;
    }
    state.connPoints.push(pick.joint.centre);
  }
  viewer.setGhost(null);
  renderSplit();
  schedulePreview(0);
  return true;
}

function hover(e: PointerEvent) {
  if (placing()) {
    viewer.showRing(null, 0);
    hoverPlace(e);
    return;
  }
  viewer.setGhost(null);
  if (!state.mesh || state.result || state.tool === 'navigate' || e.buttons) {
    viewer.showRing(null, 0);
    if (state.tool !== 'fill') viewer.setHighlight(null);
    return;
  }
  const hit = viewer.raycast(e.clientX, e.clientY);
  if (state.tool === 'fill') {
    viewer.showRing(null, 0);
    if (!hit) {
      viewer.setHighlight(null);
      return;
    }
    viewer.setHighlight(regionFor(hit), state.palette[state.active].hex);
  } else {
    const hex = state.tool === 'eraser' || e.shiftKey ? state.palette[0].hex : state.tool === 'smooth' ? '#ffffff' : state.palette[state.active].hex;
    viewer.showRing(hit, brushRadius(), contrastRing(hex));
  }
}

function contrastRing(hex: string) {
  const c = new THREE.Color(hex);
  const l = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
  return l > 0.85 ? '#2dd4bf' : hex;
}

canvas.addEventListener(
  'pointerdown',
  (e) => {
    if (placing()) {
      if (e.button === 0 && !e.altKey && clickPlace(e)) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
      return; // no painting while placing pegs; elsewhere the camera rotates
    }
    if (!state.session || state.result || state.tool === 'navigate' || e.button !== 0 || e.altKey || e.pointerType === 'touch' && !e.isPrimary) return;
    const hit = viewer.raycast(e.clientX, e.clientY);
    if (!hit) return; // empty space: let the camera rotate
    e.stopImmediatePropagation();
    e.preventDefault();
    const s = state.session;
    if (state.tool === 'fill') {
      const faces = regionFor(hit);
      s.apply(faces, state.active);
      invalidatePreview();
      return;
    }
    canvas.setPointerCapture(e.pointerId);
    painting = true;
    strokeColour = state.tool === 'eraser' || e.shiftKey ? 0 : state.active;
    s.begin();
    lastScreen = { x: e.clientX, y: e.clientY };
    dab(hit);
    viewer.showRing(hit, brushRadius(), contrastRing(state.palette[strokeColour].hex));
  },
  { capture: true },
);

canvas.addEventListener('pointermove', (e) => {
  if (painting) {
    strokeTo(e.clientX, e.clientY);
    viewer.showRing(viewer.raycast(e.clientX, e.clientY), brushRadius());
    return;
  }
  if (!hoverQueued) requestAnimationFrame(() => {
    if (hoverQueued) hover(hoverQueued);
    hoverQueued = null;
  });
  hoverQueued = e;
});

const endStroke = () => {
  if (!painting) return;
  painting = false;
  lastScreen = null;
  state.session?.end();
  invalidatePreview();
  updateUndo();
};
canvas.addEventListener('pointerup', endStroke);
canvas.addEventListener('pointercancel', endStroke);
canvas.addEventListener('pointerleave', () => {
  viewer.setGhost(null);
  if (!painting) {
    viewer.showRing(null, 0);
    if (state.tool === 'fill') viewer.setHighlight(null);
  }
});
canvas.addEventListener('contextmenu', (e) => e.preventDefault());

// ---------------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------------

function setTool(tool: Tool) {
  state.tool = tool;
  document.querySelectorAll<HTMLButtonElement>('#tools button').forEach((b) => b.classList.toggle('active', b.dataset.tool === tool));
  $('optSize').hidden = !['brush', 'eraser', 'smooth'].includes(tool);
  $('optStrength').hidden = tool !== 'smooth';
  $('optAngle').hidden = tool !== 'fill';
  $('viewport').classList.toggle('painting', tool !== 'navigate');
  const c = viewer.controls;
  c.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.PAN, RIGHT: tool === 'navigate' ? THREE.MOUSE.PAN : THREE.MOUSE.ROTATE };
  viewer.showRing(null, 0);
  invalidatePreview();
  updateHint();
}

function updateHint() {
  const map: Record<Tool, string> = { brush: t.hintBrush, eraser: t.hintBrush, fill: t.hintFill, smooth: t.hintSmooth, navigate: t.hintNavigate };
  $('hint').textContent = !state.mesh ? '' : placing() ? t.hintPlace : map[state.tool];
}

function updateUndo() {
  ($('undoBtn') as HTMLButtonElement).disabled = !state.session?.canUndo;
  ($('redoBtn') as HTMLButtonElement).disabled = !state.session?.canRedo;
}

function syncOptions() {
  const size = $('sizeRange') as HTMLInputElement;
  size.value = String(settings.size);
  $('sizeOut').textContent = `${(+settings.size).toFixed(1)} mm`;
  ($('strengthRange') as HTMLInputElement).value = String(settings.strength);
  $('strengthOut').textContent = String(settings.strength);
  ($('angleRange') as HTMLInputElement).value = String(settings.angle);
  $('angleOut').textContent = `${Math.min(179, settings.angle)}°`;
  ($('fillSharp') as HTMLInputElement).checked = settings.fillSharp;
  $('angleBox').classList.toggle('disabled', !settings.fillSharp);
  ($('angleRange') as HTMLInputElement).disabled = !settings.fillSharp;
  ($('stopColour') as HTMLInputElement).checked = settings.stopColour;
  $('fillNote').textContent = t.fillWhat(settings.fillSharp, settings.stopColour);
  document.querySelectorAll<HTMLButtonElement>('#symmetry button').forEach((b) => b.classList.toggle('active', settings.sym[+b.dataset.axis!]));
  ($('gapRange') as HTMLInputElement).value = String(settings.gap);
  $('gapOut').textContent = `${settings.gap} mm²`;
  ($('gapAny') as HTMLInputElement).checked = settings.gapAny;
  saveSettings();
}

function renderPalette() {
  const wrap = $('swatches');
  wrap.innerHTML = '';
  state.palette.forEach((c, i) => {
    const b = document.createElement('button');
    b.className = 'swatch' + (i === state.active ? ' active' : '');
    b.style.background = c.hex;
    b.title = `${i + 1}. ${c.name} ${c.hex}`;
    b.innerHTML = `<span class="num">${i + 1}</span>`;
    b.onclick = () => selectColour(i);
    wrap.appendChild(b);
  });
  if (state.palette.length < MAX_COLOURS) {
    const add = document.createElement('button');
    add.className = 'swatch add';
    add.title = t.addColour;
    add.textContent = '+';
    add.onclick = addColour;
    wrap.appendChild(add);
  }
  $('paletteCount').textContent = `${state.palette.length}/${MAX_COLOURS}`;
  const cur = state.palette[state.active];
  if (cur) {
    ($('colourPicker') as HTMLInputElement).value = cur.hex.toLowerCase();
    $('pickerSwatch').style.background = cur.hex;
    const nameInput = $('colourName') as HTMLInputElement;
    if (document.activeElement !== nameInput) nameInput.value = cur.name;
    const hexInput = $('colourHex') as HTMLInputElement;
    if (document.activeElement !== hexInput) hexInput.value = cur.hex;
    ($('deleteColour') as HTMLButtonElement).disabled = state.active === 0;
    $('baseNote').hidden = state.active !== 0;
  }
  $('colourEdit').hidden = !state.palette.length;
  renderSplit();
  renderSlots();
}

function selectColour(i: number) {
  if (i < 0 || i >= state.palette.length) return;
  state.active = i;
  invalidatePreview();
  renderPalette();
}

function addColour() {
  if (state.palette.length >= MAX_COLOURS) return;
  const used = new Set(state.palette.map((c) => c.hex));
  const pick = FILAMENTS[0].colours.find((c) => !used.has(c.hex)) ?? { name: t.colour, hex: '#808080' };
  state.palette.push(mk(pick.hex, pick.name));
  state.active = state.palette.length - 1;
  viewer.setPalette(state.palette.map((c) => c.hex));
  renderPalette();
}

function setActiveColour(hex: string, name?: string) {
  const c = state.palette[state.active];
  if (!c) return;
  c.hex = hex.toUpperCase();
  if (name) c.name = name;
  viewer.setPalette(state.palette.map((p) => p.hex));
  renderPalette();
  schedulePreview(300);
}

function deleteColour() {
  const i = state.active;
  if (i === 0 || !state.session) return;
  state.palette.splice(i, 1);
  state.session.removeColour(i);
  visibleCache = null;
  if (state.bodyChoice === i + 1) state.bodyChoice = 0;
  else if (state.bodyChoice > i + 1) state.bodyChoice--;
  state.active = Math.min(i, state.palette.length - 1);
  viewer.setPalette(state.palette.map((c) => c.hex));
  viewer.refreshAllColours();
  invalidatePreview();
  renderPalette();
  updateUndo();
}

function renderLibrary() {
  const lib = $('library');
  lib.innerHTML = '';
  for (const line of FILAMENTS) {
    const title = document.createElement('div');
    title.className = 'lib-line';
    title.textContent = line.line;
    const grid = document.createElement('div');
    grid.className = 'lib-grid';
    for (const c of line.colours) {
      const b = document.createElement('button');
      b.style.background = c.hex;
      b.title = `${line.line} · ${c.name} ${c.hex}`;
      b.onclick = () => setActiveColour(c.hex, c.name);
      grid.appendChild(b);
    }
    lib.append(title, grid);
  }
}

function renderShortcuts() {
  const dl = $('shortcutList');
  dl.innerHTML = '';
  for (const [k, v] of t.shortcutList) {
    const dt = document.createElement('dt');
    dt.textContent = k;
    const dd = document.createElement('dd');
    dd.textContent = v;
    dl.append(dt, dd);
  }
}

function download(data: Uint8Array, name: string, type: string) {
  const blob = new Blob([data as BlobPart], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function baseName() {
  return (state.fileName || 'model').replace(/\.(stl|3mf|obj)$/i, '');
}

/** Used colours as filaments (slots, merged colours) and each face's filament. */
function filamentsFor(faceColor: Uint8Array) {
  const used = new Set<number>(faceColor);
  const { filaments, map } = buildFilaments(state.palette, used, settings.mergeSame, settings.colourTolerance);
  return { filaments, faceColour: faceColor.map((c) => map[c]) };
}

function export3mf() {
  const m = visibleMesh();
  if (!m) return;
  const { filaments, faceColour } = filamentsFor(m.faceColor);
  const data = write3mf(m.positions, m.index, faceColour, filaments, baseName());
  download(data, `${baseName()}_painted.3mf`, 'model/3mf');
  toast(`${t.exported}: ${baseName()}_painted.3mf`);
}

function exportObj() {
  const m = visibleMesh();
  if (!m) return;
  const { filaments, faceColour } = filamentsFor(m.faceColor);
  const name = baseName();
  const { obj, mtl } = writeObj(m.positions, m.index, faceColour, filaments, name, `${name}.mtl`);
  download(zipSync({ [`${name}.obj`]: strToU8(obj), [`${name}.mtl`]: strToU8(mtl) }, { level: 6 }), `${name}_obj.zip`, 'application/zip');
  toast(`${t.exported}: ${name}_obj.zip`);
}

function exportStl() {
  const m = visibleMesh();
  if (!m) return;
  download(writeStl(m.positions, m.index, undefined, baseName()), `${baseName()}.stl`, 'model/stl');
}

function bindUi() {
  document.querySelectorAll<HTMLButtonElement>('#tools button').forEach((b) => (b.onclick = () => setTool(b.dataset.tool as Tool)));
  const input = $('fileInput') as HTMLInputElement;
  const pick = () => input.click();
  $('openBtn').onclick = pick;
  $('emptyOpen').onclick = pick;
  input.onchange = () => {
    if (input.files?.length) openFiles(Array.from(input.files));
    input.value = '';
  };
  $('sampleBtn').onclick = sampleModel;

  $('undoBtn').onclick = () => {
    state.session?.undo();
    invalidatePreview();
    updateUndo();
  };
  $('redoBtn').onclick = () => {
    state.session?.redo();
    invalidatePreview();
    updateUndo();
  };

  const menu = $('exportMenu');
  $('exportBtn').onclick = (e) => {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
  };
  document.addEventListener('click', () => (menu.hidden = true));
  $('export3mf').onclick = export3mf;
  $('exportStl').onclick = exportStl;
  $('exportObj').onclick = exportObj;
  bindPanels();

  const lang = $('langSelect') as HTMLSelectElement;
  lang.value = getLang();
  lang.onchange = () => {
    setLang(lang.value as Lang);
    renderShortcuts();
    renderPalette();
    updateHint();
    syncOptions();
    renderReport();
    renderResult();
    renderOutliner();
    if (state.mesh) $('triCount').textContent = `${state.mesh.faceCount.toLocaleString()} ${t.triangles}`;
  };

  const range = (id: string, key: 'size' | 'strength' | 'angle' | 'gap') => {
    $(id).oninput = (e) => {
      settings[key] = +(e.target as HTMLInputElement).value;
      if (key === 'angle') invalidatePreview();
      syncOptions();
    };
  };
  range('sizeRange', 'size');
  range('strengthRange', 'strength');
  range('angleRange', 'angle');
  range('gapRange', 'gap');
  $('fillSharp').onchange = (e) => {
    settings.fillSharp = (e.target as HTMLInputElement).checked;
    invalidatePreview();
    syncOptions();
  };
  $('stopColour').onchange = (e) => {
    settings.stopColour = (e.target as HTMLInputElement).checked;
    invalidatePreview();
    syncOptions();
  };
  $('gapAny').onchange = (e) => {
    settings.gapAny = (e.target as HTMLInputElement).checked;
    syncOptions();
  };
  document.querySelectorAll<HTMLButtonElement>('#symmetry button').forEach((b) => {
    b.onclick = () => toggleSym(+b.dataset.axis!);
  });

  const picker = $('colourPicker') as HTMLInputElement;
  picker.oninput = () => setActiveColour(picker.value);
  const hexInput = $('colourHex') as HTMLInputElement;
  hexInput.oninput = () => {
    let v = hexInput.value.trim();
    if (!v.startsWith('#')) v = '#' + v;
    if (/^#[0-9a-f]{6}$/i.test(v)) setActiveColour(v);
  };
  hexInput.onblur = () => renderPalette();
  const nameInput = $('colourName') as HTMLInputElement;
  nameInput.oninput = () => {
    const c = state.palette[state.active];
    if (c) c.name = nameInput.value;
  };
  $('deleteColour').onclick = deleteColour;

  $('fillGapsBtn').onclick = () => {
    if (!state.session) return;
    const n = state.session.fillGaps(state.active, settings.gap, settings.gapAny);
    invalidatePreview();
    updateUndo();
    toast(t.gapsDone(n));
  };

  // drag & drop
  const vp = $('viewport');
  let depth = 0;
  window.addEventListener('dragenter', (e) => {
    if (!e.dataTransfer?.types.includes('Files')) return;
    depth++;
    $('dropOverlay').hidden = false;
  });
  window.addEventListener('dragleave', () => {
    depth = Math.max(0, depth - 1);
    if (!depth) $('dropOverlay').hidden = true;
  });
  window.addEventListener('dragover', (e) => e.preventDefault());
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    depth = 0;
    $('dropOverlay').hidden = true;
    if (e.dataTransfer?.files.length) openFiles(Array.from(e.dataTransfer.files));
  });
  void vp;

  window.addEventListener('keydown', (e) => {
    const target = e.target as HTMLElement;
    if (target.matches('input[type=text], input:not([type]), select, textarea')) return;
    const k = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && k === 'z') {
      e.preventDefault();
      (e.shiftKey ? $('redoBtn') : $('undoBtn')).click();
      return;
    }
    if ((e.ctrlKey || e.metaKey) && k === 'y') {
      e.preventDefault();
      $('redoBtn').click();
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const tools: Record<string, Tool> = { b: 'brush', e: 'eraser', f: 'fill', s: 'smooth', v: 'navigate' };
    if (tools[k]) setTool(tools[k]);
    else if (/^[1-9]$/.test(k)) selectColour(+k - 1);
    else if (k === '[' || k === ']') {
      const dir = k === ']' ? 1 : -1;
      if (state.tool === 'fill') settings.angle = Math.max(1, Math.min(179, settings.angle + dir * 5));
      else settings.size = Math.max(0.2, Math.min(60, +(settings.size * (dir > 0 ? 1.2 : 1 / 1.2)).toFixed(1)));
      invalidatePreview();
      syncOptions();
    } else if (k === 'x' || k === 'y' || k === 'z') toggleSym('xyz'.indexOf(k));
    else if (e.key === 'Home') viewer.frame();
  });
}

// ---------------------------------------------------------------------------
// Split parts, model and export panels
// ---------------------------------------------------------------------------

const colourLabel = (i: number) => `${i + 1} ${state.palette[i]?.name ?? ''}`.trim();

function splitOptions(): SplitOptions {
  return {
    tolerance: Math.max(0, +settings.tolerance || 0),
    depth: Math.max(0.01, +settings.depth || 0.01),
    bodyChoice: state.bodyChoice,
    flatBottom: settings.flatBottom,
    keepUncut: settings.keepUncut,
    minThickness: Math.max(0, +settings.minThickness || 0),
    cutOffGap: Math.max(0, +settings.cutOffGap || 0),
    cut: state.palette.map((c) => c.cut),
    mode: state.palette.map((c) => c.mode),
    connector: {
      enabled: settings.connOn,
      size: Math.max(0.5, +settings.connSize || 4),
      length: Math.max(0.5, +settings.connLength || 4),
      tolerance: Math.max(0, +settings.connTol || 0),
      chamfer: Math.max(0, +settings.connChamfer || 0),
      angle: Math.max(0, Math.min(75, +settings.connChamferAngle || 0)),
      pegOn: settings.connPegOn === 'part' ? 'part' : 'body',
      points: settings.connPlace === 'manual' ? state.connPoints : undefined,
    },
  };
}

function setPage(page: typeof state.page) {
  state.page = page;
  if (page === 'paint') clearResult();
  viewer.setGhost(null);
  document.querySelectorAll<HTMLButtonElement>('#tabs button').forEach((b) => b.classList.toggle('active', b.dataset.page === page));
  document.querySelectorAll<HTMLElement>('.page').forEach((p) => (p.hidden = p.dataset.page !== page));
  renderSplit();
  renderSlots();
}

function modelSizeText() {
  const m = state.mesh;
  if (!m) return '';
  const b = m.bounds();
  return t.modelSize(b[3] - b[0], b[4] - b[1], b[5] - b[2]);
}

/** The split settings, body colour and the per-colour cut list. */
function renderSplit() {
  const presetBtns = document.querySelectorAll<HTMLButtonElement>('#presets button');
  presetBtns.forEach((b) => b.classList.toggle('active', b.dataset.preset === settings.preset));
  const num = (id: string, v: number) => {
    const el = $(id) as HTMLInputElement;
    if (document.activeElement !== el) el.value = String(v);
  };
  num('tolInput', settings.tolerance);
  num('depthInput', settings.depth);
  num('minThickInput', settings.minThickness);
  num('gapInput', settings.cutOffGap);
  num('connSize', settings.connSize);
  num('connLength', settings.connLength);
  num('connTol', settings.connTol);
  num('connChamfer', settings.connChamfer);
  num('connAngle', settings.connChamferAngle);
  ($('connOn') as HTMLInputElement).checked = settings.connOn;
  $('connBox').hidden = !settings.connOn;
  document.querySelectorAll<HTMLButtonElement>('#pegOn button').forEach((b) => b.classList.toggle('active', b.dataset.peg === settings.connPegOn));
  document.querySelectorAll<HTMLButtonElement>('#connPlace button').forEach((b) => b.classList.toggle('active', b.dataset.place === settings.connPlace));
  const manual = settings.connPlace === 'manual';
  $('placeBox').hidden = !manual;
  $('placeCount').textContent = t.pegsPlaced(state.connPoints.length);
  ($('clearPegs') as HTMLButtonElement).disabled = !state.connPoints.length;
  updateHint();
  ($('flatBottom') as HTMLInputElement).checked = settings.flatBottom;
  document.querySelectorAll<HTMLButtonElement>('#uncut button').forEach((b) => b.classList.toggle('active', (b.dataset.keep === '1') === settings.keepUncut));
  $('modelSize').textContent = modelSizeText();
  $('modelSize2').textContent = modelSizeText();

  const m = visibleMesh();
  const areas = m ? colourAreas(m, state.palette.length) : state.palette.map(() => 0);
  const body = pickBody(areas, state.bodyChoice);
  const sel = $('bodySelect') as HTMLSelectElement;
  sel.innerHTML = '';
  sel.append(new Option(t.auto, '0'));
  state.palette.forEach((_, i) => sel.append(new Option(colourLabel(i), String(i + 1))));
  sel.value = String(state.bodyChoice);
  $('bodyInfo').textContent = body === null ? '' : t.bodyIs(body + 1, state.palette[body].name, state.bodyChoice ? t.whyChosen : t.whyLargest);

  const list = $('cutList');
  list.innerHTML = '';
  state.palette.forEach((c, i) => {
    const row = document.createElement('div');
    const used = areas[i] > 0;
    const isBody = i === body;
    row.className = 'cut-row' + (!used || isBody || !c.cut ? ' off' : '');
    const box = document.createElement('input');
    box.type = 'checkbox';
    box.checked = c.cut && !isBody;
    box.disabled = isBody || !used;
    box.onchange = () => {
      c.cut = box.checked;
      renderSplit();
      schedulePreview(0);
    };
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.style.background = c.hex;
    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = colourLabel(i);
    row.append(box, chip, name);
    if (isBody || !used) {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.textContent = isBody ? t.bodyTag : t.unused;
      if (!used) tag.style.color = 'var(--muted)';
      row.append(tag);
    } else {
      const mode = document.createElement('div');
      mode.className = 'mode';
      for (const [k, label] of [['inlay', t.inlay], ['cutoff', t.cutOff]] as const) {
        const b = document.createElement('button');
        b.textContent = label;
        b.classList.toggle('active', c.mode === k);
        b.disabled = !c.cut;
        b.onclick = () => {
          c.mode = k;
          renderSplit();
          schedulePreview(0);
        };
        mode.append(b);
      }
      row.append(mode);
    }
    list.append(row);
  });
  $('previewBtn').textContent = state.previewOn ? t.hidePreview : t.preview;
  $('previewBtn').classList.toggle('active', state.previewOn);
  ($('splitBtn') as HTMLButtonElement).disabled = !m;
  ($('previewBtn') as HTMLButtonElement).disabled = !m;
}

// --- preview ---------------------------------------------------------------

let previewTimer = 0;
let lastReport: { lines: { hex: string; text: string; note?: string; bad: boolean }[]; message: string } | null = null;

function schedulePreview(delay: number) {
  clearTimeout(previewTimer);
  if (!state.previewOn || !state.mesh || state.result) return;
  previewTimer = window.setTimeout(runPreview, delay);
}

function runPreview() {
  const m = visibleMesh();
  if (!m || !state.previewOn) return;
  const o = splitOptions();
  let res;
  try {
    res = buildParts(m, state.palette.length, o);
  } catch (err) {
    console.error(err);
    viewer.setOverlay(null);
    lastReport = { lines: [], message: String(err) };
    renderReport();
    return;
  }
  const areas = colourAreas(m, state.palette.length);
  const message = areas.filter((a) => a > 0).length < 2 ? t.nothingToSplit : !res.parts.length ? t.nothingTicked : '';
  const overlay = res.parts.map((p) => ({ positions: p.shape.positions, index: p.shape.index, hex: state.palette[p.colour].hex, bad: p.report.bad }));
  const co = o.connector!;
  const fits = new Map<number, { ok: number; room: number | null; through: boolean }>();
  lastJoints = [];
  lastGap = o.cutOffGap;
  if (co.enabled && res.bodyIndex !== null) {
    for (const p of res.parts) {
      const f = { ok: 0, room: null as number | null, through: false };
      for (const j of p.joints ?? []) lastJoints.push(j);
      for (const j of (p.joints ?? []).flatMap((jt) => connectorJoints(jt, co))) {
        if (j.room < connectorReach(co)) {
          f.room = j.room;
          continue;
        }
        // only the part of the peg that sticks out of its piece
        const { peg } = connectorShapes(j, co, o.cutOffGap, 0.05);
        // the socket goes into the part, or into the body (the whole model stands in for it)
        if (socketGoesThrough(co.pegOn === 'body' ? p.shape : m, j, co, o.cutOffGap)) f.through = true;
        overlay.push({ positions: peg.positions, index: peg.index, hex: state.palette[co.pegOn === 'body' ? res.bodyIndex : p.colour].hex, bad: new Set() });
        f.ok++;
      }
      fits.set(p.colour, f);
    }
  }
  viewer.setOverlay(overlay);
  const lines = res.parts
    .slice()
    .sort((a, b) => a.colour - b.colour)
    .map((p) => {
      const hex = state.palette[p.colour].hex;
      const n = p.colour + 1, name = state.palette[p.colour].name;
      if (p.cutOff) {
        const f = fits.get(p.colour);
        const manualNone = co.enabled && co.points && !f?.ok && f?.room == null && p.joints?.length;
        const notes = [p.report.dropped ? t.partDropped(p.report.dropped) : '', f?.ok ? t.partConnector(f.ok) : '', manualNone ? t.partNoPegs : '', f?.room != null ? t.partNoRoom(f.room) : '', f?.through ? t.partConnectorThrough(co.pegOn !== 'body') : ''].filter(Boolean);
        return { hex, text: t.partCutOff(n, name), note: notes.join(', ') || undefined, bad: f?.room != null || !!f?.through };
      }
      const through = p.report.bad.size > 0;
      const deepest = Math.max(o.depth, p.report.deepest - o.tolerance);
      let note = through ? t.partThrough(-(p.report.margin ?? 0)) : t.partFits(p.report.margin);
      if (p.report.tooCurved) note += ', ' + t.partCurved;
      return { hex, text: t.partDepth(n, name, o.depth, deepest), note, bad: through || p.report.tooCurved };
    });
  lastReport = { lines, message };
  renderReport();
}

function renderReport() {
  const el = $('previewReport');
  el.innerHTML = '';
  if (!state.previewOn || !lastReport) return;
  if (lastReport.message) {
    const p = document.createElement('div');
    p.className = 'line';
    p.textContent = lastReport.message;
    el.append(p);
    return;
  }
  for (const l of lastReport.lines) {
    const row = document.createElement('div');
    row.className = 'line' + (l.bad ? ' bad' : '');
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.style.background = l.hex;
    const text = document.createElement('div');
    text.textContent = l.text;
    if (l.note) {
      const small = document.createElement('small');
      small.textContent = l.note;
      text.append(small);
    }
    row.append(chip, text);
    el.append(row);
  }
}

function togglePreview(on = !state.previewOn) {
  state.previewOn = on;
  if (!on) {
    clearTimeout(previewTimer);
    viewer.setOverlay(null);
    lastReport = null;
    renderReport();
  } else schedulePreview(0);
  renderSplit();
}

// --- split result ----------------------------------------------------------

async function runSplit() {
  const m = visibleMesh();
  if (!m) return;
  showLoading(t.splitting);
  await nextFrame();
  try {
    const areas = colourAreas(m, state.palette.length);
    if (areas.filter((a) => a > 0).length < 2) {
      toast(t.nothingToSplit, true);
      return;
    }
    const res = await splitColours(m, state.palette.length, splitOptions());
    if (!res) {
      toast(t.nothingTicked, true);
      return;
    }
    togglePreview(false);
    state.result = res;
    state.resultVisible = [true, ...res.parts.map(() => true)];
    const hexes = state.palette.map((c) => c.hex);
    viewer.setResult([
      { positions: res.body.positions, index: res.body.index, colours: hexes, faceColor: res.body.faceColor },
      ...res.parts.map((p) => ({ positions: p.mesh.positions, index: p.mesh.index, colours: [hexes[p.colour]] })),
    ]);
    viewer.layoutResult(settings.explode, state.resultVisible);
    viewer.showRing(null, 0);
    viewer.setHighlight(null);
    renderResult();
    toast(t.splitDone(res.parts.length, res.bodyIndex + 1));
  } catch (err) {
    console.error(err);
    toast(String(err), true);
  } finally {
    showLoading(null);
  }
}

function clearResult() {
  if (!state.result) return;
  state.result = null;
  viewer.setResult(null);
  renderResult();
}

function warningText(w: Warning) {
  const name = (c: number) => colourLabel(c);
  switch (w.kind) {
    case 'thin': return t.warnThin(name(w.colour), w.have, w.need);
    case 'curved': return t.warnCurved(name(w.colour));
    case 'dropped': return t.warnDropped(name(w.colour), w.faces, settings.minThickness);
    case 'covered': return t.warnCovered(name(w.colour));
    case 'failed': return t.warnFailed(name(w.colour));
    case 'connectorTooBig': return t.warnConnectorTooBig(name(w.colour), w.room);
    case 'connectorFailed': return t.warnConnectorFailed(name(w.colour));
    case 'connectorThrough': return t.warnConnectorThrough(name(w.colour), w.onBody);
    case 'notClosed': return t.warnNotClosed;
  }
}

function resultName(i: number) {
  const r = state.result!;
  if (i === 0) return `${t.bodyName} (${colourLabel(r.bodyIndex)})`;
  const p = r.parts[i - 1];
  return `${colourLabel(p.colour)} · ${p.cutOff ? t.cutOff : t.inlay}`;
}

function renderResult() {
  const r = state.result;
  $('resultPanel').hidden = !r;
  $('hint').hidden = !!r;
  document.querySelectorAll<HTMLElement>('.page[data-page=split] > section:not(#resultPanel)').forEach((s) => (s.hidden = !!r));
  if (!r) return;
  $('resultSummary').textContent = t.splitDone(r.parts.length, r.bodyIndex + 1);
  const list = $('resultList');
  list.innerHTML = '';
  for (let i = 0; i <= r.parts.length; i++) {
    const row = document.createElement('label');
    row.className = 'result-row';
    const box = document.createElement('input');
    box.type = 'checkbox';
    box.checked = state.resultVisible[i] !== false;
    box.onchange = () => {
      state.resultVisible[i] = box.checked;
      viewer.layoutResult(settings.explode, state.resultVisible);
    };
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.style.background = state.palette[i === 0 ? r.bodyIndex : r.parts[i - 1].colour].hex;
    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = resultName(i);
    row.append(box, chip, name);
    list.append(row);
  }
  ($('explodeRange') as HTMLInputElement).value = String(settings.explode);
  $('explodeOut').textContent = `${settings.explode} mm`;
  const warn = $('warnings');
  warn.innerHTML = '';
  for (const w of r.warnings) {
    const p = document.createElement('p');
    p.textContent = warningText(w);
    warn.append(p);
  }
  document.querySelectorAll<HTMLButtonElement>('#partsFormat button').forEach((b) => b.classList.toggle('active', b.dataset.format === settings.partsFormat));
}

const safe = (s: string) => s.replace(/[^A-Za-z0-9_-]+/g, '_').replace(/^_+|_+$/g, '') || 'part';

function exportParts() {
  const r = state.result;
  if (!r) return;
  const base = baseName();
  const files: Record<string, Uint8Array> = {};
  const as3mf = settings.partsFormat === '3mf';
  const add = (name: string, positions: Float32Array, index: Uint32Array, faceColor: Uint8Array) => {
    if (as3mf) {
      const { filaments, faceColour } = filamentsFor(faceColor);
      files[`${name}.3mf`] = write3mf(positions, index, faceColour, filaments, name);
    } else files[`${name}.stl`] = writeStl(positions, index, undefined, name);
  };
  add(`${base}_body_${safe(state.palette[r.bodyIndex].name)}`, r.body.positions, r.body.index, r.body.faceColor);
  r.parts.forEach((p, i) => {
    const name = `${base}_part${i + 1}_${p.colour + 1}_${safe(state.palette[p.colour].name)}`;
    add(name, p.mesh.positions, p.mesh.index, new Uint8Array(p.mesh.index.length / 3).fill(p.colour));
  });
  download(zipSync(files, { level: 6 }), `${base}_parts.zip`, 'application/zip');
  toast(`${t.exported}: ${base}_parts.zip`);
}

// --- model: scale, add another model ----------------------------------------

function applyScale(factor: number) {
  const m = state.mesh;
  if (!m || !(factor > 0) || factor === 1) return;
  load(scaleMesh(m, factor), null, state.fileName, true);
  ($('scaleInput') as HTMLInputElement).value = '1';
  viewer.frame();
}

function addModel(mesh: PaintMesh, palette: Colour[] | null, name: string, names: string[]) {
  const cur = state.mesh!;
  // its colours join the palette (same colour = same entry); an uncoloured model gets a new colour
  let map: number[];
  if (palette && palette.length) {
    map = palette.map((c) => {
      const same = state.palette.findIndex((p) => p.hex.toUpperCase() === c.hex.toUpperCase());
      if (same >= 0) return same;
      if (state.palette.length >= MAX_COLOURS) return 0;
      state.palette.push(c);
      return state.palette.length - 1;
    });
  } else {
    if (state.palette.length < MAX_COLOURS) {
      const used = new Set(state.palette.map((c) => c.hex));
      const pick = FILAMENTS[0].colours.find((c) => !used.has(c.hex)) ?? { name: t.colour, hex: '#808080' };
      state.palette.push(mk(pick.hex, pick.name));
    }
    map = [state.palette.length - 1];
  }
  const offset = state.objects.length;
  for (let i = 0; i < Math.max(names.length, 1); i++) state.objects.push({ name: names[i] ?? name, visible: true });
  const joined = joinMeshes(cur, mesh, (c) => map[c] ?? map[0], offset);
  load(joined, null, state.fileName || name, true);
  viewer.frame();
  toast(`+ ${name}`);
}

// --- outliner: show, hide and delete models ---------------------------------

let objectFaces = new Uint32Array(0);
let visibleCache: { mesh: PaintMesh; sub: PaintMesh } | null = null;
let hiddenFaces: Uint8Array | null = null;

/** The mesh without hidden models (what Split and Export work on). */
function visibleMesh(): PaintMesh | null {
  const m = state.mesh;
  if (!m || !hiddenFaces) return m;
  if (visibleCache?.mesh !== m) {
    const h = hiddenFaces;
    visibleCache = { mesh: m, sub: subsetMesh(m, (f) => !h[f]) };
  }
  return visibleCache.sub;
}

function applyHidden() {
  const m = state.mesh;
  visibleCache = null;
  hiddenFaces = null;
  if (m && state.objects.some((o) => !o.visible)) {
    const vis = state.objects.map((o) => o.visible);
    hiddenFaces = new Uint8Array(m.faceCount);
    for (let f = 0; f < m.faceCount; f++) if (!vis[m.faceObject[f]]) hiddenFaces[f] = 1;
  }
  viewer.setHidden(hiddenFaces);
  invalidatePreview();
  viewer.showRing(null, 0);
  renderOutliner();
}

function setVisible(i: number, visible: boolean) {
  state.objects[i].visible = visible;
  applyHidden();
  renderSplit();
  renderSlots();
  schedulePreview(0);
}

const EYE = '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const EYE_OFF = '<svg viewBox="0 0 24 24"><path d="M3 3l18 18M10.6 5.1A10 10 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.6 9.6 0 0 0 5.4-1.6M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>';
const TRASH = '<svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>';

function renderOutliner() {
  const box = $('outliner');
  const m = state.mesh;
  box.hidden = !m;
  if (!m) return;
  const present = state.objects.map((o, i) => ({ ...o, i, faces: objectFaces[i] ?? 0 })).filter((o) => o.faces > 0);
  $('outlinerCount').textContent = String(present.length);
  const list = $('outlinerList');
  list.innerHTML = '';
  for (const o of present) {
    const row = document.createElement('div');
    row.className = 'ol-row' + (o.visible ? '' : ' off');
    const eye = document.createElement('button');
    eye.className = 'icon-btn';
    eye.title = o.visible ? t.hideModel : t.showModel;
    eye.innerHTML = o.visible ? EYE : EYE_OFF;
    eye.onclick = () => setVisible(o.i, !o.visible);
    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = o.name;
    name.title = o.name;
    const count = document.createElement('span');
    count.className = 'count';
    count.textContent = o.faces >= 1000 ? `${(o.faces / 1000).toFixed(o.faces >= 100000 ? 0 : 1)}k` : String(o.faces);
    const del = document.createElement('button');
    del.className = 'icon-btn danger';
    del.title = t.deleteModel;
    del.innerHTML = TRASH;
    del.disabled = present.length < 2;
    del.onclick = () => deleteObject(o.i);
    row.append(eye, name, count, del);
    list.append(row);
  }
  const anyHidden = present.some((o) => !o.visible);
  $('showAllBtn').hidden = !anyHidden;
  $('hiddenNote').hidden = !anyHidden;
}

const INFO_PAGES = {
  about: () => [t.footerAbout, t.pageAbout],
  privacy: () => [t.footerPrivacy, t.pagePrivacy],
  terms: () => [t.footerTerms, t.pageTerms],
  licences: () => [t.footerLicences, t.pageLicences],
} as const;

/** The footer's About / Privacy / Terms / Licences pages, shown in a dialog. */
function showInfo(page: keyof typeof INFO_PAGES) {
  const [title, paras] = INFO_PAGES[page]() as [string, readonly string[]];
  $('infoTitle').textContent = title;
  $('infoBody').replaceChildren(...paras.map((text) => Object.assign(document.createElement('p'), { textContent: text })));
  ($('infoDlg') as HTMLDialogElement).showModal();
}
$('footerYear').textContent = String(Math.max(2026, new Date().getFullYear()));
document.querySelectorAll<HTMLElement>('[data-info]').forEach((b) =>
  b.addEventListener('click', () => showInfo(b.dataset.info as keyof typeof INFO_PAGES)),
);

function confirmBox(title: string, text: string): Promise<boolean> {
  const dlg = $('confirmDlg') as HTMLDialogElement;
  $('confirmTitle').textContent = title;
  $('confirmText').textContent = text;
  return new Promise((resolve) => {
    dlg.onclose = () => resolve(dlg.returnValue === 'ok');
    dlg.returnValue = '';
    dlg.showModal();
    ($('confirmOk') as HTMLButtonElement).focus();
  });
}

async function deleteObject(i: number) {
  const m = state.mesh;
  const o = state.objects[i];
  if (!m || !o) return;
  if (!(await confirmBox(t.confirmDelete(o.name), t.confirmDeleteNote))) return;
  showLoading(t.preparing);
  await nextFrame();
  try {
    const kept = subsetMesh(m, (f) => m.faceObject[f] !== i);
    for (let f = 0; f < kept.faceCount; f++) if (kept.faceObject[f] > i) kept.faceObject[f]--;
    state.objects.splice(i, 1);
    load(kept, null, state.fileName, true);
    toast(t.deleted(o.name));
  } finally {
    showLoading(null);
  }
}

function renderSlots() {
  const list = $('slotList');
  list.innerHTML = '';
  const m = visibleMesh();
  if (!m) return;
  const used = new Set<number>(m.faceColor);
  const { filaments, map } = buildFilaments(state.palette, used, settings.mergeSame, settings.colourTolerance);
  state.palette.forEach((c, i) => {
    if (!used.has(i)) return;
    const row = document.createElement('div');
    row.className = 'slot-row';
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.style.background = c.hex;
    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = `${colourLabel(i)} → F${filaments[map[i]].filament}`;
    const sel = document.createElement('select');
    sel.title = t.slot;
    sel.append(new Option(t.slotAuto, '0'));
    for (let k = 1; k <= MAX_FILAMENTS; k++) sel.append(new Option(`${t.slot} ${k}`, String(k)));
    sel.value = String(c.slot);
    sel.onchange = () => {
      c.slot = +sel.value;
      renderSlots();
    };
    row.append(chip, name, sel);
    list.append(row);
  });
  ($('mergeSame') as HTMLInputElement).checked = settings.mergeSame;
  ($('colTolRange') as HTMLInputElement).value = String(settings.colourTolerance);
  $('colTolOut').textContent = String(+settings.colourTolerance.toFixed(3));
  $('optColTol').hidden = !settings.mergeSame;
  const top = Math.max(0, ...filaments.map((f) => f.filament));
  const warn = $('filamentWarn');
  warn.hidden = top <= MAX_FILAMENTS;
  warn.textContent = t.tooManyFilaments(top);
}

function bindPanels() {
  $('outlinerToggle').onclick = () => $('outliner').classList.toggle('collapsed');
  $('showAllBtn').onclick = () => {
    state.objects.forEach((o) => (o.visible = true));
    applyHidden();
    renderSplit();
    renderSlots();
    schedulePreview(0);
  };
  document.querySelectorAll<HTMLButtonElement>('#tabs button').forEach((b) => (b.onclick = () => setPage(b.dataset.page as typeof state.page)));
  document.querySelectorAll<HTMLButtonElement>('#presets button').forEach((b) => {
    b.onclick = () => {
      settings.preset = b.dataset.preset!;
      const p = PRESETS[settings.preset as keyof typeof PRESETS];
      if (p) {
        settings.tolerance = p.tolerance;
        settings.depth = p.depth;
      }
      saveSettings();
      renderSplit();
      schedulePreview(0);
    };
  });
  const numInput = (id: string, key: 'tolerance' | 'depth' | 'minThickness' | 'cutOffGap') => {
    const el = $(id) as HTMLInputElement;
    el.oninput = () => {
      if (el.value === '' || !(+el.value >= 0)) return;
      settings[key] = +el.value;
      if (key === 'tolerance' || key === 'depth') {
        const match = Object.entries(PRESETS).find(([, p]) => p.tolerance === settings.tolerance && p.depth === settings.depth);
        settings.preset = match ? match[0] : 'custom';
      }
      saveSettings();
      renderSplit();
      schedulePreview(400);
    };
  };
  numInput('tolInput', 'tolerance');
  numInput('depthInput', 'depth');
  numInput('minThickInput', 'minThickness');
  numInput('gapInput', 'cutOffGap');
  for (const [id, key] of [['connSize', 'connSize'], ['connLength', 'connLength'], ['connTol', 'connTol'], ['connChamfer', 'connChamfer'], ['connAngle', 'connChamferAngle']] as const) {
    const el = $(id) as HTMLInputElement;
    el.oninput = () => {
      if (el.value === '' || !(+el.value >= 0)) return;
      settings[key] = +el.value;
      saveSettings();
      schedulePreview(400);
    };
  }
  $('connOn').onchange = (e) => {
    settings.connOn = (e.target as HTMLInputElement).checked;
    saveSettings();
    renderSplit();
    schedulePreview(0);
  };
  document.querySelectorAll<HTMLButtonElement>('#connPlace button').forEach((b) => {
    b.onclick = () => {
      settings.connPlace = b.dataset.place!;
      saveSettings();
      if (settings.connPlace === 'manual' && !state.previewOn && state.mesh) togglePreview(true);
      renderSplit();
      schedulePreview(0);
    };
  });
  $('clearPegs').onclick = () => {
    state.connPoints = [];
    renderSplit();
    schedulePreview(0);
  };
  document.querySelectorAll<HTMLButtonElement>('#pegOn button').forEach((b) => {
    b.onclick = () => {
      settings.connPegOn = b.dataset.peg!;
      saveSettings();
      renderSplit();
      schedulePreview(0);
    };
  });
  $('flatBottom').onchange = (e) => {
    settings.flatBottom = (e.target as HTMLInputElement).checked;
    saveSettings();
    schedulePreview(0);
  };
  document.querySelectorAll<HTMLButtonElement>('#uncut button').forEach((b) => {
    b.onclick = () => {
      settings.keepUncut = b.dataset.keep === '1';
      saveSettings();
      renderSplit();
    };
  });
  const bodySel = $('bodySelect') as HTMLSelectElement;
  bodySel.onchange = () => {
    state.bodyChoice = +bodySel.value;
    renderSplit();
    schedulePreview(0);
  };
  $('previewBtn').onclick = () => togglePreview();
  $('splitBtn').onclick = runSplit;
  $('backBtn').onclick = () => {
    clearResult();
    setPage('paint');
  };
  $('explodeRange').oninput = (e) => {
    settings.explode = +(e.target as HTMLInputElement).value;
    $('explodeOut').textContent = `${settings.explode} mm`;
    viewer.layoutResult(settings.explode, state.resultVisible);
    saveSettings();
  };
  document.querySelectorAll<HTMLButtonElement>('#partsFormat button').forEach((b) => {
    b.onclick = () => {
      settings.partsFormat = b.dataset.format!;
      saveSettings();
      renderResult();
    };
  });
  $('exportPartsBtn').onclick = exportParts;

  $('scaleBtn').onclick = () => applyScale(+($('scaleInput') as HTMLInputElement).value);
  document.querySelectorAll<HTMLButtonElement>('#scalePresets button').forEach((b) => (b.onclick = () => applyScale(+b.dataset.scale!)));
  const addInput = $('addInput') as HTMLInputElement;
  $('addModelBtn').onclick = () => (state.mesh ? addInput.click() : $('fileInput').click());
  addInput.onchange = () => {
    if (addInput.files?.length) openFiles(Array.from(addInput.files), true);
    addInput.value = '';
  };
  $('mergeSame').onchange = (e) => {
    settings.mergeSame = (e.target as HTMLInputElement).checked;
    saveSettings();
    renderSlots();
  };
  $('colTolRange').oninput = (e) => {
    settings.colourTolerance = +(e.target as HTMLInputElement).value;
    saveSettings();
    renderSlots();
  };
  document.querySelectorAll<HTMLButtonElement>('[data-export]').forEach((b) => {
    const fn = { '3mf': export3mf, stl: exportStl, obj: exportObj }[b.dataset.export!];
    b.onclick = () => (state.mesh ? fn?.() : undefined);
  });
}

function toggleSym(axis: number) {
  settings.sym[axis] = !settings.sym[axis];
  invalidatePreview();
  syncOptions();
}

applyStatic();
renderShortcuts();
renderLibrary();
bindUi();
syncOptions();
setTool('brush');
renderPalette();
