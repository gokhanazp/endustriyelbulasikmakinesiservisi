import Link from "next/link";
import { brandPath } from "@/lib/data";
import { ArrowIcon, WrenchIcon } from "@/components/Icons";
import BrandLogo from "@/components/BrandLogo";

// Marka logosu yerine premium monogram kartı (gerçek logo eklemek için
// /public/logos/{slug}.png koyup <img> ile değiştirebilirsiniz)
export default function BrandCard({ brand }) {
  const initials = brand.name
    .replace("İ", "I")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Link
      href={brandPath(brand)}
      className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-steel-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-premium"
    >
      {/* üst altın aksan çizgisi */}
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-400 to-accent-600 transition-transform duration-300 group-hover:scale-x-100" />
      {/* köşe filigran anahtar */}
      <WrenchIcon className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 text-steel-100 transition group-hover:text-accent-100" />

      {/* Logo (yoksa monogram) */}
      <BrandLogo brand={brand} initials={initials} />

      <span className="relative mt-3 text-sm font-extrabold text-steel-900">{brand.name}</span>
      <span className="relative text-[11px] font-medium text-steel-400">Bulaşık Makinesi Servisi</span>

      <span className="relative mt-2.5 flex items-center gap-1 text-xs font-bold text-accent-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
        Servisi İncele <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
