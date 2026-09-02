"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-gradient-to-b from-[var(--color-brand-orange)]/5 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-[400px] bg-gradient-to-t from-[#34e0a1]/5 to-transparent rounded-tr-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="reveal-fade" className="text-center mb-16 mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Get in <span className="text-[var(--color-brand-orange)]">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Have questions or ready to start planning your Sri Lankan adventure? Reach out to our local experts.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 bg-white p-6 sm:p-10 lg:p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100">
            
            {/* Contact Information (Left Col) */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-8">
                  
                  {/* Address */}
                  <ScrollReveal animation="reveal-up" delay={100} className="flex gap-5">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[var(--color-brand-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Our Location</h4>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        Walk With Mandu<br />
                        Katukurunde Gedara,<br />
                        Kathaluwa, Ahangama,<br />
                        Sri Lanka
                      </p>
                    </div>
                  </ScrollReveal>

                  {/* Phone */}
                  <ScrollReveal animation="reveal-up" delay={200} className="flex gap-5">
                    <div className="w-14 h-14 rounded-full bg-[#34e0a1]/10 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#00aa6c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+94776175241" className="text-gray-600 font-medium hover:text-[var(--color-brand-orange)] transition-colors inline-block mb-1">
                        +94 77 617 5241
                      </a>
                      <p className="text-sm text-gray-500">Available on WhatsApp</p>
                    </div>
                  </ScrollReveal>

                  {/* Email */}
                  <ScrollReveal animation="reveal-up" delay={300} className="flex gap-5">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:salani@walkwithmandu.com" className="text-gray-600 font-medium hover:text-blue-500 transition-colors">
                        salani@walkwithmandu.com
                      </a>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Map Section */}
              <ScrollReveal animation="reveal-up" delay={400} className="w-full h-64 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d15872.296316279147!2d80.366667!3d5.966667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13e4b7b204eb5%3A0x6b107e324ab248f2!2sAhangama%2C%20Sri%2C%20Lanka!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Walk With Mandu Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </ScrollReveal>
            </div>

            {/* Contact Form (Right Col) */}
            <ScrollReveal animation="reveal-up" delay={200} className="lg:col-span-3 bg-gray-50/50 p-6 sm:p-8 rounded-[2rem] border border-gray-100/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-white font-medium"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-white font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Phone Number (WhatsApp) *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-white font-medium"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700">Subject Inquiry *</label>
                    <select 
                      id="subject" 
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-white font-medium appearance-none"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="tour-package">Tour Packages</option>
                      <option value="custom-itinerary">Custom Itinerary</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Support</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 outline-none transition-all bg-white font-medium resize-y"
                    placeholder="Tell us about your dream trip to Sri Lanka..."
                  ></textarea>
                </div>

                {/* Status Message */}
                {submitStatus === "success" && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 font-medium flex items-center gap-3">
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Thank you! Your message has been sent successfully. We will get back to you soon.
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[var(--color-brand-orange)] text-white rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </ScrollReveal>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
