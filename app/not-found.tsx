import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Compass,
  Home,
  MapPin,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Camera,
  HelpCircle,
  Map
} from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Lost in Paradise | Walk With Mandu",
  description: "The page or itinerary you are looking for cannot be found. Return to Walk With Mandu to explore bespoke private tours and Sri Lanka travel experiences.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#08080a] text-white selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="relative flex-grow flex flex-col items-center justify-center min-h-[82vh] pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background ambient lighting and map texture */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/ctabg1.png"
            alt="Sri Lanka Misty Hills"
            className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080a] via-[#08080a]/80 to-[#08080a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-transparent to-[#08080a]" />

          {/* Glowing gradient orbs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[var(--color-brand-orange)]/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-emerald-500/10 rounded-full blur-[130px]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 text-[var(--color-brand-orange)] animate-spin" style={{ animationDuration: "14s" }} />
            <span>Waypoint Not Found</span>
          </div>

          {/* Hero 404 Display */}
          <div className="relative mb-5 select-none">
            <div className="text-[7.5rem] sm:text-[11rem] lg:text-[13rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 drop-shadow-2xl font-mono">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-orange-400 shadow-2xl">
                Off The Map
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center max-w-2xl leading-tight mb-4 tracking-tight">
            Lost in Paradise? <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] via-amber-300 to-orange-400">
              Even the Best Explorers Take a Detour
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-neutral-400 text-center max-w-xl leading-relaxed mb-9">
            The trail you followed seems to have vanished into the misty highlands of Ella or the quiet beaches of Mirissa. Don’t worry — let’s guide you back to the main island route.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            <Link
              id="btn-return-home"
              href="/"
              className="inline-flex items-center gap-2.5 bg-brand-gradient text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return to Home Island</span>
            </Link>

            <Link
              id="btn-browse-tours"
              href="/packages"
              className="inline-flex items-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-750 text-white font-bold text-sm px-6 py-3.5 rounded-full hover:border-neutral-500 active:scale-95 transition-all"
            >
              <MapPin className="w-4 h-4 text-[var(--color-brand-orange)]" />
              <span>View Tour Packages</span>
            </Link>

            <a
              id="btn-whatsapp-sos"
              href="https://wa.me/94776175241?text=Hi%20Mandu!%20I%20hit%20a%20missing%20page%20on%20your%20website%20and%20need%20help%20finding%20the%20right%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-400 font-bold text-sm px-5 py-3.5 rounded-full hover:border-emerald-400/50 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask Mandu on WhatsApp</span>
            </a>
          </div>

          {/* ── POPULAR ISLAND WAYPOINTS (4-CARD GRID) ── */}
          <div className="w-full text-left">
            <div className="flex items-center justify-between mb-5 px-1 border-b border-neutral-800/80 pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                Popular Island Waypoints
              </span>
              <span className="text-[11px] text-neutral-500 font-medium">
                Choose a destination to continue
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Tour Packages */}
              <Link
                id="link-404-packages"
                href="/packages"
                className="group relative p-5 bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-850 hover:border-orange-500/40 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[var(--color-brand-orange)] flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                    <Map className="w-5 h-5" />
                  </div>
                  <h2 className="text-sm font-bold text-white mb-1 group-hover:text-orange-400 transition-colors flex items-center justify-between">
                    <span>Tour Packages</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-orange-400" />
                  </h2>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Private chauffeured routes across tea hills, wild safaris, and ancient rocks.
                  </p>
                </div>
              </Link>

              {/* Card 2: Live Island Feed */}
              <Link
                id="link-404-gallery"
                href="/gallery"
                className="group relative p-5 bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-850 hover:border-rose-500/40 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                    <Camera className="w-5 h-5" />
                  </div>
                  <h2 className="text-sm font-bold text-white mb-1 group-hover:text-rose-400 transition-colors flex items-center justify-between">
                    <span>Island Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-rose-400" />
                  </h2>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Scenic rail journeys, guest moments, wildlife reels, and secret beaches.
                  </p>
                </div>
              </Link>

              {/* Card 3: Frequently Asked Questions */}
              <Link
                id="link-404-faq"
                href="/faq"
                className="group relative p-5 bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-850 hover:border-blue-500/40 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors flex items-center justify-between">
                    <span>Travel FAQs</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                  </h2>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Official visa rules, private vehicle safety, monsoon seasons, and bookings.
                  </p>
                </div>
              </Link>

              {/* Card 4: Plan Bespoke Journey */}
              <Link
                id="link-404-contact"
                href="/contact"
                className="group relative p-5 bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-850 hover:border-emerald-500/40 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h2 className="text-sm font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    <span>Bespoke Tour</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-emerald-400" />
                  </h2>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Custom itinerary planning with Mandu tailored to your exact dates.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Direct WhatsApp Emergency Route Help Pill */}
          <div className="mt-12 w-full max-w-lg p-3.5 sm:p-4 rounded-2xl bg-neutral-950/90 border border-neutral-800/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <p className="text-xs text-neutral-300 font-medium">
                Need immediate route assistance? Mandu is on WhatsApp:
              </p>
            </div>
            <a
              href="https://wa.me/94776175241"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors flex-shrink-0"
            >
              <span>+94 77 617 5241</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
