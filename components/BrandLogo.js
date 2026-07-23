"use client";

import { useState } from "react";
import { hasLogo } from "@/lib/data";

// Logo /public/logos/{slug}.png yolundan yüklenir.
// Logo tanımlı değilse (veya yüklenemezse) marka monogramı (baş harfler) gösterilir.
export default function BrandLogo({ brand, initials }) {
  const [error, setError] = useState(false);
  const showMonogram = !hasLogo(brand.slug) || error;

  if (showMonogram) {
    return (
      <span className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 text-xl font-black text-white shadow-md ring-1 ring-white/10 transition duration-300 group-hover:scale-105">
        <span className="absolute inset-0 rounded-2xl bg-accent-400 opacity-0 blur-md transition group-hover:opacity-40" />
        <span className="relative">{initials}</span>
      </span>
    );
  }

  return (
    <span className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-steel-100 bg-white p-1.5 shadow-sm transition duration-300 group-hover:scale-105 group-hover:shadow-md">
      <img
        src={`/logos/${brand.slug}.png`}
        alt={`${brand.name} logo`}
        className="h-full w-full object-contain"
        loading="lazy"
        onError={() => setError(true)}
      />
    </span>
  );
}
