import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'Incoterms explicados fácil | Tu Asesor de Comex';
const description = 'FOB, CIF y otras reglas: quién paga, quién asume el riesgo y hasta dónde.';

export const Route = createFileRoute("/incoterms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/incoterms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/incoterms" }],
  }),
  component: IncotermsPage,
});

function IncotermsPage() {
  return <GuideRoute slug="incoterms" />;
}
