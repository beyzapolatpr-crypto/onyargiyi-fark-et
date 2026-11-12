import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    topic: 'Temel Kavramlar',
    question: 'Kalıp yargı (stereotip) ile önyargı arasındaki temel fark aşağıdakilerden hangisidir?',
    options: [
      {
        id: 'a',
        text: 'Kalıp yargı bir gruba yönelik genellenmiş bilişsel inançları, önyargı ise bu inançlara eşlik eden duygusal tutum ve yargıyı ifade eder.',
      },
      {
        id: 'b',
        text: 'Kalıp yargılar her zaman olumlu, önyargılar ise her zaman yasaldır.',
      },
      {
        id: 'c',
        text: 'İki kavram tamamen aynı anlamdadır, yalnızca farklı dillerden çevrilmiştir.',
      },
      {
        id: 'd',
        text: 'Önyargı sadece kurumlar tarafından, kalıp yargı ise sadece medya tarafından üretilir.',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'Sosyal psikolojide kalıp yargılar zihinsel genellemeleri (bilişsel boyut), önyargı ise bir gruba yönelik katı ve temelsiz tutumu (duygusal/değerlendirme boyutu) tanımlar.',
  },
  {
    id: 'q2',
    topic: 'Örtük Önyargı',
    question: 'Örtük önyargılar hakkında aşağıdaki ifadelerden hangisi bilimsel literatürle uyumludur?',
    options: [
      {
        id: 'a',
        text: 'Yalnızca açıkça ırkçı görüşleri savunan kişilerde görülür.',
      },
      {
        id: 'b',
        text: 'Bilinçli olarak eşitlikçi değerleri benimseyen kişilerde dahi toplumsal öğrenme yoluyla bulunabilir.',
      },
      {
        id: 'c',
        text: 'Bir kez fark edildiğinde saniyeler içinde kalıcı olarak yok olur.',
      },
      {
        id: 'd',
        text: 'Doğuştan genetik olarak aktarılır ve değiştirilemez.',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'Örtük önyargılar, erken yaşlardan itibaren kültürel mesajlarla öğrenilen otomatik çağrışımlardır; eşitlikçi değerlere sahip bireylerde de bulunabilir ancak farkındalık ve yapısal önlemlerle azaltılabilir.',
  },
  {
    id: 'q3',
    topic: 'Mikro Saldırganlık',
    question: 'Bir kişiye dış görünüşüne bakarak "Türkçen ne kadar düzgün, hiç aksanın yok!" demek neden mikro saldırganlık örneği olabilir?',
    options: [
      {
        id: 'a',
        text: 'Dil bilgisi kurallarına uymadığı için.',
      },
      {
        id: 'b',
        text: 'İyi niyetli görünse de kişiyi kendi ülkesinde veya şehrinde "yabancı" varsayımıyla değerlendirdiği için.',
      },
      {
        id: 'c',
        text: 'Karşı tarafın eğitim seviyesini doğrudan eleştirdiği için.',
      },
      {
        id: 'd',
        text: 'İltifat etmek her zaman profesyonel ortamlarda yasak olduğu için.',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'Bu tür ifadeler, kişinin görünüşü veya ismi nedeniyle o toplumun doğal bir üyesi olamayacağı varsayımını taşır ve tekrarlandıkça dışlanmışlık hissi yaratır.',
  },
  {
    id: 'q4',
    topic: 'Kurumsal Ayrımcılık',
    question: 'Bir işyerinde tüm çalışanların niyeti iyi olmasına rağmen belirli bir etnik gruptan adayların işe alınma oranının çok düşük kalması hangi kavramla açıklanır?',
    options: [
      {
        id: 'a',
        text: 'Açık sözlü saldırganlık',
      },
      {
        id: 'b',
        text: 'Bireysel iletişim kazası',
      },
      {
        id: 'c',
        text: 'Kurumsal veya yapısal ayrımcılık',
      },
      {
        id: 'd',
        text: 'Kültürel görecelik',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'Kurumsal ayrımcılık; bilinçli bir kötü niyet olmasa bile işe alım ağları (örneğin sadece tanıdık referansıyla alım yapmak) veya standart kriterler yoluyla eşitsizliğin sürmesidir.',
  },
  {
    id: 'q5',
    topic: 'Temel Kavramlar',
    question: '"Benim arkadaşlarım arasında her kültürden insan var, yani önyargım olamaz" düşüncesi neden yanıltıcı olabilir?',
    options: [
      {
        id: 'a',
        text: 'Arkadaşlık kurmak yalnızca yüzeysel kalıp yargıları pekiştirir.',
      },
      {
        id: 'b',
        text: 'Bazı bireyleri istisna olarak sevmek, grubun geneline dair örtük önyargıların veya yapısal eşitsizliklerin varlığını otomatik olarak ortadan kaldırmaz.',
      },
      {
        id: 'c',
        text: 'Sosyal temas önyargıyı azaltmada hiçbir zaman etkili değildir.',
      },
      {
        id: 'd',
        text: 'İnsanlar sadece aynı kültürden kişilerle arkadaş olabilir.',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'Eşit statülü temas önyargıyı azaltmaya yardımcı olsa da bireysel yakınlıklar kişiyi başka bağlamlarda (örneğin kurum içi kararlarda) örtük önyargı taşımaktan tamamen muaf tutmaz.',
  },
  {
    id: 'q6',
    topic: 'Mikro Saldırganlık',
    question: '"Olumlu" gibi görünen kalıp yargılar (örneğin "Bu kültürden gelen herkes çok çalışkandır") neden sorunludur?',
    options: [
      {
        id: 'a',
        text: 'Kişinin bireysel özelliklerini ve emeğini görünmez kılar; kalıba uymayan kişiler üzerinde baskı oluşturur.',
      },
      {
        id: 'b',
        text: 'Çalışkan olmanın toplumda değersiz görülmesine yol açar.',
      },
      {
        id: 'c',
        text: 'Yalnızca ekonomik rekabeti artırdığı için sorunludur.',
      },
      {
        id: 'd',
        text: 'Olumlu genellemeler hiçbir zaman zarar vermez.',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'Olumlu veya olumsuz tüm kalıp yargılar, bir grubun üyelerini tek tipleştirir ve bireyi kendi benzersiz hikâyesi yerine grubuna atfedilen beklentilerle yargılar.',
  },
  {
    id: 'q7',
    topic: 'Örtük Önyargı',
    question: 'Kariyer ve işe alım süreçlerinde örtük önyargı etkisini azaltmak için en etkili pratik hangisidir?',
    options: [
      {
        id: 'a',
        text: 'Mülakatçılara sadece "önyargılı olmayın" diye sözlü hatırlatma yapmak.',
      },
      {
        id: 'b',
        text: 'İlk aşamada isim, fotoğraf ve köken bilgisini gizleyen kör değerlendirme ve standart puanlama rubrikleri kullanmak.',
      },
      {
        id: 'c',
        text: 'Kararları tamamen tek bir yöneticinin sezgisine bırakmak.',
      },
      {
        id: 'd',
        text: 'Yalnızca mevcut çalışanların tanıdığı adayları değerlendirmeye almak.',
      },
    ],
    correctOptionId: 'b',
    explanation:
      'Kör değerlendirme (blind review) ve yapılandırılmış değerlendirme kriterleri, otomatik çağrışımların devreye girmesini önleyerek fırsat eşitliğini güçlendirir.',
  },
  {
    id: 'q8',
    topic: 'Aktif Tanıklık',
    question: 'Bir arkadaş ortamında veya kamusal alanda ayrımcı bir şaka ya da dışlayıcı bir söz duyduğunuzda güvenli ve yapıcı ilk adım ne olabilir?',
    options: [
      {
        id: 'a',
        text: 'Karşınızdaki kişiyi herkesin içinde ağır hakaretlerle etiketlemek.',
      },
      {
        id: 'b',
        text: 'Hiçbir şey olmamış gibi gülerek ortamı yumuşatmaya çalışmak.',
      },
      {
        id: 'c',
        text: 'Sakin ama net bir dille o ifadenin neden incitici veya genelleştirici olduğunu belirtmek ya da hedef alınan kişinin yanında durmak.',
      },
      {
        id: 'd',
        text: 'Hedef alınan kişiye "Neden sesini çıkarmadın?" diye çıkışmak.',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'Yapıcı tanıklık, suçlayıcı bir kavgaya dönüştürmeden ayrımcı davranışın normalleşmesini durdurmayı ve etkilenen kişiyle dayanışma kurmayı hedefler.',
  },
  {
    id: 'q9',
    topic: 'Kurumsal Ayrımcılık',
    question: '"Ben kimsenin rengini veya kökenini görmüyorum, herkesi tamamen aynı görüyorum" yaklaşımı hangi noktada eksik kalabilir?',
    options: [
      {
        id: 'a',
        text: 'İnsanların yaşadığı gerçek ve somut eşitsizlik deneyimlerini görmezden gelmeye yol açabildiği için.',
      },
      {
        id: 'b',
        text: 'Herkese eşit haklar tanımak hukuken yanlış olduğu için.',
      },
      {
        id: 'c',
        text: 'Kültürel farklılıkların yasaklanması gerektiğini savunduğu için.',
      },
      {
        id: 'd',
        text: 'Hiçbir eksikliği yoktur; en ideal yaklaşımdır.',
      },
    ],
    correctOptionId: 'a',
    explanation:
      'Eşit hakları savunmak çok değerlidir; ancak farklılıkları "hiç görmemek", insanların günlük hayatta kimlikleri nedeniyle yaşadığı gerçek ayrımcılık deneyimlerini duymamızı engelleyebilir.',
  },
  {
    id: 'q10',
    topic: 'Aktif Tanıklık',
    question: 'Kendi önyargılarımızı fark ettiğimiz bir anda en sağlıklı ve dönüştürücü tutum hangisidir?',
    options: [
      {
        id: 'a',
        text: 'Kendimizi "kötü insan" ilan edip konuyu tamamen kapatmak.',
      },
      {
        id: 'b',
        text: 'Savunmaya geçerek "Aslında öyle demek istemedim" diyip karşı tarafı alınganlıkla suçlamak.',
      },
      {
        id: 'c',
        text: 'Savunmaya geçmeden durup düşünmek, varsayımımızı sorgulamak ve öğrenmeye açık kalmak.',
      },
      {
        id: 'd',
        text: 'Önyargıların değişmeyeceğini kabul edip olduğu gibi bırakmak.',
      },
    ],
    correctOptionId: 'c',
    explanation:
      'Farkındalık suçluluk üretmek için değil, davranışlarımızı ve bakış açımızı dönüştürmek içindir. Önyargıyı fark etmek gelişimin başlangıç noktasıdır.',
  },
];
