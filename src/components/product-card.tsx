import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ProductVisual } from "@/components/product-visual";
import type { Product } from "@/lib/site-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="grid gap-6 rounded-md border border-line bg-white p-4 shadow-soft sm:p-6 lg:grid-cols-[0.85fr_1fr]">
      <ProductVisual accent={product.accent === "green" ? "green" : "red"} name={product.shortName} />
      <div className="flex flex-col justify-center">
        <p className="eyebrow">{product.category}</p>
        <h2 className="mt-3 text-2xl font-black text-ink">{product.name}</h2>
        <p className="mt-3 text-sm leading-6 text-charcoal/80">{product.summary}</p>
        <ul className="mt-5 space-y-3">
          {product.sellingPoints.slice(0, 3).map((point) => (
            <li className="flex gap-3 text-sm text-charcoal" key={point}>
              <CheckCircle2 className="mt-0.5 shrink-0 text-hezpo-green" size={18} />
              {point}
            </li>
          ))}
        </ul>
        <Link className="focus-ring mt-6 inline-flex w-fit items-center rounded-md bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-hezpo-red" href={`/products/${product.slug}`}>
          View Product
        </Link>
      </div>
    </article>
  );
}
