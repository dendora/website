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
  recommendedForKey: string;
  highlighted?: boolean;
  badge?: string;
  ctaKey: string;
  emailSubjectKey: string;
}

const buildTiers: PricingTier[] = [
  {
    nameKey: 'pricing.build.tiers.starter.name',
    priceKey: 'pricing.build.tiers.starter.price',
    periodKey: 'pricing.build.tiers.starter.period',
    descriptionKey: 'pricing.build.tiers.starter.description',
    featuresKey: 'pricing.build.tiers.starter.features',
    recommendedForKey: 'pricing.build.tiers.starter.recommendedFor',
    ctaKey: 'pricing.build.cta',
    emailSubjectKey: 'pricing.build.emailSubject',
  },
  {
    nameKey: 'pricing.build.tiers.business.name',
    priceKey: 'pricing.build.tiers.business.price',
    periodKey: 'pricing.build.tiers.business.period',
    descriptionKey: 'pricing.build.tiers.business.description',
    featuresKey: 'pricing.build.tiers.business.features',
    recommendedForKey: 'pricing.build.tiers.business.recommendedFor',
    highlighted: true,
    badge: 'pricing.build.tiers.business.badge',
    ctaKey: 'pricing.build.cta',
    emailSubjectKey: 'pricing.build.emailSubject',
  },
  {
    nameKey: 'pricing.build.tiers.premium.name',
    priceKey: 'pricing.build.tiers.premium.price',
    periodKey: 'pricing.build.tiers.premium.period',
    descriptionKey: 'pricing.build.tiers.premium.description',
    featuresKey: 'pricing.build.tiers.premium.features',
    recommendedForKey: 'pricing.build.tiers.premium.recommendedFor',
    ctaKey: 'pricing.build.cta',
    emailSubjectKey: 'pricing.build.emailSubject',
  },
];

const maintenanceTiers: PricingTier[] = [
  {
    nameKey: 'pricing.maintenance.tiers.lite.name',
    priceKey: 'pricing.maintenance.tiers.lite.price',
    periodKey: 'pricing.maintenance.tiers.lite.period',
    descriptionKey: 'pricing.maintenance.tiers.lite.description',
    featuresKey: 'pricing.maintenance.tiers.lite.features',
    recommendedForKey: 'pricing.maintenance.tiers.lite.recommendedFor',
    ctaKey: 'pricing.maintenance.cta',
    emailSubjectKey: 'pricing.maintenance.emailSubject',
  },
  {
    nameKey: 'pricing.maintenance.tiers.standard.name',
    priceKey: 'pricing.maintenance.tiers.standard.price',
    periodKey: 'pricing.maintenance.tiers.standard.period',
    descriptionKey: 'pricing.maintenance.tiers.standard.description',
    featuresKey: 'pricing.maintenance.tiers.standard.features',
    recommendedForKey: 'pricing.maintenance.tiers.standard.recommendedFor',
    highlighted: true,
    badge: 'pricing.maintenance.tiers.standard.badge',
    ctaKey: 'pricing.maintenance.cta',
    emailSubjectKey: 'pricing.maintenance.emailSubject',
  },
  {
    nameKey: 'pricing.maintenance.tiers.pro.name',
    priceKey: 'pricing.maintenance.tiers.pro.price',
    periodKey: 'pricing.maintenance.tiers.pro.period',
    descriptionKey: 'pricing.maintenance.tiers.pro.description',
    featuresKey: 'pricing.maintenance.tiers.pro.features',
    recommendedForKey: 'pricing.maintenance.tiers.pro.recommendedFor',
    ctaKey: 'pricing.maintenance.cta',
    emailSubjectKey: 'pricing.maintenance.emailSubject',
  },
];

interface PricingGridProps {
  tiers: PricingTier[];
  language: Language;
}

const PricingGrid: React.FC<PricingGridProps> = ({ tiers, language }) => (
  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {tiers.map((tier, index) => {
      const features: string[] = t(language, tier.featuresKey) || [];
      const recommendedFor: string[] = t(language, tier.recommendedForKey) || [];
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

            <ul className="mb-6 space-y-3 flex-1">
              {Array.isArray(features) && features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {Array.isArray(recommendedFor) && recommendedFor.length > 0 && (
              <div className="mb-8 border-t border-black/5 pt-4">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
                  {t(language, 'pricing.recommendedForLabel')}
                </p>
                <ul className="space-y-1">
                  {recommendedFor.map((item, i) => (
                    <li key={i} className="text-sm text-gray-500">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t(language, tier.emailSubjectKey, { tier: t(language, tier.nameKey) }))}`}
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition cursor-pointer group mt-auto',
                isHighlighted
                  ? 'bg-black text-white hover:bg-black/85'
                  : 'border border-black/10 bg-white text-black hover:border-black/20 hover:bg-black/5'
              )}
            >
              {t(language, tier.ctaKey)}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </MotionFade>
      );
    })}
  </div>
);

export interface PricingSectionProps {
  language: Language;
}

const PricingSection: React.FC<PricingSectionProps> = ({ language }) => {
  return (
    <section id="pricing" className="border-t border-black/5">
      {/* Website Build Packages */}
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <SectionHeader
          title={t(language, 'pricing.build.title')}
          subtitle={t(language, 'pricing.build.subtitle')}
          alignment="center"
          className="mb-16"
        />
        <PricingGrid tiers={buildTiers} language={language} />
      </div>

      {/* Maintenance Plans */}
      <div className="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
        <SectionHeader
          title={t(language, 'pricing.maintenance.title')}
          subtitle={t(language, 'pricing.maintenance.subtitle')}
          alignment="center"
          className="mb-16"
        />
        <PricingGrid tiers={maintenanceTiers} language={language} />

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
