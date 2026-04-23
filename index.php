<?php
declare(strict_types=1);

/**
 * Redirecionamento legado (caso algum link antigo ainda use).
 * O hub moderno usa links diretos nos cards.
 */
$cidade = $_GET['cidade'] ?? '';
$cidade = trim((string) $cidade);
$cidade = str_replace(['..', "\0"], '', $cidade);

if ($cidade !== '' && preg_match('#^[a-z0-9_/\-]+$#i', $cidade)) {
    $path = '/' . trim($cidade, '/');
    header('Location: ' . $path . '/', true, 302);
    exit;
}

header('Location: /index.html', true, 302);
