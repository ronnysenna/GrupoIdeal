"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastroBodySchema, type CadastroBody } from "@ideal/validators";
import Image from "next/image";
import {
  Button,
  Card,
  CardHeader,
  FieldError,
  Input,
  Label,
  SelectField,
  Textarea,
} from "@ideal/ui";
import { getCadastroOptions, type CitySlug } from "@/lib/cadastro-options";
import { maskCep, maskCpf, maskPhone, onlyDigits } from "@/lib/masks";

type Props = {
  city: CitySlug;
  title: string;
  subtitle: string;
  logoSrc: "ideal" | "teralink";
};

function defaultForm() {
  return {
    website: "",
    date_cadas: "",
    nome: "",
    email: "",
    cpf: "",
    rg: "",
    fone1: "",
    fone2: "",
    nasc: "",
    plano_sede: "",
    venc: "",
    cep: "",
    endereco: "",
    bairro: "",
    obs: "",
  };
}

export function CadastroForm({ city, title, subtitle, logoSrc }: Props) {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { planOptions, vencOptions } = getCadastroOptions(city);
  const fibraPlans = planOptions.filter((p) => "group" in p && p.group === "fibra");
  const radioPlans = planOptions.filter((p) => "group" in p && p.group === "radio");
  const teralinkOnly = city === "teralink";

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(cadastroBodySchema),
    defaultValues: defaultForm(),
  });

  useEffect(() => {
    const d = new Date();
    setValue(
      "date_cadas",
      d.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    );
  }, [setValue]);

  const onCepBlur = async () => {
    const digits = onlyDigits(watch("cep") ?? "");
    if (digits.length !== 8) return;
    try {
      const r = await fetch(`/api/cep/${digits}`);
      if (!r.ok) return;
      const j = (await r.json()) as {
        logradouro: string;
        bairro: string;
      };
      if (j.logradouro) setValue("endereco", j.logradouro, { shouldValidate: true });
      if (j.bairro) setValue("bairro", j.bairro, { shouldValidate: true });
    } catch {
      // ignore
    }
  };

  const onValid = async (data: CadastroBody) => {
    setSubmitError(null);
    setSuccess(false);
    const res = await fetch(`/api/cadastro/${city}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const text = await res.text();
    let j: { success?: boolean; message?: string } = {};
    try {
      j = JSON.parse(text) as typeof j;
    } catch {
      setSubmitError("Resposta inválida do servidor.");
      return;
    }
    if (!res.ok) {
      setSubmitError(j.message ?? "Não foi possível enviar.");
      return;
    }
    if (j.success) {
      setSuccess(true);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-3xl">
      <CardHeader>
        <Image
          className="mx-auto h-[72px] w-auto"
          src={logoSrc === "teralink" ? "/images/logoteralink.png" : "/images/logoGrupoIdeal.png"}
          alt={logoSrc === "teralink" ? "Teralink" : "Grupo Ideal"}
          width={220}
          height={72}
          priority
        />
        <h1 className="mt-4 text-2xl font-semibold text-zinc-900">{title}</h1>
        <p className="text-zinc-600">{subtitle}</p>
      </CardHeader>

      {success && (
        <p className="mb-4 rounded-lg bg-emerald-50 p-3 text-center text-sm text-emerald-800">
          Cadastro enviado com sucesso! Em breve nossa equipe entra em contato.
        </p>
      )}
      {submitError && (
        <p className="mb-4 rounded-lg bg-red-50 p-3 text-center text-sm text-red-800">
          {submitError}
        </p>
      )}

      <form onSubmit={handleSubmit(onValid)} className="space-y-4">
        <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register("website")} />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="cad-date" className="mb-1 block">
              Data do cadastro
            </Label>
            <Input
              id="cad-date"
              type="text"
              readOnly
              className="bg-zinc-50"
              {...register("date_cadas")}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="cad-nome" className="mb-1 block" required>
            Nome completo
          </Label>
          <Input
            id="cad-nome"
            error={!!errors.nome}
            placeholder="Seu nome"
            {...register("nome")}
          />
          <FieldError message={errors.nome?.message} />
        </div>

        <div>
          <Label htmlFor="cad-email" className="mb-1 block" required>
            E-mail
          </Label>
          <Input
            id="cad-email"
            type="email"
            error={!!errors.email}
            placeholder="seu@email.com"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="cad-cpf" className="mb-1 block" required>
              CPF
            </Label>
            <Input
              id="cad-cpf"
              error={!!errors.cpf}
              inputMode="numeric"
              maxLength={14}
              placeholder="000.000.000-00"
              {...register("cpf", {
                onChange: (e) => {
                  e.target.value = maskCpf(e.target.value);
                },
              })}
            />
            <FieldError message={errors.cpf?.message} />
          </div>
          <div>
            <Label htmlFor="cad-rg" className="mb-1 block" required>
              RG
            </Label>
            <Input id="cad-rg" error={!!errors.rg} {...register("rg")} />
            <FieldError message={errors.rg?.message} />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="cad-fone1" className="mb-1 block" required>
              Telefone
            </Label>
            <Input
              id="cad-fone1"
              error={!!errors.fone1}
              inputMode="tel"
              placeholder="(00) 00000-0000"
              {...register("fone1", {
                onChange: (e) => {
                  e.target.value = maskPhone(e.target.value);
                },
              })}
            />
            <FieldError message={errors.fone1?.message} />
          </div>
          <div>
            <Label htmlFor="cad-fone2" className="mb-1 block">
              Telefone 2
            </Label>
            <Input
              id="cad-fone2"
              error={!!errors.fone2}
              inputMode="tel"
              placeholder="Opcional"
              {...register("fone2", {
                onChange: (e) => {
                  e.target.value = maskPhone(e.target.value);
                },
              })}
            />
            <FieldError message={errors.fone2?.message} />
          </div>
        </div>

        <div>
          <Label htmlFor="cad-nasc" className="mb-1 block" required>
            Nascimento
          </Label>
          <Input id="cad-nasc" type="date" error={!!errors.nasc} {...register("nasc")} />
          <FieldError message={errors.nasc?.message} />
        </div>

        <div>
          <Label htmlFor="cad-plano" className="mb-1 block" required>
            Plano
          </Label>
          <SelectField
            id="cad-plano"
            error={!!errors.plano_sede}
            defaultValue=""
            {...register("plano_sede")}
          >
            <option value="" disabled>
              Selecione o plano
            </option>
            {teralinkOnly
              ? planOptions.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.label}
                  </option>
                ))
              : (
                  <>
                    <optgroup label="Planos fibra (sede)">
                      {fibraPlans.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Planos rádio (localidades)">
                      {radioPlans.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </optgroup>
                  </>
                )}
          </SelectField>
          <FieldError message={errors.plano_sede?.message} />
        </div>

        <div>
          <Label htmlFor="cad-venc" className="mb-1 block" required>
            Dia de vencimento
          </Label>
          <SelectField
            id="cad-venc"
            error={!!errors.venc}
            defaultValue=""
            {...register("venc")}
          >
            <option value="" disabled>
              Selecione
            </option>
            {vencOptions.map((v) => (
              <option key={v} value={v}>
                Dia {v}
              </option>
            ))}
          </SelectField>
          <FieldError message={errors.venc?.message} />
        </div>

        <div>
          <Label htmlFor="cad-cep" className="mb-1 block" required>
            CEP
          </Label>
          <Input
            id="cad-cep"
            error={!!errors.cep}
            inputMode="numeric"
            maxLength={9}
            placeholder="00000-000"
            {...register("cep", {
              onChange: (e) => {
                e.target.value = maskCep(e.target.value);
              },
              onBlur: onCepBlur,
            })}
          />
          <p className="mt-1 text-xs text-zinc-500">O endereço pode ser preenchido automaticamente.</p>
          <FieldError message={errors.cep?.message} />
        </div>

        <div>
          <Label htmlFor="cad-endereco" className="mb-1 block" required>
            Endereço
          </Label>
          <Input id="cad-endereco" error={!!errors.endereco} {...register("endereco")} />
          <FieldError message={errors.endereco?.message} />
        </div>

        <div>
          <Label htmlFor="cad-bairro" className="mb-1 block" required>
            Bairro
          </Label>
          <Input id="cad-bairro" error={!!errors.bairro} {...register("bairro")} />
          <FieldError message={errors.bairro?.message} />
        </div>

        <div>
          <Label htmlFor="cad-obs" className="mb-1 block">
            Ponto de referência
          </Label>
          <Textarea id="cad-obs" rows={2} {...register("obs")} />
        </div>

        <Button type="submit" className="w-full rounded-xl py-3 text-sm font-semibold" disabled={isSubmitting}>
          {isSubmitting ? "Enviando…" : "Finalizar cadastro"}
        </Button>
      </form>
    </Card>
  );
}
