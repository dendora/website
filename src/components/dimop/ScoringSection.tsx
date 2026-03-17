import React from 'react';
import { Check, User } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface ScoringSectionProps {
  language: DimopLanguage;
}

export const ScoringSection: React.FC<ScoringSectionProps> = ({ language }) => {
  const items = dt(language, 'scoring.items') as Array<{
    points: string;
    title: string;
    description: string;
    status: string;
  }>;

  const summary = dt(language, 'scoring.summary') as {
    score: string;
    title: string;
    description: string;
  };

  return (
    <section id="scoring" className="py-24 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-3">
            {dt(language, 'scoring.maxLabel')}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {dt(language, 'scoring.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-lg text-gray-400 mb-14 max-w-2xl leading-relaxed">
            {dt(language, 'scoring.subtitle')}
          </p>
        </MotionFade>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item, index) => {
            const isClientResponsibility = item.status === 'Ön teljesíti';
            const isLarge = index === 0;
            return (
              <MotionFade key={index} delay={0.1 + index * 0.06}>
                <div className={`rounded-2xl border border-gray-200/80 bg-white p-5 md:p-6 hover:border-gray-300 hover:shadow-sm transition-all h-full flex flex-col ${isLarge ? 'md:col-span-2' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl md:text-4xl font-black text-gray-900 tabular-nums">
                      {item.points}
                    </span>
                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${isClientResponsibility ? 'bg-gray-100 text-gray-500' : 'bg-emerald-50 text-emerald-600'}`}>
                      {isClientResponsibility ? <User className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-auto">{item.description}</p>
                </div>
              </MotionFade>
            );
          })}

          {/* Summary tile */}
          <MotionFade delay={0.5}>
            <div className="col-span-2 md:col-span-1 rounded-2xl bg-gray-900 p-6 flex flex-col items-center justify-center text-center text-white">
              <div className="text-5xl font-black mb-1">{summary.score}</div>
              <div className="text-sm font-semibold text-white/80 mb-2">{summary.title}</div>
              <p className="text-xs text-white/40 max-w-xs">{summary.description}</p>
            </div>
          </MotionFade>
        </div>
      </div>
    </section>
  );
};
