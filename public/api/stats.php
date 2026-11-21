<?php
/**
 * GET /api/stats.php  ->  a small table of uploads and exports per day (newest first).
 * Only anonymous totals, so the page needs no password. Not indexed by search engines.
 */
require __DIR__ . '/_store.php';

header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');
$d = stlware_counts();
$days = $d['days'] ?? [];
krsort($days);
$h = fn($v) => htmlspecialchars((string)$v, ENT_QUOTES);
echo '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><title>STLware stats</title>';
echo '<style>body{font:14px system-ui;background:#0d0e11;color:#eceef2;padding:24px}td,th{padding:4px 14px;text-align:right;border-bottom:1px solid #222}th:first-child,td:first-child{text-align:left}</style>';
echo '<h1>STLware</h1><p>Total: ' . $h($d['total']['upload'] ?? 0) . ' uploads, ' . $h($d['total']['export'] ?? 0) . ' 3MF exports</p>';
echo '<table><tr><th>Day (UTC)</th><th>Uploads</th><th>3MF exports</th></tr>';
foreach ($days as $day => $c) {
    echo '<tr><td>' . $h($day) . '</td><td>' . $h($c['upload'] ?? 0) . '</td><td>' . $h($c['export'] ?? 0) . '</td></tr>';
}
echo '</table>';
