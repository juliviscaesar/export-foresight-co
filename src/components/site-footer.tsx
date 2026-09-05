import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, ShieldAlert } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="label-mono text-signal">La conversación puede empezar aquí</p>
            <p className="mt-4 max-w-4xl font-display text-5xl leading-[.9] sm:text-7xl">Antes de importar, <em className="text-sun">entiende.</em></p>
          </div>
          <a href="https://wa.me/573184509704" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-signal px-6 py-4 text-sm font-bold text-signal-foreground">
            <MessageCircle className="size-5" /> WhatsApp <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="grid gap-12 border-t border-ink-foreground/12 pt-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">Tu Asesor de Comex</p>
            <p className="mt-3 max-w-sm text-sm text-ink-foreground/70">
              Asesoría estratégica y educación en comercio exterior. Analizamos, explicamos y
              prevenimos riesgos antes de que se ejecute la operación.
            </p>
            <p className="label-mono mt-6 text-signal">Antes de importar, entiende.</p>
            <a href="tel:+573184509704" className="mt-4 inline-block text-sm font-semibold text-sun">+57 318 450 9704</a>
          </div>

          <div>
            <p className="label-mono text-ink-foreground/50">Plataforma</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/centro-inteligencia" className="hover:text-signal">
                  Centro de Inteligencia Comex
                </Link>
              </li>
              <li>
                <Link to="/calculadora" className="hover:text-signal">
                  Calculadora de operación
                </Link>
              </li>
              <li>
                <Link to="/mapa-importacion" className="hover:text-signal">
                  Mapa de una importación
                </Link>
              </li>
              <li>
                <Link to="/entidades" className="hover:text-signal">
                  Entidades de control
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-mono text-ink-foreground/50">Firma</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/servicios" className="hover:text-signal">
                  Servicios de asesoría
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-signal">
                  Centro educativo
                </Link>
              </li>
              <li>
                <Link to="/alcance" className="hover:text-signal">
                  Alcance profesional
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-signal">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ink-foreground/15 pt-8">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 size-4 shrink-0 text-signal" />
            <div className="space-y-4 text-xs leading-relaxed text-ink-foreground/70">
              <p className="label-mono text-ink-foreground/50">Disclaimer legal</p>
              <p>
                Tu Asesor de Comex es una firma de asesoría estratégica y educación en comercio
                exterior. No somos agencia de aduanas, agente de carga, operador logístico,
                transportador ni intermediario en la venta de fletes o servicios de transporte, y no
                ejecutamos actividades sujetas a habilitación o autorización estatal. No presentamos
                declaraciones aduaneras, no realizamos trámites en nombre de terceros ante
                autoridades, no representamos legalmente al usuario y no intervenimos en la ejecución
                material de operaciones de comercio exterior.
              </p>
              <p>
                La información publicada en este sitio, así como los resultados de las calculadoras,
                cuestionarios, mapas y contenidos educativos, tiene carácter exclusivamente
                informativo, orientativo y pedagógico. No constituye asesoría jurídica, tributaria,
                aduanera, contable ni financiera, no reemplaza el análisis de un profesional
                habilitado y no genera derechos, garantías ni certezas sobre el resultado de una
                operación. Las cifras son estimaciones referenciales que pueden variar según la
                clasificación arancelaria aplicable, el origen de la mercancía, la normatividad
                vigente, las decisiones de la autoridad competente y las condiciones comerciales de
                cada caso.
              </p>
              <p>
                Toda decisión de importación, exportación, contratación o inversión es
                responsabilidad exclusiva del usuario. Antes de ejecutar una operación, se recomienda
                validar la información con las entidades competentes y con los profesionales
                habilitados que correspondan.
              </p>
              <p className="border-l-2 border-signal pl-4 text-ink-foreground/85">
                Advertencia: el contenido de este sitio debe ser revisado y validado jurídicamente
                antes de su uso como sustento de una decisión comercial, contractual o tributaria.
              </p>
            </div>
          </div>
          <p className="mt-10 text-xs text-ink-foreground/40">
            © {new Date().getFullYear()} Tu Asesor de Comex. Todos los derechos reservados. Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}
