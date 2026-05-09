"use client";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-brand-navy text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="mailto:sales@ecoflowash.com" className="hover:text-brand-green transition-colors duration-200">sales@ecoflowash.com</a>
          <span className="hidden sm:inline text-white/40">|</span>
          <a href="tel:2136962907" className="hidden sm:inline hover:text-brand-green transition-colors duration-200">(213) 696-2907</a>
        </div>
        <Link href="/#quote" className="bg-brand-green text-white px-4 py-1 rounded text-sm font-semibold hover:bg-green-600 transition-colors duration-200">
          Get Free Quote
        </Link>
      </div>
    </div>
  );
}
