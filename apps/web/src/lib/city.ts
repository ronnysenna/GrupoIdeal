import type { City } from "@ideal/db";

const map: Record<string, City> = {
  teralink: "TERALINK",
  palmacia: "PALMACIA",
  pacoti: "PACOTI",
  ibicuitinga: "IBICUITINGA",
};

export function pathSegmentToCity(segment: string): City | null {
  const k = segment.toLowerCase();
  return map[k] ?? null;
}

const labels: Record<City, string> = {
  TERALINK: "Teralink (Fortaleza)",
  PALMACIA: "Ideal Net - Palmácia/CE",
  PACOTI: "Ideal Net - Pacoti/CE",
  IBICUITINGA: "Ideal Net - Ibicuitinga/CE",
};

export function cityLabel(city: City): string {
  return labels[city] ?? "Grupo Ideal";
}
