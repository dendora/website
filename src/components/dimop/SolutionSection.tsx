import React from 'react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface SolutionSectionProps {
  language: DimopLanguage;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ language }) => {
  const steps = dt(language, 'solution.steps') as Array<{
    step: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
            {dt(language, 'solution.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            {dt(language, 'solution.subtitle')}
          </p>
        </MotionFade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <MotionFade key={index} delay={0.1 + index * 0.08}>
              <div className="relative rounded-2xl border border-gray-100 bg-gray-50/50 p-6 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all h-full">
                <div className="text-4xl font-black text-gray-900/[0.07] mb-3 tabular-nums leading-none">
                  0{step.step}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};
