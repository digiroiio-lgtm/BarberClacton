import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/data/content";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Barber Guides & Blog | Clacton-on-Sea",
  description: "Local barber guides on fades, beard care, booking decisions, and men's grooming in Clacton-on-Sea.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <JsonLd data={breadcrumbsSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <PageHero
        title="Local barber guides"
        description="Advice-led content built around local grooming questions and service decisions."
        primaryHref={whatsappLink()}
        primaryLabel="Book with us"
      />
      <section className="grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <p className="text-xs uppercase tracking-wider text-amber-400">{post.cluster}</p>
            <h2 className="mt-2 text-lg font-semibold text-white">{post.title}</h2>
            <p className="mt-2 text-sm text-zinc-300">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-amber-400">
              Read guide
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
