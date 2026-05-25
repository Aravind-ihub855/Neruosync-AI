import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import FormInput from '../components/ui/FormInput';
import Button from '../components/ui/Button';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Get in touch with <span className="text-sky-500">us.</span></h1>
            <p className="text-lg text-slate-600 mb-12">Have questions about our API, or want to discuss an enterprise deployment? Our team is ready to assist.</p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">solutions@neurosync.ai</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Our Headquarters</h4>
                  <p className="text-slate-600">101 Innovation Drive, Palo Alto, CA</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Call Us</h4>
                  <p className="text-slate-600">+1 (555) 928-4401</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-sky-500/5 rounded-[2.5rem] blur-2xl" />
            <div className="relative bg-white border border-slate-200 p-8 md:p-12 rounded-[2.5rem] shadow-xl">
              {status === 'success' ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">We'll get back to you within 24 hours.</p>
                  <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput label="First Name" required placeholder="John" />
                    <FormInput label="Last Name" required placeholder="Doe" />
                  </div>
                  <FormInput label="Work Email" type="email" required placeholder="john@company.com" />
                  <FormInput label="Subject" placeholder="How can we help?" />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-500/20 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} className="ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;