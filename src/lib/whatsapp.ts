import { siteConfig } from "@/data/site";

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.defaultWhatsAppMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
