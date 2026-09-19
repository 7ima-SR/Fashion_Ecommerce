import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { EASE } from "../data/brand";
import { PRODUCTS } from "../data/products";

const U = (id, w = 1600) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export default function Lookbook() {
  const looks = [
    {
      id: "look-01",
      number: "LOOK 01",
      title: "THE DOWNTOWN OVERCOAT",
      location: "Kasr El Nil, Cairo · 09:42 AM",
      coords: "30.0444° N, 31.2357° E",
      image: U("photo-1490481651871-ab68de25d43d", 1800),
      caption: "High-contrast morning shade against brutalist concrete. Cut from 220gsm washed flax linen.",
      product: PRODUCTS[0],
    },
    {
      id: "look-02",
      number: "LOOK 02",
      title: "DOUBLE-PLEAT FLUIDITY",
      location: "Zamalek Corniche · 04:15 PM",
      coords: "30.0594° N, 31.2223° E",
      image: U("photo-1529139574466-a303027c1d8b", 1800),
      caption: "High-waisted cotton twill trousers paired with an open-collar Giza poplin tunic.",
      product: PRODUCTS[1],
    },
    {
      id: "look-03",
      number: "LOOK 03",
      title: "THE ARCHITECTURE OF BALCONIES",
      location: "Garden City, Cairo · 01:20 PM",
      coords: "30.0350° N, 31.2300° E",
      image: U("photo-1487958449943-2429e8be8625", 1800),
      caption: "Sun-pleated midi dress echoing geometric wrought iron balconies.",
      product: PRODUCTS[6],
    },
    {
      id: "look-04",
      number: "LOOK 04",
      title: "WORKWEAR REINTERPRETED",
      location: "Old Cairo Atelier · 06:30 PM",
      coords: "30.0210° N, 31.2500° E",
      image: U("photo-1551028719-00167b16eac5", 1800),
      caption: "Heavy garment-washed duck canvas chore jacket with bar-tacked stress points.",
      product: PRODUCTS[7],
    },
    {
      id: "look-05",
      number: "LOOK 05",
      title: "MEDITERRANEAN COASTAL LIGHT",
      location: "Alexandria Corniche · 11:00 AM",
      coords: "31.2001° N, 29.9187° E",
      image: U("photo-1509631179647-0177331693ae", 1800),
      caption: "Knitted Giza cotton polo in Nile Blue, catching sea wind and noon glare.",
      product: PRODUCTS[2],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2EFE8] text-[#0C0C0B] pb-24">
      {/* Header */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 pt-16 pb-12 border-b border-[#0C0C0B]/10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43]"
        >
          EDITORIAL CATALOG · SPRING — SUMMER 2026
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl mt-3 leading-[0.95]"
        >
          LOOKBOOK <span className="font-arabic text-4xl sm:text-6xl font-normal opacity-60">كتالوج</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-base opacity-75 leading-relaxed"
        >
          A digital fashion magazine documenting the MAKAN 001 collection across Cairo streets, brutalist facades, and Nile light.
        </motion.p>
      </section>

      {/* Editorial Spread Grid */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 space-y-24">
        {looks.map((look, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: EASE }}
              className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
            >
              {/* Image Section */}
              <div className={`lg:col-span-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative aspect-[4/5] sm:aspect-[16/11] overflow-hidden bg-[#C9B99A]/30 grain group">
                  <img
                    src={look.image}
                    alt={look.title}
                    loading="lazy"
                    className="img-warm h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 bg-[#0C0C0B]/80 text-[#F2EFE8] backdrop-blur px-3 py-1.5 text-[11px] font-bold tracking-[0.24em]">
                    {look.number}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-[#F2EFE8]/90 backdrop-blur text-[#0C0C0B] px-3 py-1.5 text-[10px] font-mono tracking-widest flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#A85C43]" /> {look.coords}
                  </div>
                </div>
              </div>

              {/* Editorial Text & Product Tag */}
              <div className={`lg:col-span-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <span className="text-[11px] font-bold tracking-[0.28em] text-[#A85C43] block">
                  {look.location.toUpperCase()}
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mt-2 leading-[1.05]">
                  {look.title}
                </h2>
                <p className="mt-4 text-sm opacity-75 leading-relaxed">
                  {look.caption}
                </p>

                {look.product && (
                  <div className="mt-8 pt-6 border-t border-[#0C0C0B]/15">
                    <span className="text-[10px] font-bold tracking-[0.24em] text-[#0C0C0B]/60 block mb-3 uppercase">
                      Featured Garment
                    </span>
                    <Link
                      to={`/product/${look.product.id}`}
                      className="flex items-center gap-4 group p-3 bg-white/40 hover:bg-white border border-[#0C0C0B]/10 transition"
                    >
                      <img
                        src={look.product.images[0]}
                        alt={look.product.name}
                        className="w-14 h-18 object-cover img-warm"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate group-hover:underline">
                          {look.product.name}
                        </h4>
                        <p className="text-xs font-bold text-[#A85C43] mt-0.5">
                          EGP {look.product.price.toLocaleString()}
                        </p>
                      </div>
                      <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 transition" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Footer Banner */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 mt-16 text-center border-t border-[#0C0C0B]/10 pt-16">
        <h3 className="font-display text-3xl sm:text-5xl">EXPLORE FULL CATALOGUE</h3>
        <p className="font-arabic text-xl opacity-60 mt-2">تسوق تشكيلة القاهرة كاملة</p>
        <div className="mt-8">
          <Link
            to="/shop"
            className="inline-block bg-[#0C0C0B] text-[#F2EFE8] px-10 py-4 text-[12px] font-bold tracking-[0.24em] btn-fill"
          >
            SHOP ALL PIECES
          </Link>
        </div>
      </section>
    </div>
  );
}
