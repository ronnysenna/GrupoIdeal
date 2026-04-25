/**
 * Conteúdo da landing Ideal Rastreamento.
 * Telefone, WhatsApp e endereço vêm de `@/content/hub` (alinhados ao material oficial).
 */

type RastreamentoAppEnv =
  | "NEXT_PUBLIC_RASTREAMENTO_APP_ANDROID"
  | "NEXT_PUBLIC_RASTREAMENTO_APP_IOS"
  | "NEXT_PUBLIC_RASTREAMENTO_APP_WEB";

function publicEnv(name: RastreamentoAppEnv): string {
  if (typeof process === "undefined" || !process.env) return "";
  const v = process.env[name];
  return typeof v === "string" && v.trim() !== "" ? v.trim() : "";
}

/**
 * Links oficiais: [Google Play (Ideal Rastreamentos)](https://play.google.com/store/apps/details?id=br.com.rs.ideal),
 * [App Store (Rastro System 3.0)](https://apps.apple.com/br/app/rastro-system-3-0/id6474566461),
 * [acesso web / PC](https://ideal.rastrosystem.com.br/acl/login/?next=/).
 * Sobrescreva via `NEXT_PUBLIC_RASTREAMENTO_APP_*` se as URLs mudarem.
 */
export const RASTREAMENTO_APP_LINKS = {
  android:
    publicEnv("NEXT_PUBLIC_RASTREAMENTO_APP_ANDROID") ||
    "https://play.google.com/store/apps/details?id=br.com.rs.ideal&hl=pt_BR",
  ios:
    publicEnv("NEXT_PUBLIC_RASTREAMENTO_APP_IOS") ||
    "https://apps.apple.com/br/app/rastro-system-3-0/id6474566461",
  web:
    publicEnv("NEXT_PUBLIC_RASTREAMENTO_APP_WEB") ||
    "https://ideal.rastrosystem.com.br/acl/login/?next=/",
} as const;

export const RASTREAMENTO_FAQ: { q: string; a: string }[] = [
  {
    q: "A Ideal Rastreamento atende em todo o Brasil?",
    a: "Sim. Operamos nacionalmente, com instalação em qualquer estado e plataforma de monitoramento 24 horas por dia, 7 dias por semana.",
  },
  {
    q: "O que é bloqueio e desbloqueio remoto?",
    a: "São comandos enviados pela plataforma ou aplicativo para restringir ou liberar a partida do veículo, com registro e alertas de eventos, conforme o plano contratado.",
  },
  {
    q: "Vocês têm planos para frotas?",
    a: "Sim. Oferecemos condições especiais para frotas, com visão unificada de veículos, relatórios e suporte comercial dedicado. Solicite uma cotação pelo formulário ou WhatsApp.",
  },
  {
    q: "A instalação do equipamento está incluída?",
    a: "Condições de instalação e equipamento variam por plano e região. Na proposta comercial, detalhamos o que está incluído. A instalação pode não estar inclusa, conforme a oferta — confirme com o vendedor.",
  },
  {
    q: "Como falar com o comercial?",
    a: "Use o telefone, o WhatsApp ou o formulário desta página. Retornamos com horário e próximos passos para cotação.",
  },
];

/** Redes @idealrastreamentos (ajuste a URL se a página mudar) */
export const RASTREAMENTO_SOCIAL = {
  label: "@idealrastreamentos",
  facebook: "https://www.facebook.com/idealrastreamentos",
  instagram: "https://www.instagram.com/idealrastreamentos",
} as const;

export const RASTREAMENTO_HIGHLIGHTS: {
  title: string;
  body: string;
  icon: "shield" | "clock" | "lock" | "truck";
}[] = [
  {
    title: "Proteção do patrimônio",
    body: "Monitoramento e alertas para reduzir riscos e agir com rapidez.",
    icon: "shield",
  },
  {
    title: "24h por dia, 7 dias por semana",
    body: "Acompanhamento contínuo, com plataforma estável e suporte técnico.",
    icon: "clock",
  },
  {
    title: "Bloqueio e desbloqueio remoto",
    body: "Comandos com registro, integrados à gestão e ao aplicativo móvel.",
    icon: "lock",
  },
  {
    title: "Planos para frotas",
    body: "Condições especiais para empresas com vários veículos.",
    icon: "truck",
  },
];

export const RASTREAMENTO_VEHICLE_TYPES: { label: string; description: string }[] = [
  { label: "Caminhões e carretas", description: "Frotas rodoviárias e transporte." },
  { label: "Passeio e utilitários", description: "Carros de rua, SUVs e comerciais leves." },
  { label: "Motocicletas", description: "Entregas, moto frete e uso particular." },
];

export const RASTREAMENTO_LEGAL = {
  install: "* Instalação não inclusa, salvo contrário em contrato/proposta.",
  photos: "* Fotos meramente ilustrativas.",
} as const;
