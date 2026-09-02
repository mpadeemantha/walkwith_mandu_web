"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import {
  GraduationCap,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  Car,
  Compass,
  Sparkles,
  ArrowRight,
  Heart
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── LEFT COLUMN: WALKMANDU.PNG AT MAXIMUM SIZE (NO BACKGROUND, NO BACKDROPS) ── */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <ScrollReveal animation="reveal-fade" className="w-full flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none flex items-center justify-center">
                <img
                  src="/walkmandu.png"
                  alt="Walk With Mandu - Official Mascot & Island Guide"
                  className="w-full h-auto max-h-[580px] lg:max-h-[640px] object-contain  hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* ── RIGHT COLUMN: HIGH-IMPACT ESSENTIALS ── */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
            <ScrollReveal animation="reveal-up">

              {/* Eyebrow & Pillars */}
              <div className="space-y-2 mb-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[var(--color-brand-orange)] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                  <span>Why Choose Walk With Mandu?</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-extrabold tracking-wider uppercase">
                  <span className="text-[var(--color-brand-orange)]">Women Led</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-emerald-600">Sustainable</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-blue-600">Trusted</span>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Empowering Travel, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-500">
                  Meaningful Island Journeys.
                </span>
              </h2>

              {/* Concise Intro */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
                Walk with Mandu is an officially certified, women-led tour company dedicated to creating ethical, sustainable, and 100% tailor-made private tours across Sri Lanka.
              </p>

              {/* ── 4 ESSENTIAL PILLARS (ELEGANT COHESIVE CARDS) ── */}
              <div className="grid sm:grid-cols-2 gap-4 pt-1">

                {/* 1. Women-Led Tourism */}
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[var(--color-brand-orange)] flex-shrink-0">
                        <Heart className="w-4 h-4 fill-[var(--color-brand-orange)]/20" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">
                        Proudly Women-Led
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Empowering women leadership in Sri Lanka’s tourism industry with safe, thoughtful, and ethical travel.
                    </p>
                  </div>
                </div>

                {/* 2. Professional Qualifications */}
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">
                        Certified Expertise
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      OTHM Level 7 in Travel & Hospitality, Travelife Sustainability Manager, and 12+ years experience.
                    </p>
                  </div>
                </div>

                {/* 3. Sustainable & Responsible */}
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">
                        Eco & Community First
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Eco-friendly itineraries supporting local village hosts, artisans, and wildlife conservation.
                    </p>
                  </div>
                </div>

                {/* 4. Tourism Board Registered (with SLTD Logo directly placed here) */}
                <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900">
                          SLTDA Registered
                        </h3>
                      </div>
                      {/* Official Sri Lanka Tourist Board Logo placed in this area */}
                      <img
                        src="/SLTD logo.png"
                        alt="Sri Lanka Tourism Development Authority"
                        className="h-8 w-auto object-contain flex-shrink-0"
                      />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Official Tourist Board Approved company with registered drivers & licensed national guides.
                    </p>
                  </div>
                </div>

              </div>

              {/* ── SIGNATURE HIGHLIGHTS & CTA ── */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600 flex flex-wrap items-center gap-2">
                  <span className="text-amber-500">✨</span>
                  <span>Authentic Walks</span>
                  <span className="text-gray-300">•</span>
                  <span>Nature Trails</span>
                  <span className="text-gray-300">•</span>
                  <span>Cultural Immersion</span>
                  <span className="text-gray-300">•</span>
                  <span className="font-bold text-gray-900">Safe, Ethical & Tailored</span>
                </p>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand-orange)] hover:underline py-1 group flex-shrink-0"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
