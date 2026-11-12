import { EmpathyScenario } from '../types';

export const EMPATHY_SCENARIOS: EmpathyScenario[] = [
  {
    id: 'empati-1',
    index: '01',
    setting: 'Toplu Taşıma · Akşam Dönüşü',
    title: 'Boş Kalan Yan Koltuk',
    narrative:
      'Uzun bir ders gününün ardından kalabalık bir otobüse veya metroya biniyorsunuz. Etrafınızdaki koltuklar dolarken tam yanınızdaki boş koltuğa gelen birkaç kişi size baktıktan sonra oturmak yerine ayakta kalmayı tercih ediyor ya da çantasını hızla kendine çekiyor. Ortada hiçbir somut neden yokken, görünümünüz veya konuşma diliniz nedeniyle bir mesafe örüldüğünü hissediyorsunuz.',
    feelingOptions: [
      {
        id: 'e1-f1',
        label: 'Görünmez bir duvarla ayrılmış ve haksız yere tehdit gibi algılanmış hissetmek',
        insight:
          'İnsanlar yalnızca varlıklarıyla şüphe nesnesine dönüştürüldüğünde, ortada tek bir söz olmasa bile derin bir incinme ve yorgunluk oluşur.',
      },
      {
        id: 'e1-f2',
        label: '"Acaba bende mi bir sorun var?" diye kendi davranışlarını sorgulamaya başlamak',
        insight:
          'Ayrımcılığa maruz kalan birçok kişi, ilk anda karşı tarafın önyargısını değil kendi giyimini, duruşunu ya da ses tonunu sorgulayarak gereksiz bir iç yük taşır.',
      },
      {
        id: 'e1-f3',
        label: 'Kamusal alanda sürekli tetikte ve gergin hissetmek',
        insight:
          'Sosyal psikolojide bu durum "azınlık stresi" olarak adlandırılır; kişinin günlük sıradan yolculuklarda bile kendini açıklamaya hazır bir savunma halinde kalmasına yol açar.',
      },
    ],
    responseOptions: [
      {
        id: 'e1-r1',
        label: 'Kulaklığımı takıp kendi alanıma odaklanarak duygusal enerjimi korumak',
        reflection:
          'Kişinin her an eğitim vermek veya tepki göstermek zorunda hissetmemesi çok doğaldır. Kendi ruhsal sağlığını korumak da meşru bir stratejidir.',
      },
      {
        id: 'e1-r2',
        label: 'Durumu içselleştirmeyip bunun benim değerimle ilgili olmadığını kendime hatırlatmak',
        reflection:
          'Başkalarının önyargılarının kendi kimliğimizin veya değerimizin aynası olmadığını hatırlamak, psikolojik dayanıklılığı korumanın önemli bir yoludur.',
      },
      {
        id: 'e1-r3',
        label: 'Sonrasında güvendiğim bir arkadaşımla bu hissi paylaşarak yalnız olmadığımı görmek',
        reflection:
          'Yaşanan deneyimi güvendiğiniz biriyle paylaşmak, "Acaba fazla mı hassasım?" şüphesini ortadan kaldırır ve duygusal yükü hafifletir.',
      },
    ],
    psychologicalContext:
      'Sözsüz kaçınma davranışları, açık hakaretler kadar görünür olmasa da tekrarlandıkça kişinin toplumsal aidiyet duygusunu zedeler. Empati, çoğu kişinin hiç fark etmediği bu sessiz mesafeyi görebilmektir.',
  },
  {
    id: 'empati-2',
    index: '02',
    setting: 'Üniversite Semineri · Söz Alma Anı',
    title: 'Fikrin Görünmez Kalması',
    narrative:
      'Bir atölye veya seminer dersinde konuyla ilgili kapsamlı bir öneri sunuyorsunuz. Sizin sözünüzün ardından ortamda kısa bir sessizlik oluyor ve konu geçiştiriliyor. On dakika sonra başka bir katılımcı hemen hemen aynı fikri biraz farklı kelimelerle söylediğinde, sınıf ve moderatör fikri büyük bir coşkuyla sahiplenip övüyor.',
    feelingOptions: [
      {
        id: 'e2-f1',
        label: 'Sesimin ve emeğimin görünmez sayıldığı hissine kapılmak',
        insight:
          'Aynı fikrin yalnızca kimden çıktığına göre değer görmesi, kişiye düşüncelerinin ciddiye alınmadığı mesajını verir.',
      },
      {
        id: 'e2-f2',
        label: 'Bir sonraki sefer söz almaktan çekinmek ve geri çekilmek',
        insight:
          'Sürekli duyulmadığını hisseden öğrenciler zamanla tartışmalara katılmaktan vazgeçebilir; bu da sınıfın çeşitliliğini ve öğrenme kalitesini azaltır.',
      },
      {
        id: 'e2-f3',
        label: 'Hem hayal kırıklığı hem de durumu kanıtlama baskısı hissetmek',
        insight:
          'Eşit duyulabilmek için başkalarından daha yüksek sesle veya daha kusursuz konuşmak zorunda hissetmek ciddi bir zihinsel yorgunluk yaratır.',
      },
    ],
    responseOptions: [
      {
        id: 'e2-r1',
        label: 'Sakin bir tonda "Az önce paylaştığım önerinin geliştirilmesine sevindim, buna ek olarak..." diyerek katkımı hatırlatmak',
        reflection:
          'Kırıcı olmadan ama kendi emeğinizi sahiplenerek sözü geri almak, hem özgüveninizi korur hem de grubun dikkatini bu dinamiğe çeker.',
      },
      {
        id: 'e2-r2',
        label: 'Ders sonrasında moderatörle veya bir arkadaşımla konuşarak dinleme dinamikleri hakkında geri bildirim paylaşmak',
        reflection:
          'Birebir iletişim, çoğu zaman savunma mekanizmalarını tetiklemeden farkındalık yaratmanın etkili bir yoludur.',
      },
      {
        id: 'e2-r3',
        label: 'Başka birinin de başına geldiğinde "Bunu az önce arkadaşımız da vurgulamıştı" diyerek dayanışma kültürü kurmak',
        reflection:
          'Akran dayanışması ("amplifikasyon") akademik ve profesyonel ortamlarda görünmez dışlanmayı kırmanın en güçlü yöntemlerinden biridir.',
      },
    ],
    psychologicalContext:
      'İnsanların kimliğini farkında olmadan otorite ya da yetkinlikle eşleştirmemiz, kimin sözünün daha hızlı onaylanacağını etkiler. Dinlemek, herkese eşit ağırlık vermekle başlar.',
  },
  {
    id: 'empati-3',
    index: '03',
    setting: 'İş ve Staj Süreci · Telefon Görüşmesi',
    title: 'İsim Değişince Değişen Yanıt',
    narrative:
      'Kendi alanınızda çok güçlü bir portfolyo ve not ortalamasıyla aylardır staj başvurusu yapıyorsunuz, ancak neredeyse hiçbir geri dönüş alamıyorsunuz. Bir gün telefonla aradığınız bir yetkili, yazılı başvurudaki adınızı okurken tereddüt ediyor; sesinizi ve diksiyonunuzu duyduğunda şaşkınlıkla "Aa, özgeçmişinizden çok farklı birini beklemiştim" diyerek tutumunu bir anda değiştiriyor.',
    feelingOptions: [
      {
        id: 'e3-f1',
        label: 'Yeteneklerimin önüne ismim veya kökenim yüzünden bir perde çekildiğini fark etmek',
        insight:
          'Kişinin emeği yerine ismine veya kökenine göre ön elemeden geçmesi, fırsat eşitliğine olan güveni derinden sarsar.',
      },
      {
        id: 'e3-f2',
        label: '"Şaşırması" beklenen bir istisna gibi görülmekten yorgun düşmek',
        insight:
          '"Sen diğerlerinden farklısın" alt metni taşıyan şaşkınlıklar, övgü değil grubun geri kalanına dair olumsuz bir önyargının itirafıdır.',
      },
      {
        id: 'e3-f3',
        label: 'Sürekli daha fazla kanıt sunmak zorunda hissetmek',
        insight:
          'Araştırmalar, önyargıyla karşılaşan gençlerin aynı fırsatlara erişebilmek için akranlarından daha fazla başvuru yapmak zorunda kaldığını göstermektedir.',
      },
    ],
    responseOptions: [
      {
        id: 'e3-r1',
        label: 'Profesyonelliğimi koruyarak odağı portfolyoma ve projelerime çekmek',
        reflection:
          'Mevcut görüşmede kendi emeğinizi öne çıkarmak hakkınız olan fırsatı savunmanızı sağlar; ancak sistemdeki bu eşitsizliği fark etmek de önemlidir.',
      },
      {
        id: 'e3-r2',
        label: 'Deneyimi not edip kariyer merkezleri veya mezun ağlarıyla kör değerlendirme pratiklerini gündeme taşımak',
        reflection:
          'Bireysel deneyimi kurumsal iyileştirme önerisine dönüştürmek, sizden sonraki adaylar için de yolu açar.',
      },
      {
        id: 'e3-r3',
        label: 'Benzer süreçlerden geçen arkadaşlarla deneyim paylaşımı ve mentorluk ağı kurmak',
        reflection:
          'Ortak deneyimleri konuşmak, kişinin suçu kendisinde aramasını önler ve kolektif güçlenme sağlar.',
      },
    ],
    psychologicalContext:
      'Dünyanın pek çok ülkesinde yapılan "özgeçmiş deneyi" araştırmaları, tamamen aynı niteliklere sahip başvuruların yalnızca isim farklılığı nedeniyle farklı oranlarda geri dönüş aldığını ortaya koymuştur.',
  },
  {
    id: 'empati-4',
    index: '04',
    setting: 'Arkadaş Çevresi · Sürekli Temsil Yükü',
    title: 'Tek Kişiden Tüm Bir Kültürü Açıklamasını Beklemek',
    narrative:
      'Haberlerde belirli bir etnik grup, göçmenler veya farklı bir kültürle ilgili gergin bir tartışma çıktığında, ortamdaki herkesin bakışları bir anda size dönüyor. Sanki milyonlarca insanın sözcüsüymüşsünüz gibi "Sizinkiler neden böyle yapıyor?" veya "Sen bu konuda ne düşünüyorsun, açıkla bakalım" sorusuyla karşılaşıyorsunuz.',
    feelingOptions: [
      {
        id: 'e4-f1',
        label: 'Birey olarak değil, tüm bir grubun temsilcisi olarak görülmekten bunalmak',
        insight:
          'Çoğunluk grubundaki bireyler yalnızca kendileri adına konuşurken, azınlık konumundaki kişilere sık sık "tüm grubu açıklama" yükü yüklenir.',
      },
      {
        id: 'e4-f2',
        label: 'Yanlış anlaşılma korkusuyla kelimeleri tek tek tartmak zorunda kalmak',
        insight:
          'Söyleyeceğiniz her sözün bütün bir topluluğa mal edileceğini bilmek, spontane ve rahat sohbet etme hakkını elinizden alır.',
      },
      {
        id: 'e4-f3',
        label: 'Sadece sıradan bir öğrenci veya arkadaş olarak görülmeyi özlemek',
        insight:
          'Herkes kadar sıradan, kusurlu veya apolitik olma hakkına sahip olmak temel bir insani ihtiyaçtır.',
      },
    ],
    responseOptions: [
      {
        id: 'e4-r1',
        label: '"Ben sadece kendi adıma konuşabilirim, hiçbir grubun sözcüsü değilim" diyerek nazikçe sınır çizmek',
        reflection:
          'Kişisel sınırları hatırlatmak, karşınızdakinin sizi tek bir kimliğe indirgeme alışkanlığını nazik ama net biçimde durdurur.',
      },
      {
        id: 'e4-r2',
        label: '"Bu konuyu merak ediyorsan şu güvenilir araştırmalara bakabilirsin" diyerek bilgi yükünü devretmek',
        reflection:
          'Eğitim ve araştırma sorumluluğunu sürekli maruz kalan kişiye yüklememek, adil iletişimin önemli bir parçasıdır.',
      },
      {
        id: 'e4-r3',
        label: 'Sohbeti bireysel deneyimlere ve ortak insani duygulara çekmek',
        reflection:
          'Soyut genellemeler yerine kişisel hikâyelere dönmek, karşınızdakinin de sizi bir birey olarak görmesini kolaylaştırır.',
      },
    ],
    psychologicalContext:
      'Bir kişiden tüm bir kültürü veya kimliği temsil etmesini beklemek, onun bireysel özgünlüğünü görünmez kılar. Sağlıklı empati, kimsenin tek başına bir grubun yükünü taşımak zorunda olmadığını bilmektir.',
  },
];
