import { ArrowDown, ArrowRight } from 'lucide-react';
import { CAMPAIGN_MEDIA } from '../assets/media';
import { SectionId, UserProgress } from '../types';
import { EditorialImage } from './EditorialImage';

interface HomeSectionProps {
  onNavigate: (section: SectionId) => void;
  progress: UserProgress;
}

const AWARENESS_MESSAGES = [
  {
    index: '01',
    title: 'Görünmeyen Duvarları İsimlendirmek',
    body: 'Ayrımcılık her zaman yüksek sesli hakaretlerle ortaya çıkmaz. Çoğu zaman masum bir şakanın, aceleyle verilmiş bir kararın ya da bir bakışın içinde gizlenir. Göremediğimiz bir mekanizmayı değiştiremeyiz.',
  },
  {
    index: '02',
    title: 'Niyet ile Etki Arasındaki Fark',
    body: 'İyi niyetli olmamız, sözlerimizin veya davranışlarımızın karşımızdaki kişiyi dışlamadığı anlamına gelmez. Farkındalık, "Ben kötü biri değilim" savunmasından çıkıp "Karşımdaki ne hissetti?" sorusuna geçebilmektir.',
  },
  {
    index: '03',
    title: 'Empati ve Eşitlik Pratiği',
    body: 'Önyargıları sorgulamak suçluluk duymak için değil, daha adil ve saygılı ilişkiler kurabilmek içindir. Her bireyin kimliğinden bağımsız olarak eşit saygınlık gördüğü bir ortam günlük seçimlerimizle başlar.',
  },
];

const MODULE_PREVIEW_CARDS: {
  id: SectionId;
  index: string;
  title: string;
  subtitle: string;
  cta: string;
}[] = [
  {
    id: 'concepts',
    index: '02',
    title: 'Irkçılığı Tanı',
    subtitle: 'Açık ırkçılıktan mikro saldırganlığa 6 temel kavram ve günlük yaşam örnekleri.',
    cta: 'Kavramları İncele',
  },
  {
    id: 'scenarios',
    index: '03',
    title: 'Bu Bir Önyargı mı?',
    subtitle: 'Kampüs, iş ve sosyal hayattan 7 etkileşimli senaryoda seçimlerini test et.',
    cta: 'Senaryolara Başla',
  },
  {
    id: 'empathy',
    index: '04',
    title: 'Empati Simülasyonu',
    subtitle: 'Ayrımcılığa maruz kalan birinin penceresinden duyguları ve tepkileri deneyimle.',
    cta: 'Simülasyona Gir',
  },
  {
    id: 'quiz',
    index: '05',
    title: 'Kendini Test Et',
    subtitle: '10 soruluk etkileşimli farkındalık etkinliği ile güçlü ve gelişime açık yönlerini gör.',
    cta: 'Testi Başlat',
  },
  {
    id: 'action',
    index: '06',
    title: 'Değişim Seninle Başlar',
    subtitle: 'Günlük hayatta uygulanabilir 10 öneri ve tanık olduğun durumlar için yapıcı yanıtlar.',
    cta: 'Önerileri Keşfet',
  },
  {
    id: 'bibliography',
    index: '07',
    title: 'Akademik Kaynakça',
    subtitle: 'Sosyal psikoloji, sosyoloji ve insan hakları alanlarından doğrulanmış kaynaklar.',
    cta: 'Kaynaklara Git',
  },
];

export function HomeSection({ onNavigate, progress }: HomeSectionProps) {
  const scrollToPurpose = () => {
    const el = document.getElementById('proje-amaci');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Asymmetric Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-[#6B1422] mb-6">
                <span>Sosyal Farkındalık Projesi</span>
                <span aria-hidden="true">·</span>
                <span>Görünmeyen Ayrımcılığı Keşfet</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#121110] leading-[1.03]">
                ÖNYARGIYI FARK ET.
              </h1>

              <p className="mt-6 font-serif italic text-xl sm:text-2xl text-[#6B1422] max-w-2xl leading-snug">
                “Bir insanı tanımadan onun hakkında karar vermek ne kadar kolay?”
              </p>

              <p className="mt-6 text-base sm:text-lg text-[#4E4A45] max-w-2xl leading-relaxed">
                Çoğu zaman önyargılarımızı fark etmeyiz; çünkü onlar gündelik sohbetlerin,
                hızlı ilk izlenimlerin ve sorgulamadan devraldığımız kalıpların içine gizlenir.
                Irkçılık ve etnik ayrımcılık yalnızca açık düşmanlık anlarında değil, birini
                tanımadan önce zihnimizde kurduğumuz sessiz mesafelerde de yaşar. Bu platform;
                kendi düşüncelerimizi dürüstçe incelemek, görünmeyeni görünür kılmak ve
                empatiyi büyütmek için hazırlandı.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#121110]/12 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('concepts')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#6B1422] text-[#F8F5F0] text-sm font-semibold tracking-tight hover:bg-[#4F0D18] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B1422]"
              >
                Öğrenmeye başla
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('scenarios')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-[#121110] text-[#121110] text-sm font-semibold tracking-tight hover:bg-[#ECE5D8] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B1422]"
              >
                Kendini keşfet
              </button>

              <button
                type="button"
                onClick={scrollToPurpose}
                className="inline-flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium text-[#4E4A45] hover:text-[#121110] transition-colors whitespace-nowrap shrink-0 cursor-pointer sm:ml-auto"
              >
                Projenin amacı
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <EditorialImage
              src={CAMPAIGN_MEDIA.heroEditorial}
              alt="Üniversite kampüsünde diyalog halinde üç genç öğrenci"
              aspectClass="aspect-[3/4] lg:h-full"
              className="h-full"
              caption="Fig. 1 — Diyalog, tanımadan yargılamanın yarattığı mesafeyi kıran ilk adımdır."
              priority
            />
          </div>
        </div>
      </section>

      {/* Below the fold: Projenin Amacı ve Farkındalık Mesajları */}
      <section
        id="proje-amaci"
        className="bg-[#ECE5D8]/60 border-y border-[#121110]/10 py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-3">
                Projenin Amacı
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121110] leading-tight">
                Neden “Görünmeyen Ayrımcılığı” Konuşuyoruz?
              </h2>
              <p className="mt-5 text-base text-[#4E4A45] leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#6B1422]">
                Üniversite kampüsleri, öğrenci kulüpleri, staj mülakatları, kiralık ev
                görüşmeleri ve dijital mecralar… Genç yetişkinlik yılları, toplumsal
                hayatın tüm alanlarına aktif katıldığımız ve kimliklerimizle daha görünür
                olduğumuz bir dönemdir. Bu proje; 16–30 yaş arası gençlerin yalnızca açık
                ırkçılığı değil, çoğu zaman “iyi niyetli” sandığımız örtük önyargıları ve
                kalıp yargıları fark etmelerini amaçlar.
              </p>
              <p className="mt-4 text-base text-[#4E4A45] leading-relaxed">
                Buradaki hiçbir modül kimseyi suçlamak için tasarlanmadı. Amacımız;
                hepimizin içinde taşıyabileceği öğrenilmiş zihinsel kısayolları güvenli,
                akademik açıdan tutarlı ve etkileşimli bir deneyimle sorgulayabilmektir.
              </p>
            </div>

            <div className="lg:col-span-7">
              <EditorialImage
                src={CAMPAIGN_MEDIA.manifestoCampus}
                alt="Üniversite kütüphanesinde farklı kültürlerden gençlerin birlikte çalışması"
                aspectClass="aspect-[16/9]"
                caption="Fig. 2 — Eşit katılım ve kapsayıcılık, herkesin sesi aynı ağırlıkta duyulduğunda başlar."
              />
            </div>
          </div>

          {/* 3 Farkındalık Mesajı */}
          <div className="mt-16 pt-12 border-t border-[#121110]/12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {AWARENESS_MESSAGES.map((msg) => (
              <article key={msg.index} className="flex flex-col">
                <span className="font-mono text-xs text-[#6B1422] tabular-nums mb-3">
                  {msg.index}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#121110] leading-snug">
                  {msg.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#4E4A45] leading-relaxed">
                  {msg.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modül Rehberi ve Doğrudan Geçiş */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 lg:pt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#121110]/12">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-2">
              Etkileşimli Modüller
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121110]">
              Yolculuğa Nereden Başlamak İstersin?
            </h2>
          </div>
          <p className="text-sm text-[#4E4A45] max-w-md">
            Bölümleri sırayla tamamlayabilir veya ilgini çeken modüle doğrudan geçiş
            yapabilirsin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {MODULE_PREVIEW_CARDS.map((card) => {
            let statusNote = '';
            if (card.id === 'concepts') {
              statusNote = `${progress.readConceptIds.length}/6 kavram incelendi`;
            } else if (card.id === 'scenarios') {
              statusNote = `${Object.keys(progress.scenarioAnswers).length}/7 senaryo çözüldü`;
            } else if (card.id === 'empathy') {
              statusNote = `${progress.empathyCompletedIds.length}/4 durum tamamlandı`;
            } else if (card.id === 'quiz') {
              statusNote = progress.quizCompleted
                ? `Son skor: ${progress.quizScore}/10`
                : '10 soruluk öğrenme etkinliği';
            } else if (card.id === 'action') {
              statusNote = `${progress.committedActionIds.length}/10 öneri seçildi`;
            } else {
              statusNote = '9 akademik kaynak';
            }

            return (
              <div
                key={card.id}
                className="bg-[#F8F5F0] border border-[#121110]/12 p-7 flex flex-col justify-between hover:border-[#6B1422]/45 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#4E4A45] mb-4">
                    <span className="font-mono text-[#6B1422] tabular-nums">
                      Bölüm {card.index}
                    </span>
                    <span className="font-mono tabular-nums">{statusNote}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#121110]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4E4A45] leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-[#121110]/10">
                  <button
                    type="button"
                    onClick={() => onNavigate(card.id)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B1422] hover:text-[#121110] transition-colors cursor-pointer"
                  >
                    {card.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
