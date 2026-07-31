const steps = [
  { title: 'Discovery', desc: 'We audit your current tech stack and identify high-impact automation targets.' },
  { title: 'Architecture', desc: 'Designing a secure AI blueprint that scales with your traffic.' },
  { title: 'Implementation', desc: 'Rapid prototyping and deployment of your custom AI agents.' },
  { title: 'Optimization', desc: 'Continuous fine-tuning based on real-world interaction data.' },
];

export default function Roadmap() {
  return (
    <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Implementation Roadmap</h2>
            <div className="grid md:grid-cols-4 gap-4">
                {steps.map((s, i) => (
                    <div key={i} className="relative p-6">
                        <div className="text-6xl font-black text-slate-800 absolute -top-4 -left-2 z-0">0{i+1}</div>
                        <div className="relative z-10">
                            <h4 className="text-xl font-bold mb-3 text-blue-400">{s.title}</h4>
                            <p className="text-slate-400">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}