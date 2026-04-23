import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/content";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.name} | Turkish Barber Clacton`,
    description: `${service.description} ${service.price} • ${service.duration}. Book now on WhatsApp.`,
    path: `/services/${service.slug}`,
    keywords: [service.name, "Turkish Barber Clacton-on-Sea", "Book barber on WhatsApp"],
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Barbershop",
      name: "Turkish Barber Clacton",
    },
    areaServed: "Clacton-on-Sea",
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      priceSpecification: service.price.replace("From £", ""),
    },
  };

  return (
    <div className="space-y-10">
      <JsonLd
        data={breadcrumbsSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceSchema} />
      <PageHero
        title={service.name}
        description={service.description}
        primaryHref={whatsappLink(`Hi, I'd like to book ${service.name} at Turkish Barber Clacton.`)}
        primaryLabel="Book this service on WhatsApp"
        secondaryHref="/prices"
        secondaryLabel="Check pricing"
      />

      <section className="grid gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-400">Starting price</p>
          <p className="text-xl font-bold text-white">{service.price}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-400">Typical duration</p>
          <p className="text-xl font-bold text-white">{service.duration}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-zinc-400">Best for</p>
          <p className="text-xl font-bold text-white">{service.intent}</p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="text-2xl font-bold text-white">Why book this service with us</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-200">
          <li>• Precision-focused finishing with local reputation for consistency.</li>
          <li>• Hygienic tools and a clean, professional shop environment.</li>
          <li>• Easy WhatsApp booking with quick confirmation and timing updates.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white" href={whatsappLink(`Hi, I'd like to book ${service.name}.`)}>
            Book {service.name}
          </a>
          <Link className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200" href="/gallery">
            See recent styles
          </Link>
          <Link className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200" href="/faqs">
            Read FAQs
          </Link>
        </div>
      </section>
    </div>
  );
}
