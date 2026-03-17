import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  Loader2,
  Mail,
  Phone,
  RotateCcw,
  Send,
  Shield,
  User,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { CONTACT_EMAIL } from '../../lib/site-config';
import { MotionFade } from '../ui';

/* ─── Types ──────────────────────────────────────────────────── */

interface AssessmentQuestion {
  id: string;
  question: string;
  hint?: string;
  options: Array<{ value: string; label: string }>;
  diiPositive: string[];
}

interface Category {
  id: string;
  name: string;
  questions: AssessmentQuestion[];
}

interface QualificationQuestion {
  id: string;
  question: string;
  options: string[];
}

interface ChecklistCategory {
  category: string;
  items: string[];
}

interface StoredState {
  qualAnswers: Record<string, string>;
  assessAnswers: Record<string, string>;
  contact: { name: string; email: string; phone: string };
  phase: Phase;
  catIdx: number;
  excludeReason: string;
}

type Phase = 'qualification' | 'excluded' | 'assessment' | 'results' | 'contact' | 'done';

const STORAGE_KEY = 'dendora_dimop_assessment';

function loadState(): StoredState | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveState(s: StoredState) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch { /* quota exceeded — ignore */ }
}

function clearState() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch { /* ignore */ }
}

/* ─── Component ──────────────────────────────────────────────── */

export const EligibilityAssessment: React.FC<{ language: DimopLanguage }> = ({ language }) => {
  /* ── Translation data ── */
  const qualQuestions = dt(language, 'qualification.questions') as QualificationQuestion[];
  const categories = dt(language, 'preAssessment.categories') as Category[];
  const checklist = dt(language, 'preAssessment.checklist') as ChecklistCategory[];
  const labels = dt(language, 'preAssessment.results') as Record<string, string>;

  const totalAssessment = categories.reduce((n, c) => n + c.questions.length, 0);

  /* ── State (hydrated from sessionStorage) ── */
  const [phase, setPhase] = useState<Phase>('qualification');
  const [qualStep, setQualStep] = useState(0);
  const [qualAnswers, setQualAnswers] = useState<Record<string, string>>({});
  const [assessAnswers, setAssessAnswers] = useState<Record<string, string>>({});
  const [catIdx, setCatIdx] = useState(0);
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [excludeReason, setExcludeReason] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Hydrate from sessionStorage once ── */
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      setQualAnswers(saved.qualAnswers);
      setAssessAnswers(saved.assessAnswers);
      setContact(saved.contact);
      setPhase(saved.phase === 'done' ? 'qualification' : saved.phase);
      setCatIdx(saved.catIdx);
      if (saved.excludeReason) setExcludeReason(saved.excludeReason);
    }
    setHydrated(true);
  }, []);

  /* ── Persist to sessionStorage on changes ── */
  useEffect(() => {
    if (!hydrated) return;
    saveState({ qualAnswers, assessAnswers, contact, phase, catIdx, excludeReason });
  }, [qualAnswers, assessAnswers, contact, phase, catIdx, hydrated, excludeReason]);

  /* ── Helpers ── */
  const assessedCount = Object.keys(assessAnswers).length;
  const currentCat = categories[catIdx];
  const catComplete = currentCat?.questions.every(q => q.id in assessAnswers);

  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ── Scoring ── */
  const calculateScore = () => {
    let total = 0;
    const cats = categories.map(cat => {
      let score = 0;
      cat.questions.forEach(q => {
        const ans = assessAnswers[q.id];
        if (ans && q.diiPositive.includes(ans)) score++;
      });
      total += score;
      return { category: cat.name, score, max: cat.questions.length };
    });
    return { total, max: totalAssessment, cats };
  };

  const getLevel = (total: number, max: number) => {
    const pct = total / max;
    if (pct <= 0.3) return 'low' as const;
    if (pct <= 0.6) return 'medium' as const;
    return 'high' as const;
  };

  /* ── Handlers ── */
  const handleQualAnswer = useCallback((id: string, value: string) => {
    setQualAnswers(prev => ({ ...prev, [id]: value }));
    setTimeout(() => {
      // Budapest = ineligible
      if (id === 'location' && value === 'Budapest') {
        setExcludeReason('budapest');
        setPhase('excluded');
        scrollToTop();
        return;
      }
      // 50+ employees = ineligible (only micro/kis)
      if (id === 'companySize' && value === '50+ fő') {
        setExcludeReason('companySize');
        setPhase('excluded');
        scrollToTop();
        return;
      }
      if (qualStep < qualQuestions.length - 1) {
        setQualStep(s => s + 1);
      } else {
        setPhase('assessment');
        scrollToTop();
      }
    }, 250);
  }, [qualStep, qualQuestions.length]);

  const handleAssessAnswer = (id: string, value: string) => {
    setAssessAnswers(prev => ({ ...prev, [id]: value }));
  };

  const goToResults = () => {
    setPhase('results');
    scrollToTop();
  };

  const goToContact = () => {
    setPhase('contact');
    scrollToTop();
  };

  const handleRestart = () => {
    clearState();
    setQualAnswers({});
    setAssessAnswers({});
    setContact({ name: '', email: '', phone: '' });
    setExcludeReason('');
    setPhase('qualification');
    setQualStep(0);
    setCatIdx(0);
    scrollToTop();
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const score = calculateScore();
    const level = getLevel(score.total, score.max);

    const payload = {
      source: 'dimop',
      name: contact.name,
      email: contact.email,
      phone: contact.phone || undefined,
      answers: [
        ...qualQuestions.map(q => ({
          question: q.question,
          answer: qualAnswers[q.id] || 'N/A',
        })),
        { question: '--- Digitális felmérés ---', answer: `Szint: ${level} (${score.total}/${score.max})` },
        ...categories.flatMap(cat =>
          cat.questions.map(q => ({
            question: q.question,
            answer: assessAnswers[q.id]
              ? cat.questions.find(cq => cq.id === q.id)?.options.find(o => o.value === assessAnswers[q.id])?.label || assessAnswers[q.id]
              : 'N/A',
          }))
        ),
      ],
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Network error');
      setPhase('done');
      clearState();
    } catch {
      const body = [
        `Név: ${contact.name}`,
        `Email: ${contact.email}`,
        contact.phone ? `Telefon: ${contact.phone}` : '',
        '',
        '--- Jogosultsági kérdések ---',
        ...qualQuestions.map(q => `${q.question}: ${qualAnswers[q.id] || 'N/A'}`),
        '',
        `--- Digitális felmérés (${level}: ${score.total}/${score.max}) ---`,
        ...categories.flatMap(cat =>
          cat.questions.map(q => {
            const ansVal = assessAnswers[q.id];
            const label = cat.questions.find(cq => cq.id === q.id)?.options.find(o => o.value === ansVal)?.label || ansVal || 'N/A';
            return `${q.question}: ${label}`;
          })
        ),
      ].filter(Boolean).join('\n');

      const subject = encodeURIComponent('DIMOP Konzultáció');
      const encodedBody = encodeURIComponent(body);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodedBody}`;
      setPhase('done');
      clearState();
    } finally {
      setSubmitting(false);
    }
  }, [contact, qualAnswers, assessAnswers, qualQuestions, categories]);

  if (!hydrated) return null;

  /* ─────────────────── PHASE: EXCLUDED ──── */
  if (phase === 'excluded') {
    const reasonKey = excludeReason || 'budapest';
    return (
      <section ref={sectionRef} id="eligibility" className="py-24 bg-gray-50/80">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <MotionFade>
            <div className="h-16 w-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              {dt(language, `unified.excluded.${reasonKey}.title`)}
            </h2>
            <p className="text-base text-gray-500 mb-6 max-w-md mx-auto">
              {dt(language, `unified.excluded.${reasonKey}.desc`)}
            </p>
            <div className="flex flex-col items-center gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition cursor-pointer"
              >
                <Mail className="h-4 w-4" />
                {dt(language, 'unified.excludedCta')}
              </a>
              <button
                onClick={() => {
                  const stepIdx = qualQuestions.findIndex(q => q.id === excludeReason);
                  setPhase('qualification');
                  setQualStep(stepIdx >= 0 ? stepIdx : 0);
                  scrollToTop();
                }}
                className="text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer"
              >
                {dt(language, 'unified.excludedBack')}
              </button>
              <button
                onClick={handleRestart}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" />
                {labels.restart}
              </button>
            </div>
          </MotionFade>
        </div>
      </section>
    );
  }

  /* ─────────────────── PHASE: DONE ─────────────────── */
  if (phase === 'done') {
    return (
      <section ref={sectionRef} id="eligibility" className="py-24 bg-gray-50/80">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <MotionFade>
            <div className="h-16 w-16 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              {dt(language, 'qualification.success')}
            </h2>
          </MotionFade>
        </div>
      </section>
    );
  }

  /* ─── Phase indicator ─── */
  const phases = [
    { key: 'qualification', label: dt(language, 'unified.phaseQualification') as string },
    { key: 'assessment', label: dt(language, 'unified.phaseAssessment') as string },
    { key: 'results', label: dt(language, 'unified.phaseResults') as string },
  ];
  const phaseIdx = phase === 'qualification' ? 0 : phase === 'assessment' ? 1 : 2;

  return (
    <section ref={sectionRef} id="eligibility" className="py-20 bg-gray-50/80">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <MotionFade>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-gray-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              {dt(language, 'unified.eyebrow')}
            </p>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 text-center">
            {dt(language, 'unified.title')}
          </h2>
          <p className="text-base text-gray-500 text-center mb-8 max-w-xl mx-auto">
            {dt(language, 'unified.subtitle')}
          </p>
        </MotionFade>

        {/* Phase Steps */}
        <div className="flex items-center justify-center gap-1 mb-8">
          {phases.map((p, i) => {
            const completed = i < phaseIdx;
            const current = i === phaseIdx;
            const handleClick = completed ? () => {
              if (p.key === 'qualification') { setPhase('qualification'); setQualStep(0); }
              else if (p.key === 'assessment') { setPhase('assessment'); setCatIdx(0); }
              else if (p.key === 'results') { setPhase('results'); }
              scrollToTop();
            } : undefined;
            return (
              <React.Fragment key={p.key}>
                {i > 0 && <div className="w-8 h-px bg-gray-200" />}
                <button
                  type="button"
                  disabled={!completed}
                  onClick={handleClick}
                  className={cn(
                    'flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-colors',
                    completed ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 cursor-pointer' :
                    current ? 'bg-gray-900 text-white cursor-default' :
                    'bg-gray-100 text-gray-400 cursor-default'
                  )}
                >
                  {completed && <Check className="h-3 w-3" />}
                  {p.label}
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* ─── PHASE 1: Qualification ─── */}
        {phase === 'qualification' && (
          <MotionFade key="qual">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
              {/* Progress */}
              <div className="mb-6">
                <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gray-900 transition-all duration-500"
                    style={{ width: `${((qualStep + 1) / qualQuestions.length) * 100}%` }}
                  />
                </div>
                <p className="mt-1.5 text-xs text-gray-400 text-right tabular-nums">
                  {qualStep + 1} / {qualQuestions.length}
                </p>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-5">
                {qualQuestions[qualStep].question}
              </h3>

              <div className="space-y-2">
                {qualQuestions[qualStep].options.map(option => {
                  const selected = qualAnswers[qualQuestions[qualStep].id] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleQualAnswer(qualQuestions[qualStep].id, option)}
                      className={cn(
                        'w-full text-left px-5 py-3.5 rounded-xl border transition-all cursor-pointer',
                        selected
                          ? 'border-gray-900 bg-gray-50 text-gray-900'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 text-gray-700'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{option}</span>
                        {selected && (
                          <div className="h-5 w-5 rounded-full bg-gray-900 flex items-center justify-center">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Inline feedback for previously answered steps */}
              {qualStep > 0 && (() => {
                const feedbackItems: Array<{ text: string; ok: boolean }> = [];
                // Location feedback
                const loc = qualAnswers['location'];
                if (loc && loc !== 'Budapest') {
                  const variant = loc.includes('Pest') ? 'C-26' : 'B-26';
                  feedbackItems.push({
                    text: dt(language, 'unified.feedback.locationOk') as string + ` (${variant})`,
                    ok: true,
                  });
                }
                // Size feedback
                const size = qualAnswers['companySize'];
                if (size && size !== '50+ fő') {
                  feedbackItems.push({
                    text: dt(language, 'unified.feedback.sizeOk') as string,
                    ok: true,
                  });
                }
                if (feedbackItems.length === 0) return null;
                return (
                  <div className="mt-4 space-y-1.5">
                    {feedbackItems.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span className="text-emerald-700">{f.text}</span>
                      </div>
                    ))}
                  </div>
                );
              })()}

              {qualStep > 0 && (
                <button
                  type="button"
                  onClick={() => setQualStep(s => s - 1)}
                  className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition cursor-pointer"
                >
                  ← {dt(language, 'preAssessment.prev')}
                </button>
              )}
            </div>
          </MotionFade>
        )}

        {/* ─── PHASE 2: Assessment ─── */}
        {phase === 'assessment' && (
          <MotionFade key="assess">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
              {/* Category tabs */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {categories.map((cat, i) => {
                  const done = cat.questions.every(q => q.id in assessAnswers);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setCatIdx(i)}
                      className={cn(
                        'text-xs px-3 py-1.5 rounded-full transition cursor-pointer',
                        i === catIdx
                          ? 'bg-gray-900 text-white'
                          : done
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      )}
                    >
                      {done && <Check className="inline h-3 w-3 mr-0.5 -mt-px" />}
                      {cat.name}
                    </button>
                  );
                })}
              </div>

              {/* Global progress */}
              <div className="mb-6">
                <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gray-900 transition-all duration-300"
                    style={{ width: `${(assessedCount / totalAssessment) * 100}%` }}
                  />
                </div>
                <p className="mt-1.5 text-xs text-gray-400 text-right tabular-nums">
                  {assessedCount} / {totalAssessment}
                </p>
              </div>

              {/* Checklist hint */}
              {checklist[catIdx] && (
                <div className="rounded-xl bg-blue-50/60 border border-blue-100 px-4 py-3 mb-5">
                  <p className="text-[11px] font-semibold text-blue-900/50 uppercase tracking-wider mb-1.5">
                    {labels.checklistTitle}
                  </p>
                  <ul className="space-y-0.5">
                    {checklist[catIdx].items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-blue-900/70">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Questions */}
              <div className="space-y-4">
                {currentCat.questions.map(q => (
                  <div key={q.id} className="rounded-xl bg-gray-50/60 p-4">
                    <p className="text-sm font-medium text-gray-900 mb-1">{q.question}</p>
                    {q.hint && <p className="text-xs text-gray-400 mb-2.5">{q.hint}</p>}
                    <div className="flex flex-wrap gap-2">
                      {q.options.map(opt => (
                        <button
                          key={opt.value}
                          onClick={() => handleAssessAnswer(q.id, opt.value)}
                          className={cn(
                            'text-sm px-3.5 py-2 rounded-full border transition cursor-pointer',
                            assessAnswers[q.id] === opt.value
                              ? 'bg-gray-900 text-white border-gray-900'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => {
                    if (catIdx > 0) setCatIdx(i => i - 1);
                    else { setPhase('qualification'); setQualStep(qualQuestions.length - 1); }
                  }}
                  className="text-sm text-gray-400 hover:text-gray-600 transition cursor-pointer"
                >
                  ← {dt(language, 'preAssessment.prev')}
                </button>

                {catIdx < categories.length - 1 ? (
                  <button
                    onClick={() => catComplete && setCatIdx(i => i + 1)}
                    disabled={!catComplete}
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-30 hover:bg-gray-800 transition cursor-pointer"
                  >
                    {dt(language, 'preAssessment.next')} <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={goToResults}
                    disabled={assessedCount < totalAssessment}
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white disabled:opacity-30 hover:bg-gray-800 transition cursor-pointer"
                  >
                    {dt(language, 'preAssessment.submit')} <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </MotionFade>
        )}

        {/* ─── PHASE 3: Results ─── */}
        {phase === 'results' && (() => {
          const r = calculateScore();
          const level = getLevel(r.total, r.max);
          return (
            <MotionFade key="results">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
                <h3 className="text-xl font-extrabold text-gray-900 mb-6 text-center">{labels.title}</h3>

                {/* Score bar */}
                <div className="relative w-full h-3 bg-gray-100 rounded-full mb-6 overflow-hidden">
                  <div
                    className={cn(
                      'absolute inset-y-0 left-0 rounded-full transition-all duration-700',
                      level === 'low' ? 'bg-emerald-500' : level === 'medium' ? 'bg-amber-500' : 'bg-red-400'
                    )}
                    style={{ width: `${(r.total / r.max) * 100}%` }}
                  />
                </div>

                <div className="text-center mb-6">
                  <span className="text-4xl font-black tabular-nums text-gray-900">{r.total}</span>
                  <span className="text-lg text-gray-400 font-medium">/{r.max}</span>
                  <p className={cn(
                    'mt-2 text-sm font-semibold',
                    level === 'low' ? 'text-emerald-600' : level === 'medium' ? 'text-amber-600' : 'text-red-500'
                  )}>
                    {level === 'low' ? labels.low : level === 'medium' ? labels.medium : labels.high}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {level === 'low' ? labels.lowDesc : level === 'medium' ? labels.mediumDesc : labels.highDesc}
                  </p>
                </div>

                {/* Category breakdown */}
                <div className="grid gap-2 mb-8">
                  {r.cats.map((cat, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-2.5">
                      <span className="text-sm text-gray-700">{cat.category}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={cn(
                              'h-full rounded-full',
                              cat.score === 0 ? 'bg-emerald-500' : cat.score < cat.max ? 'bg-amber-400' : 'bg-red-400'
                            )}
                            style={{ width: `${cat.max > 0 ? (cat.score / cat.max) * 100 : 0}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 tabular-nums w-7 text-right">{cat.score}/{cat.max}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={goToContact}
                    className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition cursor-pointer"
                  >
                    {level === 'low' ? labels.ctaLow : level === 'medium' ? labels.ctaMedium : labels.ctaHigh}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition cursor-pointer"
                  >
                    <RotateCcw className="h-3 w-3" />
                    {labels.restart}
                  </button>
                </div>

                <p className="mt-6 text-[11px] text-gray-400 text-center leading-relaxed">{labels.disclaimer}</p>
              </div>
            </MotionFade>
          );
        })()}

        {/* ─── PHASE 3b: Contact Form ─── */}
        {phase === 'contact' && (
          <MotionFade key="contact">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {dt(language, 'unified.contactTitle')}
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="ea-name" className="block text-sm font-medium text-gray-500 mb-1">
                      <User className="inline h-4 w-4 mr-1" />
                      {dt(language, 'qualification.contact.name')}
                    </label>
                    <input
                      type="text"
                      id="ea-name"
                      required
                      placeholder={dt(language, 'qualification.contact.namePlaceholder') as string}
                      value={contact.name}
                      onChange={e => setContact(c => ({ ...c, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="ea-email" className="block text-sm font-medium text-gray-500 mb-1">
                      <Mail className="inline h-4 w-4 mr-1" />
                      {dt(language, 'qualification.contact.email')}
                    </label>
                    <input
                      type="email"
                      id="ea-email"
                      required
                      placeholder={dt(language, 'qualification.contact.emailPlaceholder') as string}
                      value={contact.email}
                      onChange={e => setContact(c => ({ ...c, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="ea-phone" className="block text-sm font-medium text-gray-500 mb-1">
                      <Phone className="inline h-4 w-4 mr-1" />
                      {dt(language, 'qualification.contact.phone')}
                    </label>
                    <input
                      type="tel"
                      id="ea-phone"
                      placeholder={dt(language, 'qualification.contact.phonePlaceholder') as string}
                      value={contact.phone}
                      onChange={e => setContact(c => ({ ...c, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setPhase('results')}
                    className="text-sm text-gray-400 hover:text-gray-600 transition cursor-pointer"
                  >
                    ← {dt(language, 'preAssessment.prev')}
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition cursor-pointer disabled:opacity-60"
                  >
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    {dt(language, 'qualification.submit')}
                  </button>
                </div>
              </form>
            </div>
          </MotionFade>
        )}
      </div>
    </section>
  );
};
