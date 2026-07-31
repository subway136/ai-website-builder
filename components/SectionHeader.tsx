export default function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h2>
      <p className="text-slate-400 text-lg md:text-xl">{subtitle}</p>
      <div className="w-20 h-1.5 bg-blue-600 mt-6 rounded-full"></div>
    </div>
  );
}