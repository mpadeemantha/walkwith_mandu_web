import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollReveal from "../../components/ScrollReveal";

// This would normally come from a database or CMS based on the slug
const itineraryData = {
  "cultural-heritage": {
    title: "Cultural Heritage Tour",
    duration: "7 Days / 6 Nights",
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000",
    overview: "Explore the ancient kingdoms and majestic temples of Sri Lanka. Perfect for history buffs and culture enthusiasts.",
    days: [
      { 
        day: "Day 1", 
        title: "Arrival in Colombo & Transfer to Negombo", 
        details: "Welcome to Sri Lanka! Upon arrival at Bandaranaike International Airport, you will be greeted by your Walk With Mandu guide. We will transfer you to a beautiful beachfront hotel in Negombo to rest and recover from your flight. Enjoy a welcome dinner featuring fresh local seafood.",
        image: "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=1000" // Placeholder
      },
      { 
        day: "Day 2", 
        title: "Anuradhapura Ancient City", 
        details: "After breakfast, we travel to Anuradhapura, the first ancient capital of Sri Lanka. You will explore massive dagobas, crumbling palaces, and the sacred Sri Maha Bodhi tree, which is over 2,000 years old. Overnight stay in a culturally immersive boutique resort.",
        image: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=1000" // Placeholder
      },
      { 
        day: "Day 3", 
        title: "Polonnaruwa Ruins & Minneriya Safari", 
        details: "Morning cycling tour through the ancient ruins of Polonnaruwa, a UNESCO World Heritage site. In the afternoon, experience a thrilling jeep safari in Minneriya National Park, famous for 'The Gathering' of wild elephants.",
        image: "https://images.unsplash.com/photo-1589182372275-f86a9f656209?auto=format&fit=crop&q=80&w=1000" // Placeholder
      },
      { 
        day: "Day 4", 
        title: "Sigiriya Lion Rock", 
        details: "An early morning climb up the spectacular Sigiriya Rock Fortress before the heat sets in. In the afternoon, enjoy a traditional village tour and an authentic Sri Lankan cooking class where you'll learn to make classic curries.",
        image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=1000" // Placeholder
      },
      { 
        day: "Day 5", 
        title: "Dambulla Caves & Kandy", 
        details: "Visit the Dambulla Cave Temple, a massive cave complex filled with ancient Buddha statues and vibrant murals. Continue your journey to the hill capital, Kandy. In the evening, witness a mesmerizing Kandyan cultural dance performance.",
        image: "https://images.unsplash.com/photo-1546708973-c3150dbfd997?auto=format&fit=crop&q=80&w=1000" // Placeholder
      },
      { 
        day: "Day 6", 
        title: "Temple of the Tooth & Botanical Gardens", 
        details: "Pay your respects at the Temple of the Sacred Tooth Relic, Sri Lanka's most important Buddhist shrine. Spend a relaxing afternoon strolling through the Royal Botanical Gardens of Peradeniya, home to thousands of exotic plant species.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=1000" // Placeholder
      },
      { 
        day: "Day 7", 
        title: "Departure", 
        details: "Enjoy a final Sri Lankan breakfast before your private transfer to Bandaranaike International Airport for your onward journey, taking with you unforgettable memories.",
        image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=80&w=1000" // Placeholder
      }
    ]
  }
};

export default function ItineraryTemplate({ params }: { params: { slug: string } }) {
  // Normally we would fetch the data based on params.slug.
  // For this example, if the slug isn't found, we default to the cultural heritage tour.
  const tour = itineraryData[params.slug as keyof typeof itineraryData] || itineraryData["cultural-heritage"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow">
        {/* Dynamic Hero Header */}
        <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10"></div>
            <img
              src={tour.heroImage}
              alt={tour.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
            <ScrollReveal animation="reveal-up">
              <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-brand-orange)] text-white font-bold text-sm tracking-widest uppercase mb-6 shadow-lg">
                {tour.duration}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                {tour.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md font-light max-w-2xl mx-auto">
                {tour.overview}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Vertical Timeline Journey */}
        <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="reveal-up" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Journey</h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">Follow the path of your unforgettable Sri Lankan adventure.</p>
          </ScrollReveal>

          <div className="relative border-l-4 border-[var(--color-brand-orange)]/30 ml-4 md:ml-8 space-y-16 pb-12">
            {tour.days.map((day, index) => (
              <ScrollReveal key={index} animation="reveal-up" className="relative pl-8 md:pl-16">
                {/* Timeline Dot */}
                <div className="absolute w-6 h-6 bg-[var(--color-brand-orange)] rounded-full -left-[15px] top-6 shadow-md border-4 border-white"></div>
                
                {/* Day Content Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-2/5 h-64 md:h-auto relative">
                      <img src={day.image} alt={day.title} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-[var(--color-brand-orange)] text-white font-bold px-4 py-1.5 rounded-full text-sm shadow-md uppercase tracking-wide">
                        {day.day}
                      </div>
                    </div>
                    <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{day.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {day.details}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* End of Page CTA */}
        <section className="relative py-32 overflow-hidden">
           <div className="absolute inset-0 z-0 bg-[var(--color-brand-green)]">
             {/* Optional background texture or subtle image */}
           </div>
           <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
             <ScrollReveal animation="reveal-up">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience the {tour.title}?</h2>
               <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
                 Book this exact itinerary or let our experts customize it to perfectly match your travel style.
               </p>
               <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <a href="/#contact" className="bg-[var(--color-brand-orange)] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-orange-700 transition-colors shadow-2xl shadow-orange-900/50">
                   Book This Tour
                 </a>
                 <a href="/#contact" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[var(--color-brand-green)] transition-colors">
                   Customize It
                 </a>
               </div>
             </ScrollReveal>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
