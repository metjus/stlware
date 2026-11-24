# STLware desktop

The native STLware app (C++ 20, Qt 6). Windows first; the code is kept portable for macOS and Linux.

```
desktop/
  src/core/     file formats and geometry, no UI (ported from ../src/core, same results)
  src/app/      window, 3D view (OpenGL 3.3), updates
  updater/      stlware-updater: swaps in the changed files after the app has closed
  tests/        core tests (ctest)
  installer/    Inno Setup script (per-user install, no admin rights)
  tools/        make_manifest.py: the update manifest of a release
  VERSION       the desktop version; raise it to publish an update
  NOTES.md      what the next release brings (shown in the release)
```

## Build

```
cmake -S desktop -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
cmake --build build
ctest --test-dir build
```

Needs Qt 6.4+ (Windows releases use Qt 6.8 LTS with MSVC 2022).

## Releases and updates

`.github/workflows/desktop.yml` builds every pull request (the Windows installer is attached to the run).
When a change to `desktop/` reaches `main` with a new `VERSION`, it publishes the GitHub release
`desktop-v<VERSION>` with:

- `STLware-Setup.exe`, for the first install (`releases/latest/download/STLware-Setup.exe`)
- `desktop-manifest.json`, every file of the app with its SHA-256
- one asset per file, named by its SHA-256

The installed app checks the manifest a few seconds after start (and from Help → Check for updates),
downloads only the files whose hash differs from the installed ones, and `stlware-updater` replaces
them after the app closes, putting the old files back if anything fails.
