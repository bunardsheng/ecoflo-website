export default function PageHero({ title, subtitle, tagline }: { title: string; subtitle: string; tagline: string }) {
  return (
    <section className="bg-brand-navy text-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl tracking-wide mb-6">{title}</h1>
        <p className="text-2xl sm:text-3xl text-brand-green font-semibold mb-4">{subtitle}</p>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">{tagline}</p>
      </div>
    </section>
  );
}
