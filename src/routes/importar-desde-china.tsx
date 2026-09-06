import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'Importar desde China a Colombia | Guía 2026';
const description = 'Proveedor, Incoterm, requisitos y costo real antes de importar desde China.';

export const Route = createFileRoute("/importar-desde-china")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/importar-desde-china" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/importar-desde-china" }],
  }),
  component: ImportarDesdeChinaPage,
});

function ImportarDesdeChinaPage() {
  return <GuideRoute slug="importar-desde-china" />;
}
