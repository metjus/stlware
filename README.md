# STLware Paint

Paint 3D models in the browser and export them for multicolour printing. The web version of
the *Bambu Color Export* Blender add-on. Live at **stlware.com**.

Everything runs locally in the browser: models are never uploaded.

## Features
- Open **STL**, **3MF** (Bambu Studio and PrusaSlicer projects with filament painting,
  standard 3MF colours) and **OBJ + MTL**.
- Tools: **Brush**, **Eraser**, **Fill** (stops at edges sharper than the fill angle and,
  optionally, at colour changes, with a live preview), **Smooth** (evens out ragged colour
  edges), **Fill Gaps** (small unpainted spots left in creases), **Symmetry** X / Y / Z,
  undo / redo.
- Palette of up to 16 colours with HEX input and Bambu Lab filament colours.
- **Export 3MF for Bambu Studio**: a standard 3MF colour group plus Bambu's per-triangle
  `paint_color`, so Bambu Studio opens it painted. Filament slot per colour (auto or chosen),
  merge same colours within a colour tolerance, 16-filament check. STL and **OBJ + MTL** too.
- **Split parts** (for printing each colour separately, e.g. resin): per colour **Inlay**
  (part in a pocket, `tolerance` gap, `depth` deep, flat bottom via Manifold booleans or a
  surface-following bottom without booleans) or **Cut Off** (cut away whole along its edge,
  both closed with the same cap, **min thickness** and **Cut Off gap**). Resin / FDM presets,
  body colour (auto = largest area), keep uncut colours painted or body colour, live preview
  with depth report (red where a part would go through), spread-apart view, export every
  part as STL or 3MF in a ZIP.
- **Model**: scale (×0.1, ×10, inch → mm, m → mm), add more models into one scene.
- Fast on dense sculpts (BVH picking, typed arrays; 1M+ triangles).

## Develop
```
npm install
npm run dev      # http://localhost:5173
npm test         # unit tests (mesh, painting, STL/OBJ/3MF, split, filaments)
npm run build    # static site in dist/
```

## Deploy
`.github/workflows/deploy.yml` builds and tests every push; each push to `main` publishes the
built site (`dist/`) to the `deploy` branch. The hosting (hostcreators) has a Git app on
stlware.com that pulls the `deploy` branch with public path `/` (the site's files are at the
branch root, including `.htaccess`).
The site is static, so any host works: upload the contents of `dist/`.

## Layout
- `src/core/` — no-DOM logic: `mesh.ts` (welding, connectivity), `paint.ts` (tools, undo),
  `stl.ts`, `obj.ts`, `threemf.ts` (reader and writer ported from the add-on), `filaments.ts`
- `src/viewer.ts` — Three.js viewport, BVH raycasting, brush ring, fill preview
- `src/main.ts` — UI; `src/i18n.ts` — English and Slovak texts
