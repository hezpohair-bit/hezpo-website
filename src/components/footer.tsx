import Link from "next/link";
import { Mail, MessageCircle, ShoppingBag } from "lucide-react";
import { site } from "@/lib/site-data";
import { whatsappMessage } from "@/lib/utils";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/dealer", label: "Dealer" },
  { href: "/salon", label: "Salon" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link className="focus-ring inline-flex items-center gap-2 rounded-md" href="/">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-sm font-black text-ink">
              H
            </span>
            <span className="text-lg font-black">Hezpo</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
            Malaysia hair care and hair styling product company for consumers, wholesale partners, dealers, salons and barbers.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold">Website</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {footerLinks.map((link) => (
              <Link className="text-sm text-white/75 hover:text-white" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <a className="flex items-center gap-2 hover:text-white" href={whatsappMessage("Hi Hezpo, I want to make an inquiry.", { page: "global-footer", type: "contact" })} rel="noreferrer" target="_blank">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={site.shopee} rel="noreferrer" target="_blank">
              <ShoppingBag size={16} /> Shopee
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={`mailto:${site.email}`}>
              <Mail size={16} /> {site.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-page text-xs text-white/55">
          (c) {new Date().getFullYear()} Hezpo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
