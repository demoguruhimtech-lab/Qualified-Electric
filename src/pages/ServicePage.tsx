import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ChevronRight, ArrowRight, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE, SERVICES } from '@/data/site';

type Props = { slug: string };

export default function ServicePage({ slug }: Props) {
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  const relatedServices = service.relatedServices
    .map((s) => SERVICES.find((sv) => sv.slug === s))
    .filter(Boolean);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'Electrician',
      name: SITE.name,
      telephone: SITE.phone,
      areaServed: { '@type': 'City', name: 'Denver, CO' },
    },
    areaServed: { '@type': 'City', name: 'Denver, CO' },
    description: service.metaDescription,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        schema={[serviceSchema, faqSchema]}
        ogImage={service.heroImage}
      />

      <PageHero
        title={service.h1}
        subtitle={service.metaDescription.split('.')[0] + '.'}
        image={service.heroImage}
        alt={service.heroAlt}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/residential-electrician-denver-co' }, { label: service.shortTitle }]}
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            {service.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">What We Do</h2>
            <p className="text-lg text-gray-600">Our {service.title.toLowerCase()} services for Denver homeowners.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.whatWeDo.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-amber-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.heading}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Why It Matters</h2>
            <p className="text-lg text-gray-400">Why professional {service.title.toLowerCase()} matters for your home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {service.whyItMatters.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <h3 className="text-lg font-bold text-amber-400 mb-3">{item.heading}</h3>
                <p className="text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Process</h2>
            <p className="text-lg text-gray-600">How we approach every {service.title.toLowerCase()} job.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all h-full">
                  <div className="text-4xl font-bold text-amber-300 mb-3">{step.step}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-amber-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Need {service.title.toLowerCase()} in Denver?</h3>
            <p className="text-gray-600">Call now and speak with a qualified electrician today.</p>
          </div>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-lg px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-105 flex-shrink-0"
          >
            <Phone className="w-5 h-5" strokeWidth={2.5} />
            Call {SITE.phone}
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">{service.title} FAQs</h2>
            <p className="text-lg text-gray-600">Common questions about our {service.title.toLowerCase()} services.</p>
          </div>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Related Services</h2>
            <p className="text-lg text-gray-600">Other electrical services we provide in Denver.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedServices.map((rs) => rs && (
              <Link
                key={rs.slug}
                to={`/${rs.slug}`}
                className="group bg-white rounded-xl p-5 border border-slate-100 hover:border-amber-200 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">{rs.shortTitle}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{rs.metaDescription.split('.')[0]}.</p>
                <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Link */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
            <MapPin className="w-5 h-5 text-amber-500" />
            <span>Serving Denver and the entire metro area</span>
          </div>
          <Link to="/electrician-denver-co" className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
            View All Service Areas
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
