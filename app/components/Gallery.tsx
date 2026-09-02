import React from "react";
import ScrollReveal from "./ScrollReveal";

const galleryImages = [
  "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1589182372275-f86a9f656209?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1546708973-c3150dbfd997?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=80&w=600",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="reveal-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Through Our <span className="text-[var(--color-brand-green)]">Lens</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Glimpses of unforgettable moments, breathtaking landscapes, and authentic local experiences.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="reveal-up">
          {/* Using a simple column setup for a masonry-like feel without heavy external libraries */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl h-48 md:h-64 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <img src={galleryImages[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="overflow-hidden rounded-xl h-64 md:h-80 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <img src={galleryImages[1]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl h-64 md:h-80 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <img src={galleryImages[2]} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="overflow-hidden rounded-xl h-48 md:h-64 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <img src={galleryImages[3]} alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl h-56 md:h-72 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <img src={galleryImages[4]} alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="overflow-hidden rounded-xl h-56 md:h-72 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <img src={galleryImages[5]} alt="Gallery 6" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl h-72 md:h-96 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <img src={galleryImages[6]} alt="Gallery 7" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="overflow-hidden rounded-xl h-32 md:h-48 group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
                <img src={galleryImages[7]} alt="Gallery 8" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
