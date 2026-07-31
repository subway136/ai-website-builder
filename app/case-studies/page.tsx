import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';

const cases = [
  { title: 'FinTech Revolution', client: 'Global Bank', result: '40% Reduction in OpEx', tag: 'Automation' },
  { title: 'Predictive Logistics', client: 'SwiftShip', result: '99.9% Delivery Accuracy', tag: 'Predictive AI' },
  { title: 'E-commerce Concierge', client: 'LuxeBrands', result: '3x Lead Conversion', tag: 'LLM Agents' },
];

export default function CaseStudies() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader title="Success Stories" subtitle="Real-world impact through intelligent engineering." />
      <div className="grid md:grid-cols-3 gap-10 mt-16">
        {cases.map((c, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="h-64 rounded-xl bg-slate-800 mb-6 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
               <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-xs font-bold rounded-full">{c.tag}</span>
               </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{c.title}</h3>
            <p className="text-slate-500 mb-4">Client: {c.client}</p>
            <p className="text-blue-400 font-semibold">{c.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
}