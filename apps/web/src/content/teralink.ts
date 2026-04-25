/**
 * Conteúdo estático da landing Teralink Fibra (Fortaleza).
 * Contatos e URLs da central vêm de `getTeralink()` / `sites.config.json`.
 */
export type TeralinkPlanBadge = "popular" | "recomendado" | "melhor_valor";

export type TeralinkResidentialPlan = {
  id: string;
  name: string;
  priceMain: string;
  priceRest: string;
  download: string;
  upload: string;
  features: string[];
  badge?: TeralinkPlanBadge;
  /** Destaque de borda / fundo (plano 100 Mega) */
  featured?: boolean;
};

export const TERALINK_CITY = "Fortaleza";

export const TERALINK_RESIDENTIAL_PLANS: TeralinkResidentialPlan[] = [
  {
    id: "p50",
    name: "50 Mega",
    priceMain: "54",
    priceRest: ",90/mês",
    download: "50 Mbps",
    upload: "25 Mbps",
    features: [
      "Wi-Fi grátis",
      "Instalação inclusa",
      "Velocidade garantida",
    ],
  },
  {
    id: "p80",
    name: "80 Mega",
    priceMain: "79",
    priceRest: ",90/mês",
    download: "80 Mbps",
    upload: "40 Mbps",
    features: [
      "Wi-Fi grátis",
      "Instalação inclusa",
      "Velocidade garantida",
    ],
    badge: "popular",
  },
  {
    id: "p100",
    name: "100 Mega",
    priceMain: "89",
    priceRest: ",90/mês",
    download: "100 Mbps",
    upload: "50 Mbps",
    features: [
      "Wi-Fi grátis",
      "Instalação inclusa",
      "Velocidade garantida",
    ],
    badge: "recomendado",
    featured: true,
  },
  {
    id: "p200",
    name: "200 Mega",
    priceMain: "99",
    priceRest: ",90/mês",
    download: "200 Mbps",
    upload: "100 Mbps",
    features: [
      "Wi-Fi 6 incluso",
      "Instalação inclusa",
      "Velocidade garantida",
    ],
    badge: "melhor_valor",
  },
];

export const TERALINK_EMPRESARIAL = {
  title: "Planos Empresariais",
  body: "Link dedicado, IP fixo e SLA garantido para sua empresa",
} as const;

export const TERALINK_HERO_BADGES: string[] = [
  "Instalação rápida",
  "Suporte local",
  "Fibra 100%",
];

export const TERALINK_ABOUT_STATS = [
  { n: "1000+", t: "Clientes ativos" },
  { n: "100%", t: "Fibra óptica" },
  { n: "24/7", t: "Suporte técnico" },
] as const;

export const TERALINK_ABOUT_FEATURES: {
  icon: "zap" | "shield" | "money" | "target";
  title: string;
  text: string;
}[] = [
  {
    icon: "zap",
    title: "Velocidade real",
    text: "100% fibra óptica até sua casa",
  },
  {
    icon: "shield",
    title: "Estabilidade",
    text: "Conexão sem quedas ou lentidão",
  },
  {
    icon: "money",
    title: "Melhor custo",
    text: "Planos acessíveis e sem taxas extras",
  },
  {
    icon: "target",
    title: "Cobertura",
    text: "Fortaleza e região metropolitana",
  },
];

const ABOUT_EMOJI: Record<
  (typeof TERALINK_ABOUT_FEATURES)[number]["icon"],
  string
> = {
  zap: "⚡",
  shield: "🛡️",
  money: "💰",
  target: "🎯",
};

export function teralinkAboutIcon(
  kind: (typeof TERALINK_ABOUT_FEATURES)[number]["icon"],
): string {
  return ABOUT_EMOJI[kind];
}

export const TERALINK_FAQ: { q: string; a: string }[] = [
  {
    q: "Como funciona a instalação?",
    a: "Nossa equipe técnica faz uma análise de viabilidade no seu endereço. Confirmada a cobertura, agendamos a instalação que leva em média 2 a 3 horas. Todo equipamento necessário é fornecido gratuitamente.",
  },
  {
    q: "Vocês atendem em quais bairros?",
    a: "Atendemos Fortaleza e região metropolitana, com foco em Messejana e bairros próximos. Consulte a disponibilidade para o seu endereço através do WhatsApp ou formulário de contato.",
  },
  {
    q: "Tem fidelidade?",
    a: "Não! Nossos planos residenciais não possuem fidelidade. Você pode cancelar quando quiser sem multa.",
  },
  {
    q: "Como consultar segunda via do boleto?",
    a: "Acesse a Central do Assinante com seu CPF e senha. Lá você pode consultar faturas, gerar segunda via e acompanhar seu histórico de pagamentos.",
  },
  {
    q: "Vocês oferecem suporte técnico?",
    a: "Sim! Temos suporte técnico disponível para atender você. Entre em contato pelo WhatsApp ou abra um chamado na Central do Assinante.",
  },
];

/** Opções do select do formulário (valores alinhados ao legado) */
export const TERALINK_LEAD_PLAN_OPTIONS: { value: string; label: string }[] = [
  { value: "50 Mega", label: "50 Mega — R$ 54,90" },
  { value: "80 Mega", label: "80 Mega — R$ 79,90" },
  { value: "100 Mega", label: "100 Mega — R$ 89,90" },
  { value: "200 Mega", label: "200 Mega — R$ 99,90" },
  { value: "Empresarial", label: "Plano empresarial" },
];

export function teralinkBadgeLabel(kind: TeralinkPlanBadge): string {
  if (kind === "popular") return "Mais popular";
  if (kind === "recomendado") return "Recomendado";
  return "Melhor valor";
}
