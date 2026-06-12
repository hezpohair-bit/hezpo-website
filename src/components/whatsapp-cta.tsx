import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { whatsappMessage } from "@/lib/utils";

type WhatsAppCTAProps = {
  title: string;
  text: string;
  message: string;
  page: string;
  type: string;
  label?: string;
};

export function WhatsAppCTA({ title, text, message, page, type, label = "WhatsApp Inquiry" }: WhatsAppCTAProps) {
  return (
    <section className="bg-ink py-10 text-white">
      <div className="container-page flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-bold text-white/65">
            <MessageCircle aria-hidden="true" size={18} />
            Fast inquiry
          </div>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-white/75">{text}</p>
        </div>
        <ButtonLink external href={whatsappMessage(message, { page, type })}>
          {label}
        </ButtonLink>
      </div>
    </section>
  );
}
