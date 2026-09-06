import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'ICA para importadores | Requisitos y controles';
const description = 'Controles sanitarios y fitosanitarios del ICA para importaciones en Colombia.';

export const Route = createFileRoute("/ica")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/ica" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/ica" }],
  }),
  component: IcaPage,
});

function IcaPage() {
  return <GuideRoute slug="ica" />;
}
