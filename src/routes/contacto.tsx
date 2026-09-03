import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { Section } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { needs } from "@/lib/comex-data";

const title = "Agenda un diagnóstico | Tu Asesor de Comex";
const description =
  "Cuéntanos tu caso y evaluamos juntos si la operación se sostiene: producto, requisitos, costos y riesgos antes de ejecutar.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        kicker="Contacto"
        title="Antes de firmar una orden de compra, conversemos."
        description="Describe tu operación en pocas líneas. Te responderemos con las preguntas que hay que resolver primero y con el alcance de análisis que recomendamos."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          {sent ? (
            <div className="border border-border bg-card p-10">
              <Check className="size-6 text-safe" />
              <h2 className="mt-5 font-display text-2xl font-bold">Mensaje registrado</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Gracias. Revisaremos tu caso y te contactaremos con los siguientes pasos del
                análisis. Mientras tanto, puedes usar la calculadora y el cuestionario de riesgos.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm underline decoration-signal decoration-2 underline-offset-4"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form
              className="border border-border bg-card p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <p className="label-mono text-muted-foreground">Cuéntanos tu caso</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" name="nombre" />
                <Field label="Empresa" name="empresa" required={false} />
                <Field label="Correo electrónico" name="correo" type="email" />
                <Field label="Teléfono" name="telefono" required={false} />
              </div>
              <label className="mt-5 block">
                <span className="text-xs font-medium">¿Qué necesitas hacer?</span>
                <select
                  name="necesidad"
                  className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none"
                >
                  {needs.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-5 block">
                <span className="text-xs font-medium">Describe tu operación</span>
                <textarea
                  required
                  name="mensaje"
                  rows={5}
                  className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none"
                  placeholder="Producto, país de origen, volumen estimado y en qué etapa estás."
                />
              </label>
              <button
                type="submit"
                className="mt-7 w-full rounded-sm bg-ink px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-opacity hover:opacity-90"
              >
                Enviar solicitud de diagnóstico
              </button>
              <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
                Al enviar este formulario solicitas una asesoría de análisis y educación. No
                gestionamos trámites, declaraciones ni servicios logísticos.
              </p>
            </form>
          )}

          <div>
            <h2 className="font-display text-2xl font-bold">Qué pasa después</h2>
            <ol className="mt-6 space-y-6">
              {[
                {
                  t: "Lectura del caso",
                  d: "Revisamos tu descripción e identificamos vacíos de información críticos.",
                },
                {
                  t: "Preguntas iniciales",
                  d: "Te enviamos las preguntas que definen si la operación es viable.",
                },
                {
                  t: "Propuesta de alcance",
                  d: "Definimos qué análisis conviene, en qué profundidad y en qué tiempo.",
                },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-foreground/20 font-mono text-[11px]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold">{s.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 border-l-2 border-signal pl-4 text-xs leading-relaxed text-muted-foreground">
              Somos una firma de asesoría estratégica y educación en comercio exterior. No somos
              agencia de aduanas, agente de carga, operador logístico ni transportador, y no
              ejecutamos actividades reguladas.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-input bg-background px-3 py-2 text-sm focus:border-ring focus:outline-none"
      />
    </label>
  );
}
