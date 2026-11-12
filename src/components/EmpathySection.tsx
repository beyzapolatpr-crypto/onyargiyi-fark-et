import { useState } from 'react';
import { ArrowRight, Check, HeartHandshake } from 'lucide-react';
import { CAMPAIGN_MEDIA } from '../assets/media';
import { EMPATHY_SCENARIOS } from '../data/empathy';
import { SectionId } from '../types';
import { EditorialImage } from './EditorialImage';

interface EmpathySectionProps {
  selections: {
    feelings: Record<string, string>;
    responses: Record<string, string>;
  };
  completedIds: string[];
  onSelectOption: (
    scenarioId: string,
    kind: 'feelings' | 'responses',
    optionId: string
  ) => void;
  onNavigate: (section: SectionId) => void;
}

export function EmpathySection({
  selections,
  completedIds,
  onSelectOption,
  onNavigate,
}: EmpathySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const scenario = EMPATHY_SCENARIOS[activeIndex];
  const feelingId = selections.feelings[scenario.id];
  const responseId = selections.responses[scenario.id];

  const chosenFeeling = scenario.feelingOptions.find((f) => f.id === feelingId);
  const chosenResponse = scenario.responseOptions.find((r) => r.id === responseId);

  const handleNext = () => {
    if (activeIndex < EMPATHY_SCENARIOS.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else {
      onNavigate('quiz');
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-16">
      <div className="border-b border-[#121110]/15 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-3">
          <span>Bölüm 04</span>
          <span aria-hidden="true">·</span>
          <span>Perspektif Alma ve Duygusal Farkındalık</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#121110] leading-tight">
              Empati Simülasyonu
            </h1>
            <p className="mt-3 text-base text-[#4E4A45] max-w-2xl">
              Burada doğru ya da yanlış bir puan yok. Amaç; günlük hayatta dışlanma veya
              önyargı ile karşılaşan bir kişinin iç dünyasına kısa bir anlığına yakından
              bakabilmek.
            </p>
          </div>
          <p className="font-mono text-xs text-[#4E4A45] tabular-nums shrink-0">
            Deneyimlenen Durum: {completedIds.length} / {EMPATHY_SCENARIOS.length}
          </p>
        </div>
      </div>

      {/* Vignette Tabs */}
      <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
        {EMPATHY_SCENARIOS.map((item, idx) => {
          const isCurrent = idx === activeIndex;
          const isDone = completedIds.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-xs font-medium border flex items-center gap-2 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                isCurrent
                  ? 'bg-[#6B1422] text-[#F8F5F0] border-[#6B1422]'
                  : isDone
                  ? 'bg-[#ECE5D8] text-[#121110] border-[#121110]/25'
                  : 'bg-[#F8F5F0] text-[#4E4A45] border-[#121110]/15 hover:border-[#121110]/35'
              }`}
            >
              <span className="font-mono tabular-nums">{item.index}</span>
              <span>{item.title}</span>
              {isDone && <Check className="w-3.5 h-3.5" />}
            </button>
          );
        })}
      </div>

      {/* Main Two-Zone Simulation */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Stage: Narrative & Visual */}
        <div className="lg:col-span-5 space-y-6">
          <EditorialImage
            src={CAMPAIGN_MEDIA.empathyCommute}
            alt="Toplu taşıma aracında cam kenarında düşünceli bir genç"
            aspectClass="aspect-[4/3]"
            caption="Fig. 3 — Günlük yolculuklarda veya sınıflarda yaşanan sessiz mesafeler, görünmez ama gerçek bir yük oluşturur."
          />

          <div className="bg-[#ECE5D8] border border-[#121110]/12 p-7">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6B1422] mb-2">
              {scenario.setting}
            </p>
            <h2 className="font-serif text-2xl font-semibold text-[#121110]">
              {scenario.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#121110] leading-relaxed">
              {scenario.narrative}
            </p>
          </div>
        </div>

        {/* Right Interactive Choices & Reflection */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: How would you feel? */}
          <div className="bg-[#F8F5F0] border border-[#121110]/15 p-7">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6B1422] mb-2">
              1. Adım · Duygusal Yansıma
            </p>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#121110]">
              Bu durumda nasıl hissedebilirsiniz?
            </h3>

            <div className="mt-5 space-y-2.5">
              {scenario.feelingOptions.map((opt) => {
                const active = feelingId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onSelectOption(scenario.id, 'feelings', opt.id)}
                    className={`w-full text-left p-4 border text-sm sm:text-base transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#121110] text-[#F8F5F0] border-[#121110]'
                        : 'bg-[#F8F5F0] text-[#121110] border-[#121110]/15 hover:bg-[#ECE5D8]/60'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {chosenFeeling && (
              <div className="mt-5 p-4 bg-[#ECE5D8]/70 border border-[#121110]/12">
                <p className="text-sm text-[#121110] leading-relaxed">
                  {chosenFeeling.insight}
                </p>
              </div>
            )}
          </div>

          {/* Step 2: How would you respond? */}
          <div className="bg-[#F8F5F0] border border-[#121110]/15 p-7">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6B1422] mb-2">
              2. Adım · Tepki ve Başa Çıkma
            </p>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#121110]">
              Bu anda nasıl bir tepki vermeyi seçebilirsiniz?
            </h3>

            <div className="mt-5 space-y-2.5">
              {scenario.responseOptions.map((opt) => {
                const active = responseId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => onSelectOption(scenario.id, 'responses', opt.id)}
                    className={`w-full text-left p-4 border text-sm sm:text-base transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#6B1422] text-[#F8F5F0] border-[#6B1422]'
                        : 'bg-[#F8F5F0] text-[#121110] border-[#121110]/15 hover:bg-[#ECE5D8]/60'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {chosenResponse && (
              <div className="mt-5 p-4 bg-[#F3E8EA] border border-[#6B1422]/25">
                <p className="text-sm text-[#121110] leading-relaxed">
                  {chosenResponse.reflection}
                </p>
              </div>
            )}
          </div>

          {/* Step 3: Empathetic Closing Insight */}
          {chosenFeeling && chosenResponse ? (
            <div className="bg-[#121110] text-[#F8F5F0] p-7">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ECE5D8]/75 mb-2">
                <HeartHandshake className="w-4 h-4 text-[#ECE5D8]" />
                <span>Empati Notu</span>
              </div>
              <p className="text-sm sm:text-base text-[#ECE5D8] leading-relaxed">
                {scenario.psychologicalContext}
              </p>

              <div className="mt-6 pt-5 border-t border-[#F8F5F0]/15 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6B1422] text-[#F8F5F0] text-sm font-semibold hover:bg-[#4F0D18] transition-colors cursor-pointer"
                >
                  {activeIndex < EMPATHY_SCENARIOS.length - 1
                    ? 'Sonraki Durumu Deneyimle'
                    : 'Kendini Test Et Bölümüne Geç'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-[#121110]/20 text-[#121110] hover:bg-[#ECE5D8] transition-colors cursor-pointer"
              >
                {activeIndex < EMPATHY_SCENARIOS.length - 1
                  ? 'Sonraki Duruma Geç'
                  : 'Kendini Test Et Bölümüne Geç'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
