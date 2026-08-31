import "./globals.css";
import { site, hasVerifiedAddress, hasGeo } from "@/lib/site";
import { districts, services } from "@/lib/data";
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
  // ---------------------------------------------------------------
  //  YAPISAL VERİ (Schema.org)
  //  Not: Doğrulanmış bir açık adres girilene kadar sahte/yaklaşık
  //  adres beyan edilmez; işletme "hizmet alanı" (service area)
  //  modeliyle tanımlanır. lib/site.js içindeki postalAddress
  //  doldurulduğunda schema otomatik olarak LocalBusiness'a yükselir.
  // ---------------------------------------------------------------
  const verified = hasVerifiedAddress();

  const areaServed = districts.map((d) => ({
    "@type": "AdministrativeArea",
    name: `${d.name}, İstanbul`,
  }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": verified ? "LocalBusiness" : "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    telephone: site.phoneRaw,
    email: site.email,
    image: `${site.url}/og.png`,
    logo: `${site.url}/images/logo-icon.png`,
    description:
      "İstanbul Avrupa Yakası endüstriyel ve sanayi tipi bulaşık makinesi servisi ve tamircisi. Tüm markalara aynı gün arıza tespiti, tamir, bakım ve yedek parça.",
    areaServed,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phoneRaw,
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["Turkish"],
      },
    ],
    ...(site.social.length ? { sameAs: site.social } : {}),
    ...(verified
      ? {
          priceRange: "$$",
          openingHours: "Mo-Su 08:00-22:00",
          address: {
            "@type": "PostalAddress",
            streetAddress: site.postalAddress.streetAddress,
            addressLocality: site.postalAddress.addressLocality,
            postalCode: site.postalAddress.postalCode || undefined,
            addressRegion: "İstanbul",
            addressCountry: "TR",
          },
          ...(hasGeo()
            ? {
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: site.geo.latitude,
                  longitude: site.geo.longitude,
                },
              }
            : {}),
          ...(site.hasMap ? { hasMap: site.hasMap } : {}),
        }
      : {}),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "tr-TR",
    publisher: { "@id": `${site.url}/#organization` },
  };

  const mainServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/#service`,
    serviceType: "Endüstriyel Bulaşık Makinesi Servisi ve Tamiri",
    provider: { "@id": `${site.url}/#organization` },
    areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: site.phoneRaw,
      serviceUrl: `${site.url}/iletisim`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servis Hizmetleri",
      itemListElement: services.map((sv) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: sv.title, description: sv.desc },
      })),
    },
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
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={mainServiceSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
