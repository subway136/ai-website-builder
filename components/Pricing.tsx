const tiers = [
  { name: 'Starter', price: '$2.5k', features: ['1 Custom Agent', 'Basic Automation', 'Email Support'] },
  { name: 'Scale', price: '$7.5k', features: ['5 Custom Agents', 'Multi-app Workflows', 'Priority Support', 'API Access'], popular: true },
  { name: 'Enterprise', price: 'Custom', features: ['Unlimited Agents', 'Full Data Control', 'Dedicated Architect', 'SLA Guarantee'] },
];

export default function Pricing() {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Investment Tiers</h2>
          <p className="text-slate-400">Transparent pricing for scalable growth.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${t.popular ? 'border-blue-500 bg-blue-500/5 scale-105' : 'border-slate-800 bg-slate-900/50'}`}>
              <h3 className="text-xl font-bold mb-2">{t.name}</h3>
              <div className="text-4xl font-bold mb-6">{t.price}<span className="text-sm text-slate-500 font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8">
                {t.features.map((f, j) => (
                  <li key={j} className="text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-bold transition-all ${t.popular ? 'bg-blue-600 hover:bg-blue-500' : 'bg-slate-800 hover:bg-slate-700'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}