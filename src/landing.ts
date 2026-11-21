/**
 * Landing page (stlware.com/): language switch, drop zone that hands the model to the editor,
 * and the optional blocks from site-config.ts. Kept small on purpose: no three.js here.
 */
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import './landing.css';
import { COUNTER_MIN, SHOW_DESKTOP_SIGNUP, CONTACT_EMAIL } from './site-config';
import { putHandoff } from './handoff';

declare const __APP_VERSION__: string;

const $ = (id: string) => document.getElementById(id)!;

/* ---------- EN / SK ---------- */
// English is in the HTML (for search engines); Slovak sits in data-sk. Same saved choice as the editor.
type Lang = 'en' | 'sk';
const LANG_KEY = 'stlware.lang';
const english = new Map<HTMLElement, string>();

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'en' || saved === 'sk') return saved;
  } catch { /* storage blocked */ }
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('sk') || nav.startsWith('cs') ? 'sk' : 'en';
}

function setLang(lang: Lang, save = false) {
  document.querySelectorAll<HTMLElement>('[data-sk]').forEach((el) => {
    if (!english.has(el)) english.set(el, el.innerHTML);
    el.innerHTML = lang === 'sk' ? el.dataset.sk! : english.get(el)!;
  });
  document.documentElement.lang = lang;
  $('langEn').setAttribute('aria-pressed', String(lang === 'en'));
  $('langSk').setAttribute('aria-pressed', String(lang === 'sk'));
  if (save) try { localStorage.setItem(LANG_KEY, lang); } catch { /* ignore */ }
  lang_ = lang;
  renderCounter();
}
let lang_: Lang = 'en';
$('langEn').onclick = () => setLang('en', true);
$('langSk').onclick = () => setLang('sk', true);

/* ---------- drop zone: open the model in the editor ---------- */
const drop = $('drop');
const input = $('fileInput') as HTMLInputElement;

async function openInEditor(list: FileList | null | undefined) {
  const files = Array.from(list ?? []).filter((f) => /\.(stl|3mf|obj|mtl)$/i.test(f.name));
  if (!files.some((f) => /\.(stl|3mf|obj)$/i.test(f.name))) {
    $('dropBig').textContent = lang_ === 'sk' ? 'Toto nie je STL, 3MF ani OBJ' : 'That is not an STL, 3MF or OBJ file';
    return;
  }
  $('dropBig').textContent = lang_ === 'sk' ? 'Otváram editor…' : 'Opening the editor…';
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
  const n = exports.toLocaleString(lang_ === 'sk' ? 'sk-SK' : 'en-US');
  el.innerHTML = lang_ === 'sk' ? `<b>${n}</b> modelov už exportovaných v STLware` : `<b>${n}</b> models exported with STLware`;
}
fetch('/api/count.php', { cache: 'no-store' })
  .then((r) => (r.ok ? r.json() : null))
  .then((d) => { exports = Number(d?.exports) || 0; renderCounter(); })
  .catch(() => {});

/* ---------- desktop version sign-up (off by default) ---------- */
if (SHOW_DESKTOP_SIGNUP) {
  $('desktopSlot').outerHTML = `
  <section id="desktop">
    <div class="wrap desktop">
      <div>
        <p class="label" style="margin-bottom:16px">Desktop</p>
        <h2 class="h2" data-sk="Desktopová verzia: daj mi vedieť">Desktop version: get notified</h2>
        <p class="lede" style="margin-top:16px" data-sk="Nechaj nám e-mail a napíšeme raz, keď bude hotová.">Leave your e-mail and we will write once, when it is out.</p>
      </div>
      <form action="mailto:${CONTACT_EMAIL}?subject=Desktop%20version" method="post" enctype="text/plain">
        <input type="email" name="email" required placeholder="you@example.com" aria-label="E-mail" />
        <button class="btn solid" type="submit" data-sk="Daj mi vedieť">Notify me</button>
      </form>
    </div>
  </section>`;
}

$('version').textContent = `v${__APP_VERSION__}`;
setLang(initialLang());
