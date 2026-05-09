import PageWrapper from "@/components/PageWrapper";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

const images = Array.from({ length: 14 }, (_, i) => `/images/gallery/work-${i + 1}.jpeg`);

export default function Gallery() {
  return (
    <PageWrapper>
      <PageHero title="GALLERY" subtitle="See the results." tagline="Our work across Los Angeles and Orange County." />
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <FadeIn key={src} delay={i * 0.03}>
                <div className="aspect-[4/3] overflow-hidden rounded-xl relative">
                  <Image src={src} alt={`Power washing project ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-brand-cream text-center">
        <FadeIn>
          <p className="text-lg text-gray-700 mb-6">Like what you see? Let us do the same for your property.</p>
          <Link href="/#quote" className="inline-flex items-center gap-2 bg-brand-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200">
            Get Your Free Quote <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </FadeIn>
      </section>
    </PageWrapper>
  );
}
