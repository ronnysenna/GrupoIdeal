# Deploy Automático - GitHub → Hostinger

Guia completo para configurar deploy automático do seu projeto.

---

## 🎯 Opção 1: GitHub Actions (Recomendado)

Deploy automático via GitHub Actions sempre que fizer push na `main`.

### Passo 1: Configurar SSH na Hostinger

1. **Acesse o painel Hostinger** → Avançado → SSH Access
2. **Ative o SSH** se não estiver ativo
3. **Anote as credenciais**:
   - Host: `ssh.hostinger.com` (ou específico do seu plano)
   - Port: `65002` (padrão Hostinger)
   - Username: `u123456789` (seu username)
   - Caminho: `/home/u123456789/public_html`

### Passo 2: Gerar Chave SSH (no seu computador)

```bash
# Gerar nova chave SSH
ssh-keygen -t ed25519 -C "deploy@hostinger" -f ~/.ssh/hostinger_deploy

# Exibir a chave pública
cat ~/.ssh/hostinger_deploy.pub
```

### Passo 3: Adicionar Chave Pública na Hostinger

1. **Acesse**: Hostinger → Avançado → SSH Access → Manage SSH Keys
2. **Adicione a chave pública** que você copiou acima
3. **Ative a chave**

### Passo 4: Adicionar Chave Privada no GitHub

1. **Acesse**: https://github.com/ronnysenna/GrupoIdeal/settings/secrets/actions
2. **New repository secret**:
   - Name: `HOSTINGER_SSH_KEY`
   - Value: Cole o conteúdo de `~/.ssh/hostinger_deploy` (chave PRIVADA)

```bash
# Copiar chave privada
cat ~/.ssh/hostinger_deploy
```

3. **Adicione mais secrets**:
   - `HOSTINGER_HOST`: `ssh.hostinger.com`
   - `HOSTINGER_PORT`: `65002`
   - `HOSTINGER_USERNAME`: `u123456789` (seu username)
   - `HOSTINGER_PATH`: `/home/u123456789/public_html`

### Passo 5: Criar GitHub Action

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Hostinger

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: '7.4'
    
    - name: Install Composer dependencies
      run: |
        cd cidades/palmacia/forms && composer install --no-dev --optimize-autoloader
        cd ../pacoti/forms && composer install --no-dev --optimize-autoloader
        cd ../ibicuitinga/forms && composer install --no-dev --optimize-autoloader
        cd ../teralink/forms && composer install --no-dev --optimize-autoloader
    
    - name: Deploy to Hostinger via SSH
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.HOSTINGER_HOST }}
        username: ${{ secrets.HOSTINGER_USERNAME }}
        key: ${{ secrets.HOSTINGER_SSH_KEY }}
        port: ${{ secrets.HOSTINGER_PORT }}
        script: |
          cd ${{ secrets.HOSTINGER_PATH }}
          
          # Backup anterior (opcional)
          if [ -d ".backup" ]; then rm -rf .backup; fi
          if [ -d "atual" ]; then mv atual .backup; fi
          
          # Clone/Pull do repositório
          if [ ! -d "GrupoIdeal" ]; then
            git clone https://github.com/ronnysenna/GrupoIdeal.git
          fi
          
          cd GrupoIdeal
          git fetch origin
          git reset --hard origin/main
          git pull origin main
          
          # Instalar dependências Composer
          cd cidades/palmacia/forms && composer install --no-dev
          cd ../pacoti/forms && composer install --no-dev
          cd ../ibicuitinga/forms && composer install --no-dev
          cd ../teralink/forms && composer install --no-dev
          
          # Criar .env se não existir (usando exemplo)
          for dir in cidades/palmacia/forms cidades/pacoti/forms cidades/ibicuitinga/forms cidades/teralink/forms; do
            if [ ! -f "$dir/.env" ]; then
              cp "$dir/.env.example" "$dir/.env" 2>/dev/null || true
            fi
          done
          
          echo "Deploy concluído!"
    
    - name: Notification
      if: always()
      run: echo "Deploy finalizado! Verifique o site."
```

### Passo 6: Criar .env.example (template)

Crie `.env.example` em cada pasta `forms/`:

```env
MAIL_FROM=noreply@seudominio.com
MAIL_TO=contato@seudominio.com
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=587
MAIL_USER=seu_email@seudominio.com
MAIL_PASS=sua_senha
```

### Passo 7: Testar Deploy

```bash
# Adicionar arquivo do workflow
git add .github/workflows/deploy.yml

# Adicionar .env.example
git add cidades/palmacia/forms/.env.example
git add cidades/pacoti/forms/.env.example
git add cidades/ibicuitinga/forms/.env.example
git add cidades/teralink/forms/.env.example

# Commit e push
git commit -m "ci: adicionar deploy automático via GitHub Actions"
git push origin main
```

🎉 **Pronto!** Agora sempre que fizer `git push`, o deploy acontece automaticamente!

---

## 🎯 Opção 2: Deploy Manual via FTP/SFTP (Mais Simples)

Se preferir algo mais simples sem automação:

### Usando FileZilla (ou similar)

1. **Conecte via SFTP**:
   - Host: `sftp://ssh.hostinger.com`
   - Port: `65002`
   - Username: seu username Hostinger
   - Password: sua senha

2. **Upload dos arquivos**:
   - Envie tudo da pasta local para `/public_html`

3. **Via SSH**, instale dependências:
```bash
ssh u123456789@ssh.hostinger.com -p 65002

cd public_html
cd cidades/palmacia/forms && composer install --no-dev
cd ../pacoti/forms && composer install --no-dev
cd ../ibicuitinga/forms && composer install --no-dev
cd ../teralink/forms && composer install --no-dev
```

---

## 🎯 Opção 3: Git Deploy na Hostinger (Alternativo)

Alguns planos Hostinger têm Git integrado:

1. **Painel Hostinger** → Git → Create Repository
2. **Conecte ao GitHub** diretamente
3. **Configure auto-deploy** no painel

---

## ⚙️ Configuração Pós-Deploy

### 1. Configurar .env em cada pasta forms/

Via SSH ou File Manager:

```bash
# Acessar via SSH
ssh u123456789@ssh.hostinger.com -p 65002

# Criar .env
nano /home/u123456789/public_html/cidades/palmacia/forms/.env
```

Conteúdo do `.env`:
```env
MAIL_FROM=noreply@idealsolucoes.com.br
MAIL_TO=contato@idealsolucoes.com.br
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=587
MAIL_USER=seu_email@idealsolucoes.com.br
MAIL_PASS=sua_senha_email
```

Repita para `pacoti`, `ibicuitinga` e `teralink`.

### 2. Verificar Permissões

```bash
chmod 755 cidades/*/forms
chmod 644 cidades/*/*.php
chmod 600 cidades/*/forms/.env
```

### 3. Configurar Domínio

No painel Hostinger:
- **Domínio principal**: aponte para `/public_html`
- **HTTPS**: Ative SSL/TLS gratuito
- **.htaccess**: Será criado automaticamente

### 4. Testar Site

1. Acesse: `https://seudominio.com`
2. Teste formulários
3. Verifique WhatsApp
4. Teste em mobile

---

## 🔄 Fluxo de Trabalho Ideal

```bash
# 1. Desenvolva localmente
php -S localhost:8000

# 2. Teste
# Acesse http://localhost:8000

# 3. Commit
git add .
git commit -m "feat: nova funcionalidade"

# 4. Push (deploy automático)
git push origin main

# 5. GitHub Actions faz o deploy
# Verifique em: https://github.com/ronnysenna/GrupoIdeal/actions

# 6. Site atualizado!
# Acesse: https://seudominio.com
```

---

## 🛠️ Troubleshooting

### Deploy falhou
- Verifique logs em: GitHub → Actions → último workflow
- Verifique credenciais SSH no GitHub Secrets

### Composer não funciona
```bash
# Via SSH, instale manualmente
cd /home/u123456789/public_html/cidades/palmacia/forms
composer install --no-dev
```

### Formulários não enviam
- Verifique arquivo `.env` em cada pasta `forms/`
- Teste credenciais SMTP da Hostinger
- Verifique logs PHP no painel Hostinger

### Permissões negadas
```bash
# Corrigir permissões
chmod -R 755 /home/u123456789/public_html
chmod 600 /home/u123456789/public_html/cidades/*/forms/.env
```

---

## 📝 Checklist de Deploy

- [ ] SSH configurado na Hostinger
- [ ] Chaves SSH geradas
- [ ] Secrets configurados no GitHub
- [ ] GitHub Actions criado
- [ ] .env.example adicionado
- [ ] Primeiro push feito
- [ ] Deploy executou com sucesso
- [ ] .env criado no servidor
- [ ] Composer instalado
- [ ] Domínio configurado
- [ ] HTTPS ativo
- [ ] Site testado
- [ ] Formulários testados
- [ ] WhatsApp funcionando

---

## 🎯 Resumo

**Desenvolvimento Local:**
```bash
# Editar código
git add .
git commit -m "mensagem"
git push origin main
```

**Deploy Automático:**
- GitHub Actions detecta o push
- Faz build do projeto
- Conecta via SSH na Hostinger
- Atualiza os arquivos
- Instala dependências
- Site atualizado! 🚀

**Resultado:** Qualquer alteração no GitHub = site atualizado automaticamente em ~2 minutos!
