"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site, telLink, waLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon, ClockIcon, MapPinIcon, MailIcon } from "@/components/Icons";

const nav = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Markalar", href: "/#markalar" },
  { label: "Hizmet Bölgeleri", href: "/#bolgeler" },
  { label: "Deterjan & Parlatıcı", href: "/deterjan-parlatici-servisi" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Üst bilgi şeridi */}
      <div className="hidden bg-steel-900 text-steel-300 lg:block">
        <div className="container-max flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <ClockIcon className="h-3.5 w-3.5 text-accent-400" /> {site.workingHours}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPinIcon className="h-3.5 w-3.5 text-accent-400" /> {site.region}
            </span>
          </span>
          <span className="flex items-center gap-5">
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 transition hover:text-white">
              <MailIcon className="h-3.5 w-3.5" /> {site.email}
            </a>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Şu an hizmetteyiz
            </span>
          </span>
        </div>
      </div>

      {/* Ana bar */}
      <div className={`border-b bg-white transition-shadow duration-300 ${scrolled ? "border-steel-100 shadow-[0_6px_24px_-12px_rgba(15,23,42,0.25)]" : "border-steel-100"}`}>
        <div className={`container-max flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-md ring-1 ring-steel-100 transition-transform duration-300 group-hover:scale-105">
              <img src="/images/logo-icon.png" alt="Endüstriyel Bulaşık Makinesi Servisi logosu" className="h-full w-full object-cover" width={48} height={48} />
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-extrabold tracking-tight text-steel-900 sm:text-base">
                Endüstriyel Bulaşık Makinesi
              </span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-600">
                Servisi
              </span>
            </span>
          </Link>

          {/* Menü */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-steel-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden flex-shrink-0 items-center gap-2 lg:flex">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-4 py-2.5 text-sm">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
            <a href={telLink} className="btn-gold px-4 py-2.5 text-sm">
              <PhoneIcon className="h-4 w-4" /> {site.phoneDisplay}
            </a>
          </div>

          {/* Mobil buton */}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-steel-700 transition hover:bg-steel-100 lg:hidden"
            aria-label="Menü"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      {open && (
        <div className="animate-fade-in border-b border-steel-100 bg-white lg:hidden">
          <div className="container-max flex flex-col gap-1 py-3">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-steel-700 transition hover:bg-brand-50 hover:text-brand-700">
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex-1">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a href={telLink} className="btn-gold flex-1">
                <PhoneIcon className="h-4 w-4" /> Ara
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
