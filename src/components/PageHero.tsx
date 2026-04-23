import { CtaButton } from "./CtaButton";

type PageHeroProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  badge?: string;
};

export function PageHero({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  badge,
}: PageHeroProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 sm:p-10">
      {badge ? <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-400">{badge}</p> : null}
      <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-zinc-300">{description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <CtaButton href={primaryHref} label={primaryLabel} />
        {secondaryHref && secondaryLabel ? (
          <CtaButton href={secondaryHref} label={secondaryLabel} variant="secondary" />
        ) : null}
      </div>
    </section>
  );
}
