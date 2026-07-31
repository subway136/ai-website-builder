"use client";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            AI Integration for the Fortune 5000
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Automate the <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Impossible.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10">
            Aura AI builds custom LLM integrations and autonomous workflows that save thousands of hours and drive exponential ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Start Your Transformation
            </button>
            <button className="bg-slate-900 border border-slate-800 hover:bg-slate-800 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Animated Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
    </section>
  );
}