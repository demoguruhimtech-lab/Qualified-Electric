import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { SITE } from '@/data/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  const navLinkClass = (path: string) =>
    `text-sm font-medium transition-colors hover:text-amber-400 ${
      location.pathname === path ? 'text-amber-400' : 'text-gray-200'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-gradient-to-b from-slate-950/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
                <Zap className="w-6 h-6 text-slate-950" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block leading-none">Qualified Electric</span>
                <span className="text-xs text-amber-400/80 font-medium">Denver, Colorado</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              <Link to="/" className={navLinkClass('/')}>Home</Link>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-amber-400 transition-colors">
                  Services
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-72">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 grid grid-cols-1 gap-0.5">
                      {[
                        { slug: 'residential-electrician-denver-co', label: 'Residential Electrician' },
                        { slug: 'electrical-repair-denver-co', label: 'Electrical Repair' },
                        { slug: 'electrical-panel-upgrade-denver-co', label: 'Panel Upgrade' },
                        { slug: 'residential-wiring-denver-co', label: 'Residential Wiring' },
                        { slug: 'outlet-repair-denver-co', label: 'Outlet Repair' },
                        { slug: 'switch-repair-denver-co', label: 'Switch Repair' },
                        { slug: 'lighting-installation-denver-co', label: 'Lighting Installation' },
                        { slug: 'ceiling-fan-installation-denver-co', label: 'Ceiling Fan Installation' },
                        { slug: 'ev-charger-installation-denver-co', label: 'EV Charger Installation' },
                        { slug: 'electrical-inspection-denver-co', label: 'Electrical Inspection' },
                        { slug: 'surge-protection-denver-co', label: 'Surge Protection' },
                        { slug: 'generator-installation-denver-co', label: 'Generator Installation' },
                        { slug: 'electrical-troubleshooting-denver-co', label: 'Electrical Troubleshooting' },
                      ].map((s) => (
                        <Link
                          key={s.slug}
                          to={`/${s.slug}`}
                          className="px-3 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-amber-400 transition-colors">
                  Service Areas
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2 grid grid-cols-1 gap-0.5 max-h-96 overflow-y-auto">
                      <Link to="/electrician-denver-co" className="px-3 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors font-medium">Denver</Link>
                      {[
                        { slug: 'electrician-aurora-co', label: 'Aurora' },
                        { slug: 'electrician-lakewood-co', label: 'Lakewood' },
                        { slug: 'electrician-littleton-co', label: 'Littleton' },
                        { slug: 'electrician-englewood-co', label: 'Englewood' },
                        { slug: 'electrician-centennial-co', label: 'Centennial' },
                        { slug: 'electrician-parker-co', label: 'Parker' },
                        { slug: 'electrician-highlands-ranch-co', label: 'Highlands Ranch' },
                        { slug: 'electrician-arvada-co', label: 'Arvada' },
                        { slug: 'electrician-westminster-co', label: 'Westminster' },
                        { slug: 'electrician-thornton-co', label: 'Thornton' },
                        { slug: 'electrician-golden-co', label: 'Golden' },
                        { slug: 'electrician-broomfield-co', label: 'Broomfield' },
                        { slug: 'electrician-commerce-city-co', label: 'Commerce City' },
                      ].map((a) => (
                        <Link
                          key={a.slug}
                          to={`/${a.slug}`}
                          className="px-3 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors"
                        >
                          {a.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call Now
              </a>
            </div>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-slate-950/98 backdrop-blur-md border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="px-4 py-4 space-y-1">
              <Link to="/" className="block px-3 py-2.5 text-gray-200 hover:text-amber-400 font-medium">Home</Link>

              <div className="px-3 py-1 text-xs font-bold text-amber-400/70 uppercase tracking-wider">Services</div>
              {[
                { slug: 'residential-electrician-denver-co', label: 'Residential Electrician' },
                { slug: 'electrical-repair-denver-co', label: 'Electrical Repair' },
                { slug: 'electrical-panel-upgrade-denver-co', label: 'Panel Upgrade' },
                { slug: 'residential-wiring-denver-co', label: 'Residential Wiring' },
                { slug: 'outlet-repair-denver-co', label: 'Outlet Repair' },
                { slug: 'switch-repair-denver-co', label: 'Switch Repair' },
                { slug: 'lighting-installation-denver-co', label: 'Lighting Installation' },
                { slug: 'ceiling-fan-installation-denver-co', label: 'Ceiling Fan Installation' },
                { slug: 'ev-charger-installation-denver-co', label: 'EV Charger Installation' },
                { slug: 'electrical-inspection-denver-co', label: 'Electrical Inspection' },
                { slug: 'surge-protection-denver-co', label: 'Surge Protection' },
                { slug: 'generator-installation-denver-co', label: 'Generator Installation' },
                { slug: 'electrical-troubleshooting-denver-co', label: 'Electrical Troubleshooting' },
              ].map((s) => (
                <Link key={s.slug} to={`/${s.slug}`} className="block px-3 py-2 text-sm text-gray-400 hover:text-amber-400">
                  {s.label}
                </Link>
              ))}

              <div className="px-3 py-1 pt-3 text-xs font-bold text-amber-400/70 uppercase tracking-wider">Service Areas</div>
              <Link to="/electrician-denver-co" className="block px-3 py-2 text-sm text-gray-400 hover:text-amber-400 font-medium">Denver</Link>
              {[
                { slug: 'electrician-aurora-co', label: 'Aurora' },
                { slug: 'electrician-lakewood-co', label: 'Lakewood' },
                { slug: 'electrician-littleton-co', label: 'Littleton' },
                { slug: 'electrician-englewood-co', label: 'Englewood' },
                { slug: 'electrician-centennial-co', label: 'Centennial' },
                { slug: 'electrician-parker-co', label: 'Parker' },
                { slug: 'electrician-highlands-ranch-co', label: 'Highlands Ranch' },
                { slug: 'electrician-arvada-co', label: 'Arvada' },
                { slug: 'electrician-westminster-co', label: 'Westminster' },
                { slug: 'electrician-thornton-co', label: 'Thornton' },
                { slug: 'electrician-golden-co', label: 'Golden' },
                { slug: 'electrician-broomfield-co', label: 'Broomfield' },
                { slug: 'electrician-commerce-city-co', label: 'Commerce City' },
              ].map((a) => (
                <Link key={a.slug} to={`/${a.slug}`} className="block px-3 py-2 text-sm text-gray-400 hover:text-amber-400">
                  {a.label}
                </Link>
              ))}

              <Link to="/contact" className="block px-3 py-2.5 text-gray-200 hover:text-amber-400 font-medium">Contact</Link>

              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-amber-500 text-slate-950 font-bold px-5 py-3 rounded-lg mt-3"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Call {SITE.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
