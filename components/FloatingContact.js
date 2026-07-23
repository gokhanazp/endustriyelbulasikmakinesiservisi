import { telLink, waLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yaz"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg ring-4 ring-emerald-500/20 transition hover:scale-105 hover:bg-emerald-600"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a
        href={telLink}
        aria-label="Telefonla ara"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg ring-4 ring-brand-600/20 transition hover:scale-105 hover:bg-brand-700 lg:hidden"
      >
        <PhoneIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
