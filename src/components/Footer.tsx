import Link from "next/link";
import { areas, services } from "@/data/content";
import { siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <h2 className="text-lg font-bold text-white">{siteConfig.name}</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Modern Turkish barber in Clacton-on-Sea for fades, beard trims, hot towel shaves, and easy WhatsApp booking.
          </p>
          <a className="mt-4 inline-block text-amber-400 hover:text-amber-300" href={whatsappLink()}>
            Book on WhatsApp
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-white">Core pages</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              "/services",
              "/prices",
              "/gallery",
              "/reviews",
              "/book",
              "/contact",
            ].map((href) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {href.replace("/", "").replace(/-/g, " ") || "home"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Top services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Areas & contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-400">
            {areas.slice(0, 4).map((area) => (
              <li key={area.slug}>
                <Link href={`/areas-we-serve/${area.slug}`} className="hover:text-white">
                  {area.name}
                </Link>
              </li>
            ))}
            <li>{siteConfig.address.line1}</li>
            <li>
              {siteConfig.address.town} {siteConfig.address.postcode}
            </li>
            <li>{siteConfig.phoneDisplay}</li>
          </ul>
          <div className="mt-3 text-xs text-zinc-500">{siteConfig.openingHours.join(" • ")}</div>
        </div>
      </div>
      <div className="border-t border-zinc-800 px-4 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteConfig.name} • <Link href="/privacy-policy">Privacy</Link> • <Link href="/terms">Terms</Link> • <Link href="/cookies">Cookies</Link>
      </div>
    </footer>
  );
}
