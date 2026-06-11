import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { FAQList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { faqGroups } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

type FAQCategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return faqGroups.map((group) => ({ slug: group.slug }));
}

export async function generateMetadata({ params }: FAQCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const group = faqGroups.find((item) => item.slug === slug);

  if (!group) {
    return {
      title: "FAQ"
    };
  }

  return pageMetadata({
    title: group.title,
    description: `${group.title} for Hezpo Malaysia hair styling products, customers and trade partners.`,
    path: `/faq/${group.slug}`,
    keywords: group.items.map((item) => item.q)
  });
}

export default async function FAQCategoryPage({ params }: FAQCategoryPageProps) {
  const { slug } = await params;
  const group = faqGroups.find((item) => item.slug === slug);

  if (!group) notFound();

  return (
    <>
      <PageHero eyebrow="Hezpo FAQ" title={group.title} text={`Answers for ${group.title.toLowerCase()} related to Hezpo Malaysia hair styling products and partner programs.`} primaryHref="/contact" primaryLabel="WhatsApp Inquiry" secondaryHref="/faq" secondaryLabel="All FAQ" />
      <section className="section-pad bg-mist">
        <div className="container-page max-w-4xl">
          <FAQList items={group.items} />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/products" variant="secondary">Products</ButtonLink>
            <ButtonLink href="/wholesale" variant="secondary">Wholesale</ButtonLink>
            <ButtonLink href="/salon" variant="secondary">Salon</ButtonLink>
            <ButtonLink href="/contact">Contact Hezpo</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
