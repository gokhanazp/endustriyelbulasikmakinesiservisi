import { site, telLink, waLink } from "@/lib/site";
import {
  PhoneIcon, WhatsAppIcon, ClockIcon, ShieldIcon, CheckIcon, DishwasherIcon,
} from "@/components/Icons";

export default function CtaBand({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden text-white">
      {/* zemin + hareketli katmanlar */}
      <div className="animated-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-hero-mesh opacity-70" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-0 h-64 w-64 animate-blob rounded-full bg-brand-400/25 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 animate-blob rounded-full bg-accent-500/20 blur-3xl [animation-delay:-6s]" />
      </div>
      <div className="absolute inset-0 animate-gridpan bg-hero-grid [background-size:40px_40px] opacity-25" />

      <div className="container-max relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
        {/* Sol: metin + butonlar */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-300 ring-1 ring-accent-400/30 backdrop-blur">
            <ClockIcon className="h-4 w-4" /> Aynı Gün Servis · {site.region}
          </span>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            {title || "Bulaşık makineniz mi arızalandı?"}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-brand-100 sm:text-base">
            {subtitle ||
              "Uzman ekibimiz aynı gün adresinize gelsin. Ücretsiz keşif ve arıza tespiti için hemen arayın."}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={telLink} className="btn-gold btn-shine">
              <PhoneIcon className="h-5 w-5" /> {site.phoneDisplay}
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp'tan Yazın
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-100">
            {["7/24 Destek", "Garantili İşçilik", "Tüm Markalara Servis"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-accent-400" /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Sağ: telefon / iletişim kartı */}
        <div className="lg:justify-self-end">
          <div className="glass w-full max-w-sm rounded-3xl p-6 shadow-glow sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <DishwasherIcon className="h-6 w-6 text-accent-300" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-100">Hemen Arayın</div>
                <a href={telLink} className="block text-xl font-black text-white transition hover:text-accent-300">
                  {site.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
              <div className="flex items-center gap-2.5 text-brand-100">
                <ClockIcon className="h-4 w-4 flex-shrink-0 text-accent-300" /> {site.workingHours}
              </div>
              <div className="flex items-center gap-2.5 text-brand-100">
                <ShieldIcon className="h-4 w-4 flex-shrink-0 text-accent-300" /> Garantili işçilik & orijinal yedek parça
              </div>
            </div>

            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6 w-full">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp Destek Hattı
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
