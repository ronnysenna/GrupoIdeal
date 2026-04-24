import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

export type NovoCadastroData = {
  cityLabel: string;
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  fone1: string;
  fone2?: string;
  nasc: string;
  plano: string;
  venc: string;
  cep: string;
  endereco: string;
  bairro: string;
  obs?: string;
};

export const NovoCadastroEmail = ({ data }: { data: NovoCadastroData }) => (
  <Html lang="pt-BR">
    <Head />
    <Preview>Novo cadastro de cliente — {data.cityLabel}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={title}>Novo cadastro de cliente</Text>
        <Text style={subtitle}>{data.cityLabel}</Text>
        <Section style={table}>
          <Row style={row}>
            <Text style={key}>Nome</Text>
            <Text style={val}>{data.nome}</Text>
          </Row>
          <Row style={row}>
            <Text style={key}>E-mail</Text>
            <Text style={val}>{data.email}</Text>
          </Row>
          <Row style={row}>
            <Text style={key}>CPF</Text>
            <Text style={val}>{data.cpf}</Text>
          </Row>
          <Row style={row}>
            <Text style={key}>RG</Text>
            <Text style={val}>{data.rg}</Text>
          </Row>
          <Row style={row}>
            <Text style={key}>Telefone</Text>
            <Text style={val}>{data.fone1}</Text>
          </Row>
          {data.fone2 ? (
            <Row style={row}>
              <Text style={key}>Telefone 2</Text>
              <Text style={val}>{data.fone2}</Text>
            </Row>
          ) : null}
          <Row style={row}>
            <Text style={key}>Nascimento</Text>
            <Text style={val}>{data.nasc}</Text>
          </Row>
          <Row style={row}>
            <Text style={key}>Plano</Text>
            <Text style={val}>{data.plano}</Text>
          </Row>
          <Row style={row}>
            <Text style={key}>Vencimento</Text>
            <Text style={val}>Dia {data.venc}</Text>
          </Row>
          <Row style={row}>
            <Text style={key}>CEP</Text>
            <Text style={val}>{data.cep}</Text>
          </Row>
          <Row style={row}>
            <Text style={key}>Endereço</Text>
            <Text style={val}>{data.endereco}</Text>
          </Row>
          <Row style={row}>
            <Text style={key}>Bairro</Text>
            <Text style={val}>{data.bairro}</Text>
          </Row>
          {data.obs ? (
            <Row style={row}>
              <Text style={key}>Observação</Text>
              <Text style={val}>{data.obs}</Text>
            </Row>
          ) : null}
        </Section>
        <Hr style={hr} />
        <Text style={foot}>E-mail automático do sistema de cadastro.</Text>
      </Container>
    </Body>
  </Html>
);

const main = { backgroundColor: "#f4f4f5", fontFamily: "Inter, sans-serif" };
const container = { margin: "0 auto", padding: "24px", maxWidth: "560px" };
const title = { fontSize: "20px", fontWeight: 700, color: "#0052cc", margin: "0 0 4px" };
const subtitle = { fontSize: "14px", color: "#334155", margin: "0 0 20px" };
const table = { width: "100%" };
const row = { margin: "0 0 6px" };
const key = { display: "inline-block", width: "120px", fontSize: "13px", color: "#64748b", margin: 0, verticalAlign: "top" };
const val = { display: "inline-block", fontSize: "13px", color: "#0f172a", margin: 0, maxWidth: "400px" };
const hr = { borderColor: "#e2e8f0" };
const foot = { fontSize: "11px", color: "#94a3b8", margin: "12px 0 0" };
