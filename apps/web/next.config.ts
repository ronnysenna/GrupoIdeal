import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "standalone",
  transpilePackages: ["@ideal/db", "@ideal/validators", "@ideal/emails", "@ideal/ui"],
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/cidades/idealnet-unified.html", destination: "/idealnet", permanent: true },
      { source: "/cidades/idealnet-unified", destination: "/idealnet", permanent: true },
      { source: "/cidades/teralink", destination: "/teralink", permanent: true },
      { source: "/cidades/teralink/", destination: "/teralink", permanent: true },
      { source: "/cidades/teralink/index.html", destination: "/teralink", permanent: true },
      { source: "/cidades/teralink/forms", destination: "/teralink/cadastro", permanent: true },
      { source: "/cidades/teralink/forms/", destination: "/teralink/cadastro", permanent: true },
      { source: "/cidades/palmacia", destination: "/palmacia", permanent: true },
      { source: "/cidades/palmacia/", destination: "/palmacia", permanent: true },
      { source: "/cidades/palmacia/forms", destination: "/palmacia/cadastro", permanent: true },
      { source: "/cidades/palmacia/forms/", destination: "/palmacia/cadastro", permanent: true },
      { source: "/cidades/pacoti", destination: "/pacoti", permanent: true },
      { source: "/cidades/pacoti/", destination: "/pacoti", permanent: true },
      { source: "/cidades/pacoti/forms", destination: "/pacoti/cadastro", permanent: true },
      { source: "/cidades/pacoti/forms/", destination: "/pacoti/cadastro", permanent: true },
      { source: "/cidades/ibicuitinga", destination: "/ibicuitinga", permanent: true },
      { source: "/cidades/ibicuitinga/", destination: "/ibicuitinga", permanent: true },
      { source: "/cidades/ibicuitinga/forms", destination: "/ibicuitinga/cadastro", permanent: true },
      { source: "/cidades/ibicuitinga/forms/", destination: "/ibicuitinga/cadastro", permanent: true },
      { source: "/img/:path*", destination: "/images/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
