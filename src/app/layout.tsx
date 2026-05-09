import type { Metadata } from "next";
import { Commissioner, Staatliches } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";

const commissioner = Commissioner({ subsets: ["latin"], variable: "--font-body" });
const staatliches = Staatliches({ weight: "400", subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "EcoFlo | Eco-Friendly Power Wash - Los Angeles & Orange County",
  description: "EcoFlo uses eco-friendly, sea-life safe products to keep your property spotless and our environment thriving. Serving LA & OC.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${commissioner.variable} ${staatliches.variable}`}>
      <body className="bg-white text-brand-navy font-[family-name:var(--font-body)]">
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
