import { Check } from 'lucide-react';
import { SectionId, UserProgress } from '../types';
import { NAV_ITEMS } from './Header';
import { CONCEPT_CARDS } from '../data/concepts';
import { SCENARIOS } from '../data/scenarios';
import { EMPATHY_SCENARIOS } from '../data/empathy';
import { DAILY_ACTIONS } from '../data/actionsAndSources';

interface ProgressRibbonProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  progress: UserProgress;
  overallProgress: number;
}

export function ProgressRibbon({
  activeSection,
  onNavigate,
  progress,
  overallProgress,
}: ProgressRibbonProps) {
  const isSectionCompleted = (id: SectionId): boolean => {
    switch (id) {
      case 'concepts':
        return progress.readConceptIds.length >= CONCEPT_CARDS.length;
      case 'scenarios':
        return Object.keys(progress.scenarioAnswers).length >= SCENARIOS.length;
      case 'empathy':
        return progress.empathyCompletedIds.length >= EMPATHY_SCENARIOS.length;
      case 'quiz':
        return progress.quizCompleted;
      case 'action':
        return progress.committedActionIds.length >= 3;
      default:
        return false;
    }
  };

  const getSectionStatusText = (id: SectionId): string => {
    switch (id) {
      case 'concepts':
        return `${progress.readConceptIds.length}/${CONCEPT_CARDS.length}`;
      case 'scenarios':
        return `${Object.keys(progress.scenarioAnswers).length}/${SCENARIOS.length}`;
      case 'empathy':
        return `${progress.empathyCompletedIds.length}/${EMPATHY_SCENARIOS.length}`;
      case 'quiz':
        return progress.quizCompleted ? `${progress.quizScore}/${progress.quizTotal}` : '0/10';
      case 'action':
        return `${progress.committedActionIds.length}/${DAILY_ACTIONS.length}`;
      default:
        return '';
    }
  };

  return (
    <div className="bg-[#ECE5D8]/65 border-b border-[#121110]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3 text-xs text-[#4E4A45] shrink-0">
          <span className="font-medium text-[#121110]">Öğrenme Yolculuğu</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono tabular-nums text-[#6B1422] font-medium">
            %{overallProgress} Tamamlandı
          </span>
        </div>

        <div
          className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0"
          role="tablist"
          aria-label="Bölüm ilerleme göstergesi"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const completed = isSectionCompleted(item.id);
            const stat = getSectionStatusText(item.id);

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 text-xs flex items-center gap-2 whitespace-nowrap shrink-0 border transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6B1422] ${
                  isActive
                    ? 'bg-[#121110] text-[#F8F5F0] border-[#121110]'
                    : completed
                    ? 'bg-[#F3E8EA] text-[#6B1422] border-[#6B1422]/25 hover:bg-[#ECE5D8]'
                    : 'bg-[#F8F5F0] text-[#4E4A45] border-[#121110]/12 hover:text-[#121110] hover:border-[#121110]/30'
                }`}
              >
                <span className="font-mono tabular-nums opacity-75">{item.index}</span>
                <span className="font-medium">{item.shortLabel}</span>
                {completed ? (
                  <Check className="w-3.5 h-3.5 shrink-0" aria-label="Tamamlandı" />
                ) : stat ? (
                  <span className="font-mono text-[11px] opacity-70 tabular-nums">
                    {stat}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
