import type { Metadata } from "next";
import { Mail, MessageCircle, ShoppingBag, Video } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { site } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";
import { whatsappMessage } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Contact Hezpo",
  description: "Contact Hezpo by WhatsApp, Shopee, TikTok Shop, email or contact form.",
  path: "/contact"
});

export default function ContactPage() {
  const links = [
    { icon: MessageCircle, label: "WhatsApp", href: whatsappMessage("Hi Hezpo, I want to make an inquiry.", { page: "contact", type: "contact" }) },
    { icon: ShoppingBag, label: "Shopee", href: site.shopee },
    { icon: Video, label: "TikTok Shop", href: site.tiktok },
    { icon: Mail, label: site.email, href: `mailto:${site.email}` }
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to Hezpo about buying, wholesale, dealer or salon programs." text="Reach us through WhatsApp, Shopee, TikTok Shop, email or the contact form below. For faster response, please contact us via WhatsApp." />
      <WhatsAppCTA title="Fastest way to reach Hezpo" text="Choose WhatsApp for product questions, wholesale pricing, dealer applications or salon support." message="Hi Hezpo, I want to make an inquiry." page="contact" type="contact" />
      <section className="section-pad bg-mist">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a className="focus-ring flex items-center gap-4 rounded-md border border-line bg-white p-5 font-bold text-ink shadow-soft hover:border-hezpo-red" href={link.href} key={link.label} rel="noreferrer" target={link.href.startsWith("mailto") ? undefined : "_blank"}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-mist text-hezpo-red">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  {link.label}
                </a>
              );
            })}
          </div>
          <InquiryForm title="Contact Form" type="contact" />
        </div>
      </section>
    </>
  );
}
