import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Notice",
  description: "Cookie notice for Turkish Barber Clacton website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <section className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-sm text-zinc-200">
      <h1 className="text-2xl font-bold text-white">Cookie Notice</h1>
      <p>This site may use essential cookies and analytics cookies to improve experience.</p>
      <p>You can control cookies through your browser settings.</p>
    </section>
  );
}
