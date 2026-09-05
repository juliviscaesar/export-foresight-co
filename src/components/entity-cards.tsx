import { useState } from "react";
import { ArrowDownRight, X } from "lucide-react";
import { entities } from "@/lib/comex-data";
import { cn } from "@/lib/utils";

export function EntityCards() {
  const [open, setOpen] = useState<string | null>(null);
  const active = entities.find((e) => e.code === open);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {entities.map((entity) => (
          <button
            key={entity.code}
            type="button"
            onClick={() => setOpen(entity.code === open ? null : entity.code)}
            className={cn(
              "group rounded-full px-5 py-3 text-left transition-all",
              open === entity.code ? "bg-sun text-sun-foreground -rotate-2" : "bg-secondary hover:bg-accent hover:-translate-y-1",
            )}
          >
            <span
              className={cn(
                "font-display text-lg font-bold tracking-tight",
                open === entity.code && "text-signal",
              )}
            >
              {entity.code}
            </span>
            <ArrowDownRight className="size-4 opacity-45" />
          </button>
        ))}
      </div>

      {active && (
        <div className="mt-8 rounded-3xl bg-ink p-8 text-ink-foreground duration-300 animate-in fade-in slide-in-from-top-2 md:p-10">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="label-mono text-muted-foreground">{active.code}</p>
              <h3 className="mt-2 font-display text-xl font-bold">{active.name}</h3>
            </div>
            <button
              type="button"
              onClick={() => setOpen(null)}
              aria-label="Cerrar panel"
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="label-mono text-muted-foreground">¿Para qué sirve?</p>
              <p className="mt-3 text-sm leading-relaxed">{active.purpose}</p>
              <p className="mt-5 border-l-2 border-signal pl-4 text-xs leading-relaxed text-muted-foreground">
                {active.notes}
              </p>
            </div>
            <div>
              <p className="label-mono text-muted-foreground">Cuándo te afecta</p>
              <ul className="mt-3 space-y-2.5">
                {active.whenItMatters.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
