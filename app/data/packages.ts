// ─────────────────────────────────────────────────────────────────────────────
// packages.ts  —  Single source of truth for all Walk With Mandu tour packages
// Edit this file to add / update / remove packages. Both the /packages listing
// page and each /itineraries/[slug] detail page read from here automatically.
// ─────────────────────────────────────────────────────────────────────────────

export interface DayItem {
  day: string;
  title: string;
  details: string;
  image: string;
  location: string;
  meals: string;
}

export interface TourPackage {
  // ── Listing page fields ──────────────────────────────────────────
  id: number;
  slug: string;
  title: string;
  category: string;
  duration: string;        // e.g. "7 Days"
  durationDays: number;    // numeric — used for duration filter
  nights: string;          // e.g. "6 Nights"
  price: string;           // e.g. "From $1,250"
  priceNote: string;       // e.g. "per person, twin share"
  rating: number;
  reviewCount: number;
  groupSize: string;
  badge: string | null;    // "Best Seller" | "Popular" | null etc.

  // ── Images ──────────────────────────────────────────────────────
  image: string;           // card thumbnail
  heroImage: string;       // full-bleed hero on detail page

  // ── Detail page fields ───────────────────────────────────────────
  style: string;           // e.g. "In-depth Cultural"
  physicalRating: string;  // e.g. "Moderate"
  destinations: string[];  // ordered route
  description: string;     // short card blurb
  overview: string;        // longer detail-page overview paragraph
  highlights: string[];    // key experience bullet points
  included: string[];
  notIncluded: string[];
  days: DayItem[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Package data
// ─────────────────────────────────────────────────────────────────────────────

export const allPackages: TourPackage[] = [
  // ── 1. Cultural Heritage ─────────────────────────────────────────────────
  {
    id: 1,
    slug: "cultural-heritage",
    title: "Cultural Heritage Tour",
    category: "Cultural",
    duration: "7 Days",
    durationDays: 7,
    nights: "6 Nights",
    price: "From $1,250",
    priceNote: "per person, twin share",
    rating: 4.9,
    reviewCount: 87,
    groupSize: "Private",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000",
    style: "In-depth Cultural",
    physicalRating: "Moderate",
    destinations: ["Colombo", "Anuradhapura", "Sigiriya", "Polonnaruwa", "Dambulla", "Kandy"],
    description: "Explore ancient cities, majestic temples, and the world-famous Sigiriya Rock Fortress on this in-depth heritage journey.",
    overview:
      "Delve into the heart of Sri Lanka's ancient civilisations. Over 7 immersive days, you will walk among towering dagobas, climb fortress rocks etched with royal frescoes, and cycle through ruins that once housed entire kingdoms. This tour is crafted for curious minds who want to feel history, not just photograph it.",
    highlights: [
      "Explore the ancient ruins of Polonnaruwa & Anuradhapura on bicycle",
      "Climb the iconic Sigiriya Lion Rock at golden hour",
      "Discover the 2,000-year-old Sri Maha Bodhi sacred fig tree",
      "Tour the Dambulla Cave Temple with a private guide",
      "Witness a traditional Kandyan cultural dance performance",
      "Stay in heritage boutique properties along the route",
    ],
    included: [
      "All accommodation in 4/5-star boutique hotels",
      "Daily breakfast and selected dinners",
      "Private air-conditioned vehicle & English-speaking guide",
      "All entrance fees to historical sites",
      "Bicycle hire at Polonnaruwa",
      "Bottled water & welcome refreshments during travel",
    ],
    notIncluded: [
      "International flights and visa fees",
      "Travel insurance (mandatory)",
      "Lunches and dinners not explicitly listed",
      "Camera/video permits at heritage sites",
      "Gratuities for guide, driver, and hotel staff",
    ],
    days: [
      {
        day: "Day 1",
        title: "Arrival in Colombo",
        details:
          "Welcome to Sri Lanka! Your private chauffeur meets you at Bandaranaike International Airport and transfers you to a beautifully appointed city hotel. This evening is yours to relax and enjoy a welcome dinner by the pool.",
        image: "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=1000",
        location: "Colombo",
        meals: "Dinner",
      },
      {
        day: "Day 2",
        title: "Anuradhapura — The First Capital",
        details:
          "Journey north to Anuradhapura, Sri Lanka's first ancient capital. Explore towering dagobas, the sacred Sri Maha Bodhi tree, and crumbling palace ruins. Overnight in a culturally immersive boutique resort.",
        image: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=1000",
        location: "Anuradhapura",
        meals: "Breakfast",
      },
      {
        day: "Day 3",
        title: "Sigiriya Lion Rock",
        details:
          "Rise before dawn to climb the spectacular Sigiriya Rock Fortress before the heat sets in. Admire the ancient frescoes and panoramic jungle views from the summit. Afternoon: traditional village tour and Sri Lankan cooking class.",
        image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=1000",
        location: "Sigiriya",
        meals: "Breakfast, Lunch",
      },
      {
        day: "Day 4",
        title: "Polonnaruwa's Living History",
        details:
          "Cycle through the sprawling ruins of Polonnaruwa, Sri Lanka's second ancient capital. Visit the serene Gal Vihara rock temple, then enjoy a relaxing sunset boat ride across Parakrama Samudra reservoir.",
        image: "https://images.unsplash.com/photo-1589182372275-f86a9f656209?auto=format&fit=crop&q=80&w=1000",
        location: "Polonnaruwa",
        meals: "Breakfast",
      },
      {
        day: "Day 5",
        title: "Dambulla Cave Temple",
        details:
          "Visit the magnificent Dambulla Cave Temple, a UNESCO World Heritage site draped in ancient frescoes and gilded Buddha statues. Late afternoon drive south toward Kandy through scenic countryside.",
        image: "https://images.unsplash.com/photo-1546708973-c3150dbfd997?auto=format&fit=crop&q=80&w=1000",
        location: "Dambulla",
        meals: "Breakfast",
      },
      {
        day: "Day 6",
        title: "Sacred Kandy",
        details:
          "Arrive in Kandy, the last royal capital. Visit the Temple of the Sacred Tooth Relic and the Royal Botanical Gardens of Peradeniya. In the evening, watch a vibrant Kandyan cultural dance performance.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=1000",
        location: "Kandy",
        meals: "Breakfast, Dinner",
      },
      {
        day: "Day 7",
        title: "Departure",
        details:
          "Enjoy a final Sri Lankan breakfast before your private transfer to Bandaranaike International Airport. Depart with unforgettable memories of a timeless civilisation.",
        image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=80&w=1000",
        location: "Colombo",
        meals: "Breakfast",
      },
    ],
  },

  // ── 2. South Coast Surf & Chill ──────────────────────────────────────────
  {
    id: 2,
    slug: "south-coast-surf-chill",
    title: "South Coast Surf & Chill",
    category: "Beach",
    duration: "5 Days",
    durationDays: 5,
    nights: "4 Nights",
    price: "From $890",
    priceNote: "per person, twin share",
    rating: 4.8,
    reviewCount: 63,
    groupSize: "Private",
    badge: null,
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=2000",
    style: "Beach & Surf",
    physicalRating: "Easy",
    destinations: ["Colombo", "Galle Fort", "Ahangama", "Mirissa"],
    description: "Sun, sea, and world-class surf. Relax on pristine beaches in Ahangama and Mirissa with local guides.",
    overview:
      "The south coast of Sri Lanka is a world-class destination for surf, sunsets, and soulful beach living. From the colonial cobblestones of Galle Fort to the legendary right-hand points of Ahangama and the whale-watching bay of Mirissa, this 5-day escape is everything you need to unwind.",
    highlights: [
      "Surf lessons with expert local instructors at Ahangama Point",
      "Explore the UNESCO-listed Galle Fort on foot",
      "Whale & dolphin watching cruise from Mirissa harbour",
      "Fresh seafood dinners at oceanfront restaurants",
      "Sunset yoga session on the beach",
      "Visit a sea turtle conservation project",
    ],
    included: [
      "4 nights accommodation in beachfront eco-lodges",
      "Daily breakfast",
      "Private transfer from Colombo airport to south coast",
      "Surf lessons and surfboard hire (2 sessions)",
      "Whale watching boat trip (seasonal)",
      "Bottled water during travel",
    ],
    notIncluded: [
      "International flights and visa fees",
      "Travel insurance (mandatory)",
      "Lunches and dinners (except where noted)",
      "Wetsuit hire",
      "Gratuities",
    ],
    days: [
      {
        day: "Day 1",
        title: "Arrival & Galle Fort",
        details:
          "Arrive in Colombo and transfer directly to the south coast. Check into your beachfront lodge, then take an evening stroll through the atmospheric streets of UNESCO-listed Galle Fort. Dinner at a rooftop restaurant overlooking the ramparts.",
        image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=1000",
        location: "Galle",
        meals: "Dinner",
      },
      {
        day: "Day 2",
        title: "First Surf at Ahangama",
        details:
          "After breakfast, head to Ahangama's famous point break for your first surf lesson with our resident instructor. Afternoon free to explore the beach strip, visit local cafés, and watch the fishing boats come in.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=1000",
        location: "Ahangama",
        meals: "Breakfast",
      },
      {
        day: "Day 3",
        title: "Surf & Turtle Conservation",
        details:
          "Morning surf session, then an afternoon visit to a local sea turtle conservation and hatchery project. Learn about the five species of turtle that nest on Sri Lanka's coast and, if the timing is right, help release hatchlings into the sea.",
        image: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=1000",
        location: "Ahangama",
        meals: "Breakfast",
      },
      {
        day: "Day 4",
        title: "Mirissa & Whale Watching",
        details:
          "Transfer to Mirissa for an early-morning whale and dolphin watching cruise. Blue whales, sperm whales, and spinner dolphins are commonly sighted. Afternoon at leisure on Mirissa beach — one of Sri Lanka's most beautiful.",
        image: "https://images.unsplash.com/photo-1549471013-3364d7220b75?auto=format&fit=crop&q=80&w=1000",
        location: "Mirissa",
        meals: "Breakfast",
      },
      {
        day: "Day 5",
        title: "Sunrise & Departure",
        details:
          "Wake for a final sunrise yoga session on the beach. After a leisurely breakfast, your driver transfers you back to Colombo airport for your onward journey — tanned, rested, and full of stories.",
        image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=80&w=1000",
        location: "Colombo",
        meals: "Breakfast",
      },
    ],
  },

  // ── 3. Complete Island Tour ───────────────────────────────────────────────
  {
    id: 3,
    slug: "complete-island-tour",
    title: "The Complete Island Tour",
    category: "Adventure",
    duration: "10 Days",
    durationDays: 10,
    nights: "9 Nights",
    price: "From $2,100",
    priceNote: "per person, twin share",
    rating: 5.0,
    reviewCount: 41,
    groupSize: "Private",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=2000",
    style: "All-Island Explorer",
    physicalRating: "Moderate",
    destinations: ["Colombo", "Sigiriya", "Kandy", "Ella", "Yala", "Galle"],
    description: "From the cultural triangle to the misty hills of Ella, and down to the stunning southern coast.",
    overview:
      "Sri Lanka in its entirety — from the ancient rock fortresses of the north to the surf-pounded shores of the south. This 10-day grand tour covers every highlight you've ever dreamed of: culture, wildlife, mountains, beaches, and everything in between. The perfect introduction to the island.",
    highlights: [
      "Climb Sigiriya Lion Rock fortress for sunrise views",
      "Ride the iconic Kandy-to-Ella scenic train",
      "Hike to Little Adam's Peak and Nine Arches Bridge in Ella",
      "Private jeep safari in Yala National Park for leopards",
      "Explore Galle Fort and relax on the south coast",
      "Authentic village experiences and home-cooked meals",
    ],
    included: [
      "All 9 nights in boutique hotels and eco-lodges",
      "Daily breakfast and 4 selected dinners",
      "Private air-conditioned vehicle & English-speaking guide",
      "All entrance fees (sites and national parks)",
      "Yala jeep safari",
      "Train tickets Kandy to Ella",
      "Bottled water throughout",
    ],
    notIncluded: [
      "International flights and visa fees",
      "Travel insurance (mandatory)",
      "Lunches and non-listed dinners",
      "Camera permits",
      "Gratuities",
    ],
    days: [
      {
        day: "Day 1",
        title: "Arrival in Colombo",
        details: "Land in Colombo and transfer to your boutique city hotel. Enjoy a welcome dinner and briefing from your guide for the adventure ahead.",
        image: "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=1000",
        location: "Colombo",
        meals: "Dinner",
      },
      {
        day: "Day 2",
        title: "Sigiriya Lion Rock",
        details: "Early morning climb of Sigiriya Rock Fortress — a stunning 5th-century citadel rising 200m from the jungle floor. Afternoon visit to Pidurangala Rock for the best views of Sigiriya itself.",
        image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=1000",
        location: "Sigiriya",
        meals: "Breakfast",
      },
      {
        day: "Day 3",
        title: "Polonnaruwa & Onwards to Kandy",
        details: "Morning cycle through Polonnaruwa ruins, then an afternoon drive south to Kandy through spice gardens and lush countryside.",
        image: "https://images.unsplash.com/photo-1589182372275-f86a9f656209?auto=format&fit=crop&q=80&w=1000",
        location: "Kandy",
        meals: "Breakfast, Dinner",
      },
      {
        day: "Day 4",
        title: "Kandy to Ella by Scenic Train",
        details: "Board the famous blue train from Kandy station. Wind through emerald tea estates, over tall viaducts, and through misty tunnels — 7 hours of the world's most spectacular rail journey.",
        image: "https://images.unsplash.com/photo-1546708973-c3150dbfd997?auto=format&fit=crop&q=80&w=1000",
        location: "Ella",
        meals: "Breakfast",
      },
      {
        day: "Day 5",
        title: "Hiking in Ella",
        details: "Hike to Little Adam's Peak for sunrise, then visit the iconic Nine Arches Bridge. Afternoon at leisure to explore Ella's charming cafés and viewpoints.",
        image: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=1000",
        location: "Ella",
        meals: "Breakfast",
      },
      {
        day: "Day 6",
        title: "Drive to Yala",
        details: "Scenic drive down to Yala through Wellawaya. Check into a tented safari camp at the edge of the national park. Sundowner game drive at dusk.",
        image: "https://images.unsplash.com/photo-1549471013-3364d7220b75?auto=format&fit=crop&q=80&w=1000",
        location: "Yala",
        meals: "Breakfast, Dinner",
      },
      {
        day: "Day 7",
        title: "Yala Safari",
        details: "Full-day private jeep safari in Yala National Park — home to the highest density of leopards in the world, plus elephants, sloth bears, crocodiles, and over 200 bird species.",
        image: "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=1000",
        location: "Yala",
        meals: "Breakfast",
      },
      {
        day: "Day 8",
        title: "Galle Fort",
        details: "Transfer to the south coast. Afternoon walking tour of UNESCO-listed Galle Fort — browse the galleries, jewellers, and cafés inside its Dutch colonial walls. Sunset from the ramparts.",
        image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=1000",
        location: "Galle",
        meals: "Breakfast",
      },
      {
        day: "Day 9",
        title: "Beach Day at Mirissa",
        details: "A full, free day on the golden sands of Mirissa. Swim, snorkel, kayak, or simply read under a palm tree. Seafood dinner at a beachfront restaurant.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=1000",
        location: "Mirissa",
        meals: "Breakfast, Dinner",
      },
      {
        day: "Day 10",
        title: "Departure",
        details: "Final breakfast, then transfer to Colombo Bandaranaike International Airport. Farewell, Sri Lanka — until next time.",
        image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=80&w=1000",
        location: "Colombo",
        meals: "Breakfast",
      },
    ],
  },

  // ── 4. Wildlife Safari Adventure ─────────────────────────────────────────
  {
    id: 4,
    slug: "wildlife-safari",
    title: "Wildlife Safari Adventure",
    category: "Wildlife",
    duration: "4 Days",
    durationDays: 4,
    nights: "3 Nights",
    price: "From $750",
    priceNote: "per person, twin share",
    rating: 4.9,
    reviewCount: 52,
    groupSize: "Private",
    badge: null,
    image: "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=2000",
    style: "Wildlife & Nature",
    physicalRating: "Easy",
    destinations: ["Colombo", "Udawalawe", "Yala", "Bundala"],
    description: "Get up close with leopards, elephants, and exotic birds in Sri Lanka's most iconic national parks.",
    overview:
      "Sri Lanka punches well above its weight in wildlife. For such a small island, it harbours leopards, elephants, sloth bears, blue whales, and thousands of bird species. This 4-day safari covers the island's most productive wildlife parks in one efficient, exhilarating circuit — all in a private jeep with an expert naturalist guide.",
    highlights: [
      "Private jeep safari in Yala — highest leopard density in the world",
      "Elephant transit home visit at Udawalawe",
      "Birdwatching at Bundala Ramsar Wetlands",
      "Expert naturalist guide throughout all safaris",
      "Tented safari camp accommodation at the park edge",
      "Sundowner game drives at golden hour",
    ],
    included: [
      "3 nights in safari lodges and tented camps",
      "Daily breakfast and all dinners at camp",
      "Private jeep and naturalist driver/guide for all safaris",
      "All national park entrance fees",
      "Elephant Transit Home entry fee",
      "Bottled water during safaris",
    ],
    notIncluded: [
      "International flights and visa fees",
      "Travel insurance (mandatory)",
      "Lunches",
      "Gratuities",
      "Alcoholic beverages",
    ],
    days: [
      {
        day: "Day 1",
        title: "Arrival & Udawalawe Elephants",
        details: "Transfer from Colombo to Udawalawe National Park. Afternoon game drive in the park, famous for its large herds of wild elephants. Visit the Elephant Transit Home rehabilitation project. Overnight in a safari lodge.",
        image: "https://images.unsplash.com/photo-1549471013-3364d7220b75?auto=format&fit=crop&q=80&w=1000",
        location: "Udawalawe",
        meals: "Dinner",
      },
      {
        day: "Day 2",
        title: "Full Day Udawalawe",
        details: "Full-day private jeep safari through Udawalawe. Beyond elephants, look for water buffalo, crocodiles, painted storks, and the elusive leopard. Evening campfire at the lodge.",
        image: "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=1000",
        location: "Udawalawe",
        meals: "Breakfast, Dinner",
      },
      {
        day: "Day 3",
        title: "Transfer to Yala",
        details: "Morning drive to Yala National Park, Sri Lanka's most famous wildlife reserve. Afternoon game drive hunting for leopards, sloth bears, and crocodiles. Sundowner on the rock overlooking the ocean.",
        image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=1000",
        location: "Yala",
        meals: "Breakfast, Dinner",
      },
      {
        day: "Day 4",
        title: "Yala & Bundala, Departure",
        details: "Early-morning game drive in Yala at sunrise — the best time for leopard sightings. Then stop at Bundala National Park, a Ramsar-listed wetland and birding paradise, before transferring back to Colombo.",
        image: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=1000",
        location: "Bundala",
        meals: "Breakfast",
      },
    ],
  },

  // ── 5. Tea Country Retreat ───────────────────────────────────────────────
  {
    id: 5,
    slug: "tea-country-retreat",
    title: "Tea Country Retreat",
    category: "Cultural",
    duration: "3 Days",
    durationDays: 3,
    nights: "2 Nights",
    price: "From $590",
    priceNote: "per person, twin share",
    rating: 4.7,
    reviewCount: 38,
    groupSize: "Private",
    badge: null,
    image: "https://images.unsplash.com/photo-1589182372275-f86a9f656209?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1589182372275-f86a9f656209?auto=format&fit=crop&q=80&w=2000",
    style: "Relaxation & Culture",
    physicalRating: "Easy",
    destinations: ["Kandy", "Nuwara Eliya", "Ella"],
    description: "Escape to the cool, misty mountains of Nuwara Eliya and enjoy world-class Ceylon tea by the plantation.",
    overview:
      "The hill country of Sri Lanka is another world — cool mountain air, endless rolling green, and the intoxicating scent of fresh tea leaves. This short retreat is perfect for unwinding after a busy city stay or as a standalone escape. You'll ride the scenic train, tour a working tea factory, and sip perfect cups of Ceylon tea while watching clouds drift over the estate.",
    highlights: [
      "Scenic train journey from Kandy through tea estates",
      "Guided tour of a working tea factory — leaf to cup",
      "Walk through Nuwara Eliya's colonial hill town",
      "Visit Horton Plains National Park (optional add-on)",
      "Spectacular viewpoints over Ella Gap",
      "Stay in a colonial-era tea estate bungalow",
    ],
    included: [
      "2 nights accommodation in a heritage tea estate bungalow",
      "Daily breakfast and one afternoon tea tasting",
      "Private transfer from Kandy",
      "Tea factory guided tour",
      "All transfers between destinations",
      "Bottled water during travel",
    ],
    notIncluded: [
      "International flights and visa fees",
      "Travel insurance",
      "Train tickets (available to purchase on arrival)",
      "Lunches and dinners (except afternoon tea)",
      "Gratuities",
    ],
    days: [
      {
        day: "Day 1",
        title: "Kandy to Nuwara Eliya by Train",
        details: "Board the scenic train from Kandy station. Watch the landscape transform from lowland jungle to emerald tea estates and misty mountain peaks. Arrive in Nuwara Eliya and check into your colonial tea estate bungalow. Afternoon walk through the estate.",
        image: "https://images.unsplash.com/photo-1546708973-c3150dbfd997?auto=format&fit=crop&q=80&w=1000",
        location: "Nuwara Eliya",
        meals: "Afternoon Tea",
      },
      {
        day: "Day 2",
        title: "Tea Factory & Town",
        details: "Morning guided tour of a working tea factory — from plucking to packing. Afternoon stroll through Nuwara Eliya town, visiting Gregory Lake, the colonial post office, and the famous Victoria Park. Sundowner tea tasting on the bungalow veranda.",
        image: "https://images.unsplash.com/photo-1589182372275-f86a9f656209?auto=format&fit=crop&q=80&w=1000",
        location: "Nuwara Eliya",
        meals: "Breakfast",
      },
      {
        day: "Day 3",
        title: "Ella Views & Departure",
        details: "Morning drive along the mountain ridge to Ella, stopping at the famous Ella Gap viewpoint for sweeping views across the southern plains. Brief stop at Nine Arches Bridge before your transfer back to Colombo or Galle.",
        image: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=1000",
        location: "Ella",
        meals: "Breakfast",
      },
    ],
  },

  // ── 6. East Coast Explorer ───────────────────────────────────────────────
  {
    id: 6,
    slug: "east-coast-explorer",
    title: "East Coast Explorer",
    category: "Beach",
    duration: "6 Days",
    durationDays: 6,
    nights: "5 Nights",
    price: "From $1,050",
    priceNote: "per person, twin share",
    rating: 4.8,
    reviewCount: 29,
    groupSize: "Private",
    badge: "Hidden Gem",
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=800",
    heroImage: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=2000",
    style: "Off the Beaten Track",
    physicalRating: "Easy",
    destinations: ["Colombo", "Trincomalee", "Pigeon Island", "Arugam Bay"],
    description: "Discover the untouched beauty of Trincomalee and Arugam Bay on the less-traveled eastern coast.",
    overview:
      "While Sri Lanka's south coast grabs the headlines, the east coast remains gloriously undiscovered. Crystal-clear turquoise water, world-class surf, ancient Hindu temples, and deserted beaches await those who make the journey. Best visited from May to October when the east coast's best weather coincides perfectly with the island's surf season.",
    highlights: [
      "Snorkelling at Pigeon Island — one of Sri Lanka's finest marine reserves",
      "Surf the legendary right-handers at Arugam Bay",
      "Visit the Koneswaram Temple perched on Swami Rock, Trincomalee",
      "Whale & dolphin watching from Trincomalee harbour",
      "Explore remote beaches accessible only by boat",
      "Sunset at Elephant Rock, Arugam Bay",
    ],
    included: [
      "5 nights in boutique and surf lodges",
      "Daily breakfast",
      "Private transfer from Colombo to east coast",
      "Pigeon Island snorkelling trip (equipment included)",
      "Temple tours with a local guide",
      "Bottled water during travel",
    ],
    notIncluded: [
      "International flights and visa fees",
      "Travel insurance (mandatory)",
      "Surf lessons and board hire",
      "Lunches and dinners",
      "Gratuities",
    ],
    days: [
      {
        day: "Day 1",
        title: "Arrival in Trincomalee",
        details: "Long but scenic drive from Colombo to Trincomalee, Sri Lanka's natural harbour city. Check into your harbour-view hotel. Evening visit to the dramatic Koneswaram Temple perched on Swami Rock above the ocean.",
        image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=1000",
        location: "Trincomalee",
        meals: "Dinner",
      },
      {
        day: "Day 2",
        title: "Pigeon Island Snorkelling",
        details: "Morning boat trip to Pigeon Island National Park — one of the only true coral reef ecosystems in Sri Lanka. Snorkel among reef sharks, turtles, and technicolour fish. Afternoon at leisure on the beach.",
        image: "https://images.unsplash.com/photo-1549471013-3364d7220b75?auto=format&fit=crop&q=80&w=1000",
        location: "Trincomalee",
        meals: "Breakfast",
      },
      {
        day: "Day 3",
        title: "Whale Watching",
        details: "Early-morning whale and dolphin watching cruise from Trincomalee harbour. The waters off the east coast are rich in blue whales, sperm whales, and spinner dolphins. Afternoon transfer down the coast road towards Arugam Bay.",
        image: "https://images.unsplash.com/photo-1588615419958-3dc17bf57ea6?auto=format&fit=crop&q=80&w=1000",
        location: "Arugam Bay",
        meals: "Breakfast",
      },
      {
        day: "Day 4",
        title: "Arugam Bay Surf",
        details: "Arugam Bay is consistently rated among the top 10 surf spots in the world. Today is all yours — surf, swim, eat at a barefoot beachside café, or rent a bicycle and explore the surrounding lagoons and elephant corridor.",
        image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&q=80&w=1000",
        location: "Arugam Bay",
        meals: "Breakfast",
      },
      {
        day: "Day 5",
        title: "Pottuvil Lagoon & Elephant Rock",
        details: "Morning canoe through Pottuvil Lagoon, home to crocodiles and birds. Afternoon visit Elephant Rock — a massive natural boulder jutting into the ocean — for one of the best sunsets on the island.",
        image: "https://images.unsplash.com/photo-1625736302619-338b1f513d7e?auto=format&fit=crop&q=80&w=1000",
        location: "Arugam Bay",
        meals: "Breakfast",
      },
      {
        day: "Day 6",
        title: "Departure",
        details: "Final breakfast at your lodge, then the long but beautiful drive back across the island to Colombo or Bandaranaike Airport. A truly off-the-beaten-track adventure completed.",
        image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&q=80&w=1000",
        location: "Colombo",
        meals: "Breakfast",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper — look up a package by slug
// ─────────────────────────────────────────────────────────────────────────────
export function getPackageBySlug(slug: string): TourPackage | undefined {
  return allPackages.find((p) => p.slug === slug);
}
