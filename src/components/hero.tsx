import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-20">
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <span className="flex size-2 animate-pulse rounded-full bg-signal" />
            <p className="label-mono text-signal">Análisis comex, explicado en cristiano</p>
          </div>

          <h1 className="mt-8 max-w-4xl font-display text-6xl leading-[0.82] text-balance sm:text-7xl lg:text-[6.8rem]">
            Comercio exterior,
            <br />
            <em className="text-sun">pero sin enredos.</em>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-foreground/72 md:text-xl">
            Entiende cuánto cuesta, qué necesitas y dónde están los riesgos antes de tomar una decisión.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/calculadora"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-signal px-6 py-4 text-sm font-bold text-signal-foreground transition-transform hover:-translate-y-1"
          >
            Analiza mi operación
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/centro-inteligencia"
            className="inline-flex items-center justify-center rounded-xl px-6 py-4 text-sm font-semibold text-ink-foreground/75 transition-colors hover:bg-ink-foreground/8 hover:text-ink-foreground"
          >
            Quiero aprender Comex
          </Link>
          </div>
          <p className="mt-8 flex items-center gap-2 text-xs text-ink-foreground/50">
            <Sparkles className="size-3.5 text-sun" /> Con criterio, números y cero carreta.
          </p>
        </div>

        <div className="relative mx-auto h-[480px] w-full max-w-[520px] lg:h-[590px]" aria-label="Visualización de una operación internacional">
          <div className="absolute inset-x-8 top-1/2 h-px bg-ink-foreground/18" />
          <div className="absolute left-8 top-[45%] animate-float rounded-full bg-sun px-6 py-5 text-center text-sun-foreground editorial-shadow [--float-rotate:-5deg]">
            <span className="block text-3xl" aria-hidden>🇨🇳</span><span className="label-mono">Origen</span>
          </div>
          <div className="absolute left-[42%] top-[36%] animate-drift text-6xl" aria-hidden>🚢</div>
          <div className="absolute right-3 top-[48%] animate-float rounded-full bg-signal px-6 py-5 text-center text-signal-foreground editorial-shadow [animation-delay:1s] [--float-rotate:4deg]">
            <span className="block text-3xl" aria-hidden>🇨🇴</span><span className="label-mono">Colombia</span>
          </div>
          {[
            ["Producto", "top-5 left-[34%] bg-paper text-foreground -rotate-3"],
            ["Precio", "top-28 right-5 bg-coral text-coral-foreground rotate-3"],
            ["Arancel", "top-[42%] left-[34%] bg-paper text-foreground rotate-2"],
            ["Impuestos", "bottom-28 left-2 bg-signal text-signal-foreground -rotate-2"],
            ["Requisitos", "bottom-10 right-12 bg-paper text-foreground rotate-3"],
          ].map(([label, position], index) => (
            <span key={label} className={`absolute rounded-full px-5 py-3 text-sm font-semibold editorial-shadow animate-float ${position}`} style={{ animationDelay: `${index * .4}s` }}>
              <span className="mr-2 text-muted-foreground">+</span>{label}
            </span>
          ))}
          <div className="absolute bottom-2 left-[24%] rounded-2xl bg-sun px-7 py-5 text-sun-foreground editorial-shadow">
            <p className="label-mono">= La cifra que importa</p>
            <p className="mt-1 font-display text-4xl">Costo real</p>
          </div>
        </div>
      </div>
    </div>
  );
}
