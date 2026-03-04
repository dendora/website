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
  laptop: <Laptop className="h-6 w-6" />,
  code: <Code className="h-6 w-6" />,
  package: <Package className="h-6 w-6" />,
  bot: <Bot className="h-6 w-6" />,
  shield: <ShieldCheck className="h-6 w-6" />,
  graduationCap: <GraduationCap className="h-6 w-6" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const items = dt(language, 'services.items') as Array<{
    title: string;
    icon: string;
    description: string;
    examples: string[];
  }>;

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            {dt(language, 'services.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-xl text-gray-500 text-center mb-4 max-w-3xl mx-auto">
            {dt(language, 'services.subtitle')}
          </p>
        </MotionFade>
        <MotionFade delay={0.15}>
          <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-2.5 text-center mb-16 max-w-2xl mx-auto font-medium">
            {dt(language, 'services.note')}
          </p>
        </MotionFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <MotionFade key={index} delay={0.1 + index * 0.07}>
              <div className="rounded-xl border border-gray-200 bg-white p-6 hover:border-emerald-300 hover:shadow-md transition-all group h-full flex flex-col">
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-lg bg-emerald-100 text-emerald-700 mb-4 group-hover:bg-emerald-200 transition-colors">
                  {serviceIcons[item.icon] || <Code className="h-6 w-6" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <ul className="mt-auto space-y-1.5">
                  {item.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
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
