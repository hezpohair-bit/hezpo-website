import {
  BadgeCheck,
  Building2,
  GraduationCap,
  Handshake,
  PackageCheck,
  Scissors,
  ShoppingBag,
  Store,
  Truck
} from "lucide-react";
import { whatsappBaseUrl } from "@/lib/utils";

export const site = {
  name: "Hezpo",
  url: "https://www.hezpohair.com",
  description:
    "Hezpo is a Malaysia hair care and hair styling product company serving consumers, wholesalers, dealers, salons and barbers.",
  whatsapp: whatsappBaseUrl,
  shopee: "https://shopee.com.my/",
  tiktok: "https://www.tiktok.com/",
  email: "hello@hezpo.com"
};

export const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/consumer", label: "B2C" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/dealer", label: "Dealer" },
  { href: "/salon", label: "Salon" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export const customerPaths = [
  {
    title: "Shop Products",
    href: "/consumer",
    description: "Buy hair spray, clay and future styling products online.",
    icon: ShoppingBag
  },
  {
    title: "Wholesale Inquiry",
    href: "/wholesale",
    description: "Bulk supply for resellers, online sellers and retail stores.",
    icon: PackageCheck
  },
  {
    title: "Become Dealer",
    href: "/dealer",
    description: "Build a territory with Hezpo product and marketing support.",
    icon: Handshake
  },
  {
    title: "Salon Program",
    href: "/salon",
    description: "Professional pricing and retail programs for salons.",
    icon: Scissors
  }
];

export const products = [
  {
    slug: "hermoso-hair-spray",
    name: "Hermoso Professional Extra Hold Hair Spray 420ml",
    shortName: "Hermoso Hair Spray",
    category: "Hair Spray Malaysia",
    accent: "red",
    summary:
      "Extra hold finishing spray made for long-lasting hairstyle control in Malaysia weather.",
    sellingPoints: [
      "Extra hold for daily styling and professional finishing",
      "Fast-drying mist that helps keep hair shape in humid weather",
      "Suitable for salon, barber and home use",
      "420ml professional can size for better value"
    ],
    howToUse: [
      "Style hair into the desired shape.",
      "Hold the can around 20-30cm away from hair.",
      "Spray evenly in short bursts.",
      "Layer lightly for stronger hold."
    ],
    faq: [
      {
        q: "Is Hermoso Hair Spray suitable for Malaysia humidity?",
        a: "Yes. It is positioned as an extra hold finishing spray for daily styling and humid local weather."
      },
      {
        q: "Can barbers and salons use it?",
        a: "Yes. The 420ml size and strong hold make it suitable for professional use."
      },
      {
        q: "Will it be too heavy for daily styling?",
        a: "Use short, light sprays for everyday styles and add more layers only when stronger hold is needed."
      }
    ]
  },
  {
    slug: "hsis-hair-clay",
    name: "HSIS Hair Clay",
    shortName: "HSIS Hair Clay",
    category: "Men's Hair Products",
    accent: "green",
    summary:
      "Texturising hair clay for controlled matte styles, volume and flexible shaping.",
    sellingPoints: [
      "Matte finish for modern men's styling",
      "Adds texture, shape and volume without a glossy look",
      "Good for short to medium hairstyles",
      "Retail-friendly SKU for salons, barbers and resellers"
    ],
    howToUse: [
      "Scoop a small amount and warm it between palms.",
      "Apply evenly through dry or towel-dried hair.",
      "Shape with fingers for texture or comb for control.",
      "Add a little more product only where extra hold is needed."
    ],
    faq: [
      {
        q: "Is HSIS Hair Clay for men only?",
        a: "It is designed for men's styling needs, but anyone wanting matte texture and control can use it."
      },
      {
        q: "Does it leave a shiny finish?",
        a: "No. The product is positioned for a matte, natural-looking finish."
      },
      {
        q: "Can salons retail this product?",
        a: "Yes. It is a practical retail product for salons and barbers serving men's hairstyles."
      }
    ]
  }
] as const;

export type Product = (typeof products)[number];

export const trustPoints = [
  "Malaysia local market focus",
  "Consumer, wholesale, dealer and salon channels",
  "Clear product education for online selling",
  "Ready for future shampoo, mask, color and iron SKU expansion"
];

export const channelFeatures = {
  wholesale: [
    { icon: Truck, title: "Flexible MOQ", text: "Start with practical order quantities for reseller and retail growth." },
    { icon: Store, title: "Bulk Pricing Inquiry", text: "Request pricing based on product mix, quantity and delivery area." },
    { icon: PackageCheck, title: "Product Catalog", text: "Simple range now, structured for more hair care and styling SKUs." }
  ],
  dealer: [
    { icon: Building2, title: "Territory Opportunity", text: "Apply for area opportunities as the Hezpo range expands." },
    { icon: BadgeCheck, title: "Dealer Benefits", text: "Access channel support, product information and launch materials." },
    { icon: GraduationCap, title: "Training Support", text: "Get product usage guidance for sales teams and retail partners." }
  ],
  salon: [
    { icon: Scissors, title: "Professional Range", text: "Hair spray, clay and future products suitable for salon retail." },
    { icon: Store, title: "Salon Pricing", text: "Inquiry-based pricing for salon, barber and professional accounts." },
    { icon: GraduationCap, title: "Demo Support", text: "Training and demo support for product education and sell-through." }
  ]
};

export const blogCategories = [
  "Hair Spray Malaysia",
  "Hair Styling Guide",
  "Men's Hair Products",
  "Salon Tips",
  "Product Comparison"
];

export const blogPosts = [
  {
    title: "Best Hair Spray Malaysia",
    slug: "best-hair-spray-malaysia",
    category: "Hair Spray Malaysia",
    description: "A practical guide to choosing hair spray in Malaysia for humidity, daily styling and professional finishing.",
    keywords: ["best hair spray Malaysia", "extra hold hair spray", "hair spray for humidity"],
    publishDate: "2026-06-11",
    updatedDate: "2026-06-11",
    readingTime: "4 min read",
    sections: [
      { heading: "What makes a hair spray suitable for Malaysia?", body: "Malaysia weather can make hairstyles collapse faster because of humidity, sweat and daily commuting. A good hair spray should help hold shape without making the hair feel wet, sticky or too heavy." },
      { heading: "When to use extra hold hair spray", body: "Extra hold hair spray is useful when the hairstyle needs to last through work, events, outdoor movement or salon finishing. Use light layers first, then add more only where extra control is needed." }
    ],
    faq: [
      { q: "What is the best hair spray for Malaysia weather?", a: "Choose a fast-drying, extra hold hair spray that can support hairstyles in humid conditions without a heavy sticky finish." },
      { q: "Can hair spray be used daily?", a: "Yes, it can be used daily when applied lightly and washed out properly as part of a normal hair care routine." },
      { q: "Is Hermoso Hair Spray suitable for salons?", a: "Yes. Hermoso Hair Spray is positioned for both home styling and professional salon or barber use." }
    ],
    relatedProducts: ["hermoso-hair-spray"]
  },
  {
    title: "Hair Spray vs Hair Wax",
    slug: "hair-spray-vs-hair-wax",
    category: "Product Comparison",
    description: "Compare hair spray and hair wax so Malaysian users can choose the right product for hold, texture and finishing.",
    keywords: ["hair spray vs hair wax", "hair styling product comparison", "men hair styling Malaysia"],
    publishDate: "2026-06-11",
    updatedDate: "2026-06-11",
    readingTime: "4 min read",
    sections: [
      { heading: "Hair spray is for finishing hold", body: "Hair spray is usually applied after styling. It helps lock the final shape so the hairstyle holds longer through humidity, movement and a busy day." },
      { heading: "Hair wax is for moulding shape", body: "Hair wax is worked into the hair before finishing. It gives control and restyling ability, but it may feel heavier than spray depending on the formula and amount used." }
    ],
    faq: [
      { q: "Should I use hair spray or hair wax?", a: "Use hair wax when you need to shape the hair, and hair spray when you need to hold the final style in place." },
      { q: "Can I use hair spray after wax?", a: "Yes. Many styles use wax or clay first, then hair spray as the final finishing step." },
      { q: "Which is better for humid weather?", a: "Hair spray is often better for final hold in humid weather, while wax is better for flexible shaping." }
    ],
    relatedProducts: ["hermoso-hair-spray", "hsis-hair-clay"]
  },
  {
    title: "How To Fix Helmet Hair",
    slug: "how-to-fix-helmet-hair",
    category: "Hair Styling Guide",
    description: "Simple steps for Malaysian riders and commuters who need to recover hairstyle shape after wearing a helmet.",
    keywords: ["helmet hair Malaysia", "fix helmet hair", "hair clay for men"],
    publishDate: "2026-06-11",
    updatedDate: "2026-06-11",
    readingTime: "3 min read",
    sections: [
      { heading: "Start by lifting the roots", body: "After removing a helmet, use fingers to lift flattened roots before applying more product. Adding product too early can make hair look heavy." },
      { heading: "Use clay for texture and spray for hold", body: "Hair clay can rebuild texture in short to medium hairstyles. Hair spray can then hold the corrected shape after the hair is repositioned." }
    ],
    faq: [
      { q: "How do I fix flat hair after wearing a helmet?", a: "Lift the roots with your fingers, apply a small amount of clay where needed, then finish lightly with hair spray." },
      { q: "Should I carry hair clay for touch-ups?", a: "A small amount of hair clay can help riders and commuters rebuild texture during the day." },
      { q: "Will hair spray stop helmet hair?", a: "Hair spray can help hold a style, but pressure from a helmet may still flatten hair. It is most useful after touch-up." }
    ],
    relatedProducts: ["hsis-hair-clay", "hermoso-hair-spray"]
  },
  {
    title: "Best Hair Products For Humid Weather",
    slug: "best-hair-products-for-humid-weather",
    category: "Hair Styling Guide",
    description: "A Malaysia-focused guide to choosing styling products for hot, humid and sweaty conditions.",
    keywords: ["hair products humid weather", "Malaysia humidity hair", "hair styling Malaysia"],
    publishDate: "2026-06-11",
    updatedDate: "2026-06-11",
    readingTime: "4 min read",
    sections: [
      { heading: "Humidity changes how hair behaves", body: "In humid weather, hairstyles can lose volume, become frizzy or feel oily faster. Styling products should support control without creating unnecessary buildup." },
      { heading: "Build a simple product routine", body: "For many users, clay can create texture and shape while hair spray gives finishing hold. This simple routine works well for everyday styling and professional recommendations." }
    ],
    faq: [
      { q: "What hair product works best in humid weather?", a: "Use lightweight styling products that give control without heavy buildup, then finish with hair spray for hold." },
      { q: "Is hair clay good for humid weather?", a: "Hair clay can work well for matte texture, especially for short to medium men's hairstyles." },
      { q: "How do I keep my hairstyle longer in Malaysia?", a: "Avoid over-applying product, style in light layers and use hair spray as a finishing step." }
    ],
    relatedProducts: ["hermoso-hair-spray", "hsis-hair-clay"]
  },
  {
    title: "Hair Clay vs Hair Spray",
    slug: "hair-clay-vs-hair-spray",
    category: "Men's Hair Products",
    description: "Compare matte texture from hair clay with finishing hold from hair spray for men's styling.",
    keywords: ["hair clay vs hair spray", "hair clay Malaysia", "men hair products Malaysia"],
    publishDate: "2026-06-11",
    updatedDate: "2026-06-11",
    readingTime: "4 min read",
    sections: [
      { heading: "Hair clay creates matte shape", body: "Hair clay is used to build texture, direction and volume. It is especially useful for short to medium men's hairstyles that need a natural matte finish." },
      { heading: "Hair spray locks the final look", body: "Hair spray is used after the hairstyle is shaped. It helps preserve the final look and can be layered for stronger hold." }
    ],
    faq: [
      { q: "Is hair clay better than hair spray?", a: "They serve different purposes. Hair clay shapes the hair, while hair spray holds the final style." },
      { q: "Can I use both hair clay and hair spray?", a: "Yes. Use clay first for texture, then spray lightly to finish." },
      { q: "Which product is better for matte hairstyles?", a: "Hair clay is better for creating matte texture. Hair spray can support the hold after styling." }
    ],
    relatedProducts: ["hsis-hair-clay", "hermoso-hair-spray"]
  },
  {
    title: "Best Men's Hair Styling Products Malaysia",
    slug: "best-mens-hair-styling-products-malaysia",
    category: "Men's Hair Products",
    description: "A practical guide for Malaysian men choosing hair clay, hair spray and styling products for daily use.",
    keywords: ["men hair styling products Malaysia", "best men's hair products Malaysia", "hair clay Malaysia"],
    publishDate: "2026-06-11",
    updatedDate: "2026-06-11",
    readingTime: "4 min read",
    sections: [
      { heading: "Start with the hairstyle goal", body: "Men's styling products should match the look: matte texture, volume, strong hold or clean professional finishing. Short styles often need clay, while finished looks benefit from spray." },
      { heading: "Choose products that fit Malaysia routines", body: "For hot weather and commuting, products should be easy to apply, easy to explain and suitable for fast daily styling." }
    ],
    faq: [
      { q: "What is a good men's hair styling product in Malaysia?", a: "Hair clay is useful for matte texture, while hair spray is useful for finishing hold." },
      { q: "Is HSIS Hair Clay suitable for men?", a: "Yes. HSIS Hair Clay is positioned for men's matte styling, texture and control." },
      { q: "Can men use hair spray every day?", a: "Yes, use light layers and wash product out properly." }
    ],
    relatedProducts: ["hsis-hair-clay", "hermoso-hair-spray"]
  },
  {
    title: "Hair Spray For Malaysian Weather",
    slug: "hair-spray-for-malaysian-weather",
    category: "Hair Spray Malaysia",
    description: "How to choose and use hair spray for Malaysia humidity, heat, sweat and daily movement.",
    keywords: ["hair spray Malaysian weather", "humidity hair spray Malaysia", "hair spray for hot weather"],
    publishDate: "2026-06-11",
    updatedDate: "2026-06-11",
    readingTime: "3 min read",
    sections: [
      { heading: "Malaysia weather needs reliable finishing", body: "Humidity and heat can reduce hairstyle hold. Hair spray helps by adding a finishing layer after the style is shaped." },
      { heading: "Apply in light layers", body: "Hold the spray away from the hair and apply in short bursts. Layering lightly gives better control than soaking the hair." }
    ],
    faq: [
      { q: "Does hair spray work in Malaysian weather?", a: "A suitable extra hold hair spray can help hairstyles last longer in humid conditions." },
      { q: "How much hair spray should I use?", a: "Start with light sprays and add more only where stronger hold is needed." },
      { q: "Can salons use Hermoso Hair Spray?", a: "Yes. It is positioned for professional finishing and daily styling." }
    ],
    relatedProducts: ["hermoso-hair-spray"]
  },
  {
    title: "Non Sticky Hair Spray Malaysia",
    slug: "non-sticky-hair-spray-malaysia",
    category: "Hair Spray Malaysia",
    description: "What to look for when choosing a non-sticky hair spray for Malaysian daily styling and salon finishing.",
    keywords: ["non sticky hair spray Malaysia", "fast dry hair spray", "hair spray Malaysia"],
    publishDate: "2026-06-11",
    updatedDate: "2026-06-11",
    readingTime: "3 min read",
    sections: [
      { heading: "Why non-sticky feel matters", body: "A sticky finish can make hair look wet, heavy or uncomfortable. For daily use, many customers prefer a spray that dries fast and keeps the style clean." },
      { heading: "Use the right distance", body: "Non-sticky results also depend on application. Spray from a proper distance and avoid overloading one area." }
    ],
    faq: [
      { q: "How do I avoid sticky hair spray?", a: "Use short bursts from a distance and avoid applying too much product in one spot." },
      { q: "Is fast-drying hair spray better for daily use?", a: "Fast-drying spray is easier for quick morning styling and professional salon finishing." },
      { q: "What product should I ask Hezpo about?", a: "Ask about Hermoso Hair Spray if you need extra hold and fast-drying finishing." }
    ],
    relatedProducts: ["hermoso-hair-spray"]
  },
  {
    title: "Extra Hold Hair Spray Malaysia",
    slug: "extra-hold-hair-spray-malaysia",
    category: "Hair Spray Malaysia",
    description: "A guide to extra hold hair spray for events, salons, barbers and humid Malaysia weather.",
    keywords: ["extra hold hair spray Malaysia", "strong hold hair spray", "professional hair spray Malaysia"],
    publishDate: "2026-06-11",
    updatedDate: "2026-06-11",
    readingTime: "4 min read",
    sections: [
      { heading: "Who needs extra hold?", body: "Extra hold is useful for users who want hairstyles to last longer, especially for events, professional finishing, outdoor movement and long workdays." },
      { heading: "Professional use cases", body: "Salons and barbers can use extra hold spray as a finishing product after cutting, blow-drying or styling." }
    ],
    faq: [
      { q: "What does extra hold hair spray do?", a: "It helps keep the finished hairstyle in place for longer than lighter styling products." },
      { q: "Is extra hold suitable for daily use?", a: "Yes, but apply lightly for daily styling and increase layers only when needed." },
      { q: "Is Hermoso Hair Spray extra hold?", a: "Yes. Hermoso Professional Extra Hold Hair Spray is positioned as an extra hold finishing spray." }
    ],
    relatedProducts: ["hermoso-hair-spray"]
  },
  {
    title: "Salon Hair Products Malaysia",
    slug: "salon-hair-products-malaysia",
    category: "Salon Tips",
    description: "How salons and barbers in Malaysia can choose retail-friendly styling products for professional use.",
    keywords: ["salon hair products Malaysia", "barber products Malaysia", "salon retail hair products"],
    publishDate: "2026-06-11",
    updatedDate: "2026-06-11",
    readingTime: "4 min read",
    sections: [
      { heading: "Salon products should be easy to demonstrate", body: "Retail-friendly salon products are easier to sell when stylists can show how they work during actual styling." },
      { heading: "Build a simple styling range", body: "A practical range can start with hair spray for finishing and hair clay for men's matte texture, then expand into shampoo, masks, color or tools later." }
    ],
    faq: [
      { q: "Can salons buy Hezpo products?", a: "Yes. Salons and barbers can request salon pricing and product information through Hezpo." },
      { q: "Can salons retail hair spray and clay?", a: "Yes. Hair spray and hair clay are practical retail products because customers can understand their daily use." },
      { q: "Does Hezpo support training?", a: "The salon program is positioned with training and demo support for professional partners." }
    ],
    relatedProducts: ["hermoso-hair-spray", "hsis-hair-clay"]
  }
] as const;

export type BlogPost = (typeof blogPosts)[number];

export const faqGroups = [
  {
    slug: "product",
    title: "Product FAQ",
    items: [
      { q: "What products does Hezpo currently sell?", a: "Hezpo currently highlights Hermoso Professional Extra Hold Hair Spray 420ml and HSIS Hair Clay." },
      { q: "Will Hezpo add more products?", a: "Yes. Shampoo, hair mask, hair color, hair iron and more styling SKUs can be added later." },
      { q: "Are Hezpo products suitable for Malaysia weather?", a: "Hezpo content and product positioning focus on Malaysia heat, humidity and daily styling needs." },
      { q: "Can consumers and professionals both use Hezpo products?", a: "Yes. The range is positioned for consumers, salons, barbers, wholesalers and dealers." },
      { q: "Where can I ask about Hezpo products?", a: "Use the WhatsApp inquiry button on the website for faster product information." }
    ]
  },
  {
    slug: "hair-spray",
    title: "Hair Spray FAQ",
    items: [
      { q: "What is Hermoso Hair Spray used for?", a: "Hermoso Hair Spray is used as a finishing spray to help keep hairstyles in place." },
      { q: "Is Hermoso Hair Spray extra hold?", a: "Yes. It is positioned as a professional extra hold hair spray." },
      { q: "Is hair spray suitable for Malaysia humidity?", a: "A suitable extra hold hair spray can help hairstyles last longer in humid weather." },
      { q: "How should I apply hair spray?", a: "Hold the can around 20-30cm away and spray in short, light bursts." },
      { q: "Can salons use Hermoso Hair Spray?", a: "Yes. It is suitable for salon, barber and home finishing use." }
    ]
  },
  {
    slug: "hair-clay",
    title: "Hair Clay FAQ",
    items: [
      { q: "What is HSIS Hair Clay used for?", a: "HSIS Hair Clay is used for matte texture, volume and controlled shaping." },
      { q: "Is hair clay good for men's hairstyles?", a: "Yes. Hair clay is commonly used for short to medium men's styles." },
      { q: "Does hair clay look shiny?", a: "HSIS Hair Clay is positioned for a matte, natural-looking finish." },
      { q: "Should I use hair clay on dry or wet hair?", a: "Apply it to dry or towel-dried hair depending on the level of control and texture you want." },
      { q: "Can hair clay and hair spray be used together?", a: "Yes. Use clay to shape the hair, then spray to hold the finished style." }
    ]
  },
  {
    slug: "wholesale",
    title: "Wholesale FAQ",
    items: [
      { q: "Do you support reseller and bulk orders?", a: "Yes. Wholesale inquiries can be submitted through WhatsApp or the website contact form." },
      { q: "Is there a fixed MOQ?", a: "MOQ depends on product mix and location. Hezpo will confirm details during inquiry." },
      { q: "Can wholesalers request a product catalog?", a: "Yes. Wholesale customers can request catalog and product information through WhatsApp." },
      { q: "Does Hezpo support Malaysia resellers?", a: "Yes. Hezpo is positioned for Malaysia retail, reseller and online seller channels." },
      { q: "Can wholesale customers ask about future SKUs?", a: "Yes. Hezpo can discuss the growing product range and future SKU plans with trade partners." }
    ]
  },
  {
    slug: "dealer",
    title: "Dealer FAQ",
    items: [
      { q: "Can I apply to become a Hezpo dealer?", a: "Yes. Dealer applications are open for qualified partners in suitable territories." },
      { q: "Does Hezpo provide marketing support?", a: "Dealer support can include product information, sales material and training support." },
      { q: "Are territory opportunities available?", a: "Hezpo can discuss territory opportunities with interested dealer and distributor partners." },
      { q: "Will dealers get product training?", a: "Dealer benefits include product training and product usage guidance." },
      { q: "Can dealers sell future Hezpo SKUs?", a: "The dealer program is designed to grow as Hezpo adds future hair care and styling SKUs." }
    ]
  },
  {
    slug: "salon",
    title: "Salon FAQ",
    items: [
      { q: "Can salons buy professional pricing?", a: "Yes. Salons, barbers and professional users can request salon pricing." },
      { q: "Can salons retail Hezpo products?", a: "Yes. The salon program includes retail program positioning for professional locations." },
      { q: "Does Hezpo provide training support for salons?", a: "Yes. The salon program includes training and demo support positioning." },
      { q: "Are Hezpo products suitable for barbers?", a: "Yes. Hair spray and hair clay are practical styling products for barbers and men's grooming shops." },
      { q: "Can salons ask for product demos?", a: "Yes. Salons can inquire about demo support through WhatsApp." }
    ]
  }
] as const;

export type FAQGroup = (typeof faqGroups)[number];
