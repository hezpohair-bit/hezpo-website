import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <article className="rounded-md border border-line bg-white p-5 shadow-soft" key={feature.title}>
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-mist text-hezpo-red">
              <Icon aria-hidden="true" size={22} />
            </div>
            <h3 className="mt-4 text-lg font-black text-ink">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-charcoal/80">{feature.text}</p>
          </article>
        );
      })}
    </div>
  );
}
