import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'Partidas arancelarias en Colombia | Guía clara';
const description = 'Entiende cómo la partida arancelaria define impuestos, permisos y controles.';

export const Route = createFileRoute("/partidas-arancelarias")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/partidas-arancelarias" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/partidas-arancelarias" }],
  }),
  component: PartidasArancelariasPage,
});

function PartidasArancelariasPage() {
  return <GuideRoute slug="partidas-arancelarias" />;
}
