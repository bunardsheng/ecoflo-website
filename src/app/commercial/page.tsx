import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const services = [
  { title: "Storefronts & Plazas", desc: "Keep your storefront welcoming and professional. We remove gum, stains, grease, and buildup from sidewalks, entryways, and plaza common areas, helping you maintain a clean image for customers and tenants." },
  { title: "Parking Lots", desc: "Oil stains, tire marks, and general grime make parking lots look neglected. Our industrial equipment restores concrete and asphalt surfaces, improving curb appeal and reducing slip hazards." },
  { title: "Warehouses", desc: "Loading docks, exterior walls, and warehouse floors accumulate heavy buildup. We handle large-scale jobs efficiently with commercial-grade equipment designed for industrial spaces." },
  { title: "Building Exteriors", desc: "Dirt, mildew, and pollution buildup on building facades make properties look aged and neglected. We restore exteriors to like-new condition, protecting your investment and maintaining property value." },
  { title: "Drive-Throughs", desc: "High-traffic drive-through lanes collect grease, food spills, and tire marks fast. Regular cleaning keeps your business looking professional and helps you pass health inspections with ease." },
  { title: "Residential Too", desc: "We take all jobs, commercial and residential. Whether you manage a property portfolio or just need your home cleaned, we've got you covered." },
];

export default function Commercial() {
  return (
    <PageWrapper>
      <PageHero title="COMMERCIAL" subtitle="Clean business. Clear conscience." tagline="First impressions start at the curb." />
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">Your property&apos;s exterior is the first thing clients, customers, and tenants see. With over 6 years of professional experience, we deliver industrial-grade power washing that keeps your business looking sharp, professional, and inviting, on schedule, every time.</p>
            <p className="text-lg text-gray-700 leading-relaxed">From storefronts and parking lots to warehouses and multi-unit properties, we handle it all.</p>
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
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{s.desc}{s.title === "Residential Too" && <> <Link href="/residential" className="text-brand-blue hover:underline">See our residential services →</Link></>}</div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-white text-center">
        <FadeIn>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto px-4">We take all commercial jobs, big or small. Protect your investment, stay code-compliant, and make your business shine.</p>
          <Link href="/#quote" className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200">
            Get Your Free Quote Today <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </FadeIn>
      </section>
    </PageWrapper>
  );
}
