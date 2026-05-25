import React from 'react';
import PriceCard from '../components/ui/PriceCard';
import { Check } from 'lucide-react';

const products = [
  {
    title: "Core Engine",
    price: "$499",
    description: "Base cognitive intelligence layer for small teams.",
    features: ["Up to 1M tokens/mo", "Standard API access", "Community support", "Basic Dashboard"],
    isPopular: false
  },
  {
    title: "NeuroSync Pro",
    price: "$1,999",
    description: "High-performance reasoning for growing scale.",
    features: ["Unlimited tokens", "Priority API latency", "Custom agent training", "Advanced Analytics", "24/7 Support"],
    isPopular: true
  },
  {
    title: "Enterprise AI",
    price: "Custom",
    description: "Dedicated infrastructure and white-glove service.",
    features: ["On-prem/Private Cloud", "Custom Model Fine-tuning", "SLA Guarantee", "Dedicated Engineer", "SSO/Compliance"],
    isPopular: false
  }
];

const Products = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Flexible Pricing for All Scale.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Choose the plan that best fits your operational requirements and cognitive load.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {products.map((p, idx) => (
            <PriceCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;