import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";
import {
  Clock,
  MapPin,
  Users,
  Activity,
  CheckCircle2,
  XCircle,
  Calendar,
  Coffee,
  Car,
  Map as MapIcon,
  Check,
  Star,
  Phone,
  Mail,
  ChevronRight,
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Info
} from "lucide-react";
import { allPackages, TourPackage } from "../../data/packages";

// ─────────────────────────────────────────────────────────────────────────────
// Next.js Static Generation & Metadata
// ─────────────────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return allPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = allPackages.find((p) => p.slug === slug);
  if (!tour) return { title: "Package Not Found | Walk With Mandu" };

  return {
    title: `${tour.title} (${tour.duration}) | Walk With Mandu Sri Lanka`,
    description: tour.description,
    openGraph: {
      title: `${tour.title} - Private Tour | Walk With Mandu`,
      description: tour.description,
      images: [{ url: tour.heroImage }],
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────

export default async function PackageDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = allPackages.find((p) => p.slug === slug);

  if (!tour) {
    notFound();
  }

  // Related tours (other packages)
  const relatedTours = allPackages
    .filter((p) => p.slug !== tour.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hi Mandu! I am interested in booking or customizing the "${tour.title}" (${tour.duration} / ${tour.nights}). Could you please share availability and details?`
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/70 text-gray-800">
      <Navbar />

      <main className="flex-grow">
        
        {/* ── CINEMATIC HERO SECTION ── */}
        <section className="relative w-full min-h-[65vh] lg:min-h-[72vh] flex flex-col justify-end overflow-hidden pt-28 pb-12 sm:pb-16 bg-gray-950">
          
          {/* Background Hero Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={tour.heroImage}
              alt={tour.title}
              className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            />
            {/* Multi-layer gradient scrim for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <ScrollReveal animation="reveal-up">
              
              {/* Back button */}
              <div className="mb-6">
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Packages</span>
                </Link>
              </div>

              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                {tour.badge && (
                  <span className="bg-brand-gradient text-white text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                    {tour.badge}
                  </span>
                )}
                <span className="bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  {tour.category}
                </span>
                <span className="bg-black/50 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium px-3.5 py-1.5 rounded-full">
                  {tour.style}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mb-6 tracking-tight drop-shadow-md">
                {tour.title}
              </h1>

              {/* Meta Strip */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/90 font-medium">
                <span className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <Clock className="w-4 h-4 text-[var(--color-brand-orange)]" />
                  <span>{tour.duration} / {tour.nights}</span>
                </span>
                <span className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <MapPin className="w-4 h-4 text-[var(--color-brand-orange)]" />
                  <span>{tour.destinations.length} Destinations</span>
                </span>
                <span className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <Activity className="w-4 h-4 text-[var(--color-brand-orange)]" />
                  <span>{tour.physicalRating} Pace</span>
                </span>
                <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-bold">{tour.rating}</span>
                  <span className="text-white/60">({tour.reviewCount} verified reviews)</span>
                </span>
              </div>

            </ScrollReveal>
          </div>
        </section>

        {/* ── ROUTE DESTINATIONS BREADCRUMB BAR ── */}
        <section className="bg-white border-b border-gray-200/80 shadow-sm sticky top-[72px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1 flex-shrink-0 mr-1">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                Route:
              </span>
              {tour.destinations.map((dest, i) => (
                <React.Fragment key={i}>
                  <span className={`text-xs sm:text-sm font-bold flex-shrink-0 ${
                    i === 0 || i === tour.destinations.length - 1
                      ? "text-[var(--color-brand-orange)]"
                      : "text-gray-700"
                  }`}>
                    {dest}
                  </span>
                  {i < tour.destinations.length - 1 && (
                    <span className="text-gray-300 flex-shrink-0">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Quick Pricing Tag */}
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-xs text-gray-500 font-medium">From</span>
              <span className="text-lg font-extrabold text-gray-900">{tour.price}</span>
              <span className="text-[11px] text-gray-400">/ person</span>
            </div>

          </div>
        </section>

        {/* ── MAIN CONTENT LAYOUT ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-start">

            {/* ── LEFT COLUMN: DETAILS & ITINERARY ── */}
            <div className="w-full lg:w-[64%] space-y-14">

              {/* 1. Overview */}
              <ScrollReveal animation="reveal-up">
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/80 shadow-sm">
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[var(--color-brand-orange)]">
                      <MapIcon className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)] block">
                        Tour Overview
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                        About This Journey
                      </h2>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                    {tour.overview}
                  </p>

                  {/* 6 Key Tour Specifications */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-6 border-t border-gray-100">
                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                      <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Duration</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">{tour.duration} / {tour.nights}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                      <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Group Style</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">{tour.groupSize} Private</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                      <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Pace</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">{tour.physicalRating}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                      <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Transport</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">Private A/C Vehicle</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                      <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Guide Service</p>
                      <p className="text-xs sm:text-sm font-bold text-gray-900">Licensed Chauffeur</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                      <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Customizable</p>
                      <p className="text-xs sm:text-sm font-bold text-emerald-600">100% Tailor-Made</p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>

              {/* 2. Highlights */}
              <ScrollReveal animation="reveal-up">
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/80 shadow-sm">
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[var(--color-brand-orange)]">
                      <Sparkles className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)] block">
                        Experience Highlights
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                        What Makes This Tour Special
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {tour.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-4 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-orange-300 hover:bg-white transition-all duration-200"
                      >
                        <div className="w-6 h-6 rounded-full bg-orange-100 text-[var(--color-brand-orange)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>

              {/* 3. Day by Day Itinerary */}
              <ScrollReveal animation="reveal-up">
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/80 shadow-sm">
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[var(--color-brand-orange)]">
                        <Calendar className="w-5 h-5" />
                      </span>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)] block">
                          Daily Schedule
                        </span>
                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                          Day-by-Day Itinerary
                        </h2>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {tour.days.length} Days Planned
                    </span>
                  </div>

                  <div className="relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[var(--color-brand-orange)] via-amber-300 to-transparent hidden sm:block" />

                    <div className="space-y-8">
                      {tour.days.map((day, idx) => (
                        <div key={idx} className="flex gap-5 sm:gap-6 group relative">
                          
                          {/* Day Number Marker */}
                          <div className="hidden sm:flex flex-col items-center flex-shrink-0 z-10">
                            <div className="w-10 h-10 rounded-2xl bg-white border-2 border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] font-extrabold text-xs flex items-center justify-center shadow-md group-hover:bg-[var(--color-brand-orange)] group-hover:text-white transition-all duration-300">
                              0{idx + 1}
                            </div>
                          </div>

                          {/* Day Card */}
                          <div className="flex-1 rounded-3xl border border-gray-200/80 bg-gray-50/50 hover:bg-white hover:border-orange-300/80 hover:shadow-md transition-all duration-300 overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                              
                              {/* Day Image */}
                              <div className="md:w-5/12 h-52 md:h-auto relative overflow-hidden flex-shrink-0">
                                <img
                                  src={day.image}
                                  alt={day.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                                
                                {/* Mobile Day badge */}
                                <span className="sm:hidden absolute top-3 left-3 bg-brand-gradient text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                                  {day.day}
                                </span>

                                <span className="absolute bottom-3 left-3 md:hidden text-white text-xs font-semibold flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-[var(--color-brand-orange)]" />
                                  {day.location}
                                </span>
                              </div>

                              {/* Day Content */}
                              <div className="p-6 md:w-7/12 flex flex-col justify-between">
                                <div>
                                  <div className="hidden sm:flex items-center justify-between gap-2 mb-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)]">
                                      {day.day}
                                    </span>
                                    <span className="text-xs text-gray-500 font-semibold flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-gray-100">
                                      <MapPin className="w-3 h-3 text-[var(--color-brand-orange)]" />
                                      {day.location}
                                    </span>
                                  </div>

                                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[var(--color-brand-orange)] transition-colors">
                                    {day.title}
                                  </h3>

                                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    {day.details}
                                  </p>
                                </div>

                                {day.meals && (
                                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-medium text-amber-700">
                                    <Coffee className="w-3.5 h-3.5" />
                                    <span>Included Meals: <strong>{day.meals}</strong></span>
                                  </div>
                                )}
                              </div>

                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </ScrollReveal>

              {/* 4. Included & Not Included */}
              <ScrollReveal animation="reveal-up">
                <div className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-200/80 shadow-sm">
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[var(--color-brand-orange)]">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)] block">
                        Transparency
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                        What's Included & Excluded
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* What's Included */}
                    <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/60">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Included in This Package</span>
                      </h3>
                      <ul className="space-y-2.5">
                        {tour.included.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What's Not Included */}
                    <div className="p-6 rounded-2xl bg-rose-50/40 border border-rose-200/60">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-rose-800 mb-4 flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-rose-500" />
                        <span>Not Included</span>
                      </h3>
                      <ul className="space-y-2.5">
                        {tour.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                            <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>
              </ScrollReveal>

            </div>

            {/* ── RIGHT COLUMN: STICKY BOOKING & INQUIRY PANEL ── */}
            <div className="w-full lg:w-[36%] lg:sticky lg:top-28 space-y-6">
              
              {/* Main Booking Card */}
              <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden">
                
                {/* Price Header */}
                <div className="bg-gray-950 p-6 sm:p-7 text-white relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <span className="text-[10px] uppercase font-bold tracking-widest text-orange-400 block mb-1">
                    Indicative Private Tour Price
                  </span>
                  
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {tour.price}
                    </span>
                    <span className="text-xs text-gray-400">
                      {tour.priceNote}
                    </span>
                  </div>

                  <p className="text-[11px] text-gray-400">
                    *Exact quote depends on group size, travel season, and hotel preferences.
                  </p>
                </div>

                {/* Tour Quick Summary */}
                <div className="p-6 sm:p-7 space-y-4 border-b border-gray-100">
                  <div className="flex items-center justify-between text-xs py-1 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Duration:</span>
                    <span className="font-bold text-gray-900">{tour.duration} / {tour.nights}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Tour Type:</span>
                    <span className="font-bold text-gray-900">100% Private (No Strangers)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1 border-b border-gray-100">
                    <span className="text-gray-500 font-medium">Vehicle:</span>
                    <span className="font-bold text-gray-900">Private Modern A/C Fleet</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-gray-500 font-medium">Chauffeur:</span>
                    <span className="font-bold text-gray-900">Licensed National Guide</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="p-6 sm:p-7 space-y-3 bg-gray-50/50">
                  
                  {/* WhatsApp Direct Chat */}
                  <a
                    href={`https://wa.me/94776175241?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 rounded-2xl shadow-md transition-all active:scale-[0.98] text-sm"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  {/* Online Inquiry Button */}
                  <Link
                    href={`/contact?package=${encodeURIComponent(tour.slug)}`}
                    className="w-full flex items-center justify-center gap-2 bg-brand-gradient text-white font-bold py-3.5 rounded-2xl shadow-md hover:shadow-orange-500/25 transition-all active:scale-[0.98] text-sm group"
                  >
                    <span>Request Custom Quote</span>
                    <svg
                      className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Link>

                  <p className="text-center text-[11px] text-gray-400 pt-1">
                    No commitment • Free itinerary changes • 24/7 support
                  </p>
                </div>

                {/* Trust & Guarantee points */}
                <div className="px-6 sm:px-7 py-4 bg-white border-t border-gray-100 text-xs space-y-2 text-gray-600">
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Official SLTDA Registered Tour Operator</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--color-brand-orange)]" />
                    <span>Women-Led, Ethical & Eco-Friendly Travel</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600" />
                    <span>Handpicked Boutique & Heritage Stays</span>
                  </p>
                </div>

              </div>

              {/* Direct Expert Assistance Card */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[var(--color-brand-orange)] flex items-center justify-center flex-shrink-0 font-bold">
                    WM
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Need Immediate Help?</h4>
                    <p className="text-xs text-gray-500">Speak directly with Mandu</p>
                  </div>
                </div>

                <div className="pt-2 space-y-2 text-xs font-semibold text-gray-700">
                  <a
                    href="https://wa.me/94776175241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>+94 77 617 5241 (WhatsApp / Call)</span>
                  </a>

                  <a
                    href="mailto:walkwithmandu@gmail.com"
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[var(--color-brand-orange)]" />
                    <span>walkwithmandu@gmail.com</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ── SIMILAR JOURNEYS STRIP ── */}
        <section className="py-16 bg-white border-t border-gray-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)] block mb-1">
                  More Inspiration
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Other Signature Sri Lanka Journeys
                </h3>
              </div>

              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand-orange)] hover:underline"
              >
                <span>Browse All 6 Packages</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTours.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/itineraries/${rel.slug}`}
                  className="group bg-gray-50 hover:bg-white rounded-3xl border border-gray-200/80 hover:border-orange-300 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {rel.duration} / {rel.nights}
                    </span>
                    <span className="absolute top-3 right-3 bg-white/90 text-gray-900 font-bold text-xs px-2.5 py-1 rounded-full shadow-sm">
                      {rel.price}
                    </span>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-base text-gray-900 mb-1 group-hover:text-[var(--color-brand-orange)] transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {rel.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[var(--color-brand-orange)]">
                      <span>View Full Route</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
