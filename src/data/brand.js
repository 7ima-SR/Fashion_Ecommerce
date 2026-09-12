export const BRAND = {
  nameEn: "MAKAN",
  nameAr: "مَكان",
  fullEn: "MAKAN — Cairo",
  taglineEn: "Made here. Worn everywhere.",
  taglineAr: "من هنا. إلى كل مكان.",
  philosophy: "Modern Egyptian identity, designed for today.",
  storyShort:
    "MAKAN means place — belonging. We cut, sew and finish everything in Egypt from long-staple Egyptian cotton and washed linen, then design it to live anywhere: Cairo mornings, Alexandria wind, anywhere else.",
  storyLong: [
    "MAKAN began in a second-floor atelier off Kasr El Nil with one idea: Egyptian identity doesn't need to be preserved in the past. It can evolve. It can be minimal. It can be global.",
    "We don't recreate Egypt. We reinterpret it — the proportion of a balcony arch, the shade of a shisha-café wall at 5pm, the weight of a grandfather's galabeya cut like a modern overshirt.",
    "Every piece is made in Egypt. Not as a slogan, but as a supply chain: cotton from the Delta, weaving in Mehalla, stitching in Cairo, washing and finishing by hand. Fewer, better pieces — built for Cairo, ready for anywhere.",
  ],
};

export const EASE = [0.22, 1, 0.36, 1];

const U = (id, w = 1200) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

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
};
