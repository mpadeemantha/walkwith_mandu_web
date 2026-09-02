"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import Reviews from "../components/Reviews";
import {
  Compass,
  Heart,
  Leaf,
  Users,
  Map,
  Star,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Car,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Award
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      <main className="flex-grow">
        
        {/* ── CINEMATIC HERO SECTION ── */}
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/bbg2.png"
              alt="Sri Lanka landscape"
              className="w-full h-full object-cover opacity-30 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/90" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <ScrollReveal animation="reveal-up">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                <span>Proudly Women-Led & Sustainable Tourism</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
                Empowering Travel, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-400">
                  Meaningful Island Journeys
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Based in the coastal town of Ahangama, Walk With Mandu is an officially registered, women-led tour company dedicated to crafting ethical, sustainable, and 100% private journeys across Sri Lanka.
              </p>

              {/* Trust highlights */}
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-gray-300">
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  SLTDA Registered Company
                </span>
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  OTHM Level 7 Management
                </span>
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  Travelife Sustainability Manager
                </span>
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  12+ Years Industry Experience
                </span>
              </div>

            </ScrollReveal>
          </div>
        </section>

        {/* ── OUR STORY & MASCOT SHOWCASE ── */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Mascot & Photography */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <ScrollReveal animation="reveal-fade" className="w-full flex justify-center">
                  <div className="relative w-full max-w-md flex items-center justify-center">
                    <img
                      src="/walkmandu.png"
                      alt="Walk With Mandu - Guide Mascot"
                      className="w-full h-auto max-h-[560px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Story Narrative */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <ScrollReveal animation="reveal-up">
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[var(--color-brand-orange)] text-xs font-bold uppercase tracking-wider mb-2">
                    <Leaf className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                    <span>Rooted in Ahangama</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    The Story Behind <span className="text-[var(--color-brand-orange)]">Walk With Mandu</span>
                  </h2>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Walk With Mandu was founded on a genuine passion to share Sri Lanka beyond tourist buses and crowded souvenir shops. Born in the vibrant coastal village of Ahangama on Sri Lanka’s south coast, our mission has always been simple: to show foreign guests the authentic, living soul of our island.
                  </p>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Under empowering women leadership, we built an ethical tour agency where local drivers, family homestay hosts, boatmen, and artisan communities are directly supported. We believe that true travel is about human connection—cooking a clay-pot curry with a village mother in Kandy, climbing Sigiriya at golden hour with no crowds, or catching sunset waves along quiet south coast reefs.
                  </p>

                  {/* 3 Value Callouts */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <span className="text-xl font-bold text-[var(--color-brand-orange)] block mb-0.5">12+</span>
                      <p className="text-xs font-bold text-gray-900">Years Experience</p>
                      <p className="text-[11px] text-gray-500">In hospitality & travel</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <span className="text-xl font-bold text-emerald-600 block mb-0.5">100%</span>
                      <p className="text-xs font-bold text-gray-900">Private Tours</p>
                      <p className="text-[11px] text-gray-500">Tailored to your rhythm</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                      <span className="text-xl font-bold text-blue-600 block mb-0.5">5.0 ★</span>
                      <p className="text-xs font-bold text-gray-900">TripAdvisor & Google</p>
                      <p className="text-[11px] text-gray-500">350+ verified reviews</p>
                    </div>
                  </div>

                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* ── CORE PILLARS & CREDENTIALS ── */}
        <section className="py-20 lg:py-24 bg-gray-50/70 border-t border-b border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal animation="reveal-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[var(--color-brand-orange)] text-xs font-bold uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                  <span>Why Choose Walk With Mandu?</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                  Women Led • Sustainable • Trusted
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  The standards, certifications, and philosophy that guide every single tour we operate.
                </p>
              </div>
            </ScrollReveal>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1: Women-Led Tourism */}
              <ScrollReveal animation="reveal-up" delay={100}>
                <div className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[var(--color-brand-orange)] flex-shrink-0">
                        <Heart className="w-6 h-6 fill-[var(--color-brand-orange)]/20" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-brand-orange)]">
                          Empowering Leadership
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          🌿 Proudly Women-Led Tourism
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      Walk with Mandu is led by empowering women leadership in Sri Lanka’s tourism industry. We actively advocate for female guides, female entrepreneurs, and equal representation across hospitality networks islandwide.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Ethical, safe, and family-friendly travel guarantees</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2: Professional Qualifications */}
              <ScrollReveal animation="reveal-up" delay={200}>
                <div className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600">
                          Academic & Practical Rigor
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          🎓 Strong Professional Qualifications
                        </h3>
                      </div>
                    </div>
                    <ul className="space-y-2.5 text-sm text-gray-700 mb-4">
                      <li className="flex items-center gap-2.5 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>OTHM Level 7</strong> in Travel & Hospitality Management</span>
                      </li>
                      <li className="flex items-center gap-2.5 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Travelife Sustainability Manager</strong> certified</span>
                      </li>
                      <li className="flex items-center gap-2.5 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span><strong>Over 12 Years</strong> of Tourism & Hospitality Experience</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Deep operational expertise across Sri Lanka</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3: Sustainable & Responsible Travel */}
              <ScrollReveal animation="reveal-up" delay={300}>
                <div className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                        <Leaf className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">
                          Planet & Community
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          🌱 Sustainable & Responsible Travel
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      We promote eco-friendly travel, community-based experiences, and nature conservation while creating meaningful journeys for our guests. From eliminating single-use plastics on tours to partnering with small eco-lodges, your journey directly benefits island preservation.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Low carbon footprint & direct village empowerment</span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 4: Official SLTDA Registration */}
              <ScrollReveal animation="reveal-up" delay={400}>
                <div className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600">
                            Government Certified
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">
                            🛡️ Official SLTDA Registered
                          </h3>
                        </div>
                      </div>
                      <img
                        src="/SLTD logo.png"
                        alt="Sri Lanka Tourist Board"
                        className="h-9 w-auto object-contain flex-shrink-0"
                      />
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700 mb-4">
                      <li className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Sri Lanka Tourism Board Registered Company</span>
                      </li>
                      <li className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Tourism Board Registered Chauffeur Drivers</span>
                      </li>
                      <li className="flex items-center gap-2 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Nationally Licensed Tourist Guides</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Highest standards of traveler safety & passenger insurance</span>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* Signature Ribbon */}
            <div className="mt-10 p-5 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p className="text-xs sm:text-sm font-semibold text-gray-700 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-amber-500">✨</span>
                <span>Authentic Walks</span>
                <span className="text-gray-300">•</span>
                <span>Nature Trails</span>
                <span className="text-gray-300">•</span>
                <span>Cultural Experiences</span>
                <span className="text-gray-300">•</span>
                <span className="font-bold text-gray-900">Safe • Ethical • Personalized Tours</span>
              </p>

              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand-orange)] hover:underline flex-shrink-0"
              >
                <span>Browse Signature Routes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* ── VISION & MISSION ── */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Vision Card */}
              <ScrollReveal animation="reveal-up">
                <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gray-50 border border-gray-200/80 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-orange-100 text-[var(--color-brand-orange)] flex items-center justify-center mb-6">
                      <Star className="w-7 h-7 fill-[var(--color-brand-orange)]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)] block mb-1">
                      Our Aspiration
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
                      Our Vision
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      To be Sri Lanka’s most trusted, ethical, and inspiring private travel partner—globally celebrated for connecting curious travelers with the authentic heart of our island while actively safeguarding its environment, heritage, and local communities.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Mission Card */}
              <ScrollReveal animation="reveal-up" delay={200}>
                <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gray-950 text-white border border-gray-800 shadow-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 text-orange-400 flex items-center justify-center mb-6 border border-white/15">
                      <Heart className="w-7 h-7 fill-orange-400" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-1">
                      Our Commitment
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                      Our Mission
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      To curate tailor-made, unforgettable travel experiences driven by local insight, warm hospitality, and unwavering safety. We empower women in tourism, practice genuine sustainability, and ensure every guest discovers Sri Lanka not as a tourist, but as a lifelong friend.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ── EMBEDDED REVIEWS SECTION ── */}
        <div className="bg-white">
          <Reviews />
        </div>

        {/* ── BOTTOM CALL TO ACTION ── */}
        <section className="py-20 bg-gray-950 text-white border-t border-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="reveal-up">
              
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-orange)] block mb-3">
                Start Your Story
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
                Ready to Experience <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-400">
                  The Real Sri Lanka?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
                Tell us your dream route, preferred pace, and interests. Our local travel designers will craft your custom itinerary with zero booking pressure.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-orange-500/30 transition-all group"
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

                <a
                  href="https://wa.me/94776175241?text=Hi%20Mandu!%20I%20am%20interested%20in%20planning%20a%20tour%20of%20Sri%20Lanka."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold px-7 py-4 rounded-full transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </ScrollReveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
