import { PageHero } from "@/components/PageHero";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Book a Barber Appointment on WhatsApp",
  description: "Fast WhatsApp-first barber booking for skin fades, beard trims, haircuts and hot towel shaves in Clacton-on-Sea.",
  path: "/book",
});

const ctas = [
  { label: "Book skin fade", link: whatsappLink(siteConfig.whatsappTemplates.skinFade) },
  { label: "Book beard trim", link: whatsappLink(siteConfig.whatsappTemplates.beardTrim) },
  { label: "Book haircut + beard", link: whatsappLink(siteConfig.whatsappTemplates.haircutBeard) },
  { label: "Ask about availability", link: whatsappLink(siteConfig.whatsappTemplates.availability) },
];

export default function BookPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "Book", path: "/book" }])} />
      <PageHero
        title="Book in under 30 seconds"
        description="WhatsApp booking is our fastest route. Tell us your service and preferred time and we'll confirm quickly."
        primaryHref={ctas[0].link}
        primaryLabel="Book skin fade"
        secondaryHref={ctas[3].link}
        secondaryLabel="Ask availability"
      />
      <section className="grid gap-4 sm:grid-cols-2">
        {ctas.map((item) => (
          <a key={item.label} href={item.link} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-lg font-semibold text-white hover:border-emerald-500">
            {item.label}
          </a>
        ))}
      </section>
    </div>
  );
}
