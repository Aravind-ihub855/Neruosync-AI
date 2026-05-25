import React from 'react';
import { LucideIcon } from 'lucide-react';
import GlassCard from './GlassCard';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}

const FeatureCard = ({ icon: Icon, title, description, tag }: FeatureCardProps) => {
  return (
    <GlassCard intensity="medium" className="p-6 h-full group hover:border-sky-200 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sky-50 text-sky-600 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
          <Icon size={24} />
        </div>
        {tag && (
          <span className="mb-2 inline-block w-fit px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-700">
            {tag}
          </span>
        )}
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed flex-1">{description}</p>
      </div>
    </GlassCard>
  );
};

export default FeatureCard;