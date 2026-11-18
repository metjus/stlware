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
- **Straight cut** (main way to split a model too big for the printer): a cutting plane you
  drag (move along its normal, or turn it), set by X / Y / Z / view, position slider and
  tilt / turn angles, or move by double-clicking the model. Every separate section where the
  plane meets the model can be cut or left whole (click it in the view or the list), so a
  cut can take off just one finger. Pieces become objects in the Models list, keep their
  paint (the cut face takes the colour around it), undo takes the cut back, and **Export
  pieces** saves each as STL or 3MF in a ZIP.
  Optional **connectors** on the cut: a square peg on the lower (or upper) piece and its
  socket in the other, one in the middle of each cut section or placed by clicking, with a
  see-through preview (red when the section has no room for it).
- **Split parts** (beta, for printing each colour separately, e.g. resin): per colour **Inlay**
  (part in a pocket, `tolerance` gap, `depth` deep, flat bottom via Manifold booleans or a
  surface-following bottom without booleans) or **Cut Off** (cut away whole along its edge,
  both closed with the same cap, **min thickness** and **Cut Off gap**), with optional
  **connectors**: a square peg on one side of the cut and a socket on the other (size, length,
  socket tolerance, chamfer round the top face, peg on body or part; one at the centre of each
  cut, or placed by hand: the peg follows the cursor over the cut and a click puts it there). Resin / FDM presets,
  body colour (auto = largest area), keep uncut colours painted or body colour, live preview
  with depth report (red where a part would go through), spread-apart view, export every
  part as STL or 3MF in a ZIP.
- **Model**: scale (×0.1, ×10, inch → mm, m → mm), add more models into one scene.
- **Models outliner**: every object of a 3MF / OBJ (and every added model) is listed; hide it
  (hidden models are not painted, split or exported) or delete it after a confirmation.
- Fast on dense sculpts (BVH picking, typed arrays; 1M+ triangles).

## Develop
```
npm install
npm run dev      # http://localhost:5173
npm test         # unit tests (mesh, painting, STL/OBJ/3MF, split, filaments)
npm run build    # static site in dist/
```

## Layout and deploy
- `app/index.html` is the page source, `src/` the code, `public/` static files.
- The repository root holds the **built site** (`index.html`, `assets/`, `favicon.svg`,
  `.htaccess`). The hosting (hostcreators) has a Git app on stlware.com that serves the
  repository as is, so the root must always be a ready-to-serve build; `.htaccess` hides the
  sources next to it.
- `.github/workflows/deploy.yml` tests and builds every push; on `main` it commits the fresh
  build to the root (`Build site [skip ci]`) and also publishes it to the `deploy` branch.
  Locally: `npm run build && cp -r dist/. .`

## Credits

The sample model is [#3DBenchy](https://www.3dbenchy.com/) by Creative Tools, licensed
[CC BY-ND 4.0](https://creativecommons.org/licenses/by-nd/4.0/), shipped unmodified (gzip-compressed)
in `public/samples/`.
