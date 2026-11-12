export type SectionId =
  | 'home'
  | 'concepts'
  | 'scenarios'
  | 'empathy'
  | 'quiz'
  | 'action'
  | 'bibliography';

export interface NavItem {
  id: SectionId;
  index: string;
  label: string;
  shortLabel: string;
}

export interface ConceptCard {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  definition: string;
  mechanism: string;
  dailyExampleTitle: string;
  dailyExample: string;
  keyQuestion: string;
}

export type ScenarioVerdict = 'ayrimci' | 'ortuk' | 'kapsayici';

export interface ScenarioOption {
  id: string;
  text: string;
  verdict: ScenarioVerdict;
  verdictLabel: string;
  points: number;
  feedback: string;
}

export interface ScenarioItem {
  id: string;
  index: string;
  context: string;
  title: string;
  situation: string;
  options: ScenarioOption[];
  takeaway: string;
}

export interface EmpathyFeelingOption {
  id: string;
  label: string;
  insight: string;
}

export interface EmpathyResponseOption {
  id: string;
  label: string;
  reflection: string;
}

export interface EmpathyScenario {
  id: string;
  index: string;
  setting: string;
  title: string;
  narrative: string;
  feelingOptions: EmpathyFeelingOption[];
  responseOptions: EmpathyResponseOption[];
  psychologicalContext: string;
}

export type QuizTopic =
  | 'Temel Kavramlar'
  | 'Örtük Önyargı'
  | 'Mikro Saldırganlık'
  | 'Kurumsal Ayrımcılık'
  | 'Aktif Tanıklık';

export interface QuizQuestion {
  id: string;
  topic: QuizTopic;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
}

export interface DailyAction {
  id: string;
  index: string;
  title: string;
  description: string;
  practiceTip: string;
}

export interface BystanderStrategy {
  id: string;
  step: string;
  title: string;
  whenToUse: string;
  examplePhrase: string;
}

export type SourceCategory =
  | 'Sosyal Psikoloji'
  | 'Sosyoloji ve Ayrımcılık'
  | 'Türkiye Çalışmaları'
  | 'Uluslararası Kurumlar';

export interface AcademicSource {
  id: string;
  category: SourceCategory;
  author: string;
  year: string;
  title: string;
  publisherOrContext: string;
  summary: string;
  url: string;
  urlLabel: string;
}

export interface UserProgress {
  readConceptIds: string[];
  scenarioAnswers: Record<string, string>;
  empathySelections: {
    feelings: Record<string, string>;
    responses: Record<string, string>;
  };
  empathyCompletedIds: string[];
  quizAnswers: Record<string, string>;
  quizCompleted: boolean;
  quizScore: number;
  quizTotal: number;
  committedActionIds: string[];
}
