import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  if (testimonials.length === 0) return null;

  return (
    <div className="relative max-w-4xl mx-auto w-full px-4 overflow-hidden">
      <div className="relative h-[400px] md:h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center text-center"
          >
            <div className="mb-8">
              <Quote className="w-12 h-12 text-sky-500/20 mx-auto" />
            </div>
            <p className="text-xl md:text-2xl font-medium text-slate-800 mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex flex-col items-center">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mb-4 ring-4 ring-white shadow-lg"
              />
              <h4 className="font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-sky-600 font-medium">{testimonials[currentIndex].role} @ {testimonials[currentIndex].company}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button onClick={prev} className="p-2 rounded-full border border-slate-200 text-slate-400 hover:bg-white hover:text-sky-500 transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-sky-500' : 'w-2 bg-slate-200'}`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 rounded-full border border-slate-200 text-slate-400 hover:bg-white hover:text-sky-500 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;