import { useState } from 'react';
import { ArrowRight, BookOpen, Check } from 'lucide-react';
import { CONCEPT_CARDS, RACISM_CORE_DEFINITION } from '../data/concepts';
import { SectionId } from '../types';

interface ConceptsSectionProps {
  readConceptIds: string[];
  onToggleRead: (conceptId: string) => void;
  onNavigate: (section: SectionId) => void;
}

export function ConceptsSection({
  readConceptIds,
  onToggleRead,
  onNavigate,
}: ConceptsSectionProps) {
  const [selectedConceptId, setSelectedConceptId] = useState<string>(CONCEPT_CARDS[0].id);

  const selectedConcept =
    CONCEPT_CARDS.find((c) => c.id === selectedConceptId) ?? CONCEPT_CARDS[0];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-16">
      {/* Section Header */}
      <div className="border-b border-[#121110]/15 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-3">
          <span>Bölüm 02</span>
          <span aria-hidden="true">·</span>
          <span>Kavramsal Çerçeve</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#121110] leading-tight">
              Irkçılığı Tanı: Kavramların Arkasındaki Mekanizma
            </h1>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <p className="text-sm text-[#4E4A45] font-mono tabular-nums">
              İncelenen Kavramlar: {readConceptIds.length} / {CONCEPT_CARDS.length}
            </p>
          </div>
        </div>
      </div>

      {/* Core Racism Definition Editorial Feature */}
      <div className="mt-10 bg-[#ECE5D8] border border-[#121110]/12 p-8 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-2">
              Temel Tanım
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#121110]">
              {RACISM_CORE_DEFINITION.title}
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <p className="text-base sm:text-lg text-[#121110] leading-relaxed font-medium">
              {RACISM_CORE_DEFINITION.lead}
            </p>
            <p className="text-sm sm:text-base text-[#4E4A45] leading-relaxed">
              {RACISM_CORE_DEFINITION.academicNote}
            </p>
          </div>
        </div>
      </div>

      {/* 6 Concept Cards Grid */}
      <div className="mt-14">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#121110]">
            Altı Temel Kavram ve Günlük Hayattan Örnekler
          </h2>
          <p className="text-sm text-[#4E4A45]">
            Ayrıntıyı incelemek için bir karta tıkla veya okundu olarak işaretle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONCEPT_CARDS.map((card) => {
            const isRead = readConceptIds.includes(card.id);
            const isFocused = selectedConcept.id === card.id;

            return (
              <article
                key={card.id}
                className={`p-7 border transition-colors flex flex-col justify-between ${
                  isFocused
                    ? 'bg-[#F8F5F0] border-[#6B1422]'
                    : 'bg-[#F8F5F0] border-[#121110]/12 hover:border-[#121110]/35'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs text-[#4E4A45] mb-4">
                    <span className="font-mono text-[#6B1422] tabular-nums">
                      {card.index} · {card.subtitle}
                    </span>
                    {isRead && (
                      <span className="inline-flex items-center gap-1 font-mono text-[#6B1422]">
                        <Check className="w-3.5 h-3.5" />
                        Okundu
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#121110]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#4E4A45] leading-relaxed">
                    {card.definition}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#121110]/10">
                    <p className="text-xs font-mono uppercase tracking-wider text-[#6B1422] mb-1.5">
                      {card.dailyExampleTitle}
                    </p>
                    <p className="text-sm text-[#121110] leading-relaxed">
                      {card.dailyExample}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#121110]/10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedConceptId(card.id);
                      if (!isRead) onToggleRead(card.id);
                      document
                        .getElementById('concept-spotlight')
                        ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#121110] hover:text-[#6B1422] transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Derinleştir
                  </button>

                  <button
                    type="button"
                    onClick={() => onToggleRead(card.id)}
                    className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
                      isRead
                        ? 'bg-[#6B1422] text-[#F8F5F0] border-[#6B1422]'
                        : 'bg-transparent text-[#4E4A45] border-[#121110]/20 hover:text-[#121110]'
                    }`}
                  >
                    {isRead ? 'İncelendi ✓' : 'Okudum İşaretle'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Academic Spotlight Panel */}
      <div
        id="concept-spotlight"
        className="mt-12 bg-[#121110] text-[#F8F5F0] p-8 sm:p-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-widest text-[#ECE5D8]/70 mb-2">
              Kavram Analizi · {selectedConcept.index}
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#F8F5F0]">
              {selectedConcept.title}
            </h3>
            <p className="mt-4 font-serif italic text-lg text-[#ECE5D8]/90">
              “{selectedConcept.keyQuestion}”
            </p>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#ECE5D8]/65 mb-1.5">
                Psikolojik ve Sosyolojik İşleyiş
              </p>
              <p className="text-sm sm:text-base text-[#ECE5D8] leading-relaxed">
                {selectedConcept.mechanism}
              </p>
            </div>
            <div className="pt-4 border-t border-[#F8F5F0]/15 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#ECE5D8]/75">
                Bu kavramı günlük bir durum içinde test etmeye hazır mısın?
              </p>
              <button
                type="button"
                onClick={() => onNavigate('scenarios')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6B1422] text-[#F8F5F0] text-sm font-semibold hover:bg-[#4F0D18] transition-colors cursor-pointer"
              >
                Bu Bir Önyargı mı? Oyununa Geç
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
