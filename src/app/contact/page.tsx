import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import QuoteForm from "@/components/QuoteForm";

export default function Contact() {
  return (
    <PageWrapper>
      <PageHero title="CONTACT" subtitle="Let's talk." tagline="Get your free quote today." />
      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl text-brand-navy tracking-wide mb-6">GET IN TOUCH</h2>
                <p className="text-gray-600 mb-8">Call, email, or fill out the form and we&apos;ll get back to you with a free quote within 24 hours.</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy">Email</p>
                      <a href="mailto:sales@ecoflowash.com" className="text-gray-600 hover:text-brand-blue transition-colors duration-200">sales@ecoflowash.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy">Phone</p>
                      <a href="tel:2136962907" className="text-gray-600 hover:text-brand-blue transition-colors duration-200">(213) 696-2907</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy">Service Area</p>
                      <p className="text-gray-600">Los Angeles & Orange County</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-brand-navy">Social</p>
                      <a href="https://instagram.com/ecoflopowerwash" target="_blank" rel="noopener" className="text-gray-600 hover:text-brand-blue transition-colors duration-200">@ecoflopowerwash</a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-brand-cream rounded-2xl p-6 sm:p-8">
                <h2 className="font-[family-name:var(--font-heading)] text-3xl text-brand-navy tracking-wide mb-6">SEND US A MESSAGE</h2>
                <QuoteForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
