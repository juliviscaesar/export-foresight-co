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
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="label-mono text-signal">{kicker}</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[.92] text-balance sm:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-foreground/70">
          {description}
        </p>
      </div>
    </div>
  );
}
