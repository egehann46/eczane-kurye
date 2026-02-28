import type { MetadataRoute } from "next";
import { getAllCitySlugs } from "@/config/cities";

const siteUrl = "https://www.xn--eczakapmda-3ub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const citySlugs = getAllCitySlugs();

  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...cityPages,
  ];
}
