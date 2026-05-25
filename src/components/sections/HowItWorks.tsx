import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Database, Zap } from 'lucide-react';

const steps = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Ingestion",
    desc: "Secure, low-latency connection to your existing data lakes and real-time streams."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Neural Processing",
    desc: "Our proprietary transformer architectures process raw data into high-dimensional vectors."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Cognitive Synthesis",
    desc: "AI agents orchestrate multi-step reasoning to produce strategic insights."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Actionable Intelligence",
    desc: "Automated API triggers or human-in-the-loop dashboards deliver immediate impact."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Seamless Integration Workflow</h2>
          <p className="text-slate-600 max-w-xl mx-auto">From raw data to autonomous action in four streamlined stages.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-sky-500 mb-6 ring-4 ring-slate-50">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;