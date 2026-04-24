# Grupo Ideal — monorepo → Next.js standalone (ver docker-compose na raiz)
FROM node:20-alpine AS base
ENV PATH="/pnpm/bin:$PATH"
RUN corepack enable && corepack prepare pnpm@10.12.2 --activate
WORKDIR /app

FROM base AS deps
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml ./
COPY apps/web/package.json apps/web/
COPY packages/db/package.json packages/db/
COPY packages/validators/package.json packages/validators/
COPY packages/emails/package.json packages/emails/
COPY packages/ui/package.json packages/ui/
COPY packages/config/package.json packages/config/
# postinstall (db:generate) needs schema before prisma generate can run
COPY packages/db/prisma ./packages/db/prisma
RUN pnpm install --frozen-lockfile

FROM base AS builder
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml turbo.json sites.config.json ./
COPY apps/web ./apps/web
COPY packages ./packages
# .dockerignore exclui node_modules do contexto — restaura node_modules do estágio `deps` (raiz + cada workspace).
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/web/node_modules ./apps/web/node_modules
COPY --from=deps /app/packages/db/node_modules ./packages/db/node_modules
COPY --from=deps /app/packages/ui/node_modules ./packages/ui/node_modules
COPY --from=deps /app/packages/validators/node_modules ./packages/validators/node_modules
COPY --from=deps /app/packages/emails/node_modules ./packages/emails/node_modules
ENV NEXT_TELEMETRY_DISABLED=1
ARG DATABASE_URL=postgresql://ideal:local@127.0.0.1:5432/idealnet?schema=public
ENV DATABASE_URL=$DATABASE_URL
WORKDIR /app/apps/web
RUN ./node_modules/.bin/next build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/web/public ./apps/web/public
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/packages/db/prisma ./packages/db/prisma

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
# DB: aponte DATABASE_URL (compose preenche). Migração one-off: ver README.
CMD ["node", "apps/web/server.js"]
