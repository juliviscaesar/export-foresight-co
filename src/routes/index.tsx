import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
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
  const questions = [
    "¿Cuál es la partida?", "¿Cuánto pagaré de arancel?", "¿Necesita INVIMA?",
    "¿Necesita ICA?", "¿Cuánto cuesta realmente puesto en Colombia?", "¿FOB o CIF?", "¿Hay algún riesgo?",
  ];
  const topics = ["IMPORTAR", "EXPORTAR", "ARANCELES", "INCOTERMS", "DIAN", "ICA", "INVIMA", "VUCE", "TLC", "COSTOS", "REQUISITOS", "PARTIDAS"];
  const plainComex = [
    "¿Qué carajos es FOB?", "¿Por qué el precio del proveedor NO es el costo final?",
    "¿Qué hace realmente la DIAN?", "¿Necesito INVIMA?", "¿Qué es una partida arancelaria?",
  ];

  return (
    <>
      <Hero />

      <Section className="overflow-hidden bg-sun text-sun-foreground">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <p className="label-mono">Antes de comprarle al proveedor...</p>
            <h2 className="mt-6 font-display text-6xl leading-[.85] sm:text-8xl">Mejor pregunta <em>primero.</em></h2>
            <p className="mt-7 max-w-md text-base leading-relaxed opacity-75">Porque una proforma bonita no te cuenta toda la historia. Nosotros te ayudamos a encontrar las preguntas que sí cambian la decisión.</p>
            <Link to="/diagnostico" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-4 text-sm font-bold text-ink-foreground">Analizar operación <ArrowRight className="size-4" /></Link>
          </div>
          <div className="relative flex min-h-[430px] flex-wrap content-center justify-center gap-3">
            {questions.map((question, index) => (
              <span key={question} className="animate-float rounded-full bg-paper px-5 py-4 text-sm font-semibold text-foreground editorial-shadow" style={{ animationDelay: `${index * .35}s`, transform: `rotate(${index % 2 ? 2 : -2}deg)` }}>{question}</span>
            ))}
            <span className="absolute right-0 top-3 font-display text-7xl opacity-15">?</span>
            <span className="absolute bottom-0 left-0 font-display text-9xl opacity-10">¿</span>
          </div>
        </div>
      </Section>

      <Section id="selector">
        <SectionHeading
          kicker="Arranquemos por lo tuyo"
          title="¿Qué necesitas resolver hoy?"
          description="Cada operación tiene su propio enredo. Escoge el tuyo y te mostramos por dónde empezar a desenredarlo."
        />
        <div className="mt-12">
          <NeedSelector />
        </div>
      </Section>

      <Section id="calculadora" className="bg-secondary/40">
        <Calculator />
      </Section>

      <Section id="inteligencia" className="overflow-hidden bg-ink text-ink-foreground">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="label-mono text-signal">Centro de Inteligencia Comex</p>
            <h2 className="mt-5 font-display text-5xl leading-[.9] sm:text-7xl">¿Qué quieres saber de <em className="text-sun">Comex?</em></h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/62">Entra por el tema que te está dando vueltas. Aquí las normas bajan a tierra y las siglas empiezan a tener sentido.</p>
          </div>
          <div className="flex flex-wrap content-center gap-3">
            {topics.map((topic, index) => (
              <Link key={topic} to="/centro-inteligencia" className={`rounded-full px-5 py-3 font-mono text-xs transition-transform hover:-translate-y-1 ${index % 4 === 0 ? "bg-sun text-sun-foreground" : index % 5 === 0 ? "bg-coral text-coral-foreground" : "bg-ink-foreground/8 text-ink-foreground"}`}>{topic}</Link>
            ))}
          </div>
        </div>
      </Section>

      <Section id="entidades">
        <SectionHeading
          kicker="El ecosistema"
          title="¿Quién se mete en esta vuelta?"
          description="Toca cada entidad y entiende qué hace, cuándo aparece y qué deberías revisar antes de comprar."
        />
        <div className="mt-12">
          <EntityCards />
        </div>
      </Section>

      <Section id="mapa" className="bg-secondary/40">
        <SectionHeading
          kicker="De aquí hasta allá"
          title="Sigue el viaje de tu mercancía."
          description="Cada paso revela costos, documentos y riesgos. La gracia es verlos antes de que la carga empiece a moverse."
        />
        <div className="mt-12">
          <ImportMap />
        </div>
      </Section>

      <Section id="cristiano" className="bg-coral text-coral-foreground">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="label-mono">Educación sin carreta</p>
            <h2 className="mt-5 font-display text-6xl leading-[.85] sm:text-8xl">Comex en <em>cristiano.</em></h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed opacity-75">Conceptos complejos, explicados como deberían habértelos contado desde el principio.</p>
          </div>
          <div className="divide-y divide-coral-foreground/20">
            {plainComex.map((title, index) => (
              <Link key={title} to="/blog" className="group flex items-center justify-between gap-6 py-5">
                <span className="font-display text-2xl md:text-3xl">{title}</span><span className="font-mono text-xs opacity-55 transition-transform group-hover:translate-x-2">0{index + 1} →</span>
              </Link>
            ))}
          </div>
        </div>
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
          title="Lecturas para no improvisar."
          description="Historias, guías y explicaciones útiles. Técnicas, sí; acartonadas, no."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 6).map((a) => (
            <Link
              key={a.slug}
              to="/blog/$slug"
              params={{ slug: a.slug }}
              className="group rounded-2xl bg-card p-7 transition-transform hover:-translate-y-2 editorial-shadow"
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

      <Section className="bg-sun text-sun-foreground">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="label-mono">Sin presión, sin venderte fletes</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-none sm:text-6xl">
              ¿Tienes una operación dando vueltas? Hablemos.
            </h2>
          </div>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-4 text-sm font-semibold text-ink-foreground"
          >
            <MessageCircle className="size-4" /> Escríbenos por WhatsApp
          </Link>
        </div>
      </Section>
    </>
  );
}
