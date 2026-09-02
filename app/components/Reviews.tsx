"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import {
  Star,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  MapPin,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface Review {
  id: number;
  name: string;
  origin: string;
  avatarColor: string;
  source: "TripAdvisor" | "Google";
  rating: number;
  date: string;
  tour: string;
  headline: string;
  text: string;
}

const reviewsData: Review[] = [
  {
    id: 1,
    name: "Emma & David Walker",
    origin: "London, United Kingdom",
    avatarColor: "from-amber-500 to-orange-600",
    source: "TripAdvisor",
    rating: 5,
    date: "December 2025",
    tour: "Cultural Heritage & Highlands (8 Days)",
    headline: "Unbelievable hospitality and zero crowds at Sigiriya!",
    text: "Mandu and our chauffeur-guide Chaminda made our 8-day tour pure perfection. From sunrise at Sigiriya with virtually no other tourists to the secret tea factory in Ella, everything was seamlessly arranged. The private car was spotless every morning. Truly unforgettable."
  },
  {
    id: 2,
    name: "Mark & Sarah Jenkins",
    origin: "Sydney, Australia",
    avatarColor: "from-emerald-500 to-teal-600",
    source: "Google",
    rating: 5,
    date: "October 2025",
    tour: "South Coast Surf & Chill (5 Days)",
    headline: "Treated us like family from day one",
    text: "Highly recommend Walk With Mandu! They organized our entire south coast journey including private surf sessions at Ahangama point and a magical eco-lodge in Mirissa. Our guide knew the best local seafood stalls that tourists never find. True professionals."
  },
  {
    id: 3,
    name: "Dr. Julian Meyer",
    origin: "Munich, Germany",
    avatarColor: "from-blue-500 to-indigo-600",
    source: "TripAdvisor",
    rating: 5,
    date: "November 2025",
    tour: "Wild Safari & Leopards (6 Days)",
    headline: "Master tracker found leopards twice in Yala!",
    text: "The best travel experience we've had in Asia. Our private 4x4 naturalist tracker in Yala was extraordinary—we saw leopards twice in quiet buffer zones away from the tourist convoy. Stress-free, deeply authentic, and completely tailored to our pace."
  },
  {
    id: 4,
    name: "Sophie & Liam Bennett",
    origin: "Toronto, Canada",
    avatarColor: "from-rose-500 to-pink-600",
    source: "Google",
    rating: 5,
    date: "January 2026",
    tour: "Tailor-Made Honeymoon (10 Days)",
    headline: "Our dream honeymoon made effortless",
    text: "Booking our honeymoon with Walk With Mandu was the single best travel decision we made. Romantic heritage villas with private plunge pools, candlelit beach dinners, and zero hassle. Mandu was reachable 24/7 on WhatsApp for any spontaneous requests. 10/10 service!"
  },
  {
    id: 5,
    name: "Antoine & Camille Dubois",
    origin: "Paris, France",
    avatarColor: "from-purple-500 to-violet-600",
    source: "TripAdvisor",
    rating: 5,
    date: "August 2025",
    tour: "Scenic Hill Country & Tea Trails",
    headline: "Authentic cultural immersion at its finest",
    text: "A truly authentic connection to the soul of Sri Lanka. We cooked traditional curries with a village family in Kandy, rode the scenic train with reserved observation salon seats, and hiked Ella Rock at dawn. Thank you Mandu for sharing your island with such heart."
  },
  {
    id: 6,
    name: "Rachel & Tom Harris",
    origin: "California, United States",
    avatarColor: "from-orange-500 to-amber-600",
    source: "Google",
    rating: 5,
    date: "February 2026",
    tour: "Complete Island Explorer (12 Days)",
    headline: "Flawless private tour across the entire island",
    text: "Having a dedicated licensed chauffeur-guide who knows every hidden viewpoint, shortcut, and roadside king coconut stall is priceless. We felt completely safe, cared for, and immersed in local culture throughout our two weeks. We will definitely be back!"
  }
];

const popularDestinations = [
  {
    name: "Sigiriya Lion Rock",
    subtitle: "Ancient Royal Citadel & Sky Fortress",
    image: "/bbg3.png",
    tag: "UNESCO World Heritage"
  },
  {
    name: "Nine Arch Bridge & Ella",
    subtitle: "Misty Tea Estates & Scenic Alpine Rail",
    image: "/bbg2.png",
    tag: "Scenic Hill Country"
  },
  {
    name: "Mirissa & Weligama Bay",
    subtitle: "Golden Sands, Blue Whales & Surf",
    image: "/1.jpg",
    tag: "South Coast Serenity"
  },
  {
    name: "Yala National Park",
    subtitle: "Untamed Leopards & Elephant Herds",
    image: "/4.jpeg",
    tag: "Wilderness Safari"
  }
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play review cards in a single row
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % reviewsData.length;
        scrollToIndex(next);
        return next;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft,
          behavior: "smooth"
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const card = container.children[0] as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth + 24; // card width + gap
        const newIdx = Math.round(scrollLeft / cardWidth);
        setActiveIdx(Math.min(Math.max(newIdx, 0), reviewsData.length - 1));
      }
    }
  };

  const scrollPrev = () => {
    setIsPaused(true);
    const prev = activeIdx === 0 ? reviewsData.length - 1 : activeIdx - 1;
    setActiveIdx(prev);
    scrollToIndex(prev);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const scrollNext = () => {
    setIsPaused(true);
    const next = (activeIdx + 1) % reviewsData.length;
    setActiveIdx(next);
    scrollToIndex(next);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── SECTION HEADER ── */}
        <ScrollReveal animation="reveal-up">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-[var(--color-brand-orange)] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
              <span>5.0 Rating • 350+ Verified Traveler Stories</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Real Journeys, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-500">
                Unforgettable Memories.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Discover what makes traveling with Walk With Mandu so personal. Read raw, unedited testimonials from guests across the globe.
            </p>

            {/* ── TWO VERIFIED PLATFORM BADGES ── */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              
              {/* TripAdvisor Verified Badge */}
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g674590-d33238563-Reviews-WaygoTravels-Ahangama_Galle_District_Southern_Province.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 bg-gray-50 hover:bg-gray-100/80 border border-gray-200/80 px-5 py-3 rounded-2xl transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#34e0a1] flex items-center justify-center text-black flex-shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#000000">
                    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353l-1.03.686 1.017.704c.473.327.923.7 1.341 1.11a5.952 5.952 0 0110.636 0c.418-.41.868-.783 1.34-1.11l1.018-.704-1.03-.686c-2.307-1.569-4.975-2.353-7.647-2.353zm-4.626 5.027a2.728 2.728 0 100 5.455 2.728 2.728 0 000-5.456zm9.256 0a2.728 2.728 0 100 5.455 2.728 2.728 0 000-5.456z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-gray-500">TripAdvisor</span>
                    <span className="text-xs text-[#00aa6c] font-bold">5.0 ★★★★★</span>
                  </div>
                  <p className="text-xs text-gray-700 font-bold">284+ Reviews • Certificate of Excellence</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all" />
              </a>

              {/* Google Verified Badge */}
              <a
                href="https://share.google/a6TB1hhfl5qQRhknb"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 bg-gray-50 hover:bg-gray-100/80 border border-gray-200/80 px-5 py-3 rounded-2xl transition-all shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-gray-500">Google Reviews</span>
                    <span className="text-xs text-amber-500 font-bold">4.9 ★★★★★</span>
                  </div>
                  <p className="text-xs text-gray-700 font-bold">70+ Reviews • Top Local Rating</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all" />
              </a>

            </div>

          </div>
        </ScrollReveal>

        {/* ── CONTROLS ROW (ARROWS & AUTO-PLAY STATUS) ── */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Verified Stories
            </span>
            <span className="text-xs text-gray-400 font-mono font-bold">
              (0{activeIdx + 1} / 0{reviewsData.length})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="w-9 h-9 rounded-full border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              className="w-9 h-9 rounded-full border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 flex items-center justify-center transition-all shadow-sm active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── ONE ROW: AUTO-PLAYING TESTIMONIAL CARDS CAROUSEL ── */}
        <div
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 5000)}
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 no-scrollbar"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {reviewsData.map((review, idx) => {
              const isActive = idx === activeIdx;
              return (
                <div
                  key={review.id}
                  className={`w-[88vw] sm:w-[380px] lg:w-[410px] flex-shrink-0 snap-start bg-gray-50/80 hover:bg-white border rounded-3xl p-7 shadow-sm transition-all duration-300 flex flex-col justify-between group ${
                    isActive
                      ? "border-[var(--color-brand-orange)]/60 ring-1 ring-[var(--color-brand-orange)]/30 shadow-md"
                      : "border-gray-200/80 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Top row: stars + source badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                          review.source === "TripAdvisor"
                            ? "bg-[#34e0a1]/10 text-emerald-800 border-[#34e0a1]/30"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }`}
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        Verified {review.source}
                      </span>
                    </div>

                    {/* Tour taken tag */}
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-brand-orange)] block mb-2">
                      {review.tour}
                    </span>

                    {/* Headline */}
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[var(--color-brand-orange)] transition-colors">
                      "{review.headline}"
                    </h4>

                    {/* Review text */}
                    <p className="text-sm text-gray-600 leading-relaxed italic mb-6">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Review author footer */}
                  <div className="flex items-center gap-3.5 pt-5 border-t border-gray-200/60 mt-auto">
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.avatarColor} text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-sm`}
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-gray-900 leading-none mb-1">
                        {review.name}
                      </h5>
                      <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
                        <span>{review.origin}</span>
                        <span>•</span>
                        <span>{review.date}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 pt-4">
            {reviewsData.map((_, idx) => (
              <button
                key={`review-dot-${idx}`}
                onClick={() => {
                  setIsPaused(true);
                  setActiveIdx(idx);
                  scrollToIndex(idx);
                  setTimeout(() => setIsPaused(false), 8000);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIdx
                    ? "w-6 bg-[var(--color-brand-orange)]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── TRAVELERS' MOST POPULAR DESTINATIONS ── */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-orange)] block mb-1">
                Must-Visit Island Highlights
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Travelers' Most Popular Destinations
              </h3>
            </div>

            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand-orange)] hover:underline self-start sm:self-auto"
            >
              <span>View All Package Itineraries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((dest, i) => (
              <Link
                key={i}
                href="/packages"
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer block"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent" />

                {/* Destination Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                    {dest.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-xl font-bold mb-1 group-hover:text-[var(--color-brand-orange)] transition-colors flex items-center justify-between">
                    <span>{dest.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h4>
                  <p className="text-xs text-gray-300 font-normal leading-relaxed">
                    {dest.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA ROW ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-gray-950 text-white shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-1">
              Ready to create your own Sri Lanka story?
            </h4>
            <p className="text-sm text-gray-400">
              Speak directly with our local travel designers to tailor your private itinerary.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g674590-d33238563-Reviews-WaygoTravels-Ahangama_Galle_District_Southern_Province.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded-full text-xs font-bold transition-all"
            >
              <span>Read 284+ TripAdvisor Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-gradient text-white px-7 py-3 rounded-full text-xs font-bold shadow-md hover:shadow-orange-500/30 transition-all group"
            >
              <span>Plan Your Trip</span>
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
    </section>
  );
}
