import { ScenarioItem } from '../types';

export const SCENARIOS: ScenarioItem[] = [
  {
    id: 'senaryo-1',
    index: '01',
    context: 'Üniversite Kampüsü · Grup Projesi',
    title: 'Proje Grubunda İş Bölümü',
    situation:
      'Dönem sonu sunumu için dört kişilik bir grup oluşturuldu. Gruptaki bir arkadaşınız farklı bir ülkeden değişim öğrencisi olarak gelmiş ve Türkçeyi hafif bir aksanla konuşuyor. Sunum görevleri dağıtılırken gruptan biri, onun fikrini sormadan "Sen en iyisi sadece arka planda kaynak taraması yap, sunumu biz yapalım" diyor.',
    options: [
      {
        id: '1a',
        text: 'Zaman kaybetmemek için sessizce bu dağılımı onaylamak; sonuçta akıcı konuşmak sunum notu için önemlidir.',
        verdict: 'ayrimci',
        verdictLabel: 'Dışlayıcı Tutum',
        points: 0,
        feedback:
          'İyi niyetli görünse de kişinin fikrini almadan onu aksanı nedeniyle görünür rolden uzaklaştırmak, dil yeterliliğini akademik yetkinlikle eşitleyen bir dışlama biçimidir.',
      },
      {
        id: '1b',
        text: 'Arkadaşa dönüp sadece "Türkçen yetmez diye düşündük, sorun değil değil mi?" diye sormak.',
        verdict: 'ortuk',
        verdictLabel: 'Örtük Kalıp Yargı',
        points: 5,
        feedback:
          'Burada iyi niyetli bir nezaket çabası olsa da soru zaten karar verilmiş bir varsayıma dayanıyor ve kişiyi kendi yeterliliğini savunmak zorunda bırakıyor.',
      },
      {
        id: '1c',
        text: 'Herkese hangi rolde güçlü hissettiğini sormak; eğer sunum yapmak istiyorsa prova yaparak birlikte hazırlanmayı teklif etmek.',
        verdict: 'kapsayici',
        verdictLabel: 'Kapsayıcı ve Eşitlikçi Yaklaşım',
        points: 10,
        feedback:
          'Doğru yaklaşım! Kararı karşımızdaki kişi adına vermek yerine ona eşit söz hakkı tanımak ve gerekirse dayanışma göstermek kapsayıcı bir akademik ortam yaratır.',
      },
    ],
    takeaway:
      'Aksan, düşünce derinliğinin ya da akademik kapasitenin ölçütü değildir. Varsaymak yerine sormak eşit katılımın ilk adımıdır.',
  },
  {
    id: 'senaryo-2',
    index: '02',
    context: 'Kafe Sohbeti · Kimlik ve Aidiyet',
    title: '"Aslen Nerelisin?" Israrı',
    situation:
      'Arkadaş ortamında yeni tanıştığınız bir öğrenciye nereli olduğunu soruyorsunuz. "İzmirliyim, doğma büyüme buradayım" yanıtını veriyor. Ancak ismi veya dış görünüşü sizin alışık olduğunuz kalıptan farklı olduğu için gruptaki başka biri gülerek "Yok, yani annen baban nereden gelmiş, aslen kökenin ne?" diye üstelemeye devam ediyor.',
    options: [
      {
        id: '2a',
        text: '"İnsanlar kökenlerini merak etmekte özgür, bu tamamen masum bir sohbet" diyerek ısrarı desteklemek.',
        verdict: 'ortuk',
        verdictLabel: 'Mikro Saldırganlık',
        points: 0,
        feedback:
          'Merak tek başına kötü olmasa da kişinin verdiği yanıtı geçersiz sayıp "gerçek köken" aramak, ona "tam olarak buraya ait değilsin" mesajı veren klasik bir mikro saldırganlıktır.',
      },
      {
        id: '2b',
        text: 'Konuyu kapatmak için sessiz kalıp sohbetin başka yöne akmasını beklemek.',
        verdict: 'ortuk',
        verdictLabel: 'Pasif Tanıklık',
        points: 5,
        feedback:
          'Saldırganlığı büyütmemek anlaşılabilir olsa da tamamen sessiz kalmak, hedef alınan kişinin o an yalnız hissetmesine ve sınır ihlalinin normalleşmesine yol açabilir.',
      },
      {
        id: '2c',
        text: 'Nazikçe "İzmirli olduğunu söyledi zaten, gelin biraz da ortak dersimizden bahsedelim" diyerek kişinin beyanını esas almak.',
        verdict: 'kapsayici',
        verdictLabel: 'Kapsayıcı ve Eşitlikçi Yaklaşım',
        points: 10,
        feedback:
          'Harika bir yaklaşım! Kişinin kendi kimlik beyanına saygı duymak ve ortamı gerilime sokmadan odağı değiştirmek yapıcı bir tanıklık örneğidir.',
      },
    ],
    takeaway:
      'İnsanların nereli olduğuna dair beyanlarını sorgulamak, farkında olmadan "yabancılaştırma" üretir.',
  },
  {
    id: 'senaryo-3',
    index: '03',
    context: 'Öğrenci Kulübü · "Olumlu" Kalıp Yargılar',
    title: 'İltifat Gibi Görünen Etiketler',
    situation:
      'Müzik ve sanat kulübünün toplantısında, Doğu Asyalı bir öğrenci matematik veya mühendislik bölümünde okuduğunu tahmin eden bir üyeye aslında Güzel Sanatlar fakültesinde resim okuduğunu söylüyor. Üye şaşırarak "Gerçekten mi? Ama sizin kültürünüzde herkes çok disiplinli ve sayısalda dâhi olur sanırdım!" diyor.',
    options: [
      {
        id: '3a',
        text: '"Ne var bunda, sonuçta çalışkan ve zeki olduklarını söylemiş, bu bir övgü" diye düşünmek.',
        verdict: 'ortuk',
        verdictLabel: 'Olumlu Kalıp Yargı Tuzağı',
        points: 0,
        feedback:
          '"Model azınlık" gibi görünen olumlu kalıp yargılar da bireyi kendi bireysel emeğinden ve tutkusundan kopararak tüm bir gruba indirger; ayrıca bu kalıba uymayan kişiler üzerinde görünmez bir baskı yaratır.',
      },
      {
        id: '3b',
        text: 'Gülümseyerek "İnsan her alanda başarılı olabilir" deyip geçiştirmek.',
        verdict: 'ortuk',
        verdictLabel: 'Kısmi Farkındalık',
        points: 5,
        feedback:
          'Niyet olumlu olsa da kültürel genellemenin sorunlu yanını görünür kılmadan geçiştirmek, kalıp yargının sorgulanmasını erteler.',
      },
      {
        id: '3c',
        text: '"Her kültürden insan çok farklı ilgi alanlarına sahip olabiliyor; sanat çalışmalarını görmek isteriz" diyerek bireyselliği öne çıkarmak.',
        verdict: 'kapsayici',
        verdictLabel: 'Kapsayıcı ve Eşitlikçi Yaklaşım',
        points: 10,
        feedback:
          'Çok yerinde! İnsanları etnik veya kültürel kökenlerine atfedilen şablonlarla değil, kendi seçimleri ve bireysel hikâyeleriyle tanımak önyargıları kırar.',
      },
    ],
    takeaway:
      'Övgü gibi sunulan etnik genellemeler de insanı tek boyutlu bir kalıba hapseder.',
  },
  {
    id: 'senaryo-4',
    index: '04',
    context: 'Kiralık Ev Arayışı · Kurumsal ve Gündelik Kapı Bekçiliği',
    title: 'Ev Arkadaşı Seçimi',
    situation:
      'Üç üniversite öğrencisi boşalan odaları için ilan açıyor. Başvuranlardan biri diğer tüm adaylarla aynı bütçeye, düzenli öğrencilik geçmişine ve referanslara sahip. Ancak ev sahiplerinden biri "Bence farklı bir kültürden ve ülkeden gelen biriyle yaşamayalım, yemek kokusu veya yaşam tarzı uyuşmaz" diyerek görüşmeye bile çağırmamak istiyor.',
    options: [
      {
        id: '4a',
        text: '"Ev bizim özel alanımız, kimseyi almak zorunda değiliz" diyerek görüşme yapmadan adayı elemek.',
        verdict: 'ayrimci',
        verdictLabel: 'Önyargılı Dışlama',
        points: 0,
        feedback:
          'Birlikte yaşama uyumu elbette önemlidir; ancak bu uyumu kişinin bireysel alışkanlıklarına bakmadan doğrudan kültürel kimliği üzerinden reddetmek önyargıya dayalı dışlamadır.',
      },
      {
        id: '4b',
        text: '"O zaman sadece ortak kuralları yazılı hale getirip baştan sıkı bir uyarı yapalım, diğer adaylara yapmasak da olur" demek.',
        verdict: 'ortuk',
        verdictLabel: 'Çifte Standart',
        points: 5,
        feedback:
          'Yalnızca belirli bir kimliğe mensup kişiye ekstra kurallar veya şüpheyle yaklaşmak eşitlik ilkesini zedeler.',
      },
      {
        id: '4c',
        text: '"Temizlik, gürültü ve ortak alan beklentilerimizi tüm adaylarla eşit şekilde konuşup tanışalım; uyuma bireysel görüşmeyle karar verelim" demek.',
        verdict: 'kapsayici',
        verdictLabel: 'Kapsayıcı ve Eşitlikçi Yaklaşım',
        points: 10,
        feedback:
          'Mükemmel! Yaşam tarzı uyumunu etnik kimlik varsayımlarıyla değil, tüm adaylara eşit uygulanan somut ve açık beklentilerle değerlendirmek adil olandır.',
      },
    ],
    takeaway:
      'Konut ve barınma alanında kimlik temelli varsayımlar, günlük hayatın en yaygın yapısal eşitsizlik alanlarından biridir.',
  },
  {
    id: 'senaryo-5',
    index: '05',
    context: 'Sosyal Medya ve Mizah · Şakanın Sınırları',
    title: '"Sadece Şaka Yapıyorduk"',
    situation:
      'Arkadaş grubunuzun mesajlaşma grubunda, belirli bir etnik gruba veya göçmen topluluklara yönelik alaycı bir karikatür ve genelleme içeren bir paylaşım yapılıyor. Bir kişi rahatsızlığını dile getirdiğinde, paylaşımı yapan kişi "Abartma, alt tarafı mizah yapıyoruz, hemen alınganlık gösterme" diyor.',
    options: [
      {
        id: '5a',
        text: 'Ortamın neşesi kaçmasın diye gülücük emojisi bırakmak ve "alınganlık" yorumuna katılmak.',
        verdict: 'ayrimci',
        verdictLabel: 'Ayrımcılığı Normalleştirme',
        points: 0,
        feedback:
          'Ayrımcı kalıp yargıları "mizah" kılıfıyla onaylamak, hedef alınan grupların incinmesini önemsizleştirir ve grubun ortak dilinde dışlayıcılığı normalleştirir.',
      },
      {
        id: '5b',
        text: '"Aslında komik değil ama kavgaya da gerek yok" deyip konuyu hiç açmamak.',
        verdict: 'ortuk',
        verdictLabel: 'Sessiz Onay Riski',
        points: 5,
        feedback:
          'Kişisel olarak katılmasanız da ses çıkarmadığınızda hem paylaşımı yapan kişi desteklendiğini düşünebilir hem de itiraz eden arkadaşınız yalnız kalır.',
      },
      {
        id: '5c',
        text: '"Mizah güçsüz veya ötekileştirilen gruplar üzerinden yapıldığında şaka olmaktan çıkıp incitici olabiliyor, arkadaşımızın rahatsızlığını ciddiye alalım" demek.',
        verdict: 'kapsayici',
        verdictLabel: 'Kapsayıcı ve Yapıcı Tutum',
        points: 10,
        feedback:
          'Çok değerli bir duruş! Kimseyi düşmanlaştırmadan ama net bir ilke koyarak ayrımcı mizahın yarattığı etkiyi hatırlatmak grup kültürünü dönüştürür.',
      },
    ],
    takeaway:
      '"Sadece şaka" ifadesi, çoğu zaman bir davranışın başkaları üzerindeki kırıcı etkisinden kaçınma aracı olarak kullanılır.',
  },
  {
    id: 'senaryo-6',
    index: '06',
    context: 'Staj Başvurusu · Örtük Önyargı',
    title: 'İsim Üzerinden Hızlı Eleme',
    situation:
      'Bir öğrenci topluluğunun düzenlediği yaz stajı programında ön eleme ekibindesiniz. Yüzlerce başvuru arasında hızlı eleme yaparken bir ekip arkadaşınız, farklı bir etnik kökene işaret eden soyadı taşıyan bir adayın formunu neredeyse hiç okumadan "Bu profil bizim kurumsal iletişim ekibine pek uymaz gibi" diyerek kenara ayırıyor.',
    options: [
      {
        id: '6a',
        text: '"Ön eleme zaten sezgisel yapılır, ekip arkadaşımın hissine güveneyim" demek.',
        verdict: 'ayrimci',
        verdictLabel: 'Örtük Önyargıyı Sürdürme',
        points: 0,
        feedback:
          'Belirsiz "uyum" veya "sezgi" kavramları, örtük önyargıların karar alma süreçlerine sızdığı en yaygın kanallardır.',
      },
      {
        id: '6b',
        text: 'Karara şaşırmak ama iş yükü fazla olduğu için yeniden inceleme talep etmemek.',
        verdict: 'ortuk',
        verdictLabel: 'Yapısal İhmal',
        points: 5,
        feedback:
          'Zaman baskısı örtük önyargıları güçlendirir; kontrol mekanizması kurulmadığında fırsat eşitsizliği kalıcı hale gelir.',
      },
      {
        id: '6c',
        text: '"Adil olmak için tüm başvuruları isim ve kişisel bilgiler gizlenmiş şekilde, yalnızca proje kriterleri puanıyla değerlendirelim" önerisini sunmak.',
        verdict: 'kapsayici',
        verdictLabel: 'Kapsayıcı ve Sistemsel Çözüm',
        points: 10,
        feedback:
          'Harika! Anonimleştirilmiş (kör) değerlendirme gibi yapısal önlemler, bireylerin farkında olmadan taşıdığı örtük önyargıları en aza indirmenin en etkili yoludur.',
      },
    ],
    takeaway:
      'Önyargılarla mücadele etmenin en güçlü yollarından biri, karar süreçlerini şeffaf ve kimlikten bağımsız kriterlere bağlamaktır.',
  },
  {
    id: 'senaryo-7',
    index: '07',
    context: 'Kamusal Alan · Tek Tipleştirme',
    title: 'Dil ve Kültür Varsayımı',
    situation:
      'Bir kitapçıda veya mağazada çalışan görevli, koyu tenli veya başörtülü ya da farklı görünümlü bir müşteriye yardımcı olmak isterken, müşteri henüz tek kelime etmeden onun Türkçe bilmediğini varsayarak yavaş ve abartılı el hareketleriyle İngilizce konuşmaya başlıyor. Müşteri ise ana dili gibi Türkçe konuşarak yanıt veriyor.',
    options: [
      {
        id: '7a',
        text: '"Ne var bunda, sadece yardımcı olmaya çalışmış" deyip durumu tamamen doğal bulmak.',
        verdict: 'ortuk',
        verdictLabel: 'Fark Edilmeyen Dışlama',
        points: 0,
        feedback:
          'Yardım etme niyeti olsa bile yalnızca dış görünüşe bakarak bir kişiyi "yabancı" konumuna yerleştirmek, o kişinin kendi ülkesinde veya şehrinde sürekli kendini kanıtlamak zorunda kalmasına neden olur.',
      },
      {
        id: '7b',
        text: 'Görevlinin utanmasını engellemek için gülüp "Herkes turist sanabiliyor" demek.',
        verdict: 'ortuk',
        verdictLabel: 'Durumu Küçümseme',
        points: 5,
        feedback:
          'Bu ifade, müşterinin yaşadığı tekrarlayan dışlanma hissini görünmez kılabilir.',
      },
      {
        id: '7c',
        text: 'Önce herkesle ortak dilde doğal biçimde selamlaşmanın, ihtiyaç duyulursa alternatif dil sunmanın çok daha saygılı bir standart olduğunu fark etmek.',
        verdict: 'kapsayici',
        verdictLabel: 'Kapsayıcı Farkındalık',
        points: 10,
        feedback:
          'Doğru çıkarım! Dış görünüş üzerinden dil veya vatandaşlık varsayımı yapmak yerine herkesle eşit bir iletişimle başlamak kapsayıcılığın temelidir.',
      },
    ],
    takeaway:
      'Görünüşe bakarak kimin "yerli" kimin "yabancı" olduğuna karar vermek, gündelik hayattaki en sık karşılaşılan görünmez duvarlardan biridir.',
  },
];
