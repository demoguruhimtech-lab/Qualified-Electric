import { Link } from 'react-router-dom';
import { Phone, MapPin, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { SITE, SERVICES, LOCATIONS, IMAGES } from '@/data/site';

export default function DenverLocationPage() {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: `${SITE.name} — Denver`,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Denver',
      addressRegion: 'CO',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'City', name: 'Denver, CO' },
    url: 'https://qualifiedelectricdenver.com/electrician-denver-co',
  };

  return (
    <>
      <SEO
        title="Electrician Denver, CO | Qualified Electric — Licensed & Insured"
        description="Qualified Electric is your trusted electrician in Denver, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, and more. Call 720-840-4198."
        schema={locationSchema}
        ogImage={IMAGES.denverSkyline}
      />

      <PageHero
        title="Electrician in Denver, CO"
        subtitle="Licensed residential electricians serving Denver and the entire metro area. From panel upgrades to EV chargers, we keep your home safe and powered."
        image={IMAGES.denverSkyline}
        alt={IMAGES.denverSkylineAlt}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Denver, CO' }]}
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              Denver, Colorado is home, and Qualified Electric is proud to serve the homeowners of the Mile High City with professional residential electrical services. From the historic bungalows of Baker and Washington Park to the modern builds of Stapleton and Lowry, we understand the electrical systems that power Denver homes — and the issues that come with them.
            </p>
            <p>
              Many Denver neighborhoods have homes built in the early-to-mid 1900s with wiring and panels that are well past their safe service life. Whether your home has knob-and-tube wiring that needs replacing, a Federal Pacific panel that needs upgrading, or you simply need a new outlet for your home office, our licensed electricians are ready to help.
            </p>
            <p>
              We serve all of Denver — from downtown to the farthest reaches of the metro area. Call us for same-day service on most electrical repairs, and upfront pricing on every job.
            </p>
          </div>
        </div>
      </section>

      {/* Services in Denver */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Electrical Services in Denver</h2>
            <p className="text-lg text-gray-600">Complete residential electrical services for Denver homeowners.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={service.heroImage} alt={service.heroAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white">{service.shortTitle}</h3>
                </div>
                <div className="p-4">
                  <span className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Denver Neighborhoods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Denver Neighborhoods We Serve</h2>
            <p className="text-lg text-gray-600">We proudly serve every neighborhood in Denver and the surrounding metro area.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Wash Park', 'Baker', 'Capitol Hill', 'Highland', 'LoHi', 'RiNo',
              'Stapleton', 'Lowry', 'Cherry Creek', 'Hilltop', 'Park Hill', 'Montbello',
              'Greenwood Village', 'University Hills', 'Belcaro', 'Cory-Merrill',
              'Platt Park', 'Overland', 'Ruby Hill', 'Bear Valley', 'Marston', 'Harvey Park',
            ].map((neighborhood) => (
              <div key={neighborhood} className="flex items-center gap-2 text-sm text-gray-700 bg-slate-50 rounded-lg px-4 py-3 border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                {neighborhood}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Surrounding Cities */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Surrounding Service Areas</h2>
            <p className="text-lg text-gray-600">We also serve these cities throughout the Denver metro area.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {LOCATIONS.map((loc) => (
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
        title="Need an Electrician in Denver?"
        subtitle="Call now and speak with a qualified electrician. We serve all of Denver with same-day service and upfront pricing."
        backgroundImage={IMAGES.ctaBackground}
      />
    </>
  );
}
