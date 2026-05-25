import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Redefining the boundary of thought and machine.</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Founded in 2022, NeuroSync AI was born from a single realization: 
            the future of intelligence isn't just about more data, it's about better reasoning.
          </p>
        </motion.div>

        <div className="space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                To democratize high-fidelity cognitive reasoning, making the world's most advanced AI reasoning available to every enterprise, regardless of their existing technical stack.
              </p>
            </div>
            <div className="aspect-video rounded-3xl bg-slate-100 overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" className="w-full h-full object-cover" alt="Team meeting" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-video rounded-3xl bg-slate-100 overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" className="w-full h-full object-cover" alt="Technology" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Technology</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our proprietary architecture, <i>NeuroSync Core</i>, utilizes multi-modal transformers and dynamic reasoning chains to achieve human-like precision at machine-like speeds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;