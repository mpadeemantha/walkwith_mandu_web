"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  ChevronRight,
  Phone,
  Compass,
  Map,
  Mail,
  Home as HomeIcon,
  ShieldCheck,
  Star,
  Camera,
  HelpCircle,
  Newspaper
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up (only when mobile menu is closed)
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMobileMenuOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/", number: "01", icon: HomeIcon, desc: "Island highlights & journeys" },
    { label: "Tour Packages", href: "/packages", number: "02", icon: Map, desc: "Explore 6 tailor-made routes" },
    { label: "Tour Media & Reels", href: "/gallery", number: "03", icon: Camera, desc: "Photos & video highlights" },
    { label: "About Us", href: "/about", number: "04", icon: Compass, desc: "Our story, vision & reviews" },
    { label: "News & Events", href: "/news", number: "05", icon: Newspaper, desc: "Festivals & island guides" },
    { label: "FAQs", href: "/faq", number: "06", icon: HelpCircle, desc: "Visa, weather & travel advice" },
    { label: "Contact", href: "/contact", number: "07", icon: Mail, desc: "Talk to our local specialists" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800 py-0 shadow-sm"
            : "bg-transparent border-transparent py-2"
        } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 transition-all duration-300">
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/logowalk.png"
                  alt="Walk With Mandu"
                  className="h-14 w-auto object-contain drop-shadow-md"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-7 items-center">
              <Link
                href="/packages"
                className={`text-sm font-medium transition-colors hover:text-[var(--color-brand-orange)] ${
                  isScrolled ? "text-gray-200" : "text-white drop-shadow-md"
                }`}
              >
                Packages
              </Link>
              <Link
                href="/gallery"
                className={`text-sm font-medium transition-colors hover:text-[var(--color-brand-orange)] ${
                  isScrolled ? "text-gray-200" : "text-white drop-shadow-md"
                }`}
              >
                Media & Reels
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors hover:text-[var(--color-brand-orange)] ${
                  isScrolled ? "text-gray-200" : "text-white drop-shadow-md"
                }`}
              >
                About
              </Link>
              <Link
                href="/news"
                className={`text-sm font-medium transition-colors hover:text-[var(--color-brand-orange)] ${
                  isScrolled ? "text-gray-200" : "text-white drop-shadow-md"
                }`}
              >
                News
              </Link>
              <Link
                href="/faq"
                className={`text-sm font-medium transition-colors hover:text-[var(--color-brand-orange)] ${
                  isScrolled ? "text-gray-200" : "text-white drop-shadow-md"
                }`}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors hover:text-[var(--color-brand-orange)] ${
                  isScrolled ? "text-gray-200" : "text-white drop-shadow-md"
                }`}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-brand-gradient text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md flex items-center gap-2 hover:shadow-orange-500/25 transition-all"
              >
                <span>Plan Your Trip</span>
                <svg
                  className="w-3.5 h-3.5 rotate-90 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Link>
            </nav>

            {/* Unique Luxury Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="group flex items-center gap-2.5 p-2 focus:outline-none transition-all text-white"
                aria-label="Open navigation menu"
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-[var(--color-brand-orange)] transition-colors">
                  Menu
                </span>
                <div className="flex flex-col justify-center items-end gap-1.5 w-6 h-6">
                  <span className="h-[2px] w-6 bg-white group-hover:bg-[var(--color-brand-orange)] rounded-full transition-all duration-300 shadow-sm" />
                  <span className="h-[2px] w-3.5 group-hover:w-6 bg-[var(--color-brand-orange)] rounded-full transition-all duration-300 shadow-sm" />
                  <span className="h-[2px] w-5 group-hover:w-6 bg-white group-hover:bg-[var(--color-brand-orange)] rounded-full transition-all duration-300 shadow-sm" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── LUXURY FULL-SCREEN MOBILE NAVIGATION DRAWER ── */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-gray-950/98 backdrop-blur-2xl transition-all duration-300 ease-in-out flex flex-col justify-between ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {/* Top bar inside mobile drawer */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
            <img
              src="/logowalk.png"
              alt="Walk With Mandu"
              className="h-12 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors focus:outline-none"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">
            Navigation
          </p>

          <div className="divide-y divide-white/10">
            {navLinks.map((item) => {
              const ItemIcon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-4 px-1 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <ItemIcon className="w-5 h-5 text-gray-400 group-hover:text-[var(--color-brand-orange)] transition-colors flex-shrink-0" />
                    <div>
                      <span className="text-lg font-bold text-white group-hover:text-[var(--color-brand-orange)] transition-colors block">
                        {item.label}
                      </span>
                      <span className="text-xs text-gray-400 font-normal block mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[var(--color-brand-orange)] group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>

          {/* Quick Direct Actions in Mobile Menu */}
          <div className="pt-4 space-y-3">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-brand-gradient py-3.5 rounded-2xl font-bold text-white shadow-xl flex items-center justify-center gap-2.5 text-base group"
            >
              <span>Plan Your Trip</span>
              <svg
                className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </Link>

            {/* Direct WhatsApp chat button */}
            <a
              href="https://wa.me/94776175241"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat with Us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Drawer Footer: Contact & Trust */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/40 text-xs">
          <div className="flex items-center justify-between text-gray-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[var(--color-brand-orange)]" />
              <span>SLTDA Approved</span>
            </div>
            <a href="tel:+94776175241" className="flex items-center gap-1.5 text-white font-medium hover:text-[var(--color-brand-orange)] transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+94 77 617 5241</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
