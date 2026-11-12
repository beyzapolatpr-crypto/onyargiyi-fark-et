import { useEffect, useMemo, useState } from 'react';
import { ActionSection } from './components/ActionSection';
import { BibliographySection } from './components/BibliographySection';
import { ConceptsSection } from './components/ConceptsSection';
import { EmpathySection } from './components/EmpathySection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ProgressRibbon } from './components/ProgressRibbon';
import { QuizSection } from './components/QuizSection';
import { ScenarioGameSection } from './components/ScenarioGameSection';
import { CONCEPT_CARDS } from './data/concepts';
import { EMPATHY_SCENARIOS } from './data/empathy';
import { QUIZ_QUESTIONS } from './data/quiz';
import { SCENARIOS } from './data/scenarios';
import { SectionId, UserProgress } from './types';

const STORAGE_KEY = 'onyargiyi_fark_et_progress_v1';

const INITIAL_PROGRESS: UserProgress = {
  readConceptIds: [],
  scenarioAnswers: {},
  empathySelections: {
    feelings: {},
    responses: {},
  },
  empathyCompletedIds: [],
  quizAnswers: {},
  quizCompleted: false,
  quizScore: 0,
  quizTotal: QUIZ_QUESTIONS.length,
  committedActionIds: [],
};

function loadInitialProgress(): UserProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<UserProgress>;
    return {
      ...INITIAL_PROGRESS,
      ...parsed,
      empathySelections: {
        feelings: parsed.empathySelections?.feelings ?? {},
        responses: parsed.empathySelections?.responses ?? {},
      },
      quizAnswers: parsed.quizAnswers ?? {},
    };
  } catch {
    return INITIAL_PROGRESS;
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [progress, setProgress] = useState<UserProgress>(loadInitialProgress);
  const [resetVersion, setResetVersion] = useState(0);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage write errors in restricted browsing modes
    }
  }, [progress]);

  const handleNavigate = (section: SectionId) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleConceptRead = (conceptId: string) => {
    setProgress((prev) => {
      const exists = prev.readConceptIds.includes(conceptId);
      return {
        ...prev,
        readConceptIds: exists
          ? prev.readConceptIds.filter((id) => id !== conceptId)
          : [...prev.readConceptIds, conceptId],
      };
    });
  };

  const handleSelectScenarioAnswer = (scenarioId: string, optionId: string) => {
    setProgress((prev) => ({
      ...prev,
      scenarioAnswers: {
        ...prev.scenarioAnswers,
        [scenarioId]: optionId,
      },
    }));
  };

  const handleResetScenarios = () => {
    setProgress((prev) => ({
      ...prev,
      scenarioAnswers: {},
    }));
  };

  const handleSelectEmpathyOption = (
    scenarioId: string,
    kind: 'feelings' | 'responses',
    optionId: string
  ) => {
    setProgress((prev) => {
      const nextFeelings =
        kind === 'feelings'
          ? { ...prev.empathySelections.feelings, [scenarioId]: optionId }
          : prev.empathySelections.feelings;
      const nextResponses =
        kind === 'responses'
          ? { ...prev.empathySelections.responses, [scenarioId]: optionId }
          : prev.empathySelections.responses;

      const bothDone = Boolean(nextFeelings[scenarioId] && nextResponses[scenarioId]);
      const nextCompleted =
        bothDone && !prev.empathyCompletedIds.includes(scenarioId)
          ? [...prev.empathyCompletedIds, scenarioId]
          : prev.empathyCompletedIds;

      return {
        ...prev,
        empathySelections: {
          feelings: nextFeelings,
          responses: nextResponses,
        },
        empathyCompletedIds: nextCompleted,
      };
    });
  };

  const handleSelectQuizAnswer = (questionId: string, optionId: string) => {
    setProgress((prev) => {
      if (prev.quizAnswers[questionId]) return prev;
      const nextAnswers = { ...prev.quizAnswers, [questionId]: optionId };
      const allAnswered = Object.keys(nextAnswers).length === QUIZ_QUESTIONS.length;
      const score = QUIZ_QUESTIONS.reduce(
        (sum, q) => sum + (nextAnswers[q.id] === q.correctOptionId ? 1 : 0),
        0
      );
      return {
        ...prev,
        quizAnswers: nextAnswers,
        quizCompleted: allAnswered ? true : prev.quizCompleted,
        quizScore: score,
        quizTotal: QUIZ_QUESTIONS.length,
      };
    });
  };

  const handleResetQuiz = () => {
    setProgress((prev) => ({
      ...prev,
      quizAnswers: {},
      quizCompleted: false,
      quizScore: 0,
      quizTotal: QUIZ_QUESTIONS.length,
    }));
  };

  const handleToggleAction = (actionId: string) => {
    setProgress((prev) => {
      const exists = prev.committedActionIds.includes(actionId);
      return {
        ...prev,
        committedActionIds: exists
          ? prev.committedActionIds.filter((id) => id !== actionId)
          : [...prev.committedActionIds, actionId],
      };
    });
  };

  const handleResetProgress = () => {
    setProgress(INITIAL_PROGRESS);
    setResetVersion((v) => v + 1);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  const overallProgress = useMemo(() => {
    const conceptsPct = Math.min(progress.readConceptIds.length / CONCEPT_CARDS.length, 1);
    const scenariosPct = Math.min(
      Object.keys(progress.scenarioAnswers).length / SCENARIOS.length,
      1
    );
    const empathyPct = Math.min(
      progress.empathyCompletedIds.length / EMPATHY_SCENARIOS.length,
      1
    );
    const quizPct = progress.quizCompleted ? 1 : 0;
    const actionPct = Math.min(progress.committedActionIds.length / 3, 1);

    const avg = (conceptsPct + scenariosPct + empathyPct + quizPct + actionPct) / 5;
    return Math.round(avg * 100);
  }, [progress]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5F0] text-[#121110]">
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        overallProgress={overallProgress}
      />

      <ProgressRibbon
        activeSection={activeSection}
        onNavigate={handleNavigate}
        progress={progress}
        overallProgress={overallProgress}
      />

      <main className="flex-1">
        {activeSection === 'home' && (
          <HomeSection onNavigate={handleNavigate} progress={progress} />
        )}
        {activeSection === 'concepts' && (
          <ConceptsSection
            readConceptIds={progress.readConceptIds}
            onToggleRead={handleToggleConceptRead}
            onNavigate={handleNavigate}
          />
        )}
        {activeSection === 'scenarios' && (
          <ScenarioGameSection
            key={`scenarios-${resetVersion}`}
            answers={progress.scenarioAnswers}
            onSelectAnswer={handleSelectScenarioAnswer}
            onResetScenarios={handleResetScenarios}
            onNavigate={handleNavigate}
          />
        )}
        {activeSection === 'empathy' && (
          <EmpathySection
            key={`empathy-${resetVersion}`}
            selections={progress.empathySelections}
            completedIds={progress.empathyCompletedIds}
            onSelectOption={handleSelectEmpathyOption}
            onNavigate={handleNavigate}
          />
        )}
        {activeSection === 'quiz' && (
          <QuizSection
            key={`quiz-${resetVersion}`}
            userAnswers={progress.quizAnswers}
            quizCompleted={progress.quizCompleted}
            onSelectAnswer={handleSelectQuizAnswer}
            onResetQuiz={handleResetQuiz}
            onNavigate={handleNavigate}
          />
        )}
        {activeSection === 'action' && (
          <ActionSection
            committedActionIds={progress.committedActionIds}
            onToggleAction={handleToggleAction}
            onNavigate={handleNavigate}
          />
        )}
        {activeSection === 'bibliography' && <BibliographySection />}
      </main>

      <Footer onNavigate={handleNavigate} onResetProgress={handleResetProgress} />
    </div>
  );
}
