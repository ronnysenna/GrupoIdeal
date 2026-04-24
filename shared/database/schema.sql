-- ============================================================================
-- SCHEMA DO BANCO DE DADOS - FORMULÁRIOS DE CADASTRO
-- Grupo Ideal Soluções
-- ============================================================================

-- Criar banco de dados (execute uma vez para cada cidade)
-- CREATE DATABASE idealnet_teralink_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- CREATE DATABASE idealnet_palmacia_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- CREATE DATABASE idealnet_pacoti_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- CREATE DATABASE idealnet_ibicuitinga_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Use o banco de dados apropriado
-- USE idealnet_teralink_db;

-- ============================================================================
-- TABELA: cadastro
-- Armazena os cadastros de clientes
-- ============================================================================

DROP TABLE IF EXISTS `cadastro`;

CREATE TABLE `cadastro` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  
  -- Informações Pessoais
  `nome` VARCHAR(255) NOT NULL COMMENT 'Nome completo do cliente',
  `email` VARCHAR(255) NOT NULL COMMENT 'E-mail do cliente',
  `cpf` VARCHAR(14) NOT NULL COMMENT 'CPF formatado (000.000.000-00)',
  `rg` VARCHAR(20) NOT NULL COMMENT 'RG do cliente',
  
  -- Contatos
  `fone1` VARCHAR(20) NOT NULL COMMENT 'Telefone principal',
  `fone2` VARCHAR(20) DEFAULT NULL COMMENT 'Telefone secundário (opcional)',
  
  -- Dados Contratuais
  `nasc` DATE NOT NULL COMMENT 'Data de nascimento',
  `plano_sede` VARCHAR(50) NOT NULL COMMENT 'Plano escolhido',
  `venc` VARCHAR(2) NOT NULL COMMENT 'Dia de vencimento da fatura',
  
  -- Endereço
  `cep` VARCHAR(9) NOT NULL COMMENT 'CEP formatado (00000-000)',
  `endereco` VARCHAR(255) NOT NULL COMMENT 'Endereço completo',
  `bairro` VARCHAR(100) NOT NULL COMMENT 'Bairro',
  `obs` TEXT DEFAULT NULL COMMENT 'Observações / Ponto de referência',
  
  -- Metadados
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'Data de criação do registro',
  `updated_at` TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'Data da última atualização',
  
  -- Chaves
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_cpf` (`cpf`),
  KEY `idx_email` (`email`),
  KEY `idx_created_at` (`created_at`),
  KEY `idx_plano` (`plano_sede`)
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Cadastro de clientes';

-- ============================================================================
-- ÍNDICES ADICIONAIS PARA PERFORMANCE (OPCIONAL)
-- ============================================================================

-- Busca por nome
ALTER TABLE `cadastro` ADD INDEX `idx_nome` (`nome`(50));

-- Busca por telefone
ALTER TABLE `cadastro` ADD INDEX `idx_fone1` (`fone1`);

-- Busca por CEP/bairro (útil para relatórios por região)
ALTER TABLE `cadastro` ADD INDEX `idx_localizacao` (`cep`, `bairro`);

-- ============================================================================
-- TABELA AUXILIAR: logs_cadastro (OPCIONAL)
-- Registra tentativas e erros para auditoria
-- ============================================================================

CREATE TABLE IF NOT EXISTS `logs_cadastro` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cadastro_id` INT(11) UNSIGNED DEFAULT NULL COMMENT 'ID do cadastro (se bem-sucedido)',
  `ip_address` VARCHAR(45) NOT NULL COMMENT 'IP do cliente',
  `user_agent` VARCHAR(255) DEFAULT NULL COMMENT 'User agent do navegador',
  `status` ENUM('success', 'error', 'validation_error', 'spam') NOT NULL COMMENT 'Status da tentativa',
  `error_message` TEXT DEFAULT NULL COMMENT 'Mensagem de erro (se houver)',
  `request_data` JSON DEFAULT NULL COMMENT 'Dados enviados (para debug)',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (`id`),
  KEY `idx_status` (`status`),
  KEY `idx_created_at` (`created_at`),
  KEY `fk_cadastro_id` (`cadastro_id`),
  
  CONSTRAINT `fk_logs_cadastro` FOREIGN KEY (`cadastro_id`) 
    REFERENCES `cadastro` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Logs de tentativas de cadastro';

-- ============================================================================
-- VIEWS ÚTEIS
-- ============================================================================

-- View: Cadastros recentes (últimos 30 dias)
CREATE OR REPLACE VIEW `v_cadastros_recentes` AS
SELECT 
  id,
  nome,
  email,
  cpf,
  fone1,
  plano_sede,
  venc,
  bairro,
  created_at
FROM cadastro
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
ORDER BY created_at DESC;

-- View: Resumo por plano
CREATE OR REPLACE VIEW `v_resumo_planos` AS
SELECT 
  plano_sede,
  COUNT(*) as total_clientes,
  DATE_FORMAT(MIN(created_at), '%d/%m/%Y') as primeiro_cadastro,
  DATE_FORMAT(MAX(created_at), '%d/%m/%Y') as ultimo_cadastro
FROM cadastro
GROUP BY plano_sede
ORDER BY total_clientes DESC;

-- View: Resumo por bairro
CREATE OR REPLACE VIEW `v_resumo_bairros` AS
SELECT 
  bairro,
  COUNT(*) as total_clientes,
  GROUP_CONCAT(DISTINCT plano_sede ORDER BY plano_sede SEPARATOR ', ') as planos
FROM cadastro
GROUP BY bairro
ORDER BY total_clientes DESC;

-- ============================================================================
-- PROCEDURES ÚTEIS (OPCIONAL)
-- ============================================================================

-- Procedure: Buscar cadastro por CPF
DELIMITER $$

CREATE PROCEDURE sp_buscar_por_cpf(IN p_cpf VARCHAR(14))
BEGIN
  SELECT * FROM cadastro WHERE cpf = p_cpf;
END$$

DELIMITER ;

-- Procedure: Relatório mensal
DELIMITER $$

CREATE PROCEDURE sp_relatorio_mensal(IN p_mes INT, IN p_ano INT)
BEGIN
  SELECT 
    COUNT(*) as total_cadastros,
    COUNT(DISTINCT plano_sede) as total_planos,
    COUNT(DISTINCT bairro) as total_bairros
  FROM cadastro
  WHERE MONTH(created_at) = p_mes AND YEAR(created_at) = p_ano;
END$$

DELIMITER ;

-- ============================================================================
-- DADOS DE TESTE (OPCIONAL - REMOVER EM PRODUÇÃO)
-- ============================================================================

/*
INSERT INTO cadastro (nome, email, cpf, rg, fone1, fone2, nasc, plano_sede, venc, cep, endereco, bairro, obs) VALUES
('JOÃO DA SILVA', 'joao@example.com', '123.456.789-09', '1234567', '(85) 98765-4321', NULL, '1990-01-15', '100MB', '10', '60000-000', 'Rua Exemplo, 123', 'Centro', 'Próximo ao mercado'),
('MARIA OLIVEIRA', 'maria@example.com', '111.444.777-35', '7654321', '(85) 91234-5678', '(85) 93456-7890', '1985-05-20', '200MB', '05', '60000-001', 'Av. Principal, 456', 'Aldeota', NULL);
*/

-- ============================================================================
-- PERMISSÕES (CRIAR USUÁRIO ESPECÍFICO)
-- ============================================================================

/*
-- Criar usuário específico para a aplicação
CREATE USER 'idealnet_user'@'localhost' IDENTIFIED BY 'senha_segura_aqui';

-- Conceder permissões apenas necessárias
GRANT SELECT, INSERT, UPDATE ON idealnet_teralink_db.cadastro TO 'idealnet_user'@'localhost';
GRANT SELECT, INSERT ON idealnet_teralink_db.logs_cadastro TO 'idealnet_user'@'localhost';

-- Aplicar mudanças
FLUSH PRIVILEGES;
*/

-- ============================================================================
-- BACKUP AUTOMÁTICO (RECOMENDAÇÃO)
-- ============================================================================

/*
Crie um cron job para backup diário:

0 2 * * * /usr/bin/mysqldump -u root -p'senha' idealnet_teralink_db > /backups/idealnet_$(date +\%Y\%m\%d).sql

*/

-- ============================================================================
-- MANUTENÇÃO
-- ============================================================================

-- Limpar logs antigos (manter últimos 90 dias)
-- DELETE FROM logs_cadastro WHERE created_at < DATE_SUB(NOW(), INTERVAL 90 DAY);

-- Otimizar tabelas
-- OPTIMIZE TABLE cadastro;
-- OPTIMIZE TABLE logs_cadastro;

-- ============================================================================
-- FIM DO SCHEMA
-- ============================================================================
