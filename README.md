# Endüstriyel Bulaşık Makinesi Servisi

İstanbul Avrupa Yakası için endüstriyel / sanayi tipi bulaşık makinesi servisi web sitesi.
**Next.js 14 (App Router) + React 18 + Tailwind CSS** ile geliştirilmiştir. SEO odaklıdır.

## Kurulum

```bash
npm install
npm run dev      # geliştirme: http://localhost:3000
npm run build    # production build
npm start        # production sunucu
```

## Telefon / iletişim bilgilerini değiştirme

Tüm iletişim bilgileri tek dosyada:

**`lib/site.js`** → `phoneDisplay`, `phoneRaw`, `whatsapp`, `email` alanlarını kendi bilgilerinizle güncelleyin.

## Sayfa yapısı

- **Ana sayfa** (`/`) — Ana başlık, tüm marka kartları, Avrupa Yakası ilçe listesi, hizmetler, SSS.
- **Marka sayfaları** (24 adet) — `/{marka}-bulasik-makinesi-servisi`
  Örn: `/oztiryakiler-bulasik-makinesi-servisi`, `/empero-bulasik-makinesi-servisi`
  Her sayfada servis verilen modeller listelenir.
- **İlçe sayfaları** (25 adet) — `/{ilce}-endustriyel-bulasik-makinesi-servisi`
  Örn: `/sisli-endustriyel-bulasik-makinesi-servisi`
  Her sayfada hizmet verilen markalar listelenir.
- **Deterjan & Parlatıcı** — `/deterjan-parlatici-servisi`
- **İletişim** — `/iletisim`

## Marka / model / ilçe düzenleme

Tüm içerik **`lib/data.js`** dosyasındadır. Marka, model veya ilçe ekleyip
çıkarabilirsiniz; sayfalar ve sitemap otomatik güncellenir.

## Marka logoları ekleme

Şu an markalar premium monogram kartıyla gösterilir. Gerçek logo eklemek için:
`public/logos/{slug}.png` koyup `components/BrandCard.js` içinde monogramı `<img>` ile değiştirin.

## Yönlendirmeler (`public/_redirects`)

Cloudflare Pages `public/_redirects` dosyasını okur ve yönlendirmeler statik
dosyalardan **önce** çalışır. Şu an 48 adet marka × ilçe sayfası buradan
ilgili marka sayfasına 301 ile yönlendiriliyor.

> ⚠️ Bu sayfalar Google tarafından doorway kümesi olarak okunduğu için
> kaldırıldı. Yeniden üretmeden önce `lib/data.js` içindeki uyarıyı okuyun.

## SEO

- Her sayfada özel `title` + `description` (hedef kelimeler: *endüstriyel bulaşık
  makinesi servisi/tamircisi*, *sanayi tipi bulaşık makinesi servisi/tamircisi*).
- Otomatik `sitemap.xml` ve `robots.txt`.
- LocalBusiness, Service ve FAQ için JSON-LD yapısal veri.
- Türkçe `lang`, Open Graph etiketleri, mobil uyumlu premium tasarım.

## Yayına alma — Cloudflare Pages

Site tümüyle statiktir (`next.config.js` içinde `output: "export"`). `npm run build`
komutu `out/` klasörüne statik HTML üretir; Cloudflare Pages bunu doğrudan servis eder.

**Cloudflare Pages ayarları (Git bağlantılı):**

- Framework preset: **Next.js (Static HTML Export)**
- Build command: **`npm run build`**
- Build output directory: **`out`**
- Environment variable: **`NODE_VERSION` = `20`**

**Adımlar:**

1. Projeyi bir GitHub/GitLab deposuna yükleyin.
2. Cloudflare → Workers & Pages → Create → Pages → repoyu bağlayın.
3. Yukarıdaki build ayarlarını girin, Deploy edin.
4. Custom domains → `endustriyelbulasikmakinesiservisi.com` ekleyin.
5. **www → kök alan yönlendirmesi:** Rules → Redirect Rules → hostname
   `www.endustriyelbulasikmakinesiservisi.com` ise 301 ile köke yönlendirin.

Yerel geliştirme için `npm run dev` (http://localhost:3000).
