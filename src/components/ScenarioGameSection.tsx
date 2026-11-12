import { useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Info,
  RotateCcw,
} from 'lucide-react';
import { SCENARIOS } from '../data/scenarios';
import { ScenarioOption, SectionId } from '../types';

interface ScenarioGameSectionProps {
  answers: Record<string, string>;
  onSelectAnswer: (scenarioId: string, optionId: string) => void;
  onResetScenarios: () => void;
  onNavigate: (section: SectionId) => void;
}

export function ScenarioGameSection({
  answers,
  onSelectAnswer,
  onResetScenarios,
  onNavigate,
}: ScenarioGameSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const currentScenario = SCENARIOS[currentIndex];
  const selectedOptionId = answers[currentScenario.id];
  const selectedOption: ScenarioOption | undefined = currentScenario.options.find(
    (opt) => opt.id === selectedOptionId
  );

  const answeredCount = Object.keys(answers).length;
  const totalPoints = SCENARIOS.reduce((acc, sc) => {
    const optId = answers[sc.id];
    const found = sc.options.find((o) => o.id === optId);
    return acc + (found ? found.points : 0);
  }, 0);
  const maxPoints = SCENARIOS.length * 10;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < SCENARIOS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleRestart = () => {
    onResetScenarios();
    setCurrentIndex(0);
    setShowSummary(false);
  };

  const getVerdictStyle = (verdict: ScenarioOption['verdict']) => {
    switch (verdict) {
      case 'kapsayici':
        return {
          box: 'bg-[#ECE5D8] border-[#121110]/20 text-[#121110]',
          label: 'text-[#121110]',
          icon: <CheckCircle2 className="w-4 h-4 text-[#121110] shrink-0" />,
        };
      case 'ortuk':
        return {
          box: 'bg-[#F3E8EA] border-[#6B1422]/30 text-[#121110]',
          label: 'text-[#6B1422]',
          icon: <Info className="w-4 h-4 text-[#6B1422] shrink-0" />,
        };
      case 'ayrimci':
        return {
          box: 'bg-[#F3E8EA] border-[#6B1422] text-[#121110]',
          label: 'text-[#6B1422]',
          icon: <AlertTriangle className="w-4 h-4 text-[#6B1422] shrink-0" />,
        };
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-16">
      {/* Header */}
      <div className="border-b border-[#121110]/15 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-3">
          <span>Bölüm 03</span>
          <span aria-hidden="true">·</span>
          <span>Etkileşimli Senaryo Oyunu</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#121110] leading-tight">
              Bu Bir Önyargı mı?
            </h1>
            <p className="mt-3 text-base text-[#4E4A45] max-w-2xl">
              Günlük yaşamdan 7 farklı durumda hangi tepkiyi seçerdin? Seçimin ardından
              davranışın arka planındaki psikolojik ve toplumsal etkiyi keşfet.
            </p>
          </div>

          <div className="flex items-center gap-6 bg-[#ECE5D8] border border-[#121110]/12 px-5 py-3.5 shrink-0">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#4E4A45]">
                İlerleme
              </p>
              <p className="font-mono text-lg font-semibold text-[#121110] tabular-nums">
                {answeredCount} / {SCENARIOS.length}
              </p>
            </div>
            <div className="w-px h-8 bg-[#121110]/15" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#4E4A45]">
                Farkındalık Puanı
              </p>
              <p className="font-mono text-lg font-semibold text-[#6B1422] tabular-nums">
                {totalPoints} / {maxPoints}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stepper */}
      <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
        {SCENARIOS.map((sc, idx) => {
          const isAnswered = Boolean(answers[sc.id]);
          const isCurrent = !showSummary && idx === currentIndex;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => {
                setShowSummary(false);
                setCurrentIndex(idx);
              }}
              className={`px-3.5 py-2 text-xs font-mono tabular-nums border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isCurrent
                  ? 'bg-[#6B1422] text-[#F8F5F0] border-[#6B1422]'
                  : isAnswered
                  ? 'bg-[#ECE5D8] text-[#121110] border-[#121110]/25'
                  : 'bg-[#F8F5F0] text-[#4E4A45] border-[#121110]/15 hover:border-[#121110]/40'
              }`}
            >
              Senaryo {sc.index}
            </button>
          );
        })}
        {answeredCount > 0 && (
          <button
            type="button"
            onClick={() => setShowSummary(true)}
            className={`px-3.5 py-2 text-xs font-mono border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              showSummary
                ? 'bg-[#121110] text-[#F8F5F0] border-[#121110]'
                : 'bg-[#F8F5F0] text-[#6B1422] border-[#6B1422]/40 hover:bg-[#F3E8EA]'
            }`}
          >
            Sonuç Özeti
          </button>
        )}
      </div>

      {!showSummary ? (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Scenario Card */}
          <div className="lg:col-span-7 bg-[#F8F5F0] border border-[#121110]/15 p-7 sm:p-10">
            <div className="flex items-center justify-between text-xs font-mono text-[#6B1422] mb-4">
              <span>{currentScenario.context}</span>
              <span className="tabular-nums">
                {currentIndex + 1} / {SCENARIOS.length}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#121110]">
              {currentScenario.title}
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#121110] leading-relaxed">
              {currentScenario.situation}
            </p>

            <div className="mt-8 pt-6 border-t border-[#121110]/12">
              <p className="text-xs font-mono uppercase tracking-wider text-[#4E4A45] mb-4">
                Bu durumda nasıl bir tepki verirsin?
              </p>

              <div className="space-y-3">
                {currentScenario.options.map((opt, idx) => {
                  const isSelected = selectedOptionId === opt.id;
                  const letter = ['A', 'B', 'C'][idx];
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onSelectAnswer(currentScenario.id, opt.id)}
                      className={`w-full text-left p-4 sm:p-5 border transition-colors flex items-start gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B1422] ${
                        isSelected
                          ? 'bg-[#121110] text-[#F8F5F0] border-[#121110]'
                          : 'bg-[#F8F5F0] text-[#121110] border-[#121110]/15 hover:bg-[#ECE5D8]/60 hover:border-[#121110]/35'
                      }`}
                    >
                      <span
                        className={`font-mono text-xs px-2 py-1 border shrink-0 mt-0.5 ${
                          isSelected
                            ? 'border-[#F8F5F0]/40 text-[#F8F5F0]'
                            : 'border-[#121110]/20 text-[#6B1422]'
                        }`}
                      >
                        {letter}
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-[#121110]/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-[#121110]/20 text-[#121110] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#ECE5D8] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Önceki Durum
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-[#121110]/20 text-[#121110] hover:bg-[#ECE5D8] transition-colors cursor-pointer"
                >
                  {currentIndex < SCENARIOS.length - 1
                    ? 'Sonraki Duruma Geç'
                    : 'Özeti Gör'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Feedback Panel */}
          <div className="lg:col-span-5">
            {selectedOption ? (
              <div
                className={`p-7 sm:p-8 border ${getVerdictStyle(selectedOption.verdict).box}`}
              >
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#121110]/12">
                  <div className="flex items-center gap-2">
                    {getVerdictStyle(selectedOption.verdict).icon}
                    <span
                      className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                        getVerdictStyle(selectedOption.verdict).label
                      }`}
                    >
                      {selectedOption.verdictLabel}
                    </span>
                  </div>
                  <span className="font-mono text-xs tabular-nums text-[#4E4A45]">
                    +{selectedOption.points} Puan
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-[#121110]">
                  Neden Önemli?
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-[#121110] leading-relaxed">
                  {selectedOption.feedback}
                </p>

                <div className="mt-6 pt-5 border-t border-[#121110]/12">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#6B1422] mb-1.5">
                    Ana Çıkarım
                  </p>
                  <p className="text-sm text-[#4E4A45] leading-relaxed">
                    {currentScenario.takeaway}
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#6B1422] text-[#F8F5F0] text-sm font-semibold hover:bg-[#4F0D18] transition-colors cursor-pointer"
                  >
                    {currentIndex < SCENARIOS.length - 1
                      ? 'Sonraki Duruma Geç'
                      : 'Senaryo Özetini Gör'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 border border-[#121110]/12 bg-[#ECE5D8]/45">
                <p className="text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-2">
                  Değerlendirme Alanı
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#121110]">
                  Bir Tepki Seçerek Analizi Gör
                </h3>
                <p className="mt-3 text-sm text-[#4E4A45] leading-relaxed">
                  Sol taraftaki üç seçenekten birini seçtiğinde, o davranışın neden
                  ayrımcı, örtük önyargılı veya kapsayıcı olabileceğine dair açıklamayı
                  burada görebilirsin.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Completion Summary */
        <div className="mt-8 space-y-6">
          <div className="bg-[#ECE5D8] border border-[#121110]/15 p-8 sm:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-2">
                {answeredCount === SCENARIOS.length
                  ? 'Senaryo Oyunu Tamamlandı'
                  : `Senaryo Özeti (${answeredCount} / ${SCENARIOS.length} Çözüldü)`}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121110]">
                Farkındalık Skorun:{' '}
                <span className="tabular-nums">{totalPoints}</span> /{' '}
                <span className="tabular-nums">{maxPoints}</span>
              </h2>
              <p className="mt-4 text-base text-[#4E4A45] leading-relaxed">
                {totalPoints >= 55
                  ? 'Günlük etkileşimlerdeki örtük önyargıları ve dışlayıcı dinamikleri yüksek bir duyarlılıkla fark ediyorsun. Kapsayıcı yaklaşımı çevrende de yaygınlaştırmaya devam edebilirsin.'
                  : totalPoints >= 30
                  ? 'Bazı açık ayrımcılık biçimlerini hızla yakalarken, "iyi niyetli" veya sessiz görünen örtük kalıp yargıların etkisini derinlemesine incelemek sana yeni bakış açıları kazandıracaktır.'
                  : 'Günlük hayatın olağan akışında sıkça karşılaştığımız bazı alışkanlıkların arkasındaki görünmez dışlayıcılığı yeni fark etmeye başladın. Kavramlar ve Empati Simülasyonu bölümleri bu farkındalığı güçlendirecektir.'}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('empathy')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B1422] text-[#F8F5F0] text-sm font-semibold hover:bg-[#4F0D18] transition-colors cursor-pointer"
                >
                  Empati Simülasyonuna Geç
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-[#121110] text-[#121110] text-sm font-semibold hover:bg-[#F8F5F0] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Senaryoları Tekrar Çöz
                </button>
              </div>
            </div>
          </div>

          {/* Scenario-by-scenario breakdown */}
          <div className="bg-[#F8F5F0] border border-[#121110]/15 p-7">
            <h3 className="font-serif text-xl font-semibold text-[#121110] mb-4">
              Senaryo Bazlı Özet
            </h3>
            <div className="divide-y divide-[#121110]/10">
              {SCENARIOS.map((sc, idx) => {
                const chosen = sc.options.find((o) => o.id === answers[sc.id]);
                return (
                  <div
                    key={sc.id}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <span className="font-mono text-xs text-[#6B1422] mr-3 tabular-nums">
                        {sc.index}
                      </span>
                      <span className="text-sm font-medium text-[#121110]">{sc.title}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-[#4E4A45] tabular-nums">
                        {chosen ? `${chosen.verdictLabel} (+${chosen.points})` : 'Henüz çözülmedi'}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setShowSummary(false);
                          setCurrentIndex(idx);
                        }}
                        className="text-xs font-semibold text-[#6B1422] hover:text-[#121110] transition-colors cursor-pointer"
                      >
                        {chosen ? 'İncele' : 'Çöz'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
