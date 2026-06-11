export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const whatsappBaseUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/601159893039";

export function whatsappMessage(message: string) {
  const separator = whatsappBaseUrl.includes("?") ? "&" : "?";
  return `${whatsappBaseUrl}${separator}text=${encodeURIComponent(message)}`;
}
