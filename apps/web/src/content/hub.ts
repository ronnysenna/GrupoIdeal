/**
 * Conteúdo central da home (hub) do Grupo Ideal.
 * Editar texto/CTA/cards aqui — o JSX consome só os tipos abaixo.
 */

export type HubBrandId =
  | "idealnet"
  | "teralink"
  | "rastreamento"
  | "solucoesDigitais";

export type HubBrand = {
  id: HubBrandId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  badge: string;
  href: string;
  external: boolean;
  cta: string;
  /** Token de cor (Tailwind) usado em borda/halo no hover. */
  accent: {
    text: string;
    border: string;
    bgSoft: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
  };
  iconKey: "wifi" | "fiber" | "tracker" | "code";
};

export const HUB_PHONE_DISPLAY = "(85) 99190-4540";
export const HUB_PHONE_TEL = "+5585991904540";
export const HUB_PHONE_WA = "5585991904540";
export const HUB_EMAIL = "contato@idealsolucoes.com.br";

export const RASTREAMENTO_PHONE_DISPLAY = "(85) 4042-0510";
export const RASTREAMENTO_PHONE_TEL = "+558540420510";
export const RASTREAMENTO_EMAIL = "rastro@gmail.com";
/** Endereço comercial (material de campanha). */
export const RASTREAMENTO_ADDRESS =
  "Av. A, 1300 - LJ2 - Sítio São João - Fortaleza/CE";
export const RASTREAMENTO_URL = "/rastreamento";
/** Telefone e WhatsApp: mesmo ramal (fixo com WhatsApp Business). E.164 sem +. */
export const RASTREAMENTO_WHATSAPP_PARAM = "558540420510";
export const RASTREAMENTO_WHATSAPP_DISPLAY = RASTREAMENTO_PHONE_DISPLAY;

/** Filiais da Ideal NET — e-mail, endereço e WhatsApp oficiais por cidade. */
export type IdealNetFilialId = "palmacia" | "pacoti" | "ibicuitinga";

export type IdealNetFilialContact = {
  id: IdealNetFilialId;
  cityLabel: string;
  address: string;
  email: string;
  whatsappDisplay: string;
  /** Parâmetro `phone` da API do WhatsApp (apenas dígitos, com DDI 55). */
  whatsappPhoneParam: string;
};

export const IDEAL_NET_FILIAIS: IdealNetFilialContact[] = [
  {
    id: "palmacia",
    cityLabel: "Palmácia",
    address: "Rua José de Lima Luz, 82 - Centro - Palmácia- CE",
    email: "palmacia@provedoridealnet.com",
    whatsappDisplay: "(85) 99202-5109",
    whatsappPhoneParam: "5585992025109",
  },
  {
    id: "pacoti",
    cityLabel: "Pacoti",
    address: "Rua Pe. Quiliano, s/n - Centro - Pacoti - CE",
    email: "pacoti@provedoridealnet.com",
    whatsappDisplay: "(85) 99202-5109",
    whatsappPhoneParam: "5585992025109",
  },
  {
    id: "ibicuitinga",
    cityLabel: "Ibicuitinga",
    address: "Av. José Furtado, 1713 - Centro - Ibicuitinga - CE",
    email: "Ibicuitinga@provedoridealnet.com",
    whatsappDisplay: "(88) 99228-0155",
    whatsappPhoneParam: "5588992280155",
  },
];

export function getIdealNetFilialByCityName(
  cityName: string,
): IdealNetFilialContact | undefined {
  return IDEAL_NET_FILIAIS.find((f) => f.cityLabel === cityName);
}

export const HUB_BRANDS: HubBrand[] = [
  {
    id: "idealnet",
    name: "Ideal NET",
    shortName: "Ideal NET",
    tagline: "Internet de fibra para o interior do Ceará",
    description:
      "Provedor regional com fibra óptica e atendimento próximo em Palmácia, Pacoti e Ibicuitinga.",
    badge: "3 cidades · CE",
    href: "/idealnet",
    external: false,
    cta: "Ver planos e cidades",
    accent: {
      text: "text-blue-300",
      border: "hover:border-blue-400/60",
      bgSoft: "bg-blue-500/10",
      glow: "group-hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.55)]",
      badgeBg: "bg-blue-500/15",
      badgeText: "text-blue-200",
    },
    iconKey: "wifi",
  },
  {
    id: "teralink",
    name: "Teralink Fibra",
    shortName: "Teralink",
    tagline: "Internet residencial e empresarial em Fortaleza",
    description:
      "Fibra dedicada na capital cearense, com planos a partir de R$ 54,90 e suporte local.",
    badge: "Fortaleza · CE",
    href: "/teralink",
    external: false,
    cta: "Conhecer planos",
    accent: {
      text: "text-cyan-200",
      border: "hover:border-cyan-400/60",
      bgSoft: "bg-cyan-500/10",
      glow: "group-hover:shadow-[0_0_60px_-15px_rgba(34,211,238,0.55)]",
      badgeBg: "bg-cyan-500/15",
      badgeText: "text-cyan-100",
    },
    iconKey: "fiber",
  },
  {
    id: "rastreamento",
    name: "Ideal Rastreamento",
    shortName: "Rastreamento",
    tagline: "Monitoramento veicular em todo o Brasil",
    description:
      "Rastreio em tempo real, telemetria, alertas inteligentes e bloqueio remoto para frotas e veículos particulares.",
    badge: "Atendimento BR",
    href: RASTREAMENTO_URL,
    external: false,
    cta: "Proteger meu veículo",
    accent: {
      text: "text-amber-200",
      border: "hover:border-amber-400/60",
      bgSoft: "bg-amber-500/10",
      glow: "group-hover:shadow-[0_0_60px_-15px_rgba(251,191,36,0.55)]",
      badgeBg: "bg-amber-500/15",
      badgeText: "text-amber-100",
    },
    iconKey: "tracker",
  },
  {
    id: "solucoesDigitais",
    name: "Ideal Soluções Digitais",
    shortName: "Soluções Digitais",
    tagline: "Sites, sistemas e automações com IA",
    description:
      "Desenvolvimento sob medida: sites, plataformas web, integrações e agentes de IA para automatizar o seu negócio.",
    badge: "Mais procurado",
    href: "https://www.idealsolucoes.com.br",
    external: true,
    cta: "Solicitar orçamento",
    accent: {
      text: "text-violet-200",
      border: "hover:border-violet-400/60",
      bgSoft: "bg-violet-500/10",
      glow: "group-hover:shadow-[0_0_60px_-15px_rgba(167,139,250,0.55)]",
      badgeBg: "bg-violet-500/15",
      badgeText: "text-violet-100",
    },
    iconKey: "code",
  },
];

export type HubPillar = {
  title: string;
  description: string;
  iconKey: "shield" | "headset" | "rocket" | "users";
};

export const HUB_PILLARS: HubPillar[] = [
  {
    title: "Suporte 24/7",
    description:
      "Equipe técnica disponível todos os dias, com canais humanos no WhatsApp e telefone.",
    iconKey: "headset",
  },
  {
    title: "Time local, atendimento próximo",
    description:
      "Pessoas da região atendendo a região: visitas técnicas rápidas e contato direto.",
    iconKey: "users",
  },
  {
    title: "Tecnologia de ponta",
    description:
      "Infraestrutura de fibra óptica, redundância de links e plataformas modernas em toda a operação.",
    iconKey: "rocket",
  },
  {
    title: "Compromisso e transparência",
    description:
      "Contratos claros, planos sem letras miúdas e relacionamento de longo prazo com cada cliente.",
    iconKey: "shield",
  },
];

export type HubCity = {
  name: string;
  state: "CE" | "BR";
  brand: "idealnet" | "teralink" | "rastreamento";
  description: string;
};

export const HUB_COVERAGE: HubCity[] = [
  {
    name: "Palmácia",
    state: "CE",
    brand: "idealnet",
    description: "Sede do maciço de Baturité da Ideal NET.",
  },
  {
    name: "Pacoti",
    state: "CE",
    brand: "idealnet",
    description: "Cobertura completa com fibra e atendimento local.",
  },
  {
    name: "Ibicuitinga",
    state: "CE",
    brand: "idealnet",
    description: "Internet de alta velocidade para o sertão central.",
  },
  {
    name: "Fortaleza",
    state: "CE",
    brand: "teralink",
    description: "Teralink Fibra para residências e empresas da capital.",
  },
  {
    name: "Brasil",
    state: "BR",
    brand: "rastreamento",
    description: "Monitoramento veicular em qualquer estado do país.",
  },
];

export type HubFaq = { q: string; a: string };

export const HUB_FAQ: HubFaq[] = [
  {
    q: "O que é o Grupo Ideal?",
    a: "Somos um grupo de tecnologia com quatro frentes: provedores de internet (Ideal NET e Teralink), monitoramento veicular (Ideal Rastreamento) e desenvolvimento de software com IA (Ideal Soluções Digitais).",
  },
  {
    q: "Em quais cidades vocês oferecem internet?",
    a: "A Ideal NET atende Palmácia, Pacoti e Ibicuitinga (CE) com fibra óptica. Em Fortaleza atuamos com a marca Teralink Fibra. Para outras regiões, fale com a gente que avaliamos a expansão.",
  },
  {
    q: "O rastreamento veicular funciona em todo o Brasil?",
    a: "Sim. A Ideal Rastreamento opera nacionalmente, com instalação em qualquer estado e plataforma de monitoramento 24/7.",
  },
  {
    q: "Vocês desenvolvem sites e sistemas sob medida?",
    a: "Sim, pela Ideal Soluções Digitais. Criamos sites, sistemas web, integrações e automações com agentes de IA — para qualquer porte de empresa.",
  },
  {
    q: "Como faço para falar com um especialista agora?",
    a: "Use o botão de WhatsApp na página ou ligue para (85) 99190-4540. Também respondemos pelo formulário no fim da página.",
  },
  {
    q: "Posso enviar uma sugestão ou reclamação?",
    a: "Pode! Use a aba “Feedback” no formulário de contato. Lemos todas as mensagens e respondemos em até dois dias úteis.",
  },
];

/**
 * NOTA INTERNA (não renderizada para o usuário final):
 * Os depoimentos abaixo são placeholders ilustrativos para fins de layout.
 * Substituir por depoimentos reais antes de divulgar amplamente.
 */
export type HubTestimonial = {
  quote: string;
  author: string;
  role: string;
  brand: HubBrandId;
};

export const HUB_TESTIMONIALS: HubTestimonial[] = [
  {
    quote:
      "Migrei pra Ideal NET e a estabilidade da fibra mudou o jeito que eu trabalho de casa. Suporte responde rápido e resolve.",
    author: "Marina A.",
    role: "Designer · Palmácia",
    brand: "idealnet",
  },
  {
    quote:
      "Teralink entregou em uma semana e a velocidade é a anunciada. Reuniões e jogos sem travar.",
    author: "Diego F.",
    role: "Cliente residencial · Fortaleza",
    brand: "teralink",
  },
  {
    quote:
      "O rastreamento da Ideal salvou minha frota duas vezes esse ano. Plataforma simples e equipe atenciosa.",
    author: "Carlos M.",
    role: "Gestor de frota · Recife",
    brand: "rastreamento",
  },
];
