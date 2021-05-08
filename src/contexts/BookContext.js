import React from 'react'

//CONTEXT API WİTH CONSUMER-PROVIDER WAY
//CONTEXT CREATED
export const BookContext = React.createContext();

class BookContextProvider extends React.Component {
  state = {
    books: [
      {
        title: "Monte Kristo Kontu",
        author: "Alexandre Dumas",
        pageNum: 296,
        imageURL: "https://i.dr.com.tr/cache/600x600-0/originals/0001830838001-1.jpg",
        topic: "Monte Kristo Kontu, Fransız yazar Alexandre Dumas tarafından 1844'te yazımı tamamlanan macera romanı. Üç Silahşörler ile birlikte yazarın en önemli eserlerinden biridir."
      },
      {
        title: "Şeker Portakalı",
        author: "Jose Muro de Vasconselos",
        pageNum: 200,
        imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
        topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
      },
      {
        title: "Zaman Makinesi",
        author: "H. G. Wells",
        pageNum: 296,
        imageURL: "https://cdn1.dokuzsoft.com/u/hipokratkitabevi/img/c/z/a/zaman-makinesi-h-g-wells852827e7adca0eefb3ba92f247f6e825.jpg",
        topic: "Zaman Makinesi, H. G. Wells'in 1895 yılında yayınlanan bir bilimkurgu kitabıdır. Aynı ada sahip iki filme de uyarlanmıştır.Kitap zaman makinesinin kullanıldığı ilk eserlerden biri oluduğu için bilimkurgu edebiyatı için oldukça önemlidir."
      },
      {
        title: "1984",
        author: "George Orwell",
        pageNum: 200,
        imageURL: "https://i.dr.com.tr/cache/600x600-0/originals/0000000064038-1.jpg",
        topic: "Bin Dokuz Yüz Seksen Dört, George Orwell tarafından kaleme alınmış alegorik bir politik romandır. Hikâyesi distopik bir dünyada geçer. Distopya romanlarının ünlülerindendir. Özellikle kitapta tanımlanan Big Brother kavramı günümüzde de sıklıkla kullanılmaktadır"
      },
      {
        title: "Satranç",
        author: "Stefan Zweig ",
        pageNum: 200,
        imageURL: "https://content.babil.com/urun/194181d452994bf09a46a21a01ba66f2/Front/Big",
        topic: "Satranç, Stefan Zweig'in Brezilya'da sürgünde yazdığı ve en tanınmış eserlerindendir. İlk baskısı 250 adet olarak 1942 yılında Buenos Aires'te çıkan hikâyenin, İngilizce tercümesi 1944'te New York'ta yayımlandı. Satranç, Almanya'da 1.200.000'den fazla sattı."
      },
      {
        title: "Sultanın Korsanları",
        author: "Emrah Safa Gürkan",
        pageNum: 296,
        imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
        topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
      }
    ]
  }
  //PROVİDER İLE STATEDE BULUNAN VERİYİ ALDIK
  // {this.props.children}  İLE PARENT CHİLD İLİŞKİSİNİ KURDUK VE VERİYİ KULLANILACAĞI YERE GÖNDERDİK.
  render() {
    return (
      <BookContext.Provider value={this.state}>
        {this.props.children}
      </BookContext.Provider>
    )
  }
}
export default BookContextProvider;