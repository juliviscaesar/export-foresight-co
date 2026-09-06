import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
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
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.article.title,
            description: loaderData.article.excerpt,
            dateModified: "2026-09-04",
            publisher: { "@type": "Organization", name: "Tu Asesor de Comex" },
          }),
        },
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
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <nav aria-label="Migas de pan" className="flex items-center gap-2 text-xs text-ink-foreground/55">
            <Link to="/">Inicio</Link><span>/</span><Link to="/blog">Centro educativo</Link><span>/</span><span className="text-signal">{article.category}</span>
          </nav>
          <p className="label-mono mt-8 text-signal">{article.category}</p>
          <h1 className="mt-5 font-display text-5xl leading-[.92] text-balance sm:text-7xl">
            {article.title}
          </h1>
          <p className="mt-6 font-mono text-xs text-ink-foreground/50">
            {article.readingTime} de lectura · Actualizado el 4 de septiembre de 2026
          </p>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-display text-3xl leading-tight">
          {article.excerpt}
        </p>
        <div className="mt-10 space-y-6">
          {article.body.map((p) => (
            <p key={p.slice(0, 40)} className="text-base leading-relaxed text-foreground/85">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-secondary p-6">
          <p className="label-mono text-muted-foreground">Fuentes oficiales para validar</p>
          <div className="mt-4 flex flex-wrap gap-5">
            <a href="https://www.dian.gov.co/aduanas/Paginas/Inicio.aspx" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-signal decoration-2 underline-offset-4">DIAN <ExternalLink className="size-3.5" /></a>
            <a href="https://www.vuce.gov.co/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-signal decoration-2 underline-offset-4">VUCE <ExternalLink className="size-3.5" /></a>
          </div>
        </div>
        <p className="mt-6 rounded-2xl bg-secondary/50 p-6 text-xs leading-relaxed text-muted-foreground">
          Contenido educativo e informativo. No constituye asesoría jurídica, tributaria, aduanera,
          contable ni financiera, y no reemplaza la validación con las entidades competentes ni con
          profesionales habilitados. Toda decisión comercial es responsabilidad del usuario.
        </p>
      </article>

      <div className="border-t border-border py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="label-mono text-muted-foreground">Sigue leyendo</p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="rounded-2xl bg-card p-7 transition-transform hover:-translate-y-1 editorial-shadow"
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
