import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = "https://www.suds-tech.com/sitemap.xml";

  return {
    rules: [
      {
        userAgent: "*", // Applies to all search engines
        allow: "/", // Allows crawling of all pages
      },
    ],
    sitemap: sitemapUrl,
  };
}
