import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { FAQList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { blogPosts, products } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Blog"
    };
  }

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const relatedProductSlugs: readonly string[] = post.relatedProducts;
  const relatedProducts = products.filter((product) =>
    relatedProductSlugs.includes(product.slug)
  );

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} text={post.description} primaryHref="/products" primaryLabel="Shop Products" secondaryHref="/contact" secondaryLabel="WhatsApp Inquiry" />
      <section className="section-pad bg-white">
        <article className="container-page max-w-4xl">
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-charcoal/70">
            <span>{post.publishDate}</span>
            <span>{post.readingTime}</span>
            <span>Updated {post.updatedDate}</span>
          </div>
          <div className="mt-8 space-y-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-black text-ink">{section.heading}</h2>
                <p className="mt-3 text-base leading-7 text-charcoal/80">{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-10 rounded-md border border-line bg-mist p-5">
            <h2 className="text-2xl font-black text-ink">Helpful Hezpo links</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <ButtonLink href="/products" variant="secondary">Products</ButtonLink>
              <ButtonLink href="/wholesale" variant="secondary">Wholesale</ButtonLink>
              <ButtonLink href="/salon" variant="secondary">Salon</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Contact</ButtonLink>
            </div>
          </div>
        </article>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-page">
          <h2 className="text-3xl font-black text-ink">Related Products</h2>
          <div className="mt-8 grid gap-6">
            {relatedProducts.map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="mb-5 text-3xl font-black text-ink">FAQ</h2>
          <FAQList items={post.faq} />
        </div>
      </section>
      <WhatsAppCTA title="Need product advice?" text="Ask Hezpo which product is suitable for your hairstyle, salon or reseller channel." message={`Hi Hezpo, I read ${post.title} and want product advice.`} />
    </>
  );
}
