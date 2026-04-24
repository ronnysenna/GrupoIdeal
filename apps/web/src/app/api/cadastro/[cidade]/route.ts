import { cadastroBodySchema } from "@ideal/validators";
import { prisma, Prisma } from "@ideal/db";
import { NextResponse } from "next/server";
import { pathSegmentToCity, cityLabel } from "@/lib/city";
import { sendNovoCadastro } from "@/lib/mail";
import {
  cadastroRateLimitConfig,
  checkRateLimit,
  getClientIp,
} from "@/lib/rate-limit";
import { upstashRatelimitCadastro } from "@/lib/rate-limit-upstash";

function onlyDigits(v: string): string {
  return v.replace(/\D/g, "");
}

function formatCpfDisplay(digits: string): string {
  if (digits.length !== 11) return digits;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function formatCepDisplay(digits: string): string {
  if (digits.length !== 8) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

export async function POST(
  req: Request,
  ctx: { params: Promise<{ cidade: string }> },
) {
  const { cidade: rawCidade } = await ctx.params;
  const ip = getClientIp(req);
  const key = `cadastro:${ip}:${rawCidade.toLowerCase()}`;

  const u = await upstashRatelimitCadastro(key);
  if (u.used === "upstash" && !u.ok) {
    return NextResponse.json(
      {
        success: false,
        message: "Muitas tentativas. Aguarde um momento e tente de novo.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(u.retryAfterSec) },
      },
    );
  }

  const rl = cadastroRateLimitConfig();
  if (u.used === "none" && rl.enabled) {
    const hit = checkRateLimit(key, rl.max, rl.windowMs);
    if (!hit.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Muitas tentativas. Aguarde um momento e tente de novo.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(hit.retryAfterSec),
          },
        },
      );
    }
  }

  const city = pathSegmentToCity(rawCidade);
  if (!city) {
    return NextResponse.json(
      { success: false, message: "Cidade inválida" },
      { status: 404 },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "JSON inválido" },
      { status: 400 },
    );
  }

  const parsed = cadastroBodySchema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.flatten().fieldErrors;
    const msg =
      Object.values(first).flat()[0] ?? "Dados inválidos";
    return NextResponse.json(
      { success: false, message: msg, errors: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const data = parsed.data;

  if (data.website && data.website.trim() !== "") {
    return NextResponse.json({ success: true, message: "OK" });
  }

  const cpfDigits = onlyDigits(data.cpf);
  const cepDigits = onlyDigits(data.cep);
  const nasc = new Date(`${data.nasc}T12:00:00.000Z`);

  try {
    await prisma.cadastro.create({
      data: {
        city,
        nome: data.nome.trim(),
        email: data.email.trim().toLowerCase(),
        cpf: cpfDigits,
        rg: data.rg.trim(),
        fone1: data.fone1.trim(),
        fone2: data.fone2?.trim() || null,
        nasc,
        plano: data.plano_sede,
        venc: data.venc,
        cep: cepDigits,
        endereco: data.endereco.trim(),
        bairro: data.bairro.trim(),
        obs: data.obs?.trim() || null,
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return NextResponse.json(
        { success: false, message: "CPF já cadastrado nesta cidade." },
        { status: 409 },
      );
    }
    console.error("[cadastro]", e);
    return NextResponse.json(
      { success: false, message: "Erro ao salvar cadastro. Tente novamente." },
      { status: 500 },
    );
  }

  const label = cityLabel(city);
  const emailSent = await sendNovoCadastro({
    cityLabel: label,
    nome: data.nome.trim(),
    email: data.email.trim(),
    cpf: formatCpfDisplay(cpfDigits),
    rg: data.rg.trim(),
    fone1: data.fone1.trim(),
    fone2: data.fone2?.trim() || undefined,
    nasc: data.nasc,
    plano: data.plano_sede,
    venc: data.venc,
    cep: formatCepDisplay(cepDigits),
    endereco: data.endereco.trim(),
    bairro: data.bairro.trim(),
    obs: data.obs?.trim() || undefined,
  });

  return NextResponse.json({
    success: true,
    message: "Cadastro realizado com sucesso!",
    email_sent: emailSent,
  });
}
