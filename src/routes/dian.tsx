import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'DIAN y comercio exterior | Guía para importar';
const description = 'Clasificación, valoración, tributos y control aduanero explicados con claridad.';

export const Route = createFileRoute("/dian")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/dian" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/dian" }],
  }),
  component: DianPage,
});

function DianPage() {
  return <GuideRoute slug="dian" />;
}
