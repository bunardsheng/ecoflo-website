import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const services = [
  { title: "Driveways & Sidewalks", desc: "Remove oil stains, tire marks, mold, and years of buildup from your concrete and pavers. We restore driveways and sidewalks to look like new." },
  { title: "Patios & Decks", desc: "Bring your outdoor living space back to life. We safely clean wood, composite, stone, and concrete patios and decks without damaging the surface." },
  { title: "Siding & Fences", desc: "Algae, mildew, and dirt make siding and fences look old fast. We use the right pressure and eco-friendly solutions to clean without stripping paint or damaging wood." },
  { title: "Roofs & Gutters", desc: "Black streaks and moss on your roof aren't just ugly, they shorten its lifespan. We soft wash roofs and clear gutters to protect your home from water damage." },
  { title: "Pool Areas", desc: "Pool decks get slippery and stained from algae and mineral deposits. We clean pool surrounds safely, reducing slip hazards and keeping your backyard looking great." },
  { title: "Commercial Too", desc: "We take all jobs, residential and commercial. Get your free, no-obligation quote today and we'll get your property looking brand new." },
];

export default function Residential() {
  return (
    <PageWrapper>
      <PageHero title="RESIDENTIAL" subtitle="A cleaner home. A healthier planet." tagline="No job is too big or too small." />
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">With over 6 years of professional experience, we bring the power to transform your property from grimy driveways and stained sidewalks to weathered fences, patios, siding, and roofs. Whether it&apos;s a quick refresh or a deep clean, no job is too big or too small.</p>
            <p className="text-lg text-gray-700 leading-relaxed">We proudly serve both residential and commercial clients across the area, so whatever you need cleaned, we&apos;ve got you covered.</p>
          </FadeIn>
        </div>
      </section>
      <section className="py-12 lg:py-16 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn><h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl text-brand-navy tracking-wide text-center mb-10">WHAT WE CLEAN</h2></FadeIn>
          <div className="space-y-4">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <details className="bg-white rounded-xl shadow-sm group" {...(i === 0 ? { open: true } : {})}>
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-lg font-semibold text-brand-navy">{s.title}</span>
                    <svg className="w-5 h-5 text-gray-400 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{s.desc}{s.title === "Commercial Too" && <> <Link href="/commercial" className="text-brand-blue hover:underline">See our commercial services →</Link></>}</div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white text-center">
        <FadeIn>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto px-4">Ready to see the difference? Get your free, no-obligation quote today.</p>
          <Link href="/#quote" className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200">
            Get Your Free Quote Today <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </FadeIn>
      </section>
    </PageWrapper>
  );
}
