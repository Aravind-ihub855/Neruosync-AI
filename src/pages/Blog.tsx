import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "The Emergence of Agentic Reasoning in Large Language Models",
    category: "Research",
    date: "Oct 12, 2023",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    excerpt: "Exploring how multi-step reasoning chains are fundamentally changing the landscape of autonomous agents."
  },
  {
    id: 2,
    title: "Optimizing Inference Latency for Enterprise Deployments",
    category: "Engineering",
    date: "Oct 05, 2023",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    excerpt: "A deep dive into our custom kernel optimizations and hardware-aware quantization techniques."
  },
  {
    id: 3,
    title: "Scaling Intelligence: Moving Beyond Prompt Engineering",
    category: "Product",
    date: "Sep 28, 2023",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    excerpt: "Why the future of AI interaction lies in structured orchestration rather than simple natural language commands."
  }
];

const Blog = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Research', 'Engineering', 'Product'];

  const filteredPosts = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">The NeuroSync Journal</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Insights into the cutting edge of cognitive science and artificial intelligence.</p>
        </div>

        <div className="flex justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === cat ? 'bg-sky-500 text-white shadow-lg shadow-sky-200' : 'bg-white text-slate-600 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs font-bold text-sky-500 uppercase tracking-wider mb-4">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span className="text-slate-400 normal-case font-medium">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock size={14} />
                    {post.readTime} read
                  </div>
                  <button className="text-sky-500 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;