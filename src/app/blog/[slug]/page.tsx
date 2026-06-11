import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { blogPosts } from "@/lib/site-data";
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
    path: `/blog/${post.slug}`
  });
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} text={post.description} primaryHref="/products" primaryLabel="Shop Products" secondaryHref="/contact" secondaryLabel="WhatsApp Inquiry" />
      <section className="section-pad bg-white">
        <article className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-hezpo-red">Placeholder SEO Article</p>
          <h2 className="mt-4 text-3xl font-black text-ink">Article outline</h2>
          <p className="mt-4 text-base leading-7 text-charcoal/80">
            This page is a ready SEO placeholder for future long-form content. It can be expanded with product images, internal links, comparison tables and Malaysia-focused search terms.
          </p>
          <div className="mt-8 grid gap-4">
            {post.points.map((point) => (
              <div className="rounded-md border border-line bg-mist p-5 font-semibold text-ink" key={point}>
                {point}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/products">View Hezpo Products</ButtonLink>
            <ButtonLink href="/blog" variant="secondary">Back to Blog</ButtonLink>
          </div>
        </article>
      </section>
      <WhatsAppCTA title="Need product advice?" text="Ask Hezpo which product is suitable for your hairstyle, salon or reseller channel." message={`Hi Hezpo, I read ${post.title} and want product advice.`} />
    </>
  );
}
