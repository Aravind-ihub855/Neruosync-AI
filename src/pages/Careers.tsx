import React, { useState } from 'react';
import { Search, MapPin, Briefcase } from 'lucide-react';
import Button from '../components/ui/Button';

const jobs = [
  { id: 1, title: "Senior Machine Learning Engineer", dept: "Engineering", location: "Remote / San Francisco", type: "Full-time" },
  { id: 2, title: "Neural Architect", dept: "Research", location: "London, UK", type: "Full-time" },
  { id: 3, title: "Product Designer", dept: "Design", location: "Remote", type: "Contract" },
  { id: 4, title: "DevOps Specialist", dept: "Engineering", location: "New York, NY", type: "Full-time" },
  { id: 5, title: "Technical Writer", dept: "Product", location: "Remote", type: "Full-time" },
  { id: 6, title: "AI Ethics Researcher", dept: "Research", location: "Remote", type: "Full-time" },
];

const Careers = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const departments = ['All', 'Engineering', 'Research', 'Design', 'Product'];

  const filteredJobs = jobs.filter(job => {
    const matchesDept = filter === 'All' || job.dept === filter;
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Join the Intelligence Revolution.</h1>
          <p className="text-lg text-slate-600">We're looking for the curious, the brilliant, and the builders.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search roles..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-sky-500/20"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={`px-5 py-3 rounded-xl whitespace-nowrap transition-all font-medium ${
                    filter === dept ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="group bg-white p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between hover:border-sky-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><span className="font-medium text-slate-700">{job.dept}</span></span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                      <span className="flex items-center gap-1"><span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs">{job.type}</span></span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="mt-4 md:mt-0">Apply Now</Button>
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No roles match your current search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;