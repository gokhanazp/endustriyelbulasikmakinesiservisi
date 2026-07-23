// =============================================================
//  MARKALAR ve MODELLER
// =============================================================
// Her marka için sayfa adresi: /{slug}-bulasik-makinesi-servisi
// Modeller marka sayfasında liste halinde gösterilir.

export const brands = [
  {
    name: "Empero",
    slug: "empero",
    models: [
      "EMP.500", "EMP.500-380", "EMP.500-F", "EMP.500-380-F",
      "EMP.500-SD", "EMP.500-380-SD", "EMP.500-SDF", "EMP.500-380-SDF",
      "EMP.1000", "EMP.1000-F", "EMP.1000-SD", "EMP.1000-SDF",
      "EMP.2000", "EMP.2000-F", "EMP.2000-SD", "EMP.2000-SDF",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
    ],
  },
  {
    name: "İnoksan",
    slug: "inoksan",
    models: [
      "BYM042", "BYM042S", "BYM052", "BYM052S", "BYM052T", "BYM052ST", "BYM102S",
      "UC-S", "UC-M", "UC-L", "PT 500",
      "FAST 130 S", "FAST 140 S", "FAST 160-2",
      "RIVER 342", "RIVER 362", "RIVER 382",
      "RIVER 297 Kazan Yıkama Makinesi", "RIVER 298 Kazan Yıkama Makinesi",
      "NIAGARA 293", "NIAGARA 2150 Konveyörlü", "NIAGARA 2152 Konveyörlü", "NIAGARA 2154 Konveyörlü",
      "Kurutma Tüneli",
    ],
  },
  {
    name: "Öztiryakiler",
    slug: "oztiryakiler",
    models: [
      "OBY 35M", "OBY 40M", "OBY 500", "OBY 500 D", "OBY 500 Touch",
      "OBM 1080", "OBM 1080D", "OBM 1080T",
      "Giyotin Tip Bulaşık Makinesi", "1000 Tabak Bulaşık Makinesi",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
    ],
  },
  {
    name: "Kayalar",
    slug: "kayalar",
    models: [
      "KB-600", "KB-500", "KB-1000",
      "KB-2000 Konveyörlü", "KB-3000 Konveyörlü",
      "KBYM6000 Flight Tip", "500 Tabak Bulaşık Makinesi",
      "1000 Tabak Giyotin Tip", "2000-T Kurutma Üniteli",
      "3000-T Kurutma Üniteli", "3000-TKD Kurutma Üniteli",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
    ],
  },
  {
    name: "Adona",
    slug: "adona",
    models: [
      "35x35 Bardak Yıkama Makinesi", "40x40 Bardak Yıkama Makinesi",
      "500", "500 Dijital", "500 Tabak Bulaşık Makinesi",
      "Set Altı Bulaşık Makinesi", "Tezgâh Altı Bulaşık Makinesi",
      "1000 Giyotin Tip", "1000 Dijital Giyotin Tip",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Portabianco",
    slug: "portabianco",
    models: [
      "PBW 400", "PBW 500", "PBW 1000",
      "VBY 1000 Konveyörlü", "VBY 2000L Konveyörlü",
      "Bardak Yıkama Makinesi", "Set Altı Bulaşık Makinesi",
      "Giyotin Tip Bulaşık Makinesi", "Konveyörlü Bulaşık Makinesi",
      "Tünel Tip Bulaşık Makinesi",
    ],
  },
  {
    name: "Ndustrio",
    slug: "ndustrio",
    models: [
      "35x35", "40x40", "500", "500 Dijital",
      "1000 Giyotin Tip", "1000 Dijital Giyotin Tip",
      "2000 Konveyörlü", "3000 Tünel Tip",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Crystal",
    slug: "crystal",
    models: [
      "CRW 400 T", "CRW 400 TP", "CRW 400 TPD",
      "CRW 500 T", "CRW 500 TP", "CRW 500 TPD",
      "CRW 1000", "CRW 1000 T", "CRW 1000 P", "CRW 1000 TP", "CRW 1000 PD", "CRW 1000 TPD",
      "CRW 2000 Konveyörlü", "CRWK 2000 Konveyörlü",
      "CRWK 3000 Tünel Tip", "CRWK 4000 Tünel Tip", "CRWK 5000 Endüstriyel",
    ],
  },
  {
    name: "Vital",
    slug: "vital",
    models: [
      "35x35 Bardak Yıkama Makinesi", "40x40 Bardak Yıkama Makinesi",
      "500", "500 Dijital", "500 Tabak Bulaşık Makinesi",
      "Set Altı Bulaşık Makinesi", "Tezgâh Altı Bulaşık Makinesi",
      "1000 Giyotin Tip", "1000 Dijital Giyotin Tip",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Fagor",
    slug: "fagor",
    models: [
      "CO-402", "CO-502", "FI-30", "FI-48", "FI-64",
      "AD-48", "AD-64", "CCO-120", "CCO-180",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
      "Giyotin Tip Bulaşık Makinesi", "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Arisco",
    slug: "arisco",
    models: [
      "35x35 Bardak Yıkama Makinesi", "40x40 Bardak Yıkama Makinesi",
      "500", "500 Dijital", "500 Tabak Bulaşık Makinesi",
      "Set Altı Bulaşık Makinesi", "Tezgâh Altı Bulaşık Makinesi",
      "1000 Giyotin Tip", "1000 Dijital Giyotin Tip",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Neo",
    slug: "neo",
    models: [
      "35x35 Bardak Yıkama Makinesi", "40x40 Bardak Yıkama Makinesi",
      "500", "500 Dijital", "500 Tabak Bulaşık Makinesi",
      "Set Altı Bulaşık Makinesi", "Tezgâh Altı Bulaşık Makinesi",
      "1000 Giyotin Tip", "1000 Dijital Giyotin Tip",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Hobart",
    slug: "hobart",
    models: [
      "FX", "FXB", "FXS", "FXSB",
      "Ecomax 402", "Ecomax 502", "Ecomax 504", "Ecomax 600",
      "PREMAX CP", "PREMAX FTP", "PREMAX AUP",
      "AMX", "AM900", "Profi", "Profi FX",
      "Giyotin Tip Bulaşık Makinesi", "Konveyörlü Bulaşık Makinesi",
      "Tünel Tip Bulaşık Makinesi", "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Electrolux",
    slug: "electrolux",
    models: [
      "WT30", "WT30H", "WT40", "WT65",
      "EHT8I", "EHT9I", "EHTA", "EHTC", "Green & Clean",
      "EUCA Serisi", "EUCA060", "EUCA080", "Rack Type",
      "Giyotin Tip Bulaşık Makinesi", "Konveyörlü Bulaşık Makinesi",
      "Tünel Tip Bulaşık Makinesi", "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Osimo",
    slug: "osimo",
    models: [
      "35x35 Bardak Yıkama Makinesi", "40x40 Bardak Yıkama Makinesi",
      "500", "500 Dijital", "500 Tabak Bulaşık Makinesi",
      "Set Altı Bulaşık Makinesi", "Tezgâh Altı Bulaşık Makinesi",
      "1000 Giyotin Tip", "1000 Dijital Giyotin Tip",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Smeg",
    slug: "smeg",
    models: [
      "UD511D", "UD511DS", "UD506D", "UD506DS",
      "HTY615DS", "HTY615", "HTY620D", "HTY620",
      "CWC600", "CWC600D", "CWC800", "CWC800D",
      "HTY Serisi Giyotin Tip", "Konveyörlü Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Winterhalter",
    slug: "winterhalter",
    models: [
      "UC-S", "UC-M", "UC-L",
      "PT-M", "PT-L", "PT-XL", "PT Workhorse",
      "MTF Serisi", "MTR Serisi", "CTR Serisi",
      "GS 215", "GS 315", "GS 402", "GS 502", "GS 640",
      "Giyotin Tip Bulaşık Makinesi", "Konveyörlü Bulaşık Makinesi",
      "Tünel Tip Bulaşık Makinesi", "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "By Kitchen",
    slug: "by-kitchen",
    models: [
      "35x35 Bardak Yıkama Makinesi", "40x40 Bardak Yıkama Makinesi",
      "500", "500 Dijital", "500 Tabak Bulaşık Makinesi",
      "Set Altı Bulaşık Makinesi", "Tezgâh Altı Bulaşık Makinesi",
      "1000 Giyotin Tip", "1000 Dijital Giyotin Tip",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Meiko",
    slug: "meiko",
    models: [
      "UPster U 400", "UPster U 500", "UPster U 500XD", "UPster U 600", "UPster H 500",
      "M-iClean U", "M-iClean H", "M-iClean HM",
      "DV 80.2", "DV 120.2", "DV 125.2", "DV 200.2", "DV 270.2",
      "FV 40.2", "FV 60.2",
      "K 2000", "K 4000 Konveyörlü", "K 6000 Tünel Tip",
      "Giyotin Tip Bulaşık Makinesi", "Konveyörlü Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Miele",
    slug: "miele",
    models: [
      "PG 8055", "PG 8056", "PG 8057", "PG 8058", "PG 8060", "PG 8061",
      "PG 8063", "PG 8068", "PG 8096", "PG 8164", "PG 8165", "PG 8166",
      "PG 8172", "PG 8173", "PG 8176",
      "Professional Bulaşık Makinesi", "Giyotin Tip Bulaşık Makinesi",
      "Konveyörlü Bulaşık Makinesi", "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "İnoxclass",
    slug: "inoxclass",
    models: [
      "35x35 Bardak Yıkama Makinesi", "40x40 Bardak Yıkama Makinesi",
      "500", "500 Dijital", "500 Tabak Bulaşık Makinesi",
      "Set Altı Bulaşık Makinesi", "Tezgâh Altı Bulaşık Makinesi",
      "1000 Giyotin Tip", "1000 Dijital Giyotin Tip",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Zanussi",
    slug: "zanussi",
    models: [
      "EHT8", "EHT8I", "EHT9", "EHT9I",
      "WSB3", "WSB4", "WSB5", "LS6", "LS9", "LS10",
      "Hood Type Giyotin Tip", "Rack Type",
      "Konveyörlü Bulaşık Makinesi", "Tünel Tip Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Classeq",
    slug: "classeq",
    models: [
      "C400", "C400S", "C500", "C500S",
      "D400", "D400DUO", "D500", "D500DUO",
      "G400", "G500", "Hydro Serisi", "DUO Serisi",
      "Giyotin Tip Bulaşık Makinesi", "Konveyörlü Bulaşık Makinesi",
      "Endüstriyel Bulaşık Makinesi",
    ],
  },
  {
    name: "Maksan",
    slug: "maksan",
    models: [
      "GW-535", "GW-535-DT", "GW-640", "GW-640-DT",
      "DW-500", "DW-500-DT", "DW-1000", "DW-1000-DT",
      "DW-2000 Konveyörlü", "DW-3000 Tünel Tip", "DW-4500 Endüstriyel",
    ],
  },
];

// =============================================================
//  İSTANBUL AVRUPA YAKASI İLÇELERİ
// =============================================================
// Her ilçe için sayfa adresi: /{slug}-endustriyel-bulasik-makinesi-servisi

export const districts = [
  { name: "Şişli", slug: "sisli" },
  { name: "Beşiktaş", slug: "besiktas" },
  { name: "Beyoğlu", slug: "beyoglu" },
  { name: "Fatih", slug: "fatih" },
  { name: "Bakırköy", slug: "bakirkoy" },
  { name: "Bahçelievler", slug: "bahcelievler" },
  { name: "Bağcılar", slug: "bagcilar" },
  { name: "Başakşehir", slug: "basaksehir" },
  { name: "Esenler", slug: "esenler" },
  { name: "Esenyurt", slug: "esenyurt" },
  { name: "Avcılar", slug: "avcilar" },
  { name: "Küçükçekmece", slug: "kucukcekmece" },
  { name: "Büyükçekmece", slug: "buyukcekmece" },
  { name: "Beylikdüzü", slug: "beylikduzu" },
  { name: "Gaziosmanpaşa", slug: "gaziosmanpasa" },
  { name: "Sarıyer", slug: "sariyer" },
  { name: "Eyüpsultan", slug: "eyupsultan" },
  { name: "Kağıthane", slug: "kagithane" },
  { name: "Zeytinburnu", slug: "zeytinburnu" },
  { name: "Güngören", slug: "gungoren" },
  { name: "Sultangazi", slug: "sultangazi" },
  { name: "Bayrampaşa", slug: "bayrampasa" },
  { name: "Arnavutköy", slug: "arnavutkoy" },
  { name: "Çatalca", slug: "catalca" },
  { name: "Silivri", slug: "silivri" },
];

// Logosu /public/logos/{slug}.png olarak yüklenmiş markalar.
// Yeni logo ekledikçe slug'ı bu listeye ekleyin (dosya adıyla aynı).
export const brandsWithLogo = new Set([
  "empero", "inoksan", "oztiryakiler", "kayalar", "adona", "portabianco",
  "ndustrio", "crystal", "vital", "fagor", "arisco", "hobart", "electrolux",
  "osimo", "smeg", "winterhalter", "by-kitchen", "inoxclass", "zanussi",
  "classeq", "maksan",
]);
export const hasLogo = (slug) => brandsWithLogo.has(slug);

// URL yardımcıları
export const brandPath = (b) => `/${b.slug}-bulasik-makinesi-servisi`;
export const districtPath = (d) => `/${d.slug}-endustriyel-bulasik-makinesi-servisi`;

export const getBrandBySlugPart = (slugPart) =>
  brands.find((b) => b.slug === slugPart) || null;
export const getDistrictBySlugPart = (slugPart) =>
  districts.find((d) => d.slug === slugPart) || null;

// Slug'tan sayfa tipini çöz
export function resolveSlug(slug) {
  const brandSuffix = "-bulasik-makinesi-servisi";
  const districtSuffix = "-endustriyel-bulasik-makinesi-servisi";
  if (slug.endsWith(districtSuffix)) {
    const part = slug.slice(0, -districtSuffix.length);
    const district = getDistrictBySlugPart(part);
    if (district) return { type: "district", district };
  }
  if (slug.endsWith(brandSuffix)) {
    const part = slug.slice(0, -brandSuffix.length);
    const brand = getBrandBySlugPart(part);
    if (brand) return { type: "brand", brand };
  }
  return null;
}

// Statik üretim için tüm slug'lar
export function allDynamicSlugs() {
  return [
    ...brands.map((b) => `${b.slug}-bulasik-makinesi-servisi`),
    ...districts.map((d) => `${d.slug}-endustriyel-bulasik-makinesi-servisi`),
  ];
}

// Sık yapılan arızalar (marka & ilçe sayfalarında kullanılır)
export const commonFaults = [
  "Su almıyor / su boşaltmıyor",
  "Isıtmıyor, bulaşık soğuk yıkanıyor",
  "Yıkama kolları dönmüyor",
  "Deterjan / parlatıcı dozaj arızası",
  "Rezistans ve boyler arızaları",
  "Su kaçağı ve sızıntı",
  "Pano, kart ve elektronik arızalar",
  "Pompa ve motor arızaları",
  "Kireç / kalker temizliği ve bakım",
  "Kapı contası ve mikro switch değişimi",
];

// Hizmetler
export const services = [
  {
    title: "Arıza Tespiti ve Tamir",
    desc: "Endüstriyel bulaşık makinelerinde tüm elektronik ve mekanik arızaların tespiti ve onarımı.",
  },
  {
    title: "Periyodik Bakım",
    desc: "Makinenizin ömrünü uzatan, verimliliği artıran düzenli bakım ve kalker temizliği.",
  },
  {
    title: "Orijinal Yedek Parça",
    desc: "Tüm markalara uygun orijinal ve muadil yedek parça temini ve montajı.",
  },
  {
    title: "Kurulum ve Devreye Alma",
    desc: "Yeni makine kurulumu, su-elektrik bağlantısı ve devreye alma hizmeti.",
  },
  {
    title: "Su Arıtma & Kireç Çözümü",
    desc: "Bulaşık kalitesini artıran su yumuşatma ve arıtma sistemleri kurulumu.",
  },
  {
    title: "Deterjan & Parlatıcı Satışı",
    desc: "Endüstriyel bulaşık makineleri için profesyonel deterjan ve parlatıcı ürünleri.",
  },
];
