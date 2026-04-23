import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewGrid } from "@/components/ReviewGrid";
import { testimonials } from "@/data/content";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Client Reviews | Turkish Barber Clacton",
  description: "Read what local clients say about our skin fades, beard trims, and overall barbershop experience in Clacton-on-Sea.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }])} />
      <PageHero
        title="Client reviews"
        description="Trusted by local clients for quality cuts, clean standards, and easy booking."
        primaryHref={whatsappLink()}
        primaryLabel="Book with confidence"
      />
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <p className="text-sm text-zinc-300">★★★★★ 4.9 average recent feedback from local appointments.</p>
      </section>
      <ReviewGrid />
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="text-xl font-bold text-white">Share your visit</h2>
        <p className="mt-2 text-zinc-300">Your feedback helps local clients choose confidently and helps us keep standards high.</p>
        <a className="mt-4 inline-block text-amber-400" href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
          Leave a Google review
        </a>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: testimonials.map((review, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Review",
              author: review.name,
              reviewBody: review.quote,
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
            },
          })),
        }}
      />
    </div>
  );
}
