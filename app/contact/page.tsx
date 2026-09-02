"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Send,
  Calendar,
  Users,
  Compass
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelStyle: "Custom Tailor-Made Tour",
    duration: "5–7 Days",
    travelers: "2 Adults (Couple)",
    estimatedDate: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate inquiry submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        travelStyle: "Custom Tailor-Made Tour",
        duration: "5–7 Days",
        travelers: "2 Adults (Couple)",
        estimatedDate: "",
        message: ""
      });
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }, 1200);
  };

  const defaultWhatsappMsg = encodeURIComponent(
    "Hi Mandu! I am planning a trip to Sri Lanka and would like to speak with a travel designer to create our itinerary."
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/70 text-gray-800">
      <Navbar />

      <main className="flex-grow">
        
        {/* ── CINEMATIC CONTACT HERO ── */}
        <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-gray-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/bbg3.png"
              alt="Sri Lanka landscape"
              className="w-full h-full object-cover opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/90" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <ScrollReveal animation="reveal-up">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                <span>We're Here For You 24/7</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5 leading-tight">
                Let's Craft Your Dream <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-amber-400">
                  Sri Lankan Adventure
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                Speak directly with our local travel designers. Whether you want to customize an existing route or design a 100% private bespoke vacation from scratch, we're ready to help.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-gray-300">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  SLTDA Approved Operator
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-brand-orange)]" />
                  Replies within 1 hour
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Free Itinerary Customization
                </span>
              </div>

            </ScrollReveal>
          </div>
        </section>

        {/* ── MAIN CONTACT SECTION ── */}
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* ── LEFT COLUMN: DIRECT CHANNELS & LOCATION (5 COLS) ── */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* 1. Direct Instant WhatsApp Card */}
                <div className="p-7 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/25 shadow-sm bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 block">
                        Instant Communication
                      </span>
                      <h2 className="text-lg font-bold text-gray-900">
                        Chat on WhatsApp
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                    For the fastest response, send us a direct message on WhatsApp. Mandu and our team are available 7 days a week to discuss dates and custom routes.
                  </p>

                  <a
                    href={`https://wa.me/94776175241?text=${defaultWhatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 rounded-2xl shadow-md transition-all text-sm active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat (+94 77 617 5241)</span>
                  </a>
                </div>

                {/* 2. Phone, Email & Physical Office */}
                <div className="p-7 rounded-3xl bg-white border border-gray-200/80 shadow-sm space-y-6">
                  <h3 className="text-lg font-bold text-gray-900 pb-3 border-b border-gray-100">
                    Contact Channels
                  </h3>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[var(--color-brand-orange)] flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Phone / Hotlines</p>
                      <a
                        href="tel:+94776175241"
                        className="text-sm font-bold text-gray-900 hover:text-[var(--color-brand-orange)] transition-colors block"
                      >
                        +94 77 617 5241
                      </a>
                      <p className="text-xs text-gray-500">Local & International calls welcome</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Direct Email</p>
                      <a
                        href="mailto:walkwithmandu@gmail.com"
                        className="text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors block"
                      >
                        walkwithmandu@gmail.com
                      </a>
                      <p className="text-xs text-gray-500">Inquiries answered in 1–2 hours</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-0.5">Headquarters</p>
                      <p className="text-sm font-bold text-gray-900">
                        Katukurunde Gedara, Kathaluwa
                      </p>
                      <p className="text-xs text-gray-500">
                        Ahangama, Galle District, Southern Province, Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. Interactive Map */}
                <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-64 bg-gray-100 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31744.59263255829!2d80.3556001!3d5.9680001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13e4b7b204eb5%3A0x6b107e324ab248f2!2sAhangama%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Walk With Mandu Location Ahangama"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full pointer-events-none">
                    Ahangama, South Coast
                  </div>
                </div>

              </div>

              {/* ── RIGHT COLUMN: INTERACTIVE TRIP PLANNER FORM (7 COLS) ── */}
              <div className="lg:col-span-7">
                <div className="p-7 sm:p-10 lg:p-12 rounded-3xl bg-white border border-gray-200/90 shadow-xl">
                  
                  <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)] block mb-1">
                      Bespoke Itinerary Request
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                      Tell Us About Your Trip
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      Fill out your preferences below. We will design a private, tailor-made itinerary and send a comprehensive proposal.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Emma Watson"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-gray-50/50 focus:bg-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="emma@example.com"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-gray-50/50 focus:bg-white"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone/WhatsApp & Travel Style */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 7123 456789"
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-gray-50/50 focus:bg-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="travelStyle" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                          Preferred Travel Style
                        </label>
                        <select
                          id="travelStyle"
                          name="travelStyle"
                          value={formData.travelStyle}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-gray-50/50 focus:bg-white"
                        >
                          <option value="Custom Tailor-Made Tour">Custom Tailor-Made Tour</option>
                          <option value="Cultural Heritage">Cultural Heritage & Ancient Cities</option>
                          <option value="South Coast Surf & Chill">South Coast Beach, Surf & Whales</option>
                          <option value="Wild Safari & Leopards">Wildlife Safari & National Parks</option>
                          <option value="Scenic Hill Country">Scenic Hill Country & Tea Trails</option>
                          <option value="Romantic Honeymoon">Romantic Couple / Honeymoon Tour</option>
                          <option value="Complete Island Explorer">Complete 14-Day Island Grand Tour</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Duration & Group Size */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="duration" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                          Estimated Duration
                        </label>
                        <select
                          id="duration"
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-gray-50/50 focus:bg-white"
                        >
                          <option value="1–4 Days">1–4 Days (Short Getaway)</option>
                          <option value="5–7 Days">5–7 Days (Classic Route)</option>
                          <option value="8–10 Days">8–10 Days (Deep Discovery)</option>
                          <option value="11–14 Days">11–14 Days (Comprehensive)</option>
                          <option value="15+ Days">15+ Days (Grand Tour)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="travelers" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                          Number of Travelers
                        </label>
                        <select
                          id="travelers"
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-gray-50/50 focus:bg-white"
                        >
                          <option value="Solo Traveler">Solo Traveler (1 Adult)</option>
                          <option value="2 Adults (Couple)">2 Adults (Couple / Friends)</option>
                          <option value="Family with Children">Family with Children</option>
                          <option value="Small Group (3–6)">Small Group (3–6 Adults)</option>
                          <option value="Large Group (7+)">Large Group (7+ Adults)</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Estimated Dates */}
                    <div className="space-y-1.5">
                      <label htmlFor="estimatedDate" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                        Approximate Travel Month or Dates (Optional)
                      </label>
                      <input
                        type="text"
                        id="estimatedDate"
                        name="estimatedDate"
                        value={formData.estimatedDate}
                        onChange={handleChange}
                        placeholder="e.g. November 2026 or Dec 15 - Dec 28"
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-gray-50/50 focus:bg-white"
                      />
                    </div>

                    {/* Row 5: Message & Special Requests */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                        Trip Notes & Special Requests *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you'd love to see: tea train in Ella, sunrise at Sigiriya, surf lessons in Ahangama, safari in Yala, or any hotel style preferences..."
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-gray-50/50 focus:bg-white resize-y"
                      />
                    </div>

                    {/* Status Feedback */}
                    {submitStatus === "success" && (
                      <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span>
                          Thank you! Your travel request has been received. Our team will prepare a custom proposal and reach out to you within a few hours.
                        </span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand-gradient text-white rounded-2xl font-bold text-sm sm:text-base shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-75 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Submitting Your Request...</span>
                      ) : (
                        <>
                          <span>Submit Custom Itinerary Request</span>
                          <svg
                            className="w-4 h-4 rotate-90 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-gray-400">
                      🔒 No payment required now · 100% Free Consultation · Private & Secure
                    </p>

                  </form>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
