import { Check, Minus } from "lucide-react";

const weDo = [
  "Analizamos la viabilidad de una operación antes de que se ejecute",
  "Explicamos requisitos, entidades y procesos en lenguaje claro",
  "Estimamos costos y estructuras de costeo orientativas",
  "Identificamos riesgos operativos, documentales y financieros",
  "Revisamos cotizaciones, documentos y liquidaciones como segunda lectura",
  "Formamos equipos de compras y comercio exterior",
  "Acompañamos la decisión con criterio técnico y preguntas correctas",
];

const weAreNot = [
  "No somos agencia de aduanas",
  "No somos agente de carga ni operador logístico",
  "No somos transportador",
  "No vendemos ni intermediamos fletes",
  "No presentamos declaraciones aduaneras",
  "No tramitamos ante autoridades en nombre de terceros",
  "No ejecutamos actividades sujetas a habilitación estatal",
];

export function ScopeBlock() {
  return (
    <div className="border border-foreground/15 bg-ink text-ink-foreground">
      <div className="border-b border-ink-foreground/15 px-8 py-10 md:px-12">
        <p className="label-mono text-signal">Alcance profesional</p>
        <h2 className="mt-5 font-display text-2xl leading-tight font-bold text-balance sm:text-4xl">
          ASESORAMOS. NO EJECUTAMOS ACTIVIDADES REGULADAS.
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-foreground/70">
          Nuestro valor está antes de la operación: en el análisis, la explicación y la prevención
          del riesgo. La ejecución corresponde a los actores habilitados para ello.
        </p>
      </div>

      <div className="grid gap-px bg-ink-foreground/15 md:grid-cols-2">
        <div className="bg-ink p-8 md:p-12">
          <p className="label-mono text-safe">Sí hacemos</p>
          <ul className="mt-6 space-y-4">
            {weDo.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-snug">
                <Check className="mt-0.5 size-4 shrink-0 text-safe" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-ink p-8 md:p-12">
          <p className="label-mono text-alert">No somos</p>
          <ul className="mt-6 space-y-4">
            {weAreNot.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-snug text-ink-foreground/80">
                <Minus className="mt-0.5 size-4 shrink-0 text-alert" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/15 px-8 py-8 md:px-12">
        <p className="max-w-4xl text-xs leading-relaxed text-ink-foreground/60">
          <span className="label-mono mr-2 text-ink-foreground/45">Nota profesional</span>
          Nuestra labor es de análisis, orientación y formación. Los trámites, declaraciones y
          servicios regulados deben ser realizados por las personas y empresas habilitadas por la
          autoridad competente. Nada de lo publicado en este sitio constituye asesoría jurídica,
          tributaria, aduanera o financiera, ni reemplaza la validación de un profesional habilitado
          y de las entidades competentes antes de tomar una decisión.
        </p>
      </div>
    </div>
  );
}
