import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const allPackages = [
  {
    id: 1,
    title: "Cultural Heritage",
    slug: "cultural-heritage",
    duration: "7 Days",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800",
    description: "Explore ancient cities, majestic temples, and the world-famous Sigiriya Rock Fortress.",
    highlights: ["Sigiriya", "Polonnaruwa", "Kandy"],
  },
  {
    id: 2,
    title: "South Coast Surf & Chill",
    slug: "south-coast-surf-chill",
    duration: "5 Days",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=800",
    description: "Sun, sea, and surf. Relax on pristine beaches in Ahangama and Mirissa.",
    highlights: ["Ahangama", "Mirissa", "Galle Fort"],
  },
  {
    id: 3,
    title: "The Complete Island Tour",
    slug: "complete-island-tour",
    duration: "10 Days",
    image: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=800",
    description: "From the cultural triangle to the misty hills of Ella, and down to the southern coast.",
    highlights: ["Ella", "Yala Safari", "Beaches"],
  },
  {
    id: 4,
    title: "Wildlife Safari Adventure",
    slug: "wildlife-safari",
    duration: "4 Days",
    image: "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=800",
    description: "Get up close with leopards, elephants, and exotic birds in Sri Lanka's best national parks.",
    highlights: ["Yala", "Udawalawe", "Bundala"],
  },
  {
    id: 5,
    title: "Tea Country Retreat",
    slug: "tea-country-retreat",
    duration: "3 Days",
    image: "https://images.unsplash.com/photo-1589182372275-f86a9f656209?auto=format&fit=crop&q=80&w=800",
    description: "Escape to the cool, misty mountains of Nuwara Eliya and enjoy world-class Ceylon tea.",
    highlights: ["Nuwara Eliya", "Tea Factory", "Waterfalls"],
  },
  {
    id: 6,
    title: "East Coast Explorer",
    slug: "east-coast-explorer",
    duration: "6 Days",
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=800",
    description: "Discover the untouched beauty of Trincomalee and Arugam Bay on the less-traveled east coast.",
    highlights: ["Trincomalee", "Pigeon Island", "Arugam Bay"],
  }
];

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-20">
        
        {/* Page Header */}
        <section className="bg-white py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="reveal-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Travel <span className="text-[var(--color-brand-orange)]">Packages</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Discover our curated collection of Sri Lankan adventures. From pristine beaches to ancient wonders, we have something for every traveler.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="reveal-stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              
              {allPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group">
                  <div className="h-64 overflow-hidden relative">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[var(--color-brand-orange)] font-bold px-4 py-1.5 rounded-full text-sm shadow-sm">
                      {pkg.duration}
                    </div>
                  </div>
                  
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                      {pkg.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {pkg.highlights.map((highlight, index) => (
                        <span key={index} className="bg-orange-50 text-[var(--color-brand-orange)] text-xs font-bold px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <a href={`/itineraries/${pkg.slug}`} className="w-full inline-block text-center border-2 border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)] hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
                      View Itinerary
                    </a>
                  </div>
                </div>
              ))}
              
            </ScrollReveal>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-[var(--color-brand-orange)] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <ScrollReveal animation="reveal-up">
              <h2 className="text-4xl font-bold mb-6">Need a custom package?</h2>
              <p className="text-xl mb-10 text-orange-100">We can tailor any of these tours to fit your exact needs and schedule.</p>
              <a href="/#contact" className="inline-block bg-white text-[var(--color-brand-orange)] font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                Contact Us
              </a>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
