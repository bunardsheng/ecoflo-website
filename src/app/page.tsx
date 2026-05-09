import PageWrapper from "@/components/PageWrapper";
import FadeIn from "@/components/FadeIn";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl leading-none tracking-wide mb-6">CLEANING LA & OC</h1>
              <p className="text-xl sm:text-2xl text-brand-green font-semibold mb-4">Power washing one building at a time.</p>
              <p className="text-lg text-white/80 mb-8 max-w-lg">EcoFlo uses eco-friendly, sea-life safe products to keep your property spotless and our environment thriving.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:2136962907" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (213) 696-2907
                </a>
                <a href="#quote" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:border-brand-green hover:text-brand-green transition-colors duration-200">
                  Get Free Quote
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </a>
              </div>
            </div>
            <div id="quote" className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl text-brand-navy mb-6 tracking-wide">GET FREE QUOTE</h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-brand-navy tracking-wide mb-4">OUR SERVICES</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Serving Los Angeles & Orange County with over 6 years of professional experience.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-brand-navy tracking-wide">RESIDENTIAL</h3>
                </div>
                <p className="text-gray-600 mb-6">A cleaner home. A healthier planet. No job is too big or too small.</p>
                <ul className="space-y-3 text-gray-700">
                  {["Driveways & Sidewalks", "Patios & Decks", "Siding, Fences & Roofs", "Pool Areas"].map((s) => (
                    <li key={s} className="flex items-center gap-2"><svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{s}</li>
                  ))}
                </ul>
                <Link href="/residential" className="inline-flex items-center gap-1 mt-6 text-brand-blue font-semibold hover:text-brand-navy transition-colors duration-200">
                  Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-brand-navy tracking-wide">COMMERCIAL</h3>
                </div>
                <p className="text-gray-600 mb-6">Clean business. Clear conscience. First impressions start at the curb.</p>
                <ul className="space-y-3 text-gray-700">
                  {["Storefronts & Plazas", "Parking Lots", "Warehouses & Buildings", "Restaurants & Retail"].map((s) => (
                    <li key={s} className="flex items-center gap-2"><svg className="w-5 h-5 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{s}</li>
                  ))}
                </ul>
                <Link href="/commercial" className="inline-flex items-center gap-1 mt-6 text-brand-blue font-semibold hover:text-brand-navy transition-colors duration-200">
                  Learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why EcoFlo */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn><h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl text-brand-navy tracking-wide text-center mb-12">WHY ECOFLO?</h2></FadeIn>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "ECO-FRIENDLY", desc: "Sea-life safe products that protect our waterways and environment.", color: "green" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "6+ YEARS EXPERIENCE", desc: "Professional-grade results on every job, big or small.", color: "blue" },
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", title: "LA & OC COVERAGE", desc: "Serving all of Los Angeles and Orange County, residential and commercial.", color: "green" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className={`w-16 h-16 bg-brand-${item.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <svg className={`w-8 h-8 text-brand-${item.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-brand-navy tracking-wide mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
