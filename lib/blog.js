// =============================================================
//  BLOG YAZILARI (SEO içerik)
// =============================================================
// Yeni yazı eklemek için diziye yeni bir nesne ekleyin; blog sayfaları
// ve sitemap otomatik güncellenir.

export const posts = [
  {
    slug: "empero-bulasik-makinesi-ariza-rehberi",
    title: "Empero Bulaşık Makinesi Arıza Rehberi: Belirtiden Çözüme",
    description:
      "Empero bulaşık makinesi arızaları: su almıyor, ısıtmıyor, yıkamıyor, su kaçırıyor. Belirtiye göre olası nedenler, kontrol sırası ve servis müdahalesi. İstanbul Avrupa Yakası Empero servisi.",
    date: "2026-08-29",
    category: "Marka Rehberi",
    readMinutes: 8,
    excerpt:
      "Empero endüstriyel bulaşık makinelerinde en sık gelen çağrıları belirtiye göre sıraladık: hangi belirti hangi parçayı işaret eder, siz neyi kontrol edebilirsiniz, servis neye bakar.",
    intro:
      "Empero, İstanbul'daki restoran ve otel mutfaklarının en yaygın kullandığı endüstriyel bulaşık makinesi markalarından biri. EMP.500 serisi tezgâh altı modellerden EMP.1000 giyotin tip ve konveyörlü hatlara kadar geniş bir ürün ailesi var ve her tipin kendine özgü zayıf noktaları bulunuyor. Bu rehberde sahada en sık aldığımız Empero servis çağrılarını belirtiden başlayarak sıraladık.",
    sections: [
      {
        h: "Empero su almıyor: kontrol sırası",
        p: [
          "Önce şebeke vanasının açık olduğunu doğrulayın. Ardından makinenin su giriş rakoruna takılı filtreyi sökün; bu küçük süzgeç kireç ve kum tuttuğu için su almama arızasının en basit ve en sık nedenidir.",
          "Filtre temizken de su gelmiyorsa sıra selenoid (su alma) valfindedir. Valf bobini yandığında makine komut verir ama valf açılmaz. Bobin ölçümü ve değişimi servis işidir.",
          "Üçüncü olasılık seviye devresidir: şamandıra veya basınç şalteri hazneyi dolu sandığında makine su almayı hiç başlatmaz.",
        ],
      },
      {
        h: "Empero ısıtmıyor, bulaşık soğuk yıkanıyor",
        p: [
          "Endüstriyel makinelerde yıkama suyu 55–65 °C, durulama suyu 80–85 °C civarında olmalıdır. Panelde sıcaklık yükselmiyorsa sırayla rezistans, kontaktör ve termostat kontrol edilir.",
          "Rezistansın yanması kadar sık görülen bir durum da kontaktör kontaklarının yanmasıdır: rezistans sağlamdır ama üzerine gerilim gitmez. Bu ayrım ancak pano üzerinde ölçümle yapılır ve trifaze gerilim altında çalışıldığı için servise bırakılmalıdır.",
        ],
      },
      {
        h: "EMP.500 serisinde bardaklarda beyaz iz kalıyor",
        p: [
          "Bardaktaki beyaz iz neredeyse her zaman su sertliği ile ilgilidir. SD (yumuşatıcılı) modelde tuz haznesi boşaldıysa reçine görevini yapamaz ve kireç hem bardağa hem rezistansa yapışır.",
          "Lekede gökkuşağı görünümü varsa parlatıcı fazladır; mat beyaz iz ise kireç veya düşük durulama sıcaklığı işaretidir. Dozaj ayarını su sertliğine göre kalibre etmek çoğu zaman yeterli olur.",
        ],
      },
      {
        h: "EMP.1000 giyotin tipte kapak indirilince program başlamıyor",
        p: [
          "Bu tipik bir kapak mikro switch arızasıdır. Günde yüzlerce kez açılıp kapanan kapak, switch'in konumunu zamanla kaydırır; kart 'kapak açık' sinyali aldığı için program başlamaz.",
          "Switch ayarı ve kapak yay mekanizmasının yeniden kurulmasıyla çözülür. Kapağın kendiliğinden kalkması veya zor inmesi de aynı mekanizmanın yorulduğunu gösterir.",
        ],
      },
      {
        h: "Tahliye yapmıyor, hazne suyu boşalmıyor",
        p: [
          "F (drenaj pompalı) modellerde tahliye pompasının pervanesine kürdan, peçete parçası veya kemik parçası sıkışması sık görülür. Pompa sökülüp temizlendiğinde sorun çoğu zaman çözülür.",
          "Pompa çalışıyor ama su gitmiyorsa gider hattı veya taşma borusunun oturması kontrol edilmelidir.",
        ],
      },
      {
        h: "Çevrim süresi uzadı, makine yavaşladı",
        p: [
          "Bu, kireç birikiminin ilk ve en güvenilir işaretidir. Boyler ve rezistans üzerindeki kireç tabakası ısı transferini zorlaştırır; makine hedef sıcaklığa geç ulaştığı için çevrim uzar.",
          "Aylık kireç çözme çevrimi ve su sertliği yüksekse harici yumuşatma sistemi, bu sorunu kalıcı biçimde ortadan kaldırır.",
        ],
      },
      {
        h: "Hata kodu gördüğünüzde ne yapmalı?",
        p: [
          "Dijital panelli Empero modellerinde ekranda beliren kod, arızanın hangi devrede olduğunu gösterir. Kodun anlamı model ve üretim yılına göre değişebildiği için, internetten bulunan genel listelerle işlem yapmak yanlış parça değişimine yol açar.",
          "Doğrusu: kodu not edin, makinenin model ve seri numarasıyla birlikte servise iletin. Teknisyen doğru servis dokümanı üzerinden kodu okur ve tek ziyarette çözer.",
        ],
      },
    ],
    conclusion:
      "Empero bulaşık makinenizde bu belirtilerden birini yaşıyorsanız, İstanbul Avrupa Yakası genelinde aynı gün servis veriyoruz. Teknisyenimiz Empero modellerinde en sık değişen parçalarla birlikte gelir.",
    related: [
      { label: "Empero Bulaşık Makinesi Servisi", href: "/empero-bulasik-makinesi-servisi" },
      { label: "Şişli Empero Servisi", href: "/sisli-empero-bulasik-makinesi-servisi" },
      { label: "Fatih Empero Servisi", href: "/fatih-empero-bulasik-makinesi-servisi" },
    ],
  },
  {
    slug: "maksan-bulasik-makinesi-su-almiyor",
    title: "Maksan Bulaşık Makinesi Su Almıyor: 7 Olası Neden",
    description:
      "Maksan bulaşık makinesi su almıyorsa nedenleri: giriş filtresi, selenoid valf, seviye şalteri, basınç düşüklüğü ve kart arızaları. Kontrol sırası ve servis müdahalesi.",
    date: "2026-08-20",
    category: "Arıza & Çözüm",
    readMinutes: 6,
    excerpt:
      "Maksan bulaşık makineniz su almıyorsa sorun çoğu zaman üç noktadan birindedir. En basitten en karmaşığa doğru kontrol sırasını ve hangi adımın servis gerektirdiğini anlattık.",
    intro:
      "Maksan bulaşık makinelerinde en sık aldığımız servis çağrısı 'su almıyor' başlığı altında toplanıyor. İyi haber şu: bu arızanın yedi olası nedeninden ikisi işletme içinde kontrol edilebiliyor ve sorun çoğu zaman orada bitiyor. Aşağıda kontrol sırasını, en basitten en karmaşığa doğru sıraladık.",
    sections: [
      {
        h: "1. Şebeke vanası ve su basıncı",
        p: [
          "Basit ama sık atlanan adım: makinenin bağlı olduğu vana tam açık mı? Ayrıca endüstriyel bulaşık makineleri belirli bir minimum şebeke basıncı ister. Yoğun saatlerde basınç düşen binalarda makine hazneyi dolduramaz.",
        ],
      },
      {
        h: "2. Su giriş filtresi tıkalı",
        p: [
          "Makinenin arkasındaki su giriş rakorunda küçük bir süzgeç bulunur. Kireç, kum ve tesisattan gelen tortu burada birikir. Vanayı kapatıp rakoru sökerek bu filtreyi temizlemek çoğu 'su almıyor' çağrısını yerinde çözer.",
        ],
      },
      {
        h: "3. Selenoid (su alma) valfi arızalı",
        p: [
          "Valf bobini yandığında makine komut verir, valf açılmaz. Belirti nettir: makine program başlatır, bekler, ama hazne dolmaz. Bobin direnç ölçümüyle teşhis edilir ve valf değişir.",
        ],
      },
      {
        h: "4. Seviye şamandırası veya basınç şalteri hatalı",
        p: [
          "Seviye devresi hazneyi dolu sandığında makine su almayı hiç başlatmaz. Basınç şalterine giden hava hortumunun tıkanması da aynı belirtiyi verir; hortum temizliği bazen tek başına çözüm olur.",
        ],
      },
      {
        h: "5. Tahliye pompası sürekli çalışıyor",
        p: [
          "Drenaj pompalı (DT) modellerde tahliye rölesi yapıştığında pompa durmaz; makine su alsa bile hazne dolmaz. Bu durumda su alma değil, tahliye devresi arızalıdır.",
        ],
      },
      {
        h: "6. Kapak / kapı switch'i devreyi kesiyor",
        p: [
          "Kapak açık sinyali gelen makinede su alma devresi de devreye girmez. Kapağı kapattığınızda panelde çevrim başlamıyorsa önce switch'ten şüphelenin.",
        ],
      },
      {
        h: "7. Elektronik kart arızası",
        p: [
          "Yukarıdaki altı madde elendikten sonra geriye kart kalır. Kart üzerindeki röle çıkışı ölçülür; sinyal varsa sorun valfte, yoksa karttadır. Bu ölçüm gerilim altında yapıldığı için servis işidir.",
        ],
      },
    ],
    conclusion:
      "İlk iki adımı kendiniz kontrol edip sorunu çözemediyseniz, geri kalan beş olasılık ölçüm gerektirir. İstanbul Avrupa Yakası genelinde Maksan bulaşık makinelerine aynı gün servis veriyoruz.",
    related: [
      { label: "Maksan Bulaşık Makinesi Servisi", href: "/maksan-bulasik-makinesi-servisi" },
      { label: "Bahçelievler Maksan Servisi", href: "/bahcelievler-maksan-bulasik-makinesi-servisi" },
      { label: "Küçükçekmece Maksan Servisi", href: "/kucukcekmece-maksan-bulasik-makinesi-servisi" },
    ],
  },
  {
    slug: "inoksan-bulasik-makinesi-temizlemiyor-kontrol-listesi",
    title: "İnoksan Bulaşık Makinesi Temizlemiyor: Kontrol Listesi",
    description:
      "İnoksan bulaşık makinesi bulaşıkları temizlemiyorsa sırayla kontrol edilecekler: filtreler, yıkama kolları, sıcaklık, dozaj ve pompa basıncı. Adım adım kontrol listesi.",
    date: "2026-08-09",
    category: "Arıza & Çözüm",
    readMinutes: 6,
    excerpt:
      "Yıkama kalitesi düştüğünde parça değiştirmeden önce beş şeyi sırayla kontrol edin. Çoğu vakada sorun bu listenin ilk üç maddesinde çıkıyor.",
    intro:
      "İnoksan bulaşık makinelerinde 'temizlemiyor' şikâyeti tek bir arızaya değil, bir zincire işaret eder. Yıkama kalitesi; su sıcaklığı, su basıncı, deterjan dozajı ve mekanik temizlik dörtlüsünün ortak sonucudur. Bu dördünden biri bozulduğunda sonuç aynıdır: bulaşıkta artık kalır. Aşağıdaki listeyi sırayla uygulayın.",
    sections: [
      {
        h: "1. Filtreleri sökün ve kontrol edin",
        p: [
          "Tıkalı filtre, kirli suyun tekrar bulaşığa püskürtülmesine yol açar. BYM serisi tezgâh altı modellerde filtre seti her vardiya sonunda sökülüp yıkanmalıdır.",
        ],
      },
      {
        h: "2. Yıkama kollarının deliklerini açın",
        p: [
          "Kolları çıkarıp deliklerin tamamının açık olduğunu doğrulayın. Kireç ve yemek artığı delikleri daraltır, su bulaşığa yeterli basınçla ulaşmaz. Kol elinizle rahat dönmüyorsa yatağı aşınmıştır ve değişmelidir.",
        ],
      },
      {
        h: "3. Yıkama ve durulama sıcaklıklarını doğrulayın",
        p: [
          "Yıkama 55–65 °C, durulama 80–85 °C olmalıdır. Yıkama suyu soğuksa yağ çözülmez ve bulaşık yağlı kalır; durulama soğuksa bulaşık hem lekelenir hem hijyen sağlanmaz.",
          "Panelde ayar doğru görünüyor ama sıcaklık yükselmiyorsa rezistans veya kontaktör arızası vardır.",
        ],
      },
      {
        h: "4. Deterjan dozajını ve ürünü kontrol edin",
        p: [
          "Dozaj pompasının hortumu yırtıldığında bidondan deterjan çekilmez ve seviye düşmez; bunu gözle takip edebilirsiniz. Ayrıca su sertliğinize uygun olmayan deterjan, doğru dozajda bile verimsiz çalışır.",
          "Ev tipi deterjan kullanımı aşırı köpük yapar ve yıkama basıncını düşürür; endüstriyel makinelerde kesinlikle kullanılmamalıdır.",
        ],
      },
      {
        h: "5. Sirkülasyon pompası basıncı",
        p: [
          "İlk dört madde temizse geriye pompa kalır. Pervane aşındığında pompa döner ama basınç üretmez; yıkama gözle 'normal' görünür ama temizlik yetersizdir. Bu ölçüm servis tarafından yapılır.",
        ],
      },
      {
        h: "Konveyörlü ve tünel tip hatlar için ek not",
        p: [
          "NIAGARA gibi konveyörlü hatlarda kalite kaybı genellikle tek bir bölgeden gelir: ön yıkama, yıkama veya durulama bölgelerinden birinde sıcaklık ya da basınç düşmüştür. Bölgeler ayrı ayrı ölçülmeden yapılan parça değişimi çözüm getirmez.",
        ],
      },
    ],
    conclusion:
      "Listeyi uyguladığınız halde yıkama kalitesi düzelmediyse sorun pompa basıncı veya ısıtma devresindedir. İnoksan bulaşık makinelerine İstanbul Avrupa Yakası genelinde aynı gün servis veriyoruz.",
    related: [
      { label: "İnoksan Bulaşık Makinesi Servisi", href: "/inoksan-bulasik-makinesi-servisi" },
      { label: "Şişli İnoksan Servisi", href: "/sisli-inoksan-bulasik-makinesi-servisi" },
      { label: "Beşiktaş İnoksan Servisi", href: "/besiktas-inoksan-bulasik-makinesi-servisi" },
    ],
  },
  {
    slug: "oztiryakiler-rezistans-arizasi-nasil-anlasilir",
    title: "Öztiryakiler Bulaşık Makinesi Rezistans Arızası Nasıl Anlaşılır?",
    description:
      "Öztiryakiler bulaşık makinesinde rezistans arızasının belirtileri, kontaktör ve termostat arızasından nasıl ayırt edildiği, ölçüm yöntemi ve değişim süreci.",
    date: "2026-07-26",
    category: "Arıza & Çözüm",
    readMinutes: 5,
    excerpt:
      "Makine su alıyor, program dönüyor ama ısıtmıyor. Bu belirti tek başına rezistans arızası anlamına gelmez — üç farklı parça aynı sonucu verir.",
    intro:
      "Öztiryakiler bulaşık makinelerinde 'ısıtmıyor' çağrısı geldiğinde ilk şüpheli rezistanstır, ancak aynı belirtiyi kontaktör ve termostat da verir. Doğru parçayı bulmadan yapılan değişim hem para hem zaman kaybıdır. Bu yazıda üçünü nasıl ayırt ettiğimizi anlatıyoruz.",
    sections: [
      {
        h: "Belirti: su alıyor, program dönüyor, sıcaklık yükselmiyor",
        p: [
          "OBY 500 gibi tezgâh altı modellerde panelde okunan sıcaklık dakikalar geçmesine rağmen artmıyorsa ısıtma devresinde bir kopukluk vardır. Bulaşığın yağlı çıkması ve buhar oluşmaması bunu destekler.",
        ],
      },
      {
        h: "Rezistans mı, kontaktör mü?",
        p: [
          "Rezistans yandığında direnç ölçümü sonsuz çıkar; gövdeye kaçak varsa izolasyon bozulmuştur ve kaçak akım rölesi atar. Kontaktör arızasında ise rezistans sağlamdır, ancak üzerine gerilim gitmez.",
          "Ayrım basit görünse de ölçüm trifaze pano üzerinde, gerilim altında yapılır. Bu nedenle işletme personelinin müdahale etmesi hem tehlikeli hem de yanıltıcıdır.",
        ],
      },
      {
        h: "Termostat ve NTC sensörü",
        p: [
          "Sensör hatalı okuduğunda kart 'sıcaklık yeterli' sanır ve ısıtmayı hiç başlatmaz. Bu durumda rezistans da kontaktör de sağlamdır. Sensör değişimi en ucuz çözümdür, ancak ancak doğru teşhisle bulunur.",
        ],
      },
      {
        h: "Kireç: rezistansı öldüren asıl sebep",
        p: [
          "Rezistans üzerinde biriken kireç tabakası ısıyı suya aktaramaz; rezistans kendi üzerinde ısınır ve zamanla yanar. Bu yüzden rezistans değişimi tek başına yeterli değildir — kireç kaynağı da giderilmelidir.",
          "Aylık kireç çözme çevrimi ve su sertliği yüksekse yumuşatma sistemi, yeni rezistansın ömrünü kat kat uzatır.",
        ],
      },
      {
        h: "Giyotin tip modellerde ek kontrol",
        p: [
          "OBM 1080 gibi giyotin tip makinelerde kapak mekanizması ve mikro switch, ısıtma devresini de etkileyebilir. Kapak tam kapanmadığında makine bazı çevrimleri hiç başlatmaz.",
        ],
      },
    ],
    conclusion:
      "Isıtma arızasında doğru teşhis, gereksiz parça değişimini önler. Öztiryakiler bulaşık makinelerine İstanbul Avrupa Yakası genelinde aynı gün servis veriyoruz.",
    related: [
      { label: "Öztiryakiler Bulaşık Makinesi Servisi", href: "/oztiryakiler-bulasik-makinesi-servisi" },
      { label: "Beyoğlu Öztiryakiler Servisi", href: "/beyoglu-oztiryakiler-bulasik-makinesi-servisi" },
      { label: "Bakırköy Öztiryakiler Servisi", href: "/bakirkoy-oztiryakiler-bulasik-makinesi-servisi" },
    ],
  },
  {
    slug: "sanayi-tipi-bulasik-makinesi-kirec-cozme",
    title: "Sanayi Tipi Bulaşık Makinesi Kireç Çözme: Doğru Yöntem",
    description:
      "Endüstriyel bulaşık makinesinde kireç çözme nasıl yapılır? Doğru ürün, uygulama sırası, sıklık ve yapılmaması gerekenler. Su sertliği ve yumuşatma sistemi rehberi.",
    date: "2026-07-12",
    category: "Bakım",
    readMinutes: 6,
    excerpt:
      "İstanbul'un su sertliği, endüstriyel bulaşık makinelerinde arızaların birinci sebebi. Doğru kireç çözme rutini makine ömrünü belirgin biçimde uzatıyor.",
    intro:
      "Endüstriyel bulaşık makinelerinde gördüğümüz arızaların büyük bölümünün arkasında tek bir sebep var: kireç. Boylerde ve rezistansta biriken kireç önce ısıtmayı yavaşlatır, sonra durulama memelerini daraltır, en sonunda rezistansı yakar. İyi haber, bunun tamamen önlenebilir olması.",
    sections: [
      {
        h: "Kireç birikimini nasıl fark edersiniz?",
        p: [
          "İlk işaret çevrim süresinin uzamasıdır: makine hedef sıcaklığa geç ulaşır. İkinci işaret bulaşıkta ve bardakta beliren mat beyaz izdir. Üçüncüsü ise durulama basıncının düşmesidir.",
          "Hazne içindeki paslanmaz yüzeyde pütürlü, beyazımsı bir tabaka görüyorsanız birikim ilerlemiş demektir.",
        ],
      },
      {
        h: "Doğru ürün: asit bazlı kireç çözücü",
        p: [
          "Endüstriyel bulaşık makineleri için üretilmiş asit bazlı kireç çözücüler kullanılmalıdır. Sirke, limon tuzu veya bilinçsiz asit kullanımı paslanmaz yüzeye, contalara ve pompa salmastrasına zarar verir.",
          "Ürün dozajı üretici talimatına göre hesaplanır; 'daha fazlası daha iyi' yaklaşımı burada geçerli değildir.",
        ],
      },
      {
        h: "Uygulama sırası",
        p: [
          "Hazne boşaltılır ve filtreler temizlenir. Temiz su ile doldurulup kireç çözücü dozlanır, makine boş sepetle birkaç çevrim çalıştırılır. Ardından hazne boşaltılır ve en az iki kez temiz suyla durulanır.",
          "Boyler tarafındaki kireç, hazne çevriminden farklı bir işlemdir ve genellikle servis müdahalesi gerektirir. Durulama sıcaklığı düşmüşse asıl birikim boylerdedir.",
        ],
      },
      {
        h: "Ne sıklıkla yapılmalı?",
        p: [
          "Kural, su sertliğine ve günlük çevrim sayısına bağlıdır. Yoğun kullanılan bir restoran mutfağında aylık, orta yoğunlukta iki üç ayda bir uygundur. Su sertliğinizi bilmiyorsanız basit bir sertlik testiyle ölçtürün; rutin buna göre kurulur.",
        ],
      },
      {
        h: "Kalıcı çözüm: su yumuşatma",
        p: [
          "Sertliği yüksek bölgelerde kireç çözme bir bakım işlemi değil, sürekli bir masraf haline gelir. Reçineli yumuşatma sistemi veya dahili yumuşatıcılı (SD tipi) makine, uzun vadede hem rezistans hem işçilik maliyetini düşürür.",
          "Dahili yumuşatıcılı modellerde tuz seviyesi takip edilmezse sistem çalışmaz; bu ihmal, yumuşatıcısız makineden daha kötü sonuç verir.",
        ],
      },
      {
        h: "Yapılmaması gerekenler",
        p: [
          "Makine sıcakken yoğun asit dozlamayın, kireç çözücüyü deterjanla karıştırmayın, işlem sonrası durulamayı atlamayın ve çözücüyü hazne içinde bekletip unutmayın.",
        ],
      },
    ],
    conclusion:
      "Kireç çözme rutinini kurmak, endüstriyel bulaşık makinesinde yapılabilecek en yüksek getirili bakım işlemidir. Periyodik bakım planı için bize ulaşabilirsiniz.",
    related: [
      { label: "Sanayi Tipi Bulaşık Makinesi Servisi", href: "/sanayi-tipi-bulasik-makinesi-servisi" },
      { label: "Deterjan & Parlatıcı Satışı", href: "/deterjan-parlatici-servisi" },
    ],
  },
  {
    slug: "restoran-bulasik-makinesi-kapasite-secimi",
    title: "Restoran Mutfağınız İçin Doğru Bulaşık Makinesi Kapasitesi",
    description:
      "Endüstriyel bulaşık makinesi kapasitesi nasıl seçilir? Tezgâh altı, giyotin tip ve konveyörlü modeller arasındaki fark, sepet/saat hesabı ve tipik seçim hataları.",
    date: "2026-06-28",
    category: "Rehber",
    readMinutes: 7,
    excerpt:
      "Kapasitesi yetmeyen makine sadece yavaş çalışmaz; sürekli zorlandığı için çok daha erken arızalanır. Doğru seçimin basit bir hesabı var.",
    intro:
      "Endüstriyel bulaşık makinesi seçiminde en sık yapılan hata, makineyi ortalama iş hacmine göre seçmektir. Oysa belirleyici olan ortalama değil, en yoğun servis saatidir. Kapasitesi yetmeyen makine hem servisi yavaşlatır hem de sürekli sınırında çalıştığı için pompadan rezistansa kadar her parçayı erken yıpratır.",
    sections: [
      {
        h: "Önce yoğun saat hesabı",
        p: [
          "Günlük toplam kapak sayısını değil, en yoğun bir saatte çıkan tabak, bardak ve tencere miktarını hesaplayın. Bu sayıyı standart sepete bölerek saatte kaç sepet yıkamanız gerektiğini bulursunuz.",
          "Makine kataloglarındaki 'saatte X sepet' değeri en kısa programa göredir. Gerçek mutfakta yağlı bulaşık daha uzun program ister; bu yüzden katalog değerinin yaklaşık üçte ikisini gerçekçi kapasite olarak kabul edin.",
        ],
      },
      {
        h: "Tezgâh altı (set altı) modeller",
        p: [
          "35x35 ve 40x40 sepetli modeller ağırlıklı bardak ve fincan yıkama içindir; kafe ve barlar için idealdir. 50x50 sepetli 500 serisi modeller küçük ve orta ölçekli restoranların tabak yükünü karşılar.",
          "Tezgâh altı makineyi tencere ve tepsi yıkamaya zorlamak, en sık gördüğümüz kapasite hatasıdır.",
        ],
      },
      {
        h: "Giyotin (hood) tip modeller",
        p: [
          "1000 serisi giyotin tip makineler, üstten açılan kapağıyla sepetin hızlı giriş çıkışını sağlar ve orta-yüksek hacimli mutfakların standart çözümüdür. Yan tezgâh düzeni doğru kurulduğunda verim belirgin artar.",
        ],
      },
      {
        h: "Konveyörlü ve tünel tip sistemler",
        p: [
          "Otel, hastane, yemek fabrikası ve büyük yemekhanelerde konveyörlü veya tünel tip hat gerekir. Bu sistemlerde bant hızı, bölge sıcaklıkları ve kurutma ünitesi birlikte planlanmalıdır.",
          "Tünel sistemler yüksek su ve enerji tüketimi getirir; ısı geri kazanım üniteli modeller uzun vadede işletme maliyetini düşürür.",
        ],
      },
      {
        h: "Kapasite dışında belirleyici üç faktör",
        p: [
          "Su sertliği: sert bölgelerde dahili yumuşatıcılı model veya harici sistem şarttır.",
          "Elektrik altyapısı: yüksek kapasiteli modeller trifaze ve yeterli kesitte hat ister; mevcut panonuz buna uygun olmayabilir.",
          "Tahliye ve havalandırma: giyotin ve tünel tip makineler yoğun buhar üretir; mutfak havalandırması buna göre planlanmalıdır.",
        ],
      },
      {
        h: "Kurulum ve devreye alma",
        p: [
          "Doğru seçilmiş bir makine yanlış kurulumda hedeflenen performansı vermez. Su bağlantı basıncı, tahliye eğimi, elektrik hattı ve ilk dozaj kalibrasyonu devreye alma sırasında yapılmalıdır.",
        ],
      },
    ],
    conclusion:
      "Mutfağınıza uygun kapasiteyi belirlemek için mevcut yoğunluğunuzu birlikte değerlendirebiliriz. Kurulum, devreye alma ve dozaj kalibrasyonu hizmetlerimiz arasındadır.",
    related: [
      { label: "Endüstriyel Bulaşık Makinesi Tamircisi", href: "/endustriyel-bulasik-makinesi-tamircisi" },
      { label: "Sanayi Tipi Bulaşık Makinesi Servisi", href: "/sanayi-tipi-bulasik-makinesi-servisi" },
    ],
  },
  {
    slug: "dozaj-pompasi-ayari-deterjan-tuketimi",
    title: "Bulaşık Makinesi Dozaj Pompası Ayarı ve Deterjan Tüketimi",
    description:
      "Endüstriyel bulaşık makinesinde deterjan ve parlatıcı dozaj pompası nasıl ayarlanır? Aşırı tüketim, leke ve köpük sorunlarının dozajla ilişkisi.",
    date: "2026-06-10",
    category: "Bakım",
    readMinutes: 5,
    excerpt:
      "Deterjan faturanız beklenenden yüksekse ya da bardaklar lekeli çıkıyorsa, sorun büyük olasılıkla makinede değil dozaj ayarındadır.",
    intro:
      "Endüstriyel bulaşık makinelerinde deterjan ve parlatıcı, peristaltik dozaj pompalarıyla otomatik olarak verilir. Bu pompalar bir kez ayarlanıp unutulduğunda iki sonuçtan biri çıkar: ya gereğinden fazla ürün tüketilir ya da yıkama kalitesi düşer. İkisi de kolayca düzeltilebilir.",
    sections: [
      {
        h: "Dozaj yetersizse ne olur?",
        p: [
          "Bulaşıkta yemek artığı ve yağ filmi kalır, bardakta mat iz oluşur. İşletmeler bunu genellikle 'makine yıkamıyor' diye yorumlar ve servis çağırır; oysa çoğu vakada dozaj hortumu yıpranmıştır.",
        ],
      },
      {
        h: "Dozaj fazlaysa ne olur?",
        p: [
          "Fazla deterjan köpük yapar, köpük yıkama basıncını düşürür. Fazla parlatıcı ise bardakta gökkuşağı benzeri iz bırakır ve içecek köpüğünü söndürür. Her ikisi de gereksiz maliyet demektir.",
        ],
      },
      {
        h: "Hortum yıpranması: en sık sebep",
        p: [
          "Peristaltik pompanın hortumu sürekli sıkıştırıldığı için yorulur ve yoğun kullanımda ortalama 8–12 ayda bir değişmelidir. Bidonda seviyenin düşmemesi, hortumun yırtıldığının en net işaretidir.",
          "Emiş süzgecinin ürün içinde kalmış tortuyla tıkanması da aynı belirtiyi verir.",
        ],
      },
      {
        h: "Doğru ayarın mantığı",
        p: [
          "Dozaj, su sertliğine ve bulaşık kirlilik derecesine göre belirlenir. Sert suda daha yüksek deterjan, yumuşak suda daha düşük dozaj gerekir. Ayar, üretici tablosundaki değerden başlanıp yıkama sonucuna göre ince ayarlanır.",
          "Ölçüm için basit bir yöntem: bilinen hacimde ürünü belirli sayıda çevrimde tüketilen miktarla karşılaştırmak. Böylece çevrim başına gerçek tüketim ortaya çıkar.",
        ],
      },
      {
        h: "Ürün seçimi dozajdan önce gelir",
        p: [
          "Ev tipi veya düşük kaliteli deterjan, doğru dozajda bile aşırı köpük yapar ve makineye zarar verir. Endüstriyel makinelerde düşük köpüklü, su sertliğine uygun profesyonel ürünler kullanılmalıdır.",
        ],
      },
    ],
    conclusion:
      "Dozaj kalibrasyonu kısa süren ama tüketimi ve yıkama kalitesini doğrudan etkileyen bir işlemdir. Bakım ziyaretlerimizde dozaj ayarını standart olarak kontrol ediyoruz.",
    related: [
      { label: "Deterjan & Parlatıcı Satışı", href: "/deterjan-parlatici-servisi" },
      { label: "Endüstriyel Bulaşık Makinesi Tamircisi", href: "/endustriyel-bulasik-makinesi-tamircisi" },
    ],
  },
  {
    slug: "endustriyel-bulasik-makinesi-yikamiyor-nedenleri",
    title: "Endüstriyel Bulaşık Makinesi Yıkamıyor: 8 Yaygın Neden ve Çözümü",
    description:
      "Endüstriyel bulaşık makinesi neden iyi yıkamıyor? Su almama, ısıtmama, dozaj ve püskürtme arızalarının nedenleri ve pratik çözümleri. İstanbul Avrupa Yakası servis desteği.",
    date: "2026-01-15",
    category: "Arıza & Çözüm",
    readMinutes: 6,
    excerpt:
      "Bulaşıklar temiz çıkmıyor, üzerinde leke veya yemek artığı kalıyorsa sorun genelde birkaç temel nedenden kaynaklanır. İşte en sık karşılaşılan 8 neden ve çözümü.",
    intro:
      "Endüstriyel (sanayi tipi) bulaşık makinenizin bulaşıkları iyi yıkamaması restoran, otel ve toplu mutfaklarda iş akışını doğrudan etkiler. Çoğu durumda sorun büyük bir arıza değil, ihmal edilen basit bir bakım kalemidir. Aşağıda en sık karşılaşılan nedenleri ve ne yapmanız gerektiğini sıraladık.",
    sections: [
      {
        h: "1. Püskürtme (yıkama) kollarının tıkanması",
        p: [
          "Yıkama kollarındaki delikler kireç, yemek artığı veya kürdan gibi yabancı maddelerle tıkanınca su bulaşıklara yeterli basınçla ulaşamaz. Kolları söküp deliklerini temizlemek çoğu zaman sorunu çözer.",
          "Kollar rahat dönmüyorsa yatağı aşınmış olabilir; bu durumda parça değişimi gerekir.",
        ],
      },
      {
        h: "2. Su sıcaklığının düşük olması",
        p: [
          "Endüstriyel makinelerde yıkama suyu genellikle 55-65°C, durulama suyu 80-85°C civarında olmalıdır. Rezistans veya boyler arızasında su ısınmaz, yağ çözülmez ve bulaşık yağlı kalır.",
          "Isıtma sorunlarında termostat, rezistans ve kontaktör kontrol edilmelidir.",
        ],
      },
      {
        h: "3. Deterjan ve parlatıcı dozajının bozuk olması",
        p: [
          "Otomatik dozaj pompası az deterjan verirse bulaşık temizlenmez, parlatıcı az olursa üzerinde su lekesi kalır. Dozaj ayarları ve pompa hortumları düzenli kontrol edilmelidir.",
          "Doğru ürün seçimi de kritiktir; su sertliğine uygun olmayan deterjan verim düşürür.",
        ],
      },
      {
        h: "4. Kireçlenme (kalker birikmesi)",
        p: [
          "Sert su, boyler ve rezistanslarda kireç birikmesine yol açar. Kireç hem ısıtmayı zorlaştırır hem de püskürtme deliklerini daraltır. Periyodik kireç çözme ve su yumuşatma sistemi şarttır.",
        ],
      },
      {
        h: "5. Filtrelerin kirli olması",
        p: [
          "Tıkalı filtreler suyun sirkülasyonunu bozar ve kirli suyun tekrar bulaşığa gelmesine neden olur. Filtreler her vardiya sonunda temizlenmelidir.",
        ],
      },
      {
        h: "6. Yetersiz su seviyesi veya basınç",
        p: [
          "Su almama, düşük şebeke basıncı veya arızalı su alma valfi (selenoid) nedeniyle hazne yeterince dolmazsa yıkama performansı düşer.",
        ],
      },
      {
        h: "7. Yanlış yükleme ve sepet kullanımı",
        p: [
          "Bulaşıkların üst üste veya yanlış sepete dizilmesi suyun her yüzeye ulaşmasını engeller. Doğru sepet ve uygun yerleştirme önemlidir.",
        ],
      },
      {
        h: "8. Elektronik kart / program arızası",
        p: [
          "Dijital modellerde kart arızası yıkama sürelerini ve sıcaklıkları bozabilir. Bu tür arızalarda uzman servis müdahalesi gerekir.",
        ],
      },
    ],
    conclusion:
      "Bu adımları uyguladığınız halde makineniz hâlâ iyi yıkamıyorsa, arıza rezistans, pompa veya elektronik kart kaynaklı olabilir. İstanbul Avrupa Yakası genelinde tüm markalara aynı gün endüstriyel bulaşık makinesi servisi veriyoruz; hemen arayın.",
  },
  {
    slug: "sanayi-tipi-bulasik-makinesi-bakimi",
    title: "Sanayi Tipi Bulaşık Makinesi Bakımı: Ömrünü Uzatan 10 İpucu",
    description:
      "Sanayi tipi bulaşık makinesi bakımı nasıl yapılır? Günlük, haftalık ve aylık bakım adımları, kireç çözme ve arıza önleme ipuçları. Periyodik bakımla makine ömrünü uzatın.",
    date: "2026-02-03",
    category: "Bakım",
    readMinutes: 5,
    excerpt:
      "Düzenli bakım, arızaları önler ve makinenizin ömrünü yıllarca uzatır. İşte her işletmenin uygulaması gereken 10 pratik bakım ipucu.",
    intro:
      "Endüstriyel bulaşık makineleri yoğun kullanım altında çalışır. Küçük ama düzenli bakım rutinleri, hem beklenmedik arızaları hem de yüksek tamir maliyetlerini önler. Aşağıdaki bakım takvimini uygulayarak makinenizi uzun yıllar sorunsuz kullanabilirsiniz.",
    sections: [
      {
        h: "Günlük bakım",
        p: [
          "Her vardiya sonunda hazneyi boşaltın, filtreleri çıkarıp temizleyin ve yıkama kollarını kontrol edin. Kapı contalarını nemli bezle silin. Makineyi kapağı açık bırakarak havalandırın; bu, koku ve bakteri oluşumunu önler.",
        ],
      },
      {
        h: "Haftalık bakım",
        p: [
          "Püskürtme kollarını söküp deliklerini iyice temizleyin. Durulama memelerini kontrol edin. Deterjan ve parlatıcı seviyelerini ve dozaj hortumlarını gözden geçirin.",
        ],
      },
      {
        h: "Aylık bakım ve kireç çözme",
        p: [
          "Su sertliğine bağlı olarak ayda bir kireç çözme (kalker temizliği) yapın. Kireç, rezistans ve boylerin en büyük düşmanıdır. Su yumuşatma sisteminiz varsa tuz seviyesini kontrol edin.",
        ],
      },
      {
        h: "Su yumuşatma sistemi kullanın",
        p: [
          "Sert su bölgelerinde su yumuşatma sistemi, hem bulaşık kalitesini artırır hem de kireç kaynaklı arızaları büyük ölçüde azaltır. Uzun vadede en kârlı yatırımlardan biridir.",
        ],
      },
      {
        h: "Doğru deterjan ve parlatıcı kullanın",
        p: [
          "Makinenize ve suyunuza uygun profesyonel ürünler kullanın. Ev tipi deterjanlar endüstriyel makinelere zarar verir ve verimi düşürür.",
        ],
      },
      {
        h: "Periyodik profesyonel bakım anlaşması yapın",
        p: [
          "Yılda 2-4 kez uzman servis tarafından yapılan kontrol; rezistans, pompa, conta ve elektronik aksamın erken kontrolünü sağlar. Periyodik bakım, ani duruşları önlemenin en etkili yoludur.",
        ],
      },
    ],
    conclusion:
      "Düzenli bakım hem hijyen hem de bütçe açısından kazandırır. Sanayi tipi bulaşık makinenizin periyodik bakımı için İstanbul Avrupa Yakası servis ekibimizle iletişime geçebilirsiniz.",
  },
  {
    slug: "endustriyel-bulasik-makinesi-deterjani-parlatici-secimi",
    title: "Endüstriyel Bulaşık Makinesi Deterjanı ve Parlatıcı Nasıl Seçilir?",
    description:
      "Endüstriyel bulaşık makinesi deterjanı ve parlatıcı seçimi: su sertliği, dozaj, köpük ve maliyet. Doğru kimyasalla parlak bulaşık ve uzun makine ömrü.",
    date: "2026-02-20",
    category: "Deterjan & Parlatıcı",
    readMinutes: 4,
    excerpt:
      "Doğru deterjan ve parlatıcı, hem bulaşık kalitesini hem de makine ömrünü belirler. Seçim yaparken nelere dikkat etmelisiniz?",
    intro:
      "Endüstriyel bulaşık makinelerinde kullanılan kimyasallar, ev tipi ürünlerden tamamen farklıdır. Yanlış ürün seçimi lekeli bulaşık, köpük taşması ve makine arızalarına yol açar. İşte doğru seçim için dikkat etmeniz gerekenler.",
    sections: [
      {
        h: "Su sertliğinize uygun ürün seçin",
        p: [
          "Su sertliği yüksek bölgelerde daha güçlü kireç önleyici içeren deterjanlar gerekir. Su testi yaptırarak doğru formülü belirlemek verimliliği artırır.",
        ],
      },
      {
        h: "Düşük köpüklü (endüstriyel) deterjan kullanın",
        p: [
          "Endüstriyel makineler yüksek basınçla çalışır; ev tipi köpüklü deterjanlar köpük taşmasına ve pompanın zorlanmasına neden olur. Mutlaka düşük köpüklü profesyonel ürün tercih edin.",
        ],
      },
      {
        h: "Parlatıcı ile leke ve su izini önleyin",
        p: [
          "Parlatıcı, durulama sırasında suyun yüzeyden hızlı akmasını sağlayarak leke ve su izi bırakmadan kurumayı sağlar. Özellikle bardak ve çelik ürünlerde fark yaratır.",
        ],
      },
      {
        h: "Otomatik dozaj sistemi şart",
        p: [
          "Elle dozaj hem israfa hem de tutarsız sonuçlara yol açar. Otomatik dozaj pompası doğru miktarı garanti eder, maliyeti düşürür ve sonuçları standartlaştırır.",
        ],
      },
      {
        h: "Maliyet hesabını doğru yapın",
        p: [
          "Ucuz ürün her zaman ekonomik değildir. Doğru dozajla kullanılan kaliteli bir deterjan, yıkama başına daha düşük maliyet ve daha az arıza demektir.",
        ],
      },
    ],
    conclusion:
      "Makinenize ve suyunuza uygun deterjan, parlatıcı ve dozaj sistemi için bize danışabilirsiniz. Ürün satışı ve dozaj kurulumu hizmeti veriyoruz.",
  },
  {
    slug: "konveyorlu-mu-giyotin-tip-mi-bulasik-makinesi-secimi",
    title: "Konveyörlü mü Giyotin Tip mi? Doğru Endüstriyel Bulaşık Makinesi Seçimi",
    description:
      "İşletmeniz için hangi endüstriyel bulaşık makinesi uygun? Giyotin (hood) tip, konveyörlü ve tezgah altı modellerin kapasite, alan ve maliyet karşılaştırması.",
    date: "2026-03-10",
    category: "Rehber",
    readMinutes: 5,
    excerpt:
      "Bardak yıkamadan tünel tipe kadar farklı makine tipleri var. İşletmenizin kapasitesine en uygun modeli nasıl seçersiniz?",
    intro:
      "Doğru endüstriyel bulaşık makinesi seçimi; işletmenizin bulaşık hacmine, mutfak alanına ve bütçesine bağlıdır. Yanlış kapasite seçimi ya darboğaz ya da gereksiz maliyet yaratır. İşte ana makine tiplerinin karşılaştırması.",
    sections: [
      {
        h: "Tezgah altı (set altı) modeller",
        p: [
          "Kafe, bar ve küçük restoranlar için idealdir. Az yer kaplar, bardak ve tabak yıkamada hızlıdır. Saatte yaklaşık 500-1000 parça kapasitesi sunar.",
        ],
      },
      {
        h: "Giyotin (hood) tip modeller",
        p: [
          "Orta ölçekli restoran ve otel mutfakları için uygundur. Üstten açılan kapağıyla yüksek tencere ve tepsileri de yıkar. Sepetli çalışır, personel dostudur.",
        ],
      },
      {
        h: "Konveyörlü (rack type) modeller",
        p: [
          "Yüksek hacimli mutfaklar için sepetlerin otomatik ilerlediği sistemlerdir. Sürekli akışta yüksek kapasite sağlar; büyük oteller ve toplu yemek üreticileri için uygundur.",
        ],
      },
      {
        h: "Tünel tip / flight modeller",
        p: [
          "En yüksek kapasiteli çözümdür. Bulaşıklar sepetsiz olarak bant üzerinde ilerler. Hastane, fabrika ve büyük catering tesisleri için tasarlanmıştır.",
        ],
      },
      {
        h: "Seçerken nelere dikkat etmeli?",
        p: [
          "Saatlik bulaşık hacmi, mevcut mutfak alanı, su ve elektrik altyapısı, personel sayısı ve bütçe temel kriterlerdir. Ayrıca yedek parça ve servis erişilebilirliği, uzun vadede kritik önem taşır.",
        ],
      },
    ],
    conclusion:
      "Hangi makinenin işletmenize uygun olduğuna karar veremiyorsanız, kurulum ve servis konusunda size danışmanlık verebiliriz. Tüm marka ve modellere servis sağlıyoruz.",
  },
  {
    slug: "endustriyel-bulasik-makinesi-su-almiyor",
    title: "Endüstriyel Bulaşık Makinesi Su Almıyor: Nedenleri ve Çözümü",
    description:
      "Endüstriyel bulaşık makinesi su almıyorsa nedeni ne olabilir? Su giriş valfi, basınç, filtre ve şamandıra arızaları ve pratik çözümleri.",
    date: "2026-03-22",
    category: "Arıza & Çözüm",
    readMinutes: 4,
    excerpt:
      "Makine hazneyi doldurmuyorsa yıkama başlamaz. Su almama sorununun en yaygın nedenlerini ve kontrol adımlarını sıraladık.",
    intro:
      "Endüstriyel bulaşık makinenizin su almaması, yıkama sürecini tamamen durduran yaygın bir arızadır. Sorun çoğu zaman su giriş hattı veya basit bir bileşenle ilgilidir. İşte kontrol etmeniz gerekenler.",
    sections: [
      {
        h: "Su giriş vanası açık mı?",
        p: [
          "Basit görünse de en sık atlanan nokta budur. Makineye giden su vanasının tam açık olduğundan ve şebeke suyunun kesik olmadığından emin olun.",
        ],
      },
      {
        h: "Su giriş valfi (selenoid) arızası",
        p: [
          "Elektrikle açılıp kapanan selenoid valf arızalanırsa makine su alamaz. Valfin bobini yanmış veya içi kireçle tıkanmış olabilir; genellikle değişimi gerekir.",
        ],
      },
      {
        h: "Düşük şebeke basıncı",
        p: [
          "Endüstriyel makineler belirli bir su basıncına ihtiyaç duyar. Basınç düşükse hazne yeterince dolmaz. Basınç düşürücü veya hat sorunları kontrol edilmelidir.",
        ],
      },
      {
        h: "Giriş filtresi tıkanması",
        p: [
          "Su giriş noktasındaki küçük filtre kireç ve tortuyla tıkanabilir. Filtreyi söküp temizlemek çoğu zaman sorunu çözer.",
        ],
      },
      {
        h: "Şamandıra / seviye sensörü arızası",
        p: [
          "Hazne su seviyesini algılayan şamandıra veya prosestat arızalıysa makine suyu ya hiç almaz ya da eksik alır. Bu parçaların kontrolü uzman gerektirir.",
        ],
      },
    ],
    conclusion:
      "Bu kontrolleri yaptığınız halde makineniz su almıyorsa, selenoid valf veya seviye sensörü değişimi gerekebilir. İstanbul Avrupa Yakası genelinde aynı gün servis için bize ulaşın.",
  },
  {
    slug: "bulasik-makinesi-isitmiyor-rezistans-boyler",
    title: "Bulaşık Makinesi Su Isıtmıyor: Rezistans ve Boyler Arızaları",
    description:
      "Endüstriyel bulaşık makinesi suyu ısıtmıyorsa bulaşık yağlı kalır. Rezistans, termostat, boyler ve kontaktör arızalarının belirtileri ve çözümü.",
    date: "2026-04-05",
    category: "Arıza & Çözüm",
    readMinutes: 5,
    excerpt:
      "Su yeterince ısınmazsa yağ çözülmez ve bulaşık temizlenmez. Isıtma arızalarının kaynağını ve çözümünü açıklıyoruz.",
    intro:
      "Endüstriyel bulaşık makinelerinde yıkama ve durulama suyunun doğru sıcaklıkta olması, hem temizlik hem de hijyen için şarttır. Su ısınmıyorsa sorun genellikle ısıtma devresindeki bir bileşendir.",
    sections: [
      {
        h: "Rezistans arızası",
        p: [
          "Suyu ısıtan rezistans zamanla yanabilir veya kireç tabakasıyla kaplanıp verimini kaybedebilir. Yanmış rezistans hiç ısıtmazken, kireçli rezistans yavaş ısıtır.",
        ],
      },
      {
        h: "Termostat ve sıcaklık sensörü",
        p: [
          "Arızalı termostat, suyun hedef sıcaklığa ulaşmadan ısıtmayı durdurabilir veya hiç başlatmayabilir. Sensör değerleri kontrol edilmelidir.",
        ],
      },
      {
        h: "Boyler (durulama su ısıtıcısı) sorunları",
        p: [
          "Durulama suyunu ısıtan boylerdeki kireç birikimi en yaygın sorundur. Düzenli kireç çözme boyler ömrünü ciddi şekilde uzatır.",
        ],
      },
      {
        h: "Kontaktör ve elektrik bağlantıları",
        p: [
          "Rezistansa giden yüksek akımı yöneten kontaktör arızalanırsa ısıtma devreye girmez. Gevşek veya yanmış bağlantılar da benzer belirti verir; bu kontroller yetkin bir teknisyen tarafından yapılmalıdır.",
        ],
      },
    ],
    conclusion:
      "Isıtma arızaları elektrikle ilgili olduğu için güvenlik açısından uzman müdahalesi gerektirir. Rezistans, boyler ve termostat değişimi için servis ekibimizle iletişime geçin.",
  },
  {
    slug: "endustriyel-bulasik-makinesinde-kirec-sorunu-su-yumusatma",
    title: "Endüstriyel Bulaşık Makinesinde Kireç Sorunu ve Su Yumuşatma",
    description:
      "Kireç, endüstriyel bulaşık makinelerinin en büyük düşmanıdır. Kireçlenme belirtileri, kireç çözme yöntemleri ve su yumuşatma sisteminin faydaları.",
    date: "2026-04-18",
    category: "Bakım",
    readMinutes: 5,
    excerpt:
      "Sert su, rezistans ve boyleri kireçle kaplayıp arızaya yol açar. Kireç sorununu nasıl önlersiniz ve su yumuşatma neden önemli?",
    intro:
      "Türkiye'nin birçok bölgesinde şebeke suyu serttir. Sert su, endüstriyel bulaşık makinelerinde kireç birikimine yol açarak hem performansı düşürür hem de arıza riskini artırır. Bu yazıda kireçle mücadeleyi ele alıyoruz.",
    sections: [
      {
        h: "Kireçlenmenin belirtileri",
        p: [
          "Bulaşıkta ve bardaklarda beyaz iz, ısıtmada yavaşlama, artan enerji tüketimi ve püskürtme deliklerinde tıkanma kireçlenmenin tipik işaretleridir.",
        ],
      },
      {
        h: "Düzenli kireç çözme",
        p: [
          "Suyun sertliğine göre ayda bir veya birkaç haftada bir kireç çözme işlemi yapılmalıdır. Özel kireç çözücü ürünlerle boyler ve haznenin bakımı yapılır.",
        ],
      },
      {
        h: "Su yumuşatma sistemi",
        p: [
          "Su yumuşatma (arıtma) sistemi, suyu makineye girmeden yumuşatarak kireç oluşumunu kaynağında engeller. Hem bulaşık kalitesini artırır hem de arıza sıklığını ciddi biçimde azaltır.",
        ],
      },
      {
        h: "Uzun vadeli tasarruf",
        p: [
          "Su yumuşatma ve düzenli kireç bakımı; rezistans, boyler ve pompa gibi pahalı parçaların ömrünü uzatır. Başlangıç maliyetini kısa sürede geri öder.",
        ],
      },
    ],
    conclusion:
      "İşletmenizin su sertliğine uygun kireç çözme ve su yumuşatma çözümleri için bize danışın. Sistem kurulumu ve periyodik bakım hizmeti veriyoruz.",
  },
  {
    slug: "restoran-otel-mutfagi-bulasik-makinesi-kapasite-hesabi",
    title: "Restoran ve Otel Mutfağı İçin Bulaşık Makinesi Kapasite Hesabı",
    description:
      "İşletmeniz için doğru bulaşık makinesi kapasitesi nasıl hesaplanır? Kişi sayısı, servis hızı ve pik saatlere göre kapasite seçimi rehberi.",
    date: "2026-05-02",
    category: "Rehber",
    readMinutes: 4,
    excerpt:
      "Yanlış kapasite ya darboğaz ya da gereksiz maliyet demek. İşletmenize uygun kapasiteyi hesaplamanın pratik yolu.",
    intro:
      "Doğru kapasitedeki bir bulaşık makinesi, mutfağınızın en yoğun saatinde bile akışı aksatmaz. Kapasiteyi belirlerken kişi sayısından çok, pik saatteki bulaşık yoğunluğuna bakmak gerekir.",
    sections: [
      {
        h: "Pik saatteki kuver sayısını belirleyin",
        p: [
          "Günün en yoğun saatinde kaç kişiye servis yaptığınızı hesaplayın. Kapasite bu ana göre seçilmelidir; ortalamaya göre değil.",
        ],
      },
      {
        h: "Parça / sepet hesabı",
        p: [
          "Her kuver için ortalama tabak, bardak ve çatal-bıçak sayısını çıkarın. Makinelerin saatlik sepet kapasitesi (rack/saat) bu ihtiyacı karşılamalıdır.",
        ],
      },
      {
        h: "Makine tipini eşleştirin",
        p: [
          "Düşük hacim için tezgah altı, orta hacim için giyotin tip, yüksek hacim için konveyörlü veya tünel tip uygundur. Kapasiteye uygun tip seçimi verimi belirler.",
        ],
      },
      {
        h: "Altyapıyı unutmayın",
        p: [
          "Seçtiğiniz makinenin su, elektrik (trifaze) ve gider altyapısını mutfağınızın karşılayabildiğinden emin olun. Kurulum öncesi keşif önemlidir.",
        ],
      },
    ],
    conclusion:
      "İşletmenize en uygun kapasiteyi ve modeli birlikte belirleyelim. Keşif, kurulum ve devreye alma hizmeti için bize ulaşın.",
  },
  {
    slug: "bulasik-makinesi-su-kaciriyor-conta-sizinti",
    title: "Bulaşık Makinesi Su Kaçırıyor: Conta ve Sızıntı Sorunları",
    description:
      "Endüstriyel bulaşık makinesi su kaçırıyorsa nedeni kapı contası, hortum veya pompa olabilir. Sızıntı nedenleri ve çözümleri.",
    date: "2026-05-16",
    category: "Arıza & Çözüm",
    readMinutes: 4,
    excerpt:
      "Makinenin altında veya önünde su birikmesi hem tehlikeli hem de arıza habercisidir. Sızıntının kaynağını bulmanın yolu.",
    intro:
      "Su kaçağı, endüstriyel bulaşık makinelerinde hem kayganlık kaynaklı iş güvenliği riski hem de elektrik tehlikesi oluşturur. Sızıntının kaynağını hızlıca tespit etmek önemlidir.",
    sections: [
      {
        h: "Kapı contası aşınması",
        p: [
          "En yaygın sızıntı nedeni yıpranmış veya sertleşmiş kapı contasıdır. Conta esnekliğini kaybettiğinde su ön taraftan sızar. Conta değişimi basit ve etkili bir çözümdür.",
        ],
      },
      {
        h: "Hortum ve kelepçe gevşekliği",
        p: [
          "İç hortum bağlantılarındaki gevşeme veya çatlak, makine altında su birikmesine yol açar. Kelepçeler ve hortumlar kontrol edilmelidir.",
        ],
      },
      {
        h: "Pompa ve salmastra arızası",
        p: [
          "Sirkülasyon veya tahliye pompasının salmastrası aşındığında pompadan su damlar. Bu durumda pompa bakımı veya değişimi gerekir.",
        ],
      },
      {
        h: "Hazne çatlağı veya tıkalı taşma",
        p: [
          "Nadiren de olsa hazne çatlağı veya tıkalı taşma borusu sızıntıya neden olabilir. Bu tür durumlar uzman değerlendirmesi ister.",
        ],
      },
    ],
    conclusion:
      "Su kaçağını görmezden gelmek daha büyük arızalara ve güvenlik riskine yol açar. Conta, hortum ve pompa müdahaleleri için aynı gün servis desteği alın.",
  },
  {
    slug: "bardaklar-lekeli-cikiyor-parlak-bardak-ipuclari",
    title: "Bardaklar Lekeli Çıkıyor: Parlak Bardak İçin 6 İpucu",
    description:
      "Endüstriyel bulaşık makinesinde bardaklar lekeli veya mat çıkıyorsa nedeni parlatıcı, su sertliği veya sıcaklık olabilir. Pırıl pırıl bardak için ipuçları.",
    date: "2026-05-28",
    category: "Bakım",
    readMinutes: 4,
    excerpt:
      "Bar ve restoranlarda lekeli bardak müşteri gözünde kötü izlenim bırakır. İşte parlak, lekesiz bardak için 6 pratik ipucu.",
    intro:
      "Özellikle cam bardaklarda leke ve matlık, hem estetik hem de hijyen algısını olumsuz etkiler. Çoğu zaman sorun makinede değil, kullanım ve kimyasal ayarlarındadır.",
    sections: [
      {
        h: "1. Parlatıcı dozajını kontrol edin",
        p: [
          "Yetersiz parlatıcı, su izlerinin en büyük nedenidir. Dozaj pompasının doğru ayarlandığından ve parlatıcının bittiğinden emin olun.",
        ],
      },
      {
        h: "2. Su sertliğini düşürün",
        p: [
          "Sert su, kuruma sonrası beyaz kireç izi bırakır. Su yumuşatma sistemi bardak parlaklığında dramatik fark yaratır.",
        ],
      },
      {
        h: "3. Durulama sıcaklığını yükseltin",
        p: [
          "Durulama suyu yeterince sıcak değilse (ideal 80-85°C) bardaklar hızlı kurumaz ve iz bırakır.",
        ],
      },
      {
        h: "4. Doğru bardak sepeti kullanın",
        p: [
          "Bardaklara özel sepetler, su akışını ve kurumayı iyileştirir; ayrıca bardakların çizilmesini önler.",
        ],
      },
      {
        h: "5. Filtre ve kolları temiz tutun",
        p: [
          "Kirli filtre ve tıkalı püskürtme delikleri, bardakların tam durulanmasını engeller.",
        ],
      },
      {
        h: "6. Uygun deterjan seçin",
        p: [
          "Bardak yıkamaya uygun, düşük köpüklü ve su sertliğinize göre formüle edilmiş deterjan kullanın.",
        ],
      },
    ],
    conclusion:
      "Bu ayarlara rağmen bardaklarınız lekeli çıkıyorsa, dozaj sistemi veya durulama arızası olabilir. Kontrol ve doğru ürün desteği için bize ulaşın.",
  },
];

export const postPath = (p) => `/blog/${p.slug}`;
export const getPost = (slug) => posts.find((p) => p.slug === slug) || null;
export const allPostSlugs = () => posts.map((p) => p.slug);

export function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}
