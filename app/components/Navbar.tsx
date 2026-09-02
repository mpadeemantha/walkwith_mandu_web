"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
        if (isMobileMenuOpen) setIsMobileMenuOpen(false); // Auto-close mobile menu when hiding
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800 py-0 shadow-sm" : "bg-transparent border-transparent py-2"
      } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 transition-all duration-300">
          {/* Logo area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <img src="/logowalk.png" alt="Walk With Mandu" className="h-14 w-auto object-contain drop-shadow-md" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/about" className={`font-medium transition-colors hover:text-[var(--color-brand-orange)] ${isScrolled ? "text-gray-200" : "text-white drop-shadow-md"
              }`}>
              About
            </Link>
            <Link href="/packages" className={`font-medium transition-colors hover:text-[var(--color-brand-orange)] ${isScrolled ? "text-gray-200" : "text-white drop-shadow-md"
              }`}>
              Packages
            </Link>
            <Link href="/contact" className={`font-medium transition-colors hover:text-[var(--color-brand-orange)] ${isScrolled ? "text-gray-200" : "text-white drop-shadow-md"
              }`}>
              Contact
            </Link>
            <Link href="/contact" className="bg-brand-gradient px-5 py-2 rounded-full font-medium shadow-md flex items-center gap-2">
              Plan Your Trip
              <svg className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-colors ${isScrolled ? "text-gray-200 hover:text-[var(--color-brand-orange)]" : "text-white"
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
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/packages" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Packages
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/contact" className="block px-3 py-2 mt-2 text-base font-medium text-white text-center bg-brand-gradient rounded-md shadow-sm flex items-center justify-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              Plan Your Trip
              <svg className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
