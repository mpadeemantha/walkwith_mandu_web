"use client";

import React, { useState } from "react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const faqs = [
  {
    category: "Planning",
    question: "Do I need a visa (ETA) to visit Sri Lanka?",
    answer: "Yes, most foreign passport holders require an Electronic Travel Authorization (ETA) prior to arrival. You can conveniently apply online via the official Sri Lanka immigration portal. Visas are typically approved within 24 to 48 hours and grant a 30-day tourist stay with double entry."
  },
  {
    category: "Planning",
    question: "When is the best time of year to visit Sri Lanka?",
    answer: "Sri Lanka enjoys year-round tropical sunshine thanks to its dual monsoon system! The South and West coasts (Galle, Ahangama, Mirissa, Colombo) and the Central Highlands are prime from November to April. The East coast (Trincomalee, Arugam Bay, Pasikudah) is ideal from May to September."
  },
  {
    category: "Tours",
    question: "Are your tour itineraries 100% customizable?",
    answer: "Yes, absolutely! Every package listed on our website serves as inspiration. Because all our tours are 100% private, we can customize every day—from adjusting hotel categories (boutique heritage, eco-lodges, or luxury resorts) to tailoring travel pace, rest days, and special activities."
  },
  {
    category: "Safety",
    question: "What vehicle and driver guide will be assigned to us?",
    answer: "You will travel in a private, modern, air-conditioned vehicle (sedan car for couples, luxury van for families/groups) dedicated exclusively to your party. Your chauffeur is an officially licensed, English-speaking Sri Lanka Tourist Board registered guide with extensive local expertise."
  },
  {
    category: "Safety",
    question: "Is Sri Lanka safe for solo travelers and families?",
    answer: "Sri Lanka is recognized globally as one of the warmest, most welcoming travel destinations. As a proudly women-led tour agency, traveler safety, comfort, and respect are our top priorities. You have 24/7 direct WhatsApp concierge assistance from our team throughout your stay."
  },
  {
    category: "Booking",
    question: "How does booking and payment work?",
    answer: "Once you approve your tailor-made itinerary and quotation, we secure your boutique accommodations and private vehicle with a standard booking deposit. The remaining balance is payable closer to your arrival date. We offer transparent pricing with zero hidden booking charges."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-gray-50/70 border-t border-gray-200/80 overflow-hidden" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="reveal-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-[var(--color-brand-orange)] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
              <span>Got Questions?</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Frequently Asked <span className="text-[var(--color-brand-orange)]">Questions</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Everything you need to know about private chauffeured travel, visas, and island custom tours.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion Container */}
        <ScrollReveal animation="reveal-up" delay={150}>
          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-orange-400/70 shadow-md ring-1 ring-[var(--color-brand-orange)]/20"
                      : "border-gray-200/80 hover:border-gray-300 shadow-sm"
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none gap-4"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={`font-bold text-base sm:text-lg leading-snug transition-colors ${
                      isOpen ? "text-[var(--color-brand-orange)]" : "text-gray-900"
                    }`}>
                      {faq.question}
                    </span>
                    
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-gradient text-white rotate-180 shadow-sm"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Bottom Dual Action Box */}
        <ScrollReveal animation="reveal-up" delay={300}>
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Have a specific question about your dates?
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Our local travel designers are available 7 days a week for instant advice.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-brand-orange)] hover:underline px-3 py-2"
              >
                <span>Read Full FAQ Knowledge Base</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://wa.me/94776175241?text=Hi%20Mandu!%20I%20have%20a%20few%20questions%20about%20traveling%20to%20Sri%20Lanka."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
