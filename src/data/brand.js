// src/data/brand.js

export const BRAND = {
  nameEn: "MAKAN",
  nameAr: "مَكان",
  fullEn: "MAKAN — Cairo",
  taglineEn: "MADE HERE. WORN EVERYWHERE.",
  taglineAr: "صُنِعَ هنا. يُرتَدى في كل مكان.",
  subTaglineEn: "FROM CAIRO, WITH INTENT.",
  subTaglineAr: "من القاهرة، بقَصْدِ وابتكار.",
  coordinates: "30.0444° N, 31.2357° E",
  city: "CAIRO / القاهرة",
  season: "SPRING — SUMMER 2026",
  collectionNo: "MAKAN / 001",
  
  concept: "PLACE · IDENTITY · MEMORY · CULTURE · MOVEMENT",
  philosophy: "MAKAN explores the relationship between place, identity, memory, culture, and movement — inspired by Egypt without being trapped in nostalgia.",
  
  storyShort:
    "MAKAN means PLACE. Built from the rhythm of Cairo — concrete, movement, heat, and human scale. Cut, woven, and finished in Egypt from long-staple Giza cotton and washed linen, designed for movement anywhere.",

  storyLong: [
    "MAKAN began with a refusal: to let Egyptian identity be reduced to tourist souvenirs or ancient Pharaonic costumes. Egypt is alive. It is Downtown concrete, balcony shade at 5 PM, sun-bleached cotton, metal shutters, and the quiet dignity of handmade cloth.",
    "We don't recreate Egypt. We reinterpret it — the proportion of an archway translated into a collar seam, the weight of traditional workwear recut into modern silhouettes, the deep tactile richness of Delta flax.",
    "Every piece is made in Egypt with intent. Cotton from Giza ginning mills, weaving in Mehalla El Kubra, tailoring in Cairo ateliers, and hand-finishing by local artisans. Built in Cairo, worn everywhere.",
  ],

  palette: {
    offWhite: "#F2EFE8",
    sand: "#C9B99A",
    stone: "#9B9386",
    charcoal: "#1A1A18",
    black: "#0C0C0B",
    deepOlive: "#3F4636",
    terracotta: "#A85C43",
    burntOrange: "#B66A3C",
    nileBlue: "#263F48",
  },
};

export const EASE = [0.22, 1, 0.36, 1];

const U = (id, w = 1600) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: U("photo-1490481651871-ab68de25d43d", 1800),
  heroAlt: U("photo-1529139574466-a303027c1d8b", 1800),
  cairoBalcony: U("photo-1487958449943-2429e8be8625", 1400),
  atelier: U("photo-1445205170230-053b83016050", 1400),
  fabric: U("photo-1523381210434-271e8be1f52b", 1400),
  nile: U("photo-1539109136881-3be0616acf4b", 1400),
  street: U("photo-1524504388940-b1c1722653e1", 1400),
  studio: U("photo-1515886657613-9f3515b0c78f", 1400),
  craft: U("photo-1452860606245-08befc0ff44b", 1400),
  alex: U("photo-1509631179647-0177331693ae", 1400),
  concrete: U("photo-1513694203232-719a280e022f", 1400),
};
