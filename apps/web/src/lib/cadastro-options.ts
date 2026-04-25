export type CitySlug = "teralink" | "palmacia" | "pacoti" | "ibicuitinga";

const idealNetPlanOptions = [
  { value: "50MB", label: "50 Mega - R$ 49,90", group: "fibra" as const },
  { value: "100MB", label: "100 Mega - R$ 59,90", group: "fibra" as const },
  { value: "200MB", label: "200 Mega - R$ 79,90", group: "fibra" as const },
  { value: "300MB", label: "300 Mega - R$ 99,90", group: "fibra" as const },
  { value: "400MB", label: "400 Mega - R$ 149,90", group: "fibra" as const },
  { value: "10MB", label: "10 Mega - R$ 49,90", group: "radio" as const },
  { value: "20MB", label: "20 Mega - R$ 59,90", group: "radio" as const },
];

const teralinkPlanOptions = [
  { value: "50MB", label: "50 Mega - R$ 54,90" },
  { value: "80MB", label: "80 Mega - R$ 79,90" },
  { value: "100MB", label: "100 Mega - R$ 89,90" },
  { value: "200MB", label: "200 Mega - R$ 99,90" },
];

const idealVenc = ["05", "10", "15", "20", "25"] as const;
const teralinkVenc = ["05", "10", "20", "25"] as const;

export function getCadastroOptions(city: CitySlug) {
  if (city === "teralink") {
    return {
      planOptions: teralinkPlanOptions,
      vencOptions: [...teralinkVenc],
    };
  }
  return {
    planOptions: idealNetPlanOptions,
    vencOptions: [...idealVenc],
  };
}

export function toApiPath(city: CitySlug): string {
  return city;
}
