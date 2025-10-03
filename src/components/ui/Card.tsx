import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface CardProps {
  variant?: 'feature' | 'project' | 'info' | 'tech';
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  brandBg?: string;
  image?: {
    src: string;
    alt: string;
  };
  onClick?: () => void;
  href?: string;
}

const Card: React.FC<CardProps> = ({
  variant = 'feature',
  className = '',
  children,
  title,
  description,
  icon,
  showIcon = true,
  brandBg,
  image,
  onClick,
  href
}) => {
  const baseStyles = 'relative rounded-xl border border-black/5 bg-white transition';
  
  const variants = {
    feature: 'group p-6 shadow-sm hover:shadow-md',
    project: 'group overflow-hidden border-black/10',
    info: 'p-4 border-black/10',
    tech: 'p-4 border-black/10'
  };

  const cardContent = (
    <div className={cn(baseStyles, variants[variant], className)} onClick={onClick}>
      {variant === 'feature' && (
        <>
          {showIcon && (
            <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
              {icon || <CheckCircle2 className="h-4 w-4" />}
            </div>
          )}
          {title && <h3 className="text-base font-semibold tracking-tight">{title}</h3>}
          {description && <p className="mt-2 text-sm text-black/60">{description}</p>}
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-black/5 transition group-hover:ring-2" />
          {children}
        </>
      )}

      {variant === 'project' && (
        <>
          {brandBg && (
            <div className={cn("aspect-[16/10]", brandBg)}>
              {image ? (
                <div className="flex h-full w-full items-center justify-center p-8">
                  <img src={image.src} alt={image.alt} className="max-h-full max-w-full object-contain brightness-0 invert" />
                </div>
              ) : (
                children
              )}
            </div>
          )}
          <div className="p-4">
            {title && <h3 className="text-base font-semibold">{title}</h3>}
            {description && <p className="mt-1 text-sm text-black/60">{description}</p>}
          </div>
        </>
      )}

      {(variant === 'info' || variant === 'tech') && (
        <>
          {title && <div className="text-sm font-semibold">{title}</div>}
          {description && <p className="mt-1 text-sm text-black/60">{description}</p>}
          {children}
        </>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export { Card };