import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND, EASE } from "../data/brand";

const U = (id, w = 1800) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export default function Campaign() {
  const chapters = [
    {
      num: "01",
      title: "CONCRETE & RHYTHM",
      ar: "الخرسانة والإيقاع",
      location: "Downtown Cairo · Kasr El Nil",
      text: "Cairo is not quiet. It is an enduring symphony of heat, horns, concrete facades, and dust caught in 5 PM sunlight. MAKAN 001 begins here — clothes cut to move through human scale without friction.",
      image: U("photo-1490481651871-ab68de25d43d"),
    },
    {
      num: "02",
      title: "FLAX & THE DELTA",
      ar: "الكتان والدلتا",
      location: "Mehalla El Kubra Weavers",
      text: "Egyptian flax and long-staple cotton have dressed civilizations for five millennia. We reject costume nostalgia: our linen is pre-shrunk, heavyweight, and garment-washed for modern life.",
      image: U("photo-1523381210434-271e8be1f52b"),
    },
    {
      num: "03",
      title: "THE SHADE OF BALCONIES",
      ar: "ظل البلكونات",
      location: "Garden City & Zamalek",
      text: "The balcony is Cairo's private stage — a transition between interior memory and public street life. Geometric ironwork necklines and sun-pleated skirts capture this architectural pause.",
      image: U("photo-1487958449943-2429e8be8625"),
    },
    {
      num: "04",
      title: "WORN EVERYWHERE",
      ar: "في كل مكان",
      location: "Cairo to Alexandria, London, Paris, Tokyo",
      text: "Made in Cairo with intent. Built to hold its collar in August heat or layer across northern winters. Designed in Egypt, ready for anywhere.",
      image: U("photo-1529139574466-a303027c1d8b"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0C0C0B] text-[#F2EFE8] pb-24 selection:bg-[#A85C43] selection:text-white">
      {/* Campaign Fullscreen Hero */}
      <section className="relative min-h-[95vh] flex flex-col justify-between p-6 sm:p-12 overflow-hidden grain">
        <img
          src={chapters[0].image}
          alt="MAKAN 001 Campaign"
          className="absolute inset-0 h-full w-full object-cover img-warm opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0B] via-[#0C0C0B]/40 to-transparent" />

        {/* Top Tag */}
        <div className="relative z-10 flex justify-between items-center text-[11px] font-bold tracking-[0.3em] text-[#C9B99A]">
          <span>CAMPAIGN 001 · SPRING — SUMMER 2026</span>
          <span>{BRAND.coordinates}</span>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 max-w-4xl py-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-xs font-bold tracking-[0.3em] text-[#A85C43] mb-4 uppercase"
          >
            MAKAN FILM & CAMPAIGN STUDY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.9] text-[#F2EFE8]"
          >
            THIS IS EGYPT. <br />
            <span className="italic text-[#C9B99A]">NOW.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-arabic text-2xl sm:text-3xl mt-4 text-[#C9B99A]"
          >
            هنا القاهرة. الآن.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-xl text-base opacity-80 leading-relaxed font-light"
          >
            A contemporary Egyptian fashion campaign shaped by place, craft, architecture, and movement. No pharaoh costumes. No souvenir gold. Only authentic street fashion and Egyptian cotton.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 flex items-center justify-between text-xs tracking-[0.24em] text-[#C9B99A]">
          <span className="flex items-center gap-2">
            <ArrowDown size={14} className="animate-bounce text-[#A85C43]" /> SCROLL TO EXPLORE
          </span>
          <span>4 CHAPTERS</span>
        </div>
      </section>

      {/* Chapters Presentation */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-24 space-y-32">
        {chapters.map((ch, i) => (
          <motion.div
            key={ch.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="grid lg:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16"
          >
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[12px] font-bold tracking-[0.3em] text-[#A85C43]">
                CHAPTER {ch.num} — {ch.location.toUpperCase()}
              </span>
              <h2 className="font-display text-4xl sm:text-6xl text-[#F2EFE8] leading-[1.02]">
                {ch.title}
              </h2>
              <p className="font-arabic text-2xl text-[#C9B99A]">{ch.ar}</p>
              <p className="text-base opacity-80 leading-relaxed max-w-md font-light">
                {ch.text}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden grain border border-white/10 group">
                <img
                  src={ch.image}
                  alt={ch.title}
                  loading="lazy"
                  className="img-warm h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 mt-16 text-center border-t border-white/10 pt-20">
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43] uppercase mb-3">
          EXPLORE THE COLLECTION
        </p>
        <h2 className="font-display text-4xl sm:text-6xl text-[#F2EFE8]">
          READY FOR WHEREVER YOU GO.
        </h2>
        <p className="font-arabic text-2xl text-[#C9B99A] mt-2">
          من القاهرة. إلى كل مكان.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/shop"
            className="bg-[#F2EFE8] text-[#0C0C0B] px-10 py-4 text-[12px] font-bold tracking-[0.24em] hover:bg-[#A85C43] hover:text-white transition-colors inline-flex items-center gap-2"
          >
            SHOP CAMPAIGN PIECES <ArrowRight size={16} />
          </Link>
          <Link
            to="/made-in-egypt"
            className="border border-white/30 text-[#F2EFE8] px-10 py-4 text-[12px] font-bold tracking-[0.24em] hover:bg-white/10 transition-colors"
          >
            OUR PRODUCTION STORY
          </Link>
        </div>
      </section>
    </div>
  );
}
