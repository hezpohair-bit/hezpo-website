import type { Metadata } from "next";
import { FeatureGrid } from "@/components/feature-grid";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { channelFeatures } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Salon Professional Hair Products Malaysia",
  description: "Hezpo salon and barber program with professional product range, salon pricing and training support.",
  path: "/salon"
});

export default function SalonPage() {
  return (
    <>
      <PageHero eyebrow="Salon / Professional" title="Professional styling products for salons and barbers." text="Request salon pricing, retail program details and product demo support for Hezpo hair spray, hair clay and future professional SKUs." primaryHref="#salon-inquiry" primaryLabel="Salon Inquiry" secondaryHref="/products" secondaryLabel="View Products" />
      <WhatsAppCTA title="Need salon pricing or demo support?" text="Message Hezpo for professional pricing, retail program details and product usage guidance." message="Hi Hezpo, I want to ask about salon pricing and demo support." label="WhatsApp Salon Inquiry" />
      <section className="section-pad bg-white">
        <div className="container-page">
          <FeatureGrid features={channelFeatures.salon} />
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-page grid gap-8 lg:grid-cols-2 lg:items-start">
          <SectionHeading eyebrow="Retail Program" title="Add easy-to-explain styling products to your salon counter." text="Hermoso Hair Spray and HSIS Hair Clay give stylists and barbers simple product stories for finishing, hold, matte texture and daily home styling." />
          <div className="rounded-md border border-line bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black text-ink">Training / Demo Support</h2>
            <p className="mt-3 text-sm leading-6 text-charcoal/80">
              Hezpo can support product education for stylists, barbers and sales teams through demos, usage guidance and retail talking points.
            </p>
          </div>
        </div>
      </section>
      <section className="section-pad bg-white" id="salon-inquiry">
        <div className="container-page max-w-4xl">
          <InquiryForm title="Salon Inquiry Form" type="salon" />
        </div>
      </section>
    </>
  );
}
