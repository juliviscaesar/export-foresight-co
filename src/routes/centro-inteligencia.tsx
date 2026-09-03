import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { createFileRoute as _unused } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { articleCategories, articles } from "@/lib/comex-data";
import { cn } from "@/lib/utils";

void _unused;

const title = "Centro de Inteligencia Comex | Tu Asesor de Comex";
const description =
  "Biblioteca de comercio exterior organizada por importación, exportación, aduanas, aranceles, IVA, TLC, Incoterms, costos, entidades y requisitos.";

export const Route = createFileRoute("/centro-inteligencia")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CentroInteligencia,
});

const conceptsByCategory: Record<string, { term: string; def: string }[]> = {
  Importación: [
    {
      term: "Régimen de importación",
      def: "Destino aduanero que se le da a la mercancía al ingresar: consumo, temporal, transformación, entre otros.",
    },
    {
      term: "Levante",
      def: "Autorización de la autoridad aduanera para retirar la mercancía una vez cumplidos los requisitos.",
    },
  ],
  Exportación: [
    {
      term: "Oferta exportable",
      def: "Capacidad real y sostenida de producir, cumplir volumen y calidad para un comprador internacional.",
    },
    {
      term: "DEX / declaración de exportación",
      def: "Documento con el que se formaliza la salida de mercancía del territorio aduanero nacional.",
    },
  ],
  Aduanas: [
    {
      term: "Subpartida arancelaria",
      def: "Código de diez dígitos que identifica la mercancía y determina arancel, IVA, permisos y controles.",
    },
    {
      term: "Valoración aduanera",
      def: "Método con el que se determina el valor en aduana, base de liquidación de los tributos.",
    },
  ],
  "Aranceles e IVA": [
    {
      term: "Arancel ad valorem",
      def: "Porcentaje aplicado sobre el valor en aduana (normalmente CIF) según la subpartida.",
    },
    {
      term: "Base gravable del IVA",
      def: "Valor en aduana más el arancel liquidado; sobre ella se aplica la tarifa de IVA.",
    },
  ],
  TLC: [
    {
      term: "Regla de origen",
      def: "Criterio que define si un producto es originario de un país y puede acceder a preferencia arancelaria.",
    },
    {
      term: "Cronograma de desgravación",
      def: "Calendario pactado en el acuerdo por el cual el arancel se reduce progresivamente.",
    },
  ],
  Incoterms: [
    {
      term: "FOB",
      def: "El vendedor entrega la mercancía a bordo en origen; flete y seguro internacional son del comprador.",
    },
    {
      term: "CIF",
      def: "El vendedor cubre costo, seguro y flete hasta el puerto de destino convenido.",
    },
  ],
  Costos: [
    {
      term: "Costo puesto en bodega",
      def: "Suma de mercancía, logística, tributos, costos locales y financieros dividida por unidad.",
    },
    {
      term: "Punto de quiebre",
      def: "Nivel de TRM, volumen o precio de venta en el que la operación deja de ser rentable.",
    },
  ],
  "Requisitos y entidades": [
    {
      term: "Visto bueno",
      def: "Autorización previa de una entidad de control exigida para ciertas subpartidas.",
    },
    {
      term: "Registro sanitario",
      def: "Autorización de INVIMA para comercializar alimentos, cosméticos o dispositivos médicos.",
    },
  ],
};

function CentroInteligencia() {
  const [category, setCategory] = useState<string>("Todas");
  const filtered =
    category === "Todas" ? articles : articles.filter((a) => a.category === category);
  const concepts =
    category === "Todas"
      ? Object.values(conceptsByCategory).flat()
      : (conceptsByCategory[category] ?? []);

  return (
    <>
      <PageHero
        kicker="Centro de Inteligencia Comex"
        title="La biblioteca que deberías leer antes de cotizar."
        description="Conceptos, criterios y contenidos organizados por tema. Sin promesas, sin atajos: información para que entiendas la operación completa antes de comprometer capital."
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {["Todas", ...articleCategories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={cn(
                "border px-4 py-2 text-xs transition-colors",
                category === c
                  ? "border-foreground bg-ink text-ink-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="label-mono text-muted-foreground">
              Contenidos · {filtered.length} artículo{filtered.length === 1 ? "" : "s"}
            </p>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {filtered.map((a) => (
                <Link
                  key={a.slug}
                  to="/blog/$slug"
                  params={{ slug: a.slug }}
                  className="block py-6 transition-colors hover:bg-secondary/60"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="label-mono text-muted-foreground">{a.category}</p>
                    <p className="font-mono text-xs text-muted-foreground">{a.readingTime}</p>
                  </div>
                  <h3 className="mt-3 font-display text-lg leading-snug font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                </Link>
              ))}
              {filtered.length === 0 && (
                <p className="py-8 text-sm text-muted-foreground">
                  Estamos preparando contenidos nuevos para esta categoría.
                </p>
              )}
            </div>
          </div>

          <div>
            <p className="label-mono text-muted-foreground">Conceptos clave</p>
            <div className="mt-6 space-y-px bg-border">
              {concepts.map((c) => (
                <div key={c.term} className="bg-card p-5">
                  <p className="font-display text-sm font-semibold">{c.term}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.def}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-signal pl-4 text-xs leading-relaxed text-muted-foreground">
              Definiciones con fines educativos. La aplicación a un caso concreto depende de la
              normatividad vigente y debe validarse con profesionales habilitados.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          kicker="Cómo usar esta biblioteca"
          title="Primero el concepto, después la cotización"
          description="Recomendamos recorrer los temas en este orden cuando estás evaluando una operación nueva."
        />
        <ol className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            "Aduanas: entiende la clasificación de tu producto",
            "Requisitos y entidades: confirma permisos previos",
            "Aranceles, IVA y TLC: calcula la carga tributaria",
            "Incoterms y costos: define tu costo real y tu margen",
          ].map((step, i) => (
            <li key={step} className="bg-card p-7">
              <span className="font-mono text-xs text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-sm leading-snug font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
