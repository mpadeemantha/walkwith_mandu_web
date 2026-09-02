import React from "react";
import { Phone, Mail, MapPin, Globe, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* ── PLAN YOUR TRIP BANNER ── */}
      <div className="bg-[var(--color-brand-orange)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white">Ready to explore Sri Lanka?</h2>
            <p className="text-orange-100 text-sm mt-1">Let us craft your perfect journey from start to finish.</p>
          </div>
          <a
            href="/#contact"
            className="flex-shrink-0 flex items-center gap-2 bg-white text-[var(--color-brand-orange)] font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-all shadow-lg shadow-orange-900/30 text-base group"
          >
            Plan Your Trip
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* ── MAIN FOOTER BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Column 1: Brand ── */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div>
              <img src="/logowalk.png" alt="Walk With Mandu" className="h-30 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premium travel partner in Sri Lanka. Locally owned, globally trusted — crafting authentic island experiences since 2018.
            </p>

            {/* TripAdvisor badge */}
            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 px-4 py-3 rounded-2xl transition-all w-fit"
            >
              {/* TripAdvisor owl SVG */}
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#34e0a1">
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353l-1.03.686 1.017.704c.473.327.923.7 1.343 1.115A5.93 5.93 0 004.2 12c0 3.293 2.68 5.973 5.973 5.973.978 0 1.904-.238 2.717-.657l1.117.949 1.12-.95a5.916 5.916 0 002.7.658c3.293 0 5.973-2.68 5.973-5.973a5.94 5.94 0 00-1.48-3.894c.42-.415.877-.789 1.35-1.115l1.018-.704-1.03-.686A14.074 14.074 0 0012.006 4.295zM7.38 16.548A4.54 4.54 0 012.85 12a4.535 4.535 0 014.53-4.537A4.54 4.54 0 0111.91 12a4.54 4.54 0 01-4.53 4.548zm9.256 0A4.535 4.535 0 0112.1 12a4.535 4.535 0 014.536-4.537A4.535 4.535 0 0121.17 12a4.535 4.535 0 01-4.535 4.548zM7.38 9.27a2.728 2.728 0 100 5.455 2.728 2.728 0 000-5.456zm9.256 0a2.728 2.728 0 100 5.455 2.728 2.728 0 000-5.456z" />
              </svg>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Find us on</p>
                <p className="text-sm font-bold text-white">TripAdvisor</p>
              </div>
            </a>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Explore</h3>
            {[
              { label: "Home", href: "/" },
              { label: "Travel Packages", href: "/packages" },
              { label: "Experiences", href: "/#experiences" },
              { label: "About Us", href: "/#about" },
              { label: "News & Events", href: "/#news" },
              { label: "Contact", href: "/#contact" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-[var(--color-brand-orange)] text-sm transition-colors flex items-center gap-2 group"
              >
                <span className="w-0 group-hover:w-3 h-px bg-[var(--color-brand-orange)] transition-all duration-200 rounded-full" />
                {link.label}
              </a>
            ))}
          </div>

          {/* ── Column 3: Contact ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Get in Touch</h3>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
              <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-brand-orange)] shrink-0" />
              <span>Katukurunde Gedara, Kathaluwa,<br />Ahangama, Sri Lanka</span>
            </a>
            <a href="tel:+94776175241" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0" />
              +94 77 617 5241
            </a>
            <a href="tel:+94779230490" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0" />
              +94 77 923 0490
            </a>
            <a href="mailto:salani@walkwithmandu.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0" />
              salani@walkwithmandu.com
            </a>
            <a href="https://walkwithmandu.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
              <Globe className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0" />
              walkwithmandu.com
            </a>
          </div>

          {/* ── Column 4: Social ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Follow Us</h3>

            {/* Instagram */}
            <a href="https://instagram.com/walkwithmandu" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="w-9 h-9 rounded-xl bg-gray-800 group-hover:bg-pink-600 flex items-center justify-center transition-colors flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </span>
              @walkwithmandu
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/walkwithmandu" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="w-9 h-9 rounded-xl bg-gray-800 group-hover:bg-blue-600 flex items-center justify-center transition-colors flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </span>
              Walk With Mandu
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/94776175241" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="w-9 h-9 rounded-xl bg-gray-800 group-hover:bg-green-500 flex items-center justify-center transition-colors flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              Chat on WhatsApp
            </a>

            {/* TripAdvisor */}
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
              <span className="w-9 h-9 rounded-xl bg-gray-800 group-hover:bg-[#34e0a1] flex items-center justify-center transition-colors flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353l-1.03.686 1.017.704c.473.327.923.7 1.343 1.115A5.93 5.93 0 004.2 12c0 3.293 2.68 5.973 5.973 5.973.978 0 1.904-.238 2.717-.657l1.117.949 1.12-.95a5.916 5.916 0 002.7.658c3.293 0 5.973-2.68 5.973-5.973a5.94 5.94 0 00-1.48-3.894c.42-.415.877-.789 1.35-1.115l1.018-.704-1.03-.686A14.074 14.074 0 0012.006 4.295zM7.38 16.548A4.54 4.54 0 012.85 12a4.535 4.535 0 014.53-4.537A4.54 4.54 0 0111.91 12a4.54 4.54 0 01-4.53 4.548zm9.256 0A4.535 4.535 0 0112.1 12a4.535 4.535 0 014.536-4.537A4.535 4.535 0 0121.17 12a4.535 4.535 0 01-4.535 4.548zM7.38 9.27a2.728 2.728 0 100 5.455 2.728 2.728 0 000-5.456zm9.256 0a2.728 2.728 0 100 5.455 2.728 2.728 0 000-5.456z" />
                </svg>
              </span>
              TripAdvisor Reviews
            </a>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Walk With Mandu. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] inline-block" />
            <span>Sri Lanka Tourist Board Approved Tour Operator</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
