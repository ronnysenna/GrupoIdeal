-- CreateEnum
CREATE TYPE "City" AS ENUM ('TERALINK', 'PALMACIA', 'PACOTI', 'IBICUITINGA');

-- CreateTable
CREATE TABLE "Cadastro" (
    "id" SERIAL NOT NULL,
    "city" "City" NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "fone1" TEXT NOT NULL,
    "fone2" TEXT,
    "nasc" DATE NOT NULL,
    "plano" TEXT NOT NULL,
    "venc" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "obs" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cadastro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CadastroLog" (
    "id" SERIAL NOT NULL,
    "city" TEXT,
    "payload" TEXT,
    "error" TEXT,
    "ip" VARCHAR(45),
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CadastroLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Cadastro_city_createdAt_idx" ON "Cadastro"("city", "createdAt");

-- CreateIndex
CREATE INDEX "Cadastro_email_idx" ON "Cadastro"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cadastro_city_cpf_key" ON "Cadastro"("city", "cpf");

-- CreateIndex
CREATE INDEX "CadastroLog_createdAt_idx" ON "CadastroLog"("createdAt");
