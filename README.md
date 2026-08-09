# DİGEM — Geleceğin Meslekleri Kariyer Portalı

**Proje türü:** Web sitesi (landing page MVP)
**Program:** Yazılım ve Tasarım için Komut Mühendisliğine Giriş Programı — Bitirme Projesi
**Hazırlayan:** Selma Çalışkan

---

## 1. Proje Adı

**DİGEM — Geleceğin Meslekleri Kariyer Portalı**
(Dijital Oyun Geliştirme ve Eğitim Merkezi'nin kariyer rehberliği web platformu, landing page MVP'si)

---

## 2. Çözülen Problem

14-24 yaş arası gençler geleceğin mesleklerini keşfederken genellikle dağınık, güvenilirliği belirsiz kaynaklara yöneliyor ve ilgi/yeteneklerini somut bir eğitim yoluna dönüştürecek tek bir rehber bulamıyor. Ayrıca çoğu kariyer/eğitim kurumu sitesi uzun, kurumsal metinlerle dolu ve gençlerin hızlı, mobil-öncelikli bilgi alma alışkanlığına uymuyor.

DİGEM portalı bu boşluğu, kullanıcıyı doğrudan aksiyona (aktif eğitimler, yetenek testi, uzman görüşmesi) yönlendiren, kısa ve görsel ağırlıklı bir arayüzle kapatmayı hedefliyor.

---

## 3. Hedef Kitle (DİGEM Perspektifi)

- 14-24 yaş arası, geleceğin mesleğini arayan gençler
- Ebeveynler ve kariyer danışmanları (çocuklarının/öğrencilerinin yönünü anlamak isteyen)
- Mobil cihazdan hızlı ve kolay bilgiye ulaşmak isteyen kullanıcılar

---

## 4. Kullanılan Yapay Zeka Araçları

- **Claude (Anthropic, Sonnet)** — proje boyunca tek AI aracı olarak kullanıldı: tasarım planlaması, HTML/CSS/JS üretimi ve içerik (kopya) yazımı için.

---

## 5. Yapay Zeka Kullanım Süreci (Prompt Örnekleri Dâhil)

Süreç, klasik "tek prompt → hazır ürün" mantığıyla değil, **rol – bağlam – görev – kısıt** yapısına oturan, çok bölümlü bir brief üzerinden ilerledi:

**1. Adım — Yapılandırılmış brief (rol/bağlam/görev/kısıt):**
Claude'a; projenin amacı, hedef kitlesi, sayfa yapısı, landing page bölümleri ve marka tasarım dili (renk paleti, tipografi tercihleri, "kamu kurumu sitesi görünümünden kaçın" gibi net kısıtlar) madde madde verildi. Örnek kısıt ifadesi:

> "Ana Renk: CANLI ve modern turuncu / Destek renk: turkuaz / vurgu: lime yeşili... Geleneksel kamu kurumu sitesi görünümünden kaçın."

Bu, prompt kalitesinin çıktı kalitesine doğrudan etkisinin görüldüğü kısımdır — net kısıtlar verilmeden önce üretilecek tasarımın generik bir "AI görünümü"ne kayma riski yüksekti; marka dilini ve tasarım prensiplerini (tipografi eşleştirmesi, layout mantığı, "signature element" seçimi) baştan tanımlamak bu riski azalttı.

**2. Adım — Tasarım planı ve gözden geçirme:**
Claude, kodlamaya geçmeden önce bir tasarım token sistemi (renk hex değerleri, tipografi rolleri, layout konsepti, "imza öğesi") önerdi ve bunu genel AI-tasarım kalıplarına (klişe renk paletleri, gereksiz numaralandırma vb.) karşı kendi içinde eledi.

**3. Adım — Üretim:**
Hero, aktif eğitimler kart grid'i, "DİGEM nedir" bloğu, işlevsel bir mini yetenek testi (3 soruluk, sonucu meslek alanına göre değişen JS mantığı) ve footer üretildi; çıktı `index.html`, `style.css` ve `script.js` olarak ayrı dosyalara bölündü.

**4. Adım — İnceleme ve isteğe bağlı iterasyon:**
Çıktı, brief'teki maddelerle (marka dili, sayfa bölümleri, CTA'lar) karşılaştırılarak kontrol edildi; eksik/uygun olmayan kısımlar için ek prompt'larla düzeltme yapılabilecek şekilde açık bırakıldı.

### Etik ve Farkındalık Notları

- **Halüsinasyon riski:** Sitede kullanılan istatistikler (ör. "3.200+ test tamamlayan genç", "%92 memnuniyet") gerçek veri değildir; tasarımı doldurmak amacıyla üretilmiş örnek içeriktir ve gerçek bir yayına geçmeden önce doğrulanmış verilerle değiştirilmesi gerekir.
- **Yanlılık:** Yetenek testindeki meslek kategorileri (oyun geliştirme, yazılım, tasarım, içerik üretimi) kasıtlı olarak dengeli ve stereotiplerden kaçınacak şekilde nötr ifadelerle yazıldı; cinsiyet veya sosyoekonomik statüye dair hiçbir varsayım içermiyor.
- **Dijital mahremiyet:** Üyelik formu yalnızca ad, e-posta ve yaş aralığı gibi minimum veriyi topluyor; formun arka planda gerçek bir veri işleme akışı yoktur (statik prototip), bu nedenle KVKK/GDPR uyumluluğu gerçek bir backend eklenmeden önce ayrıca ele alınmalıdır.

---

## 6. Projenin DİGEM'lere Katkısı

- Uzun tanıtım metinleri yerine doğrudan **aktif eğitimler ve "Başvur" CTA'ları** ile karşılaşan bir ana sayfa, gencin siteye girdiği ilk 10 saniyede aksiyon almasını kolaylaştırıyor.
- **Yetenek testi**, gençlerin ilgi alanını 2 dakikada bir meslek yönüne bağlayıp ilgili eğitime yönlendirerek, "hangi eğitime kaydolmalıyım" sorusuna somut bir cevap sunuyor.
- Mobil öncelikli, hızlı taranabilir yapı; mobilde bilgiye hızlı ulaşmak isteyen genç kullanıcı profiline uygun.

---

## 7. Kullanılabilirliğe Dair Kısa Açıklama

- Tek sayfalık, tamamen responsive (mobile-first) statik bir prototiptir; `index.html`, `style.css` ve `script.js` dosyaları aynı klasörde tutulduğu sürece herhangi bir kurulum gerektirmeden tarayıcıda doğrudan açılabilir.
- Yetenek testi tamamen işlevseldir: sorular cevaplanır, ilerleme çubuğu güncellenir, sonuç ekranı önerilen meslek alanını ve ilgili eğitime yönlendiren bir CTA gösterir.
- Erişilebilirlik için klavye odak stilleri korunmuş ve `prefers-reduced-motion` kullanıcı tercihine saygı gösterilmiştir.
- Üyelik formu ve "Başvur" butonları şu an statik prototip düzeyindedir; gerçek bir backend/veritabanı entegrasyonu bu MVP'nin kapsamı dışındadır.

## Site Landing Page (Açılış Sayfası)
<img width="1885" height="887" alt="image" src="https://github.com/user-attachments/assets/37a72589-b537-48c7-b676-9fe7e3a7bc51" />
