export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  price: string;
  duration: string;
  intent: string;
};

export const services: Service[] = [
  {
    slug: "turkish-barber-clacton-on-sea",
    name: "Turkish Barber Clacton-on-Sea",
    short: "Traditional precision with a modern finish.",
    description:
      "Our signature Turkish barber service blends clean clipper work, detail-led scissor finishing, and expert styling for men who want consistency.",
    price: "From £20",
    duration: "30-40 mins",
    intent: "premium local barber service",
  },
  {
    slug: "skin-fade-clacton-on-sea",
    name: "Skin Fade Clacton-on-Sea",
    short: "Sharp gradients, smooth blend, clean neckline.",
    description:
      "A crisp skin fade with careful transitions and shape-up detailing, tailored to your head shape and style preference.",
    price: "From £24",
    duration: "35-45 mins",
    intent: "skin fade booking",
  },
  {
    slug: "beard-trim-clacton-on-sea",
    name: "Beard Trim Clacton-on-Sea",
    short: "Defined lines and balanced beard shape.",
    description:
      "Professional beard shaping with trimmer and razor detailing to keep your beard neat, symmetrical, and well proportioned.",
    price: "From £12",
    duration: "20 mins",
    intent: "beard grooming",
  },
  {
    slug: "mens-haircut-clacton-on-sea",
    name: "Men's Haircut Clacton-on-Sea",
    short: "Classic and modern cuts done right.",
    description:
      "From tidy short backs and sides to textured crops, we deliver men's cuts with dependable quality and easy styling.",
    price: "From £20",
    duration: "30 mins",
    intent: "men haircut",
  },
  {
    slug: "hot-towel-shave-clacton-on-sea",
    name: "Hot Towel Shave Clacton-on-Sea",
    short: "Traditional hot towel comfort and smooth finish.",
    description:
      "Relaxing hot towel prep and close shave service for a clean, refreshed look with premium barbershop feel.",
    price: "From £18",
    duration: "25 mins",
    intent: "hot towel shave",
  },
  {
    slug: "kids-haircut-clacton-on-sea",
    name: "Kids Haircut Clacton-on-Sea",
    short: "Friendly, fast, and tidy cuts for children.",
    description:
      "Patient and efficient kids cuts with a calm approach and polished finish, ideal for busy local families.",
    price: "From £15",
    duration: "20-25 mins",
    intent: "kids haircut",
  },
  {
    slug: "walk-in-barber-clacton-on-sea",
    name: "Walk-In Barber Clacton-on-Sea",
    short: "Walk-ins welcome when the chair is free.",
    description:
      "Need a same-day trim? Message us on WhatsApp for live availability and walk in when slots are open.",
    price: "From £20",
    duration: "Varies",
    intent: "walk in availability",
  },
  {
    slug: "barber-near-clacton-pier",
    name: "Barber Near Clacton Pier",
    short: "Convenient location near seafront landmarks.",
    description:
      "Minutes from Clacton Pier, ideal for locals and visitors wanting a high-quality haircut close to the town centre.",
    price: "From £20",
    duration: "30 mins",
    intent: "barber near landmark",
  },
  {
    slug: "best-barber-in-clacton-on-sea",
    name: "Best Barber in Clacton-on-Sea",
    short: "Trusted local barber for precision grooming.",
    description:
      "Known for consistent fades, accurate beard work, and a clean, welcoming shop experience in Clacton-on-Sea.",
    price: "From £20",
    duration: "30-40 mins",
    intent: "best barber",
  },
  {
    slug: "turkish-fade-barber-clacton",
    name: "Turkish Fade Barber Clacton",
    short: "Modern fade technique with Turkish barber standards.",
    description:
      "Specialist fade work inspired by Turkish barber precision, designed for sharp lines and long-lasting shape.",
    price: "From £24",
    duration: "35-45 mins",
    intent: "turkish fade",
  },
];

export const priceList = [
  { name: "Haircut", price: "£20", note: "Classic or modern style" },
  { name: "Skin Fade", price: "£24", note: "Low, mid, or high fade" },
  { name: "Beard Trim", price: "£12", note: "Line-up and shaping" },
  { name: "Hair + Beard", price: "£30", note: "Full tidy-up package" },
  { name: "Hot Towel Shave", price: "£18", note: "Traditional close shave" },
  { name: "Kids Haircut", price: "£15", note: "Under 12s" },
  { name: "Eyebrow Threading", price: "£6", note: "Optional extra" },
  { name: "Nose Wax", price: "£6", note: "Optional extra" },
];

export const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended for busy times. Walk-ins are welcome when available.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes. Message us on WhatsApp before you come and we'll confirm current chair availability.",
  },
  {
    q: "How do I book on WhatsApp?",
    a: "Tap any Book on WhatsApp button. It opens a prefilled message so booking takes seconds.",
  },
  {
    q: "How much is a skin fade in Clacton-on-Sea?",
    a: "Skin fades start from £24. Visit our prices page for a full breakdown.",
  },
  {
    q: "Are you open on weekends?",
    a: "Yes, including Sundays. See opening hours on the contact and location pages.",
  },
  {
    q: "Do you trim beards?",
    a: "Yes, from quick tidy-ups to full beard shape and line definition.",
  },
  {
    q: "How long does a haircut take?",
    a: "Most services take between 25 and 45 minutes depending on style and detail.",
  },
  {
    q: "Where are you located in Clacton-on-Sea?",
    a: "We're on Rosemary Road, close to Clacton Pier and easy to reach by car or train.",
  },
];

export const testimonials = [
  {
    name: "A. Patel",
    quote:
      "Best fade I've had in Clacton. Clean blend, no rush, and easy booking on WhatsApp.",
  },
  {
    name: "L. Thompson",
    quote:
      "Great beard shaping and really friendly service. Always leave looking sharper.",
  },
  {
    name: "M. Ahmed",
    quote:
      "Consistent quality every visit. The hot towel shave is excellent.",
  },
];

export type Area = {
  slug: string;
  name: string;
  intro: string;
  travel: string;
};

export const areas: Area[] = [
  {
    slug: "clacton-on-sea",
    name: "Barber in Clacton-on-Sea",
    intro:
      "Local clients choose us for reliable fades, clean beard trims, and a premium Turkish barber feel right in town.",
    travel:
      "Easy walk from the town centre and quick access from Rosemary Road.",
  },
  {
    slug: "holland-on-sea",
    name: "Barber near Holland-on-Sea",
    intro:
      "If you're based in Holland-on-Sea, we're a short trip away for precision cuts and straightforward WhatsApp booking.",
    travel:
      "Around 10 minutes by car via Kings Avenue and the A133 corridor.",
  },
  {
    slug: "jaywick",
    name: "Barber near Jaywick",
    intro:
      "Clients from Jaywick visit us for sharp skin fades, beard detailing, and dependable service standards.",
    travel:
      "Roughly 10-15 minutes by car with convenient parking nearby.",
  },
  {
    slug: "frinton-on-sea",
    name: "Barber near Frinton-on-Sea",
    intro:
      "Need a barber near Frinton-on-Sea? Visit us in Clacton for modern cuts and Turkish barber precision.",
    travel:
      "Easy drive or train route into Clacton with a short onward walk.",
  },
  {
    slug: "walton-on-the-naze",
    name: "Barber near Walton-on-the-Naze",
    intro:
      "We serve clients from Walton-on-the-Naze looking for a cleaner finish and quality grooming experience.",
    travel:
      "A practical trip by car or rail, ideal for combining with town-centre errands.",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cluster: string;
  body: string[];
  relatedServiceSlug: string;
};

export const blogPosts: Post[] = [
  {
    slug: "best-turkish-barber-in-clacton-on-sea",
    title: "Best Turkish Barber in Clacton-on-Sea",
    excerpt: "What to look for when choosing a barber you can trust every month.",
    cluster: "Local barber intent",
    relatedServiceSlug: "best-barber-in-clacton-on-sea",
    body: ["Consistency, hygiene, and communication define a great Turkish barber.", "Look for a shop that listens to your style goals and keeps standards high on every visit."],
  },
  {
    slug: "how-to-choose-a-barber-in-clacton-on-sea",
    title: "How to Choose a Barber in Clacton-on-Sea",
    excerpt: "A practical local checklist before your first visit.",
    cluster: "Local barber intent",
    relatedServiceSlug: "turkish-barber-clacton-on-sea",
    body: ["Check recent work, ask about timings, and review booking ease.", "A reliable barber should explain what suits your head shape and routine."],
  },
  {
    slug: "what-makes-a-good-turkish-barber",
    title: "What Makes a Good Turkish Barber?",
    excerpt: "Precision techniques, clean tools, and a sharp eye for detail.",
    cluster: "Local barber intent",
    relatedServiceSlug: "turkish-fade-barber-clacton",
    body: ["Turkish barbering is known for detail-led finishing and strong line work.", "The best shops combine tradition with modern style preferences."],
  },
  {
    slug: "barber-vs-hairdresser-for-men-in-clacton",
    title: "Barber vs Hairdresser for Men in Clacton",
    excerpt: "Which one is right for fades, crops, and beard work?",
    cluster: "Local barber intent",
    relatedServiceSlug: "mens-haircut-clacton-on-sea",
    body: ["Barbers generally focus on clipper cuts, fades, and beard details.", "If you want structured men's grooming, a specialist barber is usually the best fit."],
  },
  {
    slug: "what-is-a-skin-fade",
    title: "What Is a Skin Fade?",
    excerpt: "The basics of one of the most requested modern men's cuts.",
    cluster: "Fade / haircut intent",
    relatedServiceSlug: "skin-fade-clacton-on-sea",
    body: ["A skin fade tapers down to the skin near the neckline and sides.", "The transition can be low, mid, or high depending on your preferred shape."],
  },
  {
    slug: "low-fade-vs-mid-fade-vs-high-fade",
    title: "Low Fade vs Mid Fade vs High Fade",
    excerpt: "Choose the fade level that suits your style and face shape.",
    cluster: "Fade / haircut intent",
    relatedServiceSlug: "skin-fade-clacton-on-sea",
    body: ["Low fades are subtle, mid fades are balanced, and high fades are bolder.", "Your barber can advise based on your growth pattern and maintenance goals."],
  },
  {
    slug: "best-fade-haircuts-for-men-in-2026",
    title: "Best Fade Haircuts for Men in 2026",
    excerpt: "Trending fade styles that still look timeless.",
    cluster: "Fade / haircut intent",
    relatedServiceSlug: "turkish-fade-barber-clacton",
    body: ["Textured crop fades and classic side-part fades remain top choices.", "The key is a clean blend with a shape that matches your profile."],
  },
  {
    slug: "how-often-should-you-get-a-fade",
    title: "How Often Should You Get a Fade?",
    excerpt: "Maintenance intervals for always looking sharp.",
    cluster: "Fade / haircut intent",
    relatedServiceSlug: "skin-fade-clacton-on-sea",
    body: ["Most clients refresh every 2-3 weeks for crisp results.", "If you prefer a softer grow-out, 4 weeks can still look tidy."],
  },
  {
    slug: "how-often-should-you-trim-your-beard",
    title: "How Often Should You Trim Your Beard?",
    excerpt: "Simple beard upkeep timings for clean growth.",
    cluster: "Beard / grooming intent",
    relatedServiceSlug: "beard-trim-clacton-on-sea",
    body: ["Short beards often need shaping every 1-2 weeks.", "Longer beards benefit from regular line cleanups to stay structured."],
  },
  {
    slug: "beard-trim-styles-for-different-face-shapes",
    title: "Beard Trim Styles for Different Face Shapes",
    excerpt: "Find a beard shape that balances your features.",
    cluster: "Beard / grooming intent",
    relatedServiceSlug: "beard-trim-clacton-on-sea",
    body: ["A good beard trim should improve jawline definition and symmetry.", "Your barber can tailor volume and length to suit your facial profile."],
  },
  {
    slug: "what-is-a-hot-towel-shave",
    title: "What Is a Hot Towel Shave?",
    excerpt: "Why this traditional service still feels premium.",
    cluster: "Beard / grooming intent",
    relatedServiceSlug: "hot-towel-shave-clacton-on-sea",
    body: ["Hot towels soften hair and prep skin for a closer shave.", "The service is both relaxing and effective for a clean finish."],
  },
  {
    slug: "best-barber-treatments-for-men",
    title: "Best Barber Treatments for Men",
    excerpt: "Top grooming services beyond a standard haircut.",
    cluster: "Beard / grooming intent",
    relatedServiceSlug: "turkish-barber-clacton-on-sea",
    body: ["Pair a haircut with beard detailing or hot towel shaving for full impact.", "Small grooming upgrades can transform your overall appearance."],
  },
  {
    slug: "barber-open-late-in-clacton-on-sea",
    title: "Barber Open Late in Clacton-on-Sea",
    excerpt: "How to book around work and family schedules.",
    cluster: "Transactional local intent",
    relatedServiceSlug: "walk-in-barber-clacton-on-sea",
    body: ["Evening slots can fill quickly, especially on weekdays.", "WhatsApp booking makes checking same-day availability fast."],
  },
  {
    slug: "walk-in-barber-clacton-on-sea",
    title: "Walk-In Barber Clacton-on-Sea",
    excerpt: "When walk-ins work best and how to avoid waiting.",
    cluster: "Transactional local intent",
    relatedServiceSlug: "walk-in-barber-clacton-on-sea",
    body: ["Walk-ins are great for flexible schedules.", "Message before visiting so we can confirm the quickest time to come in."],
  },
  {
    slug: "affordable-barber-clacton-on-sea",
    title: "Affordable Barber Clacton-on-Sea",
    excerpt: "How to find value without compromising quality.",
    cluster: "Transactional local intent",
    relatedServiceSlug: "mens-haircut-clacton-on-sea",
    body: ["Value means consistent outcomes, not just low prices.", "A tidy cut that grows out well saves repeat correction visits."],
  },
  {
    slug: "best-mens-haircut-clacton-on-sea",
    title: "Best Men's Haircut Clacton-on-Sea",
    excerpt: "The details that separate average from premium.",
    cluster: "Transactional local intent",
    relatedServiceSlug: "mens-haircut-clacton-on-sea",
    body: ["Precision around the neckline and temple area makes the difference.", "A proper consultation helps match style with maintenance needs."],
  },
  {
    slug: "why-clients-choose-a-turkish-barber",
    title: "Why Clients Choose a Turkish Barber",
    excerpt: "Craft, consistency, and confidence in every service.",
    cluster: "Trust and experience",
    relatedServiceSlug: "turkish-barber-clacton-on-sea",
    body: ["Turkish barbering focuses on high standards and fine detail.", "Clients often return because results stay consistent month after month."],
  },
  {
    slug: "what-to-expect-from-your-first-visit",
    title: "What to Expect from Your First Visit",
    excerpt: "A step-by-step guide for new clients.",
    cluster: "Trust and experience",
    relatedServiceSlug: "turkish-barber-clacton-on-sea",
    body: ["We'll discuss your style, maintenance, and preferred finish first.", "Then we tailor the service to fit your look and routine."],
  },
  {
    slug: "hygiene-standards-in-a-modern-barbershop",
    title: "Hygiene Standards in a Modern Barbershop",
    excerpt: "Why cleanliness matters for quality and trust.",
    cluster: "Trust and experience",
    relatedServiceSlug: "best-barber-in-clacton-on-sea",
    body: ["Sanitised tools and tidy stations are non-negotiable.", "A clean environment improves both service comfort and confidence."],
  },
  {
    slug: "how-to-know-if-a-barber-is-right-for-you",
    title: "How to Know If a Barber Is Right for You",
    excerpt: "Key signs you've found the right long-term barber.",
    cluster: "Trust and experience",
    relatedServiceSlug: "best-barber-in-clacton-on-sea",
    body: ["You should leave with a cut that suits your lifestyle and face shape.", "If communication is clear and results stay strong, you've found your barber."],
  },
];
