import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { RiskQuiz } from "@/components/risk-quiz";

const title = "Detecta riesgos antes de importar | Tu Asesor de Comex";
const description =
  "Cuestionario de autoevaluación en siete preguntas que devuelve un semáforo orientativo, no jurídico, sobre tu nivel de exposición al importar.";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DiagnosticoPage,
});

function DiagnosticoPage() {
  return (
    <>
      <PageHero
        kicker="Autoevaluación"
        title="Detecta riesgos antes de importar."
        description="Siete preguntas sobre lo que suele fallar antes de que la carga se embarque. El resultado es un semáforo orientativo y educativo, no un concepto jurídico."
      />
      <Section>
        <RiskQuiz />
      </Section>
    </>
  );
}
