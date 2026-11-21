<?php
/**
 * POST /api/hit.php  with  e=upload | e=export
 * Adds 1 to today's count of that event. Nothing else is read or stored.
 */
require __DIR__ . '/_store.php';

header('Cache-Control: no-store');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
$event = $_POST['e'] ?? '';
if (!in_array($event, STLWARE_EVENTS, true)) { http_response_code(400); exit; }

$day = gmdate('Y-m-d');
stlware_counts(function (array $d) use ($event, $day) {
    $d['days'][$day][$event] = ($d['days'][$day][$event] ?? 0) + 1;
    $d['total'][$event] = ($d['total'][$event] ?? 0) + 1;
    return $d;
});
http_response_code(204);
