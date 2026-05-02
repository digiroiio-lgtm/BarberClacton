export const siteConfig = {
  name: "Turkish Barber Clacton",
  domain: "https://turkishbarberclacton.com",
  phoneDisplay: "01255 000000",
  phoneHref: "+441255000000",
  whatsappNumber: "447341912796",
  email: "hello@turkishbarberclacton.com",
  address: {
    line1: "58B Rosemary Rd",
    town: "Clacton-on-Sea",
    county: "Essex",
    postcode: "CO15 1TE",
    country: "United Kingdom",
  },
  openingHours: [
    "Mon-Fri: 09:00-19:00",
    "Sat: 08:30-18:00",
    "Sun: 10:00-16:00",
  ],
  mapEmbedUrl:
    "https://www.google.com/maps?q=58B+Rosemary+Rd+Clacton-on-Sea+CO15+1TE&output=embed",
  mapDirectionsUrl:
    "https://share.google/k5vsRf38Ca8P6Eo5T",
  landmarks: ["Clacton Pier", "Clacton Railway Station", "Rosemary Road"],
  defaultWhatsAppMessage:
    "Hi, I'd like to book an appointment at Turkish Barber Clacton.",
  whatsappTemplates: {
    skinFade: "Hi, I'd like to book a skin fade at Turkish Barber Clacton.",
    beardTrim: "Hi, I'd like to book a beard trim at Turkish Barber Clacton.",
    haircutBeard:
      "Hi, I'd like to book a haircut and beard trim at Turkish Barber Clacton.",
    availability:
      "Hi, can you let me know today's availability at Turkish Barber Clacton?",
  },
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/prices", label: "Prices" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Now" },
];
