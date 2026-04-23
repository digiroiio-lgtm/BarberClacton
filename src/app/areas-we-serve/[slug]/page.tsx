import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { areas } from "@/data/content";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export async function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areas.find((entry) => entry.slug === slug);
  if (!area) return {};

  return buildMetadata({
    title: `${area.name} | Turkish Barber Clacton`,
    description: `${area.intro} ${area.travel} Book your appointment easily via WhatsApp.`,
    path: `/areas-we-serve/${area.slug}`,
  });
}

export default async function AreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = areas.find((entry) => entry.slug === slug);
  if (!area) notFound();

  return (
    <div className="space-y-10">
      <JsonLd
        data={breadcrumbsSchema([
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas-we-serve" },
          { name: area.name, path: `/areas-we-serve/${area.slug}` },
        ])}
      />
      <PageHero
        title={area.name}
        description={area.intro}
        primaryHref={whatsappLink()}
        primaryLabel="Book via WhatsApp"
      />
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-zinc-200">
        <h2 className="text-xl font-bold text-white">Travel and access</h2>
        <p className="mt-2 text-sm">{area.travel}</p>
        <p className="mt-4 text-sm">Clients from this area often book skin fades, men&apos;s haircuts and beard trims with us due to quality consistency and easy booking.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/services/skin-fade-clacton-on-sea" className="text-amber-400">Skin fade service</Link>
          <Link href="/prices" className="text-amber-400">Prices</Link>
          <Link href="/contact" className="text-amber-400">Contact details</Link>
        </div>
      </section>
    </div>
  );
}
