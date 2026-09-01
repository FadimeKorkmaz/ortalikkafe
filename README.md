**Ortalık Cafe — QR Menü**

Ortalık Cafe için geliştirilen, müşterilerin QR kod üzerinden hızlı ve kolay bir şekilde menüye ulaşmasını sağlayan web tabanlı dijital menü uygulamasıdır.

 **Proje Hakkında**

Bu proje, fiziksel menü kullanımını azaltmak ve müşterilerin menüye telefonlarından kolayca erişebilmesini sağlamak amacıyla geliştirilmiştir.

Müşteriler, masalarda bulunan QR kodu telefonlarının kamerasıyla okutarak herhangi bir uygulama yüklemeden dijital menüye ulaşabilir.

Menü içerisindeki ürünler kategorilere ayrılmıştır ve kullanıcılar istedikleri kategoriye tek tıklamayla ulaşabilir.

**Özellikler**

*  Mobil uyumlu (Responsive) tasarım
*  QR kod ile menüye hızlı erişim
*  Kategorilere göre menü filtreleme
*  Ürün ve fiyat bilgilerinin dinamik olarak gösterilmesi
*  Ürün açıklamalarının gösterilmesi
*  Hızlı ve sade kullanıcı arayüzü
*  Web tabanlı yapı
*  Uygulama yükleme gerektirmez

**Menü Kategorileri**

Proje içerisinde farklı yiyecek ve içecek kategorileri bulunmaktadır:

* Aperatifler
* Makarnalar
* Tavuklar
* Burgerler
* Pizzalar
* Etler
* Salatalar
* Biralar
* Vodka
* Cin
* Viskiler
* Tekila
* Likörler
* Vermutlar
* Rom
* Cognac
* Şaraplar
* Kokteyller
* Rakılar
* Sıcak İçecekler
* Meşrubatlar
* Mezeler
* Çerezler

## 🛠️ Kullanılan Teknolojiler

* **HTML5** — Sayfa yapısı ve içerik
* **CSS3** — Tasarım ve responsive yapı
* **JavaScript** — Menü verilerinin yönetimi ve kategori filtreleme
* **Git & GitHub** — Versiyon kontrolü ve proje yönetimi

**Proje Yapısı**

```text
ortalikkafe/
│
├── index.html
├── menu.html
├── menu-data.js
├── script.js
├── style.css
├── logo.png
├── arkaplan.png
└── Ekran görüntüsü 2026-03-02 193922.png
...

 **Çalışma Mantığı**

Menü ürünleri `menu-data.js` içerisinde JavaScript nesneleri olarak tutulmaktadır.

Kullanıcı bir kategori seçtiğinde `script.js` içerisindeki `showCategory()` fonksiyonu ilgili kategoriye ait ürünleri filtreleyerek ekrana getirir.

...javascript
function showCategory(category) {
  menuContainer.innerHTML = "";
  const filteredItems = menuData.filter(item => item.category === category);

  filteredItems.forEach(item => {
    // Menü ürününü oluştur ve ekrana ekle
  });
}
```

Bu yapı sayesinde menü içerikleri HTML içerisinde tekrar tekrar yazılmak yerine merkezi bir veri yapısından yönetilmektedir.

**Kullanım**

1. Kullanıcı QR kodu telefonuyla tarar.
2. Dijital menü web sayfası açılır.
3. Kullanıcı istediği kategoriye girer.
4. Ürünlerin açıklamalarını ve fiyatlarını görüntüler.

**Projenin Amacı**

Projenin temel amacı, restoran ve kafelerde kullanılabilecek **basit, hızlı ve mobil uyumlu bir dijital menü çözümü** oluşturmaktır.

Aynı yapı farklı işletmeler için de özelleştirilebilir ve yeni kategoriler, ürünler ve tasarım bileşenleri eklenerek geliştirilebilir.

Geliştirici

**Fadime Korkmaz**

Software Engineering Student

GitHub: [FadimeKorkmaz](https://github.com/FadimeKorkmaz)

---

!!!Bu proje gerçek bir işletmenin dijital menü ihtiyacı doğrultusunda geliştirilmiştir.
