import { AcademicSource, BystanderStrategy, DailyAction } from '../types';

export const DAILY_ACTIONS: DailyAction[] = [
  {
    id: 'action-1',
    index: '01',
    title: 'İlk Düşünceni Yakala ve Sorgula',
    description:
      'Bir insanla ilk kez karşılaştığında zihninde beliren hızlı yargıyı durdur: "Bu bilgiyi nereden biliyorum, gerçekten tanıyor muyum yoksa bir kalıp mı kullanıyorum?"',
    practiceTip: 'İlk yargı toplumsal alışkanlık olabilir; ikinci düşünce senin seçiminidir.',
  },
  {
    id: 'action-2',
    index: '02',
    title: 'Kişilerin İsimlerini Doğru Telaffuz Etmeye Özen Göster',
    description:
      'Farklı kökenlerden gelen isimleri "çok zor" deyip kısaltmak yerine, sahibine nasıl telaffuz edildiğini nazikçe sor ve doğru öğren.',
    practiceTip: 'Bir insanın ismine özen göstermek, onun kimliğine duyulan en temel saygıdır.',
  },
  {
    id: 'action-3',
    index: '03',
    title: 'Ayrımcı "Mizah" Zincirini Kır',
    description:
      'Bir arkadaş grubunda etnik veya kültürel kimlikler üzerinden alaycı bir şaka yapıldığında, zoraki gülmek yerine sessiz kalarak ya da kısa bir uyarıyla onayı geri çek.',
    practiceTip: 'Gülmemek bile "bu durum normal değil" mesajını ileten güçlü bir tepkidir.',
  },
  {
    id: 'action-4',
    index: '04',
    title: '"Aslen Nerelisin?" Merakını Gözden Geçir',
    description:
      'İnsanların kendi kimliklerine dair verdikleri ilk yanıtı yeterli kabul et; köken sorgulaması yaparak farkında olmadan yabancılaştırma üretme.',
    practiceTip: 'Sohbeti ortak ilgi alanları, çalışmalar veya paylaşılan ortam üzerinden kur.',
  },
  {
    id: 'action-5',
    index: '05',
    title: 'Okuma, İzleme ve Takip Listeni Çeşitlendir',
    description:
      'Algoritmalar ve çevreler bizi benzer seslerin içinde tutar. Farklı kültürlerden yazarları, yönetmenleri ve araştırmacıları bilinçli olarak takip et.',
    practiceTip: 'Tek bir hikâye dinlemek kalıp yargı üretir; çoklu hikâyeler empatiyi besler.',
  },
  {
    id: 'action-6',
    index: '06',
    title: 'Konuşma ve Karar Alanlarında Sözü Paylaş',
    description:
      'Kulüp toplantılarında veya grup projelerinde sözü kesilen ya da fikri gözden kaçan arkadaşlarının katkısını görünür kıl.',
    practiceTip: '"Az önce Elif’in önerdiği fikre geri dönebilir miyiz?" cümlesi kapsayıcılığı güçlendirir.',
  },
  {
    id: 'action-7',
    index: '07',
    title: 'Genellemeleri Tekil Örneklere İndirgeme',
    description:
      'Olumsuz bir deneyim yaşadığında bunu karşıdaki kişinin bütün etnik veya kültürel grubuna değil, yalnızca o somut olaya veya kişiye bağla.',
    practiceTip: 'Çoğunluk grubundan biri hata yaptığında bireysel sayıyorsak, herkes için aynı ölçütü kullanmalıyız.',
  },
  {
    id: 'action-8',
    index: '08',
    title: 'Geri Bildirim Aldığında Savunmaya Geçme',
    description:
      'Biri sözünün veya davranışının kırıcı olduğunu söylediğinde "Niyetim kötü değildi" savunmasına sığınmak yerine karşındakinin deneyimini dinle.',
    practiceTip: 'Niyetin iyi olması, ortaya çıkan etkiyi görmemize engel olmamalıdır.',
  },
  {
    id: 'action-9',
    index: '09',
    title: 'Kurumsal ve Öğrenci Topluluklarında Adil Süreçler Talep Et',
    description:
      'Üniversite kulübü alımlarında, burs değerlendirmelerinde veya ev ilanı süreçlerinde şeffaf ve kimlikten bağımsız ölçütleri savun.',
    practiceTip: 'Kör değerlendirme ve açık kriterler örtük önyargının en güçlü panzehiridir.',
  },
  {
    id: 'action-10',
    index: '10',
    title: 'Sürekli Öğrenmeye Açık Kal',
    description:
      'Farkındalık bir günde tamamlanan bir hedef değil, ömür boyu süren bir dikkat pratiğidir. Hata yaptığında kendini yargılamak yerine öğrenmeye devam et.',
    practiceTip: 'Küçümseyen değil, merakla ve özenle öğrenen bir dil kur.',
  },
];

export const BYSTANDER_STRATEGIES: BystanderStrategy[] = [
  {
    id: 'b1',
    step: '01 · Doğrudan Müdahale',
    title: 'Sakin ve Net Sınır Çizme',
    whenToUse: 'Ortam güvenli olduğunda ve bir kişi doğrudan dışlayıcı bir ifade kullandığında.',
    examplePhrase:
      '"Bu genellemeye katılmıyorum; bir insanı yalnızca kökeni üzerinden değerlendirmek adil değil."',
  },
  {
    id: 'b2',
    step: '02 · Dikkat Dağıtma',
    title: 'Gerilimi Düşürerek Odağı Değiştirme',
    whenToUse: 'Tartışmanın büyüyüp hedef alınan kişiyi daha fazla riske atabileceği durumlarda.',
    examplePhrase:
      'Hedef alınan kişiye dönüp: "Pardon, az önce söylediğin notu paylaşabilir misin? Birlikte şuraya geçelim mi?"',
  },
  {
    id: 'b3',
    step: '03 · Gecikmeli Destek',
    title: 'Olay Sonrası Dayanışma Kurma',
    whenToUse: 'O an müdahale edemediğinizde ya da kişinin olay sonrası desteğe ihtiyaç duyabileceği anlarda.',
    examplePhrase:
      '"Az önce yaşanan durum çok haksızdı. İyi misin? İstersen bunu birlikte ilgili birime bildirebiliriz."',
  },
  {
    id: 'b4',
    step: '04 · Yetkiliye Bildirim ve Belgeleme',
    title: 'Kurumsal Mekanizmaları Devreye Sokma',
    whenToUse: 'Kampüs, işyeri veya kamusal alanda hak ihlali ya da sürekli taciz söz konusu olduğunda.',
    examplePhrase:
      'Tarih, saat ve tanık bilgisini not alarak üniversite etik kuruluna, öğrenci dekanlığına veya insan hakları kurumlarına başvurmak.',
  },
];

export const CLOSING_MANIFESTO = {
  title: 'Empati, Eşitlik ve İnsan Onuru Üzerine',
  body: 'Ayrımcılıkla mücadele yalnızca "kötü niyetli" davranışları kınamak değildir; gündelik hayatın hızında normalleştirdiğimiz bakışları, sessiz kaldığımız şakaları ve sorgulamadan devraldığımız kalıpları yeniden düşünmektir. Her bireyin kökeninden, dilinden, inancından ve ten renginden bağımsız olarak eşit saygınlıkla var olabildiği bir toplum, büyük sözlerden önce günlük seçimlerimizle kurulur.',
  quote: 'Başkasının onurunu korumak, hepimizin özgürlüğünü ve ortak insanlığımızı korumaktır.',
};

export const ACADEMIC_SOURCES: AcademicSource[] = [
  {
    id: 'src-1',
    category: 'Sosyal Psikoloji',
    author: 'Allport, G. W.',
    year: '1954',
    title: 'The Nature of Prejudice',
    publisherOrContext: 'Addison-Wesley Publishing Company (Temel Eser)',
    summary:
      'Önyargının bilişsel, duygusal ve toplumsal kökenlerini inceleyen; eşit statülü gruplar arası temasın önyargıyı azaltmadaki rolünü (Temas Hipotezi) ortaya koyan kurucu sosyal psikoloji kitabı.',
    url: 'https://psycnet.apa.org/record/1954-07450-000',
    urlLabel: 'APA PsycNet Kaydı',
  },
  {
    id: 'src-2',
    category: 'Sosyal Psikoloji',
    author: 'Banaji, M. R., & Greenwald, A. G.',
    year: '2013',
    title: 'Blindspot: Hidden Biases of Good People',
    publisherOrContext: 'Delacorte Press / Harvard Project Implicit',
    summary:
      'İyi niyetli ve eşitlikçi değerleri benimseyen bireylerin dahi zihninde işleyen örtük önyargıları ve Örtük Çağrışım Testi (IAT) bulgularını anlaşılır bir dille ele alır.',
    url: 'https://implicit.harvard.edu/implicit/',
    urlLabel: 'Project Implicit (Harvard)',
  },
  {
    id: 'src-3',
    category: 'Sosyal Psikoloji',
    author: 'Sue, D. W.',
    year: '2010',
    title: 'Microaggressions in Everyday Life: Race, Gender, and Sexual Orientation',
    publisherOrContext: 'John Wiley & Sons',
    summary:
      'Gündelik konuşmalarda ve davranışlarda ortaya çıkan mikro saldırganlık türlerini (mikro saldırı, mikro hakaret ve mikro geçersiz kılma) ve psikolojik etkilerini tanımlar.',
    url: 'https://www.apa.org/monitor/2009/02/microaggression',
    urlLabel: 'APA İnceleme Yazısı',
  },
  {
    id: 'src-4',
    category: 'Sosyal Psikoloji',
    author: 'Steele, C. M.',
    year: '2010',
    title: 'Whistling Vivaldi: How Stereotypes Affect Us and What We Can Do',
    publisherOrContext: 'W. W. Norton & Company',
    summary:
      'Kalıp yargı tehdidi (stereotype threat) kavramı üzerinden, toplumsal önyargıların öğrencilerin ve bireylerin performansını ve aidiyet duygusunu nasıl etkilediğini açıklar.',
    url: 'https://wwnorton.com/books/9780393339727',
    urlLabel: 'Yayınevi Sayfası',
  },
  {
    id: 'src-5',
    category: 'Sosyoloji ve Ayrımcılık',
    author: 'Bonilla-Silva, E.',
    year: '2021',
    title: 'Racism without Racists: Color-Blind Racism and the Persistence of Racial Inequality in America (6. Baskı)',
    publisherOrContext: 'Rowman & Littlefield Publishers',
    summary:
      'Açık ırkçılık azalırken, "renk körü" söylemlerin ve yapısal mekanizmaların toplumsal eşitsizliği nasıl sürdürdüğünü sosyolojik olarak analiz eder.',
    url: 'https://rowman.com/ISBN/9781538151419',
    urlLabel: 'Yayınevi Kaydı',
  },
  {
    id: 'src-6',
    category: 'Türkiye Çalışmaları',
    author: 'Göregenli, M.',
    year: '2012',
    title: 'Temel Kavramlar: Önyargı, Kalıpyargı ve Ayrımcılık',
    publisherOrContext: 'İstanbul Bilgi Üniversitesi Yayınları (Ayrımcılık: Çok Boyutlu Yaklaşımlar içinde)',
    summary:
      'Türkiye’de ayrımcılık çalışmalarının temel kaynaklarından biri olarak önyargı, kalıp yargı, etnosentrizm ve sosyal psikolojik mekanizmaları Türkçe literatürde açıklar.',
    url: 'https://bilgiyay.com/kitap/ayrimcilik-cok-boyutlu-yaklasimlar/',
    urlLabel: 'İstanbul Bilgi Üniversitesi Yayınları',
  },
  {
    id: 'src-7',
    category: 'Türkiye Çalışmaları',
    author: 'İnceoğlu, Y., & Çoban, S. (Der.)',
    year: '2014',
    title: 'Azınlıklar, Ötekiler ve Medya',
    publisherOrContext: 'Ayrıntı Yayınları',
    summary:
      'Medya dilinin, haber çerçevelemelerinin ve gündelik temsil biçimlerinin toplumsal ötekileştirme ve nefret söylemi üzerindeki rolünü inceler.',
    url: 'https://www.ayrintiyayingrubu.com/kitap/azinliklar-otekiler-ve-medya/651',
    urlLabel: 'Ayrıntı Yayın Grubu',
  },
  {
    id: 'src-8',
    category: 'Uluslararası Kurumlar',
    author: 'UNESCO',
    year: '2023',
    title: 'Racism and Discrimination: Global Roadmap & Educational Resources',
    publisherOrContext: 'Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü',
    summary:
      'Eğitim kurumlarında, gençlik çalışmalarında ve kent politikalarında ırkçılıkla ve etnik ayrımcılıkla mücadeleye yönelik küresel çerçeve belgeleri ve rehberler.',
    url: 'https://www.unesco.org/en/no-racism-no-discrimination',
    urlLabel: 'UNESCO Resmi Portalı',
  },
  {
    id: 'src-9',
    category: 'Uluslararası Kurumlar',
    author: 'Birleşmiş Milletler İnsan Hakları Yüksek Komiserliği (OHCHR)',
    year: '1965 / Güncel',
    title: 'Her Türlü Irk Ayrımcılığının Ortadan Kaldırılmasına İlişkin Uluslararası Sözleşme (ICERD)',
    publisherOrContext: 'United Nations Human Rights Office',
    summary:
      'Irk ve etnik köken temelli ayrımcılığı tanımlayan ve taraf devletlere eşitlik ilkesini güvence altına alma yükümlülüğü getiren temel uluslararası insan hakları belgesi.',
    url: 'https://www.ohchr.org/en/instruments-mechanisms/instruments/international-convention-elimination-all-forms-racial',
    urlLabel: 'OHCHR Sözleşme Metni',
  },
];
