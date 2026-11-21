<?php
/**
 * GET /api/count.php  ->  {"exports": 1234}
 * Total number of 3MF exports, for the counter on the landing page.
 */
require __DIR__ . '/_store.php';

header('Content-Type: application/json');
header('Cache-Control: public, max-age=300');
$d = stlware_counts();
echo json_encode(['exports' => (int)($d['total']['export'] ?? 0)]);
