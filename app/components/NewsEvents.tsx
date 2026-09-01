import React from "react";
import ScrollReveal from "./ScrollReveal";

const newsItems = [
  {
    id: 1,
    title: "Kandy Esala Perahera Dates Announced",
    category: "Event",
    date: "Aug 15, 2026",
    image: "https://images.unsplash.com/photo-1589182372275-f86a9f656209?auto=format&fit=crop&q=80&w=600",
    excerpt: "The grandest cultural festival in Sri Lanka is back. Join us for this spectacular 10-day event in the historical city of Kandy."
  },
  {
    id: 2,
    title: "South Coast Surf Season Begins",
    category: "News",
    date: "Oct 1, 2026",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=600",
    excerpt: "The waves are pumping! We've updated our South Coast packages to include premium board rentals and expert coaching."
  },
  {
    id: 3,
    title: "New Eco-Lodge Partners in Ella",
    category: "Update",
    date: "Jul 22, 2026",
    image: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=600",
    excerpt: "We're thrilled to announce our partnership with three new sustainable eco-lodges nestled in the misty tea mountains of Ella."
  }
];

export default function NewsEvents() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="reveal-up" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              News & <span className="text-[var(--color-brand-orange)]">Events</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl">
              Stay up to date with the latest travel news, local festivals, and updates from the Walk With Mandu team.
            </p>
          </div>
          <button className="hidden md:inline-block border-2 border-gray-200 text-gray-700 hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] px-6 py-2.5 rounded-full font-bold transition-colors">
            View All Updates
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <ScrollReveal key={item.id} animation="reveal-up">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                
                <div className="h-56 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 font-bold px-3 py-1 rounded-full text-xs shadow-sm uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-gray-400 text-sm mb-3 font-medium">{item.date}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {item.excerpt}
                  </p>
                  
                  <button className="text-[var(--color-brand-orange)] font-bold flex items-center gap-2 group/btn self-start mt-auto">
                    Read More 
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="w-full sm:w-auto border-2 border-gray-200 text-gray-700 hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] px-8 py-3 rounded-full font-bold transition-colors">
            View All Updates
          </button>
        </div>

      </div>
    </section>
  );
}
