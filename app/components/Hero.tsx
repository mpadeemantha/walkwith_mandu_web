"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Train,
  Landmark,
  Trees,
  Waves
} from "lucide-react";

interface StoryChapter {
  id: string;
  number: string;
  title: string;
  location: string;
  duration: string;
  style: string;
  highlight: string;
  image: string;
  altText: string;
  link: string;
  icon: React.ElementType;
}

const chapters: StoryChapter[] = [
  {
    id: "highlands",
    number: "01",
    title: "Misty Highlands & The Tea Train",
    location: "Kandy • Nuwara Eliya • Ella",
    duration: "7 Days",
    style: "Scenic Rail & Nature",
    highlight: "Reserved scenic train through cloud forests + handpicked colonial tea estates.",
    image: "/bbg2.png",
    altText: "Scenic train journey through Sri Lanka tea country highlands in Ella",
    link: "/packages",
    icon: Train
  },
  {
    id: "heritage",
    number: "02",
    title: "Ancient Kingdoms & Golden Dawn",
    location: "Sigiriya • Polonnaruwa • Dambulla",
    duration: "8 Days",
    style: "Living UNESCO Heritage",
    highlight: "VIP sunrise climb of Sigiriya Lion Rock before crowds, guided by a local historian.",
    image: "/bbg3.png",
    altText: "Sigiriya Rock Fortress ancient citadel UNESCO heritage site in Sri Lanka",
    link: "/itineraries/cultural-heritage",
    icon: Landmark
  },
  {
    id: "wildlife",
    number: "03",
    title: "Untamed Leopards & Elephant Plains",
    location: "Yala National Park • Udawalawe",
    duration: "5 Days",
    style: "Deep Safari & Luxury Tents",
    highlight: "Private open-top 4x4 tracking with master naturalists in quiet wildlife corridors.",
    image: "/4.jpeg",
    altText: "Wild leopards and safari game drive in Yala National Park Sri Lanka",
    link: "/packages",
    icon: Trees
  },
  {
    id: "coast",
    number: "04",
    title: "Secret Coves & Southern Swells",
    location: "Galle Fort • Ahangama • Mirissa",
    duration: "6 Days",
    style: "Ocean, Surf & Whales",
    highlight: "Beachfront eco-villas, private blue whale catamaran, and ocean sunset dining.",
    image: "/1.jpg",
    altText: "Pristine golden tropical beach on the south coast of Sri Lanka",
    link: "/itineraries/south-coast-surf-chill",
    icon: Waves
  }
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");

  const current = chapters[activeIdx];
  const CurrentIcon = current.icon;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth auto-rotation between signature routes
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % chapters.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIdx]);

  const nextSlide = () => {
    setActiveIdx((prev) => (prev + 1) % chapters.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 12000);
  };

  const prevSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? chapters.length - 1 : prev - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 12000);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-950 text-white pt-28 pb-12 lg:pt-32 lg:pb-16 flex flex-col items-center justify-center"
      aria-label="Welcome to Walk With Mandu — Private Sri Lanka Tours"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── BACKGROUND VISUALS WITH CROSS-FADE (Optimized for SEO & Core Web Vitals) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {chapters.map((ch, idx) => {
          const isActive = idx === activeIdx;
          return (
            <div
              key={ch.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
            >
              <img
                src={ch.image}
                alt={ch.altText}
                loading={idx === 0 ? "eager" : "lazy"}
                className={`w-full h-full object-cover object-center transition-transform duration-[10000ms] ease-out ${isActive ? "scale-105" : "scale-100"
                  }`}
              />
              {/* Cinematic Scrim: keeps text razor sharp and readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/80" />
            </div>
          );
        })}
      </div>

      {/* ── UNIFIED CONTENT WRAPPER (NO AWKWARD GAP) ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-6 lg:space-y-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* ── LEFT COLUMN: FOCUSED, HIGH-IMPACT EDITORIAL CONTENT ── */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">

            {/* Semantic Single H1 for SEO with primary targeted keywords */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              Private Sri Lanka Tours, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-orange-400">
                Crafted Just For You.
              </span>
            </h1>

            {/* Concise, readable value proposition */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              Experience the island with dedicated local chauffeur-guides. From misty tea highlands and ancient citadels to untamed leopard safaris and secluded ocean coves—every day is tailored to your rhythm.
            </p>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center gap-6 pt-1 text-xs text-gray-400 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>100% Tailor-Made</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Private Chauffeur Included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Flexible Cancellation</span>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: ONE SINGLE SPOTLIGHT ROUTE CARD (Rotates 1-by-1) ── */}
          <div className="lg:col-span-5 flex flex-col justify-center">

            {/* Header with Navigation Controls */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                  Featured Signature Route
                </h2>
              </div>

              {/* Slider Controls & Counter */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-gray-300">
                  {current.number} <span className="text-gray-600">/ 04</span>
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
                    aria-label="Previous Signature Route"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
                    aria-label="Next Signature Route"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* The Single Spotlight Card with Smooth Transitions */}
            <article className="relative bg-gray-900/90 backdrop-blur-xl border border-white/15 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-black/80 overflow-hidden group">

              {/* Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-[var(--color-brand-orange)]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Route Thumbnail Visual */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden mb-4 border border-white/10">
                <img
                  src={current.image}
                  alt={current.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

                {/* Floating Tags */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-black/60 backdrop-blur-md text-[var(--color-brand-orange)] text-xs font-bold px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5">
                    <CurrentIcon className="w-3.5 h-3.5" />
                    {current.style}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-gray-200">
                  <span className="flex items-center gap-1 font-semibold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {current.duration}
                  </span>
                  <span className="flex items-center gap-1 text-gray-300 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                    {current.location}
                  </span>
                </div>
              </div>

              {/* Title & Experience Info */}
              <div className="space-y-2 mb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {current.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />
                  <span>{current.highlight}</span>
                </p>
              </div>

              {/* Action Link Button */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={current.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand-orange)] hover:text-orange-300 transition-colors group/btn"
                >
                  <span>Explore This Route</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                {/* 4 Clickable Chapter Dots */}
                <div className="flex items-center gap-1.5">
                  {chapters.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveIdx(idx);
                        setIsPaused(true);
                        setTimeout(() => setIsPaused(false), 12000);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                        ? "w-6 bg-[var(--color-brand-orange)]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                        }`}
                      aria-label={`Switch to Route ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Subtle Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
                <div
                  key={activeIdx}
                  className="h-full bg-brand-gradient"
                  style={{
                    animation: isPaused ? "none" : "heroTimer 6.5s linear infinite"
                  }}
                />
              </div>

            </article>

          </div>

        </div>

        {/* ── STREAMLINED QUICK TRIP CURATOR DOCK ── */}
        <div className="w-full">
        <div className="bg-gray-900/80 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 shadow-xl">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">

            {/* Selector 1: Destination / Interest */}
            <div className="flex-1 border-b sm:border-b-0 sm:border-r border-white/10 pb-2.5 sm:pb-0 sm:pr-4">
              <label htmlFor="curator-interest" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                What Inspires You?
              </label>
              <select
                id="curator-interest"
                value={selectedInterest}
                onChange={(e) => setSelectedInterest(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer"
                aria-label="Filter by travel interest"
              >
                <option value="All" className="bg-gray-900 text-white">All Highlights of Sri Lanka</option>
                <option value="Cultural" className="bg-gray-900 text-white">Cultural Heritage & Temples</option>
                <option value="Wildlife" className="bg-gray-900 text-white">Wildlife Safari & Leopards</option>
                <option value="Beach" className="bg-gray-900 text-white">South Coast & Ocean Whales</option>
                <option value="Adventure" className="bg-gray-900 text-white">Tea Hills & Scenic Train</option>
              </select>
            </div>

            {/* Selector 2: Duration */}
            <div className="flex-1 border-b sm:border-b-0 sm:border-r border-white/10 pb-2.5 sm:pb-0 sm:px-4">
              <label htmlFor="curator-duration" className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                Duration
              </label>
              <select
                id="curator-duration"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-xs sm:text-sm focus:outline-none cursor-pointer"
                aria-label="Filter by tour duration"
              >
                <option value="All" className="bg-gray-900 text-white">Any Duration</option>
                <option value="1–4 Days" className="bg-gray-900 text-white">1–4 Days (Short Getaway)</option>
                <option value="5–7 Days" className="bg-gray-900 text-white">5–7 Days (Classic Route)</option>
                <option value="8+ Days" className="bg-gray-900 text-white">8+ Days (Deep Discovery)</option>
              </select>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link
                href={`/packages?category=${encodeURIComponent(selectedInterest)}&duration=${encodeURIComponent(selectedDuration)}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-bold px-6 py-3 rounded-xl sm:rounded-2xl shadow-md transition-all text-xs sm:text-sm group"
                aria-label="Find Tailored Sri Lanka Trips"
              >
                <span>Find Tailored Trips</span>
                <svg
                  className="w-3.5 h-3.5 rotate-90 group-hover:translate-x-1 transition-transform"
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
    </div>

      {/* Progress animation keyframe */}
      <style jsx>{`
        @keyframes heroTimer {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
