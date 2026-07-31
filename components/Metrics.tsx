const metrics = [
  { label: 'Hours Saved Monthly', value: '12,000+' },
  { label: 'Avg ROI Increase', value: '240%' },
  { label: 'Uptime Guarantee', value: '99.9%' },
  { label: 'Active Deployments', value: '450+' },
];

export default function Metrics() {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-slate-800/50">
        {metrics.map((m, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{m.value}</div>
            <div className="text-slate-500 text-sm uppercase tracking-widest font-medium">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}