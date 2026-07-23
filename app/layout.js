import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Endüstriyel Bulaşık Makinesi Servisi | Sanayi Tipi Tamir · İstanbul Avrupa Yakası",
    template: "%s | Endüstriyel Bulaşık Makinesi Servisi",
  },
  description:
    "İstanbul Avrupa Yakası genelinde endüstriyel ve sanayi tipi bulaşık makinesi servisi ve tamircisi. Tüm markalara aynı gün arıza tespiti, tamir, bakım ve yedek parça hizmeti.",
  keywords: site.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title:
      "Endüstriyel Bulaşık Makinesi Servisi | Sanayi Tipi Tamir · İstanbul Avrupa Yakası",
    description:
      "Tüm markalarda endüstriyel ve sanayi tipi bulaşık makinesi tamiri ve bakımı. Aynı gün servis, İstanbul Avrupa Yakası.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Endüstriyel Bulaşık Makinesi Servisi - İstanbul Avrupa Yakası",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Endüstriyel Bulaşık Makinesi Servisi · İstanbul Avrupa Yakası",
    description:
      "Tüm markalarda sanayi tipi bulaşık makinesi tamiri ve bakımı. Aynı gün servis.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}/og.png`,
    priceRange: "$$",
    areaServed: { "@type": "City", name: "İstanbul" },
    address: {
      "@type": "PostalAddress",
      addressRegion: "İstanbul",
      addressCountry: "TR",
      streetAddress: site.address,
    },
    openingHours: "Mo-Su 08:00-22:00",
    description:
      "İstanbul Avrupa Yakası endüstriyel ve sanayi tipi bulaşık makinesi servisi ve tamircisi.",
  };

  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={businessSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
