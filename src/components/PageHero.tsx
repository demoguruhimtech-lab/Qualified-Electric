import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import { SITE } from '@/data/site';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  breadcrumb?: { label: string; to?: string }[];
};

export default function PageHero({ title, subtitle, image, alt, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {breadcrumb && (
          <nav className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4 flex-wrap">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.to ? (
                  <Link to={b.to} className="hover:text-amber-400 transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-amber-400">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="w-3 h-3 text-gray-600" />}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="inline-flex items-center gap-2.5 mt-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
        >
          <Phone className="w-5 h-5" strokeWidth={2.5} />
          Call {SITE.phone}
        </a>
      </div>
    </section>
  );
}
