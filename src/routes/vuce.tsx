import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'VUCE Colombia | Permisos para importar';
const description = 'Cómo funcionan registros, licencias y vistos buenos en la VUCE.';

export const Route = createFileRoute("/vuce")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/vuce" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/vuce" }],
  }),
  component: VucePage,
});

function VucePage() {
  return <GuideRoute slug="vuce" />;
}
