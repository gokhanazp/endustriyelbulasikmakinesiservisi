import Link from "next/link";
import { site } from "@/lib/site";
import { posts, postPath, formatDate } from "@/lib/blog";
import CtaBand from "@/components/CtaBand";
import { ArrowIcon, ClockIcon } from "@/components/Icons";

export const metadata = {
  title: "Blog | Endüstriyel Bulaşık Makinesi Servisi Rehberi",
  description:
    "Endüstriyel ve sanayi tipi bulaşık makinesi arıza, bakım, deterjan ve model seçimi rehberleri. Uzman servis ekibimizden pratik bilgiler.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden text-white">
        <div className="animated-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-hero-mesh opacity-70" />
        <div className="container-max relative py-16 sm:py-20">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold">
            Bilgi & Rehber
          </span>
          <h1 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            <span className="gradient-text">Blog</span> & Servis Rehberi
          </h1>
          <p className="mt-4 max-w-2xl text-brand-100">
            Endüstriyel bulaşık makinesi arızaları, bakım ipuçları, deterjan seçimi ve
            model rehberleri — uzman servis ekibimizden.
          </p>
        </div>
        <div className="relative -mb-px">
          <svg viewBox="0 0 1440 60" className="block w-full" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#ffffff" d="M0,30 C240,60 480,5 720,22 C960,40 1200,66 1440,34 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* YAZILAR */}
      <section className="section">
        <div className="container-max grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={postPath(p)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-steel-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-premium"
            >
              {/* kapak */}
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900">
                <div className="absolute inset-0 bg-hero-grid [background-size:22px_22px] opacity-30" />
                <span className="relative rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/20">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-steel-400">
                  <span>{formatDate(p.date)}</span>
                  <span className="flex items-center gap-1"><ClockIcon className="h-3.5 w-3.5" /> {p.readMinutes} dk okuma</span>
                </div>
                <h2 className="mt-2 text-lg font-extrabold leading-snug text-steel-900 transition group-hover:text-brand-700">
                  {p.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-600">{p.excerpt}</p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-bold text-accent-600">
                  Devamını Oku <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
