import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function absoluteUrl(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.domain}${clean}`;
}

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({ title, description, path, keywords }: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: siteConfig.name,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function breadcrumbsSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(entries: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.a,
      },
    })),
  };
}
