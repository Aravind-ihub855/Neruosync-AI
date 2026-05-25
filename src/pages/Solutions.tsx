import React from 'react';
import BentoGrid from '../components/ui/BentoGrid';
import { Brain, Shield, Zap, Database, BarChart3, Globe, Cpu, Search } from 'lucide-react';

const solutions = [
  {
    title: "Cognitive Analytics",
    description: "Transform unstructured data into high-fidelity strategic insights using deep-reasoning models.",
    icon: <BarChart3 className="w-6 h-6" />,
    className: "md:col-span-2",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Neural Orchestration",
    description: "Coordinate multi-agent LLM workflows for complex enterprise decision-making.",
    icon: <Brain className="w-6 h-6" />,
    className: "md:col-span-2",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Secure Synthesis",
    description: "Privacy-first autonomous synthesis of documentation and code.",
    icon: <Shield className="w-6 h-6" />,
    className: "md:col-span-1",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Real-time Ingestion",
    description: "Edge-computing optimized data streaming.",
    icon: <Zap className="w-6 h-6" />,
    className: "md:col-span-1",
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Global Semantic Search",
    description: "Context-aware retrieval across entire enterprise knowledge bases.",
    icon: <Search className="w-6 h-6" />,
    className: "md:col-span-2",
    color: "bg-sky-50 text-sky-600"
  },
  {
    title: "Hardware Optimization",
    description: "Custom kernels for next-gen AI accelerators.",
    icon: <Cpu className="w-6 h-6" />,
    className: "md:col-span-2",
    color: "bg-rose-50 text-rose-600"
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Scalable intelligence for every use case.</h1>
          <p className="text-lg text-slate-600">From simple automation to massive-scale cognitive orchestration, our modular toolkit grows with your business.</p>
        </div>
        <BentoGrid items={solutions} />
      </div>
    </div>
  );
};

export default Solutions;