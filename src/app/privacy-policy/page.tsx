import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Turkish Barber Clacton website and WhatsApp enquiries.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-sm text-zinc-200">
      <h1 className="text-2xl font-bold text-white">Privacy Policy</h1>
      <p>We only collect contact details you share for booking and customer support.</p>
      <p>We do not sell personal data. Information is handled securely and only for service delivery.</p>
      <p>For data requests, contact hello@turkishbarberclacton.com.</p>
    </section>
  );
}
