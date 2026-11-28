/**
 * Landing page (stlware.com/), English only: drop zone that hands the model to the editor,
 * and the optional blocks from site-config.ts. Kept small on purpose: no three.js here.
 */
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import './landing.css';
import { COUNTER_MIN } from './site-config';
import { putHandoff } from './handoff';

declare const __APP_VERSION__: string;

const $ = (id: string) => document.getElementById(id)!;

/* ---------- drop zone: open the model in the editor ---------- */
const drop = $('drop');
const input = $('fileInput') as HTMLInputElement;

async function openInEditor(list: FileList | null | undefined) {
  const files = Array.from(list ?? []).filter((f) => /\.(stl|3mf|obj|mtl)$/i.test(f.name));
  if (!files.some((f) => /\.(stl|3mf|obj)$/i.test(f.name))) {
    $('dropBig').textContent = 'That is not an STL, 3MF or OBJ file';
    return;
  }
  $('dropBig').textContent = 'Opening the editor…';
  try {
    await putHandoff(files);
    location.href = 'editor?open=drop';
  } catch {
    // IndexedDB unavailable (rare private modes): open the editor, where the file can be chosen again.
    location.href = 'editor';
  }
}

['dragenter', 'dragover'].forEach((type) => drop.addEventListener(type, (e) => { e.preventDefault(); drop.classList.add('over'); }));
['dragleave', 'drop'].forEach((type) => drop.addEventListener(type, (e) => { e.preventDefault(); drop.classList.remove('over'); }));
drop.addEventListener('drop', (e) => openInEditor((e as DragEvent).dataTransfer?.files));
drop.addEventListener('click', () => input.click());
drop.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
input.addEventListener('change', () => { openInEditor(input.files); input.value = ''; });
// A file dropped anywhere else on the page should not replace the page with the file.
window.addEventListener('dragover', (e) => e.preventDefault());
window.addEventListener('drop', (e) => { if (!drop.contains(e.target as Node)) e.preventDefault(); });

/* ---------- export counter (only from COUNTER_MIN on) ---------- */
let exports = 0;
function renderCounter() {
  const el = $('counter');
  el.hidden = exports < COUNTER_MIN;
  if (el.hidden) return;
  el.innerHTML = `<b>${exports.toLocaleString('en-US')}</b> models exported with STLware`;
}
fetch('/api/count.php', { cache: 'no-store' })
  .then((r) => (r.ok ? r.json() : null))
  .then((d) => { exports = Number(d?.exports) || 0; renderCounter(); })
  .catch(() => {});

$('version').textContent = `v${__APP_VERSION__}`;
renderCounter();
