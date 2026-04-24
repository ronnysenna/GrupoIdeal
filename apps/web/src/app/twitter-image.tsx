import { DefaultOgResponse } from "@/lib/og-default";

export const alt = "Ideal Soluções — Conectividade e tecnologia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return DefaultOgResponse();
}
