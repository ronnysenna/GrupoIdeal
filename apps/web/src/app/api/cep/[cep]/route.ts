import { NextResponse } from "next/server";

type ViaCepOk = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: true;
};

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ cep: string }> },
) {
  const { cep: raw } = await ctx.params;
  const cep = raw.replace(/\D/g, "");
  if (cep.length !== 8) {
    return NextResponse.json(
      { error: "CEP inválido" },
      { status: 400 },
    );
  }

  const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) {
    return NextResponse.json(
      { error: "Falha ao consultar CEP" },
      { status: 502 },
    );
  }

  const data = (await res.json()) as ViaCepOk;
  if (data.erro) {
    return NextResponse.json({ error: "CEP não encontrado" }, { status: 404 });
  }

  return NextResponse.json(
    {
      cep: data.cep,
      logradouro: data.logradouro,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
