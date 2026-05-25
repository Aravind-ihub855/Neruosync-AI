import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Server, Code, CheckCircle2 } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const ProductPreview = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Command Center', icon: Monitor },
    { id: 'api', label: 'Developer API', icon: Code },
    { id: 'infra', label: 'Neural Infrastructure', icon: Server },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Built for <span className="text-sky-400">High-Performance</span> Teams
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Whether you're orchestrating complex agentic workflows or building custom neural integrations, NeuroSync provides the ultimate toolkit.
            </p>

            <div className="flex flex-col gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 p-5 rounded-2xl transition-all text-left ${
                    activeTab === tab.id ? 'bg-white/10 ring-1 ring-white/20' : 'hover:bg-white/5'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${activeTab === tab.id ? 'bg-sky-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <tab.icon size={20} />
                  </div>
                  <div>
                    <div className={`font-bold ${activeTab === tab.id ? 'text-white' : 'text-slate-400'}`}>{tab.label}</div>
                    <div className="text-xs text-slate-500">Optimized for reliability and speed</div>
                  </div>
                  {activeTab === tab.id && <CheckCircle2 className="ml-auto text-sky-400 w-5 h-5" />}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-sky-500/20 blur-[100px] rounded-full" />
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              className="relative z-10 rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-2 shadow-2xl overflow-hidden"
            >
              <div className="bg-slate-950 rounded-2xl aspect-video overflow-hidden flex items-center justify-center relative">
                {activeTab === 'dashboard' && (
                  <div className="w-full h-full p-6">
                    <div className="grid grid-cols-3 gap-4 h-full">
                      <div className="col-span-2 bg-slate-900/50 rounded-xl border border-white/5 p-4">
                        <div className="h-4 w-24 bg-sky-500/20 rounded mb-4" />
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-20 bg-slate-800/50 rounded-lg" />
                          <div className="h-20 bg-slate-800/50 rounded-lg" />
                        </div>
                      </div>
                      <div className="col-span-1 bg-slate-900/50 rounded-xl border border-white/5 p-4 flex flex-col gap-4">
                        <div className="h-full w-full bg-gradient-to-b from-sky-500/20 to-transparent rounded-lg" />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'api' && (
                  <div className="w-full h-full p-6 font-mono text-xs text-sky-300">
                    <div className="text-slate-500 mb-2"># NeuroSync API V2.4</div>
                    <div>POST /v2/orchestrate</div>
                    <div className="text-indigo-400 mt-2">{`{`}</div>
                    <div className="pl-4">"agent_id": "brain_01",</div>
                    <div className="pl-4">"intent": "optimized_path",</div>
                    <div className="pl-4">"context": {`{...}`}</div>
                    <div className="text-indigo-400">{`}`}</div>
                    <div className="text-emerald-400 mt-4">Response: 200 OK</div>
                  </div>
                )}
                {activeTab === 'infra' && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 border-2 border-sky-500/30 rounded-full animate-ping" />
                      <div className="absolute inset-4 border-2 border-indigo-500/30 rounded-full animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center text-sky-400 font-bold">NODE-01</div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;