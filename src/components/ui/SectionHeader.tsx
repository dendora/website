import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = 'left',
  className = ''
}) => {
  const alignmentStyles = {
    left: 'items-end justify-between',
    center: 'items-center justify-center text-center'
  };

  if (alignment === 'center') {
    return (
      <div className={cn('mb-8 flex flex-col', alignmentStyles[alignment], className)}>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {subtitle && <span className="mt-2 text-sm text-black/70">{subtitle}</span>}
      </div>
    );
  }

  return (
    <div className={cn('mb-8 flex', alignmentStyles[alignment], className)}>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {subtitle && <span className="text-sm text-black/70">{subtitle}</span>}
    </div>
  );
};

export { SectionHeader };