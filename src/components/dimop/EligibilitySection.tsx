import React from 'react';
import { Check } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface EligibilitySectionProps {
  language: DimopLanguage;
}

export const EligibilitySection: React.FC<EligibilitySectionProps> = ({ language }) => {
  const items = dt(language, 'eligibility.items') as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="eligibility" className="py-20 bg-gray-50/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 text-center">
            {dt(language, 'eligibility.title')}
          </h2>
        </MotionFade>

        <div className="grid sm:grid-cols-2 gap-3">
          {items.map((item, index) => (
            <MotionFade key={index} delay={0.05 + index * 0.05}>
              <div className="flex items-start gap-3 rounded-xl border border-gray-200/80 bg-white p-5 h-full">
                <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-gray-900 flex items-center justify-center">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};
