import React from 'react';
import { ArrowRight, Globe, Code2, Bot, Wrench, CheckCircle2 } from 'lucide-react';
import { t, type Language } from '../../lib/variant-translations';
import { MotionFade } from './MotionFade';
import { SectionHeader } from './SectionHeader';
import { CONTACT_EMAIL } from '../../lib/site-config';

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
    <section id="pricing" className="border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <SectionHeader
          title={t(language, 'pricing.title')}
          subtitle={t(language, 'pricing.subtitle')}
          alignment="center"
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

                  <ul className="mb-8 space-y-2.5 flex-1">
                    {Array.isArray(deliverables) && deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 rounded-full bg-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t(language, 'pricing.emailSubject', { service: t(language, card.nameKey) }))}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition group mt-auto hover:text-black"
                  >
                    {t(language, 'pricing.cta')}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </MotionFade>
            );
          })}
        </div>

        <MotionFade delay={0.5}>
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3">
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

        <MotionFade delay={0.6}>
          <p className="mt-8 text-center text-sm text-gray-500">
            {t(language, 'pricing.note')}
          </p>
        </MotionFade>
      </div>
    </section>
  );
};

export { PricingSection };
