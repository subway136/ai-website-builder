import SectionHeader from '@/components/SectionHeader';

export default function About() {
  return (
    <div className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeader title="Behind Aura AI" subtitle="We bridge the gap between human creativity and machine efficiency." />
      <div className="space-y-8 text-slate-300 text-lg leading-relaxed mt-12">
        <p>
          Founded in 2023, Aura AI was born out of a simple observation: most companies are drowning in data but starving for actionable intelligence. 
          We don't just sell software; we architect ecosystems.
        </p>
        <p>
          Our team consists of veteran ML engineers, workflow architects, and strategic consultants dedicated to pushing the boundaries of what's possible with Generative AI.
        </p>
        <div className="grid grid-cols-2 gap-8 py-12">
            <div>
                <h4 className="text-blue-400 font-bold text-3xl mb-2">150+</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Projects Delivered</p>
            </div>
            <div>
                <h4 className="text-blue-400 font-bold text-3xl mb-2">98%</h4>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Client Retention</p>
            </div>
        </div>
      </div>
    </div>
  );
}