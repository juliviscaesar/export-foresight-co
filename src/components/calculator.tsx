import { useEffect, useMemo, useState } from "react";
import { Info, RefreshCw, TriangleAlert } from "lucide-react";

const FALLBACK_TRM = 3950;
const INSURANCE_RATE = 0.0035;

function currencyCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

function currencyUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

type TrmState = { value: number; date: string | null; source: "api" | "fallback" | "manual" };

export function Calculator() {
  const [fob, setFob] = useState("10000");
  const [freight, setFreight] = useState("1800");
  const [arancel, setArancel] = useState("10");
  const [iva, setIva] = useState("19");
  const [localCosts, setLocalCosts] = useState("2500000");
  const [units, setUnits] = useState("500");
  const [trm, setTrm] = useState<TrmState>({
    value: FALLBACK_TRM,
    date: null,
    source: "fallback",
  });
  const [loadingTrm, setLoadingTrm] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function loadTrm() {
      try {
        const res = await fetch(
          "https://www.datos.gov.co/resource/32sa-8pi3.json?$select=valor,vigenciahasta&$order=vigenciadesde%20DESC&$limit=1",
        );
        if (!res.ok) throw new Error("bad response");
        const json = (await res.json()) as Array<{ valor?: string; vigenciahasta?: string }>;
        const value = Number(json?.[0]?.valor);
        if (!cancelled && Number.isFinite(value) && value > 0) {
          setTrm({
            value,
            date: json[0]?.vigenciahasta?.slice(0, 10) ?? null,
            source: "api",
          });
        }
      } catch {
        /* se mantiene el valor de referencia */
      } finally {
        if (!cancelled) setLoadingTrm(false);
      }
    }
    loadTrm();
    return () => {
      cancelled = true;
    };
  }, []);

  const result = useMemo(() => {
    const fobV = Number(fob) || 0;
    const freightV = Number(freight) || 0;
    const cfr = fobV + freightV;
    const insurance = (cfr * INSURANCE_RATE) / (1 - INSURANCE_RATE);
    const cifUsd = cfr + insurance;
    const cifCop = cifUsd * trm.value;
    const arancelCop = cifCop * ((Number(arancel) || 0) / 100);
    const taxBase = cifCop + arancelCop;
    const ivaCop = taxBase * ((Number(iva) || 0) / 100);
    const local = Number(localCosts) || 0;
    const total = cifCop + arancelCop + ivaCop + local;
    const unitsV = Number(units) || 0;
    return {
      cifUsd,
      insurance,
      cifCop,
      arancelCop,
      taxBase,
      ivaCop,
      local,
      total,
      unit: unitsV > 0 ? total / unitsV : 0,
    };
  }, [fob, freight, arancel, iva, localCosts, units, trm.value]);

  const rows = [
    { label: "Valor CIF (USD)", value: currencyUSD(result.cifUsd), mono: true },
    { label: "Seguro estimado 0,35% CIF (USD)", value: currencyUSD(result.insurance) },
    { label: "Valor en aduana (COP)", value: currencyCOP(result.cifCop) },
    { label: `Arancel ${arancel || 0}% (COP)`, value: currencyCOP(result.arancelCop) },
    { label: "Base gravable IVA (COP)", value: currencyCOP(result.taxBase) },
    { label: `IVA ${iva || 0}% (COP)`, value: currencyCOP(result.ivaCop) },
    { label: "Costos locales estimados (COP)", value: currencyCOP(result.local) },
  ];

  return (
    <div className="overflow-hidden rounded-3xl bg-card editorial-shadow lg:grid lg:grid-cols-[.92fr_1.08fr]">
      <div className="p-6 md:p-10">
        <p className="label-mono text-coral">Cuéntame los números</p>
        <h3 className="mt-3 font-display text-4xl leading-none">El chino te dio precio.<br /><em>¿Y ahora qué?</em></h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Escribe cuánto te cobra y descubre una aproximación del costo real de traerlo a Colombia.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field
            label="Valor FOB de la mercancía (USD)"
            value={fob}
            onChange={setFob}
            hint="Precio de la mercancía puesta a bordo en origen."
          />
          <Field
            label="Flete internacional (USD)"
            value={freight}
            onChange={setFreight}
            hint="Valor del transporte hasta puerto o aeropuerto colombiano."
          />
          <Field
            label="Arancel estimado (%)"
            value={arancel}
            onChange={setArancel}
            hint="Depende de la subpartida y del origen."
          />
          <Field
            label="IVA aplicable (%)"
            value={iva}
            onChange={setIva}
            hint="Tarifa general 19%; existen tarifas diferenciales."
          />
          <Field
            label="Costos locales estimados (COP)"
            value={localCosts}
            onChange={setLocalCosts}
            hint="Gastos portuarios, agenciamiento, transporte interno, bodegaje."
          />
          <Field
            label="Unidades importadas"
            value={units}
            onChange={setUnits}
            hint="Para calcular el costo unitario puesto en bodega."
          />
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3 rounded-xl bg-secondary p-4">
          <div className="flex items-center gap-2">
            {loadingTrm ? (
              <RefreshCw className="size-3.5 animate-spin text-muted-foreground" />
            ) : (
              <span className="size-1.5 rounded-full bg-safe" />
            )}
            <span className="label-mono text-muted-foreground">TRM</span>
          </div>
          <input
            aria-label="TRM utilizada"
            inputMode="decimal"
            value={trm.value}
            onChange={(e) =>
              setTrm({
                value: Number(e.target.value) || 0,
                date: trm.date,
                source: "manual",
              })
            }
            className="w-32 border border-input bg-background px-2 py-1 font-mono text-sm focus:border-ring focus:outline-none"
          />
          <span className="text-xs text-muted-foreground">
            {trm.source === "api"
              ? `Tomada automáticamente de datos abiertos${trm.date ? ` · vigente ${trm.date}` : ""}`
              : trm.source === "manual"
                ? "Valor ingresado manualmente"
                : "Valor de referencia editable (no se pudo consultar la fuente)"}
          </span>
        </div>
      </div>

      <div className="flex flex-col bg-ink p-6 text-ink-foreground md:p-10">
        <p className="label-mono text-signal">De precio bonito a costo real</p>
        <dl className="mt-6 divide-y divide-ink-foreground/10">
          {rows.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-6 py-3">
              <dt className="text-sm text-ink-foreground/65">{row.label}</dt>
              <dd className="font-mono text-sm tabular-nums">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 rounded-2xl bg-signal p-6 text-signal-foreground">
          <div>
            <span className="label-mono">Tu costo estimado en Colombia</span>
            <span className="mt-3 block font-display text-4xl leading-none tabular-nums md:text-6xl">
              {currencyCOP(result.total)}
            </span>
          </div>
          <div className="mt-5 flex items-baseline justify-between gap-6 border-t border-signal-foreground/20 pt-4">
            <span className="text-xs">Por unidad, puesto en bodega</span>
            <span className="font-mono text-sm font-bold tabular-nums">{currencyCOP(result.unit)}</span>
          </div>
        </div>

        <div className="mt-8 flex gap-3 border border-ink-foreground/15 bg-ink-foreground/[0.04] p-4">
          <TriangleAlert className="mt-0.5 size-4 shrink-0 text-caution" />
          <p className="text-xs leading-relaxed text-ink-foreground/70">
            Cálculo orientativo con fines educativos. No constituye una liquidación aduanera ni
            asesoría jurídica, tributaria o contable. Los valores reales dependen de la subpartida
            arancelaria aplicable, el origen, la normatividad vigente y las decisiones de la
            autoridad competente. Verifica siempre con las entidades competentes y con profesionales
            habilitados antes de decidir.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-foreground">{label}</span>
      <input
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^\d.]/g, ""))}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 font-mono text-sm tabular-nums transition-colors focus:border-ring focus:outline-none"
      />
      <span className="mt-1.5 flex items-start gap-1 text-[11px] leading-snug text-muted-foreground">
        <Info className="mt-0.5 size-3 shrink-0" />
        {hint}
      </span>
    </label>
  );
}
