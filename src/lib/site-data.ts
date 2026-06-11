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
  url: "https://hezpo.com",
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
    slug: "best-hair-spray-malaysia",
    title: "Best Hair Spray Malaysia",
    category: "Hair Spray Malaysia",
    description:
      "A practical guide to choosing hair spray for Malaysia humidity, daily styling and professional finishing.",
    points: [
      "Look for strong hold that can handle humid weather.",
      "Choose a fast-drying spray for daily use.",
      "Use light layers instead of one heavy spray."
    ]
  },
  {
    slug: "hair-spray-vs-hair-wax",
    title: "Hair Spray vs Hair Wax",
    category: "Product Comparison",
    description:
      "Understand when to use hair spray, when to use wax and how each product supports different hairstyles.",
    points: [
      "Hair spray is best for finishing and locking shape.",
      "Hair wax is better for moulding and restyling.",
      "Some styles use both: wax first, spray last."
    ]
  },
  {
    slug: "how-to-fix-helmet-hair",
    title: "How To Fix Helmet Hair",
    category: "Hair Styling Guide",
    description:
      "Simple styling steps for riders and commuters who need to recover shape after wearing a helmet.",
    points: [
      "Refresh roots with fingers before adding more product.",
      "Use clay to rebuild texture in flattened areas.",
      "Finish with hair spray to hold the corrected shape."
    ]
  },
  {
    slug: "best-hair-products-for-humid-weather",
    title: "Best Hair Products For Humid Weather",
    category: "Hair Styling Guide",
    description:
      "A Malaysia-focused placeholder guide for choosing styling products in hot, humid and sweaty conditions.",
    points: [
      "Use lightweight styling layers.",
      "Pick products that support hold without heavy buildup.",
      "Carry a simple touch-up routine for long days."
    ]
  },
  {
    slug: "hair-clay-vs-hair-spray",
    title: "Hair Clay vs Hair Spray",
    category: "Men's Hair Products",
    description:
      "Compare matte texture from hair clay with finishing hold from hair spray for men's styling.",
    points: [
      "Hair clay creates texture, volume and shape.",
      "Hair spray locks the final style in place.",
      "For structured matte styles, clay and spray can work together."
    ]
  }
] as const;

export type BlogPost = (typeof blogPosts)[number];

export const faqGroups = [
  {
    title: "Product FAQ",
    items: [
      {
        q: "What products does Hezpo currently sell?",
        a: "V1 focuses on Hermoso Professional Extra Hold Hair Spray 420ml and HSIS Hair Clay."
      },
      {
        q: "Will Hezpo add more products?",
        a: "Yes. Shampoo, hair mask, hair color, hair iron and more styling SKUs can be added later."
      }
    ]
  },
  {
    title: "Wholesale FAQ",
    items: [
      {
        q: "Do you support reseller and bulk orders?",
        a: "Yes. Wholesale inquiries can be submitted through WhatsApp or the website contact form."
      },
      {
        q: "Is there a fixed MOQ?",
        a: "MOQ depends on product mix and location. Hezpo will confirm details during inquiry."
      }
    ]
  },
  {
    title: "Dealer FAQ",
    items: [
      {
        q: "Can I apply to become a Hezpo dealer?",
        a: "Yes. Dealer applications are open for qualified partners in suitable territories."
      },
      {
        q: "Does Hezpo provide marketing support?",
        a: "Dealer support can include product information, sales material and training support."
      }
    ]
  },
  {
    title: "Salon FAQ",
    items: [
      {
        q: "Can salons buy professional pricing?",
        a: "Yes. Salons, barbers and professional users can request salon pricing."
      },
      {
        q: "Can salons retail Hezpo products?",
        a: "Yes. The salon program includes retail program positioning for professional locations."
      }
    ]
  }
];
