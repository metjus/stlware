<?php
/**
 * Shared storage for the anonymous counters (hit.php, count.php, stats.php).
 * Keeps one small JSON file: { "days": { "2026-11-21": { "upload": 3, "export": 1 } }, "total": { ... } }.
 * No IP addresses, no cookies, no file data: only event names and dates.
 */

const STLWARE_EVENTS = ['upload', 'export'];

/** Folder for the counts: outside the web root when the host allows it, else api/data (blocked by .htaccess). */
function stlware_data_dir(): string {
    $candidates = [dirname(__DIR__, 2) . '/stlware-data', __DIR__ . '/data'];
    foreach ($candidates as $dir) {
        if (is_dir($dir) || @mkdir($dir, 0750, true)) {
            if (is_writable($dir)) return $dir;
        }
    }
    http_response_code(500);
    exit;
}

/** Read the counts, optionally change them under an exclusive lock, and return them. */
function stlware_counts(?callable $change = null): array {
    $file = stlware_data_dir() . '/counts.json';
    $fh = fopen($file, 'c+');
    if (!$fh) { http_response_code(500); exit; }
    flock($fh, $change ? LOCK_EX : LOCK_SH);
    $raw = stream_get_contents($fh);
    $data = json_decode($raw ?: '', true);
    if (!is_array($data)) $data = ['days' => [], 'total' => []];
    if ($change) {
        $data = $change($data);
        ftruncate($fh, 0);
        rewind($fh);
        fwrite($fh, json_encode($data));
        fflush($fh);
    }
    flock($fh, LOCK_UN);
    fclose($fh);
    return $data;
}
