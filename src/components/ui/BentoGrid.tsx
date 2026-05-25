import React from 'react';
import { motion } from 'framer-motion';

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  color?: string;
  image?: string;
}

interface BentoGridProps {
  items: BentoItem[];
}

const BentoGrid = ({ items }: BentoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5 }}
          className={`relative overflow-hidden rounded-[2.5rem] p-8 border border-slate-200 bg-white group ${item.className || ''}`}
        >
          {item.image && (
            <img 
              src={item.image} 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500" 
              alt={item.title}
            />
          )}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${item.color || 'bg-sky-50 text-sky-500'}`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BentoGrid;