import { site } from "@/lib/site";

export default function manifest() {
  return {
    name: site.name,
    short_name: "Bulaşık Servisi",
    description:
      "İstanbul Avrupa Yakası endüstriyel ve sanayi tipi bulaşık makinesi servisi ve tamircisi.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1d4ed8",
    lang: "tr",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/og.png", sizes: "1200x630", type: "image/png" },
    ],
  };
}
