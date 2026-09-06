import { createFileRoute } from "@tanstack/react-router";
import { GuideRoute } from "@/components/guide-route";

const title = 'Requisitos para importar a Colombia | Guía';
const description = 'Permisos, registros, entidades y documentos que debes revisar antes de embarcar.';

export const Route = createFileRoute("/requisitos-importacion")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://export-foresight-co.lovable.app/requisitos-importacion" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://export-foresight-co.lovable.app/requisitos-importacion" }],
  }),
  component: RequisitosImportacionPage,
});

function RequisitosImportacionPage() {
  return <GuideRoute slug="requisitos-importacion" />;
}
