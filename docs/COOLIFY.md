# Coolify — deploy do Grupo Ideal (Docker Compose)

O repositório inclui `docker-compose.yml` na **raiz** (contexto de build: pasta do monorepo, `dockerfile: apps/web/Dockerfile`).

## 1. Criar recurso

- **Source**: repositório Git, branch `main` (ou a branch pós-merge da migração).
- **Type**: *Docker Compose* (não "Dockerfile" avulso), apontar para o ficheiro `docker-compose.yml` na raiz.

## 2. Segredos / variáveis (Build & Runtime)

Defina no Coolify, alinhado a [`.env.example`](../.env.example):

| Variável | Uso |
|----------|-----|
| `POSTGRES_PASSWORD` | Senha do serviço `postgres` |
| `DATABASE_URL` | Só se sobrescrever; no compose, o `web` usa `postgres` como host interno. |
| `NEXT_PUBLIC_SITE_URL` | URL canónico (`https://seudominio.com`) |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_FROM`, `MAIL_TO` | E-mail de notificação de cadastro |
| `PGADMIN_EMAIL`, `PGADMIN_PASSWORD` | Se usar o serviço `pgadmin` |
| `RATE_LIMIT_*`, `UPSTASH_*`, `ADMIN_API_KEY` | Opcionais, conforme produção |

## 3. Após o primeiro deploy

- Executar **migração** (one-off / terminal no container ou tarefa de release):  
  `pnpm db:migrate:deploy`  
  (requer `DATABASE_URL` a apontar para a mesma base; dentro da rede do compose, host `postgres`.)

- **HTTPS**: o Coolify/Traefik costuma tratar o domínio e Let’s Encrypt automaticamente para o serviço com porta `3000` em `web`.

- **Postgres 5432 exposto**: restringir no firewall da VPS / allowlist de IP no painel, conforme a decisão de segurança do projeto.

## 4. Health

- A app expõe `GET /api/health` (JSON `{ "ok": true, ... }`) para healthcheck do proxy.

## 5. Rebuild

- Cada *push* na branch conectada pode acionar *deploy*; `docker compose build` alinha com o [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) (validação local do image).
