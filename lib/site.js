// =============================================================
//  SİTE AYARLARI — İletişim bilgilerinizi buradan düzenleyin
// =============================================================
export const site = {
  name: "Endüstriyel Bulaşık Makinesi Servisi",
  shortName: "Endüstriyel Servis",
  domain: "endustriyelbulasikmakinesiservisi.com",
  url: "https://endustriyelbulasikmakinesiservisi.com",

  // ↓↓↓ TELEFON / İLETİŞİM — kendi bilgilerinizle değiştirin ↓↓↓
  phoneDisplay: "0501 300 19 81",
  phoneRaw: "+905013001981",
  whatsapp: "905013001981", // ülke kodu + numara, baştaki 0 olmadan
  email: "info@endustriyelbulasikmakinesiservisi.com",
  address: "İstanbul Avrupa Yakası (Tüm İlçeler)",
  workingHours: "Haftanın 7 günü 08:00 - 22:00 · Aynı gün servis",
  // ↑↑↑ ------------------------------------------------- ↑↑↑

  region: "İstanbul Avrupa Yakası",
  keywords: [
    "Endüstriyel bulaşık makinesi servisi",
    "Endüstriyel bulaşık makinesi tamircisi",
    "Sanayi tipi bulaşık makinesi servisi",
    "Sanayi tipi bulaşık makinesi tamircisi",
    "endüstriyel bulaşık makinesi tamiri",
    "sanayi tipi bulaşık makinesi tamiri",
    "İstanbul endüstriyel bulaşık makinesi servisi",
  ],
};

export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    text || "Merhaba, endüstriyel bulaşık makinesi servisi hakkında bilgi almak istiyorum."
  )}`;

export const telLink = `tel:${site.phoneRaw}`;
