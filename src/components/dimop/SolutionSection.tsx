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
    <section id="solution" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {dt(language, 'solution.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            {dt(language, 'solution.subtitle')}
          </p>
        </MotionFade>

        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-emerald-200 hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <MotionFade key={index} delay={0.1 + index * 0.1}>
                <div className="flex gap-6 items-start group">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </MotionFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
