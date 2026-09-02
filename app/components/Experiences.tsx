"use client";

import React, { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Cooking",
    description: "Learn to prepare authentic Sri Lankan cuisine with local experts.",
    image: "/cooking.png"
  },
  {
    title: "Surfing",
    description: "Ride the best waves on the beautiful coasts of Sri Lanka.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFFgMLOeYJDYf8TzBSe10PdNWtczr1cz2gjBcwl21iNcAMFmQ8LjBz_tR&s=10"
  },
  {
    title: "Train Ride",
    description: "Experience one of the world's most scenic train journeys through the highlands.",
    image: "/4.jpeg"
  },
  {
    title: "Temple Visit",
    description: "Discover the spiritual heritage and ancient architecture of sacred temples.",
    image: "https://srilankatravellife.com/wp-content/uploads/2025/10/The-Temple-of-the-Sacred-Tooth-Relic-Kandy.jpg"
  },
  {
    title: "Traditional Arts and Crafts",
    description: "Immerse yourself in traditional Sri Lankan village life and culture.",
    image: "https://www.bestoflanka.com/images/traditional-arts-and-crafts-of-sri-lanka_07.jpg"
  },
  {
    title: "Trekking",
    description: "Hike through lush green mountains, tea plantations, and scenic trails.",
    image: "https://www.srilankaecotourism.lk/images/activity_img/trekking/07.jpg"
  },
  {
    title: "Diving",
    description: "Explore vibrant coral reefs and mesmerizing shipwrecks underwater.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7cIqUkQ0lh-MwihQ0W7pUfgwIMhU-_vw47AzHNhHKkkjW1852mYIUZd8&s=10"
  },
  {
    title: "Village Tour",
    description: "Immerse yourself in traditional Sri Lankan village life and culture.",
    image: "/villagevisit.png"
  }
];

export default function Experiences() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = clientWidth * 0.82 + 16;
      const newIdx = Math.round(scrollLeft / cardWidth);
      setActiveIdx(Math.min(Math.max(newIdx, 0), experiences.length - 1));
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const cardWidth = clientWidth * 0.82 + 16;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth"
      });
      setActiveIdx(index);
    }
  };

  const scrollPrev = () => {
    if (activeIdx > 0) scrollTo(activeIdx - 1);
  };

  const scrollNext = () => {
    if (activeIdx < experiences.length - 1) scrollTo(activeIdx + 1);
  };

  return (
    <section id="experiences" className="py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="reveal-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
            <div>
              <h2 className="text-xs sm:text-sm font-bold text-[var(--color-brand-orange)] tracking-widest uppercase mb-2">
                What We Offer
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
                Authentic <span className="text-[var(--color-brand-orange)]">Experiences</span>
              </h3>
            </div>

            {/* Mobile Carousel Controls (Visible only on mobile) */}
            <div className="flex md:hidden items-center justify-between pt-2">
              <span className="text-xs font-mono font-bold text-gray-500">
                0{activeIdx + 1} <span className="text-gray-400">/ 0{experiences.length}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={scrollPrev}
                  disabled={activeIdx === 0}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                    activeIdx === 0
                      ? "border-gray-200 text-gray-300 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100 active:scale-95"
                  }`}
                  aria-label="Previous experience"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollNext}
                  disabled={activeIdx === experiences.length - 1}
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                    activeIdx === experiences.length - 1
                      ? "border-gray-200 text-gray-300 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100 active:scale-95"
                  }`}
                  aria-label="Next experience"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── MOBILE: TOUCH SWIPE CARD CAROUSEL (Visible on mobile only) ── */}
        <div className="md:hidden -mx-4 px-4">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {experiences.map((experience, index) => (
              <div
                key={`mobile-exp-${index}`}
                className="w-[82vw] max-w-[320px] flex-shrink-0 snap-center group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg active:scale-[0.99] transition-transform duration-300"
              >
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand-orange)] mb-1">
                    Experience 0{index + 1}
                  </span>
                  <h4 className="text-2xl font-bold mb-2 drop-shadow-md">
                    {experience.title}
                  </h4>
                  <div className="w-12 h-1 bg-[var(--color-brand-orange)] mb-3 rounded-full" />
                  <p className="text-gray-200 text-sm leading-relaxed drop-shadow">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="flex justify-center items-center gap-1.5 pt-1">
            {experiences.map((_, idx) => (
              <button
                key={`dot-${idx}`}
                onClick={() => scrollTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIdx
                    ? "w-6 bg-[var(--color-brand-orange)]"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to experience ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP & TABLET: 4-COLUMN GRID (Hidden on mobile) ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <ScrollReveal key={`desktop-exp-${index}`} animation="reveal-up" delay={index * 100}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
                  <div className="transform transition-transform duration-500 lg:translate-y-12 lg:group-hover:translate-y-0">
                    <h4 className="text-2xl font-bold mb-3 drop-shadow-md">
                      {experience.title}
                    </h4>
                    <div className="w-12 h-1 bg-[var(--color-brand-orange)] mb-4 rounded-full transition-all duration-500 group-hover:w-full" />
                    <p className="text-gray-200 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:h-0 lg:group-hover:h-auto overflow-hidden text-sm md:text-base drop-shadow">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
