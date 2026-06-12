import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import { whatsappMessage } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link className="focus-ring flex items-center gap-2 rounded-md" href="/">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink text-sm font-black text-white">
            H
          </span>
          <span className="text-lg font-black tracking-wide">Hezpo</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link className="focus-ring rounded-md text-sm font-semibold text-charcoal hover:text-hezpo-red" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a className="focus-ring hidden min-h-10 items-center gap-2 rounded-md bg-hezpo-green px-4 text-sm font-bold text-white hover:bg-ink sm:inline-flex" href={whatsappMessage("Hi Hezpo, I want to make an inquiry.", { page: "global-header", type: "contact" })} rel="noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" size={16} />
            WhatsApp
          </a>
          <details className="relative lg:hidden">
            <summary className="focus-ring flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-line">
              <Menu aria-label="Open menu" size={20} />
            </summary>
            <nav className="absolute right-0 mt-3 w-60 rounded-md border border-line bg-white p-2 shadow-soft">
              {navLinks.map((link) => (
                <Link className="block rounded-md px-3 py-2 text-sm font-semibold hover:bg-mist" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
