import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'Cómo importar a Colombia | Guía práctica 2026';
const description = 'Pasos, requisitos y costos para importar a Colombia con criterio antes de comprar.';

export const Route = createFileRoute("/como-importar-a-colombia")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/como-importar-a-colombia" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/como-importar-a-colombia" }],
  }),
  component: ComoImportarAColombiaPage,
});

function ComoImportarAColombiaPage() {
  return <GuideRoute slug="como-importar-a-colombia" />;
}
