<?php
declare(strict_types=1);

/**
 * FORMULÁRIOS MODERNOS - GRUPO IDEAL SOLUÇÕES
 * Classes PHP para processamento backend
 */

namespace IdealForms;

/**
 * Classe para validação de dados
 */
class Validator
{
    private array $errors = [];

    public function validate(array $data, array $rules): bool
    {
        $this->errors = [];

        foreach ($rules as $field => $fieldRules) {
            $value = $data[$field] ?? null;

            foreach ($fieldRules as $rule) {
                if (!$this->applyRule($field, $value, $rule)) {
                    break; // Para no primeiro erro do campo
                }
            }
        }

        return empty($this->errors);
    }

    private function applyRule(string $field, $value, string $rule): bool
    {
        $ruleParts = explode(':', $rule);
        $ruleName = $ruleParts[0];
        $ruleParam = $ruleParts[1] ?? null;

        switch ($ruleName) {
            case 'required':
                if (empty($value) && $value !== '0') {
                    $this->addError($field, 'Este campo é obrigatório');
                    return false;
                }
                break;

            case 'email':
                if (!empty($value) && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
                    $this->addError($field, 'E-mail inválido');
                    return false;
                }
                break;

            case 'cpf':
                if (!empty($value) && !$this->isValidCPF($value)) {
                    $this->addError($field, 'CPF inválido');
                    return false;
                }
                break;

            case 'phone':
                if (!empty($value)) {
                    $digits = preg_replace('/\D/', '', $value);
                    if (strlen($digits) < 10 || strlen($digits) > 11) {
                        $this->addError($field, 'Telefone inválido');
                        return false;
                    }
                }
                break;

            case 'cep':
                if (!empty($value)) {
                    $digits = preg_replace('/\D/', '', $value);
                    if (strlen($digits) !== 8) {
                        $this->addError($field, 'CEP inválido');
                        return false;
                    }
                }
                break;

            case 'date':
                if (!empty($value) && !strtotime($value)) {
                    $this->addError($field, 'Data inválida');
                    return false;
                }
                break;

            case 'min':
                if (!empty($value) && strlen($value) < (int)$ruleParam) {
                    $this->addError($field, "Mínimo de {$ruleParam} caracteres");
                    return false;
                }
                break;

            case 'max':
                if (!empty($value) && strlen($value) > (int)$ruleParam) {
                    $this->addError($field, "Máximo de {$ruleParam} caracteres");
                    return false;
                }
                break;
        }

        return true;
    }

    private function isValidCPF(string $cpf): bool
    {
        $cpf = preg_replace('/\D/', '', $cpf);

        if (strlen($cpf) !== 11) {
            return false;
        }

        // Verifica sequências repetidas
        if (preg_match('/^(\d)\1{10}$/', $cpf)) {
            return false;
        }

        // Validação dos dígitos verificadores
        for ($t = 9; $t < 11; $t++) {
            $d = 0;
            for ($c = 0; $c < $t; $c++) {
                $d += $cpf[$c] * (($t + 1) - $c);
            }
            $d = ((10 * $d) % 11) % 10;
            if ($cpf[$c] != $d) {
                return false;
            }
        }

        return true;
    }

    private function addError(string $field, string $message): void
    {
        $this->errors[$field] = $message;
    }

    public function getErrors(): array
    {
        return $this->errors;
    }

    public function getFirstError(): ?string
    {
        return !empty($this->errors) ? reset($this->errors) : null;
    }
}

/**
 * Classe para sanitização de dados
 */
class Sanitizer
{
    public static function clean(string $value, string $type = 'text'): string
    {
        $value = trim($value);
        $value = strip_tags($value);

        switch ($type) {
            case 'upper':
                return mb_strtoupper($value, 'UTF-8');
            
            case 'email':
                return filter_var($value, FILTER_SANITIZE_EMAIL);
            
            case 'numeric':
                return preg_replace('/\D/', '', $value);
            
            case 'text':
            default:
                return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
        }
    }

    public static function cleanArray(array $data, array $types = []): array
    {
        $cleaned = [];
        
        foreach ($data as $key => $value) {
            $type = $types[$key] ?? 'text';
            $cleaned[$key] = self::clean($value, $type);
        }

        return $cleaned;
    }
}

/**
 * Classe para envio de e-mails
 */
class Mailer
{
    private \PHPMailer\PHPMailer\PHPMailer $mail;
    private array $config;

    public function __construct(array $config)
    {
        $this->config = $config;
        $this->mail = new \PHPMailer\PHPMailer\PHPMailer(true);
        $this->configure();
    }

    private function configure(): void
    {
        $this->mail->isSMTP();
        $this->mail->Host = $this->config['host'];
        $this->mail->SMTPAuth = true;
        $this->mail->Username = $this->config['username'];
        $this->mail->Password = $this->config['password'];
        $this->mail->SMTPSecure = \PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $this->mail->Port = $this->config['port'] ?? 587;
        $this->mail->CharSet = 'UTF-8';
        $this->mail->setFrom($this->config['from'], $this->config['from_name'] ?? 'Sistema de Cadastro');
    }

    public function send(string $to, string $subject, string $body): bool
    {
        try {
            $this->mail->clearAddresses();
            $this->mail->addAddress($to);
            $this->mail->isHTML(true);
            $this->mail->Subject = $subject;
            $this->mail->Body = $body;

            return $this->mail->send();
        } catch (\Exception $e) {
            error_log("Erro ao enviar e-mail: " . $this->mail->ErrorInfo);
            return false;
        }
    }
}

/**
 * Classe para conexão com banco de dados
 */
class Database
{
    private \mysqli $connection;

    public function __construct(string $host, string $user, string $password, string $database)
    {
        $this->connection = new \mysqli($host, $user, $password, $database);

        if ($this->connection->connect_error) {
            throw new \Exception("Erro na conexão: " . $this->connection->connect_error);
        }

        $this->connection->set_charset("utf8mb4");
    }

    public function insert(string $table, array $data): bool
    {
        $fields = array_keys($data);
        $values = array_values($data);
        $placeholders = array_fill(0, count($values), '?');

        $sql = sprintf(
            "INSERT INTO %s (%s) VALUES (%s)",
            $table,
            implode(', ', $fields),
            implode(', ', $placeholders)
        );

        $stmt = $this->connection->prepare($sql);
        
        if ($stmt === false) {
            throw new \Exception("Erro ao preparar query: " . $this->connection->error);
        }

        $types = str_repeat('s', count($values));
        $stmt->bind_param($types, ...$values);

        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }

    public function getLastInsertId(): int
    {
        return $this->connection->insert_id;
    }

    public function close(): void
    {
        $this->connection->close();
    }
}

/**
 * Classe principal para processar cadastros
 */
class CadastroProcessor
{
    private Database $db;
    private Mailer $mailer;
    private Validator $validator;
    private array $config;

    public function __construct(array $config)
    {
        $this->config = $config;
        $this->validator = new Validator();
        
        // Inicializar database
        $this->db = new Database(
            $config['db']['host'],
            $config['db']['user'],
            $config['db']['password'],
            $config['db']['name']
        );

        // Inicializar mailer
        $this->mailer = new Mailer($config['mail']);
    }

    public function process(array $data): array
    {
        // Validar dados
        $rules = [
            'nome' => ['required', 'min:3'],
            'email' => ['required', 'email'],
            'cpf' => ['required', 'cpf'],
            'rg' => ['required'],
            'fone1' => ['required', 'phone'],
            'nasc' => ['required', 'date'],
            'plano_sede' => ['required'],
            'venc' => ['required'],
            'cep' => ['required', 'cep'],
            'endereco' => ['required'],
            'bairro' => ['required'],
        ];

        if (!$this->validator->validate($data, $rules)) {
            return [
                'success' => false,
                'message' => $this->validator->getFirstError(),
                'errors' => $this->validator->getErrors()
            ];
        }

        // Sanitizar dados
        $types = [
            'nome' => 'upper',
            'email' => 'email',
            'cpf' => 'numeric',
            'rg' => 'upper',
            'fone1' => 'text',
            'fone2' => 'text',
            'plano_sede' => 'upper',
            'venc' => 'text',
            'cep' => 'numeric',
            'endereco' => 'upper',
            'bairro' => 'upper',
            'obs' => 'text'
        ];

        $cleanData = Sanitizer::cleanArray($data, $types);

        // Inserir no banco
        try {
            $insertData = [
                'nome' => $cleanData['nome'],
                'email' => $cleanData['email'],
                'cpf' => $cleanData['cpf'],
                'rg' => $cleanData['rg'],
                'fone1' => $cleanData['fone1'],
                'fone2' => $cleanData['fone2'] ?? '',
                'nasc' => $cleanData['nasc'],
                'plano_sede' => $cleanData['plano_sede'],
                'venc' => $cleanData['venc'],
                'cep' => $cleanData['cep'],
                'endereco' => $cleanData['endereco'],
                'bairro' => $cleanData['bairro'],
                'obs' => $cleanData['obs'] ?? ''
            ];

            $this->db->insert('cadastro', $insertData);

            // Enviar e-mail
            $emailSent = $this->sendNotificationEmail($cleanData);

            return [
                'success' => true,
                'message' => 'Cadastro realizado com sucesso!',
                'email_sent' => $emailSent,
                'redirect' => $this->config['redirect_url'] ?? null
            ];

        } catch (\Exception $e) {
            error_log("Erro no cadastro: " . $e->getMessage());
            return [
                'success' => false,
                'message' => 'Erro ao processar cadastro. Tente novamente.'
            ];
        }
    }

    private function sendNotificationEmail(array $data): bool
    {
        $subject = 'Novo Cadastro de Cliente - ' . ($this->config['city_name'] ?? 'Ideal Soluções');
        
        $body = $this->buildEmailBody($data);

        return $this->mailer->send($this->config['mail']['to'], $subject, $body);
    }

    private function buildEmailBody(array $data): string
    {
        return "
            <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;'>
                <h2 style='color: #0052cc;'>Novo Cadastro de Cliente</h2>
                <table style='width: 100%; border-collapse: collapse;'>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Nome:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['nome']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>E-mail:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['email']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>CPF:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['cpf']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>RG:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['rg']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Telefone 1:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['fone1']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Telefone 2:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['fone2']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Data de Nascimento:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['nasc']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Plano:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['plano_sede']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Vencimento:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>Dia {$data['venc']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>CEP:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['cep']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Endereço:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['endereco']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Bairro:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['bairro']}</td>
                    </tr>
                    <tr>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'><strong>Observações:</strong></td>
                        <td style='padding: 8px; border-bottom: 1px solid #eee;'>{$data['obs']}</td>
                    </tr>
                </table>
                <p style='margin-top: 20px; color: #666; font-size: 12px;'>
                    E-mail gerado automaticamente pelo sistema de cadastro.
                </p>
            </div>
        ";
    }

    public function __destruct()
    {
        $this->db->close();
    }
}
