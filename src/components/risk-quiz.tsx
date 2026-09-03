import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type Option = { label: string; score: number };
type Question = { id: string; question: string; options: Option[] };

const questions: Question[] = [
  {
    id: "clasificacion",
    question: "¿Tienes identificada la subpartida arancelaria de tu producto?",
    options: [
      { label: "Sí, con sustento técnico documentado", score: 0 },
      { label: "Tengo una idea, sin verificar", score: 2 },
      { label: "No, uso la que dice el proveedor", score: 3 },
    ],
  },
  {
    id: "permisos",
    question: "¿Sabes si tu producto requiere permisos previos de alguna entidad?",
    options: [
      { label: "Sí, ya validé requisitos aplicables", score: 0 },
      { label: "Creo que no, pero no lo confirmé", score: 2 },
      { label: "No lo he revisado", score: 3 },
    ],
  },
  {
    id: "incoterm",
    question: "¿El Incoterm de tu cotización está claro en costos y responsabilidades?",
    options: [
      { label: "Sí, sé qué asume cada parte", score: 0 },
      { label: "Lo conozco de nombre", score: 2 },
      { label: "No sé cuál me cotizaron", score: 3 },
    ],
  },
  {
    id: "costos",
    question: "¿Tienes calculado el costo total puesto en bodega, con arancel e IVA?",
    options: [
      { label: "Sí, con estructura de costeo completa", score: 0 },
      { label: "Parcialmente, faltan rubros", score: 2 },
      { label: "Solo tengo el precio del proveedor", score: 3 },
    ],
  },
  {
    id: "proveedor",
    question: "¿Verificaste la existencia y trayectoria del proveedor extranjero?",
    options: [
      { label: "Sí, con documentos y referencias", score: 0 },
      { label: "Revisé su sitio web y catálogo", score: 2 },
      { label: "No, negociamos por mensajería", score: 3 },
    ],
  },
  {
    id: "cambiario",
    question: "¿Contemplaste el efecto de la variación de la TRM en tu margen?",
    options: [
      { label: "Sí, con escenarios y punto de quiebre", score: 0 },
      { label: "Usé la tasa del día, sin escenarios", score: 2 },
      { label: "No lo consideré", score: 3 },
    ],
  },
  {
    id: "caja",
    question: "¿Tu flujo de caja soporta tributos, bodegaje y demoras imprevistas?",
    options: [
      { label: "Sí, con reserva prevista", score: 0 },
      { label: "Ajustado, sin holgura", score: 2 },
      { label: "No lo he proyectado", score: 3 },
    ],
  },
];

const levels = [
  {
    key: "verde",
    color: "bg-safe",
    label: "Riesgo bajo",
    text: "Tu preparación es razonable. Aun así, conviene validar la clasificación arancelaria y los requisitos con documentos antes de emitir la orden de compra.",
  },
  {
    key: "amarillo",
    color: "bg-caution",
    label: "Riesgo medio",
    text: "Hay vacíos que suelen convertirse en sobrecostos: revisa requisitos previos, estructura de costos y condiciones del Incoterm antes de avanzar.",
  },
  {
    key: "rojo",
    color: "bg-alert",
    label: "Riesgo alto",
    text: "Avanzar en estas condiciones expone tu capital. Detén la compra y ordena primero el análisis: producto, requisitos, costos y proveedor.",
  },
];

export function RiskQuiz() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const complete = Object.keys(answers).length === questions.length;
  const level = total <= 4 ? levels[0] : total <= 11 ? levels[1] : levels[2];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      <div className="divide-y divide-border border-y border-border">
        {questions.map((q, i) => (
          <div key={q.id} className="py-6">
            <p className="flex gap-3 text-sm font-medium">
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              {q.question}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 pl-8">
              {q.options.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.score }))}
                  className={cn(
                    "border px-3 py-2 text-xs transition-colors",
                    answers[q.id] === opt.score
                      ? "border-foreground bg-ink text-ink-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="h-fit border border-border bg-card p-8 lg:sticky lg:top-24">
        <p className="label-mono text-muted-foreground">Semáforo de riesgo</p>

        {!submitted ? (
          <>
            <div className="mt-6 flex gap-2">
              {levels.map((l) => (
                <span key={l.key} className={cn("h-2 flex-1 rounded-full opacity-20", l.color)} />
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Responde las {questions.length} preguntas para ver una lectura orientativa de tu nivel
              de exposición.
            </p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              {Object.keys(answers).length}/{questions.length} respondidas
            </p>
            <button
              type="button"
              disabled={!complete}
              onClick={() => setSubmitted(true)}
              className="mt-6 w-full rounded-sm bg-ink px-4 py-3 text-sm font-medium text-ink-foreground transition-opacity disabled:opacity-35"
            >
              Ver resultado
            </button>
          </>
        ) : (
          <>
            <div className="mt-6 flex gap-2">
              {levels.map((l) => (
                <span
                  key={l.key}
                  className={cn(
                    "h-2 flex-1 rounded-full transition-opacity",
                    l.color,
                    l.key === level.key ? "opacity-100" : "opacity-15",
                  )}
                />
              ))}
            </div>
            <p className="mt-6 font-display text-xl font-bold">{level.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{level.text}</p>
            <button
              type="button"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
              }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-foreground underline decoration-signal decoration-2 underline-offset-4"
            >
              <RotateCcw className="size-3.5" />
              Repetir el cuestionario
            </button>
          </>
        )}

        <p className="mt-8 border-t border-border pt-5 text-[11px] leading-relaxed text-muted-foreground">
          Resultado orientativo y educativo. No constituye un concepto jurídico, tributario ni
          aduanero, no evalúa el cumplimiento normativo de tu operación y no reemplaza la validación
          de un profesional habilitado ni la consulta a las entidades competentes.
        </p>
      </div>
    </div>
  );
}
