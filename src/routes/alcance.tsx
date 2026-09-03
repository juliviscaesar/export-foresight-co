import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { PageHero } from "@/components/page-hero";
import { ScopeBlock } from "@/components/scope-block";

const title = "Alcance profesional | Tu Asesor de Comex";
const description =
  "Asesoramos y educamos: no somos agencia de aduanas, agente de carga, operador logístico ni transportador, y no ejecutamos actividades reguladas.";

export const Route = createFileRoute("/alcance")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AlcancePage,
});

function AlcancePage() {
  return (
    <>
      <PageHero
        kicker="Transparencia"
        title="Qué hacemos y qué no hacemos."
        description="Preferimos decirlo antes, con claridad: nuestro trabajo termina donde empieza la actividad regulada."
      />
      <Section>
        <ScopeBlock />
      </Section>
      <Section className="bg-secondary/40">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">Por qué esta frontera importa</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              En comercio exterior, varias actividades solo pueden ser ejecutadas por personas y
              empresas habilitadas por la autoridad competente. Confundir asesoría con ejecución
              genera riesgos para el importador y para quien presta el servicio.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Nuestra independencia es parte del valor: no cobramos por mover carga, no tenemos
              incentivo en un flete específico y no representamos intereses de operadores. Analizamos
              para que decidas mejor.
            </p>
          </div>
          <div className="border border-border bg-card p-8">
            <p className="label-mono text-muted-foreground">Nota profesional</p>
            <p className="mt-4 text-sm leading-relaxed">
              La información, herramientas y contenidos de este sitio son de naturaleza informativa y
              educativa. No constituyen asesoría jurídica, tributaria, aduanera, contable ni
              financiera, no reemplazan el criterio de un profesional habilitado y no garantizan
              resultado alguno. Toda decisión comercial es responsabilidad exclusiva del usuario y
              debe validarse previamente con las entidades competentes.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
