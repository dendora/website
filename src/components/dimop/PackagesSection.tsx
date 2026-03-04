import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { cn } from '../../lib/utils';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface PackagesSectionProps {
  language: DimopLanguage;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ language }) => {
  const packages = dt(language, 'packages.items') as Array<{
    name: string;
    price: string;
    grantNote: string;
    selfPay: string;
    description: string;
    popular?: boolean;
    features: string[];
    idealFor: string;
  }>;

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {dt(language, 'packages.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            {dt(language, 'packages.subtitle')}
          </p>
        </MotionFade>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <MotionFade key={pkg.name} delay={0.1 + index * 0.1}>
              <div
                className={cn(
                  'relative rounded-2xl border p-8 h-full flex flex-col transition-shadow',
                  pkg.popular
                    ? 'border-emerald-500 bg-emerald-50/50 shadow-xl shadow-emerald-600/10 ring-2 ring-emerald-500'
                    : 'border-gray-200 bg-white hover:shadow-lg'
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-4 py-1 text-sm font-semibold text-white">
                      <Star className="h-3.5 w-3.5" />
                      {dt(language, 'packages.popular')}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-gray-900">{pkg.price}</div>
                  <div className="text-sm text-emerald-600 font-medium mt-1">{pkg.grantNote}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{pkg.selfPay}</div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-xs text-gray-500 mb-4 italic">
                    {pkg.idealFor}
                  </div>
                  <a
                    href="#qualification"
                    className={cn(
                      'w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition cursor-pointer group',
                      pkg.popular
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/25'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    )}
                  >
                    {dt(language, 'packages.cta')}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};
