import type { MetadataRoute } from "next";
import { areas, blogPosts, services } from "@/data/content";
import { siteConfig } from "@/data/site";

const corePages = [
  "",
  "/about",
  "/services",
  "/prices",
  "/gallery",
  "/reviews",
  "/contact",
  "/location",
  "/faqs",
  "/book",
  "/blog",
  "/areas-we-serve",
  "/privacy-policy",
  "/terms",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = corePages.map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${siteConfig.domain}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const areaEntries = areas.map((area) => ({
    url: `${siteConfig.domain}/areas-we-serve/${area.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${siteConfig.domain}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...areaEntries, ...blogEntries];
}
