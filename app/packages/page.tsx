"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import {
  Clock,
  Star,
  SlidersHorizontal,
  Search,
  X,
  MapPin,
  Check,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { allPackages, TourPackage } from "../data/packages";

const CATEGORIES = ["All", "Cultural", "Beach", "Wildlife", "Adventure"];
const DURATIONS = ["All", "1–4 Days", "5–7 Days", "8+ Days"];

export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDuration, setActiveDuration] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Sync URL query params if redirected from Hero or internal links
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      const dur = params.get("duration");
      if (cat && CATEGORIES.includes(cat)) setActiveCategory(cat);
      if (dur && DURATIONS.includes(dur)) setActiveDuration(dur);
    }
  }, []);

  const filteredPackages = useMemo(() => {
    return allPackages.filter((pkg) => {
      // Category match
      const catMatch = activeCategory === "All" || pkg.category === activeCategory;

      // Duration match
      let durMatch = true;
      if (activeDuration === "1–4 Days") durMatch = pkg.durationDays <= 4;
      else if (activeDuration === "5–7 Days") durMatch = pkg.durationDays >= 5 && pkg.durationDays <= 7;
      else if (activeDuration === "8+ Days") durMatch = pkg.durationDays >= 8;

      // Search keyword match (title, destinations, or description)
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        !query ||
        pkg.title.toLowerCase().includes(query) ||
        pkg.description.toLowerCase().includes(query) ||
        pkg.destinations.some((d) => d.toLowerCase().includes(query));

      return catMatch && durMatch && searchMatch;
    });
  }, [activeCategory, activeDuration, searchQuery]);

  const hasActiveFilters = activeCategory !== "All" || activeDuration !== "All" || searchQuery !== "";

  const resetFilters = () => {
    setActiveCategory("All");
    setActiveDuration("All");
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/60 text-gray-800">
      <Navbar />

      <main className="flex-grow">
        
        {/* ── EDITORIAL HERO HEADER ── */}
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gray-950 text-white overflow-hidden">
          {/* Background image with cinematic dark overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/bbg2.png"
              alt="Sri Lanka Highlands"
              className="w-full h-full object-cover opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/90" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <ScrollReveal animation="reveal-up">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                <span>100% Private & Bespoke Tours</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
                Handcrafted Sri Lanka <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-400">
                  Private Itineraries
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Explore signature island routes curated by our local travel experts. Every tour is private, customizable, and paired with a dedicated licensed chauffeur-guide.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-gray-300">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  SLTDA Registered Operator
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                  Women-Led & Sustainable
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  5.0 Rating (350+ Reviews)
                </span>
              </div>

            </ScrollReveal>
          </div>
        </section>

        {/* ── STICKY SEARCH & FILTER CONTROLS BAR ── */}
        <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Left: Search input */}
              <div className="relative w-full lg:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations (e.g. Ella, Yala)..."
                  className="w-full pl-10 pr-8 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand-orange)] focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Middle: Category & Duration Pills */}
              <div className="flex flex-wrap items-center gap-3 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
                
                {/* Category Pills */}
                <div className="flex items-center gap-1.5 p-1 bg-gray-100/80 rounded-2xl">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        activeCategory === cat
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Duration Pills */}
                <div className="flex items-center gap-1.5 p-1 bg-gray-100/80 rounded-2xl">
                  {DURATIONS.map((dur) => (
                    <button
                      key={dur}
                      onClick={() => setActiveDuration(dur)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        activeDuration === dur
                          ? "bg-[var(--color-brand-orange)] text-white shadow-sm"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {dur}
                    </button>
                  ))}
                </div>

                {/* Reset button if filters active */}
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-xs font-bold text-[var(--color-brand-orange)] hover:underline flex items-center gap-1 px-2 py-1"
                  >
                    <X className="w-3.5 h-3.5" />
                    Reset
                  </button>
                )}

              </div>

              {/* Right: Results Count */}
              <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-gray-500 flex-shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400" />
                <span>{filteredPackages.length} {filteredPackages.length === 1 ? "Route Found" : "Routes Found"}</span>
              </div>

            </div>

          </div>
        </section>

        {/* ── PACKAGES SHOWCASE GRID ── */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filteredPackages.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl border border-gray-200/80 p-8 max-w-lg mx-auto shadow-sm">
                <div className="w-12 h-12 rounded-full bg-orange-50 text-[var(--color-brand-orange)] flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">No Matching Packages Found</h2>
                <p className="text-sm text-gray-500 mb-6">
                  We couldn't find any tours matching your selected filters. Reset filters or create a custom route.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={resetFilters}
                    className="text-xs font-bold px-4 py-2.5 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-700 transition-all"
                  >
                    Clear All Filters
                  </button>
                  <Link
                    href="/contact"
                    className="text-xs font-bold px-5 py-2.5 rounded-full bg-brand-gradient text-white shadow-sm transition-all"
                  >
                    Request Custom Tour
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages.map((pkg) => {
                  const whatsappMessage = encodeURIComponent(
                    `Hi Mandu! I am interested in the ${pkg.title} (${pkg.duration}). Can you please share pricing and availability?`
                  );

                  return (
                    <div
                      key={pkg.id}
                      className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-orange-400/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
                    >
                      {/* ── Card Image Header ── */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/20 to-transparent" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                          {pkg.badge ? (
                            <span className="bg-brand-gradient text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                              {pkg.badge}
                            </span>
                          ) : (
                            <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                              {pkg.category}
                            </span>
                          )}

                          <span className="bg-black/60 backdrop-blur-md text-white font-bold text-xs px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm">
                            <Clock className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                            {pkg.duration} / {pkg.nights}
                          </span>
                        </div>

                        {/* Bottom Image Info: Group Size & Rating */}
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                          <span className="font-semibold flex items-center gap-1 text-gray-200 text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {pkg.groupSize}
                          </span>

                          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md text-[11px] font-bold">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                            <span>{pkg.rating}</span>
                            <span className="text-gray-300 font-normal">({pkg.reviewCount})</span>
                          </div>
                        </div>
                      </div>

                      {/* ── Card Content Body ── */}
                      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                        
                        <div>
                          {/* ── Prominent Price & Rating Row (Immediately visible on mobile) ── */}
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                                Private Tour From
                              </span>
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-none">
                                  {pkg.price}
                                </span>
                                <span className="text-[11px] text-gray-500 font-medium">
                                  {pkg.priceNote}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full text-xs font-bold text-gray-800 flex-shrink-0">
                              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                              <span>{pkg.rating}</span>
                              <span className="text-gray-400 font-normal">({pkg.reviewCount})</span>
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-[var(--color-brand-orange)] transition-colors">
                            {pkg.title}
                          </h3>

                          {/* Short blurb */}
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3.5 line-clamp-2">
                            {pkg.description}
                          </p>

                          {/* ── Route Strip with Arrows ── */}
                          <div className="mb-4 p-3 rounded-2xl bg-gray-50 border border-gray-100">
                            <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-gray-400 mb-1.5">
                              <MapPin className="w-3 h-3 text-[var(--color-brand-orange)]" />
                              <span>Key Route Stops</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-gray-800">
                              {pkg.destinations.map((dest, i) => (
                                <React.Fragment key={i}>
                                  <span className="hover:text-[var(--color-brand-orange)] transition-colors">
                                    {dest}
                                  </span>
                                  {i < pkg.destinations.length - 1 && (
                                    <span className="text-gray-300 font-normal">→</span>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>

                          {/* ── Key Highlights (First 2) ── */}
                          <div className="space-y-1.5 mb-5 hidden xs:block">
                            {pkg.highlights.slice(0, 2).map((h, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                                <span className="truncate">{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* ── Inquiry & Details Action Buttons (Crisp Borders & Brand Styling) ── */}
                        <div className="pt-3 border-t border-gray-100 mt-auto">
                          <div className="grid grid-cols-12 gap-2 sm:gap-2.5">
                            {/* WhatsApp Direct Chat with distinct border */}
                            <a
                              href={`https://wa.me/94776175241?text=${whatsappMessage}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="col-span-5 inline-flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-2 border-emerald-500/70 rounded-2xl py-3 text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95"
                              title="Chat on WhatsApp about this tour"
                            >
                              <MessageCircle className="w-4 h-4 text-emerald-600" />
                              <span>WhatsApp</span>
                            </a>

                            {/* View Full Itinerary */}
                            <Link
                              href={`/itineraries/${pkg.slug}`}
                              className="col-span-7 inline-flex items-center justify-center gap-2 bg-brand-gradient text-white rounded-2xl py-3 text-xs sm:text-sm font-bold shadow-md hover:shadow-orange-500/25 transition-all group active:scale-95"
                            >
                              <span>Explore Itinerary</span>
                              <svg
                                className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </section>

        {/* ── BESPOKE ITINERARY CONCIERGE BANNER ── */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-gray-950 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
              
              {/* Background ambient accents */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-orange)] mb-3">
                  Tailored Travel Concierge
                </span>
                
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                  Can't Find Your Exact Route? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-400">
                    We'll Custom Craft It for You.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 max-w-2xl">
                  Every traveler is unique. Tell our local travel team your travel dates, preferred hotels, must-visit sights, and pace — we will build a custom, no-obligation itinerary within 24 hours.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all group"
                  >
                    <span>Request Custom Tour</span>
                    <svg
                      className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Link>

                  <a
                    href="https://wa.me/94776175241?text=Hi%20Mandu!%20I%20would%20like%20to%20plan%20a%20custom%20private%20tour%20of%20Sri%20Lanka."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold px-6 py-3.5 rounded-full transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
