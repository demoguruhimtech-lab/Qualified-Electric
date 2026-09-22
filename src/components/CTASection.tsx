import { Link } from 'react-router-dom';
import { Phone, ChevronRight } from 'lucide-react';
import { SITE } from '@/data/site';

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
};

export default function CTASection({
  title = 'Need an Electrician in Denver Today?',
  subtitle = 'Call now and speak directly with a qualified electrician. We will schedule a visit at the earliest available time and provide upfront pricing before any work begins.',
  backgroundImage,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-950/90" />
        </div>
      )}
      <div className={`relative ${backgroundImage ? '' : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              Call {SITE.phone}
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
            >
              Request Service
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
