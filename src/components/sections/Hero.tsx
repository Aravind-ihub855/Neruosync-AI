import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BrainCircuit, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-32 overflow-hidden bg-slate-50">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sky-200/30 blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[30%] h-[30%] rounded-full bg-indigo-200/30 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-sky-600 font-medium text-sm mb-8 shadow-sm"
        >
          <Sparkles size={16} />
          <span>The Next Frontier of Cognitive Computing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-[1.1]"
        >
          Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">Through Clarity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-12"
        >
          NeuroSync AI provides high-fidelity neural orchestration and cognitive analytics for enterprises that demand absolute precision and scalable intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="xl" className="w-full sm:w-auto group">
            Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="xl" variant="outline" className="w-full sm:w-auto">
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-50"
        >
          <div className="flex items-center gap-2 font-bold text-xl"><BrainCircuit size={28} /> NEURAL</div>
          <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck size={28} /> SECURE</div>
          <div className="flex items-center gap-2 font-bold text-xl">SYNTHETIC</div>
          <div className="flex items-center gap-2 font-bold text-xl">QUANTUM</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;