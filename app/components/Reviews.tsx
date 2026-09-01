"use client";

import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Emma W.",
    source: "TripAdvisor",
    date: "Dec 2025",
    text: "Salani and her team crafted the most incredible, authentic journey for us. We loved the focus on eco-friendly travel and visiting hidden gems away from the tourist crowds.",
  },
  {
    name: "Mark & Sarah",
    source: "Google",
    date: "Oct 2025",
    text: "Highly recommend Walk With Mandu! They organized our entire south coast trip including amazing surf lessons and a stay at a beautiful eco-lodge. True professionals.",
  },
  {
    name: "James T.",
    source: "TripAdvisor",
    date: "Aug 2025",
    text: "The best travel experience we've had in Asia. Their deep connections with the local communities made our trip unforgettable. 10/10 service.",
  }
];

const masonryImages = [
  "/1.jpg",
  "/4.jpeg",
  "/3.jpeg",
  "/2.jpeg",
];

const SourceBadge = ({ source }: { source: string }) => {
  if (source === "Google") {
    return (
      <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 border border-gray-200">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        Google
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 bg-[#34e0a1]/10 px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 border border-[#34e0a1]/30">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#000000]" fill="currentColor">
        <path d="M12.012 3C6.488 3 2 7.488 2 13.012c0 2.227.731 4.28 1.961 5.943l-1.353 3.518c-.147.382.203.731.584.584l3.518-1.353A9.972 9.972 0 0012.012 23c5.524 0 10.012-4.488 10.012-10.012C22.024 7.488 17.536 3 12.012 3zm0 18a7.962 7.962 0 01-4.086-1.127l-.234-.135-2.03.78.78-2.03-.135-.234A7.962 7.962 0 014.024 13.012C4.024 8.608 7.608 5.024 12.012 5.024S20 8.608 20 13.012 16.416 21 12.012 21z" />
        <circle cx="8.5" cy="13" r="2.5" fill="#34e0a1" />
        <circle cx="15.5" cy="13" r="2.5" fill="#34e0a1" />
      </svg>
      TripAdvisor
    </div>
  );
};

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <ScrollReveal animation="reveal-up" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Traveler <span className="text-[var(--color-brand-orange)]">Stories</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Real experiences from travelers who chose to walk with Mandu.
          </p>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Side: Masonry Images */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal animation="reveal-up">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <img src={masonryImages[0]} alt="Travelers" className="w-full h-48 md:h-64 object-cover rounded-3xl shadow-md transform hover:scale-[1.02] transition-transform" />
                  <img src={masonryImages[1]} alt="Travelers" className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-md transform hover:scale-[1.02] transition-transform" />
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <img src={masonryImages[2]} alt="Travelers" className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-md transform hover:scale-[1.02] transition-transform" />
                  <img src={masonryImages[3]} alt="Travelers" className="w-full h-48 md:h-64 object-cover rounded-3xl shadow-md transform hover:scale-[1.02] transition-transform" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side: Reviews Slider & Links */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 relative">
            <ScrollReveal animation="reveal-up" className="relative min-h-[380px]">
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ease-in-out ${
                    index === currentReview ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col min-h-[380px]">
                    {/* Header: Stars & Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <SourceBadge source={review.source} />
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 mb-8 italic leading-relaxed text-lg flex-grow">
                      "{review.text}"
                    </p>

                    {/* Footer: User Info */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-brand-orange)] flex items-center justify-center text-white font-bold text-xl shadow-md">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                        <p className="text-sm text-gray-500 font-medium">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollReveal>
            
            {/* Slider Dots */}
            <div className="flex justify-center lg:justify-start gap-2 mt-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview ? "bg-[var(--color-brand-orange)] w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            {/* External Links */}
            <ScrollReveal animation="reveal-up" className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-full font-bold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors bg-white hover:shadow-md">
                 <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                   <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                   <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                   <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                   <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                 </svg>
                 Read on Google
              </a>
              <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-full font-bold text-gray-700 hover:border-[#34e0a1] hover:text-[#00aa6c] transition-colors bg-white hover:shadow-md">
                 <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00aa6c]" fill="currentColor">
                   <path d="M12.012 3C6.488 3 2 7.488 2 13.012c0 2.227.731 4.28 1.961 5.943l-1.353 3.518c-.147.382.203.731.584.584l3.518-1.353A9.972 9.972 0 0012.012 23c5.524 0 10.012-4.488 10.012-10.012C22.024 7.488 17.536 3 12.012 3zm0 18a7.962 7.962 0 01-4.086-1.127l-.234-.135-2.03.78.78-2.03-.135-.234A7.962 7.962 0 014.024 13.012C4.024 8.608 7.608 5.024 12.012 5.024S20 8.608 20 13.012 16.416 21 12.012 21z"/>
                   <circle cx="8.5" cy="13" r="2.5" />
                   <circle cx="15.5" cy="13" r="2.5" />
                 </svg>
                 Read on TripAdvisor
              </a>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
