import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'INVIMA para importadores | Requisitos y guía';
const description = 'Cuándo interviene INVIMA y qué revisar antes de importar productos regulados.';

export const Route = createFileRoute("/invima")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/invima" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/invima" }],
  }),
  component: InvimaPage,
});

function InvimaPage() {
  return <GuideRoute slug="invima" />;
}
