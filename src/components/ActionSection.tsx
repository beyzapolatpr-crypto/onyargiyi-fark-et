import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { CAMPAIGN_MEDIA } from '../assets/media';
import {
  BYSTANDER_STRATEGIES,
  CLOSING_MANIFESTO,
  DAILY_ACTIONS,
} from '../data/actionsAndSources';
import { SectionId } from '../types';
import { EditorialImage } from './EditorialImage';

interface ActionSectionProps {
  committedActionIds: string[];
  onToggleAction: (actionId: string) => void;
  onNavigate: (section: SectionId) => void;
}

export function ActionSection({
  committedActionIds,
  onToggleAction,
  onNavigate,
}: ActionSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-16">
      {/* Header */}
      <div className="border-b border-[#121110]/15 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-3">
          <span>Bölüm 06</span>
          <span aria-hidden="true">·</span>
          <span>Günlük Pratik ve Aktif Tanıklık</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#121110] leading-tight">
              Değişim Seninle Başlar
            </h1>
            <p className="mt-3 text-base text-[#4E4A45] max-w-2xl">
              Farkındalık günlük davranışlara dönüştüğünde anlam kazanır. Aşağıdaki 10
              adımdan günlük hayatında uygulamaya karar verdiklerini işaretleyebilirsin.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <p className="font-mono text-xs text-[#6B1422] tabular-nums">
              Seçilen Adım: {committedActionIds.length} / {DAILY_ACTIONS.length}
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Feature Banner + Intro */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <EditorialImage
            src={CAMPAIGN_MEDIA.actionCommunity}
            alt="Yuvarlak masa etrafında yapıcı iletişim kuran gençler"
            aspectClass="aspect-[4/3]"
            caption="Fig. 4 — Küçük ama tutarlı davranış değişiklikleri, kampüs ve iş yaşamında güvenli alanlar yaratır."
          />
        </div>
        <div className="lg:col-span-6 space-y-5">
          <p className="text-xs font-mono uppercase tracking-widest text-[#6B1422]">
            Küçük Adımların Gücü
          </p>
          <h2 className="font-serif text-3xl font-semibold text-[#121110] leading-snug">
            Ayrımcılıkla Mücadele Etmek İçin Kusursuz Olmak Zorunda Değilsin
          </h2>
          <p className="text-base text-[#4E4A45] leading-relaxed">
            Çoğu zaman ne diyeceğimizi bilemediğimiz ya da tartışma çıkarmaktan çekindiğimiz
            için sessiz kalırız. Oysa eşitlikçi bir duruş sergilemek sert kavgalar etmeyi
            gerektirmez; bazen tek bir sakin soru, bazen bir arkadaşının adını doğru
            telaffuz etmek, bazen de yalnızca dinlemek her şeyi değiştirebilir.
          </p>
        </div>
      </div>

      {/* 10 Daily Actions */}
      <div className="mt-16">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#121110] mb-6">
          Günlük Hayatta Uygulanabilecek 10 Öneri
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DAILY_ACTIONS.map((action) => {
            const isChecked = committedActionIds.includes(action.id);
            return (
              <div
                key={action.id}
                className={`p-6 sm:p-7 border transition-colors flex flex-col justify-between ${
                  isChecked
                    ? 'bg-[#ECE5D8] border-[#6B1422]'
                    : 'bg-[#F8F5F0] border-[#121110]/12'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-xs text-[#6B1422] tabular-nums">
                      Öneri {action.index}
                    </span>
                    <button
                      type="button"
                      onClick={() => onToggleAction(action.id)}
                      aria-pressed={isChecked}
                      className={`px-3 py-1.5 text-xs font-medium border inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 ${
                        isChecked
                          ? 'bg-[#6B1422] text-[#F8F5F0] border-[#6B1422]'
                          : 'bg-[#F8F5F0] text-[#121110] border-[#121110]/20 hover:border-[#6B1422]'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                      {isChecked ? 'Uygulayacağım' : 'Listeme Ekle'}
                    </button>
                  </div>

                  <h3 className="mt-3 font-serif text-xl font-semibold text-[#121110]">
                    {action.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#4E4A45] leading-relaxed">
                    {action.description}
                  </p>
                </div>

                <p className="mt-4 pt-3.5 border-t border-[#121110]/10 text-xs font-medium text-[#121110]">
                  Pratik Not: {action.practiceTip}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bystander Intervention Strategies */}
      <div className="mt-16 pt-12 border-t border-[#121110]/15">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Tanık Olunan Durumlar</span>
          </div>
          <h2 className="font-serif text-3xl font-semibold text-[#121110]">
            Ayrımcılığa Tanık Olduğunda Güvenli ve Yapıcı Davranış Örnekleri
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4E4A45] leading-relaxed">
            Bir dışlanma ya da ayrımcı davranışa tanık olduğunda kendini tehlikeye atmadan
            ve gerilimi tırmandırmadan kullanabileceğin dört güvenli yöntem:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BYSTANDER_STRATEGIES.map((strat) => (
            <div
              key={strat.id}
              className="bg-[#ECE5D8]/55 border border-[#121110]/12 p-7 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-mono text-[#6B1422] mb-2">{strat.step}</p>
                <h3 className="font-serif text-2xl font-semibold text-[#121110]">
                  {strat.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#4E4A45] leading-relaxed">
                  <strong className="text-[#121110]">Ne Zaman Kullanılır:</strong>{' '}
                  {strat.whenToUse}
                </p>
              </div>

              <div className="mt-5 p-4 bg-[#F8F5F0] border border-[#121110]/10">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#6B1422] mb-1">
                  Örnek İfade
                </p>
                <p className="text-sm font-serif italic text-[#121110]">
                  {strat.examplePhrase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Message on Empathy, Equality, and Human Rights */}
      <div className="mt-16 bg-[#121110] text-[#F8F5F0] p-8 sm:p-12">
        <div className="max-w-4xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#ECE5D8]/70 mb-3">
            Kapanış Manifestosu
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#F8F5F0]">
            {CLOSING_MANIFESTO.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#ECE5D8]/90 leading-relaxed">
            {CLOSING_MANIFESTO.body}
          </p>
          <blockquote className="mt-8 pt-6 border-t border-[#F8F5F0]/15 font-serif italic text-xl sm:text-2xl text-[#F8F5F0]">
            “{CLOSING_MANIFESTO.quote}”
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => onNavigate('bibliography')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B1422] text-[#F8F5F0] text-sm font-semibold hover:bg-[#4F0D18] transition-colors cursor-pointer"
            >
              Akademik Kaynakçayı İncele
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
