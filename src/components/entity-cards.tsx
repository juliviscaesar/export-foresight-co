import { useState } from "react";
import { CircleHelp, X } from "lucide-react";
import { entities } from "@/lib/comex-data";
import { cn } from "@/lib/utils";

export function EntityCards() {
  const [open, setOpen] = useState<string | null>(null);
  const active = entities.find((e) => e.code === open);

  return (
    <div>
      <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {entities.map((entity) => (
          <button
            key={entity.code}
            type="button"
            onClick={() => setOpen(entity.code === open ? null : entity.code)}
            className={cn(
              "group flex flex-col items-start gap-3 bg-card p-6 text-left transition-colors",
              open === entity.code ? "bg-ink text-ink-foreground" : "hover:bg-secondary",
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
            <span
              className={cn(
                "text-xs leading-snug",
                open === entity.code ? "text-ink-foreground/70" : "text-muted-foreground",
              )}
            >
              {entity.role}
            </span>
            <span
              className={cn(
                "label-mono mt-auto flex items-center gap-1.5 pt-4",
                open === entity.code ? "text-signal" : "text-muted-foreground",
              )}
            >
              <CircleHelp className="size-3" />
              ¿Para qué sirve?
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div className="mt-px border border-t-0 border-border bg-secondary p-8 duration-300 animate-in fade-in slide-in-from-top-2">
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
