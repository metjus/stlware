/**
 * Anonymous usage counts. Each event sends only its name ("upload" or "export") to /api/hit.php,
 * which adds 1 to today's count. No file names, no file content, no cookies, no IDs.
 */
import { ANALYTICS_ENABLED } from './site-config';

export type SiteEvent = 'upload' | 'export';

/** Absolute so it works from / and from /editor. Only on the real site, not on localhost. */
const ENDPOINT = '/api/hit.php';

export function track(event: SiteEvent): void {
  if (!ANALYTICS_ENABLED || /^(localhost|127\.|\[::1\])/.test(location.hostname)) return;
  try {
    const body = new URLSearchParams({ e: event });
    if (!navigator.sendBeacon?.(ENDPOINT, body)) fetch(ENDPOINT, { method: 'POST', body, keepalive: true }).catch(() => {});
  } catch {
    /* counting must never break the app */
  }
}
