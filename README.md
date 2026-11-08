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
  `paint_color`, so Bambu Studio opens it painted, one filament per colour. STL export too.
- Fast on dense sculpts (BVH picking, typed arrays; 1M+ triangles).

## Develop
```
npm install
npm run dev      # http://localhost:5173
npm test         # unit tests (mesh, painting, STL/OBJ/3MF)
npm run build    # static site in dist/
```

## Deploy
`.github/workflows/deploy.yml` builds and tests every push; pushes to `main` are uploaded to
the hosting over FTPS when the repository secrets `FTP_SERVER`, `FTP_USERNAME`,
`FTP_PASSWORD` (and optionally `FTP_DIR`, default `public_html/`) are set.
The site is static, so any host works: upload the contents of `dist/`.

## Layout
- `src/core/` — no-DOM logic: `mesh.ts` (welding, connectivity), `paint.ts` (tools, undo),
  `stl.ts`, `obj.ts`, `threemf.ts` (reader and writer ported from the add-on), `filaments.ts`
- `src/viewer.ts` — Three.js viewport, BVH raycasting, brush ring, fill preview
- `src/main.ts` — UI; `src/i18n.ts` — English and Slovak texts
