import { WrenchIcon, CheckIcon, MapPinIcon, ClockIcon } from "@/components/Icons";

/* Semptom → Olası neden → Çözüm → Süre tablosu */
export function FaultTable({ title, rows, note }) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-steel-900">{title}</h2>
      {note ? <p className="mt-3 text-steel-600">{note}</p> : null}

      {/* Masaüstü tablo */}
      <div className="mt-6 hidden overflow-hidden rounded-2xl border border-steel-100 md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-steel-50 text-xs font-bold uppercase tracking-wider text-steel-500">
            <tr>
              <th className="px-4 py-3">Belirti</th>
              <th className="px-4 py-3">Olası Neden</th>
              <th className="px-4 py-3">Yapılan İşlem</th>
              <th className="px-4 py-3 whitespace-nowrap">Tipik Süre</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-steel-100">
            {rows.map((r) => (
              <tr key={r.symptom} className="align-top transition hover:bg-brand-50/40">
                <td className="px-4 py-3 font-semibold text-steel-900">{r.symptom}</td>
                <td className="px-4 py-3 text-steel-600">{r.causes}</td>
                <td className="px-4 py-3 text-steel-600">{r.fix}</td>
                <td className="px-4 py-3 whitespace-nowrap font-semibold text-brand-700">{r.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobil kart görünümü */}
      <div className="mt-6 space-y-3 md:hidden">
        {rows.map((r) => (
          <div key={r.symptom} className="rounded-2xl border border-steel-100 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-2">
              <WrenchIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
              <span className="font-bold text-steel-900">{r.symptom}</span>
            </div>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-steel-400">Olası neden</dt>
                <dd className="text-steel-600">{r.causes}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-steel-400">Yapılan işlem</dt>
                <dd className="text-steel-600">{r.fix}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-steel-400">Tipik süre</dt>
                <dd className="font-semibold text-brand-700">{r.time}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Hata kodları — yalnızca doğrulanmış kod girilmişse görünür */
export function ErrorCodeTable({ brandName, codes }) {
  if (!codes || codes.length === 0) return null;
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-extrabold text-steel-900">
        {brandName} Bulaşık Makinesi Hata Kodları
      </h2>
      <div className="mt-6 overflow-hidden rounded-2xl border border-steel-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-steel-50 text-xs font-bold uppercase tracking-wider text-steel-500">
            <tr>
              <th className="px-4 py-3">Kod</th>
              <th className="px-4 py-3">Anlamı</th>
              <th className="px-4 py-3">Yapılması Gereken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-steel-100">
            {codes.map((c) => (
              <tr key={c.code} className="align-top">
                <td className="px-4 py-3 font-black text-brand-700">{c.code}</td>
                <td className="px-4 py-3 font-semibold text-steel-900">{c.meaning}</td>
                <td className="px-4 py-3 text-steel-600">{c.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Yedek parça listesi */
export function SparePartsList({ title, parts }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-extrabold text-steel-900">{title}</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {parts.map((p) => (
          <div key={p.name} className="rounded-xl border border-steel-100 bg-white px-4 py-3 shadow-sm">
            <div className="flex items-start gap-2">
              <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" />
              <div>
                <div className="text-sm font-bold text-steel-900">{p.name}</div>
                <div className="text-xs text-steel-500">{p.note}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Bakım periyodu tablosu */
export function MaintenanceTable({ title, plan }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-extrabold text-steel-900">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {plan.map((row) => (
          <div key={row.period} className="rounded-2xl border border-steel-100 bg-steel-50 p-5">
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 text-brand-600" />
              <h3 className="text-sm font-black uppercase tracking-wider text-steel-800">{row.period}</h3>
            </div>
            <ul className="mt-3 space-y-2">
              {row.items.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-steel-600">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-500" /> {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* SSS — FAQPage schema ile birlikte kullanılır */
export function FaqList({ title, faq }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-extrabold text-steel-900">{title}</h2>
      <div className="mt-6 space-y-3">
        {faq.map((f, i) => (
          <details key={f.q} className="group rounded-2xl border border-steel-100 bg-white p-5 shadow-sm" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-start gap-3 font-bold text-steel-900">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-xs font-black text-brand-700 transition group-open:bg-accent-500 group-open:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              {f.q}
            </summary>
            <p className="mt-3 pl-10 text-sm leading-relaxed text-steel-600">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

/* Mahalle listesi */
export function NeighborhoodList({ districtName, list, suffix }) {
  if (!list || list.length === 0) return null;
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-extrabold text-steel-900">
        {districtName}'de Servis Verdiğimiz Mahalle ve Semtler
      </h2>
      <p className="mt-3 text-steel-600">
        {districtName} içindeki aşağıdaki mahalle ve semtlere{" "}
        {suffix || "endüstriyel bulaşık makinesi servisi"} veriyoruz. Listede
        göremediğiniz bir bölge varsa arayın; {districtName} sınırları içindeki
        tüm adreslere hizmet veriyoruz.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {list.map((n) => (
          <span
            key={n}
            className="inline-flex items-center gap-1.5 rounded-full border border-steel-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-steel-700"
          >
            <MapPinIcon className="h-3.5 w-3.5 text-accent-500" /> {n}
          </span>
        ))}
      </div>
    </div>
  );
}

/* Model listesi (marka notlarıyla) */
export function ModelList({ brandName, models, noteFor }) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-steel-900">
        Servisini Verdiğimiz {brandName} Bulaşık Makinesi Modelleri
      </h2>
      <p className="mt-3 text-steel-600">
        Aşağıdaki tüm {brandName} modellerine endüstriyel bulaşık makinesi tamircisi
        olarak servis, bakım ve yedek parça hizmeti veriyoruz. Bazı modellerde saha
        deneyimimizden çıkan kritik bakım notunu da ekledik.
      </p>
      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {models.map((m) => {
          const note = noteFor ? noteFor(m) : null;
          return (
            <li
              key={m}
              className={`group flex items-start gap-3 rounded-xl border border-steel-100 bg-white px-3.5 py-3 text-sm text-steel-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-card ${
                note ? "sm:col-span-2" : ""
              }`}
            >
              <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition group-hover:bg-accent-500 group-hover:text-white">
                <CheckIcon className="h-4 w-4" />
              </span>
              <span>
                <strong className="font-bold text-steel-900">{brandName}</strong> {m}{" "}
                <span className="text-steel-400">Servisi</span>
                {note ? <span className="mt-1 block text-xs leading-relaxed text-steel-500">{note}</span> : null}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* FAQPage schema üretici */
export const faqSchema = (faq) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
