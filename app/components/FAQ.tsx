"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need a visa to visit Sri Lanka?",
    answer: "Yes, most travelers need a visa (ETA) to enter Sri Lanka. You can easily apply for an Electronic Travel Authorization online before your trip, which is typically valid for 30 days."
  },
  {
    question: "When is the best time to visit Sri Lanka?",
    answer: "Sri Lanka is a year-round destination! The best time depends on where you want to go. The West and South coasts are best from December to March, while the East coast is ideal from April to September."
  },
  {
    question: "Are your tours customizable?",
    answer: "Absolutely! All our packages serve as a starting point. We specialize in tailor-made itineraries, so we can adjust the destinations, accommodations, and activities to match your exact preferences and budget."
  },
  {
    question: "What language is spoken in Sri Lanka?",
    answer: "Sinhala and Tamil are the official languages, but English is widely spoken and understood across the country, especially in tourist areas, hotels, and by our guides."
  },
  {
    question: "Is it safe to travel in Sri Lanka?",
    answer: "Yes, Sri Lanka is generally very safe for tourists. Locals are known for their warm hospitality. Like any travel destination, it's always good to take standard precautions with your belongings."
  },
  {
    question: "What should I pack for my trip?",
    answer: "Pack light, breathable cotton or linen clothing for the tropical climate. Bring a light sweater for the hill country (like Nuwara Eliya), comfortable walking shoes, sunscreen, and modest clothing that covers shoulders and knees for visiting temples."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="reveal-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[var(--color-brand-orange)] font-bold tracking-wider uppercase text-sm mb-3">
              Got Questions?
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Frequently Asked <span className="text-[var(--color-brand-orange)]">Questions</span>
            </h3>
            <p className="text-lg text-gray-600">
              Everything you need to know before embarking on your Sri Lankan adventure with us.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal animation="reveal-up" delay={200}>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-gray-200 bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "ring-2 ring-[var(--color-brand-orange)]/20 shadow-md" : "hover:border-[var(--color-brand-orange)]/30 hover:shadow-sm"
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? "text-[var(--color-brand-orange)]" : "text-gray-800"}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === index ? "bg-[var(--color-brand-orange)] text-white rotate-180" : "bg-gray-100 text-gray-500"}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal animation="reveal-up" delay={400}>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-bold px-8 py-3 rounded-full shadow-md group transition-all hover:shadow-lg">
              Contact Us
              <svg className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
