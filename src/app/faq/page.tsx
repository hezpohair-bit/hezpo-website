import type { Metadata } from "next";
import { FAQList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { faqGroups } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description: "Product, wholesale, dealer and salon FAQ for Hezpo Malaysia.",
  path: "/faq"
});

export default function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Answers for customers, wholesalers, dealers and salons." text="Find quick answers about Hezpo products, ordering, wholesale supply, dealer applications and professional salon support." />
      <section className="section-pad bg-mist">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {faqGroups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-4 text-2xl font-black text-ink">{group.title}</h2>
              <FAQList items={group.items} />
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
