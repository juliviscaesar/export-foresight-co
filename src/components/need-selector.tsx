import { useState } from "react";
import { ArrowRight, Target } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { needs } from "@/lib/comex-data";
import { cn } from "@/lib/utils";

export function NeedSelector() {
  const [selected, setSelected] = useState(needs[0]!.id);
  const need = needs.find((n) => n.id === selected)!;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
      <div className="flex flex-col divide-y divide-border border-y border-border">
        {needs.map((n) => (
          <button
            key={n.id}
            type="button"
            onClick={() => setSelected(n.id)}
            className={cn(
              "group flex items-center justify-between gap-4 py-4 text-left transition-colors",
              selected === n.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            <span className="font-display text-base font-medium">{n.label}</span>
            <ArrowRight
              className={cn(
                "size-4 shrink-0 transition-transform",
                selected === n.id ? "translate-x-0 text-signal" : "-translate-x-2 opacity-0",
              )}
            />
          </button>
        ))}
      </div>

      <div className="relative border border-border bg-card p-8">
        <div className="flex items-center gap-2">
          <Target className="size-4 text-signal" />
          <p className="label-mono text-muted-foreground">Ruta sugerida de análisis</p>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{need.description}</p>

        <ol className="mt-8 space-y-0">
          {need.route.map((step, i) => (
            <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex size-7 items-center justify-center rounded-full border border-foreground/20 bg-background font-mono text-[11px]">
                  {i + 1}
                </span>
                {i < need.route.length - 1 && <span className="mt-1 w-px flex-1 bg-border" />}
              </div>
              <span className="pt-1 text-sm font-medium">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="font-display text-sm font-semibold">{need.focus}</p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-signal decoration-2 underline-offset-4"
          >
            Hablemos de tu caso
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
