import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { FloatingWhatsApp, MobileStickyBar } from "@/components/StickyActions";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Turkish Barber Clacton-on-Sea | WhatsApp Booking",
    template: "%s | Turkish Barber Clacton",
  },
  description:
    "Modern Turkish barber in Clacton-on-Sea for skin fades, beard trims, men's haircuts and hot towel shaves. Book instantly on WhatsApp.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.domain,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.domain,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.domain}/blog?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const barbershopSchema = {
  "@context": "https://schema.org",
  "@type": "Barbershop",
  name: siteConfig.name,
  image: `${siteConfig.domain}/gallery/fade-style.svg`,
  telephone: siteConfig.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.town,
    addressRegion: siteConfig.address.county,
    postalCode: siteConfig.address.postcode,
    addressCountry: "GB",
  },
  areaServed: ["Clacton-on-Sea", "Holland-on-Sea", "Jaywick", "Frinton-on-Sea", "Walton-on-the-Naze"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={barbershopSchema} />
        <Header />
        <main className="mx-auto max-w-6xl px-4 pb-28 pt-8 lg:px-6">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </body>
    </html>
  );
}
