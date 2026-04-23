import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms for using Turkish Barber Clacton website and booking channels.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-sm text-zinc-200">
      <h1 className="text-2xl font-bold text-white">Terms & Conditions</h1>
      <p>Booking times are subject to confirmation and availability.</p>
      <p>Please notify us in advance if you cannot attend your appointment.</p>
      <p>Prices may vary depending on hair length, complexity, and service upgrades.</p>
    </section>
  );
}
