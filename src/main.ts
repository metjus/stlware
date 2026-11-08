import './style.css';
import * as THREE from 'three';
import { PaintMesh, type Soup } from './core/mesh';
import { PaintSession } from './core/paint';
import { readStl, writeStl } from './core/stl';
import { readObj, parseMtl } from './core/obj';
import { read3mf, write3mf, type ExportColour } from './core/threemf';
import { FILAMENTS } from './core/filaments';
import { Viewer, MAX_COLOURS, type Hit } from './viewer';
import { t, applyStatic, setLang, getLang, type Lang } from './i18n';

type Tool = 'brush' | 'eraser' | 'fill' | 'smooth' | 'navigate';

interface Colour {
  hex: string;
  name: string;
}

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

const settings = loadSettings();
const state = {
  tool: 'brush' as Tool,
  active: 1,
  palette: [{ hex: "#D1D3D5", name: "Light Gray" }, { hex: "#C12E1F", name: "Red" }] as Colour[],
  mesh: null as PaintMesh | null,
  session: null as PaintSession | null,
  fileName: '',
};

function loadSettings() {
  const defaults = { size: 4, strength: 3, angle: 30, stopColour: true, sym: [false, false, false], gap: 10, gapAny: false };
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
  { hex: '#D1D3D5', name: 'Light Gray' },
  { hex: '#C12E1F', name: 'Red' },
  { hex: '#FFFFFF', name: 'Jade White' },
  { hex: '#000000', name: 'Black' },
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

async function openFiles(files: File[]) {
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
      palette = obj.palette.map((hex, i) => ({ hex, name: colourName(hex, obj.names[i]) }));
    } else {
      const imp = read3mf(new Uint8Array(buf));
      soup = imp;
      palette = imp.palette.map((hex, i) => ({ hex, name: colourName(hex, imp.names[i]) }));
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
    load(PaintMesh.fromSoup(soup), palette, model.name);
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

function load(mesh: PaintMesh, palette: Colour[] | null, name: string) {
  state.mesh = mesh;
  state.session = new PaintSession(mesh);
  state.session.onChange = (faces) => {
    viewer.updateFaces(faces);
    updateUndo();
  };
  state.fileName = name;
  state.palette = palette && palette.length ? palette : DEFAULT_PALETTE.map((c) => ({ ...c }));
  if (state.palette.length < 2) state.palette.push({ ...DEFAULT_PALETTE[1] });
  state.active = Math.min(1, state.palette.length - 1);
  viewer.setPalette(state.palette.map((c) => c.hex));
  viewer.setMesh(mesh);
  $('empty').hidden = true;
  $('fileName').textContent = name;
  $('triCount').textContent = `${mesh.faceCount.toLocaleString()} ${t.triangles}`;
  ($('exportBtn') as HTMLButtonElement).disabled = false;
  renderPalette();
  updateUndo();
  if (state.tool === 'navigate' && !matchMedia('(pointer: coarse)').matches) setTool('brush');
}

function sampleModel() {
  const geo = new THREE.TorusKnotGeometry(22, 7, 360, 48, 2, 3).toNonIndexed();
  geo.rotateX(Math.PI / 2);
  const positions = new Float32Array(geo.getAttribute('position').array);
  load(PaintMesh.fromSoup({ positions }), null, 'sample-knot.stl');
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
  const opts = { sameColour: settings.stopColour, maxAngle: settings.angle >= 180 ? null : settings.angle };
  const key = `${settings.angle}|${settings.stopColour}|${settings.sym.join()}`;
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
function hover(e: PointerEvent) {
  if (!state.mesh || state.tool === 'navigate' || e.buttons) {
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
    if (!state.session || state.tool === 'navigate' || e.button !== 0 || e.altKey || e.pointerType === 'touch' && !e.isPrimary) return;
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
  $('hint').textContent = state.mesh ? map[state.tool] : '';
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
  $('angleOut').textContent = settings.angle >= 180 ? '∞' : `${settings.angle}°`;
  ($('stopColour') as HTMLInputElement).checked = settings.stopColour;
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
  state.palette.push({ hex: pick.hex, name: pick.name });
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
}

function deleteColour() {
  const i = state.active;
  if (i === 0 || !state.session) return;
  state.palette.splice(i, 1);
  state.session.removeColour(i);
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

function export3mf() {
  const m = state.mesh;
  if (!m) return;
  // used colours only, identical colours sharing one filament
  const used = new Set<number>(m.faceColor);
  const colours: ExportColour[] = [];
  const byHex = new Map<string, number>();
  const remap = new Uint8Array(MAX_COLOURS);
  state.palette.forEach((c, i) => {
    if (!used.has(i)) return;
    const hex = c.hex.toUpperCase();
    let k = byHex.get(hex);
    if (k === undefined) {
      k = colours.length;
      byHex.set(hex, k);
      colours.push({ hex, filament: k + 1 });
    }
    remap[i] = k;
  });
  const faceColour = m.faceColor.map((c) => remap[c]);
  const data = write3mf(m.positions, m.index, faceColour, colours, baseName());
  download(data, `${baseName()}_painted.3mf`, 'model/3mf');
  toast(`${t.exported}: ${baseName()}_painted.3mf`);
}

function exportStl() {
  const m = state.mesh;
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

  const lang = $('langSelect') as HTMLSelectElement;
  lang.value = getLang();
  lang.onchange = () => {
    setLang(lang.value as Lang);
    renderShortcuts();
    renderPalette();
    updateHint();
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
      if (state.tool === 'fill') settings.angle = Math.max(1, Math.min(180, settings.angle + dir * 5));
      else settings.size = Math.max(0.2, Math.min(60, +(settings.size * (dir > 0 ? 1.2 : 1 / 1.2)).toFixed(1)));
      invalidatePreview();
      syncOptions();
    } else if (k === 'x' || k === 'y' || k === 'z') toggleSym('xyz'.indexOf(k));
    else if (e.key === 'Home') viewer.frame();
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
