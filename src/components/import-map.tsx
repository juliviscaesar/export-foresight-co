import { useState } from "react";
import { AlertTriangle, FileText, HelpCircle } from "lucide-react";
import { importStages } from "@/lib/comex-data";
import { cn } from "@/lib/utils";

export function ImportMap() {
  const [active, setActive] = useState(0);
  const stage = importStages[active];
  const progress = ((active + 1) / importStages.length) * 100;

  return (
    <div>
      <div className="relative">
        <div className="absolute top-[13px] right-0 left-0 h-px bg-border" />
        <div
          className="absolute top-[13px] left-0 h-px bg-signal transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
        <div className="relative grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-7">
          {importStages.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              className="group flex flex-col items-start gap-3 pr-4 text-left"
            >
              <span
                className={cn(
                  "flex size-[26px] items-center justify-center rounded-full border font-mono text-[10px] transition-colors",
                  i <= active
                    ? "border-signal bg-signal text-signal-foreground"
                    : "border-border bg-background text-muted-foreground group-hover:border-foreground",
                )}
              >
                {s.index}
              </span>
              <span
                className={cn(
                  "font-display text-xs leading-tight font-semibold",
                  i === active ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {s.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-[1.1fr_2fr]">
        <div className="bg-ink p-8 text-ink-foreground">
          <p className="label-mono text-signal">Etapa {stage.index}</p>
          <h3 className="mt-3 font-display text-2xl font-bold">{stage.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-foreground/70">{stage.summary}</p>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          <Panel
            icon={<AlertTriangle className="size-4 text-alert" />}
            title="Riesgos"
            items={stage.risks}
          />
          <Panel
            icon={<FileText className="size-4 text-foreground" />}
            title="Documentos"
            items={stage.documents}
          />
          <Panel
            icon={<HelpCircle className="size-4 text-signal" />}
            title="Preguntas clave"
            items={stage.questions}
          />
        </div>
      </div>
    </div>
  );
}

function Panel({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-card p-6">
      <div className="flex items-center gap-2">
        {icon}
        <p className="label-mono text-muted-foreground">{title}</p>
      </div>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-sm leading-snug text-foreground/85">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
