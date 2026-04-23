import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Visit Our Barbershop in Clacton-on-Sea",
  description: "Find Turkish Barber Clacton, opening hours, map, parking and access information near Clacton Pier.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "Location", path: "/location" }])} />
      <PageHero
        title="Visit us in Clacton-on-Sea"
        description="Conveniently located near Clacton Pier with straightforward access by car or public transport."
        primaryHref={whatsappLink()}
        primaryLabel="Message before you travel"
      />
      <section className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 lg:grid-cols-2">
        <div className="space-y-3 text-sm text-zinc-200">
          <p><strong>Address:</strong> {siteConfig.address.line1}, {siteConfig.address.town}, {siteConfig.address.postcode}</p>
          <p><strong>Nearby landmarks:</strong> {siteConfig.landmarks.join(", ")}</p>
          <p><strong>Parking:</strong> Nearby street and public car parks available.</p>
          <p><strong>Transport:</strong> Short walk from Clacton station and central bus routes.</p>
          <a href="/contact" className="text-amber-400">View full contact details →</a>
        </div>
        <iframe
          title="Map to Turkish Barber Clacton"
          src={siteConfig.mapEmbedUrl}
          loading="lazy"
          className="h-72 w-full rounded-xl border border-zinc-700"
        />
      </section>
    </div>
  );
}
