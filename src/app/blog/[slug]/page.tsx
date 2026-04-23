import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, services } from "@/data/content";
import { breadcrumbsSchema, buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) return {};

  return buildMetadata({
    title: `${post.title} | Barber Guide`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  const relatedService = services.find((service) => service.slug === post.relatedServiceSlug);

  return (
    <article className="space-y-8">
      <JsonLd
        data={breadcrumbsSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <header className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <p className="text-xs uppercase tracking-widest text-amber-400">{post.cluster}</p>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-zinc-300">{post.excerpt}</p>
      </header>
      <section className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-zinc-200">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      {relatedService ? (
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-bold text-white">Related service</h2>
          <p className="mt-2 text-zinc-300">{relatedService.name}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={`/services/${relatedService.slug}`} className="text-amber-400">View service</Link>
            <a href={whatsappLink(`Hi, I'd like to book ${relatedService.name}.`)} className="text-emerald-400">Book this service</a>
          </div>
        </section>
      ) : null}
    </article>
  );
}
