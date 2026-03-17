import React, { useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface FaqSectionProps {
  language: DimopLanguage;
}

const FaqItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
      aria-expanded={isOpen}
    >
      <span className="text-base font-medium text-gray-900 pr-4 group-hover:text-gray-600 transition-colors">
        {question}
      </span>
      <ChevronDown
        className={cn(
          'h-4 w-4 text-gray-300 flex-shrink-0 transition-transform duration-200',
          isOpen && 'rotate-180 text-gray-900'
        )}
      />
    </button>
    <div
      className={cn(
        'overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96 pb-5' : 'max-h-0'
      )}
    >
      <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
    </div>
  </div>
);

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const items = dt(language, 'faq.items') as Array<{
    question: string;
    answer: string;
  }>;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 text-center">
            {dt(language, 'faq.title')}
          </h2>
        </MotionFade>

        <MotionFade delay={0.1}>
          <div className="rounded-2xl border border-gray-100 bg-gray-50/50 px-6">
            {items.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </MotionFade>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
};
