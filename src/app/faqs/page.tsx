import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/data/content";
import { breadcrumbsSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Barber FAQs | Clacton-on-Sea",
  description: "Answers to common booking, walk-in, pricing and service questions for Turkish Barber Clacton-on-Sea.",
  path: "/faqs",
});

export default function FAQsPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs" }])} />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        title="Frequently asked questions"
        description="Everything clients usually ask before booking in Clacton-on-Sea."
        primaryHref={whatsappLink()}
        primaryLabel="Book on WhatsApp"
      />
      <section className="space-y-4">
        {faqs.map((item) => (
          <details key={item.q} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
            <summary className="cursor-pointer font-medium text-white">{item.q}</summary>
            <p className="mt-2 text-sm text-zinc-300">{item.a}</p>
          </details>
        ))}
      </section>
      <p className="text-sm text-zinc-300">
        Need a quick answer? <Link href={whatsappLink()} className="text-emerald-400">Message us on WhatsApp</Link>.
      </p>
    </div>
  );
}
