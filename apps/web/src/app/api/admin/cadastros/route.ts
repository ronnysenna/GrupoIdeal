import { prisma } from "@ideal/db";
import { NextResponse } from "next/server";
import { maskCep, maskCpfDigits, maskEmail, maskPhone } from "@/lib/mask-pii";

const LIMIT = 100;

function isAdminAuthorized(req: Request): boolean {
  const configured = process.env.ADMIN_API_KEY?.trim();
  if (!configured) return false;
  const h = req.headers.get("x-admin-key");
  if (h && h === configured) return true;
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) {
    const t = auth.slice(7).trim();
    if (t === configured) return true;
  }
  return false;
}

export async function GET(req: Request) {
  if (!process.env.ADMIN_API_KEY?.trim()) {
    return NextResponse.json(
      { error: "Admin API não configurada (ADMIN_API_KEY)." },
      { status: 503 },
    );
  }
  if (!isAdminAuthorized(req)) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const rows = await prisma.cadastro.findMany({
    take: LIMIT,
    orderBy: { createdAt: "desc" },
  });

  const data = rows.map((r) => ({
    id: r.id,
    city: r.city,
    nome: r.nome,
    email: maskEmail(r.email),
    cpf: maskCpfDigits(r.cpf),
    rg: r.rg ? `${r.rg.slice(0, 2)}***` : "",
    fone1: maskPhone(r.fone1),
    fone2: r.fone2 ? maskPhone(r.fone2) : null,
    nasc: r.nasc.toISOString().slice(0, 10),
    plano: r.plano,
    venc: r.venc,
    cep: maskCep(r.cep),
    endereco: r.endereco.length > 20 ? `${r.endereco.slice(0, 12)}…` : r.endereco,
    bairro: r.bairro,
    obs: r.obs ? "(preenchido)" : null,
    createdAt: r.createdAt.toISOString(),
  }));

  return NextResponse.json({ count: data.length, data });
}
