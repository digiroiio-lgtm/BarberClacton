import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Contact Turkish Barber Clacton",
  description: "Get in touch by phone or WhatsApp. Find opening hours and shop details for Turkish Barber Clacton-on-Sea.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        title="Contact & booking"
        description="WhatsApp is the quickest way to secure your preferred slot."
        primaryHref={whatsappLink()}
        primaryLabel="Book on WhatsApp"
      />
      <section className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:grid-cols-2">
        <div className="space-y-3 text-sm text-zinc-200">
          <p><strong>Phone:</strong> <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a></p>
          <p><strong>WhatsApp:</strong> <a href={whatsappLink()} className="text-emerald-400">Message now</a></p>
          <p><strong>Email:</strong> {siteConfig.email}</p>
          <p><strong>Address:</strong> {siteConfig.address.line1}, {siteConfig.address.town}, {siteConfig.address.postcode}</p>
        </div>
        <div className="space-y-2 text-sm text-zinc-300">
          <h2 className="text-lg font-semibold text-white">Opening hours</h2>
          {siteConfig.openingHours.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
