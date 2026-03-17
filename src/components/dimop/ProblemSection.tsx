import React from 'react';
import { BarChart3, Users, Clock, FileWarning } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface ProblemSectionProps {
  language: DimopLanguage;
}

const problemIcons = [
  <BarChart3 key="chart" className="h-5 w-5" />,
  <Users key="users" className="h-5 w-5" />,
  <Clock key="clock" className="h-5 w-5" />,
  <FileWarning key="file" className="h-5 w-5" />,
];

export const ProblemSection: React.FC<ProblemSectionProps> = ({ language }) => {
  const items = dt(language, 'problem.items') as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <div className="mb-3">
            <span className="text-sm font-medium uppercase tracking-widest text-gray-400">
              {dt(language, 'problem.subtitle')}
            </span>
          </div>
        </MotionFade>

        <MotionFade delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14 max-w-3xl leading-tight">
            {dt(language, 'problem.title')}
          </h2>
        </MotionFade>

        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <MotionFade key={index} delay={0.1 + index * 0.08}>
              <div className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-6 hover:border-gray-200 hover:bg-white hover:shadow-sm transition-all h-full">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gray-900 text-white mb-4">
                  {problemIcons[index]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
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
