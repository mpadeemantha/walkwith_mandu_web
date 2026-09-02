"use client";

import { useEffect, useState, FormEvent } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after 3 seconds
    const btnTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Show tooltip briefly after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 5000);

    return () => {
      clearTimeout(btnTimer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setTimeout(() => setIsSubmitted(false), 300);
    }, 2500);
  };

  if (!isVisible) return null;

  return (
    /* pointer-events-none on wrapper ensures NO clicks on the website are ever blocked */
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* The Form Popup */}
      <div
        className={`mb-4 w-[calc(100vw-3rem)] max-w-sm origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          isFormOpen
            ? "scale-100 opacity-100 pointer-events-auto block"
            : "scale-0 opacity-0 pointer-events-none invisible pointer-events-none hidden"
        }`}
      >
        <div className="flex items-center justify-between bg-[var(--color-brand-orange)] px-4 py-3 text-white">
          <h3 className="font-semibold text-sm">Quick Message to Mandu</h3>
          <button
            onClick={() => setIsFormOpen(false)}
            className="rounded-full p-1 transition-colors hover:bg-black/20 focus:outline-none"
            aria-label="Close message form"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-4">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-base font-bold text-gray-900">Message Received!</p>
              <p className="mt-1 text-xs text-gray-500">We'll respond to your inquiry shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-[var(--color-brand-orange)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-orange)]"
                />
              </div>
              <div>
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-[var(--color-brand-orange)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-orange)]"
                />
              </div>
              <div>
                <input
                  required
                  type="tel"
                  placeholder="WhatsApp or Phone Number"
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-[var(--color-brand-orange)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-orange)]"
                />
              </div>
              <div>
                <textarea
                  required
                  placeholder="How can we help plan your Sri Lanka trip?"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-[var(--color-brand-orange)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-orange)]"
                />
              </div>
              <button
                type="submit"
                className="mt-1 w-full rounded-xl bg-brand-gradient py-2.5 text-sm font-bold text-white shadow-md transition-all hover:opacity-95 active:scale-[0.98]"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Floating Button (pointer-events-auto ONLY on this element) */}
      <div
        className={`pointer-events-auto relative ${!isFormOpen ? "group" : ""}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          onClick={() => {
            setIsFormOpen(!isFormOpen);
            setShowTooltip(false);
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand-orange)] text-white shadow-xl shadow-[var(--color-brand-orange)]/30 transition-transform duration-300 hover:scale-110 active:scale-95"
          aria-label={isFormOpen ? "Close chat" : "Open chat with Mandu"}
        >
          {isFormOpen ? <X size={26} /> : <MessageCircle size={26} />}
        </button>

        {/* Tooltip */}
        {!isFormOpen && (
          <span
            className={`pointer-events-none absolute right-full top-1/2 mr-3.5 -translate-y-1/2 w-max origin-right rounded-xl bg-gray-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 ${
              showTooltip ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            Need help planning?
            <div className="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rotate-45 bg-gray-900" />
          </span>
        )}
      </div>
    </div>
  );
}
