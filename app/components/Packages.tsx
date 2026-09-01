import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="reveal-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Tour Packages
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Curated experiences designed to showcase the diverse beauty of Sri Lanka.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="reveal-stagger" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Package 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            <div className="h-60 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800" alt="Sigiriya" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-brand-green)] font-bold px-3 py-1 rounded-full text-sm">
                7 Days
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cultural Heritage</h3>
              <p className="text-gray-500 mb-4 flex-grow">
                Explore ancient cities, majestic temples, and the world-famous Sigiriya Rock Fortress.
              </p>
              <a href="#contact" className="text-[var(--color-brand-orange)] font-medium hover:text-orange-700 flex items-center gap-2 transition-colors">
                Inquire Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Package 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            <div className="h-60 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=800" alt="Mirissa beach" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-brand-orange)] font-bold px-3 py-1 rounded-full text-sm">
                5 Days
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">South Coast Surf & Chill</h3>
              <p className="text-gray-500 mb-4 flex-grow">
                Sun, sea, and surf. Relax on pristine beaches in Ahangama and Mirissa.
              </p>
              <a href="#contact" className="text-[var(--color-brand-orange)] font-medium hover:text-orange-700 flex items-center gap-2 transition-colors">
                Inquire Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Package 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
            <div className="h-60 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=800" alt="Tea plantations" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 font-bold px-3 py-1 rounded-full text-sm">
                10 Days
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Complete Island Tour</h3>
              <p className="text-gray-500 mb-4 flex-grow">
                From the cultural triangle to the misty hills of Ella, and down to the southern coast.
              </p>
              <a href="#contact" className="text-[var(--color-brand-orange)] font-medium hover:text-orange-700 flex items-center gap-2 transition-colors">
                Inquire Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
