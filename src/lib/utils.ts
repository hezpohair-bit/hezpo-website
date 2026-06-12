export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const whatsappBaseUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/601159893039";

type WhatsAppTrackingParams = {
  page: string;
  type: string;
  source?: string;
};

export function whatsappMessage(message: string, tracking?: WhatsAppTrackingParams) {
  const separator = whatsappBaseUrl.includes("?") ? "&" : "?";
  const params = new URLSearchParams({ text: message });

  if (tracking) {
    params.set("source", tracking.source || "website");
    params.set("page", tracking.page);
    params.set("type", tracking.type);
  }

  return `${whatsappBaseUrl}${separator}${params.toString()}`;
}
