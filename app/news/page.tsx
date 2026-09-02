"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import {
  Calendar,
  Clock,
  Search,
  X,
  Tag,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Share2,
  BookOpen
} from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  category: "Cultural Festival" | "Surf & Coast" | "Wildlife & Eco" | "Travel Guide";
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

const allNewsArticles: NewsItem[] = [
  {
    id: "kandy-esala-perahera-2026",
    title: "Kandy Esala Perahera 2026: Official Dates, Rituals & Best Viewing Tips",
    category: "Cultural Festival",
    date: "August 2026",
    readTime: "5 min read",
    image: "/bbg2.png",
    excerpt: "The grandest cultural festival in Asia returns to the sacred hill city of Kandy with fire dancers, ceremonial tuskers, and royal drumming.",
    content: [
      "The Kandy Esala Perahera is centuries old, held in honor of the Sacred Tooth Relic of the Buddha enshrined in the Temple of the Tooth. Each night over a ten-day period, the pageant grows progressively grander.",
      "Hundreds of traditional Kandyan dancers, whip-crackers, and fire acrobats accompany majestic elephants draped in illuminated golden cloaks. The grand finale—the Randoli Perahera—is an unforgettable sensory spectacle.",
      "Walk With Mandu arranges guaranteed VIP balcony seats along the procession route and private chauffeured transfers, ensuring our guests experience the magic comfortably and safely."
    ]
  },
  {
    id: "south-coast-surf-season-secrets",
    title: "South Coast Surf Season: Why Ahangama & Midigama Are Surfers' Secrets",
    category: "Surf & Coast",
    date: "September 2026",
    readTime: "4 min read",
    image: "/1.jpg",
    excerpt: "Discover the best swell windows, beginner-friendly beach breaks, and secret reef points between Ahangama and Mirissa.",
    content: [
      "From November through April, the southern coastline of Sri Lanka lights up with clean, glassy groundswells. Water temperatures hover around 28°C (82°F), meaning you only need boardshorts or a swimsuit.",
      "Ahangama has rapidly emerged as the chic surf capital of the island, dotted with boutique cafés, beachfront yoga pavilions, and world-class waves like The Rock and Kabalana Main Peak.",
      "Our private surf journeys pair you with local ISA-certified surf coaches and private transport to spot the best tide and wind conditions daily."
    ]
  },
  {
    id: "ethical-wildlife-safari-guidelines",
    title: "Ethical Wildlife Safaris: Spotting Leopards While Protecting Sri Lanka's Parks",
    category: "Wildlife & Eco",
    date: "July 2026",
    readTime: "6 min read",
    image: "/4.jpeg",
    excerpt: "How our private naturalist trackers navigate Yala and Wilpattu away from noisy jeep convoys to ensure genuine conservation.",
    content: [
      "Sri Lanka boasts the highest leopard density on Earth in Yala National Park, but popularity can sometimes lead to crowded jeep clusters. Walk With Mandu takes a strictly ethical approach.",
      "We partner with seasoned naturalist trackers who understand wildlife corridors, animal behavior, and quiet buffer tracks. This ensures quiet, intimate animal encounters without stressing the wildlife.",
      "Every safari operated by Walk With Mandu contributes directly to local wildlife conservation and anti-poaching awareness across southern Sri Lanka."
    ]
  },
  {
    id: "scenic-train-journey-kandy-ella",
    title: "The Kandy to Ella Scenic Train: Reserved Observation Seats & Hidden Stops",
    category: "Travel Guide",
    date: "June 2026",
    readTime: "5 min read",
    image: "/cooking.png",
    excerpt: "Frequently hailed as the most beautiful train journey in the world. Here is everything you need to know about tickets, salon cars, and timing.",
    content: [
      "Winding through mist-shrouded cloud forests, emerald tea plantations, and dramatic mountain viaducts, the 6-hour rail journey between Kandy and Ella is an absolute bucket-list experience.",
      "Train tickets in first-class observation cars sell out weeks in advance due to strict government quotas. When you book a private tour with Walk With Mandu, our team pre-books reserved seats well ahead of time.",
      "Your private chauffeur meets you at the arrival station with your luggage, making the entire transit smooth and effortless."
    ]
  },
  {
    id: "vesak-festival-lights-lanterns",
    title: "Vesak Festival of Lights: Experiencing Sri Lanka's Most Peaceful Celebration",
    category: "Cultural Festival",
    date: "May 2026",
    readTime: "4 min read",
    image: "/bbg3.png",
    excerpt: "The full moon of May transforms the island into a glittering wonderland of handmade bamboo lanterns and free community food stalls.",
    content: [
      "Vesak celebrates the birth, enlightenment, and passing of the Buddha. Cities and peaceful village paths are adorned with giant glowing lanterns (Vesak Kudu) and towering illustrated pandols.",
      "One of the most touching traditions is 'Dansalas'—free food and refreshment stalls set up by locals to feed every passing stranger and traveler with generous hospitality.",
      "Traveling in Sri Lanka during Vesak provides an unmatched cultural immersion into the warmth and generosity of the Sri Lankan people."
    ]
  },
  {
    id: "sustainable-tourism-community-pledge",
    title: "Our 2026 Sustainability Pledge: Empowering Women & Preserving Sri Lanka",
    category: "Wildlife & Eco",
    date: "October 2026",
    readTime: "3 min read",
    image: "/villagevisit.png",
    excerpt: "How our Travelife-certified practices ensure that over 80% of your tour expenditure directly benefits local hosts and drivers.",
    content: [
      "As a certified Travelife Sustainability Manager, Walk With Mandu audits every partner hotel, driver, and excursion for environmental impact and fair compensation.",
      "We eliminate single-use plastic water bottles in our private vehicles, favor eco-lodges powered by renewable energy, and support village women's cooking initiatives in rural communities.",
      "When you choose Walk With Mandu, you travel with purpose, knowing your journey preserves Sri Lanka for future generations."
    ]
  }
];

const CATEGORIES = ["All", "Cultural Festival", "Surf & Coast", "Wildlife & Eco", "Travel Guide"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const filtered = useMemo(() => {
    return allNewsArticles.filter((item) => {
      const matchCat = activeCategory === "All" || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/70 text-gray-800">
      <Navbar />

      <main className="flex-grow">
        
        {/* ── HERO HEADER ── */}
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/bbg2.png"
              alt="Sri Lanka culture and landscapes"
              className="w-full h-full object-cover opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/90" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <ScrollReveal animation="reveal-up">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                <span>The Walk With Mandu Journal</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
                News, Cultural Festivals & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-400">
                  Sri Lanka Travel Insights
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Stay informed with official festival dates, weather recommendations, wildlife guidelines, and insider travel tips straight from our local team in Ahangama.
              </p>

            </ScrollReveal>
          </div>
        </section>

        {/* ── SEARCH & CATEGORY FILTER BAR ── */}
        <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, festivals, surf..."
                className="w-full pl-10 pr-8 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand-orange)] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--color-brand-orange)] text-white shadow-sm"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* ── ARTICLES GRID ── */}
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filtered.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl border border-gray-200 p-8 max-w-md mx-auto shadow-sm">
                <BookOpen className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">No Articles Found</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">
                  Try adjusting your search term or selecting another category.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold px-4 py-2 bg-brand-gradient text-white rounded-full shadow-sm"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-orange-400/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer group"
                  >
                    {/* Image */}
                    <div className="h-60 overflow-hidden relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                      
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-gray-900 font-extrabold px-3 py-1 rounded-full text-[10px] shadow-sm uppercase tracking-wider">
                        {article.category}
                      </span>

                      <span className="absolute bottom-3 left-4 text-white/90 text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                      <div>
                        <span className="text-xs text-gray-400 font-semibold block mb-2">
                          {article.date}
                        </span>

                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[var(--color-brand-orange)] transition-colors line-clamp-2">
                          {article.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[var(--color-brand-orange)] mt-auto">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

          </div>
        </section>

        {/* ── ARTICLE DETAIL MODAL / POPUP ── */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative border border-gray-100">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close article modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="h-64 sm:h-72 w-full relative overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="bg-brand-gradient text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-2 shadow-sm">
                    {selectedArticle.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-gray-200">
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                  {selectedArticle.title}
                </h2>

                <div className="space-y-3.5 text-sm sm:text-base text-gray-700 leading-relaxed pt-2">
                  {selectedArticle.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Modal CTA */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-900">Want to include this in your tour?</p>
                    <p className="text-[11px] text-gray-500">We incorporate festivals & seasonal spots into custom trips.</p>
                  </div>

                  <a
                    href={`https://wa.me/94776175241?text=${encodeURIComponent(
                      `Hi Mandu! I just read your article "${selectedArticle.title}" and would love to incorporate it into my Sri Lanka tour.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:bg-[#20ba59] transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire About This on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ── BOTTOM CONCIERGE BANNER ── */}
        <section className="py-16 bg-gray-950 text-white border-t border-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-orange)] block mb-3">
              Plan Around the Festivals
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Planning a Trip During a Sri Lankan Festival?
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-8">
              Festival tickets and prime viewing hotels sell out quickly. Speak with Mandu to secure seats and tailored transportation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-bold px-8 py-3.5 rounded-full shadow-lg"
              >
                <span>Inquire About Festival Tours</span>
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
