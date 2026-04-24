<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Cadastro de clientes Teralink - Internet fibra óptica em Fortaleza">
    <title>Cadastro de Clientes | Teralink</title>
    
    <?php
    // Definir base URL automaticamente
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'];
    // Remove /cidades/teralink/forms do caminho para ficar na raiz
    $path = str_replace('/cidades/teralink/forms', '', dirname($_SERVER['SCRIPT_NAME']));
    $baseUrl = $protocol . '://' . $host . $path . '/';
    ?>
    
    <!-- Base URL para todos os recursos -->
    <base href="<?php echo $baseUrl; ?>">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="cidades/teralink/forms/imagens/icone.png">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    
    <!-- Estilos Modernos -->
    <link rel="stylesheet" href="shared/css/form-modern.css">
</head>
<body>
    <div class="form-container">
        <!-- Header -->
        <div class="form-header">
            <img
                class="form-header__logo"
                src="images/logoteralink.png"
                alt="Teralink"
                width="220"
                height="72"
                loading="eager"
                decoding="async"
            >
            <h1>Cadastro de Clientes</h1>
            <p>Teralink Fibra Óptica - Fortaleza</p>
        </div>

        <!-- Body -->
        <div class="form-body">
            <form id="cadastroForm" method="POST" action="cidades/teralink/forms/cadastro_clientes.php">
                <div class="form-grid">
                    <!-- Data de Cadastro (auto-preenchida) -->
                    <div class="form-group">
                        <label class="form-label" for="dataCadastro">Data do Cadastro</label>
                        <input 
                            type="text" 
                            id="dataCadastro" 
                            name="date_cadas" 
                            class="form-input"
                            readonly
                        >
                    </div>

                    <!-- Nome Completo -->
                    <div class="form-group">
                        <label class="form-label required" for="nome">Nome Completo</label>
                        <input 
                            type="text" 
                            id="nome" 
                            name="nome" 
                            class="form-input"
                            placeholder="Digite seu nome completo"
                            required
                        >
                    </div>

                    <!-- E-mail -->
                    <div class="form-group">
                        <label class="form-label required" for="email">E-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            class="form-input"
                            placeholder="seu@email.com"
                            required
                        >
                    </div>

                    <!-- CPF -->
                    <div class="form-group">
                        <label class="form-label required" for="cpf">CPF</label>
                        <input 
                            type="text" 
                            id="cpf" 
                            name="cpf" 
                            class="form-input"
                            placeholder="000.000.000-00"
                            maxlength="14"
                            required
                        >
                    </div>

                    <!-- RG -->
                    <div class="form-group">
                        <label class="form-label required" for="rg">RG</label>
                        <input 
                            type="text" 
                            id="rg" 
                            name="rg" 
                            class="form-input"
                            placeholder="Digite seu RG"
                            required
                        >
                    </div>

                    <!-- Telefone Principal -->
                    <div class="form-group">
                        <label class="form-label required" for="fone1">Telefone Principal</label>
                        <input 
                            type="tel" 
                            id="fone1" 
                            name="fone1" 
                            class="form-input"
                            placeholder="(00) 00000-0000"
                            required
                        >
                    </div>

                    <!-- Telefone Secundário -->
                    <div class="form-group">
                        <label class="form-label" for="fone2">Telefone Secundário</label>
                        <input 
                            type="tel" 
                            id="fone2" 
                            name="fone2" 
                            class="form-input"
                            placeholder="(00) 00000-0000"
                        >
                        <span class="form-hint">Opcional</span>
                    </div>

                    <!-- Data de Nascimento -->
                    <div class="form-group">
                        <label class="form-label required" for="nasc">Data de Nascimento</label>
                        <input 
                            type="date" 
                            id="nasc" 
                            name="nasc" 
                            class="form-input"
                            required
                        >
                    </div>

                    <!-- Planos -->
                    <div class="form-group">
                        <label class="form-label required" for="plano_sede">Escolha seu Plano</label>
                        <select id="plano_sede" name="plano_sede" class="form-select" required>
                            <option value="">Selecione o plano</option>
                            <option value="50MB">50 Mega - R$ 49,90</option>
                            <option value="80MB">80 Mega - R$ 79,90</option>
                            <option value="100MB">100 Mega - R$ 89,90</option>
                            <option value="200MB">200 Mega - R$ 99,90</option>
                        </select>
                    </div>

                    <!-- Dia de Vencimento -->
                    <div class="form-group">
                        <label class="form-label required" for="venc">Dia de Vencimento</label>
                        <select id="venc" name="venc" class="form-select" required>
                            <option value="">Selecione o dia</option>
                            <option value="05">Dia 05</option>
                            <option value="10">Dia 10</option>
                            <option value="20">Dia 20</option>
                            <option value="25">Dia 25</option>
                        </select>
                    </div>

                    <!-- CEP -->
                    <div class="form-group">
                        <label class="form-label required" for="cep">CEP</label>
                        <input 
                            type="text" 
                            id="cep" 
                            name="cep" 
                            class="form-input"
                            placeholder="00000-000"
                            maxlength="9"
                            required
                        >
                        <span class="form-hint">O endereço será preenchido automaticamente</span>
                    </div>

                    <!-- Endereço -->
                    <div class="form-group">
                        <label class="form-label required" for="endereco">Endereço</label>
                        <input 
                            type="text" 
                            id="endereco" 
                            name="endereco" 
                            class="form-input"
                            placeholder="Rua, Avenida, número"
                            required
                        >
                    </div>

                    <!-- Bairro -->
                    <div class="form-group">
                        <label class="form-label required" for="bairro">Bairro</label>
                        <input 
                            type="text" 
                            id="bairro" 
                            name="bairro" 
                            class="form-input"
                            placeholder="Nome do bairro"
                            required
                        >
                    </div>

                    <!-- Observações -->
                    <div class="form-group">
                        <label class="form-label" for="obs">Ponto de Referência</label>
                        <textarea 
                            id="obs" 
                            name="obs" 
                            class="form-textarea"
                            placeholder="Ex: Próximo ao supermercado..."
                        ></textarea>
                        <span class="form-hint">Opcional - Ajuda nossos técnicos a localizar</span>
                    </div>

                    <!-- Honeypot (anti-spam) -->
                    <input type="text" name="website" style="display: none;" tabindex="-1" autocomplete="off">

                    <!-- Botão de Envio -->
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-full">
                            Finalizar Cadastro
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- JavaScript Moderno -->
    <script src="shared/js/form-modern.js"></script>
    <script>
        // Inicializar validação do formulário
        document.addEventListener('DOMContentLoaded', () => {
            new FormValidator('cadastroForm');
        });
    </script>
</body>
</html>
