import { Link } from 'react-router-dom';
import {
  Phone, Zap, ShieldCheck, Clock, DollarSign, Award, ThumbsUp,
  AlertTriangle, Plug, Flame, Lightbulb, ShieldAlert, ChevronRight,
  Star, MapPin, ArrowRight, CheckCircle2,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE, SERVICES, LOCATIONS, ELECTRICAL_PROBLEMS, WHY_CHOOSE_US, TESTIMONIALS, HOMEPAGE_FAQS, IMAGES } from '@/data/site';

const iconMap: Record<string, React.ComponentType<any>> = {
  Zap, ShieldCheck, Clock, DollarSign, Award, Phone, ThumbsUp,
  AlertTriangle, Plug, Flame, Lightbulb, ShieldAlert,
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: SITE.name,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  areaServed: SITE.serviceArea.map((c) => `${c}, CO`),
  url: 'https://qualifiedelectricdenver.com',
  priceRange: '$$',
  openingHours: 'Mo-Fr 07:00-19:00, Sa 08:00-17:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '6',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOMEPAGE_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="Electrician Denver, CO | Qualified Electric — Licensed & Insured"
        description="Trusted electrician in Denver, CO. Residential electrical repair, panel upgrades, lighting, EV chargers, generators, and more. Licensed, insured, upfront pricing. Call 720-840-4198."
        schema={[businessSchema, faqSchema]}
        ogImage={IMAGES.heroElectrician}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroElectrician} alt={IMAGES.heroAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-300 text-sm font-medium">Licensed Electrician Serving Denver & Metro Area</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              Electrician in Denver, CO
              <span className="block text-amber-400 mt-2">Qualified Electric</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Your home deserves safe, reliable electrical work. From panel upgrades and lighting to EV chargers and emergency repairs, our licensed electricians deliver quality you can trust — with upfront pricing and same-day service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
              >
                <Phone className="w-5 h-5" strokeWidth={2.5} />
                Call {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
              >
                Request Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-amber-400" /> Licensed & Insured</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> Same-Day Service</span>
              <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-amber-400" /> Upfront Pricing</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* About */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">About Qualified Electric</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6 tracking-tight">Denver's Trusted Residential Electrician</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Qualified Electric is a Denver-based electrical company serving homeowners throughout the Denver metro area. We believe that quality electrical work is not a luxury — it is a necessity. Every wire we run, every panel we install, and every outlet we replace is done to the highest standard of safety and craftsmanship.
                </p>
                <p>
                  Our team brings years of experience working on Denver homes — from historic bungalows in Wash Park to new construction in Stapleton. We understand the unique electrical challenges that come with Colorado's older housing stock and the modern demands of today's technology-filled homes.
                </p>
                <p>
                  When you call Qualified Electric, you get a licensed electrician who shows up on time, explains the work clearly, and completes it cleanly. No upselling, no surprises, no cutting corners. Just honest, professional electrical service.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-3xl font-bold text-amber-600">100%</div>
                  <div className="text-sm text-gray-500 mt-1">Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-3xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-500 mt-1">Metro Areas</div>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-3xl font-bold text-amber-600">24/7</div>
                  <div className="text-sm text-gray-500 mt-1">Emergency</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50">
                <img src={IMAGES.about} alt={IMAGES.aboutAlt} className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-slate-950" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Licensed & Insured</div>
                    <div className="text-sm text-gray-500">Every job, every time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Residential Electrical Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">Complete Electrical Care for Your Home</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From the smallest repair to the largest installation, we handle every aspect of your home's electrical system with precision and care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.heroAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">{service.shortTitle}</h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.metaDescription.split('.')[0]}.</p>
                  <span className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">The Qualified Electric Difference</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We earn our reputation on every job. Here is what sets us apart from other electricians in Denver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = iconMap[item.icon] || Zap;
              return (
                <div
                  key={i}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-7 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-amber-500/30 transition-shadow">
                    <Icon className="w-7 h-7 text-slate-950" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Electrical Problems We Solve */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Electrical Problems We Solve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">Signs You Need an Electrician</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Electrical problems are warning signs. If you notice any of these issues, call a licensed electrician before they become dangerous.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ELECTRICAL_PROBLEMS.map((problem, i) => {
              const Icon = iconMap[problem.icon] || AlertTriangle;
              return (
                <div key={i} className="group flex gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-amber-50 border border-slate-100 hover:border-amber-200 transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition-colors">
                    <Icon className="w-6 h-6 text-amber-600 group-hover:text-slate-950 transition-colors" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1.5">{problem.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
            >
              <Phone className="w-5 h-5 text-amber-400" strokeWidth={2.5} />
              Speak With an Electrician
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Service Area</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6 tracking-tight">Serving Denver & the Entire Metro Area</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Qualified Electric is based in Denver, Colorado and serves homeowners throughout the Denver metropolitan area. Whether you are in the city or the surrounding suburbs, our electricians are ready to help.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SITE.serviceArea.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/electrician-denver-co"
                  className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all"
                >
                  View All Service Areas <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50">
              <img src={IMAGES.denverSkyline} alt={IMAGES.denverSkylineAlt} className="w-full h-[450px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold text-lg">Denver, Colorado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project/Work Imagery */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">Electrical Projects in Denver</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A look at the type of electrical work we do for Denver homeowners every day.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: IMAGES.project1, alt: IMAGES.project1Alt, title: 'Panel Upgrades', desc: '200A panel replacements with modern breakers' },
              { img: IMAGES.project2, alt: IMAGES.project2Alt, title: 'Lighting Installation', desc: 'Fixture installation and LED retrofits' },
              { img: IMAGES.project3, alt: IMAGES.project3Alt, title: 'EV Charger Installation', desc: 'Level 2 home charging stations' },
              { img: IMAGES.project4, alt: IMAGES.project4Alt, title: 'Ceiling Fan Installation', desc: 'Indoor and outdoor ceiling fans' },
              { img: IMAGES.project5, alt: IMAGES.project5Alt, title: 'Recessed Lighting', desc: 'LED canless and can-style installations' },
              { img: IMAGES.project6, alt: IMAGES.project6Alt, title: 'Generator Installation', desc: 'Standby and portable generator hookups' },
            ].map((project, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-lg">
                <img src={project.img} alt={project.alt} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Customer Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">What Denver Homeowners Say</h2>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-500 fill-amber-500" />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 text-sm">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Answers to the questions Denver homeowners ask us most.
            </p>
          </div>
          <FAQAccordion faqs={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Call now and speak with a qualified electrician. We will answer your questions, schedule a visit, and provide upfront pricing before any work begins."
        backgroundImage={IMAGES.ctaBackground}
      />
    </>
  );
}
