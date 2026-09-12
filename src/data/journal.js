const U = (id, w = 1400) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const ARTICLES = [
  {
    id: "egyptian-cotton-still-matters",
    title: "Why Egyptian Cotton Still Matters",
    titleAr: "لماذا ما زال القطن المصري مهماً",
    category: "Craft", date: "Aug 28, 2026", readingTime: "6 min",
    image: U("photo-1523381210434-271e8be1f52b"),
    excerpt: "Giza 86, long staples, and why we pay more for Delta cotton — and why you feel it on first wear.",
    body: [
      "Not all cotton is Egyptian cotton. Extra-long staple fibres — Giza 86, Giza 92 — are longer, finer and stronger than standard upland cotton. Longer fibres mean fewer joins in the yarn, which means smoother hand-feel, less pilling, and shirts that survive a hundred washes.",
      "We buy from two gins in the Delta and weave in Mehalla El Kubra, a city that has woven cotton for a century. It costs more. It also means our Nile Heavyweight Tee weighs 240gsm and still breathes in August — because the fibre does the work, not polyester.",
      "When you see 'Egyptian cotton' on a fast-fashion label for the price of a koshary, be sceptical. Real Giza cotton is traceable, limited, and worth paying for. We publish our mills. Ask anyone else to do the same.",
      "Reconsidered, not romanticised: Egyptian cotton isn't heritage marketing for us. It's engineering.",
    ],
  },
  {
    id: "modern-cairo",
    title: "Modern Cairo: A Design Field Guide",
    titleAr: "القاهرة الحديثة",
    category: "City", date: "Aug 12, 2026", readingTime: "8 min",
    image: U("photo-1487958449943-2429e8be8625"),
    excerpt: "Wasat El Balad balconies, brutalist ministries, and the 5pm light that decides our palette.",
    body: [
      "Our studio sits ten minutes from Talaat Harb. Every collection starts with a walk: the curve of a 1930s balcony, the terrazzo of a bank lobby, the particular ochre of a wall that has held fifty summers of sun.",
      "Cairo / 01 was drawn entirely from Downtown — arch proportions became necklines, ironwork became embroidery geometry, the shade-side of Kasr El Nil became our Obsidian.",
      "We don't print pyramids on tees. The city is already modern. Our job is to notice it before it gets demolished.",
    ],
  },
  {
    id: "craft-behind-garment",
    title: "The Craft Behind the Garment",
    titleAr: "الحرفة وراء القطعة",
    category: "Craft", date: "Jul 30, 2026", readingTime: "5 min",
    image: U("photo-1445205170230-053b83016050"),
    excerpt: "Single-needle stitching, corozo buttons, and the twelve hands that touch your overshirt.",
    body: [
      "A MAKAN overshirt passes through twelve pairs of hands: cutter, fuser, machinist, buttonholer, presser, checker. We pay per piece above market and keep runs small so the same team sees a garment through.",
      "Details you can check: single-needle side seams (one clean line, not a chain), corozo buttons (nut, not plastic), pattern-matched pockets, and a yoke seam reinforced the way workwear used to be.",
      "Craft isn't nostalgia. It's how clothes last long enough to matter.",
    ],
  },
  {
    id: "alex-to-cairo",
    title: "From Alexandria to Cairo",
    titleAr: "من إسكندرية للقاهرة",
    category: "Travel", date: "Jul 14, 2026", readingTime: "4 min",
    image: U("photo-1509631179647-0177331693ae"),
    excerpt: "Sea wind, cotton knits, and designing for two cities at once.",
    body: [
      "Alexandria taught us softness. The Corniche demands knits that handle wind — brushed collars, heavier gauges, colours drawn from water and stone.",
      "Our Alexandria Knit Polo is knitted there, finished in Cairo. Two cities, one garment. Like most Egyptians, it commutes.",
    ],
  },
  {
    id: "designing-egyptian-identity",
    title: "Designing Egyptian Identity Without Clichés",
    titleAr: "تصميم الهوية المصرية",
    category: "Design", date: "Jun 22, 2026", readingTime: "7 min",
    image: U("photo-1515886657613-9f3515b0c78f"),
    excerpt: "No pharaohs, no hieroglyphs. How we reference Egypt without costume.",
    body: [
      "Rule one in our studio: if it could be sold at a Khan El Khalili souvenir shop, it doesn't leave the room. No Eye of Horus prints. No gold foil. No 'Nile breeze' copy.",
      "Instead we work with proportion, material and use: the length of a galabeya, the weight of canvas, the geometry of mashrabiya reduced to a single seam line.",
      "Egyptian identity doesn't need to be preserved in the past. It can be minimal. It can be global. We don't recreate Egypt — we reinterpret it.",
    ],
  },
  {
    id: "inside-our-studio",
    title: "Inside Our Studio: Kasr El Nil",
    titleAr: "داخل الاستوديو",
    category: "Studio", date: "Jun 02, 2026", readingTime: "5 min",
    image: U("photo-1441984904996-e0b6ba687e04"),
    excerpt: "Cutting tables, mint tea, and why we keep everything within 30km.",
    body: [
      "Our atelier is a second-floor flat with tall shutters and a cutting table that seats eight. Fabric arrives from Mehalla on Tuesdays. Tea is constant.",
      "Keeping cutting, sampling and finishing within Cairo means we can fix a pattern in hours, not weeks — and visit every workshop we work with. Proximity is quality control.",
      "Come by on open Saturdays. You'll leave with chalk on your sleeve.",
    ],
  },
];

export const CAIRO_STORIES = [
  { id: "balcony", kicker: "01 — Architecture", title: "The Balcony", ar: "البلكونة", text: "Downtown arches, bent iron, shade at 5pm. Our shoulders and necklines start here.", image: "photo-1487958449943-2429e8be8625", productId: "cairo-linen-overshirt", tint: "#171615" },
  { id: "fabric", kicker: "02 — Fabric", title: "The Cotton", ar: "القطن", text: "Giza long-staple from the Delta, woven in Mehalla. The reason it feels different.", image: "photo-1523381210434-271e8be1f52b", productId: "nile-heavyweight-tee", tint: "#D8C5A9" },
  { id: "street", kicker: "03 — Street", title: "The Street", ar: "الشارع", text: "Talaat Harb at rush hour. Clothes have to move, breathe, last.", image: "photo-1524504388940-b1c1722653e1", productId: "old-cairo-work-jacket", tint: "#A6533C" },
  { id: "nile", kicker: "04 — Nile", title: "The Nile", ar: "النيل", text: "Feluka green, winter light on water. Our Nile blue isn't a trend — it's a place.", image: "photo-1539109136881-3be0616acf4b", productId: "alex-knit-polo", tint: "#365C61" },
  { id: "craft", kicker: "05 — Craft", title: "The Hand", ar: "الإيد", text: "Twelve hands per shirt. Corozo, bar-tacks, single-needle seams.", image: "photo-1452860606245-08befc0ff44b", productId: "khan-cotton-galabeya", tint: "#6E382D" },
];
