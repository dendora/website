import React from 'react';
import { Bot, FileText, Zap, BookOpen } from 'lucide-react';
import { dt, type DimopLanguage } from '../../lib/dimop-translations';
import { MotionFade } from '../ui';

interface AiServicesSectionProps {
  language: DimopLanguage;
}

const aiIcons = [
  <Bot key="bot" className="h-7 w-7" />,
  <FileText key="file" className="h-7 w-7" />,
  <Zap key="zap" className="h-7 w-7" />,
  <BookOpen key="book" className="h-7 w-7" />,
];

export const AiServicesSection: React.FC<AiServicesSectionProps> = ({ language }) => {
  const items = dt(language, 'ai.items') as Array<{
    title: string;
    description: string;
    roi: string;
  }>;

  return (
    <section id="ai" className="py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-emerald-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {dt(language, 'ai.title')}
          </h2>
        </MotionFade>
        <MotionFade delay={0.1}>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            {dt(language, 'ai.subtitle')}
          </p>
        </MotionFade>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <MotionFade key={index} delay={0.1 + index * 0.1}>
              <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-emerald-500/30 hover:bg-white/10 transition-all group">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-500/20 text-emerald-400 mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  {aiIcons[index]}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-sm text-emerald-400">
                  <Zap className="h-3.5 w-3.5" />
                  {item.roi}
                </div>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
};
