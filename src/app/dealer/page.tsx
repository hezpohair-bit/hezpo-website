import type { Metadata } from "next";
import { FeatureGrid } from "@/components/feature-grid";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { channelFeatures } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Become Hezpo Dealer Malaysia",
  description: "Apply to become a Hezpo dealer or distributor for Malaysia hair care and styling products.",
  path: "/dealer"
});

export default function DealerPage() {
  return (
    <>
      <PageHero eyebrow="Dealer / Distributor" title="Become a Hezpo dealer as the product range expands." text="Hezpo is building a practical Malaysia channel network for hair styling and future hair care SKUs." primaryHref="#apply" primaryLabel="Apply as Dealer" secondaryHref="/wholesale" secondaryLabel="Wholesale Info" />
      <WhatsAppCTA title="Interested in dealer territory?" text="Ask Hezpo about dealer requirements, area opportunity, marketing support and training support." message="Hi Hezpo, I want to apply as a dealer or distributor." label="WhatsApp Dealer Inquiry" />
      <section className="section-pad bg-white">
        <div className="container-page">
          <FeatureGrid features={channelFeatures.dealer} />
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="Support" title="Marketing and training support for channel growth." text="Dealer partners need more than product supply. V1 positions Hezpo with clear channel support that can grow into materials, campaigns, sampling and product education." />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Product information", "Marketing content", "Sales talking points", "Training support"].map((item) => (
              <div className="rounded-md border border-line bg-white p-5 font-bold text-ink" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white" id="apply">
        <div className="container-page max-w-4xl">
          <InquiryForm title="Apply as Dealer" type="dealer" />
        </div>
      </section>
    </>
  );
}
