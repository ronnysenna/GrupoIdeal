import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Elemento com estilos inline compatíveis com @vercel/og / next/og (sem dependências de runtime). */
export function DefaultOgResponse() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0f1e 0%, #1e3a5f 100%)",
          color: "#f8fafc",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 900,
          }}
        >
          <span
            style={{
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              color: "#93c5fd",
            }}
          >
            Ideal Soluções
          </span>
          <span
            style={{
              fontSize: 34,
              fontWeight: 500,
              color: "#94a3b8",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Conectividade, internet e soluções no Ceará
          </span>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
