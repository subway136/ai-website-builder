import { Brain, Workflow, Users } from 'lucide-react';

const features = [
  { title: 'Custom LLM Agents', desc: 'Purpose-built AI that knows your documentation, brand voice, and business logic.', icon: Brain },
  { title: 'Cross-App Workflows', desc: 'Sync data across Salesforce, Slack, and your internal tools with zero friction.', icon: Workflow },
  { title: 'Lead Qualification', desc: 'AI-driven lead scoring that identifies high-value prospects while you sleep.', icon: Users },
];

export default function Features() {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-10 rounded-3xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm">
            <f.icon className="w-10 h-10 text-blue-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}