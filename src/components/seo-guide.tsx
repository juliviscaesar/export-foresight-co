import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";

export type GuideData = {
  title: string;
  eyebrow: string;
  intro: string;
  points: { title: string; text: string }[];
  faq: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
};

export function SeoGuide({ data }: { data: GuideData }) {
  return (
    <>
      <header className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <nav aria-label="Migas de pan" className="flex items-center gap-2 text-xs text-ink-foreground/50">
            <Link to="/">Inicio</Link><span>/</span><Link to="/centro-inteligencia">Centro de Inteligencia</Link><span>/</span><span className="text-signal">{data.eyebrow}</span>
          </nav>
          <p className="label-mono mt-12 text-signal">Guía práctica · Colombia</p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[.9] text-balance sm:text-7xl">{data.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/70">{data.intro}</p>
          <p className="label-mono mt-10 text-ink-foreground/40">Actualizado: septiembre de 2026 · 8 min de lectura</p>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[220px_1fr]">
          <aside className="h-fit md:sticky md:top-24">
            <p className="label-mono text-coral">En esta guía</p>
            <ol className="mt-5 space-y-3 text-sm text-muted-foreground">
              {data.points.map((point, index) => <li key={point.title}>{String(index + 1).padStart(2, "0")} · {point.title}</li>)}
            </ol>
          </aside>
          <div>
            <p className="font-display text-3xl leading-tight text-foreground">La idea corta: primero entiende la operación; después decides si vale la pena ejecutarla.</p>
            <div className="mt-12 space-y-14">
              {data.points.map((point, index) => (
                <section key={point.title}>
                  <p className="font-mono text-xs text-coral">0{index + 1}</p>
                  <h2 className="mt-3 font-display text-4xl leading-none">{point.title}</h2>
                  <p className="mt-5 text-base leading-8 text-foreground/75">{point.text}</p>
                </section>
              ))}
            </div>

            <section className="mt-20 rounded-3xl bg-sun p-7 text-sun-foreground md:p-10">
              <p className="label-mono">Preguntas frecuentes</p>
              <div className="mt-6 divide-y divide-sun-foreground/20">
                {data.faq.map((item) => (
                  <details key={item.question} className="group py-5">
                    <summary className="cursor-pointer list-none font-display text-2xl">{item.question}</summary>
                    <p className="mt-3 max-w-2xl text-sm leading-7 opacity-75">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-14">
              <p className="flex items-center gap-2 label-mono text-muted-foreground"><BookOpen className="size-4" /> Fuentes oficiales</p>
              <ul className="mt-4 space-y-3">
                {data.sources.map((source) => (
                  <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-signal decoration-2 underline-offset-4">{source.label}<ExternalLink className="size-3.5" /></a></li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </article>

      <section className="bg-secondary py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div><p className="label-mono text-coral">Siguiente paso</p><h2 className="mt-2 font-display text-3xl">Lleva la teoría a tus números.</h2></div>
          <Link to="/calculadora" className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-ink-foreground">Calcular mi operación <ArrowRight className="size-4" /></Link>
        </div>
      </section>
    </>
  );
}