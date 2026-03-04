import React, { useState, useCallback } from 'react';
import { ArrowRight, CheckCircle2, Send, User, Mail, Phone } from 'lucide-react';
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
  const [formData, setFormData] = useState<FormData>({
    answers: {},
    name: '',
    email: '',
    phone: '',
  });

  const totalSteps = questions.length + 1; // questions + contact info
  const isContactStep = step === questions.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleOptionSelect = useCallback((questionId: string, option: string) => {
    setFormData((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: option },
    }));
    // Auto-advance after selection
    setTimeout(() => {
      setStep((s) => Math.min(s + 1, totalSteps - 1));
    }, 300);
  }, [totalSteps]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto body with form data
    const body = [
      `Név: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Telefon: ${formData.phone}` : '',
      '',
      '--- Előminősítő válaszok ---',
      ...questions.map((q) => `${q.question}: ${formData.answers[q.id] || 'N/A'}`),
    ]
      .filter(Boolean)
      .join('\n');

    const subject = encodeURIComponent(
      language === 'hu' ? 'DIMOP Előminősítés' : 'DIMOP Pre-Qualification'
    );
    const encodedBody = encodeURIComponent(body);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodedBody}`;
    setSubmitted(true);
  }, [formData, questions, language]);

  if (submitted) {
    return (
      <section id="qualification" className="py-24 bg-emerald-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <MotionFade>
            <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {dt(language, 'qualification.success')}
            </h2>
          </MotionFade>
        </div>
      </section>
    );
  }

  return (
    <section id="qualification" className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {dt(language, 'qualification.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-xl text-gray-500 text-center mb-10">
            {dt(language, 'qualification.subtitle')}
          </p>
        </MotionFade>

        {/* Progress bar */}
        <MotionFade delay={0.2}>
          <div className="mb-8">
            <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-2 text-sm text-gray-500 text-right">
              {step + 1} / {totalSteps}
            </div>
          </div>
        </MotionFade>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
          {!isContactStep ? (
            /* Question steps */
            <div key={step}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {questions[step].question}
              </h3>
              <div className="space-y-3">
                {questions[step].options.map((option) => {
                  const isSelected = formData.answers[questions[step].id] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleOptionSelect(questions[step].id, option)}
                      className={cn(
                        'w-full text-left px-5 py-4 rounded-xl border-2 transition-all cursor-pointer',
                        isSelected
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-gray-700'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {isSelected && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className={cn(
                    'px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer',
                    step === 0 && 'invisible'
                  )}
                >
                  ← {language === 'hu' ? 'Előző' : 'Previous'}
                </button>
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(s + 1, totalSteps - 1))}
                  disabled={!formData.answers[questions[step].id]}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                >
                  {language === 'hu' ? 'Következő' : 'Next'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Contact info step */
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {language === 'hu' ? 'Elérhetőségei' : 'Your Contact Details'}
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    <Phone className="inline h-4 w-4 mr-1" />
                    {dt(language, 'qualification.contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder={dt(language, 'qualification.contact.phonePlaceholder')}
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer"
                >
                  ← {language === 'hu' ? 'Előző' : 'Previous'}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 transition cursor-pointer"
                >
                  <Send className="h-4 w-4" />
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
