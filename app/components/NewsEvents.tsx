"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

export const newsArticles = [
  {
    id: "kandy-esala-perahera-guide",
    title: "The Magic of Kandy Esala Perahera: 2026 Festival Guide",
    category: "Cultural Festival",
    date: "August 2026",
    readTime: "4 min read",
    image: "/bbg2.png",
    excerpt: "Sri Lanka's grandest historical pageant returns with fire dancers, majestic tusker processions, and ancient Kandyan drumming traditions."
  },
  {
    id: "south-coast-surf-season-guide",
    title: "South Coast Surf Season: Why Ahangama & Midigama Are Surfers' Secrets",
    category: "Surf & Coast",
    date: "September 2026",
    readTime: "5 min read",
    image: "/1.jpg",
    excerpt: "From mellow beach breaks for beginners to hollow reef points for seasoned surfers, explore why the southern coastline is world-renowned."
  },
  {
    id: "sustainable-safari-yala-wilpattu",
    title: "Ethical Wildlife Safaris: Spotting Leopards While Protecting Sri Lanka's Parks",
    category: "Wildlife & Eco",
    date: "July 2026",
    readTime: "6 min read",
    image: "/4.jpeg",
    excerpt: "How Walk With Mandu partners with local naturalist trackers to deliver unforgettable leopard sightings away from overcrowded tourist convoys."
  }
];

export default function NewsEvents() {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-gray-100" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="reveal-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[var(--color-brand-orange)] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                <span>Island Insights & Journal</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                News, Festivals & <span className="text-[var(--color-brand-orange)]">Island Stories</span>
              </h2>
              
              <p className="text-sm sm:text-base text-gray-600 max-w-xl mt-2">
                Stay updated on upcoming cultural festivals, seasonal weather guides, and conservation updates from our team.
              </p>
            </div>

            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[var(--color-brand-orange)] hover:underline flex-shrink-0 self-start md:self-end"
            >
              <span>View All News & Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((item, index) => (
            <ScrollReveal key={item.id} animation="reveal-up" delay={index * 100}>
              <Link
                href="/news"
                className="bg-gray-50/80 hover:bg-white rounded-3xl overflow-hidden border border-gray-200/80 hover:border-orange-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-gray-900 font-bold px-3 py-1 rounded-full text-[11px] shadow-sm uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                        {item.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[var(--color-brand-orange)] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[var(--color-brand-orange)] mt-auto">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
