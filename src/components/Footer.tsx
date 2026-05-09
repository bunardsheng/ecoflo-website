import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image src="/images/logo-main.png" alt="EcoFlo" width={160} height={160} className="h-20 w-auto mb-4" />
            <p className="text-white/70">Keep your property spotless and our environment thriving.</p>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl tracking-wide mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><Link href="/commercial" className="text-white/70 hover:text-brand-green transition-colors duration-200">Commercial</Link></li>
              <li><Link href="/residential" className="text-white/70 hover:text-brand-green transition-colors duration-200">Residential</Link></li>
              <li><Link href="/gallery" className="text-white/70 hover:text-brand-green transition-colors duration-200">Gallery</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-brand-green transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl tracking-wide mb-4">CONTACT</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="mailto:sales@ecoflowash.com" className="hover:text-brand-green transition-colors duration-200">sales@ecoflowash.com</a></li>
              <li><a href="tel:2136962907" className="hover:text-brand-green transition-colors duration-200">(213) 696-2907</a></li>
              <li><a href="https://instagram.com/ecoflopowerwash" target="_blank" rel="noopener" className="hover:text-brand-green transition-colors duration-200">@ecoflopowerwash</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          &copy; 2026 EcoFlo Power Wash. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
