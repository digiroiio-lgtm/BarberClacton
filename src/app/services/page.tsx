import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceGrid } from "@/components/ServiceGrid";
import { services } from "@/data/content";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Barber Services in Clacton-on-Sea",
  description:
    "Explore Turkish barber services in Clacton-on-Sea: skin fades, men's haircuts, beard trims, hot towel shaves, kids cuts, and walk-in availability.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        title="Barber Services in Clacton-on-Sea"
        description="Every service is designed for clean finishing, consistency, and confidence. Book by WhatsApp in seconds."
        primaryHref={whatsappLink()}
        primaryLabel="Book on WhatsApp"
        secondaryHref="/prices"
        secondaryLabel="View prices"
      />
      <section>
        <SectionTitle title="Choose your service" />
        <ServiceGrid services={services} />
      </section>
    </div>
  );
}
