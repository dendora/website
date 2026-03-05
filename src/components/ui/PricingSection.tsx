import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { t, type Language } from '../../lib/variant-translations';
import { MotionFade } from './MotionFade';
import { SectionHeader } from './SectionHeader';
import { CONTACT_EMAIL } from '../../lib/site-config';

interface PricingTier {
  nameKey: string;
  priceKey: string;
  periodKey: string;
  descriptionKey: string;
  featuresKey: string;
  highlighted?: boolean;
  badge?: string;
}

const tiers: PricingTier[] = [
  {
    nameKey: 'pricing.tiers.seed.name',
    priceKey: 'pricing.tiers.seed.price',
    periodKey: 'pricing.tiers.seed.period',
    descriptionKey: 'pricing.tiers.seed.description',
    featuresKey: 'pricing.tiers.seed.features',
  },
  {
    nameKey: 'pricing.tiers.growth.name',
    priceKey: 'pricing.tiers.growth.price',
    periodKey: 'pricing.tiers.growth.period',
    descriptionKey: 'pricing.tiers.growth.description',
    featuresKey: 'pricing.tiers.growth.features',
    highlighted: true,
    badge: 'pricing.tiers.growth.badge',
  },
  {
    nameKey: 'pricing.tiers.scale.name',
    priceKey: 'pricing.tiers.scale.price',
    periodKey: 'pricing.tiers.scale.period',
    descriptionKey: 'pricing.tiers.scale.description',
    featuresKey: 'pricing.tiers.scale.features',
  },
];

export interface PricingSectionProps {
  language: Language;
}

const PricingSection: React.FC<PricingSectionProps> = ({ language }) => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t(language, 'pricing.title')}
          subtitle={t(language, 'pricing.subtitle')}
          alignment="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => {
            const features: string[] = t(language, tier.featuresKey) || [];
            const isHighlighted = tier.highlighted;

            return (
              <MotionFade key={tier.nameKey} delay={index * 0.1}>
                <div
                  className={cn(
                    'relative flex flex-col rounded-xl border p-8 h-full transition-shadow duration-300',
                    isHighlighted
                      ? 'border-black bg-white shadow-xl ring-1 ring-black/5'
                      : 'border-black/10 bg-white hover:shadow-lg'
                  )}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                        {t(language, tier.badge)}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t(language, tier.nameKey)}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {t(language, tier.descriptionKey)}
                    </p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {t(language, tier.priceKey)}
                      </span>
                      <span className="ml-1 text-sm text-gray-500">
                        {t(language, tier.periodKey)}
                      </span>
                    </div>
                  </div>

                  <ul className="mb-8 space-y-3 flex-1">
                    {Array.isArray(features) && features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t(language, 'pricing.emailSubject', { tier: t(language, tier.nameKey) }))}`}
                    className={cn(
                      'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition cursor-pointer group',
                      isHighlighted
                        ? 'bg-black text-white hover:bg-black/85'
                        : 'border border-black/10 bg-white text-black hover:border-black/20 hover:bg-black/5'
                    )}
                  >
                    {t(language, 'pricing.cta')}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </MotionFade>
            );
          })}
        </div>

        <MotionFade delay={0.4}>
          <p className="mt-12 text-center text-sm text-gray-500">
            {t(language, 'pricing.note')}
          </p>
        </MotionFade>
      </div>
    </section>
  );
};

export { PricingSection };
