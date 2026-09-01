"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-0 shadow-sm" : "bg-transparent border-transparent py-2"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 transition-all duration-300">
          {/* Logo area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logowalk.png" alt="Walk With Mandu" className="h-20 w-auto object-contain drop-shadow-md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#about" className={`font-medium transition-colors hover:text-[var(--color-brand-orange)] ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"
              }`}>
              About
            </Link>
            <Link href="/packages" className={`font-medium transition-colors hover:text-[var(--color-brand-orange)] ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"
              }`}>
              Packages
            </Link>
            <Link href="#contact" className="bg-[var(--color-brand-orange)] text-white px-5 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors shadow-md">
              Book Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-colors ${isScrolled ? "text-gray-700 hover:text-[var(--color-brand-orange)]" : "text-white"
                }`}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-brand-orange)] hover:bg-orange-50 :bg-gray-800 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/packages" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--color-brand-orange)] hover:bg-orange-50 :bg-gray-800 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Packages
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-base font-medium text-[var(--color-brand-orange)] hover:bg-orange-50 :bg-gray-800 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
