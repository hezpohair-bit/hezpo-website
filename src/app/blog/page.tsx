import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { blogCategories, blogPosts } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hair Styling Blog Malaysia",
  description: "Hezpo blog structure for hair spray Malaysia, styling guides, men's hair products, salon tips and comparisons.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog / GEO SEO" title="Hair care and styling content structure for Malaysia search." text="V1 creates the category foundation first. Future posts can target product education, local weather problems, styling guides and professional sales content." />
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Categories" title="SEO categories ready for future content." text="Each category can later become a hub page with articles, internal links and product CTAs." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {blogCategories.map((category) => (
              <Link className="focus-ring rounded-md border border-line bg-mist p-5 font-black text-ink hover:border-hezpo-red hover:bg-white" href={`/blog/${blogPosts.find((post) => post.category === category)?.slug ?? blogPosts[0].slug}`} key={category}>
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-page">
          <div className="rounded-md border border-line bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black text-ink">Suggested first articles</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {blogPosts.map((post) => (
                <Link className="focus-ring rounded-md border border-line p-4 text-sm font-bold text-charcoal hover:border-hezpo-red hover:text-hezpo-red" href={`/blog/${post.slug}`} key={post.slug}>
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
