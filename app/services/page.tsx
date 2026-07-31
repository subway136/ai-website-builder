import SectionHeader from '@/components/SectionHeader';
import { Cpu, Zap, Code, Database, ShieldCheck, Share2 } from 'lucide-react';

const services = [
  { title: 'LLM Integration', desc: 'Deploy custom GPT models and Llama instances tailored to your proprietary data.', icon: Cpu },
  { title: 'Workflow Automation', desc: 'Connect your stack with intelligent triggers that eliminate manual data entry.', icon: Zap },
  { title: 'Custom AI Agents', desc: 'Autonomous agents that handle customer support, lead research, and scheduling.', icon: Code },
  { title: 'Data Pipeline Engineering', desc: 'Structured data processing to fuel your machine learning models.', icon: Database },
  { title: 'AI Security Audit', desc: 'Ensure your AI implementations are secure, private, and compliant.', icon: ShieldCheck },
  { title: 'API Ecosystems', desc: 'Build scalable interfaces that allow your tools to talk to each other seamlessly.', icon: Share2 },
];

export default function ServicesPage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader title="Our Services" subtitle="Full-spectrum automation for the modern enterprise." />
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {services.map((s, i) => (
          <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group">
            <s.icon className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-slate-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}