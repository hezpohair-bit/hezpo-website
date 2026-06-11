import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { customerPaths, products, site, trustPoints } from "@/lib/site-data";
import { whatsappMessage } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-line bg-white">
        <div className="container-page grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p className="eyebrow">Malaysia hair care / hair styling products</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Hezpo for shoppers, wholesalers, dealers and salons.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/80">
              Hezpo supplies professional hair styling products for consumers, salons, wholesalers and distributors in Malaysia.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/products">Shop Products</ButtonLink>
              <ButtonLink external href={whatsappMessage("Hi Hezpo, I want to ask about your hair styling products.")} variant="secondary">
                WhatsApp Inquiry
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {customerPaths.map((path) => {
                const Icon = path.icon;
                return (
                  <Link className="focus-ring group rounded-md border border-line bg-white p-4 shadow-soft transition hover:border-hezpo-red" href={path.href} key={path.title}>
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-mist text-hezpo-red group-hover:bg-hezpo-red group-hover:text-white">
                        <Icon aria-hidden="true" size={20} />
                      </span>
                      <span>
                        <span className="block font-black text-ink">{path.title}</span>
                        <span className="mt-1 block text-sm leading-5 text-charcoal/75">{path.description}</span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-md border border-line bg-mist p-5 shadow-soft">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md bg-hezpo-red p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Hero SKU</p>
                  <p className="mt-12 text-2xl font-black leading-7">Hermoso Extra Hold Hair Spray 420ml</p>
                </div>
                <div className="rounded-md bg-hezpo-green p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Styling SKU</p>
                  <p className="mt-12 text-2xl font-black leading-7">HSIS Hair Clay</p>
                </div>
              </div>
              <div className="mt-4 rounded-md bg-white p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-hezpo-green">
                  <MapPin size={17} /> Built for Malaysia channels
                </div>
                <ul className="mt-4 grid gap-3 text-sm text-charcoal sm:grid-cols-2">
                  {trustPoints.map((point) => (
                    <li className="flex gap-2" key={point}>
                      <CheckCircle2 className="mt-0.5 shrink-0 text-hezpo-green" size={17} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-page">
          <SectionHeading centered eyebrow="Featured Products" title="Start with the core styling range." text="V1 focuses on two practical SKUs while keeping the structure ready for shampoo, hair mask, hair color, hair iron and more." />
          <div className="mt-10 grid gap-6">
            {products.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="One Brand, Four Channels" title="A website that sells and recruits partners." text="Hezpo can serve direct consumers while also collecting wholesale leads, dealer applications and salon inquiries from the same professional web presence." />
          <div className="grid gap-4 sm:grid-cols-2">
            {customerPaths.map((path) => (
              <div className="rounded-md border border-line p-5" key={path.title}>
                <h3 className="font-black text-ink">{path.title}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/75">{path.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-12 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold text-white/60">Ready to explore Hezpo?</p>
            <h2 className="mt-2 text-3xl font-black">Buy, resell or join the professional program.</h2>
          </div>
          <ButtonLink href="/contact" variant="primary">
            Contact Hezpo
          </ButtonLink>
          <ButtonLink external href={site.whatsapp} variant="secondary">
            WhatsApp Inquiry
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
