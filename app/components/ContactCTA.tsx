import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-[var(--color-brand-orange)] text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollReveal animation="reveal-up">
          <h2 className="text-4xl font-bold mb-6">Ready for your adventure?</h2>
          <p className="text-xl mb-10 text-orange-100">Contact us today to start planning your perfect Sri Lankan getaway.</p>
          <a href="mailto:salani@walkwithmandu.com" className="inline-block bg-white text-[var(--color-brand-orange)] font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            Email Us Now
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
