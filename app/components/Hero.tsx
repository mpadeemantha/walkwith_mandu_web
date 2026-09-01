"use client";

import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const slides = [
  {
    image: "/bbg2.png",
    heading: "Discover the Magic",
    highlight: "of Sri Lanka",
    subheading: "Tailor-made, unforgettable travel experiences for the adventurous soul. Let Walk With Mandu be your local guide to paradise."
  },
  {
    image: "/bbg3.png",
    heading: "Explore Ancient",
    highlight: "Wonders",
    subheading: "From majestic temples to ancient rock fortresses, step back in time and experience our rich cultural heritage."
  },
  {
    image: "/ctabg.png",
    heading: "Relax on Pristine",
    highlight: "Beaches",
    subheading: "Sun, sea, and surf. Unwind on the golden shores of the South Coast and create memories that last a lifetime."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 9000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Slider Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10"></div>
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ${index === currentSlide ? "scale-110" : "scale-100"
              }`}
          />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={`content-${index}`}
            className={`absolute bottom-32 md:bottom-40 left-0 right-0 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-in-out ${index === currentSlide
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-8 invisible"
              }`}
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
              {/* Left Side: Text */}
              <div className="text-left max-w-2xl">
                <div className="inline-flex items-center gap-2  text-sm font-medium text-white shadow-lg">
                  <svg className="w-4 h-4 text-[var(--color-brand-orange)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Sri Lanka Tourist Board Approved Tour Company
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 tracking-tight drop-shadow-lg">
                  {slide.heading} <br />
                  <span className="text-[var(--color-brand-orange)] drop-shadow-md">{slide.highlight}</span>
                </h1>
                <p className="text-base md:text-lg text-gray-100 font-medium drop-shadow-md border-l-4 border-[var(--color-brand-orange)] pl-4">
                  {slide.subheading}
                </p>
              </div>

              {/* Right Side: Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
                <a href="#contact" className="bg-[var(--color-brand-orange)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-colors shadow-xl shadow-orange-900/50 text-center flex items-center justify-center gap-2 group">
                  Start Planning
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <a href="/packages" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-colors text-center shadow-lg">
                  View Packages
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stylish Navigation */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 border-t border-white/20 pt-6">

            {/* Slide Numbers */}
            <div className="text-white font-mono text-xl font-bold tracking-widest">
              0{currentSlide + 1} <span className="text-white/40">/ 0{slides.length}</span>
            </div>

            {/* Progress Bars */}
            <div className="flex gap-2 flex-1 md:flex-none">
              {slides.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${index === currentSlide
                    ? "bg-[var(--color-brand-orange)] w-16 md:w-24"
                    : "bg-white/30 hover:bg-white/60 w-8 md:w-12"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="ml-auto flex gap-3">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full border border-[var(--color-brand-orange)] bg-[var(--color-brand-orange)] flex items-center justify-center text-white hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-900/50"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
