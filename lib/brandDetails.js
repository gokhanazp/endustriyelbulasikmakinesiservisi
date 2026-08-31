// =============================================================
//  MARKA DETAY İÇERİĞİ (SEO derinlik verisi)
// =============================================================
// Marka sayfalarını şablondan çıkarmak için kullanılır:
// semptom→neden→çözüm tablosu, yedek parça, bakım periyodu,
// model notları ve markaya özel SSS.
//
// ⚠️  ÖNEMLİ: `errorCodes` alanları BİLEREK BOŞ bırakılmıştır.
// Üreticiye özel hata kodları ancak servis el kitabından veya kendi
// saha kayıtlarınızdan doğrulanarak girilmelidir. Yanlış hata kodu
// yayınlamak hem teknik olarak zararlı hem de güven kırıcıdır.
// Kodları girdiğiniz anda ilgili bölüm sayfada otomatik görünür.

/* ---------------------------------------------------------------- */
/*  TÜM MARKALAR İÇİN ORTAK TEKNİK TABAN                             */
/* ---------------------------------------------------------------- */

export const baseFaultTable = [
  {
    symptom: "Makine su almıyor, hazne dolmuyor",
    causes: "Şebeke vanası kapalı, su giriş filtresi tıkalı, selenoid (su alma) valfi arızalı, seviye şamandırası veya basınç şalteri hatalı",
    fix: "Giriş filtresi temizlenir, valf bobini ölçülür, seviye devresi test edilir; arızalı valf veya presostat değiştirilir",
    time: "30–60 dk",
  },
  {
    symptom: "Su alıyor ama ısıtmıyor, bulaşık soğuk yıkanıyor",
    causes: "Hazne veya boyler rezistansı yanmış, kontaktör çekmiyor, termostat/NTC bozuk, termik atmış",
    fix: "Rezistans direnci ve izolasyonu ölçülür, kontaktör kontakları kontrol edilir, arızalı eleman değiştirilir",
    time: "1–2 saat",
  },
  {
    symptom: "Durulama suyu gelmiyor / bulaşık ıslak ve lekeli çıkıyor",
    causes: "Boyler rezistansı arızalı, durulama pompası (booster) çalışmıyor, durulama memeleri kireç tutmuş, parlatıcı dozajı sıfır",
    fix: "Boyler sıcaklığı ölçülür (80–85 °C), memeler sökülüp kireç çözülür, dozaj pompası ayarlanır",
    time: "45–90 dk",
  },
  {
    symptom: "Bulaşıklar temiz çıkmıyor, yemek artığı kalıyor",
    causes: "Yıkama kolu delikleri tıkalı, kol yatağı aşınmış, filtreler kirli, yıkama sıcaklığı düşük, deterjan dozajı yetersiz",
    fix: "Kollar sökülüp delikler açılır, yatak değişir, filtre seti temizlenir, dozaj kalibre edilir",
    time: "30–60 dk",
  },
  {
    symptom: "Tahliye yapmıyor, hazne suyu boşalmıyor",
    causes: "Tahliye pompası pervanesi kilitlenmiş, tahliye hortumu/gideri tıkalı, taşma borusu yanlış oturmuş",
    fix: "Pompa sökülüp temizlenir, yanmışsa değiştirilir; gider hattı açılır",
    time: "45–90 dk",
  },
  {
    symptom: "Makinenin altından su kaçırıyor",
    causes: "Kapı/kapak contası sertleşmiş, hazne kaynak noktası çatlamış, pompa salmastrası aşınmış, hortum kelepçesi gevşemiş",
    fix: "Conta seti değiştirilir, salmastra yenilenir, kaçak noktası basınç altında test edilir",
    time: "1–2 saat",
  },
  {
    symptom: "Yıkama kolları dönmüyor",
    causes: "Kol yatağı/burcu aşınmış, kol delikleri tıkalı, sirkülasyon pompası basınç üretmiyor",
    fix: "Kol ve yatak değişimi, pompa çıkış basıncı ölçümü",
    time: "30–60 dk",
  },
  {
    symptom: "Deterjan veya parlatıcı çekmiyor",
    causes: "Peristaltik dozaj pompası hortumu yırtılmış, emiş süzgeci tıkalı, dozaj kartı sinyal vermiyor",
    fix: "Pompa hortumu değişir, emiş hattı temizlenir, dozaj süresi yeniden ayarlanır",
    time: "30–45 dk",
  },
  {
    symptom: "Makine hiç çalışmıyor, panel ölü",
    causes: "Faz gelmiyor / faz sırası hatalı, sigorta veya termik atmış, ana şalter arızalı, güç kartı beslemesi yok",
    fix: "Pano ölçümü yapılır, koruma elemanları ve besleme hattı kontrol edilir",
    time: "45–90 dk",
  },
  {
    symptom: "Program yarıda duruyor / kendini resetliyor",
    causes: "Kapak mikro switch'i temassız, kart üzerindeki röle yapışmış, gerilim dalgalanması, termik koruma devreye giriyor",
    fix: "Switch ve kapı mekanizması ayarlanır, kart röleleri kontrol edilir, besleme gerilimi ölçülür",
    time: "1–2 saat",
  },
  {
    symptom: "Aşırı köpük, yıkama basıncı düşük",
    causes: "Ev tipi/yanlış deterjan kullanımı, dozaj fazlalığı, hazne suyunun uzun süre değişmemesi",
    fix: "Hazne boşaltılıp durulanır, düşük köpüklü endüstriyel deterjana geçilir, dozaj kalibre edilir",
    time: "30 dk",
  },
  {
    symptom: "Isıtma çok yavaş, çevrim süresi uzadı",
    causes: "Rezistans üzerinde kireç tabakası, boyler kapasitesinin üstünde kullanım, giriş suyu çok soğuk",
    fix: "Boyler ve rezistans kireç çözme işlemi, su yumuşatma sistemi önerisi",
    time: "2–3 saat",
  },
];

export const baseSpareParts = [
  { name: "Hazne ve boyler rezistansı", note: "Isıtmama ve düşük sıcaklık arızalarının birinci sebebi" },
  { name: "Sirkülasyon (yıkama) pompası", note: "Basınç düşüklüğü ve yıkama kalitesi kaybında değişir" },
  { name: "Tahliye pompası", note: "Suyun boşalmaması ve hazne taşmasında" },
  { name: "Selenoid (su alma) valfi", note: "Su almama arızasının en sık nedeni" },
  { name: "Dozaj (peristaltik) pompası ve hortumu", note: "Deterjan/parlatıcı çekmeme arızalarında" },
  { name: "Kontaktör ve termik röle", note: "Rezistans besleme devresinde kontak yanması" },
  { name: "Termostat / NTC sıcaklık sensörü", note: "Sıcaklık okuma ve ısıtma kontrolü" },
  { name: "Kapı contası ve kapak sızdırmazlık seti", note: "Su kaçağı ve buhar sızıntısında" },
  { name: "Yıkama ve durulama kolu, meme seti", note: "Tıkanma ve aşınma sonrası" },
  { name: "Elektronik kart / kontrol paneli", note: "Program hatası ve panel arızalarında" },
  { name: "Basınç şalteri (presostat) ve seviye şamandırası", note: "Hazne dolum kontrolü" },
  { name: "Filtre seti ve taşma borusu", note: "Rutin bakımda değişen sarf parçalar" },
];

export const maintenancePlan = [
  {
    period: "Her vardiya sonu (günlük)",
    items: [
      "Hazne suyu boşaltılır, filtreler sökülüp yıkanır",
      "Yıkama ve durulama kolları çıkarılıp delikleri kontrol edilir",
      "Kapak contası ve hazne iç yüzeyi silinir",
      "Deterjan ve parlatıcı bidon seviyeleri kontrol edilir",
    ],
  },
  {
    period: "Haftalık",
    items: [
      "Kol yatakları ve meme uçları kireç yönünden kontrol edilir",
      "Tahliye kanalı ve süzgeç temizlenir",
      "Kapak mekanizması ve mikro switch çalışması denenir",
      "Yıkama/durulama sıcaklıkları panelden doğrulanır",
    ],
  },
  {
    period: "Aylık",
    items: [
      "Boyler ve hazne için kireç çözücü ile çevrim yapılır",
      "Dozaj hortumları yıpranma yönünden kontrol edilir",
      "Su giriş filtresi sökülüp temizlenir",
      "Kaçak akım rölesi ve topraklama kontrolü",
    ],
  },
  {
    period: "6 aylık / yıllık (servis bakımı)",
    items: [
      "Rezistans direnç ve izolasyon ölçümü",
      "Pompa salmastra ve rulman kontrolü",
      "Kontaktör kontak yüzeylerinin kontrolü, gerekirse değişimi",
      "Su sertliği ölçümü ve yumuşatma sistemi rejenerasyonu",
      "Tüm conta setinin gözden geçirilmesi",
    ],
  },
];

export const baseFaq = (brandName) => [
  {
    q: `${brandName} bulaşık makinesi servisi aynı gün geliyor mu?`,
    a: `Evet. İstanbul Avrupa Yakası genelinde ${brandName} endüstriyel bulaşık makineleri için aynı gün servis veriyoruz. Arıza bildiriminizi telefon veya WhatsApp'tan ilettiğinizde teknisyenimiz sık kullanılan yedek parçalarla birlikte adresinize gelir.`,
  },
  {
    q: `${brandName} bulaşık makinesi ısıtmıyorsa ne yapmalıyım?`,
    a: `Önce panelden ayarlanan yıkama (55–65 °C) ve durulama (80–85 °C) sıcaklıklarını kontrol edin. Sıcaklık yükselmiyorsa büyük ihtimalle rezistans, kontaktör veya termostat arızası vardır. Bu ölçümler trifaze gerilim altında yapıldığı için müdahaleyi servise bırakın.`,
  },
  {
    q: `${brandName} için orijinal yedek parça buluyor musunuz?`,
    a: `${brandName} bulaşık makinelerinde rezistans, pompa, dozaj ünitesi, conta ve kart gibi parçaların orijinal ve muadil seçeneklerini temin edip montajını yapıyoruz. Yapılan işçilik garantilidir.`,
  },
  {
    q: `Periyodik bakım anlaşması yapıyor musunuz?`,
    a: `Evet. Günlük kullanım yoğunluğunuza ve su sertliğinize göre aylık veya üç aylık bakım planı kuruyoruz. Düzenli kireç çözme ve filtre bakımı, ${brandName} makinelerinde arızaların büyük bölümünü baştan önler.`,
  },
  {
    q: `Makine tamir mi edilmeli yoksa yenilenmeli mi?`,
    a: `Keşif sırasında gövde/hazne durumu, pompa ve boyler sağlığı ile parça maliyetini birlikte değerlendiriyoruz. Onarım bedeli makinenin güncel değerine yaklaşıyorsa bunu açıkça söylüyor, gereksiz parça değişimi önermiyoruz.`,
  },
];

/* ---------------------------------------------------------------- */
/*  MARKAYA ÖZEL DERİNLİK                                           */
/* ---------------------------------------------------------------- */

export const brandDetails = {
  empero: {
    intro: [
      "Empero, İstanbul'daki restoran, kafe ve otel mutfaklarında en yaygın kullanılan endüstriyel bulaşık makinesi markalarından biridir. EMP.500 serisi tezgâh altı ve set altı modeller bardak/tabak yıkamada, EMP.1000 giyotin (hood) tip modeller yoğun servis mutfaklarında, konveyörlü ve tünel tip makineler ise toplu yemek üretim tesislerinde tercih edilir.",
      "Empero makinelerinde sahada en çok karşılaştığımız arıza grubu, sert su kaynaklı kireçlenmenin boyler ve durulama memelerinde yarattığı performans kaybıdır. İkinci sırada dozaj (deterjan/parlatıcı) ünitesi arızaları, üçüncü sırada tahliye pompası tıkanmaları gelir.",
      "SD (yumuşatıcılı) ve F (drenaj pompalı) varyantları, standart modellerden farklı bir bakım rutini ister. Yumuşatıcılı modellerde tuz seviyesinin ihmal edilmesi, birkaç ay içinde rezistans üzerinde kalıcı kireç tabakası oluşturur.",
    ],
    extraFaults: [
      {
        symptom: "EMP.500 serisinde bardaklarda beyaz kireç lekesi",
        causes: "Su sertliği yüksek, SD modelinde yumuşatıcı tuzu bitmiş veya rejenerasyon yapılmamış, parlatıcı dozajı düşük",
        fix: "Yumuşatıcı reçinesi rejenere edilir, tuz haznesi doldurulur, parlatıcı dozajı su sertliğine göre yeniden ayarlanır",
        time: "45 dk",
      },
      {
        symptom: "EMP.1000 giyotin tipte kapak indirilince program başlamıyor",
        causes: "Kapak mikro switch'i konum kaybetmiş, kapak yayı/denge mekanizması gevşemiş",
        fix: "Switch konumu ayarlanır, kapak mekanizması ve yay gerginliği yeniden kurulur",
        time: "45–75 dk",
      },
      {
        symptom: "F modelinde drenaj pompası sürekli çalışıyor, hazne dolmuyor",
        causes: "Tahliye pompası rölesi yapışmış, seviye devresi hatalı sinyal veriyor",
        fix: "Röle ve seviye şalteri değiştirilir, kart çıkışı ölçülür",
        time: "1 saat",
      },
      {
        symptom: "Konveyörlü / tünel tip modelde bant duruyor veya kasnak kayıyor",
        causes: "Redüktör motoru zorlanıyor, zincir gerginliği bozulmuş, bant üzerinde sıkışma",
        fix: "Zincir gerginliği ayarlanır, redüktör yağ/akım kontrolü yapılır",
        time: "2–3 saat",
      },
      {
        symptom: "Durulama suyu yeterli basınçla gelmiyor",
        causes: "Booster (durulama) pompası zayıflamış, durulama memeleri kireçli, boyler seviyesi düşük",
        fix: "Memeler kireç çözülür, pompa basıncı ölçülür, gerekirse pompa değişir",
        time: "1–2 saat",
      },
    ],
    modelNotes: {
      "EMP.500": "Tezgâh altı 50x50 sepetli standart model. Yoğun bardak yıkamada en sık görülen sorun kol deliklerinin tıkanmasıdır.",
      "EMP.500-SD": "Dahili yumuşatıcılı versiyon; tuz seviyesi ihmal edilirse rezistans ömrü ciddi biçimde kısalır.",
      "EMP.500-SDF": "Yumuşatıcı + drenaj pompalı model; tahliye pompası filtresi haftalık temizlenmelidir.",
      "EMP.1000": "Giyotin (hood) tip. Kapak mekanizması ve mikro switch ayarı düzenli kontrol ister.",
      "EMP.2000": "Yüksek kapasiteli model; boyler ısıtma süresi uzarsa kireç birikimi ilk kontrol edilecek noktadır.",
      "Konveyörlü Bulaşık Makinesi": "Bant hızı, redüktör ve bölge sıcaklıkları birlikte değerlendirilmelidir.",
      "Tünel Tip Bulaşık Makinesi": "Ön yıkama–yıkama–durulama bölgeleri ayrı ayrı test edilir; tek bölgedeki basınç kaybı tüm hattı etkiler.",
    },
    // Servis el kitabından doğrulanmış kodları buraya girin:
    // { code: "E3", meaning: "...", action: "..." }
    errorCodes: [],
    faq: [
      {
        q: "Empero bulaşık makinesi su almıyor, ne yapmalıyım?",
        a: "Önce şebeke vanasının açık olduğunu ve makinenin arkasındaki su giriş filtresinin tıkalı olmadığını kontrol edin. Filtre temizken de su gelmiyorsa selenoid valf bobini yanmış veya seviye devresi arızalı olabilir. Bu iki parça da servis müdahalesi gerektirir; Empero için gerekli valf ve presostatı yanımızda getiriyoruz.",
      },
      {
        q: "Empero EMP.500 bardakları lekeli çıkarıyor, sebebi ne?",
        a: "Bardaktaki beyaz iz neredeyse her zaman su sertliği ve parlatıcı dozajı ile ilgilidir. SD modelinizde tuz haznesini kontrol edin, standart modelde ise harici su yumuşatma önerilir. Lekede gökkuşağı görünümü varsa parlatıcı fazladır, kireç beyazı ise durulama sıcaklığı düşüktür.",
      },
      {
        q: "Empero giyotin tip makinede kapak inince makine başlamıyor?",
        a: "Bu tipik bir kapak mikro switch arızasıdır. Switch konum kaybettiğinde kart 'kapak açık' sinyali alır ve program başlamaz. Switch ayarı ve kapak yay mekanizmasının yeniden kurulmasıyla çözülür.",
      },
    ],
  },

  maksan: {
    intro: [
      "Maksan, endüstriyel mutfak ekipmanlarında Türkiye üretimi ve yaygın servis ağıyla tercih edilen markalardandır. GW serisi bardak yıkama makineleri kafe ve barlarda, DW serisi tabak yıkama ve giyotin tip modeller restoran mutfaklarında, konveyörlü ve tünel tip makineler ise yemek fabrikalarında kullanılır.",
      "Maksan makinelerinde en sık gelen çağrılar 'su almıyor' ve 'ısıtmıyor' başlıkları altında toplanır. Bardak yıkama modellerinde ise yoğun kullanım nedeniyle dozaj hortumu yıpranması öne çıkar; peristaltik pompa hortumu ortalama 8–12 ayda bir değişmelidir.",
      "GW-535 ve GW-640 gibi bardak yıkama modellerinde çevrim süresi kısa olduğu için makine gün içinde çok sayıda ısıtma döngüsü yapar. Bu da rezistans ve kontaktörü, tabak yıkama modellerine göre daha hızlı yorar.",
    ],
    extraFaults: [
      {
        symptom: "GW serisi bardak yıkamada çevrim bitiyor ama bardak sıcak çıkmıyor",
        causes: "Boyler rezistansı zayıflamış, kontaktör kontağı yanmış, durulama süresi kısalmış",
        fix: "Rezistans direnci ölçülür, kontaktör değiştirilir, durulama süresi kart üzerinden ayarlanır",
        time: "1–2 saat",
      },
      {
        symptom: "DT (dijital) modellerde panel yanıyor ama komut almıyor",
        causes: "Membran tuş takımı yıpranmış, panel-kart flex bağlantısı gevşemiş",
        fix: "Tuş takımı ve bağlantı soketi kontrol edilir, gerekirse panel değişir",
        time: "1 saat",
      },
      {
        symptom: "DW-1000 giyotin tipte buhar sızdırıyor",
        causes: "Kapak contası sertleşmiş, kapak hizası bozulmuş, hazne üst sızdırmazlığı bozulmuş",
        fix: "Conta seti değiştirilir, kapak hizası yeniden ayarlanır",
        time: "1–2 saat",
      },
      {
        symptom: "Bardaklarda deterjan kokusu / kayganlık kalıyor",
        causes: "Dozaj süresi fazla, durulama basıncı düşük, parlatıcı-deterjan oranı hatalı",
        fix: "Dozaj kalibrasyonu yapılır, durulama memeleri ve boyler basıncı kontrol edilir",
        time: "45 dk",
      },
      {
        symptom: "Konveyörlü DW modelinde bölge sıcaklıkları tutmuyor",
        causes: "Bölge rezistanslarından biri devre dışı, bant hızı yüksek ayarlanmış",
        fix: "Her bölge rezistansı ayrı ölçülür, bant hızı kapasiteye göre yeniden ayarlanır",
        time: "2–3 saat",
      },
    ],
    modelNotes: {
      "GW-535": "35x35 sepetli bardak yıkama modeli; yoğun bar kullanımında dozaj hortumu ve kol delikleri en kritik bakım kalemidir.",
      "GW-640": "40x40 sepetli bardak yıkama; tabak yıkamada zorlanır, doğru sepet kullanımı performansı belirler.",
      "GW-535-DT": "Dijital panelli versiyon; panel ve kart arası bağlantı, nemli ortamda kontrol edilmelidir.",
      "DW-500": "Tezgâh altı tabak yıkama; standart 50x50 sepet, filtre bakımı günlük yapılmalıdır.",
      "DW-1000": "Giyotin tip; kapak contası ve hiza ayarı buhar kaçağının birinci sebebidir.",
      "DW-2000 Konveyörlü": "Bant hızı ve bölge sıcaklıkları birlikte ayarlanmadığında yıkama kalitesi düşer.",
      "DW-3000 Tünel Tip": "Ön yıkama, yıkama ve durulama bölgeleri ayrı ayrı devreye alınarak test edilir.",
    },
    errorCodes: [],
    faq: [
      {
        q: "Maksan bulaşık makinesi su almıyor, olası nedenler neler?",
        a: "Sırasıyla şu üç noktaya bakılır: şebeke vanası ve giriş filtresi, selenoid su alma valfi, hazne seviye devresi (şamandıra veya presostat). Üç kalemin üçü de saha müdahalesiyle aynı ziyarette test edilebilir; parça gerekiyorsa çoğunlukla yanımızdaki stoktan karşılanır.",
      },
      {
        q: "Maksan GW-535 bardak yıkama ısıtmıyorsa ne yapılır?",
        a: "Bardak yıkama makineleri gün içinde çok sayıda kısa ısıtma çevrimi yaptığı için rezistans ve kontaktör aşınması hızlıdır. Panelde sıcaklık yükselmiyorsa boyler rezistansı ve kontaktör kontakları ölçülmelidir. Trifaze besleme altında yapılan bir ölçüm olduğu için servise bırakılmalıdır.",
      },
      {
        q: "Maksan bulaşık makinesinde dozaj pompası ne sıklıkla değişir?",
        a: "Peristaltik dozaj pompalarının hortumu, yoğun kullanımda ortalama 8–12 ayda bir yenilenir. Deterjan çekmemesi veya bidonda seviye düşmemesi bu hortumun yırtıldığının işaretidir.",
      },
    ],
  },

  inoksan: {
    intro: [
      "İnoksan, endüstriyel mutfak ekipmanlarında Türkiye'nin en geniş ürün gamına sahip üreticilerinden biridir. BYM serisi tezgâh altı ve giyotin tip modeller restoran mutfaklarında, RIVER ve NIAGARA serileri ise otel, hastane ve toplu yemek üretim tesislerinde yaygındır.",
      "İnoksan makinelerinde arızaların önemli bölümü, kapasitenin üzerinde kullanım ve ihmal edilen kireç bakımından kaynaklanır. Özellikle RIVER kazan yıkama makineleri ve NIAGARA konveyörlü hatlarda, bölge sıcaklıklarının düşmesi ilk uyarı işaretidir.",
    ],
    extraFaults: [
      {
        symptom: "BYM serisinde program başlıyor ama hazne dolmadan yıkamaya geçiyor",
        causes: "Seviye şamandırası/presostat hatalı sinyal veriyor, hava hortumu tıkalı",
        fix: "Seviye devresi ve hava hortumu temizlenir, presostat değiştirilir",
        time: "45–90 dk",
      },
      {
        symptom: "NIAGARA konveyörlü hatta durulama bölgesi soğuk kalıyor",
        causes: "Boyler rezistanslarından biri devre dışı, kontaktör çekmiyor, bant hızı fazla",
        fix: "Bölge rezistansları tek tek ölçülür, kontaktör değişir, bant hızı yeniden ayarlanır",
        time: "2–3 saat",
      },
      {
        symptom: "RIVER kazan yıkama makinesinde basınç düşüklüğü",
        causes: "Sirkülasyon pompası pervanesi aşınmış, emiş süzgeci tıkalı",
        fix: "Pompa sökülüp kontrol edilir, süzgeç temizlenir, gerekirse pompa değişir",
        time: "2 saat",
      },
      {
        symptom: "Kurutma tünelinde bulaşık ıslak çıkıyor",
        causes: "Fan motoru zayıflamış, ısıtıcı devre dışı, hava kanalı tıkalı",
        fix: "Fan ve ısıtıcı devresi ölçülür, kanal temizliği yapılır",
        time: "1–2 saat",
      },
    ],
    modelNotes: {
      "BYM042": "Kompakt tezgâh altı model; küçük mutfaklarda filtre bakımı ihmal edildiğinde tahliye tıkanması sık görülür.",
      "BYM052": "Yaygın tezgâh altı model; kol delikleri ve boyler kireci en kritik bakım kalemi.",
      "PT 500": "Giyotin tip; kapak mekanizması ve mikro switch ayarı düzenli kontrol ister.",
      "RIVER 342": "Kazan yıkama hattı; pompa basıncı ve süzgeç temizliği performansı belirler.",
      "NIAGARA 2150 Konveyörlü": "Bölge sıcaklıkları ve bant hızı birlikte ayarlanmalıdır.",
      "Kurutma Tüneli": "Fan ve ısıtıcı devresi ile hava kanalı temizliği birlikte değerlendirilir.",
    },
    errorCodes: [],
    faq: [
      {
        q: "İnoksan bulaşık makinesi bulaşıkları temizlemiyor, nereden başlamalıyım?",
        a: "Sırayla şuna bakın: filtreler temiz mi, yıkama kolu delikleri açık mı, yıkama sıcaklığı 55–65 °C'ye ulaşıyor mu, deterjan dozajı doğru mu. Bu dördü de uygunsa sorun sirkülasyon pompası basıncındadır ve servis müdahalesi gerekir.",
      },
      {
        q: "İnoksan konveyörlü makinede yıkama kalitesi neden düşer?",
        a: "Konveyörlü hatlarda kalite kaybı çoğunlukla tek bir bölgeden gelir: ön yıkama, yıkama veya durulama bölgelerinden birinde sıcaklık ya da basınç düşmüştür. Bölgeler ayrı ayrı ölçülmeden yapılan parça değişimi çözüm getirmez.",
      },
    ],
  },

  oztiryakiler: {
    intro: [
      "Öztiryakiler, endüstriyel mutfak sektörünün köklü üreticilerinden biridir ve İstanbul'daki otel, restoran ve toplu yemek mutfaklarında geniş bir kurulu tabana sahiptir. OBY serisi tezgâh altı ve bardak yıkama modelleri, OBM serisi giyotin tip makineler ve konveyörlü hatlar en sık servis verdiğimiz gruplardır.",
      "Öztiryakiler makinelerinde saha kayıtlarımızda öne çıkan başlıklar: boyler kireçlenmesine bağlı ısıtma yavaşlaması, dozaj ünitesi ayar bozukluğu ve giyotin tip modellerde kapak mekanizması aşınması.",
    ],
    extraFaults: [
      {
        symptom: "OBY 500 modelinde çevrim süresi uzadı",
        causes: "Boyler ve rezistans üzerinde kireç tabakası, giriş suyu sıcaklığı düşük",
        fix: "Kireç çözme çevrimi uygulanır, gerekirse su yumuşatma sistemi önerilir",
        time: "2–3 saat",
      },
      {
        symptom: "OBM 1080 giyotin tipte kapak zor iniyor / kendi kendine kalkıyor",
        causes: "Kapak yay ve denge mekanizması gevşemiş, kılavuz burçlar aşınmış",
        fix: "Yay gerginliği ayarlanır, burçlar değiştirilir",
        time: "1–2 saat",
      },
      {
        symptom: "Touch panelli modelde ekran donuyor",
        causes: "Kontrol kartı beslemesinde dalgalanma, panel-kart bağlantısı gevşemiş",
        fix: "Besleme gerilimi ölçülür, bağlantı ve kart kontrol edilir",
        time: "1 saat",
      },
      {
        symptom: "1000 tabak modelinde tahliye yavaş",
        causes: "Tahliye pompası zayıflamış, gider hattı tıkalı, taşma borusu tam oturmamış",
        fix: "Pompa ve gider hattı kontrol edilir, taşma borusu contası yenilenir",
        time: "1–2 saat",
      },
    ],
    modelNotes: {
      "OBY 500": "En yaygın tezgâh altı modellerden; boyler kireç bakımı çevrim süresini doğrudan etkiler.",
      "OBY 500 Touch": "Dokunmatik panelli versiyon; besleme dalgalanmalarına karşı hassastır.",
      "OBM 1080": "Giyotin tip; kapak yay mekanizması ve kılavuz burçlar periyodik kontrol ister.",
      "1000 Tabak Bulaşık Makinesi": "Yoğun servis mutfaklarında tahliye hattı haftalık kontrol edilmelidir.",
      "Konveyörlü Bulaşık Makinesi": "Bölge sıcaklıkları ve bant hızı birlikte ayarlanır.",
    },
    errorCodes: [],
    faq: [
      {
        q: "Öztiryakiler bulaşık makinesinde rezistans arızası nasıl anlaşılır?",
        a: "Makine su alıyor, program dönüyor ama panelde sıcaklık yükselmiyorsa ilk şüpheli rezistanstır. Kesin teşhis için rezistansın direnci ve gövdeye karşı izolasyonu ölçülür; kaçak varsa rezistans değişmelidir. Ölçüm trifaze pano üzerinde yapıldığı için servis işidir.",
      },
      {
        q: "Öztiryakiler giyotin tip makinede kapak sorunları neden olur?",
        a: "Günde yüzlerce kez açılıp kapanan kapak, yay gerginliğini ve kılavuz burçları zamanla yorar. Kapağın zor inmesi veya kendiliğinden kalkması bu aşınmanın işaretidir; mekanizma ayarı ve burç değişimiyle çözülür.",
      },
    ],
  },
};

/* ---------------------------------------------------------------- */
/*  YARDIMCILAR                                                      */
/* ---------------------------------------------------------------- */

export const getBrandDetail = (slug) => brandDetails[slug] || null;

export function brandFaultTable(slug) {
  const d = brandDetails[slug];
  return d?.extraFaults ? [...d.extraFaults, ...baseFaultTable] : baseFaultTable;
}

export function brandFaq(brand) {
  const d = brandDetails[brand.slug];
  return d?.faq ? [...d.faq, ...baseFaq(brand.name)] : baseFaq(brand.name);
}

export function brandIntro(brand) {
  const d = brandDetails[brand.slug];
  if (d?.intro) return d.intro;
  return [
    `${brand.name} endüstriyel bulaşık makineleri, İstanbul Avrupa Yakası'ndaki restoran, otel, hastane ve fabrika mutfaklarında yoğun biçimde kullanılıyor. Tezgâh altı modellerden giyotin tip ve konveyörlü hatlara kadar tüm ${brand.name} tiplerine arıza tespiti, onarım, periyodik bakım ve yedek parça hizmeti veriyoruz.`,
    `${brand.name} makinelerinde arızaların büyük bölümü iki temel sebepten kaynaklanır: sert suyun boyler ve rezistansta oluşturduğu kireç birikimi ve ihmal edilen günlük filtre bakımı. Aşağıdaki tabloda sahada en sık karşılaştığımız belirtileri, olası nedenlerini ve tipik müdahale sürelerini bulabilirsiniz.`,
  ];
}

export const modelNote = (slug, model) => brandDetails[slug]?.modelNotes?.[model] || null;
export const brandErrorCodes = (slug) => brandDetails[slug]?.errorCodes || [];
