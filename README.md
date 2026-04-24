# Ideal Soluções — Site do Grupo

Site institucional modernizado do Grupo Ideal Soluções, unificando todas as marcas:
- **Ideal NET**: Internet fibra e rádio (Palmácia, Pacoti, Ibicuitinga)
- **Teralink**: Internet fibra em Fortaleza
- **Ideal Rastreamento**: Rastreamento veicular
- **Sistemas & Automação**: Desenvolvimento web, IA e automação

---

## 📊 Estrutura do Projeto

```
IdealNet/
├── index.html                    # Hub principal do grupo
├── home/                         # CSS e JS modernos
│   ├── css/
│   │   ├── hub.css              # Estilos do hub
│   │   └── idealnet-unified.css # Estilos das páginas
│   └── js/
│       ├── idealnet-unified.js
│       └── teralink.js
├── cidades/
│   ├── idealnet-unified.html    # Página unificada (3 cidades)
│   ├── teralink/index.html      # Página Teralink
│   └── {cidade}/
│       ├── fale.php             # Endpoints de formulário
│       ├── assine.php
│       └── forms/               # Backend PHP (Composer)
├── includes/
│   └── idealnet-mail.php        # Handler de e-mails compartilhado
├── sites.config.json            # Dados centralizados
└── images/                      # Logos e imagens
```

---

## 🚀 Como Testar Localmente

### Opção 1: PHP Built-in Server (Recomendado)

```bash
php -S localhost:8000

# Acesse:
# http://localhost:8000/                                  → Hub
# http://localhost:8000/cidades/idealnet-unified.html     → Ideal NET
# http://localhost:8000/cidades/teralink/                 → Teralink
# http://localhost:8000/cidades/teralink/forms/           → Formulário Cadastro (Modernizado)
```

### Opção 2: Python (apenas para HTML estático)

```bash
python3 -m http.server 8000
# Nota: Formulários PHP não funcionarão com servidor Python
```

### Instalar Dependências dos Formulários

```bash
# Execute o script de instalação
./install-forms.sh

# Ou manualmente
cd cidades/teralink/forms && composer install
cd ../palmacia/forms && composer install
cd ../pacoti/forms && composer install
cd ../ibicuitinga/forms && composer install
```

---

## ✨ Novidades - Formulários Modernizados (v2.0)

Os formulários de cadastro de todas as cidades foram completamente refatorados:

### Frontend Moderno
- ✅ **Design System**: Interface limpa e profissional sem Bootstrap
- ✅ **Validação em Tempo Real**: Feedback instantâneo para o usuário
- ✅ **Máscaras Automáticas**: CPF, telefone e CEP formatados
- ✅ **Auto-completar**: CEP busca endereço via ViaCEP
- ✅ **Loading States**: Indicadores visuais durante envio
- ✅ **100% Responsivo**: Mobile-first design

### Backend Robusto
- ✅ **Arquitetura OOP**: Classes organizadas e reutilizáveis
- ✅ **Validações Duplas**: Frontend + Backend
- ✅ **Sanitização Completa**: Proteção contra XSS e SQL Injection
- ✅ **API RESTful**: Respostas padronizadas em JSON
- ✅ **E-mail HTML**: Templates profissionais
- ✅ **Anti-Spam**: Honeypot e validações de segurança

### Banco (cadastros)
- Schema de exemplo: `shared/database/schema.sql`

**Acesse os formulários modernizados:**
- http://localhost:8000/cidades/teralink/forms/
- http://localhost:8000/cidades/palmacia/forms/
- http://localhost:8000/cidades/pacoti/forms/
- http://localhost:8000/cidades/ibicuitinga/forms/

---

## 📖 Páginas Ativas

### 1. Hub Principal (`/index.html`)
Landing page do grupo com:
- Cards das marcas (Ideal NET, Teralink, Rastreamento, Sistemas)
- Formulário de lead integrado ao WhatsApp
- Design moderno e responsivo

### 2. Ideal NET Unificada (`/cidades/idealnet-unified.html`)
**Uma única página para 3 cidades** (Palmácia, Pacoti, Ibicuitinga):
- Seletor de cidade no topo
- Dados dinâmicos via `sites.config.json`
- 3 tipos de planos (Fibra, Rádio, Empresarial)
- FAQ interativo
- Formulário → WhatsApp

**Acesso por cidade:**
```
?cidade=palmacia
?cidade=pacoti
?cidade=ibicuitinga
```

### 3. Teralink (`/cidades/teralink/`)
Página para Fortaleza:
- 4 planos residenciais (50, 80, 100, 200 Mega)
- Seção empresarial
- FAQ interativo
- Link para Central do Assinante

**Contato:**
- WhatsApp: (85) 98433-0586
- Email: admteralink@gmail.com
- Endereço: Av. Valparaiso, 1300 - Messejana - Fortaleza/CE

---

## ⚙️ Deploy para Produção

### 1. Instalar Dependências PHP

```bash
# Instalar Composer em cada pasta forms/
cd cidades/palmacia/forms && composer install
cd ../pacoti/forms && composer install
cd ../ibicuitinga/forms && composer install
cd ../teralink/forms && composer install
```

### 2. Configurar E-mails

Criar `.env` em cada pasta `forms/`:

```env
MAIL_FROM=noreply@provedoridealnet.com
MAIL_TO=atendimento@provedoridealnet.com
MAIL_HOST=smtp.exemplo.com
MAIL_PORT=587
MAIL_USER=usuario@exemplo.com
MAIL_PASS=senha_segura
```

### 3. Estrutura de Upload

```
Upload para servidor:
├── index.html, index.php
├── home/ (CSS e JS)
├── cidades/ (páginas e backends)
├── includes/
├── sites.config.json
├── images/, fonts/
├── robots.txt, sitemap.xml
└── .htaccess (se Apache)

NÃO fazer upload:
├── node_modules/
├── vendor/ (gerar no servidor)
├── .env (criar no servidor)
└── .git/
```

### 4. Comandos no Servidor

```bash
# Gerar vendor/
cd cidades/palmacia/forms && composer install --no-dev
cd cidades/pacoti/forms && composer install --no-dev
cd cidades/ibicuitinga/forms && composer install --no-dev
cd cidades/teralink/forms && composer install --no-dev

# Ajustar permissões (se necessário)
chmod 755 cidades/*/forms
chmod 644 cidades/*/*.php
```

### 5. Build Scripts (Opcional)

```bash
# Gerar sitemap.xml
npm run sitemap

# Build páginas legadas (se necessário)
npm run build
```

---

## 🔧 Editar Dados

### Contatos, Telefones, Endereços
Edite `sites.config.json`:

```json
{
  "cities": [
    {
      "id": "palmacia",
      "titleCity": "Palmácia",
      "whatsappPhoneParam": "5585992025109",
      "email": "palmacia@provedoridealnet.com",
      ...
    }
  ]
}
```

### Preços dos Planos (Ideal NET)
Edite `home/js/idealnet-unified.js`:

```javascript
const prices = {
  palmacia: { 50: 79, 100: 99, 200: 129, 400: 179 },
  pacoti: { 50: 79, 100: 99, 200: 129, 400: 179 },
  ibicuitinga: { 50: 75, 100: 95, 200: 125, 400: 175 }
};
```

### Planos Teralink
Edite diretamente `cidades/teralink/index.html`.

---

## 📈 Performance e Otimização

### Antes da Modernização
- CSS: ~700KB (Bootstrap, jQuery UI, etc.)
- JS: ~550KB (jQuery, scripts legados)
- HTML: 36+ páginas duplicadas

### Depois da Modernização
- CSS: ~50KB (93% menor)
- JS: ~15KB (97% menor)
- HTML: 2 páginas unificadas

**Resultado:** Site ~80% menor, muito mais rápido e fácil de manter.

---

## 🛠️ Tecnologias

### Frontend
- HTML5 semântico
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript Vanilla ES6+ (sem jQuery)
- Google Fonts (Inter)

### Backend
- PHP 7.4+
- Composer
- PHPMailer
- phpdotenv

### Build
- Node.js (scripts auxiliares)

### Requisitos do Servidor
- PHP 7.4+
- Composer
- Suporte .htaccess (Apache) ou nginx
- HTTPS recomendado

---

## 📝 Manutenção

### Atualizar Dados de uma Cidade
1. Edite `sites.config.json`
2. Recarregue a página (dados carregados via JavaScript)

### Adicionar Nova Cidade
1. Adicione entrada em `sites.config.json`
2. Crie pasta `cidades/{cidade}/` com `fale.php`, `assine.php`, `forms/`
3. Configure Composer e `.env` na pasta `forms/`

### Criar Formulário Novo
Use o modelo em `includes/idealnet-mail.php` como referência.

---

## 🔐 Segurança

- ✅ Vendor/ não está no Git (`.gitignore`)
- ✅ .env não está no Git
- ✅ Honeypot implementado nos formulários
- ✅ Sanitização de inputs
- ✅ rel="noopener noreferrer" em links externos
- ✅ HTTPS recomendado para produção

---

## 🐛 Troubleshooting

### Formulários não enviam e-mail
- Verifique configuração `.env`
- Teste credenciais SMTP
- Verifique logs do servidor PHP

### Página não carrega dados da cidade
- Verifique se `sites.config.json` existe
- Abra DevTools → Console para erros
- Verifique se JavaScript está carregando

### CSS/JS não carrega
- Verifique caminhos relativos
- Limpe cache do navegador
- Verifique permissões dos arquivos

---

## 📞 Suporte

**Grupo Ideal Soluções**
- WhatsApp: (85) 99190-4540
- Email: contato@idealsolucoes.com.br

---

## 📜 Licença e Histórico

**Projeto:** Site Grupo Ideal Soluções  
**Versão:** 2.0 (Modernizado)  
**Status:** Produção

**Histórico resumido:** modernização do hub, páginas unificadas, formulários de cadastro com assets em `shared/`.
