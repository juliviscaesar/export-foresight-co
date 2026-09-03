import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { articleCategories, articles } from "@/lib/comex-data";
import { cn } from "@/lib/utils";

const title = "Centro educativo de comercio exterior | Tu Asesor de Comex";
const description =
  "Artículos sobre subpartidas, arancel e IVA, Incoterms, TLC, registro sanitario, costos de importación, riesgo cambiario y exportación desde Colombia.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [category, setCategory] = useState("Todas");
  const list = category === "Todas" ? articles : articles.filter((a) => a.category === category);

  return (
    <>
      <PageHero
        kicker="Centro educativo"
        title="Publicamos para que decidas con criterio."
        description="Contenidos técnicos escritos en lenguaje claro sobre lo que realmente define el resultado de una operación de comercio exterior."
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {["Todas", ...articleCategories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={cn(
                "border px-4 py-2 text-xs transition-colors",
                category === c
                  ? "border-foreground bg-ink text-ink-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <Link
              key={a.slug}
              to="/blog/$slug"
              params={{ slug: a.slug }}
              className="group flex flex-col bg-card p-7 transition-colors hover:bg-secondary"
            >
              <p className="label-mono text-muted-foreground">{a.category}</p>
              <h2 className="mt-4 font-display text-base leading-snug font-semibold">{a.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <p className="mt-auto pt-6 font-mono text-xs text-muted-foreground">
                {a.readingTime} de lectura
              </p>
            </Link>
          ))}
        </div>
        {list.length === 0 && (
          <p className="mt-10 text-sm text-muted-foreground">
            Estamos preparando contenidos nuevos para esta categoría.
          </p>
        )}
      </Section>
    </>
  );
}
