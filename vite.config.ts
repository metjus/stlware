import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';

const here = (p: string) => fileURLToPath(new URL(p, import.meta.url));

// The page source lives in app/ so that the repository root can hold the built site
// (index.html + assets/), which the hosting's Git app serves straight from `main`.
// Dev server: /src/... is served from the repository's src/ (outside the app/ root).
const srcOutsideRoot = {
  name: 'src-outside-root',
  configureServer(server: { middlewares: { use(fn: (req: { url?: string }, res: unknown, next: () => void) => void): void } }) {
    server.middlewares.use((req, _res, next) => {
      if (req.url?.startsWith('/src/')) req.url = '/@fs' + here('.' + req.url.split('?')[0]) + (req.url.includes('?') ? '?' + req.url.split('?')[1] : '');
      next();
    });
  },
  resolveId(id: string) {
    return id.startsWith('/src/') ? here('.' + id) : null;
  },
};

export default defineConfig({
  plugins: [srcOutsideRoot],
  root: here('./app'),
  publicDir: here('./public'),
  base: './',
  // Build time, shown in the About dialog so it is easy to tell which version a browser has.
  // App version (package.json), shown in the footer: raise it with every change that goes live.
  define: {
    __APP_VERSION__: JSON.stringify(JSON.parse(readFileSync(here('./package.json'), 'utf8')).version),
    __BUILD_TIME__: JSON.stringify(new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC'),
  },
  build: { outDir: here('./dist'), emptyOutDir: true, target: 'es2022', chunkSizeWarningLimit: 1200 },
  test: { root: here('.'), environment: 'happy-dom' },
} as never);
