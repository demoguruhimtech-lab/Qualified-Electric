import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, ChevronRight } from 'lucide-react';
import { SITE, SERVICES, LOCATIONS } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-slate-950" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block leading-none">Qualified Electric</span>
                <span className="text-xs text-amber-400/80 font-medium">Denver, Colorado</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Denver's trusted residential electrician. Licensed, insured, and committed to safe, quality electrical work for your home.
            </p>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              {SITE.phone}
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="hover:text-amber-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-amber-500/50" />
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              {SERVICES.slice(7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="hover:text-amber-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-amber-500/50" />
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/electrician-denver-co" className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium text-gray-300">
                  <ChevronRight className="w-3 h-3 text-amber-500/50" />
                  Denver
                </Link>
              </li>
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link to={`/${l.slug}`} className="hover:text-amber-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-amber-500/50" />
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-amber-400 transition-colors">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-amber-400 transition-colors break-all">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon – Fri: 7:00 AM – 7:00 PM</p>
                  <p>Sat: 8:00 AM – 5:00 PM</p>
                  <p>Sun: Emergency Service</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Qualified Electric. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
            <Link to="/electrician-denver-co" className="hover:text-amber-400 transition-colors">Service Areas</Link>
            <Link to="/residential-electrician-denver-co" className="hover:text-amber-400 transition-colors">Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
