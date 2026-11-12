import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { ACADEMIC_SOURCES } from '../data/actionsAndSources';
import { SourceCategory } from '../types';

const CATEGORIES: ('Tümü' | SourceCategory)[] = [
  'Tümü',
  'Sosyal Psikoloji',
  'Sosyoloji ve Ayrımcılık',
  'Türkiye Çalışmaları',
  'Uluslararası Kurumlar',
];

export function BibliographySection() {
  const [selectedCategory, setSelectedCategory] = useState<'Tümü' | SourceCategory>('Tümü');

  const filteredSources =
    selectedCategory === 'Tümü'
      ? ACADEMIC_SOURCES
      : ACADEMIC_SOURCES.filter((src) => src.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-16">
      <div className="border-b border-[#121110]/15 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-3">
          <span>Bölüm 07</span>
          <span aria-hidden="true">·</span>
          <span>Okuma ve Araştırma Rehberi</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#121110] leading-tight">
          Kaynakça
        </h1>
        <p className="mt-3 text-base text-[#4E4A45] max-w-2xl">
          Bu platformdaki kavramlar, tanımlar ve senaryo analizleri; sosyal psikoloji,
          sosyoloji ve uluslararası insan hakları literatüründeki temel çalışmalara
          dayanmaktadır.
        </p>

        {/* Interactive Category Filter */}
        <div
          className="mt-7 flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Kaynak kategorisi filtresi"
        >
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#121110] text-[#F8F5F0] border-[#121110]'
                    : 'bg-[#F8F5F0] text-[#4E4A45] border-[#121110]/15 hover:text-[#121110] hover:border-[#121110]/35'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sources List */}
      <div className="mt-8 divide-y divide-[#121110]/12 border-b border-[#121110]/12">
        {filteredSources.map((source, idx) => (
          <article
            key={source.id}
            className="py-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            <div className="lg:col-span-3 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#6B1422]">
                <span className="tabular-nums">{String(idx + 1).padStart(2, '0')}</span>
                <span aria-hidden="true">·</span>
                <span>{source.year}</span>
              </div>
              <p className="text-sm font-semibold text-[#121110]">{source.author}</p>
              <p className="text-xs text-[#4E4A45]">{source.category}</p>
            </div>

            <div className="lg:col-span-6 space-y-2">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#121110] leading-snug">
                {source.title}
              </h2>
              <p className="text-xs text-[#4E4A45] font-medium">
                {source.publisherOrContext}
              </p>
              <p className="text-sm text-[#4E4A45] leading-relaxed pt-1">
                {source.summary}
              </p>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end items-start">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold border border-[#121110]/20 text-[#121110] hover:bg-[#ECE5D8] hover:border-[#121110] transition-colors whitespace-nowrap shrink-0"
              >
                {source.urlLabel}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
