import { site } from "@/lib/site";

// =============================================================
//  robots.txt
// =============================================================
// NOT: Bu dosya sitenin kendi robots.txt'sini üretir. SEO raporunda
// belirtilen AI bot engeli Cloudflare panelinden (AI Crawler Control)
// yönetiliyor ve bu dosyayı EZER. ChatGPT / Claude / Perplexity gibi
// asistanların sitenizi kaynak göstermesini istiyorsanız, Cloudflare
// panelindeki engeli de kaldırmanız gerekir.
//
// Aşağıda arama amaçlı (eğitim değil, atıflı arama) botlara açık izin
// veriyoruz — Cloudflare engeli kalktığında bu sinyal geçerli olur.

export default function robots() {
  const searchBots = [
    "Googlebot",
    "Bingbot",
    "OAI-SearchBot", // ChatGPT arama
    "ChatGPT-User",
    "PerplexityBot",
    "ClaudeBot",
    "Claude-SearchBot",
    "Applebot",
    "YandexBot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...searchBots.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
