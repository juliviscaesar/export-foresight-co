import { useState } from "react";
import { cn } from "@/lib/utils";

const nodes = [
  {
    key: "producto",
    label: "Producto",
    detail: "Ficha técnica, composición y uso definen la clasificación arancelaria.",
  },
  {
    key: "origen",
    label: "Origen",
    detail: "El país determina preferencias arancelarias y exigencias de origen.",
  },
  {
    key: "transporte",
    label: "Transporte",
    detail: "El Incoterm reparte costo, riesgo y responsabilidad documental.",
  },
  {
    key: "aduana",
    label: "Aduana",
    detail: "Se verifica valor, clasificación, origen y requisitos previos.",
  },
  {
    key: "impuestos",
    label: "Impuestos",
    detail: "Arancel sobre valor CIF; IVA sobre CIF más arancel.",
  },
  {
    key: "costos",
    label: "Costos",
    detail: "Costo unitario real puesto en bodega, con tiempo y financiación.",
  },
  {
    key: "mercado",
    label: "Mercado colombiano",
    detail: "Precio viable, canal, competencia y cumplimiento local.",
  },
];

export function FlowDiagram({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [active, setActive] = useState(0);
  const dark = variant === "dark";

  return (
    <div>
      <div className="flex flex-wrap items-stretch gap-1.5">
        {nodes.map((node, i) => (
          <button
            key={node.key}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={cn(
              "group relative flex min-w-[7.5rem] flex-1 flex-col items-start gap-2 border px-3 py-4 text-left transition-all duration-300",
              dark
                ? active === i
                  ? "border-signal bg-signal/10"
                  : "border-ink-foreground/15 hover:border-ink-foreground/40"
                : active === i
                  ? "border-foreground bg-secondary"
                  : "border-border hover:border-foreground/40",
            )}
          >
            <span
              className={cn(
                "label-mono",
                dark
                  ? active === i
                    ? "text-signal"
                    : "text-ink-foreground/40"
                  : active === i
                    ? "text-foreground"
                    : "text-muted-foreground",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-sm leading-tight font-semibold">{node.label}</span>
            <span
              className={cn(
                "mt-1 h-0.5 w-full transition-all duration-500",
                dark
                  ? active === i
                    ? "bg-signal"
                    : "bg-ink-foreground/15"
                  : active === i
                    ? "bg-foreground"
                    : "bg-border",
              )}
            />
          </button>
        ))}
      </div>
      <p
        className={cn(
          "mt-5 max-w-2xl text-sm leading-relaxed",
          dark ? "text-ink-foreground/70" : "text-muted-foreground",
        )}
      >
        <span className={cn("font-mono text-xs", dark ? "text-signal" : "text-foreground")}>
          {nodes[active].label.toUpperCase()} ·{" "}
        </span>
        {nodes[active].detail}
      </p>
    </div>
  );
}
