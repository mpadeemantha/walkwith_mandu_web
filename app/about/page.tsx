import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import Reviews from "../components/Reviews";
import { Compass, Heart, Leaf, Users, Map, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20">
        
        {/* ── HERO SECTION ── */}
        <section className="relative py-24 md:py-32 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/bbg2.png" 
              alt="Sri Lanka landscape" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="reveal-up">
              <span className="text-[var(--color-brand-orange)] font-bold tracking-widest uppercase text-sm mb-4 block">
                Discover Our Roots
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-300">Walk With Mandu</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We are a passionate team of local travel experts dedicated to sharing the hidden wonders, authentic culture, and breathtaking landscapes of Sri Lanka with the world.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── OUR STORY & WHAT WE DO ── */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Image Collage */}
              <ScrollReveal animation="reveal-fade">
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <img src="/3.jpeg" alt="Local culture" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                      <div className="flex items-center gap-4 text-white">
                        <div className="bg-[var(--color-brand-orange)] p-3 rounded-full flex-shrink-0">
                          <Compass className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">10+ Years</p>
                          <p className="text-sm text-gray-200">of crafting unforgettable journeys</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Content */}
              <div className="space-y-12">
                <ScrollReveal animation="reveal-up">
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                      <Leaf className="w-8 h-8 text-[var(--color-brand-orange)] flex-shrink-0" />
                      Our Story
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Walk With Mandu began with a simple belief: that travel should be more than just visiting famous landmarks. Founded by local enthusiasts, our journey started with a desire to show travelers the <strong>real Sri Lanka</strong>—the hidden waterfalls, the family-owned eateries, the untouched beaches, and the warmth of our communities.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg mt-4">
                      Today, we are proud to be a Tourist Board Approved Company, crafting bespoke, sustainable itineraries that leave a positive impact on both our guests and our beautiful island home.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="reveal-up" delay={200}>
                  <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                      <Map className="w-8 h-8 text-[var(--color-brand-orange)] flex-shrink-0" />
                      What We Do
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      We specialize in creating 100% tailor-made, private tours across Sri Lanka. Whether you're seeking a thrilling wildlife safari, a serene wellness retreat, or a deep dive into ancient heritage, we handle every detail from arrival to departure.
                    </p>
                    
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Customized Itineraries",
                        "Luxury & Boutique Stays",
                        "Expert Local Guides",
                        "Sustainable Tourism",
                        "Seamless Transfers",
                        "24/7 Concierge Support"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                          <div className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              
              <ScrollReveal animation="reveal-up">
                <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                    <Star className="w-10 h-10 text-[var(--color-brand-orange)]" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To be the most trusted and innovative travel partner in Sri Lanka, recognized globally for creating deeply immersive, life-changing journeys while fiercely protecting and promoting our island's natural and cultural heritage.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="reveal-up" delay={200}>
                <div className="bg-gray-900 p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow border border-gray-800 h-full flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-gray-700 flex-shrink-0">
                    <Heart className="w-10 h-10 text-[var(--color-brand-orange)]" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-6">Our Mission</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    To design personalized travel experiences that connect travelers with the soul of Sri Lanka. We strive to empower local communities, practice sustainable tourism, and ensure every guest leaves as a lifelong friend of Mandu.
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ── REVIEWS SECTION ── */}
        <div className="bg-white">
          <Reviews />
        </div>

        {/* ── CTA ── */}
        <section className="py-24 bg-[var(--color-brand-green)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="reveal-up">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Ready to travel with us?
              </h2>
              <p className="text-xl text-green-100 mb-10">
                Let our experts craft the perfect Sri Lankan adventure just for you.
              </p>
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all group">
                Plan Your Trip Now
                <svg className="w-5 h-5 rotate-90 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
              </a>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
