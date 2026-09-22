import { Phone, Mail, MapPin, Clock, Zap } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { SITE, SERVICES, LOCATIONS, IMAGES } from '@/data/site';

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Qualified Electric',
    url: 'https://qualifiedelectricdenver.com/contact',
  };

  return (
    <>
      <SEO
        title="Contact Qualified Electric | Denver Electrician — Call 720-840-4198"
        description="Contact Qualified Electric for residential electrical services in Denver, CO. Call 720-840-4198 for same-day service, upfront pricing, and licensed electricians."
        schema={contactSchema}
        ogImage={IMAGES.ctaBackground}
      />

      <PageHero
        title="Contact Qualified Electric"
        subtitle="Call now to speak with a qualified electrician or request service online. We serve Denver and the entire metro area."
        image={IMAGES.ctaBackground}
        alt="Electrician working on an electrical panel"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Get in Touch</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Have an electrical question or need to schedule a service? Call us directly — you will speak with a qualified electrician, not a call center. We are ready to help with any residential electrical need in Denver and the surrounding area.
              </p>

              <div className="space-y-5">
                <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-slate-950" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Call Us</div>
                    <div className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{SITE.phone}</div>
                  </div>
                </a>

                <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-slate-700" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Email Us</div>
                    <div className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors break-all">{SITE.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-slate-700" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Service Area</div>
                    <div className="text-lg font-bold text-slate-900">Denver, CO & Metro Area</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-500" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {SITE.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">{h.day}</span>
                      <span className="text-gray-900">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Service Area Map</h2>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-[400px]">
                <iframe
                  title="Qualified Electric Service Area — Denver, CO"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193477.749578!2d-105.160!3d39.7392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231ef17%3A0x118ef4345575379!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-amber-500" />
                Serving Denver and the entire Denver metro area
              </div>

              <div className="mt-6 p-5 bg-amber-50 rounded-xl border border-amber-100">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  Emergency Service Available
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Experiencing a burning smell, sparking, or a total power loss? These are emergencies. Call us immediately and we will prioritize your call.
                </p>
                <a href={`tel:${SITE.phoneRaw}`} className="mt-3 inline-flex items-center gap-2 text-amber-700 font-bold text-sm">
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight text-center">Popular Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`/${s.slug}`}
                className="text-sm text-gray-600 hover:text-amber-600 transition-colors bg-white rounded-lg px-4 py-3 border border-slate-100 hover:border-amber-200"
              >
                {s.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Service Areas</h2>
          <div className="flex flex-wrap gap-2">
            <a href="/electrician-denver-co" className="text-sm text-gray-600 hover:text-amber-600 transition-colors bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">Denver</a>
            {LOCATIONS.map((l) => (
              <a key={l.slug} href={`/${l.slug}`} className="text-sm text-gray-600 hover:text-amber-600 transition-colors bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
                {l.city}
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
