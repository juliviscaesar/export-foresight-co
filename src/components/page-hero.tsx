export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden bg-ink text-ink-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 20% 0%, black, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <p className="label-mono text-signal">{kicker}</p>
        <h1 className="mt-6 max-w-3xl font-display text-3xl leading-[1.05] font-bold text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/70">
          {description}
        </p>
      </div>
    </div>
  );
}
