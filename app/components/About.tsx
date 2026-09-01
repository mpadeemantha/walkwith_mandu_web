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

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-2xl border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <div className="flex-shrink-0 bg-white p-3 rounded-xl flex items-center justify-center">
                <img
                  src="/SLTD logo.png"
                  alt="Sri Lanka Tourist Board Logo"
                  className="w-40 sm:w-44 h-auto object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[var(--color-brand-green)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h4 className="font-bold text-gray-900 text-lg">Tourist Board Approved</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We are an officially certified tour operator by the Sri Lanka Tourism Development Authority, ensuring the highest standards of safety and quality.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
