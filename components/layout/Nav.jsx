"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Our Santas", href: "/our-santas" },
    { name: "Locations", href: "/locations" },
    { name: "Private Events", href: "/private-events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-brand-light/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Monogram Icon */}
              <div className="w-11 h-11 flex items-center justify-center border border-brand-red/20 rounded-full bg-brand-red/5 text-brand-red font-cormorant italic text-2xl font-bold group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                H
              </div>
              {/* Text Lockup */}
              <div className="flex flex-col justify-center">
                <span className="font-cormorant font-bold text-2xl text-[#113122] leading-none tracking-tight">
                  Holiday <span className="italic text-brand-red group-hover:text-[#113122] transition-colors duration-300">Dream</span>
                </span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gray-400 mt-1.5 leading-none pl-0.5">
                  Photos
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative text-sm font-bold text-[#113122] hover:text-brand-red transition-colors uppercase tracking-widest py-2
                           after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-brand-red after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/book-now"
              className="px-8 py-3 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-brand-red-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="lg:hidden p-2 text-[#113122]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-light border-t border-gray-100 px-4 pt-2 pb-6 absolute w-full">
          <div className="flex flex-col space-y-4 mt-4">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-base font-semibold text-[#113122] hover:text-brand-red uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/book-now"
              className="px-6 py-3 bg-brand-red text-white text-center text-sm font-bold uppercase tracking-widest rounded-full mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
