import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(siteConfig.whatsappTemplates.availability)}
      aria-label="Book on WhatsApp"
      className="fixed bottom-24 right-4 z-40 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-emerald-400"
    >
      WhatsApp Booking
    </a>
  );
}

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-950/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
        <a className="rounded bg-emerald-500 px-2 py-3 text-center text-white" href={whatsappLink()}>
          Book WhatsApp
        </a>
        <a className="rounded bg-zinc-800 px-2 py-3 text-center text-zinc-100" href={`tel:${siteConfig.phoneHref}`}>
          Call Now
        </a>
        <a className="rounded bg-zinc-800 px-2 py-3 text-center text-zinc-100" href={siteConfig.mapDirectionsUrl}>
          Directions
        </a>
      </div>
    </div>
  );
}
