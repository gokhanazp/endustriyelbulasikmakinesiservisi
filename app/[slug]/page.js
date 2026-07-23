import Link from "next/link";
import { notFound } from "next/navigation";
import { site, telLink, waLink } from "@/lib/site";
import {
  brands, districts, brandPath, districtPath,
  resolveSlug, allDynamicSlugs, commonFaults, hasLogo,
} from "@/lib/data";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import {
  PhoneIcon, WhatsAppIcon, WrenchIcon, CheckIcon, MapPinIcon,
  ClockIcon, ShieldIcon, ArrowIcon,
} from "@/components/Icons";

export function generateStaticParams() {
  return allDynamicSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const resolved = resolveSlug(params.slug);
  if (!resolved) return {};

  if (resolved.type === "brand") {
    const b = resolved.brand;
    return {
      title: `${b.name} Bulaşık Makinesi Servisi | ${b.name} Tamircisi · İstanbul`,
      description: `${b.name} endüstriyel bulaşık makinesi servisi ve tamircisi. İstanbul Avrupa Yakası geneline (Şişli, Beşiktaş, Esenyurt vb.) aynı gün ${b.name} sanayi tipi bulaşık makinesi tamir, bakım ve yedek parça hizmeti.`,
      alternates: { canonical: brandPath(b) },
      openGraph: {
        title: `${b.name} Bulaşık Makinesi Servisi · İstanbul Avrupa Yakası`,
        description: `${b.name} endüstriyel ve sanayi tipi bulaşık makinesi tamiri, bakımı ve yedek parça hizmeti. Aynı gün servis.`,
      },
    };
  }

  const d = resolved.district;
  return {
    title: `${d.name} Endüstriyel Bulaşık Makinesi Servisi | Sanayi Tipi Tamirci`,
    description: `${d.name} endüstriyel bulaşık makinesi servisi ve tamircisi. ${d.name} bölgesinde tüm markalara aynı gün sanayi tipi bulaşık makinesi tamir ve bakım hizmeti.`,
    alternates: { canonical: districtPath(d) },
    openGraph: {
      title: `${d.name} Endüstriyel Bulaşık Makinesi Servisi`,
      description: `${d.name} bölgesinde sanayi tipi bulaşık makinesi tamiri ve bakımı. Aynı gün servis.`,
    },
  };
}

export default function DynamicPage({ params }) {
  const resolved = resolveSlug(params.slug);
  if (!resolved) notFound();

  return resolved.type === "brand" ? (
    <BrandPage brand={resolved.brand} />
  ) : (
    <DistrictPage district={resolved.district} />
  );
}

/* ---------------------------------------------------------------- */
/*  MARKA SAYFASI                                                    */
/* ---------------------------------------------------------------- */
function BrandPage({ brand }) {
  const initials = brand.name
    .replace("İ", "I")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${brand.name} Endüstriyel Bulaşık Makinesi Servisi`,
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phoneRaw },
    areaServed: "İstanbul Avrupa Yakası",
    url: `${site.url}${brandPath(brand)}`,
  };
  const breadcrumbSchema = buildBreadcrumb([
    { name: "Ana Sayfa", url: site.url },
    { name: "Markalar", url: `${site.url}/#markalar` },
    { name: `${brand.name} Bulaşık Makinesi Servisi`, url: `${site.url}${brandPath(brand)}` },
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb items={[{ label: "Markalar", href: "/#markalar" }, { label: brand.name }]} />

      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div className="animated-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-hero-mesh opacity-80" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-64 w-64 animate-blob rounded-full bg-brand-400/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 animate-blob rounded-full bg-accent-500/15 blur-3xl [animation-delay:-6s]" />
        </div>
        <div className="absolute inset-0 animate-gridpan bg-hero-grid [background-size:44px_44px] opacity-30" />

        <div className="container-max relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div className="stagger">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold">
              <ShieldIcon className="h-4 w-4 text-accent-400" /> Uzman Teknik Servis Anlayışı
            </span>
            <h1 className="mt-5 text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">{brand.name}</span>{" "}
              <span className="gradient-text">Bulaşık Makinesi Servisi</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100">
              <strong className="text-white">İstanbul Avrupa Yakası</strong> geneline
              (Şişli, Beşiktaş, Esenyurt vb.) aynı gün{" "}
              <strong className="text-white">{brand.name} endüstriyel bulaşık makinesi tamir ve bakım</strong>{" "}
              hizmeti sunuyoruz. {brand.name} sanayi tipi bulaşık makinelerinde arıza
              tespiti, onarım, periyodik bakım ve orijinal yedek parça temini yapıyoruz.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: ClockIcon, t: "Aynı gün servis" },
                { icon: ShieldIcon, t: "Garantili işçilik" },
                { icon: CheckIcon, t: "Orijinal yedek parça" },
              ].map((p) => (
                <span key={p.t} className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white">
                  <p.icon className="h-3.5 w-3.5 text-accent-400" /> {p.t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={telLink} className="btn-gold btn-shine">
                <PhoneIcon className="h-5 w-5" /> {site.phoneDisplay}
              </a>
              <a href={waLink(`Merhaba, ${brand.name} bulaşık makinesi servisi için bilgi almak istiyorum.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Marka logo kartı */}
          <div className="animate-fade-up [animation-delay:0.25s] justify-self-center lg:justify-self-end">
            <div className="animate-floaty">
              <div className="glass rounded-3xl p-4 shadow-glow">
                <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-2xl bg-white p-6 shadow-premium sm:h-48 sm:w-48">
                  {hasLogo(brand.slug) ? (
                    <img
                      src={`/logos/${brand.slug}.png`}
                      alt={`${brand.name} logo`}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="bg-gradient-to-br from-brand-600 to-brand-900 bg-clip-text text-5xl font-black text-transparent">
                      {initials}
                    </span>
                  )}
                </div>
                <div className="mt-3 text-center text-sm font-bold text-white/90">
                  {brand.name} Uzman Servis
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt dalga */}
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
            <h2 className="text-2xl font-extrabold text-steel-900">
              Servisini Verdiğimiz {brand.name} Bulaşık Makinesi Modelleri
            </h2>
            <p className="mt-3 text-steel-600">
              Aşağıdaki tüm {brand.name} modellerine endüstriyel bulaşık makinesi
              tamircisi olarak servis, bakım ve yedek parça hizmeti veriyoruz.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {brand.models.map((m) => (
                <li
                  key={m}
                  className="group flex items-center gap-3 rounded-xl border border-steel-100 bg-white px-3.5 py-3 text-sm text-steel-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-card"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition group-hover:bg-accent-500 group-hover:text-white">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span>
                    <strong className="font-bold text-steel-900">{brand.name}</strong> {m}{" "}
                    <span className="text-steel-400">Servisi</span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Sık arızalar */}
            <h2 className="mt-12 text-2xl font-extrabold text-steel-900">
              {brand.name} Bulaşık Makinelerinde Sık Karşılaşılan Arızalar
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {commonFaults.map((f) => (
                <div key={f} className="flex items-start gap-2 rounded-xl bg-steel-50 px-4 py-3 text-sm text-steel-700">
                  <WrenchIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" /> {f}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <h3 className="text-lg font-bold text-brand-900">
                {brand.name} Sanayi Tipi Bulaşık Makinesi Tamircisi
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-700">
                {brand.name} marka endüstriyel bulaşık makinenizde yaşadığınız her türlü
                arıza için uzman ekibimiz aynı gün adresinizde. Restoran, otel, hastane,
                fabrika ve toplu yemek üretim mutfaklarına hızlı servis veriyoruz.
                İstanbul Avrupa Yakası'nın tüm ilçelerinde hizmetinizdeyiz.
              </p>
            </div>
          </div>

          {/* Yan panel */}
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">Hızlı Servis Talebi</h3>
              <p className="mt-2 text-sm text-steel-600">Aynı gün {brand.name} servisi için hemen iletişime geçin.</p>
              <a href={telLink} className="btn-primary mt-4 w-full"><PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}</a>
              <a href={waLink(`${brand.name} bulaşık makinesi servisi talebi`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-2 w-full"><WhatsAppIcon className="h-4 w-4" /> WhatsApp'tan Yaz</a>
              <ul className="mt-5 space-y-2 text-sm text-steel-600">
                <li className="flex items-center gap-2"><ClockIcon className="h-4 w-4 text-brand-600" /> Aynı gün servis</li>
                <li className="flex items-center gap-2"><ShieldIcon className="h-4 w-4 text-brand-600" /> Garantili işçilik</li>
                <li className="flex items-center gap-2"><CheckIcon className="h-4 w-4 text-brand-600" /> Orijinal yedek parça</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">Diğer Markalar</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {brands.filter((b) => b.slug !== brand.slug).slice(0, 12).map((b) => (
                  <Link key={b.slug} href={brandPath(b)} className="rounded-full bg-steel-50 px-3 py-1.5 text-xs font-semibold text-steel-600 hover:bg-brand-50 hover:text-brand-700">
                    {b.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bölgeler */}
      <ServiceAreasStrip title={`${brand.name} Servisi Verdiğimiz İlçeler`} />
      <CtaBand
        title={`${brand.name} Bulaşık Makineniz mi Arızalandı?`}
        subtitle={`${brand.name} endüstriyel bulaşık makinesi tamiri için aynı gün servis. Hemen arayın.`}
      />
    </>
  );
}

/* ---------------------------------------------------------------- */
/*  İLÇE SAYFASI                                                     */
/* ---------------------------------------------------------------- */
function DistrictPage({ district }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${district.name} Endüstriyel Bulaşık Makinesi Servisi`,
    provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phoneRaw },
    areaServed: { "@type": "Place", name: `${district.name}, İstanbul` },
    url: `${site.url}${districtPath(district)}`,
  };
  const breadcrumbSchema = buildBreadcrumb([
    { name: "Ana Sayfa", url: site.url },
    { name: "Hizmet Bölgeleri", url: `${site.url}/#bolgeler` },
    { name: `${district.name} Endüstriyel Bulaşık Makinesi Servisi`, url: `${site.url}${districtPath(district)}` },
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema} />
      <Breadcrumb items={[{ label: "Hizmet Bölgeleri", href: "/#bolgeler" }, { label: district.name }]} />

      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div className="animated-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-hero-mesh opacity-80" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-64 w-64 animate-blob rounded-full bg-brand-400/25 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 animate-blob rounded-full bg-accent-500/15 blur-3xl [animation-delay:-6s]" />
        </div>
        <div className="absolute inset-0 animate-gridpan bg-hero-grid [background-size:44px_44px] opacity-30" />

        <div className="container-max relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div className="stagger">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold">
              <MapPinIcon className="h-4 w-4 text-accent-400" /> {district.name} · İstanbul Avrupa Yakası
            </span>
            <h1 className="mt-5 text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">{district.name}</span>{" "}
              <span className="gradient-text">Endüstriyel Bulaşık Makinesi Servisi</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100">
              <strong className="text-white">{district.name}</strong> ve çevresinde
              endüstriyel ve sanayi tipi bulaşık makinesi tamircisi olarak hizmet
              veriyoruz. Tüm markalara aynı gün{" "}
              <strong className="text-white">arıza tespiti, tamir, bakım ve yedek parça</strong>{" "}
              hizmeti sunuyoruz.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: ClockIcon, t: "Aynı gün servis" },
                { icon: ShieldIcon, t: "Garantili işçilik" },
                { icon: CheckIcon, t: "Tüm markalara servis" },
              ].map((p) => (
                <span key={p.t} className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white">
                  <p.icon className="h-3.5 w-3.5 text-accent-400" /> {p.t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={telLink} className="btn-gold btn-shine">
                <PhoneIcon className="h-5 w-5" /> {site.phoneDisplay}
              </a>
              <a href={waLink(`Merhaba, ${district.name} için endüstriyel bulaşık makinesi servisi istiyorum.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Konum kartı */}
          <div className="animate-fade-up [animation-delay:0.25s] justify-self-center lg:justify-self-end">
            <div className="animate-floaty">
              <div className="glass w-64 rounded-3xl p-6 text-center shadow-glow">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 text-steel-900 shadow-lg">
                  <MapPinIcon className="h-10 w-10" />
                </span>
                <div className="mt-4 text-2xl font-black text-white">{district.name}</div>
                <div className="text-sm font-semibold text-brand-100">İstanbul Avrupa Yakası</div>
                <div className="mt-4 border-t border-white/15 pt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-100">Hizmet Saatleri</div>
                  <div className="mt-1 flex items-center justify-center gap-1.5 text-sm font-bold text-white">
                    <ClockIcon className="h-4 w-4 text-accent-300" /> Haftanın 7 günü
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt dalga */}
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
            <h2 className="text-2xl font-extrabold text-steel-900">
              {district.name}'de Hizmet Verdiğimiz Markalar
            </h2>
            <p className="mt-3 text-steel-600">
              {district.name} bölgesinde aşağıdaki tüm markaların endüstriyel bulaşık
              makinelerine servis, tamir ve bakım hizmeti veriyoruz. Marka sayfasına
              giderek servis verdiğimiz modelleri görebilirsiniz.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {brands.map((b) => (
                <Link
                  key={b.slug}
                  href={brandPath(b)}
                  className="group flex items-center gap-2 rounded-xl border border-steel-100 bg-white px-3 py-3 text-sm font-semibold text-steel-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-600 text-[11px] font-black text-white">
                    {b.name.replace("İ", "I").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
                  </span>
                  {b.name}
                </Link>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-extrabold text-steel-900">
              {district.name} Sanayi Tipi Bulaşık Makinesi Tamircisi
            </h2>
            <p className="mt-3 text-steel-600 leading-relaxed">
              {district.name} bölgesindeki restoran, kafe, otel, hastane, okul, fabrika
              ve toplu yemek üretim tesislerine sanayi tipi bulaşık makinesi servisi
              veriyoruz. Su almama, ısıtmama, dozaj arızası, su kaçağı, elektronik kart
              ve pompa arızaları başta olmak üzere tüm sorunlarda aynı gün çözüm
              sunuyoruz.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {commonFaults.map((f) => (
                <div key={f} className="flex items-start gap-2 rounded-xl bg-steel-50 px-4 py-3 text-sm text-steel-700">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" /> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Yan panel */}
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">{district.name} Servis Talebi</h3>
              <p className="mt-2 text-sm text-steel-600">Aynı gün servis için hemen iletişime geçin.</p>
              <a href={telLink} className="btn-primary mt-4 w-full"><PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}</a>
              <a href={waLink(`${district.name} endüstriyel bulaşık makinesi servisi`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-2 w-full"><WhatsAppIcon className="h-4 w-4" /> WhatsApp'tan Yaz</a>
            </div>

            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">Yakın İlçeler</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {districts.filter((d) => d.slug !== district.slug).slice(0, 14).map((d) => (
                  <Link key={d.slug} href={districtPath(d)} className="rounded-full bg-steel-50 px-3 py-1.5 text-xs font-semibold text-steel-600 hover:bg-brand-50 hover:text-brand-700">
                    {d.name}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title={`${district.name} Endüstriyel Bulaşık Makinesi Servisi`}
        subtitle={`${district.name} ve çevresinde aynı gün sanayi tipi bulaşık makinesi tamiri. Hemen arayın.`}
      />
    </>
  );
}

/* ---------------------------------------------------------------- */
/*  Yardımcı bileşenler                                             */
/* ---------------------------------------------------------------- */
function buildBreadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

function Breadcrumb({ items }) {
  return (
    <nav className="border-b border-steel-100 bg-steel-50">
      <div className="container-max flex flex-wrap items-center gap-2 py-3 text-xs text-steel-500">
        <Link href="/" className="hover:text-brand-600">Ana Sayfa</Link>
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-2">
            <span>/</span>
            {it.href ? (
              <Link href={it.href} className="hover:text-brand-600">{it.label}</Link>
            ) : (
              <span className="font-semibold text-steel-700">{it.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

function ServiceAreasStrip({ title }) {
  return (
    <section className="border-t border-steel-100 bg-steel-50 py-12">
      <div className="container-max">
        <h2 className="text-center text-xl font-extrabold text-steel-900">{title}</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {districts.map((d) => (
            <Link key={d.slug} href={districtPath(d)} className="rounded-full border border-steel-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-steel-600 transition hover:border-brand-400 hover:text-brand-700">
              {d.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
