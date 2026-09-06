import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'Aranceles en Colombia | Explicación práctica';
const description = 'Cómo funcionan los aranceles, el valor en aduana y las preferencias de origen.';

export const Route = createFileRoute("/aranceles")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/aranceles" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/aranceles" }],
  }),
  component: ArancelesPage,
});

function ArancelesPage() {
  return <GuideRoute slug="aranceles" />;
}
