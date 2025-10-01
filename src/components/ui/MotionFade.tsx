import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

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
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const directions = {
    up: { opacity: 0, y: 8 },
    down: { opacity: 0, y: -8 },
    left: { opacity: 0, x: 8 },
    right: { opacity: 0, x: -8 },
    scale: { opacity: 0, scale: 0.98 }
  };

  const animate = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      initial={directions[direction]}
      whileInView={animate[direction]}
      viewport={{ once, margin }}
      transition={{
        duration,
        ease: 'easeOut',
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { MotionFade };