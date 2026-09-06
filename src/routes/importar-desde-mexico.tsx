import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'Importar desde México a Colombia | Guía';
const description = 'Origen, documentos, requisitos y costos para importar desde México.';

export const Route = createFileRoute("/importar-desde-mexico")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/importar-desde-mexico" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/importar-desde-mexico" }],
  }),
  component: ImportarDesdeMexicoPage,
});

function ImportarDesdeMexicoPage() {
  return <GuideRoute slug="importar-desde-mexico" />;
}
