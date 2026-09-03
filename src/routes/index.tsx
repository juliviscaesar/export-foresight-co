import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Section, SectionHeading } from "@/components/section";
import { NeedSelector } from "@/components/need-selector";
import { Calculator } from "@/components/calculator";
import { EntityCards } from "@/components/entity-cards";
import { ImportMap } from "@/components/import-map";
import { ScopeBlock } from "@/components/scope-block";
import { RiskQuiz } from "@/components/risk-quiz";
import { articles } from "@/lib/comex-data";

const title = "Tu Asesor de Comex | Comercio exterior, sin adivinar";
const description =
  "Asesoría estratégica y educación en comercio exterior en Colombia: analizamos costos, requisitos y riesgos antes de que ejecutes una importación o exportación.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-5xl">
            Antes de importar,
            <br />
            entiende.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            La mayoría de las pérdidas en comercio exterior no ocurren en la aduana: ocurren antes,
            en decisiones tomadas sin información. Nuestro trabajo es que llegues a esa decisión con
            números, requisitos y riesgos sobre la mesa. Somos una firma de análisis y educación:
            explicamos, cuantificamos y prevenimos. No ejecutamos actividades reguladas.
          </p>
        </div>
      </Section>

      <Section id="selector">
        <SectionHeading
          kicker="Selector de ruta"
          title="¿Qué necesitas hacer?"
          description="Elige tu punto de partida y verás la ruta de análisis que seguimos contigo, paso por paso."
        />
        <div className="mt-12">
          <NeedSelector />
        </div>
      </Section>

      <Section id="calculadora" className="bg-secondary/40">
        <SectionHeading
          kicker="Herramienta"
          title="Calcula tu operación en 60 segundos"
          description="Estimación orientativa de valor CIF, arancel, IVA y costo unitario puesto en bodega, con seguro calculado al 0,35% del CIF y TRM tomada automáticamente cuando la fuente está disponible."
        />
        <div className="mt-12">
          <Calculator />
        </div>
      </Section>

      <Section id="entidades">
        <SectionHeading
          kicker="Entidades de control"
          title="Quién interviene en tu operación y para qué sirve cada entidad"
          description="Toca una tarjeta para abrir el panel de detalle: función, cuándo te afecta y por qué conviene revisarlo antes de comprar."
        />
        <div className="mt-12">
          <EntityCards />
        </div>
      </Section>

      <Section id="mapa" className="bg-secondary/40">
        <SectionHeading
          kicker="Mapa interactivo"
          title="Mapa de una importación"
          description="Siete etapas, con los riesgos, documentos y preguntas clave de cada una. Recorre la secuencia completa antes de emitir una orden de compra."
        />
        <div className="mt-12">
          <ImportMap />
        </div>
      </Section>

      <Section id="servicios">
        <SectionHeading
          kicker="Servicios de asesoría"
          title="Análisis, criterio y formación"
          description="Servicios indicativos de consultoría estratégica y educación. El alcance se define caso por caso."
        />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Diagnóstico de viabilidad",
              d: "Evaluación integral de producto, requisitos, costos y riesgos antes de comprar.",
            },
            {
              t: "Estructura de costos",
              d: "Modelo de costeo con punto de quiebre por TRM, volumen y precio de venta.",
            },
            {
              t: "Mapa de requisitos",
              d: "Identificación de entidades, permisos y tiempos reales aplicables a tu producto.",
            },
            {
              t: "Segunda lectura documental",
              d: "Revisión crítica de cotizaciones, Incoterms, documentos y liquidaciones.",
            },
            {
              t: "Formación para equipos",
              d: "Programas prácticos de comercio exterior con casos propios de la empresa.",
            },
            {
              t: "Acompañamiento a la decisión",
              d: "Escenarios, preguntas al proveedor y criterios para seguir o detenerse.",
            },
          ].map((s) => (
            <div key={s.t} className="bg-card p-8">
              <h3 className="font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <Link
          to="/servicios"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline decoration-signal decoration-2 underline-offset-4"
        >
          Ver detalle de servicios
          <ArrowRight className="size-4" />
        </Link>
      </Section>

      <Section id="alcance">
        <ScopeBlock />
      </Section>

      <Section id="diagnostico" className="bg-secondary/40">
        <SectionHeading
          kicker="Autoevaluación"
          title="Detecta riesgos antes de importar"
          description="Siete preguntas. Al final verás un semáforo orientativo, no jurídico, sobre tu nivel de exposición."
        />
        <div className="mt-12">
          <RiskQuiz />
        </div>
      </Section>

      <Section id="educacion">
        <SectionHeading
          kicker="Centro educativo"
          title="Aprende antes de decidir"
          description="Artículos escritos para que entiendas el fondo del proceso, no solo el trámite."
        />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 6).map((a) => (
            <Link
              key={a.slug}
              to="/blog/$slug"
              params={{ slug: a.slug }}
              className="group bg-card p-7 transition-colors hover:bg-secondary"
            >
              <p className="label-mono text-muted-foreground">{a.category}</p>
              <h3 className="mt-4 font-display text-base leading-snug font-semibold">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <p className="mt-5 font-mono text-xs text-muted-foreground">{a.readingTime}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline decoration-signal decoration-2 underline-offset-4"
        >
          Ver todos los artículos
          <ArrowRight className="size-4" />
        </Link>
      </Section>

      <Section className="bg-ink text-ink-foreground">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="label-mono text-signal">Siguiente paso</p>
            <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold sm:text-4xl">
              Antes de firmar una orden de compra, conversemos.
            </h2>
          </div>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-sm bg-signal px-6 py-3.5 text-sm font-semibold text-signal-foreground"
          >
            Agenda un diagnóstico
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
