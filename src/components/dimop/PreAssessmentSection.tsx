import React from 'react';
import { ArrowRight, CheckCircle2, ClipboardList, RotateCcw } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface Question {
  id: string;
  question: string;
  hint?: string;
  options: Array<{ value: string; label: string }>;
  /** Which answer values score 1 for DII (low-digital = 0 on most). */
  diiPositive: string[];
}

interface CategoryResult {
  category: string;
  score: number;
  maxScore: number;
}

interface PreAssessmentSectionProps {
  language: DimopLanguage;
}

export const PreAssessmentSection: React.FC<PreAssessmentSectionProps> = ({ language }) => {
  const title = dt(language, 'preAssessment.title') as string;
  const subtitle = dt(language, 'preAssessment.subtitle') as string;
  const categories = dt(language, 'preAssessment.categories') as Array<{
    id: string;
    name: string;
    questions: Question[];
  }>;
  const resultLabels = dt(language, 'preAssessment.results') as {
    title: string;
    low: string;
    lowDesc: string;
    medium: string;
    mediumDesc: string;
    high: string;
    highDesc: string;
    ctaLow: string;
    ctaMedium: string;
    ctaHigh: string;
    restart: string;
    disclaimer: string;
    checklistTitle: string;
  };
  const checklist = dt(language, 'preAssessment.checklist') as Array<{ category: string; items: string[] }>;

  const [answers, setAnswers] = React.useState<Record<string, string>>({});
  const [showResults, setShowResults] = React.useState(false);
  const [currentCatIdx, setCurrentCatIdx] = React.useState(0);

  const totalQuestions = categories.reduce((n, c) => n + c.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === totalQuestions;

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    if (allAnswered) setShowResults(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setShowResults(false);
    setCurrentCatIdx(0);
  };

  /* Score calculation — count how many DII indicators the company already meets */
  const calculateResults = (): { total: number; max: number; categories: CategoryResult[] } => {
    let total = 0;
    let max = 0;
    const cats: CategoryResult[] = categories.map(cat => {
      let catScore = 0;
      cat.questions.forEach(q => {
        max++;
        const ans = answers[q.id];
        if (ans && q.diiPositive.includes(ans)) {
          catScore++;
          total++;
        }
      });
      return { category: cat.name, score: catScore, maxScore: cat.questions.length };
    });
    return { total, max, categories: cats };
  };

  const getLevel = (total: number, max: number) => {
    const pct = total / max;
    if (pct <= 0.3) return 'low';
    if (pct <= 0.6) return 'medium';
    return 'high';
  };

  if (showResults) {
    const r = calculateResults();
    const level = getLevel(r.total, r.max);

    return (
      <section id="pre-assessment" className="py-20 bg-gray-50/80">
        <div className="max-w-3xl mx-auto px-4">
          <MotionFade>
            <div className="rounded-2xl border border-gray-200/80 bg-white p-8 md:p-10">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">{resultLabels.title}</h2>

              {/* Score Bar */}
              <div className="relative w-full h-3 bg-gray-100 rounded-full mb-8 overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full rounded-full transition-all duration-700 ${
                    level === 'low' ? 'bg-emerald-500' : level === 'medium' ? 'bg-amber-500' : 'bg-red-400'
                  }`}
                  style={{ width: `${(r.total / r.max) * 100}%` }}
                />
              </div>

              <div className="text-center mb-6">
                <span className="text-4xl font-black tabular-nums text-gray-900">{r.total}</span>
                <span className="text-lg text-gray-400 font-medium">/{r.max}</span>
                <p className={`mt-2 text-sm font-semibold ${
                  level === 'low' ? 'text-emerald-600' : level === 'medium' ? 'text-amber-600' : 'text-red-500'
                }`}>
                  {level === 'low' ? resultLabels.low : level === 'medium' ? resultLabels.medium : resultLabels.high}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {level === 'low' ? resultLabels.lowDesc : level === 'medium' ? resultLabels.mediumDesc : resultLabels.highDesc}
                </p>
              </div>

              {/* Category Breakdown */}
              <div className="grid gap-3 mb-8">
                {r.categories.map((cat, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                    <span className="text-sm font-medium text-gray-700">{cat.category}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            cat.score === 0 ? 'bg-emerald-500' : cat.score < cat.maxScore ? 'bg-amber-400' : 'bg-red-400'
                          }`}
                          style={{ width: `${(cat.score / cat.maxScore) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 tabular-nums w-8 text-right">{cat.score}/{cat.maxScore}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center space-y-3">
                <a
                  href="#qualification"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition cursor-pointer"
                >
                  {level === 'low' ? resultLabels.ctaLow : level === 'medium' ? resultLabels.ctaMedium : resultLabels.ctaHigh}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-1 mx-auto text-xs text-gray-400 hover:text-gray-600 transition cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3" />
                  {resultLabels.restart}
                </button>
              </div>

              <p className="mt-6 text-[11px] text-gray-400 text-center leading-relaxed">{resultLabels.disclaimer}</p>
            </div>
          </MotionFade>
        </div>
      </section>
    );
  }

  const currentCat = categories[currentCatIdx];
  const catQuestionIds = currentCat.questions.map(q => q.id);
  const catAnswered = catQuestionIds.filter(id => id in answers).length;
  const catComplete = catAnswered === currentCat.questions.length;

  return (
    <section id="pre-assessment" className="py-20 bg-gray-50/80">
      <div className="max-w-3xl mx-auto px-4">
        <MotionFade>
          <div className="flex items-center justify-center gap-2 mb-3">
            <ClipboardList className="h-5 w-5 text-gray-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              {dt(language, 'preAssessment.eyebrow')}
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">{title}</h2>
          <p className="text-base text-gray-500 text-center mb-10 max-w-xl mx-auto">{subtitle}</p>
        </MotionFade>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-1">
              {categories.map((cat, i) => (
                <button
                  key={cat.id}
                  onClick={() => setCurrentCatIdx(i)}
                  className={`text-xs px-3 py-1 rounded-full transition cursor-pointer ${
                    i === currentCatIdx
                      ? 'bg-gray-900 text-white'
                      : categories[i].questions.every(q => q.id in answers)
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <span className="text-xs text-gray-400 tabular-nums">{answeredCount}/{totalQuestions}</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-900 rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Checklist tip for current category */}
        {checklist[currentCatIdx] && (
          <MotionFade key={`tip-${currentCatIdx}`}>
            <div className="rounded-xl bg-blue-50/60 border border-blue-100 px-5 py-4 mb-6">
              <p className="text-xs font-semibold text-blue-900/60 uppercase tracking-wider mb-2">
                {resultLabels.checklistTitle}
              </p>
              <ul className="space-y-1">
                {checklist[currentCatIdx].items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-blue-900/80">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </MotionFade>
        )}

        {/* Questions for current category */}
        <div className="space-y-4">
          {currentCat.questions.map((q, qi) => (
            <MotionFade key={q.id} delay={qi * 0.04}>
              <div className="rounded-2xl border border-gray-200/80 bg-white p-5">
                <p className="text-sm font-medium text-gray-900 mb-1">{q.question}</p>
                {q.hint && <p className="text-xs text-gray-400 mb-3">{q.hint}</p>}
                <div className="flex flex-wrap gap-2">
                  {q.options.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(q.id, opt.value)}
                      className={`text-sm px-4 py-2 rounded-full border transition cursor-pointer ${
                        answers[q.id] === opt.value
                          ? 'bg-gray-900 text-white border-gray-900'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </MotionFade>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => setCurrentCatIdx(i => Math.max(0, i - 1))}
            disabled={currentCatIdx === 0}
            className="text-sm text-gray-400 hover:text-gray-600 disabled:opacity-30 transition cursor-pointer"
          >
            ← {dt(language, 'preAssessment.prev')}
          </button>

          {currentCatIdx < categories.length - 1 ? (
            <button
              onClick={() => catComplete && setCurrentCatIdx(i => i + 1)}
              disabled={!catComplete}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-40 hover:bg-gray-800 transition cursor-pointer"
            >
              {dt(language, 'preAssessment.next')} <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-40 hover:bg-gray-800 transition cursor-pointer"
            >
              {dt(language, 'preAssessment.submit')} <ArrowRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
