import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PriceCard = ({ title, price, description, features, isPopular }: PriceCardProps) => {
  return (
    <div className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${isPopular ? 'bg-slate-900 text-white border-slate-800 shadow-2xl scale-105 z-10' : 'bg-white text-slate-900 border-slate-200'}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Most Popular
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className={`text-sm ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>{description}</p>
      </div>
      <div className="mb-8">
        <span className="text-4xl font-black">{price}</span>
        <span className={`text-sm ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}> / month</span>
      </div>
      <ul className="space-y-4 mb-10 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm">
            <Check className={`w-5 h-5 shrink-0 ${isPopular ? 'text-sky-400' : 'text-sky-500'}`} />
            <span className={isPopular ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        variant={isPopular ? 'secondary' : 'outline'} 
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
};

export default PriceCard;