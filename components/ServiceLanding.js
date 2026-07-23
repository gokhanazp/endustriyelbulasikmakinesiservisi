import Link from "next/link";
import { site, telLink, waLink } from "@/lib/site";
import { brands, districts, brandPath, districtPath } from "@/lib/data";
import BrandCard from "@/components/BrandCard";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import {
  PhoneIcon, WhatsAppIcon, ClockIcon, ShieldIcon, CheckIcon, MapPinIcon, WrenchIcon,
} from "@/components/Icons";

export default function ServiceLanding({ cfg }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: cfg.h1White + " " + cfg.h1Gold,
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phoneRaw },
    areaServed: "İstanbul Avrupa Yakası",
    url: `${site.url}${cfg.path}`,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: site.url },
      { "@type": "ListItem", position: 2, name: `${cfg.h1White} ${cfg.h1Gold}`, item: `${site.url}${cfg.path}` },
    ],
  };
  const faqSchema = cfg.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cfg.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Breadcrumb */}
      <nav className="border-b border-steel-100 bg-steel-50">
        <div className="container-max flex flex-wrap items-center gap-2 py-3 text-xs text-steel-500">
          <Link href="/" className="hover:text-brand-600">Ana Sayfa</Link>
          <span>/</span>
          <span className="font-semibold text-steel-700">{cfg.h1White} {cfg.h1Gold}</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div className="animated-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-hero-mesh opacity-80" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-64 w-64 animate-blob rounded-full bg-brand-400/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 animate-blob rounded-full bg-accent-500/15 blur-3xl [animation-delay:-6s]" />
        </div>
        <div className="absolute inset-0 animate-gridpan bg-hero-grid [background-size:44px_44px] opacity-30" />

        <div className="container-max relative py-16 sm:py-20">
          <div className="stagger max-w-3xl">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold">
              <WrenchIcon className="h-4 w-4 text-accent-400" /> {cfg.badge}
            </span>
            <h1 className="mt-5 text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">{cfg.h1White}</span>{" "}
              <span className="gradient-text">{cfg.h1Gold}</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand-100 sm:text-lg">{cfg.intro}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {cfg.pills.map((p) => (
                <span key={p} className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white">
                  <CheckIcon className="h-3.5 w-3.5 text-accent-400" /> {p}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={telLink} className="btn-gold btn-shine">
                <PhoneIcon className="h-5 w-5" /> {site.phoneDisplay}
              </a>
              <a href={waLink(cfg.waText)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 70" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#ffffff" d="M0,35 C240,70 480,5 720,25 C960,45 1200,75 1440,40 L1440,70 L0,70 Z" />
          </svg>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="section">
        <div className="container-max grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {cfg.sections.map((s) => (
              <div key={s.h} className="mb-8">
                <h2 className="text-2xl font-extrabold text-steel-900">{s.h}</h2>
                {s.p.map((para, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-steel-600">{para}</p>
                ))}
              </div>
            ))}

            {cfg.faq && (
              <div className="mt-4">
                <h2 className="text-2xl font-extrabold text-steel-900">Sık Sorulan Sorular</h2>
                <div className="mt-6 space-y-3">
                  {cfg.faq.map((f) => (
                    <details key={f.q} className="group rounded-2xl border border-steel-100 bg-white px-5 shadow-sm transition hover:border-accent-300 open:border-accent-300 open:shadow-card">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-bold text-steel-900 [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-steel-200 text-brand-600 transition group-open:rotate-45 group-open:border-accent-400 group-open:bg-accent-50 group-open:text-accent-600">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                        </span>
                      </summary>
                      <p className="pb-5 pr-2 text-sm leading-relaxed text-steel-600">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Yan panel */}
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">Hızlı Servis Talebi</h3>
              <p className="mt-2 text-sm text-steel-600">Aynı gün servis için hemen iletişime geçin.</p>
              <a href={telLink} className="btn-gold mt-4 w-full"><PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}</a>
              <a href={waLink(cfg.waText)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-2 w-full"><WhatsAppIcon className="h-4 w-4" /> WhatsApp'tan Yaz</a>
              <ul className="mt-5 space-y-2 text-sm text-steel-600">
                <li className="flex items-center gap-2"><ClockIcon className="h-4 w-4 text-brand-600" /> Aynı gün servis</li>
                <li className="flex items-center gap-2"><ShieldIcon className="h-4 w-4 text-brand-600" /> Garantili işçilik</li>
                <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-brand-600" /> Orijinal yedek parça</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* MARKALAR */}
      <section className="section bg-steel-50">
        <div className="container-max">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="eyebrow">Servis Verdiğimiz Markalar</span>
            <h2 className="heading-underline mt-4 text-2xl font-extrabold text-steel-900 sm:text-3xl">Tüm Markalara Servis</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {brands.map((b) => <BrandCard key={b.slug} brand={b} />)}
          </div>
        </div>
      </section>

      {/* İLÇELER */}
      <section className="section">
        <div className="container-max">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="eyebrow">Hizmet Bölgeleri</span>
            <h2 className="heading-underline mt-4 text-2xl font-extrabold text-steel-900 sm:text-3xl">İstanbul Avrupa Yakası</h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {districts.map((d) => (
              <Link key={d.slug} href={districtPath(d)} className="group flex items-center gap-2 rounded-full border border-steel-200 bg-white px-4 py-2 text-sm font-semibold text-steel-700 transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700">
                <MapPinIcon className="h-4 w-4 text-accent-500" /> {d.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={cfg.ctaTitle} subtitle={cfg.ctaSubtitle} />
    </>
  );
}
