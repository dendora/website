import React, { useState, useCallback } from 'react';
import { ArrowRight, Check, Send, User, Mail, Phone, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { CONTACT_EMAIL } from '../../lib/site-config';
import { MotionFade } from '../ui';

interface LeadQualificationFormProps {
  language: DimopLanguage;
}

interface FormData {
  answers: Record<string, string>;
  name: string;
  email: string;
  phone: string;
}

export const LeadQualificationForm: React.FC<LeadQualificationFormProps> = ({ language }) => {
  const questions = dt(language, 'qualification.questions') as Array<{
    id: string;
    question: string;
    options: string[];
  }>;

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    answers: {},
    name: '',
    email: '',
    phone: '',
  });

  const totalSteps = questions.length + 1;
  const isContactStep = step === questions.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleOptionSelect = useCallback((questionId: string, option: string) => {
    setFormData((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: option },
    }));
    setTimeout(() => {
      setStep((s) => Math.min(s + 1, totalSteps - 1));
    }, 300);
  }, [totalSteps]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      source: 'dimop',
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      answers: questions.map((q) => ({
        question: q.question,
        answer: formData.answers[q.id] || 'N/A',
      })),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Hálózati hiba');
      }

      setSubmitted(true);
    } catch {
      const body = [
        `Név: ${formData.name}`,
        `Email: ${formData.email}`,
        formData.phone ? `Telefon: ${formData.phone}` : '',
        '',
        '--- Felmérő válaszok ---',
        ...questions.map((q) => `${q.question}: ${formData.answers[q.id] || 'N/A'}`),
      ]
        .filter(Boolean)
        .join('\n');

      const subject = encodeURIComponent('DIMOP Konzultáció');
      const encodedBody = encodeURIComponent(body);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodedBody}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }, [formData, questions]);

  if (submitted) {
    return (
      <section id="qualification" className="py-24 bg-gray-50/80">
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

  return (
    <section id="qualification" className="py-24 bg-gray-50/80">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
            {dt(language, 'qualification.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-lg text-gray-400 text-center mb-10">
            {dt(language, 'qualification.subtitle')}
          </p>
        </MotionFade>

        {/* Progress bar */}
        <MotionFade delay={0.2}>
          <div className="mb-8">
            <div className="h-1 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-gray-900 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-xs text-gray-400 text-right tabular-nums">
              {step + 1} / {totalSteps}
            </div>
          </div>
        </MotionFade>

        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8">
          {!isContactStep ? (
            <div key={step}>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {questions[step].question}
              </h3>
              <div className="space-y-2.5">
                {questions[step].options.map((option) => {
                  const isSelected = formData.answers[questions[step].id] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleOptionSelect(questions[step].id, option)}
                      className={cn(
                        'w-full text-left px-5 py-4 rounded-xl border transition-all cursor-pointer',
                        isSelected
                          ? 'border-gray-900 bg-gray-50 text-gray-900'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/50 text-gray-700'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{option}</span>
                        {isSelected && (
                          <div className="h-5 w-5 rounded-full bg-gray-900 flex items-center justify-center">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className={cn(
                    'px-4 py-2 text-sm text-gray-400 hover:text-gray-600 transition cursor-pointer',
                    step === 0 && 'invisible'
                  )}
                >
                  ← {language === 'hu' ? 'Előző' : 'Previous'}
                </button>
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(s + 1, totalSteps - 1))}
                  disabled={!formData.answers[questions[step].id]}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                >
                  {language === 'hu' ? 'Következő' : 'Next'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Contact info step */
            <form onSubmit={handleSubmit}>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                {language === 'hu' ? 'Elérhetőségei' : 'Your Contact Details'}
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">
                    <User className="inline h-4 w-4 mr-1" />
                    {dt(language, 'qualification.contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder={dt(language, 'qualification.contact.namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">
                    <Mail className="inline h-4 w-4 mr-1" />
                    {dt(language, 'qualification.contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder={dt(language, 'qualification.contact.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-1">
                    <Phone className="inline h-4 w-4 mr-1" />
                    {dt(language, 'qualification.contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder={dt(language, 'qualification.contact.phonePlaceholder')}
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder:text-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-gray-600 transition cursor-pointer"
                >
                  ← {language === 'hu' ? 'Előző' : 'Previous'}
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {dt(language, 'qualification.submit')}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
