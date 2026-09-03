import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { ScopeBlock } from "@/components/scope-block";

const title = "Servicios de asesoría en comercio exterior | Tu Asesor de Comex";
const description =
  "Diagnóstico de viabilidad, estructura de costos, mapa de requisitos, segunda lectura documental y formación de equipos en comercio exterior.";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  {
    code: "S01",
    name: "Diagnóstico de viabilidad de importación",
    outcome: "Un concepto claro: la operación se sostiene o no se sostiene, y por qué.",
    includes: [
      "Análisis técnico del producto y clasificación orientativa",
      "Identificación de requisitos previos y entidades aplicables",
      "Estimación de costo total y punto de quiebre",
      "Informe con riesgos priorizados",
    ],
  },
  {
    code: "S02",
    name: "Estructura de costos y escenarios",
    outcome: "Un modelo propio para costear cualquier operación futura sin depender de terceros.",
    includes: [
      "Modelo de costeo por unidad y por operación",
      "Escenarios de TRM, volumen y precio de venta",
      "Sensibilidad de margen y punto de quiebre",
      "Transferencia del modelo a tu equipo",
    ],
  },
  {
    code: "S03",
    name: "Mapa de requisitos y cronograma",
    outcome: "Un calendario realista donde los permisos manden sobre las fechas de embarque.",
    includes: [
      "Requisitos por entidad según el producto",
      "Tiempos estimados de cada autorización",
      "Secuencia recomendada antes de comprar",
      "Alertas de riesgo por dependencias críticas",
    ],
  },
  {
    code: "S04",
    name: "Segunda lectura documental",
    outcome: "Detectar antes de firmar lo que después cuesta corregir.",
    includes: [
      "Revisión crítica de cotizaciones e Incoterms",
      "Verificación de coherencia documental",
      "Contraste de liquidaciones de tributos",
      "Listado de preguntas al proveedor o al declarante",
    ],
  },
  {
    code: "S05",
    name: "Formación para equipos",
    outcome: "Un equipo de compras que entiende el proceso y hace las preguntas correctas.",
    includes: [
      "Programa modular por rol y nivel",
      "Talleres con casos reales de la empresa",
      "Herramientas internas de costeo y checklist",
      "Evaluación y seguimiento",
    ],
  },
  {
    code: "S06",
    name: "Acompañamiento a la decisión",
    outcome: "Criterio técnico independiente en el momento en que hay que decidir.",
    includes: [
      "Sesiones de análisis sobre operaciones concretas",
      "Escenarios comparados y recomendaciones",
      "Revisión de supuestos financieros",
      "Documentación de la decisión y sus razones",
    ],
  },
];

function ServiciosPage() {
  return (
    <>
      <PageHero
        kicker="Servicios"
        title="Asesoría estratégica y educación. Nada más, nada menos."
        description="Nuestro entregable es criterio: análisis, números y riesgos identificados antes de que se ejecute la operación. Los servicios son indicativos y su alcance se define en cada caso."
      />

      <Section>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          {services.map((s) => (
            <div key={s.code} className="bg-card p-8">
              <p className="label-mono text-signal">{s.code}</p>
              <h2 className="mt-4 font-display text-xl font-bold">{s.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.outcome}</p>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                {s.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-foreground/85">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHeading
          kicker="Cómo trabajamos"
          title="Cuatro pasos, un criterio: entender antes de mover capital"
        />
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-4">
          {[
            { t: "Escuchamos el caso", d: "Producto, objetivo comercial, tiempos y restricciones." },
            { t: "Analizamos", d: "Requisitos, clasificación orientativa, costos y riesgos." },
            { t: "Explicamos", d: "Informe claro, con supuestos y preguntas abiertas visibles." },
            { t: "Acompañamos la decisión", d: "Escenarios y criterios para seguir o detenerse." },
          ].map((s, i) => (
            <div key={s.t} className="bg-card p-7">
              <span className="font-mono text-xs text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <ScopeBlock />
        <Link
          to="/contacto"
          className="mt-10 inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-sm font-semibold text-ink-foreground"
        >
          Agenda un diagnóstico
          <ArrowRight className="size-4" />
        </Link>
      </Section>
    </>
  );
}
