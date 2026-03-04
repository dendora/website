import React from 'react';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface DimopHeroProps {
  language: DimopLanguage;
}

const statIcons = [
  <Shield key="shield" className="h-5 w-5 text-emerald-600" />,
  <TrendingUp key="trending" className="h-5 w-5 text-emerald-600" />,
  <Users key="users" className="h-5 w-5 text-emerald-600" />,
];

export const DimopHero: React.FC<DimopHeroProps> = ({ language }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50 pt-20 pb-20 px-4">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-green-100/30 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <MotionFade>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {dt(language, 'hero.badge')}
          </span>
        </MotionFade>

        <MotionFade delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            {dt(language, 'hero.title')}
          </h1>
        </MotionFade>

        <MotionFade delay={0.2}>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {dt(language, 'hero.subtitle')}
          </p>
        </MotionFade>

        <MotionFade delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#qualification"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700 shadow-lg shadow-emerald-600/25 cursor-pointer group"
            >
              {dt(language, 'hero.cta.primary')}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition hover:border-gray-300 hover:bg-gray-50 cursor-pointer"
            >
              {dt(language, 'hero.cta.secondary')}
            </a>
          </div>
        </MotionFade>

        <MotionFade delay={0.4}>
          <div className="mt-14 flex flex-wrap justify-center gap-8 md:gap-12">
            {(['support', 'maxGrant', 'clients'] as const).map((key, i) => (
              <div key={key} className="flex items-center gap-3">
                {statIcons[i]}
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">
                    {dt(language, `hero.stats.${key}.value`)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {dt(language, `hero.stats.${key}.label`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionFade>

        <MotionFade delay={0.5}>
          <p className="mt-10 text-sm text-gray-500 italic">
            {dt(language, 'hero.trust')}
          </p>
        </MotionFade>
      </div>
    </section>
  );
};
