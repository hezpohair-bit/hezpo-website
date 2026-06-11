import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Hezpo",
  description: "Hezpo is a Malaysia hair care and hair styling product company.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Hezpo is a Malaysia hair care and hair styling product company." text="We serve everyday consumers, resellers, dealers, salons and barbers with practical hair styling products built for local market needs." primaryHref="/products" primaryLabel="Explore Products" secondaryHref="/contact" secondaryLabel="Contact Us" />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="Brand Direction" title="Professional, clean and commercial." text="Hezpo is positioned as a practical local brand that can sell online, support wholesale growth and build professional relationships with salons and barbers." />
          <div className="rounded-md border border-line bg-mist p-6">
            {[
              "Malaysia hair care and styling focus",
              "Consumer and trade channel ready",
              "Future SKU expansion structure",
              "Clear education for product selling"
            ].map((item) => (
              <div className="flex gap-3 border-b border-line py-4 last:border-b-0" key={item}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-hezpo-green" size={20} />
                <p className="font-bold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
