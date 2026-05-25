import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setActiveIndex(activeIndex === item.id ? null : item.id)}
            className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            <span>{item.title}</span>
            <ChevronDown 
              className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeIndex === item.id ? 'rotate-180' : ''}`} 
            />
          </button>
          <AnimatePresence>
            {activeIndex === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;