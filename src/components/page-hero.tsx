import { ButtonLink } from "@/components/button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: PageHeroProps) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="container-page section-pad">
        <div className="max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-charcoal/80">{text}</p>
          {(primaryHref || secondaryHref) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryHref && primaryLabel ? <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink> : null}
              {secondaryHref && secondaryLabel ? (
                <ButtonLink href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </ButtonLink>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
