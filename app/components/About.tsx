import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal animation="reveal-fade" className="flex justify-center items-center">
            <div className="relative w-full max-w-md p-8">
              <img
                src="/walkmandu.png"
                alt="Walk With Mandu Logo"
                className="w-full h-auto object-contain "
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="reveal-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Travel with <span className="text-[var(--color-brand-orange)]">Mandu?</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Based in the beautiful southern town of Ahangama, Walk With Mandu is dedicated to showing foreign travelers the true, authentic Sri Lanka. We believe in sustainable tourism and creating deep, meaningful connections with local culture.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Whether you're looking for pristine surf breaks on the south coast, historical wonders in the cultural triangle, or misty tea plantations in the hill country, our team crafts the perfect bespoke itinerary for you.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-[var(--color-brand-green)] pl-4">
                <h4 className="text-xl font-bold text-gray-900 ">100% Local</h4>
                <p className="text-gray-500 ">Expert guides from Sri Lanka.</p>
              </div>
              <div className="border-l-4 border-[var(--color-brand-orange)] pl-4">
                <h4 className="text-xl font-bold text-gray-900 ">Bespoke</h4>
                <p className="text-gray-500 ">Tailored to your needs.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
