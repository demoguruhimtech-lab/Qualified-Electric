import { Link } from 'react-router-dom';
import { Phone, MapPin, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { SITE, SERVICES, LOCATIONS, IMAGES } from '@/data/site';

type Props = { slug: string };

export default function LocationPage({ slug }: Props) {
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return <div>Location not found</div>;
  }

  const otherLocations = LOCATIONS.filter((l) => l.slug !== slug).slice(0, 6);

  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: `${SITE.name} — ${location.city}`,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: 'US',
    },
    areaServed: { '@type': 'City', name: `${location.city}, ${location.state}` },
    url: `https://qualifiedelectricdenver.com/${location.slug}`,
  };

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        schema={locationSchema}
        ogImage={IMAGES.denverSkyline}
      />

      <PageHero
        title={location.h1}
        subtitle={`Licensed residential electrician serving ${location.city}, ${location.state} and the surrounding Denver metro area. Call ${SITE.phone}.`}
        image={IMAGES.denverSkyline}
        alt={`Electrician serving ${location.city}, Colorado`}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Service Areas', to: '/electrician-denver-co' }, { label: location.city }]}
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            {location.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p>
              As a Denver-based electrical company, {location.city} is a core part of our service area. When you call Qualified Electric, you get the same licensed electrician, the same upfront pricing, and the same quality workmanship whether you are in downtown Denver or the farthest suburbs.
            </p>
          </div>

          <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Need an electrician in {location.city}?</h3>
              <p className="text-gray-600">Call now for same-day service and upfront pricing.</p>
            </div>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-lg px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-105 flex-shrink-0"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Electrical Services in {location.city}</h2>
            <p className="text-lg text-gray-600">We provide the full range of residential electrical services to {location.city} homeowners.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group flex items-center justify-between bg-white rounded-xl p-5 border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all"
              >
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{service.shortTitle}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">In Denver, CO</p>
                </div>
                <ChevronRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Qualified Electric */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why {location.city} Homeowners Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Licensed & Insured', desc: 'Every electrician is fully licensed and insured to work in Colorado.' },
              { title: 'Upfront Pricing', desc: 'Clear, flat-rate pricing before any work begins. No surprises.' },
              { title: 'Same-Day Service', desc: 'Fast response for most repair calls in ' + location.city + ' and the metro area.' },
              { title: 'Quality Workmanship', desc: 'Clean, careful, code-compliant work on every job, big or small.' },
              { title: 'Denver Based', desc: 'We are a local Denver company serving the entire metro area including ' + location.city + '.' },
              { title: 'Satisfaction Guaranteed', desc: 'We stand behind our work. If it is not right, we make it right.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Other Service Areas</h2>
            <p className="text-lg text-gray-600">We also serve these cities throughout the Denver metro area.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link
              to="/electrician-denver-co"
              className="group flex items-center justify-between bg-white rounded-xl p-4 border border-amber-200 hover:shadow-md transition-all"
            >
              <span className="flex items-center gap-2 text-amber-700 font-bold">
                <MapPin className="w-4 h-4 text-amber-500" />
                Denver
              </span>
              <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
            </Link>
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}`}
                className="group flex items-center justify-between bg-white rounded-xl p-4 border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all"
              >
                <span className="flex items-center gap-2 text-gray-700 group-hover:text-amber-600 transition-colors font-medium">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  {loc.city}
                </span>
                <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Need an Electrician in ${location.city}?`}
        subtitle={`Call now and speak with a qualified electrician. We serve ${location.city} and the entire Denver metro area with same-day service and upfront pricing.`}
        backgroundImage={IMAGES.ctaBackground}
      />
    </>
  );
}
