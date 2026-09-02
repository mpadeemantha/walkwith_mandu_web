"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import {
  HelpCircle,
  Search,
  X,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle2
} from "lucide-react";

interface FAQItem {
  id: number;
  category: "Visa & Entry" | "Weather & Seasons" | "Chauffeurs & Transport" | "Customization & Booking" | "Culture & Health";
  question: string;
  answer: string;
}

const detailedFaqs: FAQItem[] = [
  // ── Visa & Entry ─────────────────────────────────────────────────────────
  {
    id: 1,
    category: "Visa & Entry",
    question: "Do I need a visa (ETA) to visit Sri Lanka?",
    answer: "Yes, almost all foreign travelers require an Electronic Travel Authorization (ETA) before boarding their flight to Sri Lanka. You can easily apply online through the official government portal (eta.gov.lk). The standard tourist visa is valid for 30 days with double entry and is typically approved within 24–48 hours."
  },
  {
    id: 2,
    category: "Visa & Entry",
    question: "What passport validity is required for entry into Sri Lanka?",
    answer: "Your passport must have at least 6 months of validity remaining from the date of your arrival in Sri Lanka, and must have at least one blank page for entry and exit immigration stamps."
  },

  // ── Weather & Seasons ───────────────────────────────────────────────────
  {
    id: 3,
    category: "Weather & Seasons",
    question: "When is the best time to visit Sri Lanka?",
    answer: "Sri Lanka has two distinct monsoon seasons affecting opposite sides of the island, which means it is always dry, sunny, and warm somewhere! For the South Coast (Galle, Ahangama, Mirissa), the West Coast, and Central Highlands, November to April is optimal. For the East Coast (Trincomalee, Arugam Bay, Pasikudah), May to September is best."
  },
  {
    id: 4,
    category: "Weather & Seasons",
    question: "What is the weather like in the Hill Country (Nuwara Eliya & Ella)?",
    answer: "The central tea mountains sit at higher elevations (1,000–1,900m) and are noticeably cooler than the tropical coastlines. Daytime temperatures are typically around 18–22°C, but nights can drop to 10–14°C. We recommend packing a light jacket or fleece for evenings in Ella and Nuwara Eliya."
  },

  // ── Chauffeurs & Transport ──────────────────────────────────────────────
  {
    id: 5,
    category: "Chauffeurs & Transport",
    question: "What kind of vehicle is provided for private tours?",
    answer: "All our transfers and tours utilize modern, fully insured, air-conditioned private vehicles. For 1–2 travelers, we provide a comfortable modern sedan (e.g. Toyota Premio/Axio/Prius). For 3–7 travelers, we provide a spacious luxury van (e.g. Toyota KDH / HiAce Commuter) with ample luggage capacity."
  },
  {
    id: 6,
    category: "Chauffeurs & Transport",
    question: "Are your drivers licensed and English-speaking?",
    answer: "Yes, 100%. Every chauffeur assigned to our tours is an officially certified Tourist Chauffeur-Guide registered with the Sri Lanka Tourism Development Authority (SLTDA). They speak fluent English, have clean driving records, and possess deep local knowledge of culture, history, and secret viewpoints."
  },
  {
    id: 7,
    category: "Chauffeurs & Transport",
    question: "Can we stop for photos, fresh coconuts, or restroom breaks along the drive?",
    answer: "Of course! This is the greatest benefit of a private tour. You are never on a rigid bus schedule. You can ask your chauffeur to stop at any scenic viewpoint, authentic roadside king coconut stall, fruit vendor, or café whenever you wish."
  },

  // ── Customization & Booking ─────────────────────────────────────────────
  {
    id: 8,
    category: "Customization & Booking",
    question: "Can I customize an existing package or build my own route?",
    answer: "Yes! Every single package listed on our website is completely flexible. You can add extra days on the beach in Ahangama, upgrade to 5-star boutique luxury resorts, include private surf lessons, or substitute destinations to fit your travel style."
  },
  {
    id: 9,
    category: "Customization & Booking",
    question: "How does the payment and cancellation process work?",
    answer: "Once we agree on your finalized itinerary, we request a standard booking deposit to lock in your private vehicle and boutique accommodations. The remaining balance is payable closer to your trip. If your flight plans change, we provide flexible rescheduling with zero administration fees."
  },
  {
    id: 10,
    category: "Customization & Booking",
    question: "What is typically included in your tour packages?",
    answer: "Our packages typically include: all accommodations with daily breakfast, private air-conditioned vehicle with dedicated licensed chauffeur-guide, fuel, highway tolls, parking fees, airport transfers, and designated excursion entrance tickets. Lunch, dinner, and personal staff tips can be included upon request."
  },

  // ── Culture, Health & Safety ────────────────────────────────────────────
  {
    id: 11,
    category: "Culture & Health",
    question: "Is Sri Lanka safe for solo female travelers and families with young children?",
    answer: "Yes, Sri Lanka is widely praised by international visitors for its incredible warmth and safety. As a proudly women-led tour company, we take safety and ethical conduct seriously. Your private driver remains with you throughout each day, and our team is reachable 24/7 via WhatsApp."
  },
  {
    id: 12,
    category: "Culture & Health",
    question: "What is the dress code when visiting temples and sacred sites?",
    answer: "When visiting sacred Buddhist temples (such as the Temple of the Tooth in Kandy or Dambulla Cave Temple), both men and women must cover their shoulders and knees. You will also need to remove your shoes and hats before entering the temple compound. Bringing a lightweight sarong or scarf in your daypack is very convenient."
  },
  {
    id: 13,
    category: "Culture & Health",
    question: "Is tap water safe to drink in Sri Lanka?",
    answer: "We recommend drinking bottled, filtered, or boiled water throughout Sri Lanka. Walk With Mandu provides clean drinking water in all our private tour vehicles to keep you hydrated on the road."
  },
  {
    id: 14,
    category: "Culture & Health",
    question: "Can you cater to vegetarians, vegans, or gluten-free diets?",
    answer: "Sri Lankan cuisine is naturally one of the friendliest in the world for vegetarians and vegans! Most traditional curries are prepared using coconut milk, fresh lentils (dhal), jackfruit, and local vegetables. Our guides know the cleanest and most authentic local restaurants and will communicate all dietary restrictions to kitchen staff."
  }
];

const FAQ_CATEGORIES = [
  "All",
  "Visa & Entry",
  "Weather & Seasons",
  "Chauffeurs & Transport",
  "Customization & Booking",
  "Culture & Health"
] as const;

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIds, setOpenIds] = useState<number[]>([1, 3, 8]); // default open first in major groups

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = useMemo(() => {
    return detailedFaqs.filter((faq) => {
      const matchCat = activeCategory === "All" || faq.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/70 text-gray-800">
      <Navbar />

      <main className="flex-grow">
        
        {/* ── CINEMATIC HERO ── */}
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/bbg3.png"
              alt="Sri Lanka Sigiriya"
              className="w-full h-full object-cover opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/90" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <ScrollReveal animation="reveal-up">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">
                <HelpCircle className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                <span>Everything You Need To Know</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
                Sri Lanka Travel FAQ & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-400">
                  Planning Knowledge Base
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Clear, transparent answers regarding visas, monsoon weather, private chauffeurs, custom itineraries, and local cultural norms.
              </p>

            </ScrollReveal>
          </div>
        </section>

        {/* ── SEARCH & CATEGORY BAR ── */}
        <section className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs (e.g. visa, weather, driver)..."
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

            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
              {FAQ_CATEGORIES.map((cat) => (
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

        {/* ── FAQS ACCORDION LIST ── */}
        <section className="py-14 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8">
                <HelpCircle className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">No Matching Answers Found</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">
                  We might not have documented that question yet. Speak with Mandu directly on WhatsApp for an immediate answer!
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-xs font-bold px-4 py-2 bg-brand-gradient text-white rounded-full"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => {
                  const isOpen = openIds.includes(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "border-orange-400/70 shadow-md ring-1 ring-[var(--color-brand-orange)]/20"
                          : "border-gray-200/80 hover:border-gray-300 shadow-sm"
                      }`}
                    >
                      <button
                        className="w-full px-6 py-5 text-left flex justify-between items-start focus:outline-none gap-4 cursor-pointer"
                        onClick={() => toggleItem(faq.id)}
                        aria-expanded={isOpen}
                      >
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-brand-orange)] block mb-1">
                            {faq.category}
                          </span>
                          <h2 className={`font-bold text-base sm:text-lg leading-snug transition-colors ${
                            isOpen ? "text-[var(--color-brand-orange)]" : "text-gray-900"
                          }`}>
                            {faq.question}
                          </h2>
                        </div>
                        
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 mt-1 ${
                          isOpen
                            ? "bg-brand-gradient text-white rotate-180 shadow-sm"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <div
                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Direct Inquiry Help Card */}
            <div className="mt-14 p-8 rounded-3xl bg-gray-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-orange)] block mb-1">
                  Have an unlisted question?
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-1">
                  Speak Directly With Our Local Team
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  We are online on WhatsApp every day from 7 AM to 10 PM (Sri Lanka Time).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
                <a
                  href="https://wa.me/94776175241?text=Hi%20Mandu!%20I%20have%20a%20question%20about%20traveling%20in%20Sri%20Lanka."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all"
                >
                  <span>Contact Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
