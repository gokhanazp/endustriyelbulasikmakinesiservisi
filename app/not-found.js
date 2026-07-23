import Link from "next/link";
import { telLink } from "@/lib/site";
import { PhoneIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-max flex flex-col items-center py-20 text-center">
        <span className="text-6xl font-black text-brand-600">404</span>
        <h1 className="mt-4 text-2xl font-extrabold text-steel-900">Sayfa Bulunamadı</h1>
        <p className="mt-2 max-w-md text-steel-600">
          Aradığınız sayfa taşınmış veya mevcut olmayabilir. Ana sayfaya dönebilir ya
          da bizi hemen arayabilirsiniz.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/" className="btn-outline">Ana Sayfa</Link>
          <a href={telLink} className="btn-primary"><PhoneIcon className="h-4 w-4" /> Hemen Ara</a>
        </div>
      </div>
    </section>
  );
}
