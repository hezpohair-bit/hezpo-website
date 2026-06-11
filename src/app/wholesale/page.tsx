import type { Metadata } from "next";
import { FeatureGrid } from "@/components/feature-grid";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { channelFeatures, products } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hair Product Wholesale Malaysia",
  description: "Wholesale inquiry page for Hezpo hair spray, hair clay and future hair care products.",
  path: "/wholesale"
});

export default function WholesalePage() {
  return (
    <>
      <PageHero eyebrow="B2B Wholesale" title="Bulk supply for resellers, retailers and online sellers." text="Request MOQ, product catalog and bulk pricing for Hezpo hair styling products in Malaysia." primaryHref="#inquiry" primaryLabel="Wholesale Inquiry" secondaryHref="/products" secondaryLabel="View Catalog" />
      <WhatsAppCTA title="Need MOQ or bulk pricing?" text="Send a quick WhatsApp inquiry and Hezpo can follow up with product mix, quantity and delivery details." message="Hi Hezpo, I want to ask about wholesale MOQ and bulk pricing." label="WhatsApp Wholesale Inquiry" />
      <section className="section-pad bg-white">
        <div className="container-page">
          <FeatureGrid features={channelFeatures.wholesale} />
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="Product Catalog" title="Current wholesale-ready range." text="Simple range now, structured to add more hair care and styling SKUs later." />
          <div className="mt-8 grid gap-6">
            {products.map((product) => <ProductCard product={product} key={product.slug} />)}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white" id="inquiry">
        <div className="container-page max-w-4xl">
          <InquiryForm title="WhatsApp Wholesale Inquiry Form" type="wholesale" />
        </div>
      </section>
    </>
  );
}
