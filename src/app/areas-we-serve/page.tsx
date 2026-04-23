import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { areas } from "@/data/content";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Areas We Serve | Barber Near Clacton-on-Sea",
  description: "We serve Clacton-on-Sea, Holland-on-Sea, Jaywick, Frinton-on-Sea and Walton-on-the-Naze with premium Turkish barber services.",
  path: "/areas-we-serve",
});

export default function AreasPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "Areas We Serve", path: "/areas-we-serve" }])} />
      <PageHero
        title="Serving Clacton-on-Sea and nearby areas"
        description="Local clients travel to us for reliable fades, beard shaping, and WhatsApp-first convenience."
        primaryHref={whatsappLink()}
        primaryLabel="Book from your area"
      />
      <section className="grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <article key={area.slug} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <h2 className="font-semibold text-white">{area.name}</h2>
            <p className="mt-2 text-sm text-zinc-300">{area.intro}</p>
            <p className="mt-2 text-xs text-zinc-400">{area.travel}</p>
            <Link href={`/areas-we-serve/${area.slug}`} className="mt-3 inline-block text-amber-400">Read local page</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
