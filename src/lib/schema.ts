import type { BlogPost, Product } from "@/lib/site-data";
import { site } from "@/lib/site-data";

type FAQSchemaGroup = {
  title: string;
  items: readonly {
    q: string;
    a: string;
  }[];
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    sameAs: [site.whatsapp, site.shopee, site.tiktok],
    description: site.description
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en-MY"
  };
}

export function productSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: {
      "@type": "Brand",
      name: site.name
    },
    category: product.category,
    description: product.summary,
    url: `${site.url}/products/${product.slug}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "MYR",
      url: `${site.url}/products/${product.slug}`
    }
  };
}

export function faqPageSchema(group: FAQSchemaGroup) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: group.title,
    mainEntity: group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    keywords: post.keywords.join(", "),
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    author: {
      "@type": "Organization",
      name: site.name
    },
    publisher: {
      "@type": "Organization",
      name: site.name
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    inLanguage: "en-MY"
  };
}
