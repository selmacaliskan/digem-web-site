# 🎮 DİGEM — Geleceğin Meslekleri Kariyer Portalı

> **Program:** Yazılım ve Tasarım için Komut Mühendisliğine Giriş Programı — Bitirme Projesi  
> **Proje Türü:** Web Sitesi (Landing Page MVP)  
> **Hazırlayan:** Selma Çalışkan  

DİGEM (Dijital Oyun Geliştirme ve Eğitim Merkezi) için hazırlanan; gençleri doğrudan aksiyona, yetenek analizine ve eğitim başvurularına yönlendiren modern, mobil öncelikli ve etkileşimli bir kariyer rehberliği platformu prototipidir.

---

## 📌 Proje Hakkında ve Çözülen Problem

14-24 yaş arası gençler geleceğin mesleklerini keşfederken genellikle dağınık ve güvenilirliği belirsiz kaynaklarla karşılaşmakta; ilgi ve yeteneklerini somut bir eğitim yoluna dönüştürecek tek bir rehber bulamamaktadır. Ayrıca geleneksel kurumsal web siteleri, gençlerin hızlı ve mobil odaklı bilgi tüketim alışkanlıklarına uymayan uzun metinlerle doludur.

DİGEM Kariyer Portalı bu boşluğu; kullanıcıyı doğrudan aksiyona (aktif eğitimler, interaktif yetenek testi, başvuru süreci) yönlendiren, dinamik ve görsel ağırlıklı bir arayüzle kapatmayı hedeflemektedir.

---

## 🎯 Hedef Kitle

* **14-24 Yaş Arası Gençler:** Geleceğin dijital mesleklerini ve kendi yetenek alanlarını keşfetmek isteyenler.
* **Ebeveynler ve Kariyer Danışmanları:** Öğrencilerin ve çocukların doğru eğitim alanlarına yönlendirilmesinde rehberlik arayanlar.
* **Mobil Kullanıcılar:** Bilgiye hızlı, pratik ve kullanıcı dostu bir arayüz üzerinden ulaşmak isteyenler.

---

## 🤖 Yapay Zeka (AI) Kullanım Süreci

Proje geliştirme sürecinde **Claude (Anthropic, Sonnet)** tek AI aracı olarak kullanılmıştır. Tasarım planlaması, HTML/CSS/JS kod yapısı ve metin yazımı (copywriting) süreçleri yapılandırılmış bir komut mühendisliği (prompt engineering) yaklaşımıyla yürütülmüştür.

### 🔄 Uygulanan Süreç Adımları
1. **Yapılandırılmış Brief (Rol / Bağlam / Görev / Kısıt):** Projenin amacı, hedef kitlesi, marka diline dair net yönlendirmeler tanımlandı.  
   * *Örnek Kısıt:* `"Ana Renk: CANLI ve modern turuncu / Destek renk: turkuaz / Vurgu: lime yeşili... Geleneksel kamu kurumu sitesi görünümünden kaçın."`
2. **Tasarım Planı ve Token Sistemi:** Kodlama öncesinde renk hex değerleri, tipografi rolleri, yerleşim konsepti ve imza ögeler baştan netleştirilerek jenerik "AI görünümü" engellendi.
3. **Üretim:** Modüler yapıda HTML5, CSS3 ve JavaScript kod bloğu oluşturuldu.
4. **İnceleme ve İterasyon:** Çıktılar marka dili ve işlevsellik kriterlerine göre test edilip optimize edildi.

---

## ⚡ Öne Çıkan Özellikler ve Kullanılabilirlik

* **Interaktif Yetenek Testi:** Kullanıcı yanıtlarına göre dynamic ilerleme çubuğu güncellenir ve sonuç ekranında kişiselleştirilmiş meslek alanı ile ilgili eğitim CTA'sı sunulur.
* **Mobil Öncelikli & Responsive Tasarım:** Tüm ekran boyutlarında (mobil, tablet, masaüstü) akıcı arayüz deneyimi.
* **Erişilebilirlik (Accessibility):** Klavye odak stilleri (`focus styles`) korunmuş ve `prefers-reduced-motion` kullanıcı tercihleri dikkate alınmıştır.
* **Hızlı Aksiyon Akışı:** İlk 10 saniyede kullanıcının eğitime başvurmasını veya teste başlamasını sağlayan dönüşüm odaklı tasarım.

---

## 🛠️ Teknolojiler

* **Frontend:** HTML5, CSS3 (Custom Properties / Flexbox & Grid), JavaScript (Vanilla ES6+)
* **İkon & Font:** Lucide Icons, Google Fonts (Montserrat & Roboto)
* **Tasarım & Metin Üretimi:** Claude (Anthropic, Sonnet)

---

## 📂 Dosya Yapısı

```text
├── index.html   # Ana web sayfası ve interaktif yetenek testi bileşeni
├── style.css    # Tasarım token'ları, responsive düzen ve özel stiller
└── script.js    # Yetenek testi mantığı ve dinamik içerik yönlendirmeleri
