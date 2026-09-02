"use client";

import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import { Clock, Star, SlidersHorizontal, ChevronRight, Tag } from "lucide-react";
import { allPackages } from "../data/packages";


const CATEGORIES = ["All", "Cultural", "Beach", "Wildlife", "Adventure"];
const DURATIONS = ["All", "1–4 Days", "5–7 Days", "8+ Days"];


// ─── Page Component ───────────────────────────────────────────────
export default function PackagesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDuration, setActiveDuration] = useState("All");

  const filtered = useMemo(() => {
    return allPackages.filter((pkg) => {
      const catMatch = activeCategory === "All" || pkg.category === activeCategory;
      let durMatch = true;
      if (activeDuration === "1–4 Days") durMatch = pkg.durationDays <= 4;
      else if (activeDuration === "5–7 Days") durMatch = pkg.durationDays >= 5 && pkg.durationDays <= 7;
      else if (activeDuration === "8+ Days") durMatch = pkg.durationDays >= 8;
      return catMatch && durMatch;
    });
  }, [activeCategory, activeDuration]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f0] text-gray-800">
      <Navbar />

      <main className="flex-grow">

        {/* ── HERO HEADER ── */}
        <section className="bg-white pt-32 pb-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="reveal-up">
              <span className="inline-block bg-amber-50 border border-amber-200 text-[var(--color-brand-orange)] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                All Packages
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
                Find Your Perfect <span className="text-[var(--color-brand-orange)]">Sri Lanka Journey</span>
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Every tour is fully private and tailored to you — your pace, your interests, your budget.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FILTER BAR ── */}
        <section className="sm:sticky sm:top-[72px] sm:z-30 bg-white border-b border-gray-100 shadow-sm">

          {/* ── MOBILE layout: two swipeable rows ── */}
          <div className="sm:hidden px-4 py-4 space-y-3">
            {/* Category row */}
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 w-14">
                <Tag className="w-3 h-3" /> Type
              </span>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-[var(--color-brand-orange)] text-white border-[var(--color-brand-orange)]"
                        : "bg-white text-gray-600 border-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration row */}
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 w-14">
                <Clock className="w-3 h-3" /> Days
              </span>
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
                {DURATIONS.map((dur) => (
                  <button
                    key={dur}
                    onClick={() => setActiveDuration(dur)}
                    className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                      activeDuration === dur
                        ? "bg-[var(--color-brand-orange)] text-white border-[var(--color-brand-orange)]"
                        : "bg-white text-gray-600 border-gray-200"
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>

            {/* Result count */}
            <p className="text-xs font-semibold text-gray-400 pl-[68px]">
              <SlidersHorizontal className="inline w-3.5 h-3.5 mr-1 mb-0.5" />
              {filtered.length} package{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* ── DESKTOP layout: single inline row ── */}
          <div className="hidden sm:flex max-w-7xl mx-auto px-6 lg:px-8 py-4 items-center gap-4">
            {/* Category */}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 mr-1">
                <Tag className="w-3.5 h-3.5" /> Type
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[var(--color-brand-orange)] text-white border-[var(--color-brand-orange)] shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-200 mx-2" />

            {/* Duration */}
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 mr-1">
                <Clock className="w-3.5 h-3.5" /> Duration
              </span>
              {DURATIONS.map((dur) => (
                <button
                  key={dur}
                  onClick={() => setActiveDuration(dur)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeDuration === dur
                      ? "bg-[var(--color-brand-orange)] text-white border-[var(--color-brand-orange)] shadow-sm"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)]"
                  }`}
                >
                  {dur}
                </button>
              ))}
            </div>

            {/* Result count */}
            <div className="ml-auto text-sm font-semibold text-gray-400">
              <SlidersHorizontal className="inline w-4 h-4 mr-1 mb-0.5" />
              {filtered.length} package{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>

        </section>

        {/* ── PACKAGES GRID ── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="text-center py-32 text-gray-400">
                <p className="text-2xl font-bold mb-3">No packages found</p>
                <p className="text-base">Try adjusting your filters above.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-amber-200 flex flex-col group transition-all duration-300"
                  >
                    {/* ── Image ── */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      {/* Badge top-left */}
                      {pkg.badge && (
                        <span className="absolute top-4 left-4 bg-[var(--color-brand-orange)] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                          {pkg.badge}
                        </span>
                      )}

                      {/* Duration top-right */}
                      <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 font-bold text-xs px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[var(--color-brand-orange)]" />
                        {pkg.duration}
                      </span>

                      {/* Category bottom-left */}
                      <span className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                        {pkg.category}
                      </span>
                    </div>

                    {/* ── Content ── */}
                    <div className="p-6 flex-grow flex flex-col">
                      {/* Rating row */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.round(pkg.rating)
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-gray-200 fill-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-gray-700">{pkg.rating}</span>
                        <span className="text-xs text-gray-400">({pkg.reviewCount} reviews)</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-extrabold text-gray-900 mb-2 leading-snug group-hover:text-[var(--color-brand-orange)] transition-colors">
                        {pkg.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-grow">
                        {pkg.description}
                      </p>

                      {/* Destinations */}
                      <div className="flex flex-nowrap overflow-hidden gap-1.5 mb-5">
                        {pkg.destinations.slice(0, 3).map((dest, i) => (
                          <span
                            key={i}
                            className="flex-shrink-0 bg-amber-50 border border-amber-100 text-[var(--color-brand-orange)] text-[11px] font-bold px-2.5 py-1 rounded-full"
                          >
                            {dest}
                          </span>
                        ))}
                        {pkg.destinations.length > 3 && (
                          <span className="flex-shrink-0 bg-gray-100 text-gray-500 text-[11px] font-bold px-2.5 py-1 rounded-full">
                            +{pkg.destinations.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Price + CTA row */}
                      <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Starting price</p>
                          <p className="text-xl font-extrabold text-gray-900">{pkg.price}</p>
                          <p className="text-[10px] text-gray-400">per person</p>
                        </div>
                        <a
                          href={`/itineraries/${pkg.slug}`}
                          className="flex items-center gap-1.5 bg-[var(--color-brand-orange)] hover:bg-amber-700 text-white text-sm font-bold px-5 py-3 rounded-2xl transition-all shadow-md shadow-orange-100 group/btn"
                        >
                          View Details
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="bg-[var(--color-brand-green)] py-20">
          <ScrollReveal animation="reveal-up">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-green-100 text-lg mb-10">
                Every journey can be 100% customized. Tell us your dream trip and we'll craft it for you.
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[var(--color-brand-orange)] hover:bg-amber-700 text-white font-bold px-10 py-4 rounded-full text-base transition-all shadow-xl shadow-orange-900/30"
              >
                Request a Custom Tour
              </a>
            </div>
          </ScrollReveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
