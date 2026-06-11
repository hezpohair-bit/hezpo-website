import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { FAQList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { ProductVisual } from "@/components/product-visual";
import { productSchema } from "@/lib/schema";
import type { Product } from "@/lib/site-data";
import { products } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import { whatsappMessage } from "@/lib/utils";

const product = products.find((item) => item.slug === "hermoso-hair-spray");

export const metadata: Metadata = pageMetadata({
  title: "Hermoso Professional Extra Hold Hair Spray 420ml",
  description: "Extra hold hair spray for long-lasting styling control in Malaysia weather.",
  path: "/products/hermoso-hair-spray"
});

export default function HermosoHairSprayPage() {
  if (!product) notFound();

  return <ProductDetail product={product} />;
}

function ProductDetail({ product }: { product: Product }) {
  return (
    <>
      <JsonLd data={productSchema(product)} />
      <section className="section-pad bg-mist">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ProductVisual accent="red" name={product.shortName} />
          <div className="rounded-md border border-line bg-white p-6 shadow-soft">
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-ink">{product.name}</h1>
            <p className="mt-4 text-lg leading-8 text-charcoal/80">{product.summary}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink external href={whatsappMessage(`Hi Hezpo, I am interested in ${product.shortName}. Please send me more details.`)}>
                WhatsApp Ask Button
              </ButtonLink>
            </div>
          </div>
        </div>
        <ProductSections product={product} />
      </section>
    </>
  );
}

function ProductSections({ product }: { product: Product }) {
  return (
    <div className="container-page mt-8 grid gap-6 lg:grid-cols-3">
      <InfoBlock title="Key Selling Points" items={product.sellingPoints} />
      <InfoBlock title="How To Use" items={product.howToUse} ordered />
      <div className="lg:col-span-1">
        <h2 className="mb-4 text-2xl font-black text-ink">FAQ</h2>
        <FAQList items={product.faq} />
      </div>
    </div>
  );
}

function InfoBlock({ title, items, ordered = false }: { title: string; items: readonly string[]; ordered?: boolean }) {
  const List = ordered ? "ol" : "ul";
  return (
    <div className="rounded-md border border-line bg-white p-6 shadow-soft">
      <h2 className="text-2xl font-black text-ink">{title}</h2>
      <List className="mt-5 space-y-3 text-sm leading-6 text-charcoal/80">
        {items.map((item) => (
          <li className={ordered ? "ml-5 list-decimal" : "ml-5 list-disc"} key={item}>{item}</li>
        ))}
      </List>
    </div>
  );
}
