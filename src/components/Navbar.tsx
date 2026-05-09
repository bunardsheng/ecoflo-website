"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/commercial", label: "Commercial" },
  { href: "/residential", label: "Residential" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <Link href="/">
          <Image src="/images/logo-horizontal.png" alt="EcoFlo Eco-Friendly Power Wash" width={280} height={88} className="h-14 sm:h-16 lg:h-20 w-auto" priority />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`transition-colors duration-200 font-medium text-lg ${pathname === l.href ? "text-brand-blue" : "text-brand-navy hover:text-brand-blue"}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Open menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block py-2 ${pathname === l.href ? "text-brand-blue" : "text-brand-navy hover:text-brand-blue"}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
