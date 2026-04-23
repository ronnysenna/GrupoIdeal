<?php
declare(strict_types=1);

/**
 * Processa POST de fale.php / assine.php nas filiais Ideal NET.
 * Destinatário: e-mail da filial em sites.config.json
 */
function idealnet_handle_post(string $cityDir): void
{
    $cityId = basename($cityDir);
    $script = basename((string) ($_SERVER['SCRIPT_NAME'] ?? ''));
    $formKind = str_contains($script, 'assine') ? 'assine' : 'fale';

    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        idealnet_redirect_back($formKind);
        return;
    }

    if (!empty($_POST['website'] ?? '')) {
        http_response_code(400);
        echo 'Bad request';
        return;
    }

    $root = dirname(__DIR__);
    $cfgPath = $root . '/sites.config.json';
    if (!is_readable($cfgPath)) {
        http_response_code(500);
        echo 'Configuração indisponível.';
        return;
    }

    /** @var array<string,mixed> $cfg */
    $cfg = json_decode((string) file_get_contents($cfgPath), true, 512, JSON_THROW_ON_ERROR);
    $city = null;
    foreach ($cfg['cities'] ?? [] as $c) {
        if (($c['id'] ?? '') === $cityId) {
            $city = $c;
            break;
        }
    }
    if ($city === null) {
        http_response_code(400);
        echo 'Cidade inválida.';
        return;
    }

    $postedCity = (string) ($_POST['idealnet_city'] ?? '');
    if ($postedCity !== '' && $postedCity !== $cityId) {
        http_response_code(400);
        echo 'Solicitação inconsistente.';
        return;
    }

    $nome = idealnet_clean_line((string) ($_POST['nome'] ?? ''));
    $email = idealnet_clean_line((string) ($_POST['email'] ?? ''));
    $tel1 = idealnet_clean_line((string) ($_POST['telefone1'] ?? ''));
    $tel2 = idealnet_clean_line((string) ($_POST['telefone2'] ?? ''));
    $mensagem = idealnet_clean_text((string) ($_POST['mensagem'] ?? ''));

    if ($nome === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        idealnet_redirect_back($formKind, 'invalid');
        return;
    }

    $to = (string) ($city['email'] ?? '');
    if ($to === '' || !filter_var($to, FILTER_VALIDATE_EMAIL)) {
        http_response_code(500);
        echo 'E-mail de destino não configurado.';
        return;
    }

    $lines = [
        'Formulário: ' . $formKind,
        'Filial: ' . ($city['titleCity'] ?? $cityId),
        'Nome: ' . $nome,
        'E-mail: ' . $email,
        'Telefone 1: ' . $tel1,
        'Telefone 2: ' . $tel2,
    ];

    if ($formKind === 'assine') {
        $planos = idealnet_clean_line((string) ($_POST['planos'] ?? ''));
        $endereco = idealnet_clean_text((string) ($_POST['endereco'] ?? ''));
        $lines[] = 'Plano: ' . $planos;
        $lines[] = 'Endereço: ' . $endereco;
    }

    $lines[] = 'Mensagem: ' . $mensagem;

    $subject = '[Ideal NET ' . ($city['titleCity'] ?? $cityId) . '] ' . ($formKind === 'assine' ? 'Assine já' : 'Fale conosco');
    $body = implode("\n", $lines);
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . $to,
        'Reply-To: ' . $email,
    ];

    $ok = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));
    idealnet_redirect_back($formKind, $ok ? 'ok' : 'fail');
}

function idealnet_redirect_back(string $formKind, ?string $flag = null): void
{
    $page = $formKind === 'assine' ? 'assine.html' : 'fale.html';
    $q = $flag !== null ? ('?envio=' . rawurlencode($flag)) : '';
    header('Location: ' . $page . $q, true, 303);
}

function idealnet_clean_line(string $s): string
{
    $s = trim(strip_tags($s));
    $s = str_replace(["\r", "\n"], '', $s);
    return $s;
}

function idealnet_clean_text(string $s): string
{
    $s = trim(strip_tags($s));
    $s = str_replace(["\r\n", "\r"], "\n", $s);
    return $s;
}
