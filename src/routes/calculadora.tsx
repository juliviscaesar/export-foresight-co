import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { Calculator } from "@/components/calculator";

const title = "Calcula tu operación en 60 segundos | Tu Asesor de Comex";
const description =
  "Calculadora orientativa de importación: valor CIF, seguro 0,35%, arancel, IVA, costos locales y costo unitario puesto en bodega, con TRM automática.";

export const Route = createFileRoute("/calculadora")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CalculadoraPage,
});

function CalculadoraPage() {
  return (
    <>
      <PageHero
        kicker="Herramienta educativa"
        title="Calcula tu operación en 60 segundos."
        description="Una estimación rápida para saber si vale la pena seguir analizando. El seguro se estima en 0,35% del valor CIF y la TRM se toma automáticamente de datos abiertos cuando la fuente responde; siempre puedes editarla."
      />

      <Section>
        <Calculator />
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          kicker="Cómo leer el resultado"
          title="El número no es la respuesta: es el punto de partida"
        />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {[
            {
              t: "El arancel depende de la subpartida",
              d: "Si la clasificación cambia, cambia el arancel, el IVA y hasta los permisos exigidos. Verifica la subpartida antes de confiar en el cálculo.",
            },
            {
              t: "El IVA se paga antes de vender",
              d: "Aunque sea descontable, hay que desembolsarlo para obtener el levante. Es un tema de caja, no solo contable.",
            },
            {
              t: "Faltan siempre costos ocultos",
              d: "Inspecciones, bodegaje, demoras, gastos bancarios y diferencia en cambio. Un modelo completo los proyecta por escenarios.",
            },
          ].map((c) => (
            <div key={c.t} className="bg-card p-8">
              <h3 className="font-display text-base font-semibold">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
