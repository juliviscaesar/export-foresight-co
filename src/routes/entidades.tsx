import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { EntityCards } from "@/components/entity-cards";

const title = "Entidades de control en comercio exterior | Tu Asesor de Comex";
const description =
  "DIAN, ICA, INVIMA, VUCE, MinCIT, ProColombia, Banco de la República y Policía Antinarcóticos: qué hace cada entidad y cuándo afecta tu operación.";

export const Route = createFileRoute("/entidades")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: EntidadesPage,
});

function EntidadesPage() {
  return (
    <>
      <PageHero
        kicker="Mapa institucional"
        title="Ocho entidades. Ocho momentos distintos de tu operación."
        description="Ninguna operación pasa por una sola autoridad. Saber quién interviene, en qué etapa y con qué exigencia es lo que separa un cronograma realista de uno improvisado."
      />
      <Section>
        <EntityCards />
        <p className="mt-10 max-w-3xl border-l-2 border-signal pl-4 text-xs leading-relaxed text-muted-foreground">
          Descripción informativa de funciones institucionales con fines educativos. No representamos
          a ninguna entidad, no gestionamos trámites ante ellas y no actuamos como intermediarios.
          Consulta siempre la fuente oficial y los profesionales habilitados que correspondan.
        </p>
      </Section>
    </>
  );
}
