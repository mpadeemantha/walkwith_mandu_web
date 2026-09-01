"use client";

import { useEffect, useState, FormEvent } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after 7 seconds (no sound yet)
    const btnTimer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    // Show the tooltip and play the sound after 10 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);

      // Play a notification sound
      try {
        const audio = new Audio("https://cdn.freesound.org/previews/411/411089_5121236-lq.mp3");
        audio.play().catch(e => console.log("Audio auto-play prevented by browser policy", e));
      } catch (error) {
        console.error("Error playing audio", error);
      }

      // Auto-hide the persistent tooltip after 6 seconds (it will still show on hover)
      setTimeout(() => setShowTooltip(false), 6000);
    }, 10000);

    return () => {
      clearTimeout(btnTimer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Note: Here you would typically send the form data to your backend/API
    setIsSubmitted(true);
    setTimeout(() => {
      setIsFormOpen(false);
      setTimeout(() => setIsSubmitted(false), 300); // reset state after closing animation
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* The Form Popup */}
      <div
        className={`mb-4 w-[calc(100vw-3rem)] max-w-sm origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${isFormOpen ? "scale-100 opacity-100" : "pointer-events-none scale-0 opacity-0"
          }`}
      >
        <div className="flex items-center justify-between bg-orange-500 px-4 py-3 text-white">
          <h3 className="font-semibold">Quick Message</h3>
          <button onClick={() => setIsFormOpen(false)} className="rounded-full p-1 transition-colors hover:bg-blue-700">
            <X size={18} />
          </button>
        </div>

        <div className="p-4">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-900">Message Sent!</p>
              <p className="mt-1 text-sm text-gray-500">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <input required type="text" placeholder="Your Name" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div>
                <input required type="email" placeholder="Email Address" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div>
                <input required type="tel" placeholder="Contact Number" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div>
                <textarea required placeholder="How can we help you plan your trip?" rows={3} className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"></textarea>
              </div>
              <button type="submit" className="mt-1 w-full rounded-lg bg-orange-500 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Floating Button */}
      <div
        className={`relative ${!isFormOpen ? "group animate-bounce sm:animate-none" : ""}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          onClick={() => {
            setIsFormOpen(!isFormOpen);
            setShowTooltip(false); // Hide tooltip when clicked
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand-orange)] text-white shadow-lg shadow-[var(--color-brand-orange)]/30 transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
          aria-label={isFormOpen ? "Close chat" : "Open chat"}
        >
          {isFormOpen ? <X size={28} /> : <MessageCircle size={28} className="animate-pulse" />}
        </button>

        {/* Tooltip perfectly aligned to the left of the button */}
        {!isFormOpen && (
          <span
            className={`pointer-events-none absolute right-full top-1/2 mr-4 -translate-y-1/2 w-max origin-right rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300
              ${showTooltip ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          >
            Need help planning?

            {/* Little triangle pointer for the tooltip */}
            <div className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rotate-45 bg-gray-900"></div>
          </span>
        )}
      </div>
    </div>
  );
}
