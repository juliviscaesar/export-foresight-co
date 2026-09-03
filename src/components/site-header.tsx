import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/centro-inteligencia", label: "Centro de Inteligencia" },
  { to: "/calculadora", label: "Calculadora" },
  { to: "/mapa-importacion", label: "Mapa de importación" },
  { to: "/entidades", label: "Entidades" },
  { to: "/servicios", label: "Servicios" },
  { to: "/blog", label: "Educación" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-base font-bold tracking-tight">
            Tu Asesor de Comex
          </span>
          <span className="label-mono hidden text-muted-foreground sm:inline">Colombia</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="rounded-sm bg-ink px-4 py-2 text-sm font-medium text-ink-foreground transition-opacity hover:opacity-90"
          >
            Agenda diagnóstico
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          className="lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-ink px-4 py-2 text-center text-sm font-medium text-ink-foreground"
            >
              Agenda diagnóstico
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
