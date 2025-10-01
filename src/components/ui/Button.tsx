import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center gap-2 rounded-full font-medium transition focus-visible:outline-none cursor-pointer';
    
    const variants = {
      primary: 'bg-black text-white hover:bg-black/85 focus-visible:ring-2 focus-visible:ring-black/30',
      outline: 'border border-black/10 bg-white text-black hover:border-black/20 hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/10',
      ghost: 'text-black/70 hover:text-black hover:bg-black/5'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base'
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };