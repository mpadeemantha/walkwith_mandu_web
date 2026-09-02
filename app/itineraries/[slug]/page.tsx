import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import {
  Clock, MapPin, Users, Activity,
  CheckCircle2, XCircle, Calendar,
  Camera, Coffee, Car,
  Map as MapIcon, Check, Star,
  Phone, Mail, ChevronRight,
} from "lucide-react";
import { allPackages } from "../../data/packages";

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function StatBadge({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm">
      <span className="text-[var(--color-brand-orange)]">{icon}</span>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">{label}</p>
        <p className="text-sm font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

function SectionHeading({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[var(--color-brand-orange)]">
        {icon}
      </span>
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
    </div>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default function PackageDetailsPage({ params }: { params: { slug: string } }) {
  // Pull the tour from the shared data file
  const tour = allPackages.find((p) => p.slug === params.slug) ?? allPackages[0];

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(tour.rating));

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f5f0] text-gray-800">
      <Navbar />

      <main className="flex-grow">

        {/* ── HERO ── */}
        <section className="relative w-full h-[50vh] min-h-[60vh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b]/90 via-[#1a120b]/40 to-transparent z-10" />
            <img
              src={tour.heroImage}
              alt={tour.title}
              className="w-full h-full object-cover scale-105"
            />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 pt-24">
            <ScrollReveal animation="reveal-up">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {tour.badge && (
                  <span className="bg-[var(--color-brand-orange)] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    {tour.badge}
                  </span>
                )}
                <span className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">
                  {tour.style}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-3xl mb-6 tracking-tight">
                {tour.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-white/80 font-medium">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[var(--color-brand-orange)]" />
                  {tour.duration} / {tour.nights}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-brand-orange)]" />
                  {tour.destinations.length} Destinations
                </span>
                <span className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[var(--color-brand-orange)]" />
                  {tour.physicalRating}
                </span>
                <span className="flex items-center gap-1">
                  {stars.map((filled, i) => (
                    <Star key={i} className={`w-4 h-4 ${filled ? "fill-amber-400 text-amber-400" : "text-white/30"}`} />
                  ))}
                  <span className="ml-1 text-white/70">({tour.reviewCount})</span>
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── DESTINATION BREADCRUMB ── */}
        <div className="bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-1 text-sm text-gray-500 font-medium overflow-x-auto no-scrollbar">
            {tour.destinations.map((dest, i) => (
              <React.Fragment key={i}>
                <span className={i === 0 ? "text-[var(--color-brand-orange)] font-semibold" : ""}>{dest}</span>
                {i < tour.destinations.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row gap-14">

            {/* ── LEFT CONTENT ── */}
            <div className="lg:w-[62%] space-y-16">

              {/* Overview */}
              <ScrollReveal animation="reveal-up">
                <SectionHeading icon={<MapIcon className="w-5 h-5" />} title="About This Tour" />
                <p className="text-gray-600 leading-relaxed text-lg">{tour.overview}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                  <StatBadge icon={<Clock className="w-4 h-4" />} label="Duration" value={`${tour.duration} / ${tour.nights}`} />
                  <StatBadge icon={<Users className="w-4 h-4" />} label="Group Type" value={tour.groupSize} />
                  <StatBadge icon={<Activity className="w-4 h-4" />} label="Activity Level" value={tour.physicalRating} />
                </div>
              </ScrollReveal>

              {/* Highlights */}
              <ScrollReveal animation="reveal-up">
                <SectionHeading icon={<Star className="w-5 h-5" />} title="Tour Highlights" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-200"
                    >
                      <Check className="w-5 h-5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm font-medium leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Included / Not Included */}
              <ScrollReveal animation="reveal-up">
                <SectionHeading icon={<CheckCircle2 className="w-5 h-5" />} title="What's Included" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm">
                    <p className="text-sm font-bold uppercase tracking-widest text-green-600 mb-5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Included
                    </p>
                    <ul className="space-y-3">
                      {tour.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm">
                    <p className="text-sm font-bold uppercase tracking-widest text-red-500 mb-5 flex items-center gap-2">
                      <XCircle className="w-4 h-4" /> Not Included
                    </p>
                    <ul className="space-y-3">
                      {tour.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Itinerary */}
              <ScrollReveal animation="reveal-up">
                <SectionHeading icon={<Calendar className="w-5 h-5" />} title="Day-by-Day Itinerary" />

                <div className="relative">
                  <div className="absolute left-[22px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-brand-orange)] via-amber-200 to-transparent hidden sm:block" />

                  <div className="space-y-8">
                    {tour.days.map((day, idx) => (
                      <div key={idx} className="flex gap-6 group">
                        {/* Circle dot */}
                        <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                          <div className="w-11 h-11 rounded-full bg-[var(--color-brand-orange)] flex items-center justify-center text-white font-bold text-xs shadow-md shadow-orange-200 z-10">
                            {idx + 1}
                          </div>
                        </div>

                        {/* Card */}
                        <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group-hover:shadow-md group-hover:border-amber-200 transition-all duration-300">
                          <div className="flex flex-col sm:flex-row">
                            {/* Image */}
                            <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden relative flex-shrink-0">
                              <img
                                src={day.image}
                                alt={day.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <span className="sm:hidden absolute top-3 left-3 bg-[var(--color-brand-orange)] text-white text-xs font-bold px-3 py-1 rounded-full">
                                {day.day}
                              </span>
                            </div>

                            {/* Text */}
                            <div className="p-6 flex flex-col justify-center sm:w-3/5">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="hidden sm:inline text-xs font-bold uppercase tracking-widest text-[var(--color-brand-orange)]">
                                  {day.day}
                                </span>
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                  <MapPin className="w-3 h-3" /> {day.location}
                                </span>
                              </div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{day.title}</h3>
                              <p className="text-sm text-gray-500 leading-relaxed">{day.details}</p>
                              {day.meals && (
                                <div className="mt-4 flex items-center gap-2">
                                  <Coffee className="w-4 h-4 text-amber-500" />
                                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Meals: {day.meals}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* ── RIGHT STICKY PANEL ── */}
            <div className="lg:w-[38%]">
              <div className="sticky top-28 space-y-5">

                {/* Price card */}
                <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden">
                  <div className="bg-[var(--color-brand-orange)] px-7 py-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-1">Indicative Price</p>
                    <p className="text-4xl font-extrabold leading-none">{tour.price}</p>
                    <p className="text-sm opacity-70 mt-1">{tour.priceNote}</p>
                  </div>

                  <div className="px-7 py-6 space-y-4 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-[var(--color-brand-orange)] flex-shrink-0">
                        <Clock className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400">Duration</p>
                        <p className="text-sm font-bold text-gray-800">{tour.duration} / {tour.nights}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-[var(--color-brand-orange)] flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400">Route</p>
                        <p className="text-sm font-bold text-gray-800 leading-snug">{tour.destinations.join(" → ")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-[var(--color-brand-orange)] flex-shrink-0">
                        <Users className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400">Tour Type</p>
                        <p className="text-sm font-bold text-gray-800">Private & Fully Customizable</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-[var(--color-brand-orange)] flex-shrink-0">
                        <Star className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400">Rating</p>
                        <p className="text-sm font-bold text-gray-800">{tour.rating} / 5 ({tour.reviewCount} reviews)</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-7 py-6 space-y-3">
                    <a
                      href="/#contact"
                      className="w-full flex items-center justify-center gap-2 bg-brand-gradient text-white font-bold py-4 rounded-2xl shadow-md text-base group"
                    >
                      Inquire About This Tour
                      <svg className="w-5 h-5 rotate-90 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                    </a>
                    <a
                      href="/#contact"
                      className="w-full block text-center border-2 border-gray-200 hover:border-[var(--color-brand-orange)] text-gray-700 hover:text-[var(--color-brand-orange)] font-semibold py-4 rounded-2xl transition-all text-base"
                    >
                      Customize This Itinerary
                    </a>
                    <p className="text-center text-xs text-gray-400 pt-1">Free cancellation · No hidden fees</p>
                  </div>
                </div>

                {/* Contact snippet */}
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm px-7 py-5">
                  <p className="text-sm font-bold text-gray-800 mb-4">Talk to a local expert</p>
                  <div className="space-y-3">
                    <a href="tel:+94777000000" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[var(--color-brand-orange)] transition-colors">
                      <Phone className="w-4 h-4 text-[var(--color-brand-orange)]" />
                      +94 77 700 0000
                    </a>
                    <a href="mailto:info@walkwithmandu.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[var(--color-brand-orange)] transition-colors">
                      <Mail className="w-4 h-4 text-[var(--color-brand-orange)]" />
                      info@walkwithmandu.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ── END CTA ── */}
        <section className="bg-[var(--color-brand-green)] py-24">
          <ScrollReveal animation="reveal-up">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-extrabold text-white mb-4">
                Ready to start your Sri Lanka story?
              </h2>
              <p className="text-green-100 text-lg mb-10">
                Every itinerary is fully tailored to you — your pace, your interests, your budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/#contact" className="bg-brand-gradient text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl flex items-center justify-center gap-2 group">
                  Book This Tour
                  <svg className="w-5 h-5 rotate-90 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                </a>
                <a href="/packages" className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold px-10 py-4 rounded-full text-lg transition-all">
                  View All Packages
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </main>

      <Footer />
    </div>
  );
}
