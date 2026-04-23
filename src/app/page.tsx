import Link from "next/link";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ReviewGrid } from "@/components/ReviewGrid";
import { JsonLd } from "@/components/JsonLd";
import { areas, faqs, services } from "@/data/content";
import { siteConfig } from "@/data/site";

export const metadata = buildMetadata({
  title: "Turkish Barber Clacton-on-Sea | Skin Fades, Beard Trims & Hot Towel Shaves",
  description:
    "Premium Turkish barber in Clacton-on-Sea for sharp fades, beard trims, classic cuts and easy WhatsApp booking. Walk-ins welcome when available.",
  path: "/",
  keywords: ["Turkish Barber Clacton-on-Sea", "Barber Clacton-on-Sea", "Skin Fade Clacton", "Best Barber Clacton"],
});

export default function Home() {
  return (
    <div className="space-y-16">
      <JsonLd data={faqSchema(faqs.slice(0, 4))} />
      <PageHero
        badge="Modern Turkish Barber in Clacton-on-Sea"
        title="Turkish Barber Clacton-on-Sea for Sharp Cuts and Easy WhatsApp Booking"
        description="Premium grooming for men: skin fades, beard trims, classic cuts and hot towel shaves. Message now for today's availability."
        primaryHref={whatsappLink()}
        primaryLabel="Book on WhatsApp"
        secondaryHref={`tel:${siteConfig.phoneHref}`}
        secondaryLabel="Call Now"
      />

      <section className="grid gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-sm text-zinc-200 sm:grid-cols-5">
        {[
          "Local Clacton specialists",
          "Precision fades",
          "Clean hygiene standards",
          "Walk-ins when available",
          "Fast WhatsApp booking",
        ].map((item) => (
          <p key={item} className="rounded bg-zinc-800 px-3 py-2 text-center">
            {item}
          </p>
        ))}
      </section>

      <section>
        <SectionTitle title="Popular barber services in Clacton-on-Sea" />
        <ServiceGrid services={services.slice(0, 6)} />
      </section>

      <section className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 lg:grid-cols-2">
        <div>
          <SectionTitle title="Why clients choose us" />
          <ul className="space-y-3 text-sm text-zinc-200">
            <li>• Turkish barber tradition with modern styling precision</li>
            <li>• Reliable results for fades, beard shaping, and clean finishes</li>
            <li>• Friendly atmosphere with strong attention to detail</li>
            <li>• Convenient Clacton location close to key landmarks</li>
          </ul>
        </div>
        <div>
          <SectionTitle title="How WhatsApp booking works" />
          <ol className="space-y-3 text-sm text-zinc-200">
            <li>1. Tap any Book on WhatsApp button.</li>
            <li>2. Send your preferred service and time.</li>
            <li>3. We confirm quickly with the best available slot.</li>
          </ol>
          <a className="mt-4 inline-block text-emerald-400 hover:text-emerald-300" href={whatsappLink(siteConfig.whatsappTemplates.availability)}>
            Ask about availability →
          </a>
        </div>
      </section>

      <section>
        <SectionTitle title="Recent customer feedback" subtitle="Real local feedback collected from client visits." />
        <ReviewGrid />
      </section>

      <section>
        <SectionTitle title="Serving Clacton-on-Sea and nearby areas" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <article key={area.slug} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <h3 className="font-semibold text-white">{area.name}</h3>
              <p className="mt-2 text-sm text-zinc-300">{area.intro}</p>
              <Link className="mt-3 inline-block text-amber-400" href={`/areas-we-serve/${area.slug}`}>
                View local details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Frequently asked questions" />
        <div className="space-y-4">
          {faqs.slice(0, 4).map((item) => (
            <details key={item.q} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
              <summary className="cursor-pointer font-medium text-white">{item.q}</summary>
              <p className="mt-2 text-sm text-zinc-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 text-center">
        <h2 className="text-2xl font-bold text-white">Ready for a sharper look?</h2>
        <p className="mt-2 text-zinc-200">Book now on WhatsApp and get a confirmed slot in minutes.</p>
        <a className="mt-4 inline-flex rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white" href={whatsappLink()}>
          Book now on WhatsApp
        </a>
      </section>
    </div>
  );
}
