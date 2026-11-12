import { useState } from 'react';
import { ArrowRight, CheckCircle2, Info, RotateCcw, XCircle } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quiz';
import { QuizTopic, SectionId } from '../types';

interface QuizSectionProps {
  userAnswers: Record<string, string>;
  quizCompleted: boolean;
  onSelectAnswer: (questionId: string, optionId: string) => void;
  onResetQuiz: () => void;
  onNavigate: (section: SectionId) => void;
}

const TOPIC_TO_SECTION: Record<QuizTopic, { section: SectionId; actionLabel: string }> = {
  'Temel Kavramlar': { section: 'concepts', actionLabel: 'Irkçılığı Tanı bölümünü incele' },
  'Örtük Önyargı': { section: 'concepts', actionLabel: 'Örtük Önyargı kavramına dön' },
  'Mikro Saldırganlık': { section: 'scenarios', actionLabel: 'Senaryo örneklerini çöz' },
  'Kurumsal Ayrımcılık': { section: 'concepts', actionLabel: 'Kurumsal Ayrımcılığı oku' },
  'Aktif Tanıklık': { section: 'action', actionLabel: 'Yapıcı tanıklık rehberine git' },
};

export function QuizSection({
  userAnswers,
  quizCompleted,
  onSelectAnswer,
  onResetQuiz,
  onNavigate,
}: QuizSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(quizCompleted);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const chosenOptionId = userAnswers[currentQuestion.id];
  const isAnswered = Boolean(chosenOptionId);
  const isCorrect = chosenOptionId === currentQuestion.correctOptionId;

  const answeredCount = Object.keys(userAnswers).length;
  const allAnswered = answeredCount === QUIZ_QUESTIONS.length;
  const currentScore = QUIZ_QUESTIONS.reduce((sum, q) => {
    return sum + (userAnswers[q.id] === q.correctOptionId ? 1 : 0);
  }, 0);

  const firstUnansweredIndex = QUIZ_QUESTIONS.findIndex((q) => !userAnswers[q.id]);

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (allAnswered) {
      setShowResults(true);
    } else if (firstUnansweredIndex !== -1) {
      setCurrentIndex(firstUnansweredIndex);
    }
  };

  const handleRestart = () => {
    onResetQuiz();
    setCurrentIndex(0);
    setShowResults(false);
  };

  const topics: QuizTopic[] = [
    'Temel Kavramlar',
    'Örtük Önyargı',
    'Mikro Saldırganlık',
    'Kurumsal Ayrımcılık',
    'Aktif Tanıklık',
  ];

  const topicStats = topics.map((topic) => {
    const questions = QUIZ_QUESTIONS.filter((q) => q.topic === topic);
    const correct = questions.filter((q) => userAnswers[q.id] === q.correctOptionId).length;
    return { topic, correct, total: questions.length };
  });

  const recommendedTopics = topicStats.filter((t) => t.correct < t.total);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-16">
      {/* Header */}
      <div className="border-b border-[#121110]/15 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-3">
          <span>Bölüm 05</span>
          <span aria-hidden="true">·</span>
          <span>10 Soruluk Farkındalık Etkinliği</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#121110] leading-tight">
              Kendini Test Et
            </h1>
            <p className="mt-3 text-base text-[#4E4A45] max-w-2xl">
              Kavramları ne kadar pekiştirdiğini gör ve günlük hayattaki ince ayrımcılık
              biçimlerini ayırt etme pratiği yap.
            </p>
          </div>

          <div className="flex items-center gap-6 bg-[#ECE5D8] border border-[#121110]/12 px-5 py-3.5 shrink-0">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#4E4A45]">
                Çözülen
              </p>
              <p className="font-mono text-lg font-semibold text-[#121110] tabular-nums">
                {answeredCount} / {QUIZ_QUESTIONS.length}
              </p>
            </div>
            <div className="w-px h-8 bg-[#121110]/15" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#4E4A45]">
                Doğru Sayısı
              </p>
              <p className="font-mono text-lg font-semibold text-[#6B1422] tabular-nums">
                {currentScore} / {QUIZ_QUESTIONS.length}
              </p>
            </div>
          </div>
        </div>

        {/* Non-diagnostic learning activity disclaimer */}
        <div className="mt-6 bg-[#ECE5D8]/70 border border-[#121110]/12 p-4 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#6B1422] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#4E4A45] leading-relaxed">
            <strong className="text-[#121110] font-semibold">Öğrenme Notu:</strong> Bu
            test bir “ırkçılık ölçümü” veya bilimsel kişilik testi değildir; yalnızca
            önyargı, kalıp yargı ve ayrımcılık kavramları üzerine düşünmeyi destekleyen
            eğitsel bir öğrenme etkinliğidir.
          </p>
        </div>
      </div>

      {!showResults ? (
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question Area */}
          <div className="lg:col-span-8 bg-[#F8F5F0] border border-[#121110]/15 p-7 sm:p-10">
            <div className="flex items-center justify-between text-xs font-mono text-[#6B1422] mb-4">
              <span>Konu: {currentQuestion.topic}</span>
              <span className="tabular-nums">
                Soru {currentIndex + 1} / {QUIZ_QUESTIONS.length}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#121110] leading-snug">
              {currentQuestion.question}
            </h2>

            <div className="mt-7 space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = chosenOptionId === option.id;
                const isThisCorrect = option.id === currentQuestion.correctOptionId;
                const letter = ['A', 'B', 'C', 'D'][idx];

                let cardClass =
                  'bg-[#F8F5F0] text-[#121110] border-[#121110]/15 hover:bg-[#ECE5D8]/60 hover:border-[#121110]/35';

                if (isAnswered) {
                  if (isThisCorrect) {
                    cardClass = 'bg-[#ECE5D8] text-[#121110] border-[#121110] font-medium';
                  } else if (isSelected && !isThisCorrect) {
                    cardClass = 'bg-[#F3E8EA] text-[#6B1422] border-[#6B1422]';
                  } else {
                    cardClass = 'bg-[#F8F5F0] text-[#4E4A45] border-[#121110]/10 opacity-75';
                  }
                }

                return (
                  <button
                    key={option.id}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => onSelectAnswer(currentQuestion.id, option.id)}
                    className={`w-full text-left p-4 sm:p-5 border transition-colors flex items-start justify-between gap-4 ${
                      isAnswered ? 'cursor-default' : 'cursor-pointer'
                    } ${cardClass}`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs px-2 py-1 border border-current/25 shrink-0 mt-0.5">
                        {letter}
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed">
                        {option.text}
                      </span>
                    </div>

                    {isAnswered && isThisCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-[#121110] shrink-0 mt-0.5" />
                    )}
                    {isAnswered && isSelected && !isThisCorrect && (
                      <XCircle className="w-5 h-5 text-[#6B1422] shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="mt-7 pt-6 border-t border-[#121110]/12">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-2">
                  {isCorrect ? (
                    <span className="text-[#121110] font-semibold">Doğru Yanıt</span>
                  ) : (
                    <span className="text-[#6B1422] font-semibold">
                      Yanlış Yanıt · Doğru Seçenek Açıklaması
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base text-[#4E4A45] leading-relaxed">
                  {currentQuestion.explanation}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
                  {allAnswered && (
                    <button
                      type="button"
                      onClick={() => setShowResults(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B1422] text-[#F8F5F0] text-sm font-semibold hover:bg-[#4F0D18] transition-colors cursor-pointer"
                    >
                      Sonuç Ekranını Gör
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                  {!allAnswered && (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#6B1422] text-[#F8F5F0] text-sm font-semibold hover:bg-[#4F0D18] transition-colors cursor-pointer"
                    >
                      {currentIndex < QUIZ_QUESTIONS.length - 1
                        ? 'Sonraki Soru'
                        : 'Cevaplanmamış Soruya Git'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Question Navigator Sidebar */}
          <aside className="lg:col-span-4 bg-[#ECE5D8]/60 border border-[#121110]/12 p-6">
            <p className="text-xs font-mono uppercase tracking-wider text-[#6B1422] mb-4">
              Soru Haritası
            </p>
            <div className="grid grid-cols-5 gap-2">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const ans = userAnswers[q.id];
                const correct = ans === q.correctOptionId;
                const active = idx === currentIndex;

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`py-2.5 text-xs font-mono tabular-nums border transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#121110] text-[#F8F5F0] border-[#121110]'
                        : ans
                        ? correct
                          ? 'bg-[#ECE5D8] text-[#121110] border-[#121110]/30'
                          : 'bg-[#F3E8EA] text-[#6B1422] border-[#6B1422]/40'
                        : 'bg-[#F8F5F0] text-[#4E4A45] border-[#121110]/15'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </button>
                );
              })}
            </div>

            {allAnswered && (
              <button
                type="button"
                onClick={() => setShowResults(true)}
                className="mt-5 w-full py-2.5 bg-[#6B1422] text-[#F8F5F0] text-xs font-semibold hover:bg-[#4F0D18] transition-colors cursor-pointer"
              >
                Sonuç Ekranını Aç
              </button>
            )}

            <div className="mt-6 pt-5 border-t border-[#121110]/12 space-y-2 text-xs text-[#4E4A45]">
              <p className="font-medium text-[#121110]">Kapsanan Temalar:</p>
              {topics.map((topic) => (
                <div key={topic} className="flex items-center justify-between">
                  <span>{topic}</span>
                  <span className="font-mono tabular-nums">
                    {QUIZ_QUESTIONS.filter((q) => q.topic === topic).length} soru
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      ) : (
        /* Results Screen */
        <div className="mt-8 space-y-8">
          <div className="bg-[#ECE5D8] border border-[#121110]/15 p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-mono uppercase tracking-widest text-[#6B1422] mb-2">
                  Öğrenme Etkinliği Sonucu
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#121110]">
                  Toplam Doğru: <span className="tabular-nums">{currentScore}</span> /{' '}
                  <span className="tabular-nums">{QUIZ_QUESTIONS.length}</span>
                </h2>
                <p className="mt-4 text-base text-[#4E4A45] leading-relaxed">
                  {currentScore >= 8
                    ? 'Harika bir kavrayış! Örtük önyargı, mikro saldırganlık ve kurumsal ayrımcılık gibi görünmeyen mekanizmaları yüksek bir doğrulukla ayırt edebiliyorsun.'
                    : currentScore >= 5
                    ? 'Güçlü bir başlangıç yaptın. Bazı ince kavramlarda ve günlük örneklerde tekrar yaparak farkındalığını daha da derinleştirebilirsin.'
                    : 'Bu öğrenme etkinliği sayesinde ayrımcılığın görünmeyen katmanlarına dair pek çok yeni başlık keşfettin. Aşağıdaki önerilen konulara göz atarak devam edebilirsin.'}
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                <button
                  type="button"
                  onClick={() => onNavigate('action')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#6B1422] text-[#F8F5F0] text-sm font-semibold hover:bg-[#4F0D18] transition-colors cursor-pointer"
                >
                  Değişim Seninle Başlar Bölümüne Geç
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setShowResults(false)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-[#121110]/30 text-[#121110] text-sm font-medium hover:bg-[#F8F5F0] transition-colors cursor-pointer"
                  >
                    Soruları İncele
                  </button>
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#121110] text-[#121110] text-sm font-semibold hover:bg-[#F8F5F0] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Yeniden Çöz
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Topic Performance & Study Recommendations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 bg-[#F8F5F0] border border-[#121110]/15 p-7">
              <h3 className="font-serif text-2xl font-semibold text-[#121110] mb-5">
                Konulara Göre Dağılım
              </h3>
              <div className="space-y-4">
                {topicStats.map((stat) => {
                  const pct = Math.round((stat.correct / stat.total) * 100);
                  return (
                    <div key={stat.topic}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="font-medium text-[#121110]">{stat.topic}</span>
                        <span className="font-mono text-xs tabular-nums text-[#4E4A45]">
                          {stat.correct} / {stat.total} (%{pct})
                        </span>
                      </div>
                      <div className="w-full h-2 bg-[#ECE5D8]">
                        <div
                          className="h-full bg-[#6B1422] transition-all duration-300"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F8F5F0] border border-[#121110]/15 p-7">
              <h3 className="font-serif text-2xl font-semibold text-[#121110] mb-3">
                Daha Fazla Bilgi Edinmeniz Önerilen Konular
              </h3>
              {recommendedTopics.length > 0 ? (
                <div className="space-y-4 mt-4">
                  <p className="text-sm text-[#4E4A45]">
                    Yanıtlarına göre aşağıdaki başlıklara tekrar göz atman öğrenme
                    deneyimini pekiştirecektir:
                  </p>
                  <div className="divide-y divide-[#121110]/10">
                    {recommendedTopics.map((item) => {
                      const target = TOPIC_TO_SECTION[item.topic];
                      return (
                        <div
                          key={item.topic}
                          className="py-3.5 flex items-center justify-between gap-4"
                        >
                          <div>
                            <p className="font-medium text-sm text-[#121110]">
                              {item.topic}
                            </p>
                            <p className="text-xs text-[#4E4A45] font-mono tabular-nums">
                              {item.correct}/{item.total} doğru
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => onNavigate(target.section)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6B1422] hover:text-[#121110] transition-colors cursor-pointer shrink-0"
                          >
                            {target.actionLabel}
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="mt-4 p-5 bg-[#ECE5D8]/60 border border-[#121110]/12">
                  <p className="text-sm text-[#121110] leading-relaxed">
                    Tüm konularda soruları eksiksiz yanıtladın! Öğrendiklerini günlük
                    hayata taşımak için <strong>Değişim Seninle Başlar</strong> bölümündeki
                    10 pratik öneriyi inceleyebilir ve <strong>Kaynakça</strong> üzerinden
                    akademik okumalar yapabilirsin.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
