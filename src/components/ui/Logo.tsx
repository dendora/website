import React from 'react';
import { cn } from '../../lib/utils';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
  textContent?: {
    companyName: string;
    tagline: string;
  };
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  className = '', 
  showText = false,
  textContent
}) => {
  const sizes = {
    sm: {
      container: 'h-7 w-7',
      inner: 'left-1 top-1 h-5 w-5 rounded-md',
      accent: 'right-1 top-1 h-5 w-2.5 rounded-r-md'
    },
    md: {
      container: 'h-8 w-8',
      inner: 'left-1 top-1 h-6 w-6 rounded-lg',
      accent: 'right-1 top-1 h-6 w-3 rounded-r-lg'
    },
    lg: {
      container: 'h-14 w-14',
      inner: 'left-1 top-1 h-10 w-10 rounded-xl',
      accent: 'right-1 top-1 h-10 w-5 rounded-r-xl'
    }
  };

  const currentSize = sizes[size];

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn('relative', currentSize.container)}>
        <div className="absolute inset-0 rounded-lg bg-black" />
        <div className={cn('absolute bg-white', currentSize.inner)} />
        <div className={cn('absolute bg-black', currentSize.accent)} />
      </div>
      {showText && textContent && (
        <div className="flex flex-col items-start text-left">
          <span className={cn(
            "font-semibold tracking-wide",
            size === 'lg' ? 'text-xl' : 'text-sm'
          )}>{textContent.companyName}</span>
          <span className={cn(
            "uppercase tracking-[0.18em] text-black/60",
            size === 'lg' ? 'text-xs tracking-[0.22em]' : 'text-[10px]'
          )}>{textContent.tagline}</span>
        </div>
      )}
    </div>
  );
};

export { Logo };