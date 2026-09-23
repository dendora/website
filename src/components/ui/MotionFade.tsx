import React, { useRef, useEffect, useState } from 'react';

export interface MotionFadeProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
  once?: boolean;
  margin?: string;
}

type RevealState = 'idle' | 'armed' | 'visible';

/**
 * Content is rendered visible (SSR, no JS, reduced motion). Only elements that start
 * below the viewport after mount are "armed" (hidden via CSS) until they scroll in.
 */
export function useReveal<T extends HTMLElement>(once = true, margin = '0px') {
  const ref = useRef<T>(null);
  const [state, setState] = useState<RevealState>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState('armed');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('visible');
          if (once) observer.disconnect();
        } else if (!once) {
          setState('armed');
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, margin]);

  const className = state === 'idle' ? 'reveal' : state === 'armed' ? 'reveal reveal-armed' : 'reveal reveal-armed is-visible';
  return { ref, className };
}

const transforms: Record<NonNullable<MotionFadeProps['direction']>, string> = {
  up: 'translateY(8px)',
  down: 'translateY(-8px)',
  left: 'translateX(8px)',
  right: 'translateX(-8px)',
  scale: 'scale(0.98)',
};

const MotionFade: React.FC<MotionFadeProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className,
  once = true,
  margin = '0px'
}) => {
  const { ref, className: revealClass } = useReveal<HTMLDivElement>(once, margin);

  const style = {
    '--reveal-delay': `${delay}s`,
    '--reveal-duration': `${duration}s`,
    '--reveal-from': transforms[direction],
  } as React.CSSProperties;

  return (
    <div ref={ref} style={style} className={className ? `${revealClass} ${className}` : revealClass}>
      {children}
    </div>
  );
};

export { MotionFade };