import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import Features from '@/components/Features';
import Roadmap from '@/components/Roadmap';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Metrics />
      <Features />
      <Roadmap />
      <Pricing />
    </div>
  );
}