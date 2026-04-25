import type { IdealNetCityId } from "@/lib/site-config";

export type PlanTabId = "fibra" | "radio" | "empresarial";

export type PlanFibra = {
  id: string;
  name: string;
  download: string;
  upload: string;
  price: number;
  features: string[];
  badge?: "popular" | "recomendado";
  /** Destaque visual (borda) */
  featured?: boolean;
};

export type PlanRadio = {
  id: string;
  name: string;
  download: string;
  upload: string;
  price: number;
  features: string[];
};

export type PlanEmpresarial = {
  id: string;
  name: string;
  badge: string;
  priceLabel: "consulta";
  features: string[];
};

export type CityPlans = {
  fibra: PlanFibra[];
  radio: PlanRadio[];
  empresarial: PlanEmpresarial[];
};

/**
 * Preços e planos por cidade (ajustável sem mexer no layout).
 * Valores alinhados ao legado: fibra, rádio e empresarial com ofertas distintas por filial.
 */
export const IDEAL_NET_PLANS_BY_CITY: Record<IdealNetCityId, CityPlans> = {
  palmacia: {
    fibra: [
      {
        id: "f50",
        name: "50 Mega",
        download: "50 Mbps",
        upload: "25 Mbps",
        price: 79,
        features: ["Wi-Fi grátis", "Instalação inclusa", "Canais de suporte local"],
        badge: "popular",
      },
      {
        id: "f100",
        name: "100 Mega",
        download: "100 Mbps",
        upload: "50 Mbps",
        price: 99,
        features: ["Wi-Fi grátis", "Instalação inclusa", "Melhor custo-benefício"],
        badge: "recomendado",
        featured: true,
      },
      {
        id: "f200",
        name: "200 Mega",
        download: "200 Mbps",
        upload: "100 Mbps",
        price: 129,
        features: ["Wi-Fi grátis", "Instalação inclusa", "Ideal para home office"],
      },
      {
        id: "f400",
        name: "400 Mega",
        download: "400 Mbps",
        upload: "200 Mbps",
        price: 179,
        features: ["Wi-Fi 6 incluso", "Instalação inclusa", "Máxima performance"],
      },
    ],
    radio: [
      {
        id: "r10",
        name: "10 Mega",
        download: "10 Mbps",
        upload: "5 Mbps",
        price: 59,
        features: ["Rádio 5,8 GHz", "Instalação inclusa", "Onde a fibra ainda não chegou"],
      },
      {
        id: "r20",
        name: "20 Mega",
        download: "20 Mbps",
        upload: "10 Mbps",
        price: 79,
        features: ["Rádio 5,8 GHz", "Instalação inclusa", "Maior vazão em rádio"],
      },
    ],
    empresarial: [
      {
        id: "e1",
        name: "Link dedicado",
        badge: "Link dedicado",
        priceLabel: "consulta",
        features: [
          "Link dedicado exclusivo",
          "SLA garantido",
          "IP fixo incluso",
          "Suporte prioritário",
        ],
      },
      {
        id: "e2",
        name: "Fibra empresarial",
        badge: "Fusão",
        priceLabel: "consulta",
        features: [
          "Fusão óptica dedicada",
          "99,9% uptime alvo",
          "Configuração personalizada",
          "Suporte 24/7",
        ],
      },
      {
        id: "e3",
        name: "Link temporário",
        badge: "Temporário",
        priceLabel: "consulta",
        features: [
          "Para eventos e obras",
          "Instalação rápida",
          "Sem contrato longo",
          "Equipamento incluso",
        ],
      },
    ],
  },
  pacoti: {
    fibra: [
      {
        id: "f50",
        name: "50 Mega",
        download: "50 Mbps",
        upload: "25 Mbps",
        price: 84,
        features: ["Wi-Fi grátis", "Instalação inclusa", "Canais de suporte local"],
        badge: "popular",
      },
      {
        id: "f100",
        name: "100 Mega",
        download: "100 Mbps",
        upload: "50 Mbps",
        price: 104,
        features: ["Wi-Fi grátis", "Instalação inclusa", "Mais equilibrado em Pacoti"],
        badge: "recomendado",
        featured: true,
      },
      {
        id: "f200",
        name: "200 Mega",
        download: "200 Mbps",
        upload: "100 Mbps",
        price: 134,
        features: ["Wi-Fi grátis", "Instalação inclusa", "Streaming 4K estável"],
      },
      {
        id: "f400",
        name: "400 Mega",
        download: "400 Mbps",
        upload: "200 Mbps",
        price: 189,
        features: ["Wi-Fi 6 incluso", "Instalação inclusa", "Para famílias conectadas"],
      },
    ],
    radio: [
      {
        id: "r10",
        name: "10 Mega",
        download: "10 Mbps",
        upload: "5 Mbps",
        price: 64,
        features: ["Rádio 5,8 GHz", "Instalação inclusa", "Cobertura regional"],
      },
      {
        id: "r20",
        name: "20 Mega",
        download: "20 Mbps",
        upload: "10 Mbps",
        price: 84,
        features: ["Rádio 5,8 GHz", "Instalação inclusa", "Upload melhor p/ jogos"],
      },
    ],
    empresarial: [
      {
        id: "e1",
        name: "Link dedicado",
        badge: "Link dedicado",
        priceLabel: "consulta",
        features: [
          "Link dedicado exclusivo",
          "SLA garantido",
          "IP fixo incluso",
          "Suporte prioritário",
        ],
      },
      {
        id: "e2",
        name: "Fibra empresarial",
        badge: "Fusão",
        priceLabel: "consulta",
        features: [
          "Fusão óptica dedicada",
          "99,9% uptime alvo",
          "Configuração personalizada",
          "Suporte 24/7",
        ],
      },
      {
        id: "e3",
        name: "Link temporário",
        badge: "Temporário",
        priceLabel: "consulta",
        features: [
          "Para eventos e obras",
          "Instalação rápida",
          "Sem contrato longo",
          "Equipamento incluso",
        ],
      },
    ],
  },
  ibicuitinga: {
    fibra: [
      {
        id: "f50",
        name: "50 Mega",
        download: "50 Mbps",
        upload: "25 Mbps",
        price: 77,
        features: ["Wi-Fi grátis", "Instalação inclusa", "Entrada acessível"],
        badge: "popular",
      },
      {
        id: "f100",
        name: "100 Mega",
        download: "100 Mbps",
        upload: "50 Mbps",
        price: 97,
        features: ["Wi-Fi grátis", "Instalação inclusa", "Recomendado p/ famílias"],
        badge: "recomendado",
        featured: true,
      },
      {
        id: "f200",
        name: "200 Mega",
        download: "200 Mbps",
        upload: "100 Mbps",
        price: 125,
        features: ["Wi-Fi grátis", "Instalação inclusa", "P/ teletrabalho e estudo"],
      },
      {
        id: "f400",
        name: "400 Mega",
        download: "400 Mbps",
        upload: "200 Mbps",
        price: 174,
        features: ["Wi-Fi 6 incluso", "Instalação inclusa", "Topo de linha em fibra"],
      },
    ],
    radio: [
      {
        id: "r10",
        name: "10 Mega",
        download: "10 Mbps",
        upload: "5 Mbps",
        price: 57,
        features: ["Rádio 5,8 GHz", "Instalação inclusa", "Alternativa em áreas remotas"],
      },
      {
        id: "r20",
        name: "20 Mega",
        download: "20 Mbps",
        upload: "10 Mbps",
        price: 76,
        features: ["Rádio 5,8 GHz", "Instalação inclusa", "Melhor rádio da região"],
      },
    ],
    empresarial: [
      {
        id: "e1",
        name: "Link dedicado",
        badge: "Link dedicado",
        priceLabel: "consulta",
        features: [
          "Link dedicado exclusivo",
          "SLA garantido",
          "IP fixo incluso",
          "Suporte prioritário",
        ],
      },
      {
        id: "e2",
        name: "Fibra empresarial",
        badge: "Fusão",
        priceLabel: "consulta",
        features: [
          "Fusão óptica dedicada",
          "99,9% uptime alvo",
          "Configuração personalizada",
          "Suporte 24/7",
        ],
      },
      {
        id: "e3",
        name: "Link temporário",
        badge: "Temporário",
        priceLabel: "consulta",
        features: [
          "Para eventos e obras",
          "Instalação rápida",
          "Sem contrato longo",
          "Equipamento incluso",
        ],
      },
    ],
  },
};

export const IDEAL_NET_FAQ: { q: string; a: string }[] = [
  {
    q: "Como funciona a instalação?",
    a: "A equipe técnica realiza análise de viabilidade. Com cobertura confirmada, a instalação costuma levar cerca de 2 horas. O equipamento necessário é cedido conforme o plano.",
  },
  {
    q: "Tem fidelidade?",
    a: "Nossos planos residenciais seguem a política comercial da unidade, sem fidelidade abusiva. O atendente confirma condições no momento do pedido.",
  },
  {
    q: "Qual a diferença entre fibra e rádio?",
    a: "A fibra óptica oferece maior estabilidade e costuma entregar a velocidade contratada de forma consistente. O rádio 5,8 GHz é uma opção sólida onde a fibra ainda não chegou, com boa relação qualidade e cobertura.",
  },
  {
    q: "Como obter segunda via de boleto ou fatura?",
    a: "Acesse a Central do Assinante com CPF e senha. Lá é possível consultar faturas, gerar segunda via e acompanhar o consumo.",
  },
];

export const IDEAL_NET_HERO_BADGES: string[] = [
  "Instalação agilizada",
  "Suporte 24/7",
  "Sem fidelidade abusiva",
];

export const IDEAL_NET_ABOUT_STATS = [
  { n: "500+", t: "Clientes ativos" },
  { n: "99%", t: "Uptime alvo" },
  { n: "24/7", t: "Suporte" },
] as const;

export const IDEAL_NET_ABOUT_FEATURES: {
  icon: "zap" | "shield" | "brief" | "target";
  title: string;
  text: string;
}[] = [
  { icon: "zap", title: "Velocidade real", text: "Compromisso com a entrega anunciada no plano." },
  { icon: "shield", title: "Estabilidade", text: "Conexão estável, monitorada pela equipe local." },
  { icon: "brief", title: "Suporte local", text: "Técnicos e atendimento na sua região." },
  { icon: "target", title: "Transparência", text: "Condições claras antes de assinar." },
];
