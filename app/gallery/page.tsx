"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import {
  Camera,
  Play,
  X,
  MapPin,
  Sparkles,
  Heart,
  Share2,
  ArrowRight,
  MessageCircle,
  Video
} from "lucide-react";

interface MediaItem {
  id: number;
  type: "image" | "video";
  title: string;
  location: string;
  category: "Highlands & Rail" | "Coast & Surf" | "Wildlife Safari" | "Cultural Heritage" | "Village & Food";
  thumbnail: string;
  videoUrl?: string;
  caption: string;
  featured?: boolean;
}

const mediaGallery: MediaItem[] = [
  {
    id: 1,
    type: "image",
    title: "Sigiriya Lion Rock at First Light",
    location: "Sigiriya, Cultural Triangle",
    category: "Cultural Heritage",
    thumbnail: "/bbg3.png",
    caption: "Our private guests reaching the summit before the crowds arrive. 360-degree panorama of the ancient royal gardens.",
    featured: true
  },
  {
    id: 2,
    type: "video",
    title: "Blue Train Journey Over Nine Arch Bridge",
    location: "Demodara, Ella Highlands",
    category: "Highlands & Rail",
    thumbnail: "/bbg2.png",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-train-passing-through-a-green-landscape-42289-large.mp4",
    caption: "The iconic blue locomotive gliding through the misty eucalyptus forests of Ella on our scenic hill country route.",
    featured: true
  },
  {
    id: 3,
    type: "image",
    title: "Sunset Surf Session at Ahangama Point",
    location: "Ahangama, South Coast",
    category: "Coast & Surf",
    thumbnail: "/1.jpg",
    caption: "Glassy shoulder-high peelers and golden hour light right outside our partner beachfront boutique lodge."
  },
  {
    id: 4,
    type: "video",
    title: "Wild Leopard Stalking Through Yala",
    location: "Yala National Park, Block 1",
    category: "Wildlife Safari",
    thumbnail: "/4.jpeg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cheetah-walking-in-the-savannah-42797-large.mp4",
    caption: "Captured by our guest David during our sunrise 4x4 safari with local naturalist tracker Chaminda."
  },
  {
    id: 5,
    type: "image",
    title: "Traditional Clay-Pot Cooking Masterclass",
    location: "Kandy Mountain Village",
    category: "Village & Food",
    thumbnail: "/cooking.png",
    caption: "Learning the secrets of authentic coconut milk curries, toasted mustard seeds, and freshly harvested spices."
  },
  {
    id: 6,
    type: "image",
    title: "Sacred Tooth Relic Golden Canopy",
    location: "Kandy Sacred City",
    category: "Cultural Heritage",
    thumbnail: "https://srilankatravellife.com/wp-content/uploads/2025/10/The-Temple-of-the-Sacred-Tooth-Relic-Kandy.jpg",
    caption: "The spiritual heart of Sri Lanka draped in jasmine flowers, lotus offerings, and resonant temple drumming."
  },
  {
    id: 7,
    type: "image",
    title: "Village Life & Stilt Fishermen",
    location: "Koggala & Kathaluwa",
    category: "Coast & Surf",
    thumbnail: "/villagevisit.png",
    caption: "The age-old tradition of stilt fishing along the southern coral reefs at low tide."
  },
  {
    id: 8,
    type: "video",
    title: "Misty Sunrise Over Ella Rock",
    location: "Ella Highlands",
    category: "Highlands & Rail",
    thumbnail: "/2.jpeg",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4",
    caption: "Panoramic drone sweep of the southern plains unfolding beneath Little Adam's Peak."
  }
];

const CATEGORIES = [
  "All",
  "Highlands & Rail",
  "Coast & Surf",
  "Wildlife Safari",
  "Cultural Heritage",
  "Village & Food"
] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);

  const filteredMedia = useMemo(() => {
    if (activeCategory === "All") return mediaGallery;
    return mediaGallery.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/70 text-gray-800">
      <Navbar />

      <main className="flex-grow">
        
        {/* ── CINEMATIC HERO SECTION ── */}
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/bbg2.png"
              alt="Sri Lanka scenic moments"
              className="w-full h-full object-cover opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/90" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <ScrollReveal animation="reveal-up">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">
                <Camera className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                <span>Captured On The Road</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
                Real Island Moments & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-400">
                  Tour Video Highlights
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                Unfiltered photography, scenic drone perspectives, and candid video reels shared by our travelers exploring Sri Lanka with Walk With Mandu.
              </p>

              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 px-4 py-2 rounded-full text-xs font-semibold text-gray-300">
                <svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Tag <strong>#WalkWithMandu</strong> on Instagram to be featured</span>
              </div>

            </ScrollReveal>
          </div>
        </section>

        {/* ── STICKY CATEGORY FILTER BAR ── */}
        <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full pb-1 sm:pb-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--color-brand-orange)] text-white shadow-sm"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="hidden sm:inline text-xs font-bold text-gray-400 flex-shrink-0">
              {filteredMedia.length} Moments
            </span>

          </div>
        </section>

        {/* ── MASONRY MEDIA GRID ── */}
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredMedia.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveMedia(item)}
                  className="group relative rounded-3xl overflow-hidden bg-gray-950 border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/5] flex flex-col justify-end"
                >
                  {/* Media Thumbnail */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Multi-layer gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/35 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                      {item.category}
                    </span>

                    {item.type === "video" && (
                      <span className="bg-brand-gradient text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <Play className="w-3 h-3 fill-white" />
                        <span>Video Reel</span>
                      </span>
                    )}
                  </div>

                  {/* Center Play Icon for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-14 h-14 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-gray-900 ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Bottom Captions & Location */}
                  <div className="relative z-10 p-6 text-white">
                    <div className="flex items-center gap-1.5 text-xs text-orange-400 font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold leading-snug mb-2 group-hover:text-[var(--color-brand-orange)] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIGHTBOX / VIDEO POPUP MODAL ── */}
        {activeMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-gray-950 text-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-gray-800">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveMedia(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close media modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media Container */}
              <div className="w-full aspect-video bg-black relative flex items-center justify-center">
                {activeMedia.type === "video" && activeMedia.videoUrl ? (
                  <video
                    src={activeMedia.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={activeMedia.thumbnail}
                    alt={activeMedia.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Media Info Footer */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs text-orange-400 font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>{activeMedia.location}</span>
                  <span>•</span>
                  <span>{activeMedia.category}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {activeMedia.title}
                </h2>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeMedia.caption}
                </p>

                {/* Modal CTA */}
                <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-gray-400">
                    Want to visit this exact location? We include it in custom private itineraries.
                  </p>

                  <a
                    href={`https://wa.me/94776175241?text=${encodeURIComponent(
                      `Hi Mandu! I loved the video/photo of "${activeMedia.title}" in ${activeMedia.location} on your website. Can we include this in our tour?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md transition-all flex-shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── BOTTOM CTA SECTION ── */}
        <section className="py-20 bg-gray-950 text-white border-t border-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-orange)] block mb-3">
              Your Turn in Paradise
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Ready to Capture Your Own <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-400">
                Sri Lankan Story?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-8">
              Speak directly with our local team in Ahangama. We’ll design your private chauffeured itinerary tailored to your exact rhythm.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-lg"
              >
                <span>Plan Your Custom Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
