import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { ImportMap } from "@/components/import-map";
import { FlowDiagram } from "@/components/flow-diagram";

const title = "Mapa de una importación paso a paso | Tu Asesor de Comex";
const description =
  "Recorre las siete etapas de una importación en Colombia con sus riesgos, documentos y preguntas clave antes de comprometer capital.";

export const Route = createFileRoute("/mapa-importacion")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MapaPage,
});

function MapaPage() {
  return (
    <>
      <PageHero
        kicker="Mapa interactivo"
        title="Mapa de una importación."
        description="Del producto al mercado colombiano. Cada etapa tiene riesgos propios, documentos que la sustentan y preguntas que deberías responder antes de avanzar a la siguiente."
      />

      <Section>
        <p className="label-mono text-muted-foreground">Cadena de decisión</p>
        <div className="mt-6">
          <FlowDiagram />
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <ImportMap />
        <p className="mt-10 max-w-3xl border-l-2 border-signal pl-4 text-xs leading-relaxed text-muted-foreground">
          Contenido educativo de referencia. La secuencia, documentos y requisitos reales varían según
          el producto, el régimen aplicable y la normatividad vigente; deben validarse con las
          entidades competentes y con profesionales habilitados.
        </p>
      </Section>
    </>
  );
}
