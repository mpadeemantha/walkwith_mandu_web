import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function ModernCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden mx-4 sm:mx-6 lg:mx-8 mb-24 rounded-[3rem]">
      {/* Background with slight parallax setup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        <img
          src="/ctabg1.png"
          alt="Sri Lanka landscape"
          className="w-full h-full object-cover align-bottom transform scale-105"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="md:w-3/5 text-center md:text-left">
          <ScrollReveal animation="reveal-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-white font-bold text-sm tracking-widest uppercase mb-6 border border-white/30 shadow-lg">
              Start Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Ready to explore the <br className="hidden lg:block" /> magic of Sri Lanka?
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-0 font-light max-w-xl drop-shadow-md">
              Let us handle the details while you make the memories. Get in touch today to start building your bespoke itinerary.
            </p>
          </ScrollReveal>
        </div>

        <div className="md:w-2/5 flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-end">
          <ScrollReveal animation="reveal-fade">
            <a href="/#contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[var(--color-brand-orange)] text-white px-8 py-4.5 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-2xl shadow-orange-900/50 hover:-translate-y-1 group">
              Start Planning
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
