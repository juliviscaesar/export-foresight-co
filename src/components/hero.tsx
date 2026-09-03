import { Link } from "@tanstack/react-router";
import { ArrowRight, Activity } from "lucide-react";
import { FlowDiagram } from "./flow-diagram";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-ink text-ink-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 30% 0%, black, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32">
        <div className="flex items-center gap-3">
          <span className="flex size-1.5 animate-pulse rounded-full bg-signal" />
          <p className="label-mono text-signal">Asesoría estratégica · Educación · Colombia</p>
        </div>

        <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[0.95] font-bold text-balance sm:text-6xl lg:text-7xl">
          COMERCIO EXTERIOR,
          <br />
          SIN ADIVINAR.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-foreground/70">
          Analizamos, explicamos y prevenimos riesgos antes de que se ejecute una operación. Te
          entregamos criterio, números y preguntas correctas para decidir. No ejecutamos actividades
          reguladas.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/calculadora"
            className="group inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3.5 text-sm font-semibold text-signal-foreground transition-transform hover:-translate-y-0.5"
          >
            Calcula tu operación en 60 segundos
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/centro-inteligencia"
            className="inline-flex items-center gap-2 rounded-sm border border-ink-foreground/25 px-6 py-3.5 text-sm font-medium transition-colors hover:border-signal hover:text-signal"
          >
            Explora el Centro de Inteligencia
          </Link>
          <Link
            to="/diagnostico"
            className="inline-flex items-center gap-2 text-sm text-ink-foreground/70 underline decoration-ink-foreground/30 underline-offset-4 hover:text-signal"
          >
            <Activity className="size-4" />
            Detecta riesgos antes de importar
          </Link>
        </div>

        <div className="mt-20">
          <p className="label-mono text-ink-foreground/40">
            La cadena de decisiones que analizamos contigo
          </p>
          <div className="mt-6">
            <FlowDiagram variant="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
