"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function ReviewBadges() {
  return (
    <div className="flex justify-start w-full">
      <div className="w-full">
        <ScrollReveal animation="reveal-fade">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 ml-2 text-left">Also find us on</p>
          <div className="flex flex-col sm:flex-row gap-4 text-left">

            {/* TripAdvisor Card */}
            <a href="https://www.tripadvisor.com/Attraction_Review-g674590-d33238563-Reviews-WaygoTravels-Ahangama_Galle_District_Southern_Province.html" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#f9f9f9] border border-gray-200 rounded-xl p-4 sm:p-5 flex items-center justify-between hover:shadow-md transition-shadow group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#34e0a1] rounded-full flex items-center justify-center shrink-0">
                  <svg viewBox="0 -96 512.2 512.2" className="w-7 h-7 text-white" fill="currentColor">
                    <path d="M128.2 127.9C92.7 127.9 64 156.6 64 192c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1.1-35.4-28.6-64.1-64-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S174 166.7 174 192s-20.5 45.9-45.8 45.9z" />
                    <circle cx="128.4" cy="191.9" r="31.9" />
                    <path d="M384.2 127.9c-35.4 0-64.1 28.7-64.1 64.1 0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1 0-35.4-28.7-64.1-64.1-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S430 166.7 430 192s-20.5 45.9-45.8 45.9z" />
                    <circle cx="384.4" cy="191.9" r="31.9" />
                    <path d="M474.4 101.2l37.7-37.4h-76.4C392.9 29 321.8 0 255.9 0c-66 0-136.5 29-179.3 63.8H0l37.7 37.4C14.4 124.4 0 156.5 0 192c0 70.8 57.4 128.2 128.2 128.2 32.5 0 62.2-12.1 84.8-32.1l43.4 31.9 42.9-31.2-.5-1.2c22.7 20.2 52.5 32.5 85.3 32.5 70.8 0 128.2-57.4 128.2-128.2-.1-35.4-14.6-67.5-37.9-90.7zM368 64.8c-60.7 7.6-108.3 57.6-111.9 119.5-3.7-62-51.4-112.1-112.3-119.5 30.6-22 69.6-32.8 112.1-32.8S337.4 42.8 368 64.8zM128.2 288.2C75 288.2 32 245.1 32 192s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2zm256 0c-53.1 0-96.2-43.1-96.2-96.2s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Tripadvisor</h3>
                  <div className="flex items-end gap-2 mb-0.5">
                    <span className="text-xl font-bold text-gray-900 leading-none">5.0</span>
                    <div className="flex text-[#f2b203] mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8" fill="currentColor" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium">284 reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-2">

                <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            {/* Google Maps Card */}
            <a href="https://share.google/a6TB1hhfl5qQRhknb" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#f9f9f9] border border-gray-200 rounded-xl p-4 sm:p-5 flex items-center justify-between hover:shadow-md transition-shadow group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Google Maps</h3>
                  <div className="flex items-end gap-2 mb-0.5">
                    <span className="text-xl font-bold text-gray-900 leading-none">4.9</span>
                    <div className="flex text-[#FBBC05] mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 font-medium">197 reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-2">

                <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
