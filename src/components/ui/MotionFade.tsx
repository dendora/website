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

const MotionFade: React.FC<MotionFadeProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  className,
  once = true,
  margin = '-50px'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check prefers-reduced-motion inside useEffect to avoid SSR/hydration mismatch
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) {
      setPrefersReducedMotion(true);
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, margin]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const transforms: Record<string, string> = {
    up: 'translateY(8px)',
    down: 'translateY(-8px)',
    left: 'translateX(8px)',
    right: 'translateX(-8px)',
    scale: 'scale(0.98)',
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : transforms[direction],
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export { MotionFade };