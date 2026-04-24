<?php
declare(strict_types=1);

/**
 * PROCESSAMENTO DE CADASTRO - IDEAL NET IBICUITINGA
 * Backend modernizado com validações e tratamento de erros
 */

// Configurações de erro
ini_set('display_errors', '0');
ini_set('display_startup_errors', '0');
error_reporting(E_ALL);

// Headers para JSON response
header('Content-Type: application/json; charset=utf-8');

// Verificar método
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método não permitido'
    ]);
    exit;
}

// Anti-honeypot
if (!empty($_POST['website'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Requisição inválida'
    ]);
    exit;
}

try {
    // Carregar autoloader e dependências
    require_once __DIR__ . '/vendor/autoload.php';
    require_once __DIR__ . '/../../../shared/php/FormClasses.php';

    // Carregar variáveis de ambiente
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    // Configurações
    $config = [
        'db' => [
            'host' => $_ENV['DB_HOST'],
            'user' => $_ENV['DB_USER'],
            'password' => $_ENV['DB_PASSWORD'],
            'name' => $_ENV['DB_NAME']
        ],
        'mail' => [
            'host' => $_ENV['SMTP_HOST'] ?? 'smtp.gmail.com',
            'port' => (int)($_ENV['SMTP_PORT'] ?? 587),
            'username' => $_ENV['SMTP_USER'],
            'password' => $_ENV['SMTP_PASSWORD'],
            'from' => $_ENV['SMTP_USER'],
            'from_name' => 'Ideal NET Ibicuitinga - Sistema de Cadastro',
            'to' => $_ENV['MAIL_TO'] ?? 'macicoidealnet@gmail.com'
        ],
        'city_name' => 'Ideal NET - Ibicuitinga',
        'redirect_url' => $_ENV['REDIRECT_URL'] ?? 'https://provedoridealnet.com/'
    ];

    // Processar dados
    $processor = new \IdealForms\CadastroProcessor($config);
    $result = $processor->process($_POST);

    // Retornar resultado
    http_response_code($result['success'] ? 200 : 400);
    echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (\Exception $e) {
    // Log do erro
    error_log("Erro no cadastro Ibicuitinga: " . $e->getMessage());
    
    // Resposta genérica para o usuário
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erro interno no servidor. Por favor, tente novamente mais tarde.'
    ], JSON_UNESCAPED_UNICODE);
}
