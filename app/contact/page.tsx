"use client";
import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader title="Get In Touch" subtitle="Ready to automate? Let's discuss your roadmap." />
      
      {status === 'success' ? (
        <div className="bg-blue-900/20 p-8 rounded-xl border border-blue-500 text-center">
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p>We will get back to you within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">Full Name</label>
              <input required className="bg-slate-900 border border-slate-800 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400">Email Address</label>
              <input required type="email" className="bg-slate-900 border border-slate-800 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-400">Message</label>
            <textarea required rows={5} className="bg-slate-900 border border-slate-800 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your project..." />
          </div>
          <button 
            disabled={status === 'sending'}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 font-bold rounded-lg transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}