import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles } from "@/lib/comex-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Artículo no disponible" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `${loaderData.article.title} | Tu Asesor de Comex`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.article.excerpt },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.article.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs text-ink-foreground/60 hover:text-signal"
          >
            <ArrowLeft className="size-3.5" />
            Centro educativo
          </Link>
          <p className="label-mono mt-8 text-signal">{article.category}</p>
          <h1 className="mt-5 font-display text-3xl leading-tight font-bold text-balance sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-6 font-mono text-xs text-ink-foreground/50">
            {article.readingTime} de lectura
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="border-l-2 border-signal pl-5 text-base leading-relaxed font-medium">
          {article.excerpt}
        </p>
        <div className="mt-10 space-y-6">
          {article.body.map((p) => (
            <p key={p.slice(0, 40)} className="text-base leading-relaxed text-foreground/85">
              {p}
            </p>
          ))}
        </div>

        <p className="mt-14 border border-border bg-secondary/50 p-6 text-xs leading-relaxed text-muted-foreground">
          Contenido educativo e informativo. No constituye asesoría jurídica, tributaria, aduanera,
          contable ni financiera, y no reemplaza la validación con las entidades competentes ni con
          profesionales habilitados. Toda decisión comercial es responsabilidad del usuario.
        </p>
      </article>

      <div className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-mono text-muted-foreground">Sigue leyendo</p>
          <div className="mt-6 grid gap-px border border-border bg-border md:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="bg-card p-7 transition-colors hover:bg-secondary"
              >
                <p className="label-mono text-muted-foreground">{a.category}</p>
                <h2 className="mt-4 font-display text-base leading-snug font-semibold">{a.title}</h2>
                <span className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
                  Leer <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
