import Link from "next/link";
import { notFound } from "next/navigation";
import { site, telLink, waLink } from "@/lib/site";
import {
  brands, districts, brandPath, districtPath, matrixPath,
  resolveSlug, allDynamicSlugs, commonFaults, hasLogo,
  districtNeighborhoods, districtProfile,
  matrixForBrand, matrixForDistrict, priorityBrandSlugs, matrixDistrictSlugs,
} from "@/lib/data";
import {
  brandFaultTable, brandFaq, brandIntro, modelNote, brandErrorCodes,
  baseSpareParts, maintenancePlan,
} from "@/lib/brandDetails";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import {
  FaultTable, ErrorCodeTable, SparePartsList, MaintenanceTable,
  FaqList, NeighborhoodList, ModelList, faqSchema,
} from "@/components/SeoSections";
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
  const phone = site.phoneDisplay;

  if (resolved.type === "matrix") {
    const { brand: b, district: d } = resolved;
    return {
      title: {
        absolute: `${d.name} ${b.name} Bulaşık Makinesi Servisi · ${phone} | Aynı Gün`,
      },
      description: `${d.name} ${b.name} bulaşık makinesi servisi ve tamircisi. ${d.name} ve çevresindeki ${(districtNeighborhoods(d.slug).slice(0, 3).join(", "))} bölgelerine aynı gün ${b.name} endüstriyel bulaşık makinesi tamiri, bakımı ve yedek parça hizmeti. ${phone}`,
      alternates: { canonical: matrixPath(b, d) },
      openGraph: {
        title: `${d.name} ${b.name} Bulaşık Makinesi Servisi · Aynı Gün`,
        description: `${d.name} bölgesinde ${b.name} endüstriyel bulaşık makinesi tamiri ve bakımı. Aynı gün servis.`,
      },
    };
  }

  if (resolved.type === "brand") {
    const b = resolved.brand;
    return {
      title: {
        absolute: `${b.name} Bulaşık Makinesi Servisi · ${phone} | İstanbul Avrupa`,
      },
      description: `${b.name} endüstriyel bulaşık makinesi servisi ve tamircisi. İstanbul Avrupa Yakası geneline (Şişli, Beşiktaş, Esenyurt vb.) aynı gün ${b.name} sanayi tipi bulaşık makinesi tamir, bakım ve yedek parça hizmeti. Arıza tablosu, yedek parça ve bakım rehberi sayfada.`,
      alternates: { canonical: brandPath(b) },
      openGraph: {
        title: `${b.name} Bulaşık Makinesi Servisi · İstanbul Avrupa Yakası`,
        description: `${b.name} endüstriyel ve sanayi tipi bulaşık makinesi tamiri, bakımı ve yedek parça hizmeti. Aynı gün servis.`,
      },
    };
  }

  const d = resolved.district;
  return {
    title: {
      absolute: `${d.name} Endüstriyel Bulaşık Makinesi Servisi · ${phone}`,
    },
    description: `${d.name} endüstriyel bulaşık makinesi servisi ve tamircisi. ${(districtNeighborhoods(d.slug).slice(0, 4).join(", "))} başta olmak üzere ${d.name} genelinde tüm markalara aynı gün sanayi tipi bulaşık makinesi tamir ve bakım hizmeti.`,
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

  if (resolved.type === "matrix")
    return <MatrixPage brand={resolved.brand} district={resolved.district} />;
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

  const intro = brandIntro(brand);
  const faults = brandFaultTable(brand.slug);
  const faq = brandFaq(brand);
  const codes = brandErrorCodes(brand.slug);
  const matrixCities = matrixForBrand(brand.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${brand.name} Endüstriyel Bulaşık Makinesi Servisi`,
    provider: { "@id": `${site.url}/#organization` },
    brand: { "@type": "Brand", name: brand.name },
    areaServed: districts.map((d) => ({
      "@type": "AdministrativeArea",
      name: `${d.name}, İstanbul`,
    })),
    url: `${site.url}${brandPath(brand)}`,
    description: `${brand.name} endüstriyel ve sanayi tipi bulaşık makineleri için arıza tespiti, onarım, periyodik bakım ve yedek parça hizmeti.`,
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
      <JsonLd data={faqSchema(faq)} />
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
            {/* Giriş / markaya özel bağlam */}
            <h2 className="text-2xl font-extrabold text-steel-900">
              {brand.name} Endüstriyel Bulaşık Makinesi Servisi
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-steel-600">
              {intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Modeller */}
            <div className="mt-12">
              <ModelList
                brandName={brand.name}
                models={brand.models}
                noteFor={(m) => modelNote(brand.slug, m)}
              />
            </div>

            {/* Arıza tablosu */}
            <div className="mt-12">
              <FaultTable
                title={`${brand.name} Bulaşık Makinelerinde Sık Karşılaşılan Arızalar`}
                rows={faults}
                note={`Aşağıdaki tablo, ${brand.name} makinelerinde sahada karşılaştığımız belirtileri, olası nedenlerini, uyguladığımız işlemi ve ortalama müdahale süresini gösterir. Süreler tek bir ziyarette çözülen tipik arızalar içindir; parça temini gerektiren durumlarda süre uzayabilir.`}
              />
            </div>

            {/* Hata kodları (doğrulanmış kod girildiğinde görünür) */}
            <ErrorCodeTable brandName={brand.name} codes={codes} />

            {/* Yedek parça */}
            <SparePartsList
              title={`${brand.name} Bulaşık Makinesi Yedek Parçaları`}
              parts={baseSpareParts}
            />

            {/* Bakım periyodu */}
            <MaintenanceTable
              title={`${brand.name} Bulaşık Makinesi Bakım Periyodu`}
              plan={maintenancePlan}
            />

            {/* SSS */}
            <FaqList title={`${brand.name} Servisi Hakkında Sık Sorulan Sorular`} faq={faq} />

            <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-6">
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

            {matrixCities.length > 0 && (
              <div className="card p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">
                  İlçe Bazlı {brand.name} Servisi
                </h3>
                <div className="mt-3 flex flex-col gap-1.5">
                  {matrixCities.map((d) => (
                    <Link
                      key={d.slug}
                      href={matrixPath(brand, d)}
                      className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold text-steel-600 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      <MapPinIcon className="h-3.5 w-3.5 text-accent-500" />
                      {d.name} {brand.name} Servisi
                    </Link>
                  ))}
                </div>
              </div>
            )}

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
  const hoods = districtNeighborhoods(district.slug);
  const profile = districtProfile[district.slug] || "restoran, otel ve toplu yemek mutfakları";
  const matrixBrands = matrixForDistrict(district.slug);

  const faq = [
    {
      q: `${district.name}'de endüstriyel bulaşık makinesi servisi aynı gün geliyor mu?`,
      a: `Evet. ${district.name} ve çevresine aynı gün servis veriyoruz. ${hoods.slice(0, 4).join(", ")} gibi bölgelere yoğunluk durumuna göre çoğu zaman birkaç saat içinde ulaşıyoruz.`,
    },
    {
      q: `${district.name}'de hangi mahallelere hizmet veriyorsunuz?`,
      a: `${hoods.join(", ")} başta olmak üzere ${district.name} sınırları içindeki tüm mahallelere endüstriyel ve sanayi tipi bulaşık makinesi servisi veriyoruz.`,
    },
    {
      q: `${district.name}'de hangi işletmelere servis veriyorsunuz?`,
      a: `${district.name}'de ağırlıklı olarak ${profile} olmak üzere; restoran, kafe, otel, hastane, okul, yemekhane ve fabrika mutfaklarına hizmet veriyoruz.`,
    },
    {
      q: "Keşif ve arıza tespiti ücretli mi?",
      a: "Arıza tespitinin ardından yapılacak işlem ve bedeli hakkında bilgi veriyor, onayınızı aldıktan sonra işleme başlıyoruz. Onaylamadığınız hiçbir işlem yapılmaz.",
    },
    {
      q: `${district.name}'de hangi markalara servis veriyorsunuz?`,
      a: `Empero, İnoksan, Öztiryakiler, Maksan, Winterhalter, Hobart, Meiko, Fagor, Electrolux ve Miele dahil 24 markanın tüm modellerine ${district.name} genelinde servis veriyoruz.`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${district.name} Endüstriyel Bulaşık Makinesi Servisi`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${district.name}, İstanbul`,
      containsPlace: hoods.map((n) => ({ "@type": "Place", name: n })),
    },
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
      <JsonLd data={faqSchema(faq)} />
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
              <strong className="text-white">{district.name}</strong>'de{" "}
              {hoods.slice(0, 3).join(", ")} başta olmak üzere {profile} için
              endüstriyel ve sanayi tipi bulaşık makinesi servisi veriyoruz. Tüm
              markalara aynı gün{" "}
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
              {district.name}'de Endüstriyel Bulaşık Makinesi Servisi
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-steel-600">
              <p>
                {district.name}'de ağırlıklı olarak {profile} servis veriyoruz. Bu tip
                mutfaklarda bulaşık makinesinin durması yalnızca bulaşığı değil tüm
                servis akışını durdurduğu için, arıza bildirimlerini aynı gün
                karşılıyor ve sık kullanılan yedek parçalarla yola çıkıyoruz.
              </p>
              <p>
                Bölgede en sık karşılaştığımız sorun, İstanbul şebeke suyunun
                sertliğine bağlı kireç birikimidir: boyler ve rezistans üzerinde
                oluşan kireç önce ısıtmayı yavaşlatır, ardından durulama memelerini
                daraltarak bulaşıkta leke bırakır. {district.name}'deki işletmelere
                düzenli kireç çözme ve gerekiyorsa su yumuşatma sistemi öneriyoruz.
              </p>
            </div>

            {/* Mahalleler */}
            <NeighborhoodList districtName={district.name} list={hoods} />

            {/* Marka × ilçe iç linkleri */}
            {matrixBrands.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-extrabold text-steel-900">
                  {district.name}'de Marka Bazlı Servis Sayfaları
                </h2>
                <p className="mt-3 text-steel-600">
                  En çok servis verdiğimiz markalar için {district.name}'e özel
                  sayfalarımızı inceleyebilirsiniz.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {matrixBrands.map((b) => (
                    <Link
                      key={b.slug}
                      href={matrixPath(b, district)}
                      className="group flex items-center justify-between rounded-xl border border-steel-100 bg-white px-4 py-3.5 text-sm font-bold text-steel-800 shadow-sm transition hover:border-accent-300 hover:text-brand-700 hover:shadow-card"
                    >
                      <span>{district.name} {b.name} Bulaşık Makinesi Servisi</span>
                      <ArrowIcon className="h-4 w-4 flex-shrink-0 text-accent-500 transition group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Tüm markalar */}
            <h2 className="mt-12 text-2xl font-extrabold text-steel-900">
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
            <p className="mt-3 leading-relaxed text-steel-600">
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

            {/* SSS */}
            <FaqList title={`${district.name} Servisi Hakkında Sık Sorulan Sorular`} faq={faq} />
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
/*  MARKA × İLÇE SAYFASI                                             */
/* ---------------------------------------------------------------- */
function MatrixPage({ brand, district }) {
  const hoods = districtNeighborhoods(district.slug);
  const profile = districtProfile[district.slug] || "restoran, otel ve toplu yemek mutfakları";
  // Sayfaların birbirinin kopyası olmaması için giriş metni, süreç anlatımı,
  // bölge notu, arıza tablosu ve SSS seti marka+ilçe kombinasyonuna göre değişir.
  const brandIndex = priorityBrandSlugs.indexOf(brand.slug);
  const districtIndex = matrixDistrictSlugs.indexOf(district.slug);
  const variant = (Math.max(districtIndex, 0) + Math.max(brandIndex, 0)) % 4;
  const faqRot = (Math.max(districtIndex, 0) + Math.max(brandIndex, 0) * 2) % 8;

  // Arıza tablosu ilçeye göre döndürülür: markaya özel ilk 3 satır sabit kalır,
  // kalan 6 satır rotasyonla değişir.
  const allFaults = brandFaultTable(brand.slug);
  const pinned = allFaults.slice(0, 3);
  const pool = allFaults.slice(3);
  const off = (Math.max(districtIndex, 0) * 4) % pool.length;
  const faults = [...pinned, ...[...pool.slice(off), ...pool.slice(0, off)].slice(0, 6)];
  const codes = brandErrorCodes(brand.slug);
  const bIntro = brandIntro(brand);

  const intros = [
    `${district.name}'de ${hoods.slice(0, 3).join(", ")} çevresindeki ${profile} için ${brand.name} bulaşık makinesi servisi veriyoruz. Arıza bildiriminizi aldığımız gün, ${brand.name} makinelerinde en sık değişen yedek parçalarla birlikte adresinize geliyoruz.`,
    `${brand.name} endüstriyel bulaşık makineniz ${district.name}'de arızalandıysa işletmenizi bekletmiyoruz. ${hoods.slice(0, 3).join(", ")} ve çevresindeki ${profile} aynı gün servis veriyor, arızayı mümkün olduğunda ilk ziyarette çözüyoruz.`,
    `${district.name} ve çevresindeki ${profile} ${brand.name} bulaşık makinesi tamiri, periyodik bakımı ve yedek parça temini yapıyoruz. ${hoods.slice(0, 3).join(", ")} bölgelerine ortalama varış süremiz, gün içi yoğunluğa göre birkaç saattir.`,
    `${brand.name} bulaşık makinesi servisi için ${district.name}'deki işletmelere aynı gün destek veriyoruz. Bölgede ağırlıklı olarak ${profile} çalışıyoruz; ${hoods.slice(0, 3).join(", ")} çevresi en sık servis verdiğimiz hatlardan biridir.`,
  ];

  const localContext = [
    `${district.name} özelinde ek bir zorluk var: bölgedeki ${profile} yoğun servis saatlerinde makineyi kapasitesinin üst sınırında çalıştırıyor. Bu da boyler ısıtma süresini uzatıyor ve kireç birikimini hızlandırıyor. ${brand.name} makinelerinde bu durumun ilk işareti, çevrim süresinin normalden uzaması ve bulaşıkta kalan su lekesidir.`,
    `${district.name}'de servis verdiğimiz mutfakların çoğu ${profile} olduğu için makineler gün içinde uzun aralıksız bloklar halinde çalışıyor. Aralıksız çalışma, hazne suyunun uzun süre değişmemesine ve köpük birikmesine yol açıyor; ${brand.name} makinelerinde yıkama basıncı düşüşü olarak kendini gösteriyor. Vardiya ortasında hazne suyunun yenilenmesi bu sorunu büyük ölçüde çözüyor.`,
    `${district.name}'deki ${profile} genelde dar mutfak alanlarında çalışıyor; bu da makinenin havalandırma ve tahliye koşullarını zorluyor. ${brand.name} makinelerinde bu koşullarda en sık gördüğümüz sonuç, tahliye hattı tıkanması ve kapak contasının erken sertleşmesi oluyor.`,
    `${district.name}'de ${profile} çalıştığımız için servis çağrıları çoğunlukla akşam servisinin ortasında geliyor. Bu nedenle bölgeye çıkan teknisyenimiz ${brand.name} makinelerinde en sık değişen parçaları (rezistans, dozaj hortumu, conta seti, seviye şalteri) araçta hazır bulunduruyor ve işletmeyi ikinci bir ziyaret için bekletmiyor.`,
  ];

  const faqPool = [
    {
      q: `${district.name}'de ${brand.name} bulaşık makinesi servisi aynı gün geliyor mu?`,
      a: `Evet. ${district.name} için aynı gün servis veriyoruz. ${hoods.slice(0, 4).join(", ")} gibi bölgelere yoğunluğa göre çoğu zaman birkaç saat içinde ulaşıyoruz. Teknisyenimiz ${brand.name} makinelerinde en sık değişen parçalarla birlikte gelir.`,
    },
    {
      q: `${district.name}'de hangi ${brand.name} modellerine servis veriyorsunuz?`,
      a: `${brand.models.slice(0, 8).join(", ")} dahil olmak üzere ${brand.models.length} ${brand.name} modeline ${district.name} genelinde servis, bakım ve yedek parça hizmeti veriyoruz.`,
    },
    {
      q: `${brand.name} makinem ısıtmıyor, ${district.name}'de kim bakar?`,
      a: `Isıtmama arızası genellikle rezistans, kontaktör veya termostat kaynaklıdır ve trifaze pano üzerinde ölçüm gerektirir. ${district.name}'deki adresinize gelip ölçümü yerinde yapıyor, parça gerekiyorsa aynı ziyarette değiştirmeye çalışıyoruz.`,
    },
    {
      q: `${district.name}'de ${brand.name} için periyodik bakım anlaşması yapıyor musunuz?`,
      a: `Evet. ${district.name}'de ${profile} çalıştığımız için kullanım yoğunluğu yüksek; bu tip mutfaklarda aylık veya üç aylık bakım planı öneriyoruz. Düzenli kireç çözme ve filtre bakımı arızaların büyük bölümünü baştan önler.`,
    },
    {
      q: `${district.name}'deki hangi mahallelere ${brand.name} servisi veriyorsunuz?`,
      a: `${hoods.join(", ")} başta olmak üzere ${district.name} sınırları içindeki tüm mahallelere ${brand.name} bulaşık makinesi servisi veriyoruz.`,
    },
    {
      q: `${district.name}'de ${brand.name} yedek parça temini ne kadar sürüyor?`,
      a: `Rezistans, dozaj hortumu, conta seti, seviye şalteri ve kontaktör gibi ${brand.name} makinelerinde en sık değişen parçaları teknisyenimiz araçta bulunduruyor; bu parçalar aynı ziyarette değişiyor. Daha nadir parçalarda temin süresi genellikle 1–2 iş günüdür.`,
    },
    {
      q: `${brand.name} makinemde su kaçağı var, ${district.name}'de acil müdahale ediyor musunuz?`,
      a: `Evet. Su kaçağı hem elektrik riski hem de mutfakta iş güvenliği sorunu yarattığı için bu çağrıları öncelikli işliyoruz. ${district.name} içindeki adreslere aynı gün çıkıyor, kaçak noktasını basınç altında test ederek buluyoruz.`,
    },
    {
      q: `${district.name}'de ${brand.name} makinesi kurulumu ve devreye alma yapıyor musunuz?`,
      a: `Evet. ${district.name}'de yeni ${brand.name} bulaşık makinesi kurulumu, su ve elektrik bağlantısı, ilk dozaj kalibrasyonu ve personel kullanım eğitimini birlikte yapıyoruz.`,
    },
  ];

  // İlçeye göre farklı 5 soru seçilir — sayfalar birbirinin kopyası olmaz.
  const faq = [...faqPool.slice(faqRot), ...faqPool.slice(0, faqRot)].slice(0, 5);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${brand.name} Bulaşık Makinesi Servisi`,
    provider: { "@id": `${site.url}/#organization` },
    brand: { "@type": "Brand", name: brand.name },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${district.name}, İstanbul`,
      containsPlace: hoods.map((n) => ({ "@type": "Place", name: n })),
    },
    url: `${site.url}${matrixPath(brand, district)}`,
    description: `${district.name} bölgesinde ${brand.name} endüstriyel bulaşık makinesi arıza tespiti, onarım, periyodik bakım ve yedek parça hizmeti.`,
  };
  const breadcrumbSchema = buildBreadcrumb([
    { name: "Ana Sayfa", url: site.url },
    { name: `${district.name} Servisi`, url: `${site.url}${districtPath(district)}` },
    { name: `${district.name} ${brand.name} Bulaşık Makinesi Servisi`, url: `${site.url}${matrixPath(brand, district)}` },
  ]);

  const steps = [
    {
      t: "Arıza bildirimi",
      d: `Telefon veya WhatsApp'tan makinenin markasını, modelini ve belirtiyi iletin. ${brand.name} modellerinde belirti, gerekli parçayı önceden tahmin etmemizi sağlar.`,
    },
    {
      t: `${district.name}'e çıkış`,
      d: `${hoods.slice(0, 3).join(", ")} hattındaki işlere aynı ekip bakar; teknisyenimiz sık değişen parçalarla yola çıkar.`,
    },
    {
      t: "Yerinde tespit ve onay",
      d:
        variant % 2 === 0
          ? "Arıza yerinde tespit edilir, yapılacak işlem ve bedeli net biçimde iletilir. Onayınız olmadan hiçbir işlem yapılmaz."
          : "Teknisyen önce ölçüm yapar, arızanın kaynağını gösterir ve gereksiz parça değişimi önermeden çözümü anlatır. İşlem, onayınızdan sonra başlar.",
    },
    {
      t: "Onarım, test ve garanti",
      d:
        variant % 2 === 0
          ? "Onarım sonrası makine tam çevrimde test edilir, yıkama ve durulama sıcaklıkları doğrulanır. İşçilik garantilidir."
          : "Parça değişiminin ardından makine boş sepetle tam çevrim çalıştırılır; sıcaklık, basınç ve dozaj birlikte doğrulanır. Yapılan işçilik garanti kapsamındadır.",
    },
  ];

  return (
    <>
      <JsonLd data={schema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema(faq)} />
      <Breadcrumb
        items={[
          { label: district.name, href: districtPath(district) },
          { label: `${brand.name} Servisi` },
        ]}
      />

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
              <MapPinIcon className="h-4 w-4 text-accent-400" /> {district.name} · Aynı Gün Servis
            </span>
            <h1 className="mt-5 text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-white">{district.name} {brand.name}</span>{" "}
              <span className="gradient-text">Bulaşık Makinesi Servisi</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100">
              {intros[variant]}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: ClockIcon, t: "Aynı gün servis" },
                { icon: WrenchIcon, t: `${brand.name} uzmanı ekip` },
                { icon: ShieldIcon, t: "Garantili işçilik" },
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
              <a
                href={waLink(`Merhaba, ${district.name} için ${brand.name} bulaşık makinesi servisi istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:0.25s] justify-self-center lg:justify-self-end">
            <div className="animate-floaty">
              <div className="glass w-64 rounded-3xl p-6 text-center shadow-glow">
                <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl bg-white p-3 shadow-premium">
                  {hasLogo(brand.slug) ? (
                    <img src={`/logos/${brand.slug}.png`} alt={`${brand.name} logo`} className="h-full w-full object-contain" />
                  ) : (
                    <WrenchIcon className="h-10 w-10 text-brand-700" />
                  )}
                </div>
                <div className="mt-4 text-xl font-black text-white">{brand.name}</div>
                <div className="text-sm font-semibold text-brand-100">{district.name} · İstanbul</div>
                <div className="mt-4 border-t border-white/15 pt-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-100">Servis Verilen Model</div>
                  <div className="mt-1 text-sm font-bold text-white">{brand.models.length}+ model</div>
                </div>
              </div>
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
            <h2 className="text-2xl font-extrabold text-steel-900">
              {district.name}'de {brand.name} Servisi Nasıl Çalışır?
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {steps.map((s, i) => (
                <div key={s.t} className="rounded-2xl border border-steel-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-xs font-black text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold text-steel-900">{s.t}</h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-steel-600">{s.d}</p>
                </div>
              ))}
            </div>

            {/* Mahalleler */}
            <NeighborhoodList
              districtName={district.name}
              list={hoods}
              suffix={`${brand.name} bulaşık makinesi servisi`}
            />

            {/* Markaya özel bağlam */}
            <div className="mt-12">
              <h2 className="text-2xl font-extrabold text-steel-900">
                {district.name}'de {brand.name} Makinelerinde Ne Görüyoruz?
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-steel-600">
                <p>{bIntro[1] || bIntro[0]}</p>
                <p>{localContext[variant]}</p>
              </div>
            </div>

            {/* Arıza tablosu */}
            <div className="mt-12">
              <FaultTable
                title={`${brand.name} Bulaşık Makinelerinde Sık Görülen Arızalar`}
                rows={faults}
                note={`${district.name}'de ${brand.name} makineleri için en sık aldığımız servis çağrıları ve uyguladığımız işlemler.`}
              />
              <Link
                href={brandPath(brand)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-accent-600"
              >
                Tüm {brand.name} arıza tablosu ve yedek parça listesi
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>

            <ErrorCodeTable brandName={brand.name} codes={codes} />

            {/* Modeller */}
            <div className="mt-12">
              <h2 className="text-2xl font-extrabold text-steel-900">
                {district.name}'de Servis Verdiğimiz {brand.name} Modelleri
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {brand.models.map((m) => (
                  <span key={m} className="rounded-full border border-steel-200 bg-white px-3 py-1.5 text-sm font-semibold text-steel-700">
                    {brand.name} {m}
                  </span>
                ))}
              </div>
            </div>

            {/* SSS */}
            <FaqList
              title={`${district.name} ${brand.name} Servisi — Sık Sorulan Sorular`}
              faq={faq}
            />
          </div>

          {/* Yan panel */}
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">
                {district.name} {brand.name} Servis Talebi
              </h3>
              <p className="mt-2 text-sm text-steel-600">Aynı gün servis için hemen iletişime geçin.</p>
              <a href={telLink} className="btn-primary mt-4 w-full"><PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}</a>
              <a
                href={waLink(`${district.name} ${brand.name} bulaşık makinesi servisi talebi`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-2 w-full"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp'tan Yaz
              </a>
              <ul className="mt-5 space-y-2 text-sm text-steel-600">
                <li className="flex items-center gap-2"><ClockIcon className="h-4 w-4 text-brand-600" /> {site.workingHours}</li>
                <li className="flex items-center gap-2"><MapPinIcon className="h-4 w-4 text-brand-600" /> {district.name} ve çevresi</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">
                {district.name}'de Diğer Markalar
              </h3>
              <div className="mt-3 flex flex-col gap-1.5">
                {matrixForDistrict(district.slug)
                  .filter((b) => b.slug !== brand.slug)
                  .map((b) => (
                    <Link
                      key={b.slug}
                      href={matrixPath(b, district)}
                      className="rounded-lg px-2 py-1.5 text-sm font-semibold text-steel-600 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {district.name} {b.name} Servisi
                    </Link>
                  ))}
                <Link
                  href={districtPath(district)}
                  className="mt-1 rounded-lg px-2 py-1.5 text-sm font-bold text-brand-700 hover:bg-brand-50"
                >
                  {district.name} tüm markalar →
                </Link>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-steel-500">
                Diğer İlçelerde {brand.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {matrixForBrand(brand.slug)
                  .filter((d) => d.slug !== district.slug)
                  .map((d) => (
                    <Link
                      key={d.slug}
                      href={matrixPath(brand, d)}
                      className="rounded-full bg-steel-50 px-3 py-1.5 text-xs font-semibold text-steel-600 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {d.name}
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title={`${district.name}'de ${brand.name} Bulaşık Makineniz mi Arızalandı?`}
        subtitle={`${district.name} ve çevresine aynı gün ${brand.name} servisi. Hemen arayın.`}
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
