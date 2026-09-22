import { Link } from 'react-router-dom';
import { Phone, Home, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { SITE } from '@/data/site';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Qualified Electric — Denver, CO"
        description="The page you are looking for could not be found. Please visit our homepage or call Qualified Electric at 720-840-4198."
      />
      <section className="min-h-screen flex items-center justify-center bg-slate-950 pt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-8xl font-bold text-amber-500 mb-4">404</div>
          <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">Page Not Found</h1>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            The page you are looking for may have been moved or no longer exists. Try heading back to the homepage or calling us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-105"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
