import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'Cuánto cuesta importar a Colombia | Costo real';
const description = 'Calcula mercancía, transporte, arancel, IVA y costos locales de una importación.';

export const Route = createFileRoute("/cuanto-cuesta-importar-a-colombia")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/cuanto-cuesta-importar-a-colombia" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/cuanto-cuesta-importar-a-colombia" }],
  }),
  component: CuantoCuestaImportarAColombiaPage,
});

function CuantoCuestaImportarAColombiaPage() {
  return <GuideRoute slug="cuanto-cuesta-importar-a-colombia" />;
}
