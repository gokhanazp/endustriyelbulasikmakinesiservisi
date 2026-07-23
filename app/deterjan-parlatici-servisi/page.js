import { site, telLink, waLink } from "@/lib/site";
import CtaBand from "@/components/CtaBand";
import { PhoneIcon, WhatsAppIcon, DropletIcon, CheckIcon, WrenchIcon } from "@/components/Icons";

export const metadata = {
  title: "Endüstriyel Bulaşık Makinesi Deterjanı & Parlatıcı Satışı | Dozaj Sistemi",
  description:
    "Endüstriyel ve sanayi tipi bulaşık makineleri için profesyonel deterjan, parlatıcı, kireç çözücü ve dozaj sistemi satışı. İstanbul Avrupa Yakası geneline hızlı teslimat ve kurulum.",
  alternates: { canonical: "/deterjan-parlatici-servisi" },
};

const products = [
  { title: "Endüstriyel Bulaşık Deterjanı", desc: "Yüksek yağ çözücü, sert su koşullarına uygun sıvı ve toz deterjanlar. Bardak, tabak ve tencere için özel formüller." },
  { title: "Parlatıcı (Durulama)", desc: "Leke ve su izi bırakmayan, hızlı kurumayı sağlayan profesyonel parlatıcı ürünleri." },
  { title: "Kireç & Kalker Çözücü", desc: "Makinenizin ısıtıcı ve borularındaki kireci temizleyen, ömrünü uzatan bakım ürünleri." },
  { title: "Otomatik Dozaj Sistemi", desc: "Deterjan ve parlatıcıyı otomatik ayarlayan dozaj pompaları kurulumu ve bakımı." },
  { title: "Su Yumuşatma Tuzu & Sistemi", desc: "Sert suya karşı su yumuşatma sistemleri ve rejenerasyon tuzu." },
  { title: "Ön Yıkama & Hijyen Ürünleri", desc: "Mutfak hijyeni için ön yıkama, dezenfektan ve temizlik kimyasalları." },
];

const benefits = [
  "Tüm marka ve modellere uygun ürünler",
  "Sert su koşulları için özel çözümler",
  "Doğru dozaj ile maliyet tasarrufu",
  "Dozaj sistemi kurulumu ve ayarı",
  "İstanbul Avrupa Yakası'na hızlı teslimat",
  "Düzenli tedarik ve stok anlaşmaları",
];

export default function DeterjanPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="container-max py-14 sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold">
            <DropletIcon className="h-4 w-4 text-accent-400" /> Deterjan · Parlatıcı · Dozaj Sistemleri
          </span>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Deterjan & Parlatıcı Satışı
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-100">
            Endüstriyel ve sanayi tipi bulaşık makineleriniz için profesyonel{" "}
            <strong className="text-white">deterjan, parlatıcı, kireç çözücü ve dozaj sistemleri</strong>.
            Doğru ürün ve doğru dozaj ile hem parlak bulaşık hem de makine ömrü.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={telLink} className="btn bg-white text-brand-700 hover:bg-brand-50">
              <PhoneIcon className="h-5 w-5" /> {site.phoneDisplay}
            </a>
            <a href={waLink("Deterjan / parlatıcı fiyat ve bilgi almak istiyorum.")} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5" /> Fiyat Al
            </a>
          </div>
        </div>
      </section>

      {/* ÜRÜNLER */}
      <section className="section">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Ürünlerimiz</span>
            <h2 className="mt-3 text-2xl font-extrabold text-steel-900 sm:text-3xl">
              Bulaşık Makinesi Kimyasalları ve Sistemleri
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.title} className="card p-6 transition hover:-translate-y-1 hover:shadow-premium">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <DropletIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-steel-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAJLAR */}
      <section className="section bg-steel-50">
        <div className="container-max grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Neden Biz?</span>
            <h2 className="mt-3 text-2xl font-extrabold text-steel-900 sm:text-3xl">
              Doğru Kimyasal, Uzun Makine Ömrü
            </h2>
            <p className="mt-3 text-steel-600 leading-relaxed">
              Yanlış deterjan ve dozaj, hem bulaşık kalitesini düşürür hem de makinenize
              zarar verir. Uzman ekibimiz makinenize ve su sertliğinize uygun ürünü
              belirler, dozaj sistemini kurar ve düzenli tedarik sağlar.
            </p>
            <a href={waLink("Deterjan ve dozaj sistemi için bilgi almak istiyorum.")} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
              <WhatsAppIcon className="h-5 w-5" /> Hemen Bilgi Al
            </a>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 rounded-xl bg-white p-4 text-sm font-medium text-steel-700 shadow-sm">
                <CheckIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Deterjan & Parlatıcı Siparişi"
        subtitle="Makinenize uygun deterjan, parlatıcı ve dozaj sistemi için hemen arayın veya WhatsApp'tan yazın."
      />
    </>
  );
}
