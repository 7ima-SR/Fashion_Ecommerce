// src/data/products.js
// MAKAN Contemporary Egyptian Fashion Product Catalog

const U = (id, w = 1200) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const PRODUCTS = [
  {
    id: "cairo-linen-overshirt",
    name: "Cairo Washed Linen Overshirt",
    nameAr: "قميص كتان القاهرة",
    price: 3400,
    compareAt: 4100,
    category: "shirts",
    collection: "cairo-01",
    collectionName: "01 — CAIRO",
    gender: "Unisex",
    colors: [
      { name: "Sand", hex: "#C9B99A" },
      { name: "Charcoal", hex: "#1A1A18" },
      { name: "Deep Olive", hex: "#3F4636" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Icon",
    rating: 4.9,
    reviews: 142,
    isNew: true,
    featured: true,
    // 5 distinct image types per product specification:
    images: [
      U("photo-1591047139829-d91aecb6caea"), // 1. Full product / model shot
      U("photo-1523381210434-271e8be1f52b"), // 2. Fabric close-up
      U("photo-1452860606245-08befc0ff44b"), // 3. Stitching / button detail
      U("photo-1524504388940-b1c1722653e1"), // 4. Cairo street lifestyle shot
      U("photo-1602810318383-e386cc2a3ccf")  // 5. Back / side view
    ],
    description: "Cut boxy from heavyweight washed Egyptian flax linen with genuine mother-of-pearl buttons and a reinforced balcony-seam back yoke. Designed to wear over a tee in Kasr El Nil shade or layered when Alexandria winds pick up.",
    materials: "100% Egyptian long-staple flax linen (220gsm). Mother-of-pearl buttons.",
    fit: "Relaxed editorial box cut. Order your regular size for fluid drape.",
    care: "Machine wash cold with mild detergent, line dry in shade. Softens naturally with every wash.",
    origin: {
      fabric: "Woven in Mehalla El Kubra",
      made: "Tailored in Downtown Cairo Atelier",
      cotton: "Delta long-staple flax blend"
    }
  },
  {
    id: "nile-relaxed-trouser",
    name: "Nile Double-Pleat Trousers",
    nameAr: "بنطلون النيل العريض",
    price: 2950,
    compareAt: null,
    category: "trousers",
    collection: "nile-02",
    collectionName: "02 — NILE",
    gender: "Men",
    colors: [
      { name: "Nile Blue", hex: "#263F48" },
      { name: "Stone", hex: "#9B9386" },
      { name: "Charcoal", hex: "#1A1A18" }
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "New Arrival",
    rating: 4.8,
    reviews: 98,
    isNew: true,
    featured: true,
    images: [
      U("photo-1541099649105-f69ad21f3246"), // 1. Full model
      U("photo-1542272604-787c3835535d"), // 2. Fabric detail
      U("photo-1445205170230-053b83016050"), // 3. Tailoring detail
      U("photo-1539109136881-3be0616acf4b"), // 4. Nile urban setting
      U("photo-1594938298603-c8148c4dae35")  // 5. Alternate angle
    ],
    description: "High-waisted, wide-leg trouser cut from cotton-linen twill with deep double pleats and an internal drawstring waistband. Engineered for total freedom of movement.",
    materials: "60% Giza Cotton, 40% Washed Linen (250gsm). Horn buttons.",
    fit: "High-rise, wide relaxed leg with slight ankle taper. Model is 187cm wearing size M.",
    care: "Dry clean or gentle cold cycle. Cool iron inside out.",
    origin: {
      fabric: "Mehalla Cotton-Linen Twill",
      made: "Stitched in Cairo",
      cotton: "Delta Giza 86"
    }
  },
  {
    id: "aswan-cotton-poplin-shirt",
    name: "Giza 86 Structured Poplin Shirt",
    nameAr: "قميص بوبلين جيزة ٨٦",
    price: 2650,
    compareAt: null,
    category: "shirts",
    collection: "dust-03",
    collectionName: "03 — DUST",
    gender: "Unisex",
    colors: [
      { name: "Off White", hex: "#F2EFE8" },
      { name: "Sand", hex: "#C9B99A" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Essential",
    rating: 4.9,
    reviews: 215,
    isNew: false,
    featured: true,
    images: [
      U("photo-1602810318383-e386cc2a3ccf"), // 1. Full model shot
      U("photo-1523381210434-271e8be1f52b"), // 2. Poplin weave detail
      U("photo-1452860606245-08befc0ff44b"), // 3. Collar stitching detail
      U("photo-1487958449943-2429e8be8625"), // 4. Architectural lifestyle
      U("photo-1596755094514-f87e34085b2c")  // 5. Back cut view
    ],
    description: "The pristine white shirt reconsidered through Egyptian architectural minimalism. Crisp Giza 86 cotton poplin featuring a hidden placket, subtle stand collar, and clean French seams.",
    materials: "100% Giza 86 Extra Long Staple Egyptian Cotton Poplin (160gsm).",
    fit: "Straight sharp silhouette with dropped shoulder seam.",
    care: "Warm wash, steam iron while damp.",
    origin: {
      fabric: "Giza 86 - Delta Ginning",
      made: "Hand-finished in Kasr El Nil",
      cotton: "Extra-long staple certified"
    }
  },
  {
    id: "concrete-structured-blazer",
    name: "Concrete Architectural Blazer",
    nameAr: "بليزر الخرسانة الهيكلي",
    price: 5200,
    compareAt: 6000,
    category: "outerwear",
    collection: "concrete-04",
    collectionName: "04 — CONCRETE",
    gender: "Men",
    colors: [
      { name: "Charcoal", hex: "#1A1A18" },
      { name: "Stone", hex: "#9B9386" }
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "Editorial Piece",
    rating: 5.0,
    reviews: 42,
    isNew: true,
    featured: true,
    images: [
      U("photo-1551028719-00167b16eac5"), // 1. Full model shot
      U("photo-1513694203232-719a280e022f"), // 2. Concrete backdrop lifestyle
      U("photo-1445205170230-053b83016050"), // 3. Lapel & button close-up
      U("photo-1515886657613-9f3515b0c78f"), // 4. Studio framing
      U("photo-1591047139829-d91aecb6caea")  // 5. Profile view
    ],
    description: "Inspired by the raw geometry of Cairo brutalist architecture. Unstructured single-breasted blazer in heavy cotton canvas with sharp lapels, dual patch pockets, and unlined interior.",
    materials: "100% Egyptian Cotton Heavy Canvas (340gsm). Horn shank buttons.",
    fit: "Tailored box silhouette with clean natural shoulders.",
    care: "Professional dry clean only.",
    origin: {
      fabric: "Mehalla Heavy Canvas",
      made: "Master Tailored in Cairo",
      cotton: "Egyptian Long Staple"
    }
  },
  {
    id: "modern-kaftan-shirt",
    name: "Contemporary Kaftan Shirt",
    nameAr: "قميص القفطان المعاصر",
    price: 3600,
    compareAt: null,
    category: "shirts",
    collection: "home-05",
    collectionName: "05 — HOME / PLACE",
    gender: "Unisex",
    colors: [
      { name: "Sand", hex: "#C9B99A" },
      { name: "Off White", hex: "#F2EFE8" },
      { name: "Burnt Orange", hex: "#B66A3C" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Crafted",
    rating: 4.9,
    reviews: 78,
    isNew: true,
    featured: true,
    images: [
      U("photo-1523381210434-271e8be1f52b"), // 1. Full model shot
      U("photo-1434389677669-e08b4cac3105"), // 2. Fabric texture
      U("photo-1452860606245-08befc0ff44b"), // 3. Hand embroidery seam detail
      U("photo-1529139574466-a303027c1d8b"), // 4. Urban balcony background
      U("photo-1591047139829-d91aecb6caea")  // 5. Back drape
    ],
    description: "Reinterpreting the traditional Egyptian galabeya into a modern longline tunic overshirt. Features side hem slits, a collarless grandad neck, and tonal hand-stitching along the chest placket.",
    materials: "100% Washed Linen-Cotton Blend (190gsm). Hand-bound seams.",
    fit: "Loose longline drape. Size down for a closer fit.",
    care: "Gentle cold cycle. Line dry.",
    origin: {
      fabric: "Delta Weavers",
      made: "Hand finished by Cairo Artisans",
      cotton: "Flax & Giza Cotton blend"
    }
  },
  {
    id: "nile-heavyweight-tshirt",
    name: "Heavyweight Giza Jersey Tee",
    nameAr: "تيشيرت جيزة الثقيل",
    price: 1650,
    compareAt: null,
    category: "tshirts",
    collection: "dust-03",
    collectionName: "03 — DUST",
    gender: "Unisex",
    colors: [
      { name: "Off White", hex: "#F2EFE8" },
      { name: "Charcoal", hex: "#1A1A18" },
      { name: "Deep Olive", hex: "#3F4636" },
      { name: "Terracotta", hex: "#A85C43" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    badge: "Best Seller",
    rating: 4.9,
    reviews: 310,
    isNew: false,
    featured: true,
    images: [
      U("photo-1521572163474-6864f9cf17ab"), // 1. Full tee model shot
      U("photo-1576566588028-4147f3842f27"), // 2. Jersey fabric close-up
      U("photo-1452860606245-08befc0ff44b"), // 3. Collar stitching detail
      U("photo-1524504388940-b1c1722653e1"), // 4. Street style backdrop
      U("photo-1611312449408-fcece27cdbb7")  // 5. Folded detail
    ],
    description: "A substantial 260gsm jersey t-shirt knitted from Giza 92 combed cotton. Holds its boxy shape without feeling heavy. Finished with a thick 1x1 rib collar and subtle embroidered logo coordinates.",
    materials: "100% Giza 92 Combed Egyptian Cotton Jersey (260gsm).",
    fit: "Structured boxy fit with slightly longer sleeve.",
    care: "Cold wash inside out, line dry.",
    origin: {
      fabric: "Knit in 10th of Ramadan City",
      made: "Cairo Atelier",
      cotton: "Giza 92 Extra Long Staple"
    }
  },
  {
    id: "balcony-pleated-midi-dress",
    name: "Balcony Arch Pleated Midi Dress",
    nameAr: "فستان قوس البلكونة",
    price: 4100,
    compareAt: null,
    category: "dresses",
    collection: "cairo-01",
    collectionName: "01 — CAIRO",
    gender: "Women",
    colors: [
      { name: "Terracotta", hex: "#A85C43" },
      { name: "Sand", hex: "#C9B99A" },
      { name: "Off White", hex: "#F2EFE8" }
    ],
    sizes: ["XS", "S", "M", "L"],
    badge: "Editorial Pick",
    rating: 4.9,
    reviews: 64,
    isNew: true,
    featured: true,
    images: [
      U("photo-1594633312681-425c7b97ccd1"), // 1. Model full dress shot
      U("photo-1515886657613-9f3515b0c78f"), // 2. Pleat texture close-up
      U("photo-1487958449943-2429e8be8625"), // 3. Architecture pairing shot
      U("photo-1483985988355-763728e1935b"), // 4. Street movement shot
      U("photo-1583496661160-fb5886a13d44")  // 5. Back drape view
    ],
    description: "Sun-pleated midi dress featuring a geometric arch neckline referencing Downtown Cairo balcony ironwork. Sweeps gracefully in street breezes while maintaining structural elegance.",
    materials: "Egyptian Cotton Crepe & Tencel Blend (210gsm). OEKO-TEX certified.",
    fit: "Fluid relaxed silhouette with subtle waist shaping.",
    care: "Gentle hand wash or steam dry clean.",
    origin: {
      fabric: "Woven in Mehalla",
      made: "Draped & Sewn in Cairo",
      cotton: "Giza Cotton blend"
    }
  },
  {
    id: "old-cairo-chore-jacket",
    name: "Kasr El Nil Chore Jacket",
    nameAr: "سترة قصر النيل",
    price: 4600,
    compareAt: 5100,
    category: "outerwear",
    collection: "cairo-01",
    collectionName: "01 — CAIRO",
    gender: "Unisex",
    colors: [
      { name: "Burnt Orange", hex: "#B66A3C" },
      { name: "Charcoal", hex: "#1A1A18" },
      { name: "Stone", hex: "#9B9386" }
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "Heritage Craft",
    rating: 5.0,
    reviews: 184,
    isNew: false,
    featured: true,
    images: [
      U("photo-1551028719-00167b16eac5"), // 1. Chore jacket model shot
      U("photo-1591047139829-d91aecb6caea"), // 2. Canvas fabric texture
      U("photo-1445205170230-053b83016050"), // 3. Bar-tack pocket detail
      U("photo-1524504388940-b1c1722653e1"), // 4. Downtown Cairo lifestyle
      U("photo-1576995853123-5a10305d93c0")  // 5. Side profile
    ],
    description: "Four-pocket utilitarian jacket crafted from heavy garment-washed Egyptian cotton canvas. Patterned after the timeless work jackets worn by Khan El Khalili artisans. Built to last decades.",
    materials: "100% Egyptian Cotton Heavy Duck Canvas (380gsm). Aged brass shank buttons.",
    fit: "Boxy utility fit. Size down for tailored fit.",
    care: "Wash cold rarely. Ages gracefully like raw denim.",
    origin: {
      fabric: "Mehalla Heavy Canvas Mills",
      made: "Stitched in Cairo",
      cotton: "Delta long-staple cotton"
    }
  },
  {
    id: "siwa-embroidered-linen-shirt",
    name: "Hand-Embroidered Siwa Shirt",
    nameAr: "قميص كتان مطرز يدوياً",
    price: 3900,
    compareAt: null,
    category: "shirts",
    collection: "home-05",
    collectionName: "05 — HOME / PLACE",
    gender: "Unisex",
    colors: [
      { name: "Off White", hex: "#F2EFE8" },
      { name: "Sand", hex: "#C9B99A" }
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "Limited Run",
    rating: 4.9,
    reviews: 53,
    isNew: true,
    featured: false,
    images: [
      U("photo-1523381210434-271e8be1f52b"), // 1. Full shirt shot
      U("photo-1452860606245-08befc0ff44b"), // 2. Hand embroidery close-up
      U("photo-1434389677669-e08b4cac3105"), // 3. Button stitch detail
      U("photo-1509631179647-0177331693ae"), // 4. Desert/Mediterranean vibe
      U("photo-1602810318383-e386cc2a3ccf")  // 5. Back detail
    ],
    description: "Relaxed linen shirt with understated hand-embroidered geometric motifs along the placket and cuffs, executed by women artisans in Siwa and Cairo. Minimalist and deeply authentic.",
    materials: "100% Egyptian Flax Linen (200gsm). Hand embroidery yarn.",
    fit: "Relaxed fluid cut.",
    care: "Hand wash cold or dry clean.",
    origin: {
      fabric: "Flax Linen Mehalla",
      made: "Embroidered in Siwa & Cairo",
      cotton: "Egyptian Flax & Cotton yarn"
    }
  },
  {
    id: "corniche-linen-pant",
    name: "Corniche Drawstring Linen Pants",
    nameAr: "بنطلون الكورنيش الكتان",
    price: 2850,
    compareAt: null,
    category: "trousers",
    collection: "dust-03",
    collectionName: "03 — DUST",
    gender: "Unisex",
    colors: [
      { name: "Sand", hex: "#C9B99A" },
      { name: "Charcoal", hex: "#1A1A18" },
      { name: "Off White", hex: "#F2EFE8" }
    ],
    sizes: ["S", "M", "L", "XL"],
    badge: "Comfort Fit",
    rating: 4.8,
    reviews: 112,
    isNew: false,
    featured: false,
    images: [
      U("photo-1594938298603-c8148c4dae35"), // 1. Pants full model shot
      U("photo-1541099649105-f69ad21f3246"), // 2. Fabric weave detail
      U("photo-1473966968600-fa801b869a1a"), // 3. Waistband cord close-up
      U("photo-1509631179647-0177331693ae"), // 4. Coastal street shot
      U("photo-1542272604-787c3835535d")  // 5. Hem detail
    ],
    description: "Drawstring linen-cotton pants with a clean architectural taper. Garment-dyed for color depth that ages gracefully over time.",
    materials: "55% Linen, 45% Giza Cotton (210gsm). Organic cotton drawstring.",
    fit: "Relaxed top seat with clean slight leg taper.",
    care: "Cold wash, line dry.",
    origin: {
      fabric: "Mehalla Weaving",
      made: "Stitched in Cairo",
      cotton: "Delta Flax & Giza Cotton"
    }
  },
  {
    id: "cairo-canvas-tote",
    name: "Architectural Heavyweight Canvas Tote",
    nameAr: "حقيبة القماش الهيكلية",
    price: 1450,
    compareAt: null,
    category: "accessories",
    collection: "concrete-04",
    collectionName: "04 — CONCRETE",
    gender: "Unisex",
    colors: [
      { name: "Off White", hex: "#F2EFE8" },
      { name: "Charcoal", hex: "#1A1A18" }
    ],
    sizes: ["One Size"],
    badge: "Essential Accessory",
    rating: 4.9,
    reviews: 156,
    isNew: false,
    featured: false,
    images: [
      U("photo-1544816155-12df9643f363"), // 1. Tote full view
      U("photo-1591047139829-d91aecb6caea"), // 2. Heavy canvas weave
      U("photo-1445205170230-053b83016050"), // 3. Leather strap detail
      U("photo-1524504388940-b1c1722653e1"), // 4. Cairo street carrying shot
      U("photo-1513694203232-719a280e022f")  // 5. Interior pocket shot
    ],
    description: "Over-engineered daily carry bag made from 450gsm Egyptian cotton duck canvas with reinforced vegetable-tanned leather handles and interior zip pocket.",
    materials: "450gsm Heavyweight Egyptian Cotton Canvas. Egyptian Leather Handles.",
    fit: "Spacious 24L capacity.",
    care: "Spot clean with damp cloth.",
    origin: {
      fabric: "Mehalla Heavy Duck",
      made: "Cairo Leather Workshop",
      cotton: "Delta Extra Heavy Staple"
    }
  },
  {
    id: "minimalist-linen-cap",
    name: "MAKAN Coordinates Linen Cap",
    nameAr: "كاب الكتان المعاصر",
    price: 950,
    compareAt: null,
    category: "accessories",
    collection: "dust-03",
    collectionName: "03 — DUST",
    gender: "Unisex",
    colors: [
      { name: "Sand", hex: "#C9B99A" },
      { name: "Charcoal", hex: "#1A1A18" },
      { name: "Deep Olive", hex: "#3F4636" }
    ],
    sizes: ["Adjustable"],
    badge: "Accessory",
    rating: 4.7,
    reviews: 89,
    isNew: false,
    featured: false,
    images: [
      U("photo-1588850561407-ed78c282e89b"), // 1. Cap front shot
      U("photo-1523381210434-271e8be1f52b"), // 2. Linen fabric detail
      U("photo-1452860606245-08befc0ff44b"), // 3. Brass buckle detail
      U("photo-1529139574466-a303027c1d8b"), // 4. Lifestyle wear
      U("photo-1509631179647-0177331693ae")  // 5. Back strap view
    ],
    description: "Unstructured 6-panel strapback cap rendered in washed Egyptian linen with embroidered latitude coordinates (30.04° N) and antique brass buckle slider.",
    materials: "100% Washed Egyptian Linen. Antique brass buckle.",
    fit: "One size fits all (adjustable strap).",
    care: "Hand wash cold.",
    origin: {
      fabric: "Delta Linen",
      made: "Cairo Headwear Atelier",
      cotton: "Egyptian Linen"
    }
  }
];

export const COLLECTIONS = [
  {
    id: "cairo-01",
    slug: "cairo-01",
    name: "01 — CAIRO",
    nameAr: "٠١ — القاهرة",
    subtitle: "Built from the rhythm of the city — concrete, movement, heat, and human scale.",
    count: 4,
    story: "Architectural silhouettes inspired by Downtown balconies, ironwork geometries, and modern workwear built for Cairo heat.",
    image: "photo-1490481651871-ab68de25d43d",
    accent: "#1A1A18"
  },
  {
    id: "nile-02",
    slug: "nile-02",
    name: "02 — NILE",
    nameAr: "٠٢ — النيل",
    subtitle: "Fluidity, deep tones, and lightweight drape that moves like water.",
    count: 3,
    story: "Deep greens, deep blues, and fluid double-pleat silhouettes cut from breathable Giza cotton twill and linen blends.",
    image: "photo-1539109136881-3be0616acf4b",
    accent: "#263F48"
  },
  {
    id: "dust-03",
    slug: "dust-03",
    name: "03 — DUST",
    nameAr: "٠٣ — الغبار والشمس",
    subtitle: "Sun-bleached neutrals, sand textures, and breathable everyday uniforms.",
    count: 3,
    story: "Earthy palettes of Sand, Stone, and Papyrus rendered in crisp Giza 86 poplin and heavyweight knitted jerseys.",
    image: "photo-1509631179647-0177331693ae",
    accent: "#C9B99A"
  },
  {
    id: "concrete-04",
    slug: "concrete-04",
    name: "04 — CONCRETE",
    nameAr: "٠٤ — الخرسانة",
    subtitle: "Brutalist geometry, heavy duck canvas, and structured outerwear.",
    count: 3,
    story: "Heavyweight utility jackets, architectural blazers, and durable canvas tote bags inspired by Cairo brutalist buildings.",
    image: "photo-1513694203232-719a280e022f",
    accent: "#9B9386"
  },
  {
    id: "home-05",
    slug: "home-05",
    name: "05 — HOME / PLACE",
    nameAr: "٠٥ — المكان والبيت",
    subtitle: "Traditional Egyptian silhouettes reinterpreted into modern luxury.",
    count: 3,
    story: "Galabeya-inspired tunic shirts and hand-embroidered linen pieces celebrating local craftsmanship and identity.",
    image: "photo-1529139574466-a303027c1d8b",
    accent: "#A85C43"
  }
];

export const CATEGORIES = [
  { id: "all", name: "All Products", nameAr: "الكل" },
  { id: "shirts", name: "Shirts & Tunics", nameAr: "قمصان" },
  { id: "tshirts", name: "T-Shirts", nameAr: "تيشيرتات" },
  { id: "trousers", name: "Trousers", nameAr: "بنطلونات" },
  { id: "outerwear", name: "Outerwear & Jackets", nameAr: "سترات" },
  { id: "dresses", name: "Dresses & Skirts", nameAr: "فساتين" },
  { id: "accessories", name: "Accessories", nameAr: "إكسسوارات" }
];

export const MATERIALS = [
  { id: "all", name: "All Materials" },
  { id: "giza-cotton", name: "Egyptian Giza Cotton" },
  { id: "flax-linen", name: "Washed Flax Linen" },
  { id: "cotton-twill", name: "Mehalla Cotton Twill" },
  { id: "duck-canvas", name: "Heavyweight Canvas" }
];

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "One Size", "Adjustable"];

export const formatEGP = (n) => "EGP " + n.toLocaleString("en-EG");

export const productImage = (p) => (p && p.images && p.images[0]) ? p.images[0] : "";
