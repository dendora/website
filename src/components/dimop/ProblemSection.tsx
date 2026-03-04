import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface ProblemSectionProps {
  language: DimopLanguage;
}

const problemIcons = ['📊', '🏃', '⏰', '📋'];

export const ProblemSection: React.FC<ProblemSectionProps> = ({ language }) => {
  const items = dt(language, 'problem.items') as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-amber-500" />
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">
              {dt(language, 'problem.subtitle')}
            </span>
          </div>
        </MotionFade>

        <MotionFade delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 max-w-3xl">
            {dt(language, 'problem.title')}
          </h2>
        </MotionFade>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <MotionFade key={index} delay={0.1 + index * 0.08}>
              <div className="relative rounded-xl border border-gray-100 bg-gray-50 p-6 hover:border-amber-200 hover:bg-amber-50/30 transition-colors group">
                <div className="text-2xl mb-3">{problemIcons[index]}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};
