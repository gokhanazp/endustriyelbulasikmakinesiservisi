// =============================================================
//  SİTE AYARLARI — İletişim bilgilerinizi buradan düzenleyin
// =============================================================
export const site = {
  name: "Endüstriyel Bulaşık Makinesi Servisi",
  shortName: "Endüstriyel Servis",
  domain: "endustriyelbulasikmakinesiservisi.com",
  url: "https://endustriyelbulasikmakinesiservisi.com",

  // ↓↓↓ TELEFON / İLETİŞİM — kendi bilgilerinizle değiştirin ↓↓↓
  phoneDisplay: "0536 931 96 67",
  phoneRaw: "+905369319667",
  whatsapp: "905369319667", // ülke kodu + numara, baştaki 0 olmadan
  email: "info@endustriyelbulasikmakinesiservisi.com",
  workingHours: "Haftanın 7 günü 08:00 - 22:00 · Aynı gün servis",
  // ↑↑↑ ------------------------------------------------- ↑↑↑

  // Hizmet bölgesi — fiziksel adres YERİNE kullanılır.
  // Schema'da ServiceArea (hizmet alanı) modeli uygulanır; sahte/yaklaşık
  // bir açık adres beyan edilmez.
  serviceArea: "İstanbul Avrupa Yakası (Tüm İlçeler)",

  // ↓↓↓ GOOGLE İŞLETME PROFİLİ AÇILDIKTAN SONRA DOLDURUN ↓↓↓
  // Gerçek, doğrulanmış bir açık adresiniz olduğunda burayı doldurun.
  // streetAddress dolu olduğu anda schema otomatik olarak LocalBusiness'a
  // (gerçek adresli) yükseltilir; boş kaldığı sürece adres iddiası yapılmaz.
  postalAddress: {
    streetAddress: "", // ör: "Yeşilköy Mah. Atatürk Cad. No:12 D:3"
    addressLocality: "", // ör: "Bakırköy"
    postalCode: "", // ör: "34149"
  },
  // Google İşletme Profili koordinatları (GBP açıldıktan sonra)
  geo: {
    latitude: "", // ör: "40.9862"
    longitude: "", // ör: "28.8231"
  },
  // Google İşletme Profili / harita bağlantısı
  hasMap: "", // ör: "https://maps.app.goo.gl/..."
  // Sosyal ve doğrulanmış profiller — açıldıkça ekleyin (schema sameAs)
  social: [
    // "https://www.google.com/maps/place/...",
    // "https://www.instagram.com/...",
    // "https://www.facebook.com/...",
    // "https://www.youtube.com/@...",
  ],
  // ↑↑↑ ------------------------------------------------- ↑↑↑

  region: "İstanbul Avrupa Yakası",
  foundingYear: "2026",
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

// Geriye dönük uyumluluk: eski kod `site.address` kullanıyordu.
site.address = site.serviceArea;

// Gerçek adres girildi mi?
export const hasVerifiedAddress = () =>
  Boolean(site.postalAddress.streetAddress && site.postalAddress.addressLocality);

export const hasGeo = () => Boolean(site.geo.latitude && site.geo.longitude);

export const waLink = (text) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    text || "Merhaba, endüstriyel bulaşık makinesi servisi hakkında bilgi almak istiyorum."
  )}`;

export const telLink = `tel:${site.phoneRaw}`;
