import React from 'react';
import { ArrowRight, Globe, Code2, Bot, Wrench, CheckCircle2 } from 'lucide-react';
import { t, type Language } from '../../lib/variant-translations';
import { SECTION_IDS } from '../../lib/site-config';
import { MotionFade } from './MotionFade';
import { SectionHeader } from './SectionHeader';

interface ServiceCard {
  key: string;
  nameKey: string;
  descriptionKey: string;
  deliverablesKey: string;
  icon: React.FC<{ className?: string }>;
}

const serviceCards: ServiceCard[] = [
  {
    key: 'websites',
    nameKey: 'pricing.services.websites.name',
    descriptionKey: 'pricing.services.websites.description',
    deliverablesKey: 'pricing.services.websites.deliverables',
    icon: Globe,
  },
  {
    key: 'software',
    nameKey: 'pricing.services.software.name',
    descriptionKey: 'pricing.services.software.description',
    deliverablesKey: 'pricing.services.software.deliverables',
    icon: Code2,
  },
  {
    key: 'ai',
    nameKey: 'pricing.services.ai.name',
    descriptionKey: 'pricing.services.ai.description',
    deliverablesKey: 'pricing.services.ai.deliverables',
    icon: Bot,
  },
  {
    key: 'support',
    nameKey: 'pricing.services.support.name',
    descriptionKey: 'pricing.services.support.description',
    deliverablesKey: 'pricing.services.support.deliverables',
    icon: Wrench,
  },
];

export interface PricingSectionProps {
  language: Language;
}

const PricingSection: React.FC<PricingSectionProps> = ({ language }) => {
  return (
    <section id={SECTION_IDS[language].services} className="border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <SectionHeader
          title={t(language, 'pricing.title')}
          subtitle={t(language, 'pricing.subtitle')}
          display
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {serviceCards.map((card, index) => {
            const Icon = card.icon;
            const deliverables: string[] = t(language, card.deliverablesKey) || [];

            return (
              <MotionFade key={card.key} delay={index * 0.1}>
                <div className="relative flex flex-col rounded-xl border border-black/10 bg-white p-8 h-full transition-shadow duration-300 hover:shadow-lg">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5">
                      <Icon className="h-5 w-5 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {t(language, card.nameKey)}
                    </h3>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    {t(language, card.descriptionKey)}
                  </p>

                  <ul className="space-y-2.5">
                    {Array.isArray(deliverables) && deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 rounded-full bg-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionFade>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href={`#${SECTION_IDS[language].contact}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-hover group"
          >
            {t(language, 'pricing.cta')}
            <ArrowRight className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-1" />
          </a>
        </div>

        <MotionFade delay={0.2}>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/5 pt-8">
            {((): React.ReactNode => {
              const items: string[] = t(language, 'pricing.differentiators') || [];
              return Array.isArray(items) && items.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  {item}
                </span>
              ));
            })()}
          </div>
        </MotionFade>

        <MotionFade delay={0.3}>
          <p className="mt-6 text-sm text-gray-500">
            {t(language, 'pricing.note')}
          </p>
        </MotionFade>
      </div>
    </section>
  );
};

export { PricingSection };
