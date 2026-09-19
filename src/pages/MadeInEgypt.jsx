import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND, EASE } from "../data/brand";

const U = (id, w = 1600) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export default function MadeInEgypt() {
  const steps = [
    {
      num: "01",
      title: "GIZA LONG-STAPLE COTTON & FLAX",
      ar: "القطن والكتان الجيزاوي",
      location: "Nile Delta Gins & Flax Fields",
      desc: "Egyptian Giza cotton (specifically Giza 86 and Giza 92) produces extra-long staple fibers renowned worldwide for strength, softness, and luster. Our flax linen is harvested along Delta riverbanks and retted naturally.",
      image: U("photo-1523381210434-271e8be1f52b"),
      highlights: [
        "Certified Giza 86 & Giza 92 extra-long staple cotton",
        "Pre-shrunk, garment-washed flax linen (200-240gsm)",
        "Zero synthetic fillers or fast-fashion blends",
      ],
    },
    {
      num: "02",
      title: "MEHALLA WEAVING MILLS",
      ar: "غزل ونسيج المحلة الكبرى",
      location: "Mehalla El Kubra, Nile Delta",
      desc: "For over a century, Mehalla El Kubra has been the beating heart of Egyptian textile engineering. Master weavers spin raw Delta cotton and flax into dense poplins, soft jerseys, and heavy duck canvas built for decades.",
      image: U("photo-1445205170230-053b83016050"),
      highlights: [
        "Century-old weaving heritage and technical precision",
        "Custom weave densities (160gsm poplin to 380gsm duck canvas)",
        "Eco-conscious low-impact washing processes",
      ],
    },
    {
      num: "03",
      title: "DOWNTOWN CAIRO ATELIERS",
      ar: "ورش وسط البلد بالقاهرة",
      location: "Kasr El Nil & Wasat El Balad",
      desc: "Our garments are cut, sewn, and finished in small independent ateliers in Downtown Cairo. Twelve pairs of skilled hands touch every shirt — from pattern drafting to French seams and hand-stitched buttonholes.",
      image: U("photo-1452860606245-08befc0ff44b"),
      highlights: [
        "100% fair wages & ethical working conditions",
        "Small-batch production runs to eliminate waste",
        "Hand-finished hems and genuine mother-of-pearl buttons",
      ],
    },
  ];

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
          MAKAN CRAFT & SUPPLY CHAIN · CAIRO / EGYPT
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl mt-3 leading-[0.95]"
        >
          MADE HERE. <span className="font-arabic text-4xl sm:text-6xl font-normal opacity-60">صُنِعَ هنا</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg opacity-80 leading-relaxed"
        >
          Designed in Cairo. Produced with local craftsmanship. Built around materials, people, and place. No pharaoh gimmicks — only authentic Egyptian textile mastery.
        </motion.p>
      </section>

      {/* Production Steps */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 space-y-28">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease: EASE }}
            className={`grid lg:grid-cols-12 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <div className={`lg:col-span-6 space-y-6 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold tracking-[0.28em] text-[#A85C43]">
                  STEP {step.num}
                </span>
                <span className="text-xs tracking-wider opacity-50 uppercase">
                  · {step.location}
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl leading-[1.05]">
                {step.title}
              </h2>
              <p className="font-arabic text-2xl text-[#A85C43]">{step.ar}</p>

              <p className="text-base opacity-80 leading-relaxed font-normal">
                {step.desc}
              </p>

              <ul className="space-y-3 pt-2">
                {step.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-[#A85C43] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
              <div className="relative aspect-[4/3] overflow-hidden grain border border-[#0C0C0B]/10 shadow-lg group">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="img-warm h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Craft Manifesto Section */}
      <section className="bg-[#0C0C0B] text-[#F2EFE8] py-20 my-16">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#C9B99A] uppercase block mb-3">
              THE HAND BEHIND THE CLOTH
            </span>
            <h2 className="font-display text-4xl sm:text-6xl leading-[1.05]">
              CRAFT, NOT SOUVENIRS.
            </h2>
            <p className="font-arabic text-2xl text-[#C9B99A] mt-2">
              حِرْفَةٌ وليست تذكاراً.
            </p>
            <p className="mt-6 opacity-80 leading-relaxed text-base font-light">
              We reject the tourist trap. Egyptian fashion does not need pyramids printed on t-shirts or golden hieroglyphics. It manifests in the weight of raw cotton, the crisp finish of a seam, and the enduring dignity of local craftsmen who have passed tailoring techniques through generations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 border border-white/15 bg-white/5">
              <span className="font-display text-4xl text-[#C9B99A]">100%</span>
              <p className="text-xs tracking-wider opacity-70 mt-2 font-bold uppercase">Egyptian Cotton & Linen</p>
            </div>
            <div className="p-6 border border-white/15 bg-white/5">
              <span className="font-display text-4xl text-[#C9B99A]">12</span>
              <p className="text-xs tracking-wider opacity-70 mt-2 font-bold uppercase">Artisan Hands Per Garment</p>
            </div>
            <div className="p-6 border border-white/15 bg-white/5">
              <span className="font-display text-4xl text-[#C9B99A]">0%</span>
              <p className="text-xs tracking-wider opacity-70 mt-2 font-bold uppercase">Pharaonic Tropes or Gimmicks</p>
            </div>
            <div className="p-6 border border-white/15 bg-white/5">
              <span className="font-display text-4xl text-[#C9B99A]">30.04°</span>
              <p className="text-xs tracking-wider opacity-70 mt-2 font-bold uppercase">Cairo Latitude Coordinates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 text-center pt-8">
        <h3 className="font-display text-3xl sm:text-5xl">WEAR THE CRAFT</h3>
        <p className="font-arabic text-xl opacity-60 mt-2">ارتدِ الحِرْفَةَ المِصْرِيّة</p>
        <div className="mt-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-[#0C0C0B] text-[#F2EFE8] px-10 py-4 text-[12px] font-bold tracking-[0.24em] btn-fill"
          >
            DISCOVER THE COLLECTION <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
