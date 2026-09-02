"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Heart,
  MessageCircle,
  Repeat,
  Send,
  Bookmark,
  User,
  ChevronRight,
  ChevronLeft,
  Volume2,
  VolumeX,
  Play,
  MapPin,
  Camera,
  MessageSquare,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface Post {
  id: number;
  user: {
    username: string;
    avatar: string;
    isVerified: boolean;
    location: string;
  };
  images: string[];
  type: "carousel" | "single" | "video";
  videoUrl?: string;
  likes: number;
  commentsCount: number;
  sharesCount: number;
  caption: string;
  timeAgo: string;
  taggedPerson?: string;
  tourSlug?: string;
}

const feedPosts: Post[] = [
  {
    id: 1,
    user: {
      username: "walkwithmandu",
      avatar: "/walkmandu.png",
      isVerified: true,
      location: "Nine Arch Bridge, Demodara, Ella"
    },
    images: [
      "/bbg2.png",
      "/2.jpeg",
      "/cooking.png"
    ],
    type: "carousel",
    likes: 1420,
    commentsCount: 38,
    sharesCount: 15,
    caption: "Some moments feel like they belong to a different time — the gentle mountain mist, the morning train horn echoing across the eucalyptus valley, and the world's most scenic railway. We reserve first-class observation seats so you never have to fight for tickets.",
    timeAgo: "2 HOURS AGO",
    taggedPerson: "Mandu Private Chauffeur",
    tourSlug: "highlands-tea-trails"
  },
  {
    id: 2,
    user: {
      username: "walkwithmandu",
      avatar: "/walkmandu.png",
      isVerified: true,
      location: "Yala National Park, Block 1"
    },
    images: [
      "/4.jpeg"
    ],
    type: "video",
    videoUrl: "/video2.mp4",
    likes: 3410,
    commentsCount: 97,
    sharesCount: 54,
    caption: "Majestic predator strolling along the morning sand dunes 🐆 Sri Lanka has the highest leopard density on planet Earth. Our private safaris enter through quiet buffer tracks with expert naturalist trackers to avoid noisy jeep clusters.",
    timeAgo: "2 DAYS AGO",
    taggedPerson: "Yala Naturalist Tracker",
    tourSlug: "wild-safari-expedition"
  },
  {
    id: 3,
    user: {
      username: "walkwithmandu",
      avatar: "/walkmandu.png",
      isVerified: true,
      location: "Sigiriya Lion Rock Fortress"
    },
    images: [
      "/bbg3.png",
      "/3.jpeg"
    ],
    type: "carousel",
    likes: 2185,
    commentsCount: 62,
    sharesCount: 29,
    caption: "Standing 200 meters above the ancient jungle canopy at first light 🌅 Sigiriya was an architectural marvel in the 5th century, with landscaped royal water gardens, mirrored fresco corridors, and massive lion paws carved into the granite rock.",
    timeAgo: "5 HOURS AGO",
    taggedPerson: "Cultural Triangle Guide",
    tourSlug: "cultural-heritage"
  },
  {
    id: 8,
    user: {
      username: "walkwithmandu",
      avatar: "/walkmandu.png",
      isVerified: true,
      location: "Ahangama Point, Southern Province"
    },
    images: [
      "/1.jpg",
      "/villagevisit.png"
    ],
    type: "carousel",
    likes: 1894,
    commentsCount: 45,
    sharesCount: 22,
    caption: "Golden hour peelers and empty tropical peaks in our home village of Ahangama 🏄‍♀️ Clean south swell, warm turquoise water, and beachfront coconut smoothies. Private surf coaches and equipment included on our South Coast route.",
    timeAgo: "1 DAY AGO",
    taggedPerson: "Ahangama Surf Camp",
    tourSlug: "south-coast-surf-chill"
  },
  {
    id: 4,
    user: {
      username: "walkwithmandu",
      avatar: "/walkmandu.png",
      isVerified: true,
      location: "Yala National Park, Block 1"
    },
    images: [
      "/4.jpeg"
    ],
    type: "video",
    videoUrl: "/video1.mp4",
    likes: 3410,
    commentsCount: 97,
    sharesCount: 54,
    caption: "Majestic predator strolling along the morning sand dunes 🐆 Sri Lanka has the highest leopard density on planet Earth. Our private safaris enter through quiet buffer tracks with expert naturalist trackers to avoid noisy jeep clusters.",
    timeAgo: "2 DAYS AGO",
    taggedPerson: "Yala Naturalist Tracker",
    tourSlug: "wild-safari-expedition"
  },
  {
    id: 5,
    user: {
      username: "walkwithmandu",
      avatar: "/walkmandu.png",
      isVerified: true,
      location: "Village Spice Garden, Kandy"
    },
    images: [
      "/cooking.png",
      "/villagevisit.png"
    ],
    type: "carousel",
    likes: 1260,
    commentsCount: 31,
    sharesCount: 12,
    caption: "Firewood hearths, hand-pressed coconut milk, and freshly ground cinnamon 🥥 An intimate village cooking masterclass with Amma in Kandy. The real flavor of Sri Lanka is found in village kitchens, not five-star hotel buffets.",
    timeAgo: "4 DAYS AGO",
    taggedPerson: "Village Culinary Host",
    tourSlug: "complete-island-tour"
  },
  {
    id: 6,
    user: {
      username: "walkwithmandu",
      avatar: "/walkmandu.png",
      isVerified: true,
      location: "Mirissa Bay & Secret Beach"
    },
    images: [
      "/3.jpeg"
    ],
    type: "single",
    likes: 2470,
    commentsCount: 53,
    sharesCount: 18,
    caption: "Tucked away behind a small jungle dirt path: Mirissa's secret cove. Clear calm water, towering coconut palms, and fresh king coconut water straight from the tree 🌴",
    timeAgo: "6 DAYS AGO",
    taggedPerson: "South Coast Chauffeur",
    tourSlug: "honeymoon-escape"
  }
];

const STORIES = [
  { id: 2, label: "Sigiriya", image: "/bbg3.png", hasUnread: true },
  { id: 3, label: "Ella Train", image: "/bbg2.png", hasUnread: true },
  { id: 4, label: "Yala Safari", image: "/4.jpeg", hasUnread: true },
  { id: 5, label: "Surf Coast", image: "/1.jpg", hasUnread: true },
  { id: 6, label: "Village Food", image: "/cooking.png", hasUnread: true },
  { id: 7, label: "Reviews ⭐", image: "/villagevisit.png", hasUnread: true },
];

export default function GalleryPage() {
  // State for liked posts: id -> boolean
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  // State for bookmarked posts: id -> boolean
  const [bookmarked, setBookmarked] = useState<Record<number, boolean>>({});
  // Active carousel slide index: id -> index
  const [activeSlide, setActiveSlide] = useState<Record<number, number>>({});
  // Expanded caption toggle: id -> boolean
  const [expandedCaption, setExpandedCaption] = useState<Record<number, boolean>>({});
  // Tag bubble visible: id -> boolean
  const [showTag, setShowTag] = useState<Record<number, boolean>>({});
  // Video mute state: id -> boolean
  const [isMuted, setIsMuted] = useState<Record<number, boolean>>({ 4: true });

  const toggleLike = (postId: number) => {
    setLiked((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleBookmark = (postId: number) => {
    setBookmarked((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const nextSlide = (postId: number, total: number) => {
    setActiveSlide((prev) => {
      const current = prev[postId] || 0;
      return { ...prev, [postId]: (current + 1) % total };
    });
  };

  const prevSlide = (postId: number, total: number) => {
    setActiveSlide((prev) => {
      const current = prev[postId] || 0;
      return { ...prev, [postId]: (current - 1 + total) % total };
    });
  };

  const toggleTag = (postId: number) => {
    setShowTag((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const toggleMute = (postId: number) => {
    setIsMuted((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-rose-500 selection:text-white">
      <Navbar />

      <main className="flex-grow pt-20 sm:pt-24 pb-16">

        {/* ── INSTAGRAM STORIES HIGHLIGHTS TRAY (WITHOUT YOUR STORY) ── */}
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-start sm:justify-center gap-4 sm:gap-7 min-w-max">
            {STORIES.map((story) => (
              <div
                key={story.id}
                className="flex flex-col items-center gap-1.5 cursor-pointer group"
              >
                <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 transition-transform active:scale-95 group-hover:scale-105">
                  <div className="p-0.5 bg-black rounded-full">
                    <img
                      src={story.image}
                      alt={story.label}
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-[11px] text-neutral-300 font-medium tracking-tight group-hover:text-white">
                  {story.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── INSTAGRAM FEED POSTS CONTAINER (3 COLUMNS ON DESKTOP, 1 COLUMN ON MOBILE) ── */}
        <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {feedPosts.map((post) => {
              const isPostLiked = liked[post.id];
              const isPostBookmarked = bookmarked[post.id];
              const currentSlide = activeSlide[post.id] || 0;
              const currentImg = post.images[currentSlide] || post.images[0];
              const isCaptionExpanded = expandedCaption[post.id];
              const isTagVisible = showTag[post.id];
              const likesDisplay = isPostLiked ? post.likes + 1 : post.likes;

              return (
                <article
                  key={post.id}
                  className="bg-black sm:bg-neutral-950 sm:border sm:border-neutral-800/90 sm:rounded-3xl overflow-hidden pb-4 sm:pb-5 border-b border-neutral-900 sm:border-b-0 flex flex-col justify-between shadow-xl"
                >

                  {/* ── Post Media: Full-Bleed 4:5 Edge-to-Edge Image / Video ── */}
                  <div className="relative aspect-[4/5] bg-neutral-950 overflow-hidden select-none sm:rounded-t-3xl">
                    {/* Top-left location badge */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 z-20 border border-white/10 pointer-events-none">
                      <MapPin className="w-3 h-3 text-[var(--color-brand-orange)]" />
                      <span>{post.user.location}</span>
                    </div>
                    {post.type === "video" && post.videoUrl ? (
                      <div className="w-full h-full relative">
                        <video
                          src={post.videoUrl}
                          loop
                          autoPlay
                          playsInline
                          muted={isMuted[post.id] !== false}
                          className="w-full h-full object-cover"
                        />
                        {/* Mute / Unmute Button */}
                        <button
                          onClick={() => toggleMute(post.id)}
                          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white z-20 focus:outline-none"
                        >
                          {isMuted[post.id] === false ? (
                            <Volume2 className="w-4 h-4" />
                          ) : (
                            <VolumeX className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    ) : (
                      <div className="w-full h-full relative">
                        <img
                          src={currentImg}
                          alt={post.user.location}
                          className="w-full h-full object-cover"
                        />

                        {/* Carousel Arrow Right (Identical to attached image) */}
                        {post.images.length > 1 && currentSlide < post.images.length - 1 && (
                          <button
                            onClick={() => nextSlide(post.id, post.images.length)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all z-20 shadow-md focus:outline-none"
                            aria-label="Next slide"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        )}

                        {/* Carousel Arrow Left */}
                        {post.images.length > 1 && currentSlide > 0 && (
                          <button
                            onClick={() => prevSlide(post.id, post.images.length)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white flex items-center justify-center transition-all z-20 shadow-md focus:outline-none"
                            aria-label="Previous slide"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    )}

                    {/* Person Tag Icon in Bottom Left (Identical to attached image) */}
                    <div className="absolute bottom-3 left-3 z-20">
                      <button
                        onClick={() => toggleTag(post.id)}
                        className="w-7 h-7 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white shadow-md focus:outline-none active:scale-95 transition-transform"
                        aria-label="Show tagged location"
                      >
                        <User className="w-3.5 h-3.5 fill-white" />
                      </button>

                      {/* Tag Bubble Popup */}
                      {isTagVisible && (
                        <div className="absolute bottom-9 left-0 bg-black/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-neutral-700 shadow-xl whitespace-nowrap animate-in fade-in zoom-in-95 duration-150 flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-[var(--color-brand-orange)]" />
                          <span>{post.taggedPerson || "Sri Lanka Tour"}</span>
                        </div>
                      )}
                    </div>

                    {/* Watermark Logo in Bottom Right (Identical to attached screenshot watermark) */}
                    <div className="absolute bottom-3 right-3 text-[10px] uppercase font-bold tracking-widest text-white/40 pointer-events-none drop-shadow">
                      Walk With Mandu
                    </div>
                  </div>

                  {/* ── Carousel Dots (Centered directly below image, matching screenshot) ── */}
                  {post.images.length > 1 && (
                    <div className="flex items-center justify-center gap-1.5 pt-2.5 pb-1">
                      {post.images.map((_, dotIdx) => (
                        <span
                          key={dotIdx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${dotIdx === currentSlide
                            ? "w-1.5 bg-[#0095F6]"
                            : "w-1.5 bg-neutral-700"
                            }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* ── Action Icons Row (Matching exact layout: ♡ 367  💬 6  🔁 1  ➤     🔖) ── */}
                  <div className="px-3.5 pt-2 pb-1 flex items-center justify-between">
                    <div className="flex items-center gap-4 sm:gap-5 text-neutral-200">

                      {/* 1. Like Heart + Count */}
                      <button
                        onClick={() => toggleLike(post.id)}
                        className="flex items-center gap-1.5 focus:outline-none group active:scale-125 transition-transform"
                        aria-label="Like post"
                      >
                        <Heart
                          className={`w-6 h-6 transition-colors ${isPostLiked
                            ? "fill-rose-500 text-rose-500 scale-110"
                            : "text-white group-hover:text-neutral-300"
                            }`}
                        />
                        <span className="text-xs font-bold text-white">
                          {likesDisplay}
                        </span>
                      </button>

                      {/* 2. Comment Bubble + Count */}
                      <button
                        className="flex items-center gap-1.5 focus:outline-none text-white hover:text-neutral-300 transition-colors"
                        aria-label="Comments"
                      >
                        <MessageCircle className="w-6 h-6" />
                        <span className="text-xs font-bold text-white">
                          {post.commentsCount}
                        </span>
                      </button>

                      {/* 3. Repost / Repeat + Count (Identical to screenshot) */}
                      <button
                        className="flex items-center gap-1.5 focus:outline-none text-white hover:text-neutral-300 transition-colors"
                        aria-label="Repost"
                      >
                        <Repeat className="w-5 h-5" />
                        <span className="text-xs font-bold text-white">
                          {post.sharesCount}
                        </span>
                      </button>

                      {/* 4. Send / WhatsApp Direct Share */}
                      <a
                        href={`https://wa.me/94776175241?text=${encodeURIComponent(
                          `Hi Mandu! I loved your Instagram post from ${post.user.location}. Can you include this in our custom tour itinerary?`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus:outline-none text-white hover:text-emerald-400 transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <Send className="w-5 h-5 -rotate-12" />
                      </a>
                    </div>

                    {/* 5. Bookmark / Save on far right */}
                    <button
                      onClick={() => toggleBookmark(post.id)}
                      className="focus:outline-none text-white hover:text-neutral-300 transition-colors active:scale-125"
                      aria-label="Save post"
                    >
                      <Bookmark
                        className={`w-6 h-6 transition-colors ${isPostBookmarked
                          ? "fill-white text-white"
                          : "text-white"
                          }`}
                      />
                    </button>
                  </div>

                  {/* ── Caption with Username & Expandable "... more" ── */}
                  <div className="px-3.5 pt-1 space-y-1">
                    <p className="text-xs sm:text-sm text-neutral-100 leading-relaxed font-sans">
                      <span className="font-bold text-white mr-1.5">
                        {post.user.username}
                      </span>
                      <span>
                        {isCaptionExpanded
                          ? post.caption
                          : post.caption.slice(0, 95)}
                      </span>
                      {!isCaptionExpanded && post.caption.length > 95 && (
                        <button
                          onClick={() =>
                            setExpandedCaption((prev) => ({
                              ...prev,
                              [post.id]: true
                            }))
                          }
                          className="text-neutral-400 hover:text-neutral-200 ml-1 font-medium text-xs focus:outline-none"
                        >
                          ... more
                        </button>
                      )}
                    </p>

                    {/* Time ago */}
                    <p className="text-[10px] text-neutral-500 uppercase tracking-wider pt-0.5">
                      {post.timeAgo}
                    </p>

                    {/* Direct WhatsApp Tour Booking Link (Integrated nicely below caption) */}
                    <div className="pt-2 flex items-center justify-between">
                      <a
                        href={`https://wa.me/94776175241?text=${encodeURIComponent(
                          `Hi Mandu! I saw your post of ${post.user.location} on Instagram. Please send details for a private tour here!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 px-3 py-1.5 rounded-full transition-colors"
                      >
                        <Send className="w-3 h-3 text-emerald-400 -rotate-12" />
                        <span>Book this spot with Mandu</span>
                      </a>

                      {post.tourSlug && (
                        <Link
                          href={`/itineraries/${post.tourSlug}`}
                          className="text-[11px] font-bold text-[var(--color-brand-orange)] hover:underline flex items-center gap-0.5"
                        >
                          <span>View Itinerary</span>
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>

                  </div>

                </article>
              );
            })}
          </div>
        </div>

        {/* ── BOTTOM COMMUNITY CALLOUT ── */}
        <div className="max-w-md mx-auto mt-8 p-6 bg-neutral-950 border border-neutral-800 rounded-3xl text-center">
          <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white mb-3">
            <Camera className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-white mb-1">
            Tag #WalkWithMandu on Instagram
          </h3>
          <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
            Traveling on one of our private tours? Tag @walkwithmandu to have your reels and photos featured in our live island feed!
          </p>
          <a
            href="https://instagram.com/walkwithmandu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#0095F6] hover:bg-[#1877F2] text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <span>Follow @walkwithmandu on Instagram</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
}
