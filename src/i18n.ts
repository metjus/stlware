/** UI texts. English and Slovak; add a language by adding a dictionary. */
const en = {
  tagline: 'Paint 3D models for multicolour printing',
  open: 'Open model',
  export: 'Export',
  export3mf: '3MF for Bambu Studio',
  export3mfHint: 'Painted, one filament per colour',
  exportStl: 'STL (geometry only)',
  exportStlHint: 'Without colours, for any slicer',
  undo: 'Undo (Ctrl+Z)',
  redo: 'Redo (Ctrl+Shift+Z)',
  tools: 'Tools',
  brush: 'Brush',
  eraser: 'Eraser',
  fill: 'Fill',
  smooth: 'Smooth',
  navigate: 'Navigate',
  diameter: 'Diameter',
  strength: 'Strength',
  angle: 'Fill angle',
  stopAtColour: 'Stop at colour change',
  symmetry: 'Symmetry',
  palette: 'Palette',
  addColour: 'Add colour',
  deleteColour: 'Delete colour',
  baseColour: 'Base colour (unpainted areas)',
  colourName: 'Name',
  hex: 'HEX',
  library: 'Filament colours',
  libraryHint: 'Click a colour to use it for the selected palette slot.',
  gaps: 'Fill gaps',
  gapsHint: 'Fills small unpainted spots that Fill leaves in deep creases with the selected colour.',
  maxGap: 'Max gap',
  anyColour: 'Also small areas of other colours',
  fillGaps: 'Fill gaps',
  gapsDone: (n: number) => (n ? `Filled ${n} gap${n === 1 ? '' : 's'}` : 'No gaps found'),
  dropTitle: 'Drop a model here',
  dropText: 'STL, 3MF (Bambu Studio, PrusaSlicer) or OBJ + MTL. Your file stays on your device; nothing is uploaded.',
  sample: 'Try a sample',
  loading: 'Loading model…',
  preparing: 'Preparing…',
  triangles: 'triangles',
  hintBrush: 'Drag to paint · Shift + drag erases · Right drag / Alt + drag: rotate · Wheel: zoom · [ ] size',
  hintFill: 'Click to fill the highlighted area · [ ] angle · Right drag: rotate · Wheel: zoom',
  hintSmooth: 'Drag along a ragged colour edge to even it out · [ ] size',
  hintNavigate: 'Drag: rotate · Right drag: pan · Wheel: zoom',
  shortcuts: 'Shortcuts',
  shortcutList: [
    ['B / E / F / S / V', 'Brush, Eraser, Fill, Smooth, Navigate'],
    ['1 – 9', 'Pick colour'],
    ['[ ]', 'Brush size or fill angle'],
    ['X / Y / Z', 'Toggle symmetry'],
    ['Ctrl+Z / Ctrl+Shift+Z', 'Undo / redo'],
    ['Home', 'Frame the model'],
  ],
  errorRead: 'Could not read this file',
  tooManyColours: 'The file has more than 16 colours; extra colours were merged into the closest ones.',
  importedFrom: (src: string, n: number) => `Imported from ${src} (${n} object${n === 1 ? '' : 's'})`,
  exported: 'Exported',
  colour: 'Colour',
  privacy: 'Runs entirely in your browser',
};

type Dict = typeof en;

const sk: Dict = {
  tagline: 'Maľovanie 3D modelov pre viacfarebnú tlač',
  open: 'Otvoriť model',
  export: 'Export',
  export3mf: '3MF pre Bambu Studio',
  export3mfHint: 'Vymaľovaný, jeden filament na farbu',
  exportStl: 'STL (iba geometria)',
  exportStlHint: 'Bez farieb, pre akýkoľvek slicer',
  undo: 'Späť (Ctrl+Z)',
  redo: 'Znova (Ctrl+Shift+Z)',
  tools: 'Nástroje',
  brush: 'Štetec',
  eraser: 'Guma',
  fill: 'Vedro',
  smooth: 'Vyhladiť',
  navigate: 'Navigácia',
  diameter: 'Priemer',
  strength: 'Sila',
  angle: 'Uhol vedra',
  stopAtColour: 'Zastaviť na zmene farby',
  symmetry: 'Symetria',
  palette: 'Paleta',
  addColour: 'Pridať farbu',
  deleteColour: 'Zmazať farbu',
  baseColour: 'Základná farba (nevymaľované miesta)',
  colourName: 'Názov',
  hex: 'HEX',
  library: 'Farby filamentov',
  libraryHint: 'Kliknutím použiješ farbu pre vybraný slot palety.',
  gaps: 'Vyplniť medzery',
  gapsHint: 'Malé nevymaľované miesta, ktoré vedro nechá v hlbokých záhyboch, vyplní vybranou farbou.',
  maxGap: 'Max. medzera',
  anyColour: 'Aj malé plochy iných farieb',
  fillGaps: 'Vyplniť medzery',
  gapsDone: (n: number) => (n ? `Vyplnené medzery: ${n}` : 'Žiadne medzery'),
  dropTitle: 'Pusti sem model',
  dropText: 'STL, 3MF (Bambu Studio, PrusaSlicer) alebo OBJ + MTL. Súbor zostáva v tvojom zariadení, nič sa nenahráva.',
  sample: 'Vyskúšať ukážku',
  loading: 'Načítavam model…',
  preparing: 'Pripravujem…',
  triangles: 'trojuholníkov',
  hintBrush: 'Ťahaj na maľovanie · Shift + ťah gumuje · Pravé tlačidlo / Alt + ťah: otáčanie · Koliesko: zoom · [ ] veľkosť',
  hintFill: 'Klikni na vyplnenie zvýraznenej plochy · [ ] uhol · Pravé tlačidlo: otáčanie · Koliesko: zoom',
  hintSmooth: 'Ťahaj po zubatom okraji farby, vyrovná sa · [ ] veľkosť',
  hintNavigate: 'Ťah: otáčanie · Pravé tlačidlo: posun · Koliesko: zoom',
  shortcuts: 'Skratky',
  shortcutList: [
    ['B / E / F / S / V', 'Štetec, Guma, Vedro, Vyhladiť, Navigácia'],
    ['1 – 9', 'Výber farby'],
    ['[ ]', 'Veľkosť štetca alebo uhol vedra'],
    ['X / Y / Z', 'Zapnúť/vypnúť symetriu'],
    ['Ctrl+Z / Ctrl+Shift+Z', 'Späť / znova'],
    ['Home', 'Zobraziť celý model'],
  ],
  errorRead: 'Tento súbor sa nepodarilo načítať',
  tooManyColours: 'Súbor má viac ako 16 farieb, ďalšie farby sa zlúčili s najbližšími.',
  importedFrom: (src: string, n: number) => `Importované z ${src} (objekty: ${n})`,
  exported: 'Exportované',
  colour: 'Farba',
  privacy: 'Beží celé v tvojom prehliadači',
};

const dicts = { en, sk } as const;
export type Lang = keyof typeof dicts;
export const LANGS: Lang[] = ['en', 'sk'];

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('stlware.lang');
    if (saved === 'en' || saved === 'sk') return saved;
  } catch {
    /* storage blocked */
  }
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('sk') || nav.startsWith('cs') ? 'sk' : 'en';
}

let lang: Lang = initialLang();
export let t: Dict = dicts[lang];

export function getLang() {
  return lang;
}

export function setLang(l: Lang) {
  lang = l;
  t = dicts[l];
  try {
    localStorage.setItem('stlware.lang', l);
  } catch {
    /* ignore */
  }
  document.documentElement.lang = l;
  applyStatic();
}

/** Fill every [data-i18n] element's text and [data-i18n-title] title. */
export function applyStatic() {
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const v = (t as Record<string, unknown>)[el.dataset.i18n!];
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach((el) => {
    const v = (t as Record<string, unknown>)[el.dataset.i18nTitle!];
    if (typeof v === 'string') el.title = v;
  });
}
