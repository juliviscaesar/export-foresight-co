import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'Importar desde USA a Colombia | Guía práctica';
const description = 'TLC, origen, documentos y costo puesto en Colombia desde Estados Unidos.';

export const Route = createFileRoute("/importar-desde-usa")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/importar-desde-usa" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/importar-desde-usa" }],
  }),
  component: ImportarDesdeUsaPage,
});

function ImportarDesdeUsaPage() {
  return <GuideRoute slug="importar-desde-usa" />;
}
