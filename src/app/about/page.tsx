import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "About Turkish Barber Clacton",
  description: "Learn about our barbering approach, hygiene standards, and commitment to consistent quality in Clacton-on-Sea.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        title="About our barbershop"
        description="We combine Turkish barber tradition with modern precision for clients who want a consistently sharp finish."
        primaryHref={whatsappLink()}
        primaryLabel="Book your first visit"
      />
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-zinc-200">
        <h2 className="text-2xl font-bold text-white">Our standards</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>• Real barbershop experience focused on precision and consistency.</li>
          <li>• Hygienic tool handling, clean stations, and tidy service flow.</li>
          <li>• Honest recommendations based on your style and routine.</li>
          <li>• Friendly local atmosphere with premium, no-rush results.</li>
        </ul>
      </section>
    </div>
  );
}
