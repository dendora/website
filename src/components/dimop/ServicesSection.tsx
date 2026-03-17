import React from 'react';
import {
  Laptop,
  Code,
  Package,
  Bot,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface ServicesSectionProps {
  language: DimopLanguage;
}

const serviceIcons: Record<string, React.ReactNode> = {
  laptop: <Laptop className="h-5 w-5" />,
  code: <Code className="h-5 w-5" />,
  package: <Package className="h-5 w-5" />,
  bot: <Bot className="h-5 w-5" />,
  shield: <ShieldCheck className="h-5 w-5" />,
  graduationCap: <GraduationCap className="h-5 w-5" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const items = dt(language, 'services.items') as Array<{
    title: string;
    icon: string;
    description: string;
    examples: string[];
  }>;

  return (
    <section id="services" className="py-24 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
            {dt(language, 'services.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-lg text-gray-400 text-center mb-4 max-w-3xl mx-auto">
            {dt(language, 'services.subtitle')}
          </p>
        </MotionFade>
        <MotionFade delay={0.15}>
          <p className="text-sm text-gray-500 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-center mb-16 max-w-2xl mx-auto font-medium">
            {dt(language, 'services.note')}
          </p>
        </MotionFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <MotionFade key={index} delay={0.1 + index * 0.06}>
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 hover:border-gray-300 hover:shadow-sm transition-all group h-full flex flex-col">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gray-900 text-white mb-4">
                  {serviceIcons[item.icon] || <Code className="h-5 w-5" />}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <ul className="mt-auto space-y-1.5">
                  {item.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="h-1 w-1 rounded-full bg-gray-300 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};
