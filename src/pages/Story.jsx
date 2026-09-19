import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND, EASE, IMAGES } from "../data/brand";

export default function Story() {
  return (
    <div className="min-h-screen bg-[#F2EFE8] text-[#0C0C0B] pb-24">
      {/* Header */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 pt-16 pb-16 border-b border-[#0C0C0B]/10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43]"
        >
          BRAND PHILOSOPHY & MANIFESTO
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl mt-3 leading-[0.95]"
        >
          MAKAN <span className="font-arabic text-4xl sm:text-6xl font-normal opacity-60">مَكان</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-xl opacity-85 leading-relaxed font-light"
        >
          "MAKAN" means PLACE. The brand explores the relationship between PLACE, IDENTITY, MEMORY, CULTURE, and MOVEMENT.
        </motion.p>
      </section>

      {/* Main Story Grid */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 space-y-24">
        
        {/* Narrative Block 1: Place & Memory */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43]">
              01 — THE CONCEPT OF PLACE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
              INSPIRED BY EGYPT.<br />
              <span className="italic text-[#A85C43]">NOT TRAPPED IN NOSTALGIA.</span>
            </h2>
            <p className="font-arabic text-2xl text-[#A85C43]">مكان، ذاكرة، وحركة</p>

            <p className="text-base opacity-80 leading-relaxed font-normal">
              MAKAN was born from a second-floor atelier off Kasr El Nil with one founding conviction: Egyptian identity does not need to be preserved in the past as a museum relic or a tourist souvenir. It is alive in the modern rhythm of Cairo streets, balcony archways, brutalist concrete, and washed linen.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden grain border border-[#0C0C0B]/10 shadow-md">
              <img
                src={IMAGES.cairoBalcony}
                alt="Cairo Balcony Architecture"
                className="img-warm h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Visual References Grid */}
        <div className="border-y border-[#0C0C0B]/10 py-16">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43] mb-6">
            02 — CORE VISUAL REFERENCES
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white/40 border border-[#0C0C0B]/10">
              <h4 className="font-bold text-sm tracking-wider uppercase">Cairo Architecture</h4>
              <p className="text-xs opacity-70 mt-2 leading-relaxed">
                Downtown facade arches, metal shutters, brutalist geometric concrete lines.
              </p>
            </div>
            <div className="p-6 bg-white/40 border border-[#0C0C0B]/10">
              <h4 className="font-bold text-sm tracking-wider uppercase">Arabic Typography</h4>
              <p className="text-xs opacity-70 mt-2 leading-relaxed">
                Modern non-decorative Arabic street signage & architectural letterforms.
              </p>
            </div>
            <div className="p-6 bg-white/40 border border-[#0C0C0B]/10">
              <h4 className="font-bold text-sm tracking-wider uppercase">Local Textiles</h4>
              <p className="text-xs opacity-70 mt-2 leading-relaxed">
                Extra-long staple Giza cotton and pre-shrunk washed flax linen woven in Mehalla.
              </p>
            </div>
            <div className="p-6 bg-white/40 border border-[#0C0C0B]/10">
              <h4 className="font-bold text-sm tracking-wider uppercase">Reinterpreted Silhouettes</h4>
              <p className="text-xs opacity-70 mt-2 leading-relaxed">
                Traditional Galabeyas recut into longline tunics, chore jackets, and relaxed pleats.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Block 2: Made Here. Worn Everywhere. */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden grain border border-[#0C0C0B]/10 shadow-md">
              <img
                src={IMAGES.atelier}
                alt="Kasr El Nil Atelier"
                className="img-warm h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43]">
              03 — BRAND TAGLINE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05]">
              MADE HERE.<br />
              <span className="italic text-[#A85C43]">WORN EVERYWHERE.</span>
            </h2>
            <p className="font-arabic text-2xl text-[#A85C43]">صُنِعَ هنا. يُرتَدى في كل مكان.</p>

            <p className="text-base opacity-80 leading-relaxed font-normal">
              Every garment is cut, stitched, and finished in Egypt with intent. Cotton from Giza ginning mills, weaving in Mehalla El Kubra, tailoring in Cairo ateliers. Built to live anywhere — from Cairo mornings and Alexandria winds to London, Paris, and Tokyo.
            </p>

            <div className="pt-4">
              <Link
                to="/made-in-egypt"
                className="inline-flex items-center gap-2 bg-[#0C0C0B] text-[#F2EFE8] px-8 py-3.5 text-[11px] font-bold tracking-[0.24em] btn-fill"
              >
                OUR PRODUCTION STORY <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
