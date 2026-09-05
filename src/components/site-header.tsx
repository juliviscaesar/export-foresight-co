import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-full bg-ink font-display text-xl italic text-sun">A</span>
          <span className="font-sans text-sm font-extrabold leading-none uppercase">Tu Asesor<br />de Comex</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-xs font-bold text-ink-foreground transition-transform hover:-translate-y-0.5"
          >
            Hablemos <ArrowUpRight className="size-3.5" />
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
        <nav className="bg-background px-6 py-6 shadow-lg lg:hidden">
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
              className="mt-2 rounded-xl bg-ink px-4 py-3 text-center text-sm font-medium text-ink-foreground"
            >
              Agenda diagnóstico
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
