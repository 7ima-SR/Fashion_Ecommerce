import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { ImageReveal, LineReveal, Reveal, SectionHead } from "../components/ui/Reveal";
import { BRAND, EASE, IMAGES } from "../data/brand";
import { ARTICLES, CAIRO_STORIES } from "../data/journal";
import { COLLECTIONS, PRODUCTS, formatEGP } from "../data/products";

export default function Home() {
  return (
    <div className="bg-[#F2EFE8] text-[#0C0C0B]">
      <Hero />
      <Marquee />
      <CollectionsSection />
      <ManifestoSection />
      <ShopPreview />
      <CairoStreetEditorial />
      <MadeInEgyptCraftSection />
      <HandBehindClothSection />
      <JournalPreview />
      <Newsletter />
    </div>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-[96svh] grid lg:grid-cols-[1.1fr_1fr] overflow-hidden border-b border-[#0C0C0B]/10" aria-label="Hero">
      {/* Left Column: Editorial Headline & Copy */}
      <div className="relative flex flex-col justify-end px-5 md:px-10 pb-10 pt-28 lg:py-16 order-2 lg:order-1">
        
        {/* Campaign Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: EASE }} 
          className="flex items-center gap-3 text-[11px] font-bold tracking-[0.28em] text-[#A85C43] mb-3"
        >
          <span>{BRAND.collectionNo}</span>
          <span>·</span>
          <span>CAIRO / EGYPT</span>
          <span>·</span>
          <span>{BRAND.season}</span>
        </motion.div>

        {/* Main Headline */}
        <h1 className="font-display leading-[0.92] text-[14vw] sm:text-7xl lg:text-[5.8vw] xl:text-[88px] text-[#0C0C0B]">
          <LineReveal text="MADE HERE." delay={0.1} as="span" className="block font-bold" />
          <LineReveal text="WORN" delay={0.25} as="span" className="block font-bold" />
          <span className="block overflow-hidden">
            <motion.span 
              className="block italic text-[#A85C43] font-normal" 
              initial={{ y: "110%" }} 
              animate={{ y: "0%" }} 
              transition={{ duration: 1, delay: 0.45, ease: EASE }}
            >
              EVERYWHERE.
            </motion.span>
          </span>
        </h1>

        {/* Bilingual Arabic Tagline */}
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.65, duration: 0.8 }} 
          className="font-arabic text-2xl mt-4 text-[#A85C43]"
        >
          صُنِعَ هنا. يُرتَدى في كل مكان.
        </motion.p>

        {/* Supporting Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.8, duration: 0.8, ease: EASE }} 
          className="mt-5 max-w-[460px] text-[15px] leading-relaxed opacity-80 font-normal"
        >
          A contemporary Egyptian fashion label shaped by place, craft, and movement. Long-staple Delta cotton and washed linen cut in Downtown Cairo.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.9, duration: 0.8, ease: EASE }} 
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link 
            to="/shop" 
            className="bg-[#0C0C0B] text-[#F2EFE8] px-9 py-4 text-[12px] font-bold tracking-[0.24em] btn-fill inline-flex items-center gap-2"
          >
            SHOP COLLECTION <ArrowRight size={15} />
          </Link>
          <Link 
            to="/story" 
            className="border border-[#0C0C0B] px-9 py-4 text-[12px] font-bold tracking-[0.24em] hover:bg-[#0C0C0B] hover:text-[#F2EFE8] transition-colors"
          >
            DISCOVER THE STORY
          </Link>
        </motion.div>

        {/* Meta badges */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.1 }} 
          className="mt-10 flex flex-wrap gap-6 text-[11px] tracking-[0.22em] opacity-60 font-semibold"
        >
          <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#A85C43]" /> CAIRO / 30.04° N</span>
          <span>GIZA COTTON</span>
          <span>MEHALLA LINEN</span>
          <span>CASH ON DELIVERY</span>
        </motion.div>
      </div>

      {/* Right Column: Hero Fashion Editorial Image */}
      <div className="relative min-h-[55svh] lg:min-h-full overflow-hidden grain order-1 lg:order-2 bg-[#C9B99A]/30">
        <motion.img 
          src={IMAGES.hero} 
          alt="Contemporary Egyptian fashion editorial shot in Cairo architecture background" 
          style={{ y, scale }} 
          className="img-warm absolute inset-0 h-full w-full object-cover" 
        />
        <motion.div 
          initial={{ scaleY: 1 }} 
          animate={{ scaleY: 0 }} 
          transition={{ duration: 1.2, ease: EASE }} 
          style={{ transformOrigin: "top" }} 
          className="absolute inset-0 bg-[#F2EFE8] z-10" 
        />

        {/* Editorial Overlay Details */}
        <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end text-[#F2EFE8]">
          <div className="bg-[#0C0C0B]/60 backdrop-blur px-3.5 py-2 text-[11px] tracking-[0.22em]">
            <p className="font-bold">MAKAN 001 — LOOK 01</p>
            <p className="opacity-70 text-[10px]">DOWNTOWN CAIRO ARCHITECTURE</p>
          </div>
          <Link 
            to="/product/cairo-linen-overshirt" 
            className="bg-[#F2EFE8] text-[#0C0C0B] px-4 py-2.5 text-[11px] font-bold tracking-[0.2em] hover:bg-[#A85C43] hover:text-white transition"
          >
            SHOP THE LOOK
          </Link>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [
    "MAKAN",
    "مَكان",
    "MADE IN EGYPT",
    "صُنِعَ في مصر",
    "GIZA EXTRA-LONG STAPLE COTTON",
    "MEHALLA WASHED LINEN",
    "FROM CAIRO, WITH INTENT",
    "30.04° N",
    "CASH ON DELIVERY",
  ];

  return (
    <div className="border-b rule overflow-hidden bg-[#0C0C0B] text-[#F2EFE8] py-3.5" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-[12px] font-bold tracking-[0.28em]">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className={t.includes("م") || t.includes("ص") ? "font-arabic text-sm text-[#C9B99A]" : ""}>{t}</span>
            <span className="text-[#A85C43]">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function CollectionsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-28" aria-label="Collections">
      <SectionHead 
        kicker="01 — COLLECTIONS" 
        title="Five studies of place." 
        ar="المجموعات الخمس" 
        link={
          <Link to="/collections" className="u-link text-[12px] font-bold tracking-[0.24em] inline-flex items-center gap-1">
            ALL COLLECTIONS <ArrowUpRight size={15} />
          </Link>
        } 
      />

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {COLLECTIONS.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.08}>
            <Link 
              to={`/collections/${c.slug}`} 
              data-cursor="view" 
              data-cursor-label="OPEN" 
              className="group relative block overflow-hidden aspect-[3/4] bg-[#C9B99A]/30 border border-[#0C0C0B]/10"
            >
              <img 
                src={`https://images.unsplash.com/${c.image}?q=80&w=1000&auto=format&fit=crop`} 
                alt={c.name} 
                loading="lazy" 
                className="img-warm absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.07]" 
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0B]/80 via-[#0C0C0B]/20 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#F2EFE8]">
                <p className="text-[11px] tracking-[0.28em] text-[#C9B99A] font-bold">{c.count} PIECES</p>
                <h3 className="font-display text-3xl sm:text-4xl mt-1">{c.name}</h3>
                <p className="font-arabic text-[#C9B99A] text-lg">{c.nameAr}</p>
                <p className="text-xs opacity-0 -translate-y-1 group-hover:opacity-90 group-hover:translate-y-0 transition-all duration-500 mt-2 max-w-[280px] leading-relaxed">
                  {c.subtitle}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="grid lg:grid-cols-2 border-y rule" aria-label="Manifesto">
      <div className="px-5 md:px-10 py-16 md:py-24 flex flex-col justify-center bg-[#C9B99A]/20">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43]">02 — MANIFESTO · FROM CAIRO</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] mt-4">
            We don&apos;t recreate Egypt.<br />
            <span className="italic text-[#A85C43]">We reinterpret it.</span>
          </h2>
          <p className="font-arabic text-2xl text-[#A85C43] mt-2">لا نعيد إنتاج الماضي، بل نعيد صياغته.</p>
          
          <p className="mt-6 max-w-[500px] leading-relaxed opacity-80 text-base">
            No pharaoh costumes. No souvenir gold graphics. No fake hieroglyphics. Egypt is communicated through proportion, high-grade Delta cotton, washed linen, architectural geometries, and the quiet dignity of handmade cloth.
          </p>
          
          <div className="mt-8 flex items-center gap-6">
            <Link 
              to="/story" 
              className="inline-flex items-center gap-2 border-b border-[#0C0C0B] pb-1 text-[12px] font-bold tracking-[0.24em] hover:gap-4 transition-all"
            >
              READ OUR STORY <ArrowRight size={15} />
            </Link>
            <Link 
              to="/made-in-egypt" 
              className="inline-flex items-center gap-2 border-b border-[#A85C43] text-[#A85C43] pb-1 text-[12px] font-bold tracking-[0.24em] hover:gap-4 transition-all"
            >
              PRODUCTION STORY <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-0 border-t lg:border-t-0 lg:border-l rule">
        <ImageReveal src={IMAGES.atelier} alt="Inside the MAKAN Downtown Cairo atelier" ratio="aspect-[3/4] md:aspect-auto md:h-full" />
        <ImageReveal src={IMAGES.fabric} alt="Washed Egyptian flax linen fabric texture" ratio="aspect-[3/4] md:aspect-auto md:h-full" />
      </div>
    </section>
  );
}

function ShopPreview() {
  const picks = [PRODUCTS[0], PRODUCTS[1], PRODUCTS[3], PRODUCTS[6]];

  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-28" aria-label="Featured pieces">
      <SectionHead 
        kicker="03 — THIS SEASON" 
        title="Worn in Cairo right now." 
        ar="المختارات الحالية"
        link={
          <Link to="/shop" className="u-link text-[12px] font-bold tracking-[0.24em] inline-flex items-center gap-1">
            SHOP ALL PRODUCTS <ArrowUpRight size={15} />
          </Link>
        } 
      />
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
        {picks.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function CairoStreetEditorial() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0C0C0B] text-[#F2EFE8] py-20 md:py-32" aria-label="Cairo street editorial">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#C9B99A]">
          04 — CAIRO EDITORIAL · 30.04° N
        </p>
        <h2 className="font-display text-4xl md:text-7xl mt-3 max-w-[800px] leading-[0.98]">
          Cairo street culture.<br />
          <span className="italic text-[#C9B99A]">Real scenes. Real place.</span>
        </h2>
        <p className="font-arabic mt-3 text-[#C9B99A] text-2xl">شوارع القاهرة بين الضوء والظل</p>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.1fr] gap-10">
          <div className="relative hidden lg:block">
            <div className="sticky top-28 aspect-[3/4] overflow-hidden grain border border-white/10">
              {CAIRO_STORIES.map((s, i) => (
                <motion.img
                  key={s.id}
                  src={`https://images.unsplash.com/${s.image}?q=80&w=1200&auto=format&fit=crop`}
                  alt={s.title}
                  loading="lazy"
                  className="img-warm absolute inset-0 h-full w-full object-cover"
                  initial={false}
                  animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.06 }}
                  transition={{ duration: 0.9, ease: EASE }}
                />
              ))}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-arabic text-2xl text-[#C9B99A]">{CAIRO_STORIES[active].ar}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {CAIRO_STORIES.map((s, i) => {
              const prod = PRODUCTS.find((p) => p.id === s.productId) || PRODUCTS[0];
              return (
                <motion.div
                  key={s.id}
                  onViewportEnter={() => setActive(i)}
                  viewport={{ margin: "-40% 0px" }}
                  className={`border p-6 md:p-8 transition-colors duration-500 ${
                    i === active ? "border-[#C9B99A] bg-white/[0.05]" : "border-white/10"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] tracking-[0.28em] text-[#C9B99A] font-bold">
                      {s.kicker}
                    </span>
                    <span className="text-[10px] tracking-widest opacity-60">
                      CAIRO / 30.04° N
                    </span>
                  </div>

                  <h3 className="font-display text-3xl md:text-5xl mt-2">{s.title}</h3>

                  <img
                    src={`https://images.unsplash.com/${s.image}?q=80&w=1000&auto=format&fit=crop`}
                    alt={s.title}
                    className="lg:hidden mt-4 aspect-[4/3] w-full object-cover img-warm"
                    loading="lazy"
                  />

                  <p className="mt-3 opacity-80 leading-relaxed max-w-[480px] font-light text-sm">
                    {s.text}
                  </p>

                  {prod && (
                    <Link
                      to={`/product/${prod.id}`}
                      className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4 group"
                    >
                      <img
                        src={prod.images[0]}
                        alt={prod.name}
                        className="w-14 h-[72px] object-cover img-warm"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <span className="block font-semibold group-hover:underline underline-offset-4 text-sm">
                          {prod.name}
                        </span>
                        <span className="text-xs text-[#C9B99A] font-bold">
                          {formatEGP(prod.price)}
                        </span>
                      </div>
                      <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 transition" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MadeInEgyptCraftSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-28 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center" aria-label="Made in Egypt">
      <Reveal>
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43]">05 — MADE IN EGYPT</p>
        <h2 className="font-display text-4xl md:text-6xl mt-3 leading-[1.02]">
          Cotton from the Delta.<br />
          Cut in Downtown Cairo.
        </h2>
        <p className="font-arabic text-2xl text-[#A85C43] mt-2">قطن الدلتا وخياطة القاهرة</p>

        <ul className="mt-8 border-t rule">
          {[
            ["Giza 86 & Giza 92 Cotton", "Certified extra-long staple, gin-traceable."],
            ["Woven in Mehalla El Kubra", "Over a century of technical weaving heritage."],
            ["Tailored in Downtown Cairo", "Independent ateliers, fair wages, small runs."],
            ["Pre-shrunk Garment Wash", "Pre-shrunk linen & poplin, soft on first wear."],
          ].map(([t, d]) => (
            <li key={t} className="flex justify-between gap-6 py-4 border-b rule">
              <span className="font-bold text-sm">{t}</span>
              <span className="text-xs opacity-60 text-right">{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            to="/made-in-egypt"
            className="inline-flex items-center gap-2 bg-[#0C0C0B] text-[#F2EFE8] px-8 py-3.5 text-[11px] font-bold tracking-[0.24em] btn-fill"
          >
            OUR PRODUCTION PROCESS <ArrowRight size={15} />
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-4">
        <ImageReveal src={IMAGES.craft} alt="Artisan hands tailoring an Egyptian garment" />
        <div className="pt-10">
          <ImageReveal src={IMAGES.atelier} alt="Inside the Kasr El Nil workshop" />
        </div>
      </div>
    </section>
  );
}

function HandBehindClothSection() {
  return (
    <section className="bg-[#C9B99A]/20 py-20 border-y rule" aria-label="Craft feature">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43]">06 — EGYPTIAN CRAFT STORY</p>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 leading-tight">
            THE HAND BEHIND THE CLOTH.
          </h2>
          <p className="font-arabic text-2xl text-[#A85C43] mt-2">الأيدي التي تصنع الثوب</p>

          <p className="mt-5 opacity-80 leading-relaxed text-sm">
            Craftsmanship rather than tourist objects. Every seam, buttonhole, and hand-bound hem in MAKAN garments tells a story of local expertise — from Mehalla looms to Cairo cutting tables.
          </p>

          <div className="mt-6 flex gap-4 text-xs font-bold tracking-widest text-[#A85C43]">
            <span>100% LOCAL PRODUCTION</span>
            <span>·</span>
            <span>HAND-FINISHED DETAILS</span>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-3 gap-3">
          <ImageReveal src={IMAGES.fabric} alt="Textile closeup" ratio="aspect-[3/4]" />
          <ImageReveal src={IMAGES.craft} alt="Tailoring closeup" ratio="aspect-[3/4]" />
          <ImageReveal src={IMAGES.studio} alt="Garment drape closeup" ratio="aspect-[3/4]" />
        </div>
      </div>
    </section>
  );
}

function JournalPreview() {
  return (
    <section className="bg-[#F2EFE8] border-b rule" aria-label="Journal">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-28">
        <SectionHead 
          kicker="07 — JOURNAL" 
          title="Notes from the atelier." 
          ar="يوميات المعمل"
          link={
            <Link to="/journal" className="u-link text-[12px] font-bold tracking-[0.24em] inline-flex items-center gap-1">
              ALL ARTICLES <ArrowUpRight size={15} />
            </Link>
          } 
        />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08}>
              <Link to={`/journal/${a.id}`} className="group block" data-cursor="view" data-cursor-label="READ">
                <div className="overflow-hidden aspect-[4/3] bg-[#C9B99A]/30 border border-[#0C0C0B]/10">
                  <img 
                    src={a.image} 
                    alt={a.title} 
                    loading="lazy" 
                    className="img-warm h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]" 
                    style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }} 
                  />
                </div>
                <p className="mt-4 text-[11px] font-bold tracking-[0.24em] text-[#A85C43]">
                  {a.category.toUpperCase()} · {a.readingTime}
                </p>
                <h3 className="font-display text-2xl mt-1 leading-tight group-hover:italic transition">
                  {a.title}
                </h3>
                <p className="text-xs opacity-60 mt-2 line-clamp-2 leading-relaxed">
                  {a.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-28 text-center" aria-label="Newsletter">
      <Reveal className="max-w-[640px] mx-auto">
        <p className="font-arabic text-2xl text-[#A85C43]">رسائل من الاستوديو</p>
        <h2 className="font-display text-4xl md:text-6xl mt-2">Studio notes, once a month.</h2>
        <p className="mt-4 opacity-75 text-sm leading-relaxed">
          Fabric drops, lookbook releases, and 10% off your first order with code <strong className="font-mono">CAIRO10</strong>.
        </p>
        {done ? (
          <p className="mt-6 border border-[#0C0C0B] px-6 py-4 font-semibold text-sm bg-white" role="status">
            Ahlan — welcome to MAKAN. Code CAIRO10 is ready at checkout.
          </p>
        ) : (
          <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-[480px] mx-auto" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <label htmlFor="nl" className="sr-only">Email address</label>
            <input id="nl" required type="email" placeholder="your@email.com" className="field flex-1" />
            <button className="bg-[#0C0C0B] text-[#F2EFE8] px-8 py-3.5 text-[12px] font-bold tracking-[0.22em] btn-fill">JOIN</button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
