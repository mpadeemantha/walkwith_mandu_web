import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Walk With Mandu | Premium Travel & Tours in Sri Lanka",
  description: "Experience the magic of Sri Lanka with Walk With Mandu. We offer bespoke travel packages for foreign travelers. Start your unforgettable journey today.",
  keywords: ["Sri Lanka travel", "Sri Lanka tours", "Walk With Mandu", "travel agency Sri Lanka", "Ahangama tours", "Kathaluwa", "bespoke travel Sri Lanka"],
  openGraph: {
    title: "Walk With Mandu | Premium Travel & Tours in Sri Lanka",
    description: "Experience the magic of Sri Lanka with Walk With Mandu. Bespoke travel packages tailored for you.",
    url: "https://walkwithmandu.com",
    siteName: "Walk With Mandu",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD for LocalBusiness / TravelAgency (GEO/AEO best practices)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Walk With Mandu",
  "image": "https://walkwithmandu.com/logo.png", // Assuming logo path
  "@id": "https://walkwithmandu.com",
  "url": "https://walkwithmandu.com",
  "telephone": "+94776175241",
  "email": "salani@walkwithmandu.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Katukurunde Gedara, Kathaluwa",
    "addressLocality": "Ahangama",
    "addressCountry": "LK"
  },
  "description": "Premium travel company in Sri Lanka offering customized tour packages for foreign travelers."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans antialiased`}>
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
