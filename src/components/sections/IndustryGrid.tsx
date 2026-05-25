import React from 'react';
import { Building2, Activity, Truck, Landmark, ArrowRight } from 'lucide-react';
import BentoGrid from '../ui/BentoGrid';

const industries = [
  {
    title: "Aetheris Health",
    description: "Real-time neural diagnostic assistance for radiology workflows and predictive pathology.",
    icon: <Activity className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
    color: "bg-rose-50 text-rose-500",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
  },
  {
    title: "Lumina Finance",
    description: "Predictive liquidity modeling and autonomous fraud detection for global assets.",
    icon: <Landmark className="w-6 h-6" />,
    className: "md:col-span-2 md:row-span-1",
    color: "bg-emerald-50 text-emerald-500",
    image: "https://images.unsplash.com/photo-1611974717484-3b2389a791d2?w=800&q=80"
  },
  {
    title: "Vertex Logistics",
    description: "Autonomous route optimization and supply chain orchestration.",
    icon: <Truck className="w-6 h-6" />,
    className: "md:col-span-1 md:row-span-1",
    color: "bg-amber-50 text-amber-500",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
  },
  {
    title: "Global Systems",
    description: "Enterprise-wide resource planning with intelligent automation.",
    icon: <Building2 className="w-6 h-6" />,
    className: "md:col-span-3 md:row-span-1",
    color: "bg-sky-50 text-sky-500",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  }
];

const IndustryGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Empowering Critical Industries</h2>
            <p className="text-slate-600 text-lg">NeuroSync adapts to the unique data structures and operational requirements of your sector.</p>
          </div>
          <button className="flex items-center gap-2 text-sky-600 font-semibold hover:gap-3 transition-all">
            View All Solutions <ArrowRight size={20} />
          </button>
        </div>
        <BentoGrid items={industries} />
      </div>
    </section>
  );
};

export default IndustryGrid;