import { ConceptCard } from '../types';

export const RACISM_CORE_DEFINITION = {
  title: 'Irkçılık Nedir?',
  lead: 'Irkçılık yalnızca bireylerin sergilediği açık düşmanlık ya da kaba sözlerden ibaret değildir; insanları etnik köken, ten rengi, dil, kültür veya soy temelinde hiyerarşik olarak sınıflandıran ve bu sınıflandırma üzerinden hak, fırsat ve saygınlık dağılımını eşitsizleştiren çok katmanlı bir toplumsal sistemdir.',
  academicNote:
    'Sosyal psikoloji ve sosyoloji literatüründe ırkçılık; bireysel tutumlar (önyargı), zihinsel kısayollar (kalıp yargılar), kişilerarası etkileşimler (mikro saldırganlıklar) ve kurumsal uygulamaların (yapısal eşitsizlikler) birbiriyle etkileşerek ürettiği dinamik bir olgu olarak tanımlanır.',
};

export const CONCEPT_CARDS: ConceptCard[] = [
  {
    id: 'acik-irkcilik',
    index: '01',
    title: 'Açık Irkçılık',
    subtitle: 'Bilinçli ve Görünür Dışlama',
    definition:
      'Bireylerin veya grupların başka bir etnik ya da ırksal gruba yönelik bilinçli olarak aşağılama, dışlama, hakaret veya düşmanlık sergilemesidir. Kişi bu tutumunu gizleme gereği duymaz ve genellikle üstünlük ya da tehdit algısıyla gerekçelendirir.',
    mechanism:
      'Açık ırkçılık, "biz ve onlar" ayrımını keskinleştirerek hedef alınan grubu bireysel niteliklerinden koparır ve tek tip bir tehdit ya da aşağılık statüsüne indirger.',
    dailyExampleTitle: 'Günlük Hayattan Örnek',
    dailyExample:
      'Bir toplu taşıma aracında veya sosyal medya yorumlarında, farklı etnik kökenden gelen bir kişinin yalnızca kimliği nedeniyle sözlü tacize uğraması veya kamusal alandan dışlanmaya çalışılması.',
    keyQuestion: 'Açıkça ifade edilmediğinde önyargı ortadan kalkar mı?',
  },
  {
    id: 'ortuk-irkcilik',
    index: '02',
    title: 'Örtük Irkçılık ve Örtük Önyargı',
    subtitle: 'Bilinçdışı Zihinsel Çağrışımlar',
    definition:
      'Bireyin bilinçli olarak eşitlikçi değerleri savunmasına rağmen, toplumsal öğrenme yoluyla zihninde yerleşmiş otomatik çağrışımlar nedeniyle belirli etnik veya kültürel gruplara karşı farkında olmadan mesafeli, kuşkucu ya da ayrıcalıklı davranmasıdır.',
    mechanism:
      'Sosyal psikologlar Mahzarin Banaji ve Anthony Greenwald’ın çalışmalarında gösterildiği üzere örtük önyargılar, hızlı karar alma anlarında (örneğin bir özgeçmişi 6 saniyede tararken) bilinçli niyetimizin önüne geçebilir.',
    dailyExampleTitle: 'Günlük Hayattan Örnek',
    dailyExample:
      'İnsan kaynakları uzmanının eşitlikçi olduğuna inanmasına rağmen, aynı niteliklere sahip iki adaydan alışık olduğu kültürel ismi taşıyan adayı "kültürel uyum" gerekçesiyle mülakata çağırması.',
    keyQuestion: 'İlk izlenimlerimiz gerçekten tamamen tarafsız mı?',
  },
  {
    id: 'kurumsal-ayrimcilik',
    index: '03',
    title: 'Kurumsal Ayrımcılık',
    subtitle: 'Sistem ve Kural Kaynaklı Eşitsizlik',
    definition:
      'Tek tek bireylerin kötü niyetli olup olmamasından bağımsız olarak; kurumların yasaları, yönetmelikleri, işe alım kriterleri, konut politikaları veya eğitim pratikleri aracılığıyla belirli grupları sistematik biçimde dezavantajlı konuma itmesidir.',
    mechanism:
      'Görünürde "herkese eşit" gibi duran kurallar, tarihsel ve sosyoekonomik eşitsizlikleri hesaba katmadığında veya fiilen belirli grupların erişimini kısıtladığında yapısal ayrımcılığı yeniden üretir.',
    dailyExampleTitle: 'Günlük Hayattan Örnek',
    dailyExample:
      'Bazı bölgelerdeki kira ilanlarında belirli uyruk veya etnik kökenlere yönelik örtülü kısıtlamalar konması ya da yabancı isimli başvurulara yanıt oranlarının sistematik olarak daha düşük kalması.',
    keyQuestion: 'Bir kuralın niyeti değil, yarattığı sonuç kimi dışarıda bırakıyor?',
  },
  {
    id: 'kalip-yargi',
    index: '04',
    title: 'Kalıp Yargı (Stereotip)',
    subtitle: 'Genelleştirilmiş Zihinsel Şablonlar',
    definition:
      'Belirli bir etnik, kültürel veya toplumsal grubun tüm üyelerine ortak ve değişmez özellikler atfeden aşırı basitleştirilmiş bilişsel inançlardır. Görünürde "olumlu" görünen genellemeler de bireyi tek bir kalıba hapsettiği için zararlıdır.',
    mechanism:
      'Beyin bilgiyi hızlı işlemek için kategoriler oluşturur; ancak bu kategoriler sorgulanmadan insanlara uygulandığında bireysel farklılıklar silinir.',
    dailyExampleTitle: 'Günlük Hayattan Örnek',
    dailyExample:
      'Bir üniversite öğrencisine yalnızca memleketi, aksanı veya etnik kökeni üzerinden belirli bir mizaca, mesleki eğilime ya da davranış biçimine sahip olduğunun varsayılması.',
    keyQuestion: 'Bir insanı tanımadan önce zihnimde hangi hazır etiket beliriyor?',
  },
  {
    id: 'onyargi',
    index: '05',
    title: 'Önyargı',
    subtitle: 'Yetersiz Bilgiye Dayalı Tutum',
    definition:
      'Gordon Allport’un klasik tanımıyla önyargı; bir kişiye karşı yalnızca belirli bir gruba ait olduğu varsayıldığı için beslenen, gerçek ve esnek olmayan bir kanıtla desteklenmeyen olumsuz (veya haksız ayrıcalıklı) tutumdur.',
    mechanism:
      'Kalıp yargı bilişsel (düşünce) boyutu, önyargı ise duygusal (his ve yargı) boyutu temsil eder. Kişi kendi deneyimi olmasa bile kültürel aktarım yoluyla önyargıyı devralabilir.',
    dailyExampleTitle: 'Günlük Hayattan Örnek',
    dailyExample:
      'Kampüste yeni tanışılan bir öğrenci hakkında, yalnızca geldiği bölge veya ana dili nedeniyle "bizimle anlaşamaz" düşüncesiyle baştan mesafe koymak.',
    keyQuestion: 'Bu yargım doğrudan tanışıklığıma mı, yoksa duyduklarıma mı dayanıyor?',
  },
  {
    id: 'mikro-saldirganlik',
    index: '06',
    title: 'Mikro Saldırganlık',
    subtitle: 'Gündelik ve İnce Dışlama Mesajları',
    definition:
      'Çoğunlukla iyi niyetli veya sıradan sohbet gibi görünen; ancak karşısındaki kişiye "buraya tam ait değilsin", "farklısın" veya "senin grubun şöyledir" mesajını ileten gündelik sözler, şakalar ve davranışlardır.',
    mechanism:
      'Psikolog Derald Wing Sue’nun kavramsallaştırdığı mikro saldırganlıklar, tek seferde küçük görünse de sürekli tekrarlandığında muhatabında yoğun bir yorgunluk, görünmezlik ve aidiyet kaybı yaratır.',
    dailyExampleTitle: 'Günlük Hayattan Örnek',
    dailyExample:
      'Bir kişiye "Türkçen ne kadar düzgün, hiç aksanın yok" diyerek şaşırmak ya da kişinin yanıtını yeterli bulmayıp "Hayır, yani aslen neredensin?" diye ısrar etmek.',
    keyQuestion: 'Söylediğim "iltifat" aslında karşındakini yabancılaştırıyor olabilir mi?',
  },
];
