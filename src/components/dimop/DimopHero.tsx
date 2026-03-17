import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface DimopHeroProps {
  language: DimopLanguage;
}

export const DimopHero: React.FC<DimopHeroProps> = ({ language }) => {
  const title = dt(language, 'hero.title') as string;
  const proofItems = dt(language, 'hero.proofItems') as string[];

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Badge */}
        <MotionFade>
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-500 mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {dt(language, 'hero.badge')}
          </span>
        </MotionFade>

        {/* Headline */}
        <MotionFade delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 whitespace-pre-line">
            {title}
          </h1>
        </MotionFade>

        {/* Subtitle */}
        <MotionFade delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            {dt(language, 'hero.subtitle')}
          </p>
        </MotionFade>

        {/* CTA */}
        <MotionFade delay={0.3}>
          <div className="mt-10">
            <a
              href="#eligibility"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 transition cursor-pointer group"
            >
              {dt(language, 'hero.cta')}
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </MotionFade>

        {/* Proof strip */}
        <MotionFade delay={0.35}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {proofItems.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-2 text-xs font-medium text-gray-700"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </MotionFade>

        {/* Stats row */}
        <MotionFade delay={0.4}>
          <div className="mt-14 flex items-center justify-center gap-8 md:gap-14">
            {(['support', 'maxGrant', 'deadline'] as const).map((key) => (
              <div key={key} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 tabular-nums">
                  {dt(language, `hero.stats.${key}.value`)}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {dt(language, `hero.stats.${key}.label`)}
                </div>
              </div>
            ))}
          </div>
        </MotionFade>

        {/* Note */}
        <MotionFade delay={0.5}>
          <p className="mt-8 text-sm text-gray-500">
            {dt(language, 'hero.note')}
          </p>
        </MotionFade>
      </div>
    </section>
  );
};
