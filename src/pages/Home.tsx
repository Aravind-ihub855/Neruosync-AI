import React from 'react';
import Hero from '../components/sections/Hero';
import IndustryGrid from '../components/sections/IndustryGrid';
import HowItWorks from '../components/sections/HowItWorks';
import ProductPreview from '../components/sections/ProductPreview';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import Button from '../components/ui/Button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO, Aetheris Health",
    company: "Aetheris",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    text: "The predictive modeling capabilities provided by NeuroSync have transformed our diagnostic accuracy by nearly 40% in just six months."
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Head of Engineering, Lumina",
    company: "Lumina Finance",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    text: "Integration was seamless. The API is robust, well-documented, and the latency is virtually non-existent even under heavy loads."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Operations Director, Vertex",
    company: "Vertex Logistics",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    text: "Autonomous route optimization has saved us millions in operational costs. It's like having a superintelligent brain for our fleet."
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <IndustryGrid />
      <HowItWorks />
      <ProductPreview />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-slate-600">Powering the most advanced cognitive systems on the planet.</p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      <section className="py-24 bg-sky-500">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to upgrade your cognitive architecture?</h2>
          <p className="text-sky-100 text-lg mb-12">Join the hundreds of enterprises scaling their intelligence with NeuroSync.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-white text-sky-600 hover:bg-sky-50">Get Started Now</Button>
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">Speak to an Expert</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;