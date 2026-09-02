import React from "react";
import ScrollReveal from "./ScrollReveal";

const destinations = [
  {
    id: 1,
    name: "Sigiriya",
    subtitle: "The Lion Rock",
    image: "/cooking.png",
  },

  {
    id: 2,
    name: "Ella",
    subtitle: "Misty Mountains",
    image: "/cooking.png",
  },
  {
    id: 3,
    name: "Ahangama",
    subtitle: "Surf & Sand",
    image: "/cooking.png",
  },
  {
    id: 4,
    name: "Galle Fort",
    subtitle: "Colonial Charm",
    image: "/cooking.png",
  },
  {
    id: 5,
    name: "Kandy",
    subtitle: "Cultural Capital",
    image: "/cooking.png",
  },
  {
    id: 6,
    name: "Yala",
    subtitle: "Wildlife Safari",
    image: "https://images.unsplash.com/photo-1549471013-3364d7220b75?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 7,
    name: "Cooking",
    subtitle: "The Lion Rock",
    image: "/cooking.png",
  },
  {
    id: 8,
    name: "Sigiriya",
    subtitle: "The Lion Rock",
    image: "/cooking.png",
  }

];

export default function Destinations() {
  const col1 = destinations.filter((_, i) => i % 2 === 0);
  const col2 = destinations.filter((_, i) => i % 2 !== 0);

  const DestinationCard = ({ dest, isTall }: { dest: any, isTall: boolean }) => (
    <div
      key={dest.id}
      className={`relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 w-full ${isTall ? "aspect-[3/4]" : "aspect-square"
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity"></div>
      <img
        src={dest.image}
        alt={dest.name}
        className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-6 left-6 z-20 pr-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-md transform transition-transform duration-300 group-hover:-translate-y-1">
          {dest.name}
        </h3>
        <p className="text-gray-300 font-medium text-sm drop-shadow-sm transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4">
          {dest.subtitle}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="reveal-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-[var(--color-brand-orange)]">Destinations</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From ancient ruins in the cultural triangle to world-class surf breaks on the south coast, discover the best of Sri Lanka with us.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="reveal-up">
          {/* Mobile & Desktop Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-6">
              {col1.filter((_, i) => i % 2 === 0).map((dest, i) => (
                <DestinationCard key={dest.id} dest={dest} isTall={i % 2 !== 0} />
              ))}
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-4 md:gap-6 pt-0 md:pt-8">
              {col2.filter((_, i) => i % 2 === 0).map((dest, i) => (
                <DestinationCard key={dest.id} dest={dest} isTall={i % 2 === 0} />
              ))}
            </div>
            {/* Column 3 (Desktop only) */}
            <div className="hidden md:flex flex-col gap-4 md:gap-6 pt-0">
              {col1.filter((_, i) => i % 2 !== 0).map((dest, i) => (
                <DestinationCard key={dest.id} dest={dest} isTall={i % 2 === 0} />
              ))}
            </div>
            {/* Column 4 (Desktop only) */}
            <div className="hidden md:flex flex-col gap-4 md:gap-6 pt-8">
              {col2.filter((_, i) => i % 2 !== 0).map((dest, i) => (
                <DestinationCard key={dest.id} dest={dest} isTall={i % 2 !== 0} />
              ))}
            </div>
          </div>

          {/* Mobile only elements for 3rd and 4th columns if we were to show all on mobile, 
              but let's just use standard 2 cols for mobile and 4 for desktop */}
          <div className="grid grid-cols-2 gap-4 mt-4 md:hidden">
            <div className="flex flex-col gap-4">
              {col1.filter((_, i) => i % 2 !== 0).map((dest, i) => (
                <DestinationCard key={dest.id} dest={dest} isTall={i % 2 === 0} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {col2.filter((_, i) => i % 2 !== 0).map((dest, i) => (
                <DestinationCard key={dest.id} dest={dest} isTall={i % 2 !== 0} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
