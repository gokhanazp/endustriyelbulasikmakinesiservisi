import Link from "next/link";
import { site, telLink, waLink } from "@/lib/site";
import { brands, districts, districtPath, services } from "@/lib/data";
import BrandCard from "@/components/BrandCard";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import {
  PhoneIcon, WhatsAppIcon, WrenchIcon, ClockIcon, ShieldIcon,
  CheckIcon, MapPinIcon, StarIcon, ArrowIcon, DropletIcon,
  DishwasherIcon, CogIcon, SparkleIcon,
} from "@/components/Icons";

const serviceIcons = [WrenchIcon, ClockIcon, CogIcon, DishwasherIcon, DropletIcon, SparkleIcon];

export const metadata = {
  title:
    "Endüstriyel Bulaşık Makinesi Servisi | Sanayi Tipi Tamirci · İstanbul Avrupa Yakası",
  description:
    "İstanbul Avrupa Yakası endüstriyel bulaşık makinesi servisi ve tamircisi. Empero, Öztiryakiler, Winterhalter, Hobart ve tüm markalara aynı gün sanayi tipi bulaşık makinesi tamir ve bakım hizmeti.",
  alternates: { canonical: "/" },
};

const trust = [
  { icon: ClockIcon, title: "Aynı Gün Servis", desc: "Arıza bildiriminizden sonra aynı gün adresinizde" },
  { icon: ShieldIcon, title: "Garantili İşçilik", desc: "Yapılan tüm tamirlerde işçilik garantisi" },
  { icon: WrenchIcon, title: "Uzman Teknik Ekip", desc: "Tüm markalarda deneyimli servis kadrosu" },
  { icon: CheckIcon, title: "Orijinal Yedek Parça", desc: "Uzun ömürlü orijinal ve muadil parça" },
];

const steps = [
  { n: "01", t: "Arayın veya Yazın", d: "Telefon ya da WhatsApp'tan arızanızı iletin.", icon: PhoneIcon },
  { n: "02", t: "Aynı Gün Keşif", d: "Teknisyenimiz adresinize gelip arızayı tespit eder.", icon: MapPinIcon },
  { n: "03", t: "Onarım & Test", d: "Onayınızla tamir yapılır, makine test edilir.", icon: WrenchIcon },
  { n: "04", t: "Garanti & Bakım", d: "İşçilik garantisi ve periyodik bakım önerisi.", icon: ShieldIcon },
];

const faqs = [
  {
    q: "Endüstriyel bulaşık makinesi servisi hangi bölgelerde hizmet veriyor?",
    a: "İstanbul Avrupa Yakası'nın tüm ilçelerinde (Şişli, Beşiktaş, Esenyurt, Bakırköy, Bağcılar ve diğerleri) sanayi tipi bulaşık makinesi tamir ve bakım hizmeti veriyoruz. Aynı gün servis imkânı sunuyoruz.",
  },
  {
    q: "Hangi markaların bulaşık makinelerine servis veriyorsunuz?",
    a: "Empero, Öztiryakiler, İnoksan, Winterhalter, Hobart, Meiko, Fagor, Electrolux, Miele, Classeq başta olmak üzere 24 markanın tüm modellerine endüstriyel bulaşık makinesi tamircisi olarak hizmet veriyoruz.",
  },
  {
    q: "Sanayi tipi bulaşık makinesi tamiri aynı gün yapılıyor mu?",
    a: "Evet. Arıza bildiriminizin ardından uzman teknik ekibimiz aynı gün adresinize gelerek arıza tespiti ve mümkün olan onarımı gerçekleştirir.",
  },
  {
    q: "Deterjan ve parlatıcı satışı yapıyor musunuz?",
    a: "Evet, endüstriyel bulaşık makineleri için profesyonel deterjan, parlatıcı ve su yumuşatma ürünleri satışı ve dozaj sistemi kurulumu yapıyoruz.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        {/* Katman 1: animasyonlu degrade zemin */}
        <div className="animated-gradient absolute inset-0" />
        {/* Katman 2: renkli mesh ışıklar */}
        <div className="absolute inset-0 bg-hero-mesh opacity-90" />
        {/* Katman 3: hareketli ışık kürecikleri */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-10 h-72 w-72 animate-blob rounded-full bg-brand-400/30 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 animate-blob rounded-full bg-accent-500/20 blur-3xl [animation-delay:-4s]" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-brand-600/40 blur-3xl [animation-delay:-8s]" />
        </div>
        {/* Katman 4: kayan ızgara */}
        <div className="absolute inset-0 animate-gridpan bg-hero-grid [background-size:48px_48px] opacity-40" />

        <div className="container-max relative grid gap-10 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="stagger">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              İstanbul Avrupa Yakası · Aynı Gün Servis
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="gradient-text">Endüstriyel Bulaşık</span>
              <br />
              <span className="text-white">Makinesi Servisi</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
              Sanayi tipi ve endüstriyel bulaşık makinesi tamircisi olarak tüm
              markalara profesyonel <strong className="text-white">tamir, bakım ve yedek parça</strong>{" "}
              hizmeti sunuyoruz. Restoran, otel, hastane ve fabrika mutfaklarına
              aynı gün çözüm.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {["Tüm markalara servis", "Aynı gün arıza tespiti", "Garantili işçilik", "Orijinal yedek parça"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-brand-50">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={telLink} className="btn-shine btn bg-white text-brand-700 shadow-glow transition-transform hover:scale-[1.03] hover:bg-brand-50">
                <PhoneIcon className="h-5 w-5" /> {site.phoneDisplay}
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp transition-transform hover:scale-[1.03]">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp Destek
              </a>
            </div>
          </div>

          {/* Fotoğraf - yüzen, altın çerçeveli */}
          <div className="relative animate-fade-up [animation-delay:0.35s]">
            <div className="animate-floaty">
              {/* Altın degrade çerçeve */}
              <div className="rounded-[28px] bg-gradient-to-br from-accent-400/70 via-white/20 to-brand-400/40 p-[3px] shadow-glow">
                <div className="relative overflow-hidden rounded-[26px] bg-steel-100">
                  {/* Fotoğraf: public/images/hero.jpg yüklendiğinde otomatik görünür,
                      yoksa illüstrasyon (hero.svg) yedek olarak gösterilir. */}
                  <div
                    role="img"
                    aria-label="Endüstriyel bulaşık makinesi servisi - aynı gün tamir ve bakım"
                    className="aspect-[3/2] w-full bg-cover bg-center"
                    style={{ backgroundImage: "url(/images/hero.jpg), url(/images/hero.svg)" }}
                  />
                  {/* Alt degrade katman */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-steel-900/70 to-transparent" />

                  {/* İstatistik şeridi */}
                  <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2">
                    {[["24", "Marka"], ["25", "İlçe"], ["7/24", "Destek"]].map(([n, l]) => (
                      <div key={l} className="glass rounded-xl px-2 py-2.5 text-center text-white">
                        <div className="text-xl font-black text-accent-400">{n}</div>
                        <div className="text-[11px] font-semibold text-white/80">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Yüzen rozet: puan */}
              <div className="absolute -left-4 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-premium ring-1 ring-steel-100 sm:-left-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-0.5 text-accent-500">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-4 w-4" />)}
                  </div>
                  <span className="mt-0.5 text-xs font-bold text-steel-700">5.0 · Müşteri puanı</span>
                </div>
              </div>

              {/* Yüzen rozet: aynı gün servis */}
              <div className="absolute -right-3 top-1/2 flex items-center gap-2 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-600 px-4 py-3 text-steel-900 shadow-[0_15px_35px_-10px_rgba(245,158,11,0.7)] sm:-right-5">
                <ClockIcon className="h-6 w-6" />
                <span className="text-sm font-extrabold leading-tight">Aynı Gün<br />Servis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt dalga geçişi */}
        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 80" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#ffffff" d="M0,40 C240,80 480,0 720,24 C960,48 1200,88 1440,48 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* GÜVEN ROZETLERİ - hero'ya binen premium kartlar */}
      <section className="relative z-10 -mt-8 pb-4 sm:-mt-12">
        <div className="container-max grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => (
            <div
              key={t.title}
              className="group relative overflow-hidden rounded-2xl border border-steel-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-premium"
            >
              {/* köşe altın parıltı */}
              <span className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-accent-400/10 transition group-hover:bg-accent-400/20" />
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 text-white shadow-md transition group-hover:scale-105">
                <t.icon className="h-7 w-7" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-[10px] font-black text-steel-900 shadow">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="relative mt-4 text-base font-extrabold text-steel-900">{t.title}</h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-steel-500">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="section relative overflow-hidden bg-steel-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/2 top-0 h-60 w-[34rem] translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl" />
          <div className="absolute -left-10 bottom-10 h-48 w-48 rounded-full bg-accent-200/40 blur-3xl" />
        </div>

        <div className="container-max relative">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="eyebrow">Hizmetlerimiz</span>
            <h2 className="heading-underline mt-4 text-2xl font-extrabold text-steel-900 sm:text-3xl">
              Endüstriyel Bulaşık Makinesi Tamir ve Bakım Hizmetleri
            </h2>
            <p className="mt-6 text-steel-600">
              Sanayi tipi bulaşık makinelerinizde ihtiyaç duyduğunuz tüm teknik servis
              çözümleri tek çatı altında.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = serviceIcons[i] || WrenchIcon;
              return (
                <Reveal key={s.title} delay={i * 90}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-steel-100 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-premium">
                    {/* üst altın çizgi */}
                    <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-400 to-accent-600 transition-transform duration-300 group-hover:scale-x-100" />
                    {/* köşe daire */}
                    <span className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-50 transition duration-300 group-hover:bg-accent-50" />

                    <div className="relative flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 text-white shadow-md transition duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:from-accent-400 group-hover:to-accent-600 group-hover:text-steel-900">
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="text-2xl font-black text-steel-200 transition duration-300 group-hover:text-accent-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="relative mt-5 text-lg font-bold text-steel-900">{s.title}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-steel-600">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* MARKALAR */}
      <section id="markalar" className="section relative overflow-hidden">
        {/* dekoratif arka plan */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-brand-100/50 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-accent-200/40 blur-3xl" />
        </div>

        <div className="container-max">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="eyebrow">Servis Verdiğimiz Markalar</span>
            <h2 className="heading-underline mt-4 text-2xl font-extrabold text-steel-900 sm:text-3xl">
              Tüm Endüstriyel Bulaşık Makinesi Markalarına Servis
            </h2>
            <p className="mt-6 text-steel-600">
              <strong className="font-bold text-steel-800">24 markanın</strong> tüm
              modellerine sanayi tipi bulaşık makinesi tamiri ve bakımı yapıyoruz.
              Detay için marka kartına tıklayın.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {brands.map((b) => (
              <BrandCard key={b.slug} brand={b} />
            ))}
          </div>

          {/* Yardımcı CTA */}
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-between gap-4 rounded-2xl border border-dashed border-steel-200 bg-steel-50 px-6 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-steel-600">
              <strong className="font-bold text-steel-900">Markanızı listede bulamadınız mı?</strong>{" "}
              Tüm endüstriyel bulaşık makinelerine servis veriyoruz.
            </p>
            <a href={telLink} className="btn-gold btn-shine whitespace-nowrap">
              <PhoneIcon className="h-4 w-4" /> Hemen Sorun
            </a>
          </div>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="section relative overflow-hidden bg-brand-900 text-white">
        {/* dekoratif hareketli katmanlar */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 animate-gridpan bg-hero-grid [background-size:44px_44px] opacity-20" />
          <div className="absolute -left-16 top-8 h-64 w-64 animate-blob rounded-full bg-brand-500/25 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-72 w-72 animate-blob rounded-full bg-accent-500/15 blur-3xl [animation-delay:-6s]" />
        </div>

        <div className="container-max relative">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-300 ring-1 ring-accent-400/30">
              Nasıl Çalışıyoruz?
            </span>
            <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">4 Adımda Hızlı Servis</h2>
            <p className="mt-3 text-brand-100">
              Arıza bildiriminden garantiye kadar hızlı ve şeffaf bir süreç.
            </p>
          </Reveal>

          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* bağlayıcı çizgi (masaüstü) */}
            <div className="pointer-events-none absolute inset-x-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />

            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent-400/40 hover:bg-white/10 hover:shadow-glow">
                  <div className="flex items-center justify-between">
                    <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg ring-4 ring-brand-900 transition duration-300 group-hover:scale-105 group-hover:from-accent-400 group-hover:to-accent-600 group-hover:text-steel-900">
                      <s.icon className="h-7 w-7" />
                    </span>
                    <span className="text-4xl font-black text-white/10 transition duration-300 group-hover:text-accent-400/40">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100">{s.d}</p>
                  <span className="mt-4 block h-0.5 w-0 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HİZMET BÖLGELERİ */}
      <section id="bolgeler" className="section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-8 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-brand-100/40 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-accent-200/40 blur-3xl" />
        </div>

        <div className="container-max">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="eyebrow">Hizmet Bölgeleri</span>
            <h2 className="heading-underline mt-4 text-2xl font-extrabold text-steel-900 sm:text-3xl">
              İstanbul Avrupa Yakası Genelinde Hizmet
            </h2>
            <p className="mt-6 text-steel-600">
              Avrupa Yakası'nın <strong className="font-bold text-steel-800">25 ilçesinde</strong>{" "}
              endüstriyel bulaşık makinesi servisi veriyoruz. İlçenize özel sayfa için tıklayın.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-12 flex flex-wrap justify-center gap-3">
            {districts.map((d) => (
              <Link
                key={d.slug}
                href={districtPath(d)}
                className="group relative flex items-center overflow-hidden rounded-full border border-steel-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-premium"
              >
                {/* aşağıdan yukarı kayan dolgu */}
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-brand-600 to-brand-800 transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-steel-700 transition-colors duration-300 group-hover:text-white">
                  <MapPinIcon className="h-4 w-4 text-accent-500 transition duration-300 group-hover:scale-125 group-hover:text-accent-300" />
                  {d.name}
                  <ArrowIcon className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* DETERJAN BANNER */}
      <section className="section bg-steel-50">
        <div className="container-max">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-steel-100 bg-white p-8 shadow-card md:flex-row md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <DropletIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-steel-900">Deterjan & Parlatıcı Satışı</h3>
                <p className="mt-1 max-w-xl text-sm text-steel-600">
                  Endüstriyel bulaşık makineleriniz için profesyonel deterjan, parlatıcı,
                  kireç çözücü ve dozaj sistemleri. Tüm markalara uygun ürünler.
                </p>
              </div>
            </div>
            <Link href="/deterjan-parlatici-servisi" className="btn-primary whitespace-nowrap">
              Ürünleri İncele <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section relative overflow-hidden bg-steel-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-accent-200/40 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-brand-100/50 blur-3xl" />
        </div>

        <div className="container-max relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Sol: başlık + iletişim */}
          <Reveal className="lg:sticky lg:top-28">
            <span className="eyebrow">Sık Sorulan Sorular</span>
            <h2 className="heading-underline mt-4 text-2xl font-extrabold text-steel-900 sm:text-3xl">
              Merak Edilenler
            </h2>
            <p className="mt-6 text-steel-600">
              Aklınıza takılan başka bir soru mu var? Aynı gün yanıt veriyoruz —
              çekinmeden arayın veya WhatsApp'tan yazın.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-6 text-white shadow-premium">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-100">Sorunuz mu var?</div>
              <a href={telLink} className="mt-1 block text-2xl font-black transition hover:text-accent-300">
                {site.phoneDisplay}
              </a>
              <div className="mt-4 flex gap-2">
                <a href={telLink} className="btn-gold flex-1 px-3 py-2.5 text-sm"><PhoneIcon className="h-4 w-4" /> Ara</a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex-1 px-3 py-2.5 text-sm"><WhatsAppIcon className="h-4 w-4" /> Yaz</a>
              </div>
            </div>
          </Reveal>

          {/* Sağ: akordeon */}
          <Reveal delay={120} className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-steel-100 bg-white px-5 shadow-sm transition-all duration-200 hover:border-accent-300 open:border-accent-300 open:shadow-card"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-bold text-steel-900 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xs font-black text-brand-700 transition group-open:bg-accent-500 group-open:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-steel-200 text-brand-600 transition-all duration-300 group-open:rotate-45 group-open:border-accent-400 group-open:bg-accent-50 group-open:text-accent-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-5 pl-10 pr-2 text-sm leading-relaxed text-steel-600">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
