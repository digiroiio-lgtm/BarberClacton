import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

const gallery = [
  { src: "/gallery/fade-style.svg", alt: "Skin fade haircut by Turkish barber in Clacton-on-Sea", tag: "Fade" },
  { src: "/gallery/beard-shape.svg", alt: "Defined beard trim and line-up in Clacton", tag: "Beard" },
  { src: "/gallery/classic-cut.svg", alt: "Classic men's haircut with neat finish", tag: "Haircut" },
  { src: "/gallery/hot-towel.svg", alt: "Hot towel shave preparation in modern barbershop", tag: "Shave" },
  { src: "/gallery/kids-cut.svg", alt: "Kids haircut with clean sides and natural top", tag: "Kids" },
  { src: "/gallery/shop-interior.svg", alt: "Clean and modern Turkish barber shop interior in Clacton", tag: "Shop" },
];

export const metadata = buildMetadata({
  title: "Barber Gallery | Clacton-on-Sea",
  description: "Preview recent skin fades, beard trims, classic cuts, and shop photos from Turkish Barber Clacton.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])} />
      <PageHero
        title="Gallery"
        description="A quick look at our fades, beard work, and barbershop atmosphere."
        primaryHref={whatsappLink()}
        primaryLabel="Book your style on WhatsApp"
      />
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((image) => (
          <article key={image.src} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
            <Image src={image.src} alt={image.alt} width={600} height={420} className="h-52 w-full object-cover" />
            <div className="p-4">
              <p className="text-xs uppercase tracking-wide text-amber-400">{image.tag}</p>
              <p className="mt-1 text-sm text-zinc-300">{image.alt}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center">
        <h2 className="text-2xl font-bold text-white">Like what you see?</h2>
        <a className="mt-4 inline-flex rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white" href={whatsappLink()}>
          Book now on WhatsApp
        </a>
      </section>
    </div>
  );
}
