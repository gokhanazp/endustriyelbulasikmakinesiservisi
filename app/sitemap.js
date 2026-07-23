import { site } from "@/lib/site";
import { allDynamicSlugs } from "@/lib/data";
import { posts, postPath } from "@/lib/blog";
import { landingPaths } from "@/lib/landing";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ["", ...landingPaths, "/deterjan-parlatici-servisi", "/blog", "/iletisim"];

  const entries = [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: r === "" ? 1 : 0.8,
    })),
    ...allDynamicSlugs().map((slug) => ({
      url: `${site.url}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}${postPath(p)}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];

  return entries;
}
