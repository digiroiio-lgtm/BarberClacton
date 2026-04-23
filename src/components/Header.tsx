import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import { CtaButton } from "./CtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 lg:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-bold tracking-wide text-white sm:text-base">
            Turkish Barber Clacton
          </Link>
          <div className="hidden items-center gap-3 md:flex">
            <a href={`tel:${siteConfig.phoneHref}`} className="text-sm text-zinc-300 hover:text-white">
              {siteConfig.phoneDisplay}
            </a>
            <CtaButton href={whatsappLink()} label="Book Now" />
          </div>
        </div>
        <nav className="mt-3 flex gap-4 overflow-x-auto pb-1 md:mt-2 md:justify-end">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="shrink-0 text-sm text-zinc-200 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
