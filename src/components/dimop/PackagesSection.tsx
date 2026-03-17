import React from 'react';
import { ArrowRight, Check, X, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface PackagesSectionProps {
  language: DimopLanguage;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ language }) => {
  const items = dt(language, 'packages.items') as Array<{
    label: string;
    name: string;
    price: string;
    ownContribution: string;
    popular: boolean;
    features: string[];
    excluded: string[];
    ideal: string;
  }>;

  return (
    <section id="packages" className="relative py-24 bg-gray-950 text-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/[0.04] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
            {dt(language, 'packages.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-lg text-white/50 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            {dt(language, 'packages.subtitle')}
          </p>
        </MotionFade>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 items-start">
          {items.map((item, index) => (
            <MotionFade key={index} delay={0.1 + index * 0.1}>
              <div
                className={cn(
                  'relative rounded-2xl p-6 flex flex-col h-full transition-all',
                  item.popular
                    ? 'border-2 border-emerald-400/40 bg-white/[0.06] backdrop-blur shadow-lg shadow-emerald-500/10 md:-mt-4 md:mb-[-16px]'
                    : 'border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.05]'
                )}
              >
                {/* Popular badge */}
                {item.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-emerald-500/25">
                    <Sparkles className="h-3 w-3" />
                    Legnépszerűbb
                  </div>
                )}

                {/* Label */}
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
                  {item.label}
                </span>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.name}
                </h3>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-3xl font-black text-emerald-400 tabular-nums">{item.price}</span>
                </div>
                <p className="text-sm text-white/40 mb-6">{item.ownContribution}</p>

                {/* Divider */}
                <div className="h-px bg-white/[0.06] mb-5" />

                {/* Features */}
                <ul className="space-y-2.5 mb-5 flex-1">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-emerald-400" />
                      <span className="text-white/70 leading-snug">{feature}</span>
                    </li>
                  ))}
                  {item.excluded.map((excluded, i) => (
                    <li key={`ex-${i}`} className="flex items-start gap-2.5 text-sm">
                      <X className="h-4 w-4 flex-shrink-0 mt-0.5 text-white/15" />
                      <span className="text-white/25 line-through leading-snug">{excluded}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal for */}
                <p className="text-xs text-white/30 mb-5">{item.ideal}</p>

                {/* CTA */}
                <a
                  href="#eligibility"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition group cursor-pointer',
                    item.popular
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                  )}
                >
                  {item.popular ? 'Ezt a csomagot választom' : 'Érdekel ez a csomag'}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};
