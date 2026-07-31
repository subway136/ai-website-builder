import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <h3 className="text-2xl font-bold mb-6">AURA AI</h3>
          <p className="text-slate-400 max-w-sm mb-8">
            Pioneering the next wave of industrial automation through intelligent agent orchestration.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'LinkedIn', 'Github'].map(s => (
              <a key={s} href="#" className="text-slate-500 hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Legal</h4>
          <ul className="space-y-4 text-slate-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-10 border-t border-slate-900 text-slate-500 text-sm flex flex-col md:row justify-between">
        <p>© 2024 Aura AI Solutions. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Built with Next.js 15 & Framer Motion</p>
      </div>
    </footer>
  );
}