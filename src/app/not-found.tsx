import Link from "next/link";

export default function NotFound() {
  return (
    <section className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
      <h1 className="text-3xl font-bold text-white">Page not found</h1>
      <p className="text-zinc-300">The page you requested does not exist.</p>
      <Link href="/" className="text-amber-400">
        Return to homepage
      </Link>
    </section>
  );
}
