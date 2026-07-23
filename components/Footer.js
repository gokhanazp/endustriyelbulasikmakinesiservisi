import Link from "next/link";
import { site, telLink, waLink } from "@/lib/site";
import { brands, districts, brandPath, districtPath } from "@/lib/data";
import { PhoneIcon, WhatsAppIcon, MailIcon, MapPinIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="mt-8 bg-steel-900 text-steel-300">
      <div className="container-max grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10">
              <img src="/images/logo-icon.png" alt="Endüstriyel Bulaşık Makinesi Servisi logosu" className="h-full w-full object-cover" width={44} height={44} />
            </span>
            <span className="text-sm font-bold leading-tight text-white">
              Endüstriyel Bulaşık<br />Makinesi Servisi
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {site.region} genelinde tüm markalara aynı gün endüstriyel ve sanayi
            tipi bulaşık makinesi tamiri, bakımı ve yedek parça hizmeti.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href={telLink} className="flex items-center gap-2 hover:text-white">
              <PhoneIcon className="h-4 w-4 text-brand-400" /> {site.phoneDisplay}
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <WhatsAppIcon className="h-4 w-4 text-emerald-400" /> WhatsApp Destek
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <MailIcon className="h-4 w-4 text-brand-400" /> {site.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-brand-400" /> {site.address}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Markalar</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link href={brandPath(b)} className="hover:text-white">{b.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Hizmet Bölgeleri</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {districts.slice(0, 18).map((d) => (
              <li key={d.slug}>
                <Link href={districtPath(d)} className="hover:text-white">{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Hizmetler</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li><Link href="/endustriyel-bulasik-makinesi-tamircisi" className="hover:text-white">Endüstriyel Bulaşık Makinesi Tamircisi</Link></li>
            <li><Link href="/sanayi-tipi-bulasik-makinesi-servisi" className="hover:text-white">Sanayi Tipi Bulaşık Makinesi Servisi</Link></li>
            <li><Link href="/sanayi-tipi-bulasik-makinesi-tamircisi" className="hover:text-white">Sanayi Tipi Bulaşık Makinesi Tamircisi</Link></li>
            <li><Link href="/deterjan-parlatici-servisi" className="hover:text-white">Deterjan & Parlatıcı Satışı</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog & Servis Rehberi</Link></li>
            <li><Link href="/iletisim" className="hover:text-white">İletişim</Link></li>
          </ul>
          <a href={telLink} className="btn-primary mt-6 w-full">
            <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-3 py-5 text-xs text-steel-400 sm:flex-row">
          <span>© {new Date().getFullYear()} {site.domain} · Tüm hakları saklıdır.</span>
          <span className="hidden md:block">Endüstriyel bulaşık makinesi servisi · Sanayi tipi bulaşık makinesi tamircisi</span>
          <span className="flex items-center gap-1.5">
            Web Tasarım:
            <a
              href="https://gokhan-yildirim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent-400 transition hover:text-accent-300"
            >
              gokhan-yildirim.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
