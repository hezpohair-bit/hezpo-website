import type { Metadata } from "next";
import { CloudSun, Droplets, ShoppingBag, Wand2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Buy Hair Styling Products Malaysia",
  description: "Shop Hezpo hair spray and hair clay for Malaysia weather, daily styling and long-lasting hold.",
  path: "/consumer"
});

export default function ConsumerPage() {
  return (
    <>
      <PageHero eyebrow="B2C Store" title="Hair styling that works for Malaysia weather." text="For everyday users who want better hold, less style collapse and easy buying through Shopee, TikTok Shop or WhatsApp." primaryHref="/products" primaryLabel="Shop Products" secondaryHref="/contact" secondaryLabel="Ask on WhatsApp" />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-line bg-mist p-5">
              <p className="text-sm font-bold text-charcoal/70">Before</p>
              <p className="mt-8 text-2xl font-black text-ink">Flat, collapsed, hard to keep shape.</p>
            </div>
            <div className="rounded-md border border-line bg-ink p-5 text-white">
              <p className="text-sm font-bold text-white/70">After</p>
              <p className="mt-8 text-2xl font-black">Controlled, cleaner finish, better daily style.</p>
            </div>
          </div>
          <SectionHeading eyebrow="Before After" title="Turn styling frustration into a simple daily routine." text="Hezpo's current range covers finishing hold with Hermoso Hair Spray and matte texture with HSIS Hair Clay." />
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {[
            { icon: CloudSun, title: "Humidity", text: "Malaysia heat and humidity can make hairstyles lose shape quickly." },
            { icon: Droplets, title: "Oil and Sweat", text: "Daily commuting and outdoor movement can flatten volume." },
            { icon: Wand2, title: "Styling Solution", text: "Use clay for structure and hair spray for extra finishing hold." }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article className="rounded-md border border-line bg-white p-5 shadow-soft" key={item.title}>
                <Icon className="text-hezpo-red" size={26} />
                <h2 className="mt-4 text-xl font-black text-ink">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-charcoal/80">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-hezpo-red py-12 text-white">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <ShoppingBag size={28} />
            <h2 className="mt-3 text-3xl font-black">Buy Hezpo styling products online.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink external href={site.shopee} variant="secondary">Shopee</ButtonLink>
            <ButtonLink external href={site.tiktok} variant="secondary">TikTok Shop</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
