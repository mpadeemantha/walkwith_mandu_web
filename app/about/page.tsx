import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ModernCTA from "../components/ModernCTA";
import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=2000"
              alt="Sri Lanka landscape"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-[var(--color-brand-orange)]">Story</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Discover the heart of Sri Lanka through the eyes of locals who love it.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Story / Mission */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="reveal-fade" className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <img
                    src="/walkmandu.png"
                    alt="Walk With Mandu Logo"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                  {/* Decorative element */}
                  <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-brand-green)] opacity-5 rounded-full blur-3xl"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="reveal-up">
                <h2 className="text-sm font-bold text-[var(--color-brand-orange)] tracking-widest uppercase mb-2">
                  Who We Are
                </h2>
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                  Authentic Connections in <span className="text-[var(--color-brand-green)]">Sri Lanka</span>
                </h3>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Based in the vibrant coastal town of Ahangama, Walk With Mandu was born out of a profound love for Sri Lanka's untold stories. We didn't just want to show travelers the sights; we wanted them to feel the pulse of our island.
                  </p>
                  <p>
                    Our approach to travel is deeply rooted in sustainability and community. When you journey with us, you're not just a tourist—you're a guest in our home. We partner directly with local artisans, homestays, and expert guides to ensure your experience is genuine and your impact is positive.
                  </p>
                  <p>
                    From the salty breeze of the southern surf breaks to the misty serenity of the central highlands, our bespoke itineraries are crafted to reflect your pace and passions. Let us take you off the beaten path and into the heart of Sri Lanka.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Why Travel with <span className="text-[var(--color-brand-orange)]">Mandu?</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-orange)] to-[var(--color-brand-green)] mx-auto mt-6 rounded-full"></div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "100% Local Expertise",
                  description: "Our guides are born and raised in Sri Lanka, offering insights you won't find in any guidebook.",
                  color: "bg-[var(--color-brand-orange)]",
                  delay: 0,
                },
                {
                  title: "Sustainable Travel",
                  description: "We prioritize eco-friendly practices and support local businesses to protect our island's future.",
                  color: "bg-[var(--color-brand-green)]",
                  delay: 100,
                },
                {
                  title: "Bespoke Itineraries",
                  description: "No cookie-cutter tours. Every journey is meticulously tailored to your unique interests and travel style.",
                  color: "bg-[var(--color-brand-orange)]",
                  delay: 200,
                },
                {
                  title: "Meaningful Connections",
                  description: "We facilitate real interactions with locals, allowing you to immerse yourself in our rich culture.",
                  color: "bg-[var(--color-brand-green)]",
                  delay: 300,
                },
              ].map((value, index) => (
                <ScrollReveal key={index} delay={value.delay}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                    <div className={`w-12 h-12 rounded-2xl ${value.color} opacity-20 mb-6`}></div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ModernCTA />
      </main>

      <Footer />
    </div>
  );
}
