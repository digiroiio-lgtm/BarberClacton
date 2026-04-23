import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { priceList } from "@/data/content";
import { siteConfig } from "@/data/site";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Barber Prices in Clacton-on-Sea",
  description: "Transparent pricing for haircuts, skin fades, beard trims, hot towel shaves and kids haircuts in Clacton-on-Sea.",
  path: "/prices",
});

export default function PricesPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "Prices", path: "/prices" }])} />
      <PageHero
        title="Clear barber pricing"
        description="Simple, transparent rates with no hidden surprises. Message us for same-day availability."
        primaryHref={whatsappLink()}
        primaryLabel="Book on WhatsApp"
        secondaryHref={`tel:${siteConfig.phoneHref}`}
        secondaryLabel="Call now"
      />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {priceList.map((item) => (
          <article key={item.name} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <h2 className="text-lg font-semibold text-white">{item.name}</h2>
            <p className="mt-2 text-3xl font-bold text-amber-400">{item.price}</p>
            <p className="mt-2 text-sm text-zinc-300">{item.note}</p>
            <a className="mt-4 inline-block text-emerald-400" href={whatsappLink(`Hi, I'd like to book ${item.name}.`)}>
              Book {item.name}
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
