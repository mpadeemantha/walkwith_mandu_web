"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function ModernCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden mx-4 sm:mx-6 lg:mx-8 mb-20 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl">
      {/* Background with cinematic gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ctabg1.png"
          alt="Sri Lanka landscape"
          className="w-full h-full object-cover align-bottom transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        
        {/* Left Column: Heading & Copy */}
        <div className="lg:w-3/5 text-left text-white">
          <ScrollReveal animation="reveal-up">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
              <span>Start Your Journey</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight tracking-tight drop-shadow-md">
              Ready to Explore the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-300">
                Magic of Sri Lanka?
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-gray-200 leading-relaxed max-w-xl font-light mb-6 drop-shadow">
              Let our local team handle every private chauffeur transfer, boutique stay, and scenic experience while you relax and make lifelong memories.
            </p>

            {/* Micro Trust Strip */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300 font-medium pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                SLTDA Registered
              </span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[var(--color-brand-orange)]" />
                Women-Led & Sustainable
              </span>
              <span className="text-gray-500">•</span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                5.0 TripAdvisor Rating
              </span>
            </div>

          </ScrollReveal>
        </div>

        {/* Right Column: Dual Action Buttons */}
        <div className="lg:w-2/5 w-full flex lg:justify-end">
          <ScrollReveal animation="reveal-fade" className="flex flex-col gap-4 w-full sm:w-auto lg:w-84">
            
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-gradient text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5 active:scale-95 group text-center"
            >
              <span>Plan Your Private Trip</span>
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
              href="https://wa.me/94776175241?text=Hi%20Mandu!%20I%20am%20ready%20to%20plan%20a%20private%20trip%20to%20Sri%20Lanka."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all active:scale-95 text-center"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat with Mandu on WhatsApp</span>
            </a>

            <p className="text-center text-[11px] text-gray-300 pt-1">
              Free consultation · No booking fee · 100% custom routes
            </p>

          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
