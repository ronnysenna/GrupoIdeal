<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Clientes</title>
    <link rel="icon" type="image/png" href="./imagens/icone.png">
    <link rel="stylesheet" type="text/css" href="./vendor/bootstrap/css/bootstrap.min.css">

</head>
<style>
    html {
        background: linear-gradient(90deg, rgba(0, 64, 255, 1) 0%, rgba(0, 48, 192, 1) 100%);
        height: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: white;
        width: 90%;
        max-width: 700px;
        margin: 30px auto ;
        padding: 15px;
        border-radius: 15px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 16px;
        background-color: #f7f7f7;
        transition: all 0.3s ease;
        box-sizing: border-box;
    }

    .form-group input[type="date"] {
        height: auto;
        padding: 10px;
        font-size: 16px;
    }

    .form-group select {
        height: 48px;
        padding: 8px;
        line-height: normal;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #007bff;
        background-color: #fff;
    }

    h2 {
        text-align: center;
        color: #333;
        font-size: 24px;
        margin-bottom: 30px;
    }

    .btn-primary {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 15px;
        margin-bottom:20px;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        width: 100%;
        transition: background-color 0.3s ease;
    }

    .btn-primary:hover {
        background-color: #0056b3;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        color: #333;
    }

    @media (max-width: 768px) {
        body {
            padding: 20px;
            margin: 20px auto;
        }

        h2 {
            font-size: 20px;
        }

        .btn-primary {
            padding: 12px;
        }

        .form-group input[type="date"] {
            font-size: 12px;
        }
    }

    @media (max-width: 480px) {
        body {
            padding: 15px;
        }

        h2 {
            font-size: 18px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            font-size: 14px;
        }

        .form-group input[type="date"] {
            padding: 12px;
            font-size: 14px;
        }

        .btn-primary {
            padding: 10px;
            font-size: 14px;
        }
    }
</style>

<body>

    <div class="container mt-5">

        <h2 class="text-center">Cadastro de Clientes</h2>

        <form id="clientesForm" method="post" action="cadastro_clientes.php">

            <div class="form-group col-12">
                <input type="text" id="dataCadastro" name="date_cadas" placeholder="Data do Cadastro" required class="form-control" />
            </div>

            <div class="form-group col-12">
                <input type="text" name="nome" placeholder="Nome" required class="form-control" />
            </div>

            <div class="form-group col-12">
                <input type="email" name="email" placeholder="Email" required class="form-control" />
            </div>

            <div class="form-group col-12">
                <input type="text" name="cpf" placeholder="CPF" required class="form-control" maxlength="14" />
            </div>

            <div class="form-group col-12">
                <input type="text" name="rg" placeholder="RG" required class="form-control" />
            </div>

            <div class="form-group col-12">
                <input type="tel" name="fone1" placeholder="Telefone Principal" required class="form-control" />
            </div>

            <div class="form-group col-12">
                <input type="tel" name="fone2" placeholder="Telefone Secundário" class="form-control" />
            </div>

            <div class="form-group col-12">
                <label for="nasc">Data de Nascimento</label>
                <input type="date" name="nasc" required class="form-control" />
            </div>

            <div class="form-group col-12">
                <label for="plano_sede">Planos</label>
                <select name="plano_sede" id="plano_sede" required class="form-control">
                    <option value="">Selecione o Plano</option>
                    <option value="50mb">50 MB (49,90)</option>
                    <option value="70mb">70 MB (69,90)</option>
                    <option value="80mb">80 MB (79,90)</option>
                    <option value="100mb">100 MB (89,90)</option>
                    <option value="200mb">200 MB (99,90)</option>
                </select>
            </div>

            <div class="form-group col-12">
                <label for="venc">Dia de Vencimento</label>
                <select name="venc" id="venc" required class="form-control">
                    <option value="">Selecione o Dia de Vencimento</option>
                    <option value="05">05</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                </select>
            </div>

            <div class="form-group col-12">
                <input type="text" name="cep" placeholder="CEP" required class="form-control" />
            </div>

            <div class="form-group col-12">
                <input type="text" name="endereco" placeholder="Endereço" required class="form-control" />
            </div>

            <div class="form-group col-12">
                <input type="text" name="bairro" placeholder="Bairro" required class="form-control" />
            </div>

            <div class="form-group col-12">
                <textarea type="text" name="obs" placeholder="Ponto de Referença" class="form-control"></textarea>
            </div>

            <div class="form-group col-12">
                <button type="submit" class="btn btn-primary w-100">Enviar</button>
            </div>

        </form>
    </div>

    <script>
        function formatarDataBrasileira(data) {
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = data.getFullYear();
            return `${dia}/${mes}/${ano}`;
        }
        const dataAtual = new Date();
        document.getElementById('dataCadastro').value = formatarDataBrasileira(dataAtual);
    </script>

</body>

</html>
