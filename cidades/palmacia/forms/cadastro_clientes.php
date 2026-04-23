<?php

// Iniciar exibição de erros para depuração
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "Formulário enviado!<br>";

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    // Conectar ao banco de dados usando variáveis de ambiente
    $host = $_ENV['DB_HOST'];
    $user = $_ENV['DB_USER'];
    $password = $_ENV['DB_PASSWORD'];
    $dbname = $_ENV['DB_NAME'];

    $conn = new mysqli($host, $user, $password, $dbname);

    // Verificar conexão
    if ($conn->connect_error) {
        die("Erro na conexão: " . $conn->connect_error);
    } else {
        // echo "Conexão com o banco de dados estabelecida.<br>"; (caso queira que apareça uma mensagem rapidamente)
    }

    // Definir o charset da conexão para aceitar caracteres especiais
    $conn->set_charset("utf8");

    // Capturar dados enviados via POST
    $nome = strtoupper($_POST['nome']);
    $email = $_POST['email'];
    $cpf = strtoupper($_POST['cpf']);
    $rg = strtoupper($_POST['rg']);
    $fone1 = strtoupper($_POST['fone1']);
    $fone2 = strtoupper($_POST['fone2']);
    $nasc = $_POST['nasc'];
    $plano_sede = strtoupper($_POST['plano_sede']);
    $venc = strtoupper($_POST['venc']);
    $cep = strtoupper($_POST['cep']);
    $endereco = strtoupper($_POST['endereco']); 
    $bairro = strtoupper($_POST['bairro']);
    $obs = !empty($_POST['obs']) ? strtoupper($_POST['obs']) : null; 

    // Mostrar os dados capturados para depuração
    // echo "Endereço capturado: " . $endereco . "<br>";(caso queira que apareça uma mensagem rapidamente)

    // Atualizando para a tabela "cadastro"
    $sql = "INSERT INTO cadastro (nome, email, cpf, rg, fone1, fone2, nasc, plano_sede, venc, cep, endereco, bairro, obs)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    // Preparar statement para evitar problemas com valores vazios/nulos
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        die("Erro ao preparar a query: " . $conn->error);
    }

    // Bind dos parâmetros para o statement
    $stmt->bind_param("sssssssssssss", $nome, $email, $cpf, $rg, $fone1, $fone2, $nasc, $plano_sede, $venc, $cep, $endereco, $bairro, $obs);

    // Executar a query
    if ($stmt->execute()) {
        // echo "Dados inseridos no banco de dados com sucesso!<br>"; (caso queira que apareça uma mensagem rapidamente)

        // Se bem-sucedido, enviar e-mail
        $mail = new PHPMailer(true);
        try {
            // Configurações do servidor SMTP 
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = $_ENV['SMTP_USER']; // Usuário do .env
            $mail->Password = $_ENV['SMTP_PASSWORD']; // Senha do .env
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            $mail->CharSet = 'UTF-8';  // Certificar que o e-mail será enviado com charset correto

            // Destinatário
            $mail->setFrom($_ENV['SMTP_USER'], 'Sistema de Cadastro');
            $mail->addAddress('macicoidealnet@gmail.com'); 

            // Conteúdo do e-mail
            $mail->isHTML(true);
            $mail->Subject = 'Novo Cadastro de Cliente';
            $mail->Body = "
                <p>Novo cliente cadastrado com sucesso!</p>
                <p>Nome: $nome</p>
                <p>E-mail: $email</p>
                <p>CPF: $cpf</p>
                <p>RG: $rg</p>
                <p>Telefone Principal: $fone1</p>
                <p>Telefone Secundário: $fone2</p>
                <p>Data de Nascimento: $nasc</p>
                <p>Plano: $plano_sede</p>
                <p>Dia de Vencimento: $venc</p>
                <p>CEP: $cep</p>
                <p>Endereço: $endereco</p>
                <p>Bairro: $bairro</p>
                <p>Observações: $obs</p>
            ";

            $mail->send();

            // Confirmação de envio do e-mail
            echo "<script>
                alert('Cadastro realizado com sucesso e e-mail enviado!');
                window.location.href = 'https://provedoridealnet.com/'; // Redirecionar para uma página de sucesso
            </script>";

        } catch (Exception $e) {
            // Apenas logar o erro do e-mail e continuar com a lógica de sucesso
            error_log("Erro ao enviar e-mail: {$mail->ErrorInfo}");
            echo "<script>
                alert('Cadastro realizado, mas houve um erro ao enviar o e-mail.');
                window.location.href = 'https://provedoridealnet.com/';
            </script>";
        }
    } else {
        // Exibir erro SQL
        echo "Erro ao cadastrar cliente: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Formulário não enviado corretamente.";
}
?>
