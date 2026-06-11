import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Hair Styling Products Malaysia",
  description: "Explore Hezpo hair styling products including Hermoso Hair Spray and HSIS Hair Clay.",
  path: "/products"
});

export default function ProductsPage() {
  return (
    <>
      <PageHero eyebrow="Products" title="Hair styling products for Malaysia consumers and trade channels." text="Browse the current Hezpo product range and open each product page for selling points, usage guidance, FAQ and buying links." />
      <section className="section-pad bg-mist">
        <div className="container-page grid gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
