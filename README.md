# Grupo Ideal — monorepo

Site e cadastros do **Grupo Ideal Soluções** (Ideal NET, Teralink, etc.): aplicação **Next.js 16** em `apps/web`, pacotes compartilhados em `packages/`, banco **PostgreSQL** (Prisma), e `docker-compose` na raiz (web, Postgres, pgAdmin) para **Coolify** / VPS.

**Branch de migração:** trabalhe em `feat/nextjs-migration` (ou outra *feature*); após validação, faça *merge* para `main` e use essa branch no Coolify. Guia de deploy: [docs/COOLIFY.md](docs/COOLIFY.md).

Dados de conteúdo e cidades: [`sites.config.json`](sites.config.json) (importado no app).

## Estrutura

```
.
├── apps/web/
│   ├── public/
│   │   └── images/         # todas as artes estáticas (logos, slides, parallax, patterns, etc.)
│   └── src/
│       ├── app/             # (site)/ = hub, teralink, [cidade], API, sitemap, robots, opengraph
│       ├── content/         # cidades (tipos reexportados, alinhado ao plano)
│       ├── components/      # site (Header, Footer, formulários)
│       └── lib/             # cities, masks, mail, site-config, …
├── packages/
│   ├── db/                  # Prisma + schema PostgreSQL
│   ├── validators/          # Zod (formulário de cadastro)
│   ├── emails/              # React Email
│   ├── config/ / ui/        # presets (evoluem conforme o projeto)
├── docker-compose.yml
├── pnpm-workspace.yaml
└── sites.config.json
```

## Testes

```bash
pnpm test                     # Vitest: @ideal/validators (cadastro, sites.config) + apps/web (máscaras, etc.)
pnpm --filter web e2e         # Playwright (smoke, cadastro com mock, integração com Postgres se E2E_INTEGRATION=1)
```

O conteúdo de **[`sites.config.json`](sites.config.json)** é validado em build por **Zod** (`siteConfigSchema` em `@ideal/validators`).

**Open Graph / Twitter** — o Next gera `opengraph-image` e `twitter-image` (ver `apps/web/src/app/`) a partir de `og-default` (gradiente + título, 1200×630).

## Desenvolvimento

```bash
pnpm install
cp .env.example .env   # ajuste DATABASE_URL, SMTP, etc.

# Subir só o Postgres (porta 5432 exposta)
docker compose up -d postgres

pnpm db:migrate:deploy
pnpm dev                 # abre o app: http://localhost:3000
```

Rotas principais: `/` (hub), `/idealnet`, `/teralink`, `/palmacia`, `/pacoti`, `/ibicuitinga`, `/[cidade]/cadastro`, `/teralink/cadastro`. API: `POST /api/cadastro/[cidade]`, `GET /api/cep/[cep]`, `GET /api/health`.

## Build e deploy

```bash
pnpm build              # turborepo → build do Next
```

**Docker:** `docker compose build` usa `apps/web/Dockerfile` (output `standalone`). Após o deploy, rode migração no ambiente: `pnpm db:migrate:deploy` (ou tarefa one-off no Coolify).

**SEO:** sitemap e robots (`/sitemap.xml`, `/robots.txt`); partilha social com `/opengraph-image` e `/twitter-image`.

**Coolify (checklist resumida):** repositório Git conectado; serviço com **build** a partir de `apps/web/Dockerfile` (contexto na **raiz** do monorepo; ver `docker-compose`); `DATABASE_URL` e segredos de e-mail; **variável** `NEXT_PUBLIC_SITE_URL` com o URL canónico; após o primeiro deploy, tarefa one-off (ou `release command`) com `pnpm db:migrate:deploy` contra a mesma base; mapear domínio, HTTPS e health em `/api/health`.

## Redirecionamentos (URLs antigas)

Configuração em `apps/web/next.config.ts`: rotas legadas (`/cidades/...`, `/index.html`, formulários) e **URLs antigas de imagem** (`/img/...` → `/images/...`).

## Segurança (cadastros)

O `POST /api/cadastro/[cidade]` aplica **rate limit** em memória (por IP + cidade), salvo se **Upstash** estiver configurado (`UPSTASH_REDIS_REST_URL` e `UPSTASH_REDIS_REST_TOKEN`), caso em que o limite é partilhado entre instâncias. Ajuste em `.env` (`RATE_LIMIT_CADASTRO_MAX`, `RATE_LIMIT_CADASTRO_WINDOW_MS`) ou defina `RATE_LIMIT_DISABLED=1` em dev.

## Assets (imagens)

Tudo fica em **`apps/web/public/images/`** (uma pasta só). No código, use o caminho público, por exemplo `/images/logoGrupoIdeal.png`, `/images/logo.png` ou `/images/patterns/pattern1.png` (o que está em `public/` vira `/` na URL).

## CI

O workflow [`.github/workflows/ci.yml`](.github/workflows/ci.yml) sobe **PostgreSQL**, aplica `prisma migrate deploy`, roda `lint`, `pnpm test` (Vitest em todos os pacotes com script `test`), `build` do `web` e **Playwright** (incluindo e2e de integração com a API e o banco). O *deploy* antigo **GitHub → Hostinger (PHP)** foi descontinuado; use **Coolify** para produção.

## Legado (PHP / HTML)

Se ainda existirem pastas `cidades/*`, `shared/` (PHP) ou ficheiros HTML estáticos antigos, são cobertos por **redirects** no Next (`next.config.ts`) até remoção. **Neste clone não há ficheiros PHP** — a remoção pode ser dada por concluída quando o repositório remoto também estiver limpo.
