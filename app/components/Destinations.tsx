import React from "react";
import ScrollReveal from "./ScrollReveal";

const destinations = [
  {
    id: 1,
    name: "Sigiriya",
    subtitle: "The Lion Rock",
    image: "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 2,
    name: "Ella",
    subtitle: "Misty Mountains",
    image: "https://images.unsplash.com/photo-1589182372275-f86a9f656209?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 3,
    name: "Ahangama",
    subtitle: "Surf & Sand",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 4,
    name: "Galle Fort",
    subtitle: "Colonial Charm",
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 5,
    name: "Kandy",
    subtitle: "Cultural Capital",
    image: "https://images.unsplash.com/photo-1625736302856-11f621a2245b?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    id: 6,
    name: "Yala",
    subtitle: "Wildlife Safari",
    image: "https://images.unsplash.com/photo-1549471013-3364d7220b75?auto=format&fit=crop&q=80&w=800",
    colSpan: "md:col-span-1 lg:col-span-1",
  }
];

export default function Destinations() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="reveal-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-[var(--color-brand-orange)]">Destinations</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From ancient ruins in the cultural triangle to world-class surf breaks on the south coast, discover the best of Sri Lanka with us.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="reveal-up">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 auto-rows-[300px]">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${dest.colSpan}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md transform transition-transform duration-300 group-hover:-translate-y-1">{dest.name}</h3>
                  <p className="text-gray-300 font-medium text-sm drop-shadow-sm transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
                    {dest.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
