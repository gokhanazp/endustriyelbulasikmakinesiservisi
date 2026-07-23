import { site, telLink, waLink } from "@/lib/site";
import { districts } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/Icons";

export const metadata = {
  title: "İletişim | Endüstriyel Bulaşık Makinesi Servisi · İstanbul Avrupa Yakası",
  description:
    "Endüstriyel bulaşık makinesi servisi iletişim. Aynı gün sanayi tipi bulaşık makinesi tamiri için telefon ve WhatsApp ile ulaşın. İstanbul Avrupa Yakası geneli.",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="container-max py-14 sm:py-16">
          <h1 className="text-3xl font-extrabold sm:text-4xl">İletişim</h1>
          <p className="mt-4 max-w-2xl text-brand-100">
            Endüstriyel bulaşık makinenizde arıza mı var? Aynı gün servis için bize
            ulaşın. İstanbul Avrupa Yakası'nın tüm ilçelerinde hizmetinizdeyiz.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-max grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a href={telLink} className="card flex items-center gap-4 p-6 transition hover:shadow-premium">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white"><PhoneIcon className="h-7 w-7" /></span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-steel-500">Telefon</span>
                <span className="block text-xl font-extrabold text-steel-900">{site.phoneDisplay}</span>
              </span>
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 p-6 transition hover:shadow-premium">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white"><WhatsAppIcon className="h-7 w-7" /></span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-steel-500">WhatsApp</span>
                <span className="block text-xl font-extrabold text-steel-900">Hemen Yaz</span>
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="card flex items-center gap-4 p-6 transition hover:shadow-premium">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-steel-700 text-white"><MailIcon className="h-7 w-7" /></span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-steel-500">E-posta</span>
                <span className="block text-lg font-bold text-steel-900">{site.email}</span>
              </span>
            </a>
          </div>

          <div className="card p-8">
            <h2 className="text-xl font-extrabold text-steel-900">Servis Bilgileri</h2>
            <ul className="mt-6 space-y-4 text-sm text-steel-700">
              <li className="flex items-start gap-3"><MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" /> <span><strong>Hizmet Bölgesi:</strong> {site.address}</span></li>
              <li className="flex items-start gap-3"><ClockIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" /> <span><strong>Çalışma Saatleri:</strong> {site.workingHours}</span></li>
            </ul>
            <div className="mt-6 rounded-xl bg-brand-50 p-5">
              <h3 className="text-sm font-bold text-brand-900">Hizmet Verdiğimiz İlçeler</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-600">
                {districts.map((d) => d.name).join(", ")}.
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <a href={telLink} className="btn-primary flex-1"><PhoneIcon className="h-4 w-4" /> Ara</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex-1"><WhatsAppIcon className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
