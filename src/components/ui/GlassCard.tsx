import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: 'low' | 'medium' | 'high';
}

const GlassCard = ({ className, intensity = 'medium', children, ...props }: GlassCardProps) => {
  const intensities = {
    low: 'bg-white/40 backdrop-blur-sm border border-white/20',
    medium: 'bg-white/60 backdrop-blur-md border border-white/40 shadow-sm',
    high: 'bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg'
  };

  return (
    <div 
      className={cn(
        'rounded-3xl transition-all duration-300 hover:-translate-y-1',
        intensities[intensity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;