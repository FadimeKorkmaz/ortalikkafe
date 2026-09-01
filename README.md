# Ortalık Cafe QR Menü

Ortalık Cafe için geliştirilen web tabanlı dijital menü uygulaması.

Proje, müşterilerin QR kod üzerinden menüye hızlı bir şekilde erişebilmesini ve ürünleri kategoriler halinde görüntüleyebilmesini sağlamak amacıyla geliştirilmiştir. Uygulama mobil cihazlarda kullanılmak üzere responsive olarak tasarlanmıştır.

##Live Demo

[Ortalık Cafe Dijital Menü](https://main.d6b39b0vhlim5.amplifyapp.com/)


## Özellikler

* QR kod üzerinden menüye erişim
* Responsive ve mobil uyumlu arayüz
* Kategori bazlı ürün listeleme
* Dinamik ürün ve fiyat gösterimi
* Ürün açıklamalarının görüntülenmesi
* Sade ve kullanıcı odaklı arayüz
* Herhangi bir uygulama kurulumu gerektirmeyen web tabanlı yapı

## Kullanılan Teknolojiler

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

## Teknik Yapı

Menü ürünleri `menu-data.js` dosyasında JavaScript veri yapısı içerisinde tutulmaktadır.

`script.js` içerisinde bulunan `showCategory()` fonksiyonu, kullanıcının seçtiği kategoriye göre ürünleri filtreleyerek dinamik olarak sayfaya eklemektedir.

Bu yapı sayesinde menü içeriğinin tek bir veri kaynağından yönetilmesi ve yeni ürün veya kategorilerin kolayca eklenebilmesi sağlanmıştır.

## Proje Yapısı

```text id="5qj5i1"
ortalikkafe/
├── index.html
├── menu.html
├── menu-data.js
├── script.js
├── style.css
├── logo.png
├── arkaplan.png
└── Ekran görüntüsü 2026-03-02 193922.png
```

## Kullanım

Kullanıcı, masada bulunan QR kodu telefonunun kamerasıyla okutarak dijital menüye ulaşabilir. Menü içerisinden ilgili kategori seçilerek ürünlerin fiyat ve açıklamaları görüntülenebilir.

## Geliştirici

**Fadime Korkmaz**

Software Engineering Student

[GitHub](https://github.com/FadimeKorkmaz)


!!!!!Bu proje gerçek bir işletme için geliştirilmiştir.
