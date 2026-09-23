import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  /** Use the display serif for the heading. */
  display?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = 'left',
  display = false,
  className = ''
}) => {
  const alignmentStyles = {
    left: 'items-end justify-between',
    center: 'items-center justify-center text-center'
  };
  const headingClass = display
    ? 'display-heading text-4xl leading-[1.05] text-gray-900 md:text-5xl'
    : 'text-2xl font-semibold tracking-tight md:text-3xl';

  if (alignment === 'center') {
    return (
      <div className={cn('mb-8 flex flex-col', alignmentStyles[alignment], className)}>
        <h2 className={headingClass}>{title}</h2>
        {subtitle && <span className="mt-2 text-sm text-black/70">{subtitle}</span>}
      </div>
    );
  }

  return (
    <div className={cn('mb-8 flex gap-4', alignmentStyles[alignment], className)}>
      <h2 className={headingClass}>{title}</h2>
      {subtitle && <span className="text-sm text-black/70">{subtitle}</span>}
    </div>
  );
};

export { SectionHeader };