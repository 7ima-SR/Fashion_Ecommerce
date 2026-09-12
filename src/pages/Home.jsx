import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { ImageReveal, LineReveal, Reveal, SectionHead } from "../components/ui/Reveal";
import { EASE, IMAGES } from "../data/brand";
import { ARTICLES } from "../data/journal";
import { COLLECTIONS, PRODUCTS, formatEGP } from "../data/products";
import { CAIRO_STORIES } from "../data/journal";

const U = (id, w = 1600) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Collections />
      <EditorialBreak />
      <ShopPreview />
      <CairoStories />
      <CraftSection />
      <JournalPreview />
      <Newsletter />
    </>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative min-h-[96svh] grid lg:grid-cols-[1.05fr_1fr] overflow-hidden" aria-label="Hero">
      <div className="relative flex flex-col justify-end px-5 md:px-10 pb-10 pt-28 lg:py-16 order-2 lg:order-1">
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }} className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">
          CAIRO · EST. 2021 · MADE IN EGYPT
        </motion.p>
        <h1 className="font-display leading-[0.95] mt-4 text-[15vw] sm:text-7xl lg:text-[6.2vw] xl:text-[92px]">
          <LineReveal text="MADE HERE." delay={0.1} as="span" className="block" />
          <LineReveal text="WORN" delay={0.25} as="span" className="block" />
          <span className="block overflow-hidden"><motion.span className="block italic text-[#A6533C]" initial={{ y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, delay: 0.45, ease: EASE }}>EVERYWHERE.</motion.span></span>
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="font-arabic text-xl mt-4 opacity-70">من هنا. إلى كل مكان.</motion.p>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8, ease: EASE }} className="mt-5 max-w-[440px] text-[15px] leading-relaxed opacity-75">
          Egyptian cotton and washed linen — cut in Wasat El Balad, built for Cairo heat, designed to live anywhere.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8, ease: EASE }} className="mt-8 flex flex-wrap gap-3">
          <Link to="/shop" className="bg-[#171615] text-[#F2EBDD] px-9 py-4 text-[12px] font-bold tracking-[0.24em] btn-fill inline-flex items-center gap-2">SHOP COLLECTION <ArrowRight size={15} /></Link>
          <Link to="/story" className="border border-[#171615] px-9 py-4 text-[12px] font-bold tracking-[0.24em] hover:bg-[#171615] hover:text-[#F2EBDD] transition-colors">OUR STORY</Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-10 flex gap-8 text-[12px] tracking-[0.18em] opacity-60 font-semibold">
          <span>GIZA COTTON</span><span>WASHED LINEN</span><span className="hidden sm:inline">CASH ON DELIVERY</span>
        </motion.div>
      </div>
      <div className="relative min-h-[52svh] lg:min-h-full overflow-hidden grain order-1 lg:order-2">
        <motion.img src={IMAGES.hero} alt="Egyptian model wearing MAKAN linen in warm Cairo light" style={{ y, scale }} className="img-warm absolute inset-0 h-full w-full object-cover" />
        <motion.div initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 1.2, ease: EASE }} style={{ transformOrigin: "top" }} className="absolute inset-0 bg-[#F2EBDD] z-10" />
        <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-end text-[#F2EBDD]">
          <p className="text-[11px] tracking-[0.24em] bg-black/35 backdrop-blur px-3 py-2">CAIRO / 01 — SHOT IN WASAT EL BALAD</p>
          <Link to="/product/cairo-linen-overshirt" className="bg-[#F2EBDD] text-[#171615] px-4 py-2.5 text-[11px] font-bold tracking-[0.2em] hover:bg-[#A6533C] hover:text-white transition" data-cursor="view" data-cursor-label="SHOP">SHOP THE LOOK</Link>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = ["MADE IN EGYPT", "مَكان", "EGYPTIAN COTTON", "CAIRO — ALEX — EVERYWHERE", "WASHED LINEN", "CASH ON DELIVERY"];
  return (
    <div className="border-y rule border-y overflow-hidden bg-[#171615] text-[#F2EBDD] py-3.5" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-[12px] font-bold tracking-[0.28em]">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="flex items-center gap-10"><span className={t.includes("م") ? "font-arabic" : ""}>{t}</span><span className="text-[#A6533C]">●</span></span>
        ))}
      </div>
    </div>
  );
}

function Collections() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24" aria-label="Collections">
      <SectionHead kicker="01 — COLLECTIONS" title="Dress like the city." ar="البسي المدينة" link={<Link to="/collections" className="u-link text-[12px] font-bold tracking-[0.24em] inline-flex items-center gap-1">ALL COLLECTIONS <ArrowUpRight size={15} /></Link>} />
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {COLLECTIONS.slice(0, 3).map((c, i) => (
          <Reveal key={c.id} delay={i * 0.08}>
            <Link to={`/collections/${c.slug}`} data-cursor="view" data-cursor-label="OPEN" className="group relative block overflow-hidden aspect-[3/4] bg-[#EAE0CE]">
              <img src={U(c.image, 900)} alt={c.name} loading="lazy" className="img-warm absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.07]" style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#F2EBDD]">
                <p className="text-[11px] tracking-[0.28em] opacity-80">{c.count} PIECES</p>
                <h3 className="font-display text-4xl mt-1">{c.name}</h3>
                <p className="font-arabic opacity-70">{c.nameAr}</p>
                <p className="text-sm opacity-0 -translate-y-1 group-hover:opacity-90 group-hover:translate-y-0 transition-all duration-500 mt-2 max-w-[280px]">{c.story}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function EditorialBreak() {
  return (
    <section className="grid lg:grid-cols-2 border-y rule border-y" aria-label="Manifesto">
      <div className="px-5 md:px-10 py-14 md:py-20 flex flex-col justify-center bg-[#EAE0CE]/40">
        <Reveal><p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">02 — MANIFESTO</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] mt-4">We don&apos;t recreate Egypt.<br /><span className="italic">We reinterpret it.</span></h2>
          <p className="mt-6 max-w-[480px] leading-relaxed opacity-75">No pharaoh prints. No souvenir gold. Just proportion, cloth and use — the balcony arch as a neckline, the galabeya as a tailored silhouette, Delta cotton as engineering.</p>
          <Link to="/story" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#171615] pb-1 text-[12px] font-bold tracking-[0.24em] hover:gap-4 transition-all">READ OUR STORY <ArrowRight size={15} /></Link>
        </Reveal>
      </div>
      <div className="grid grid-cols-2 gap-0">
        <ImageReveal src={U("photo-1445205170230-053b83016050", 800)} alt="Inside the MAKAN atelier" ratio="aspect-[3/4] md:aspect-auto md:h-full" />
        <ImageReveal src={U("photo-1523381210434-271e8be1f52b", 800)} alt="Folded Egyptian cotton" ratio="aspect-[3/4] md:aspect-auto md:h-full" />
      </div>
    </section>
  );
}

function ShopPreview() {
  const picks = [PRODUCTS[0], PRODUCTS[3], PRODUCTS[4], PRODUCTS[6]];
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24" aria-label="Featured pieces">
      <SectionHead kicker="03 — THIS WEEK" title="Worn in Cairo right now." link={<Link to="/shop" className="u-link text-[12px] font-bold tracking-[0.24em] inline-flex items-center gap-1">SHOP ALL <ArrowUpRight size={15} /></Link>} />
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
        {picks.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
      </div>
    </section>
  );
}

function CairoStories() {
  const [active, setActive] = useState(0);
  const wrap = useRef(null);

  return (
    <section ref={wrap} className="bg-[#171615] text-[#F2EBDD] py-16 md:py-28" aria-label="Cairo stories">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#D8C5A9]">04 — CAIRO STORIES · A SCROLL</p>
        <h2 className="font-display text-4xl md:text-7xl mt-3 max-w-[800px] leading-[1]">Five scenes.<br /><span className="italic text-[#D8C5A9]">One city.</span></h2>
        <p className="font-arabic mt-3 opacity-60 text-lg">القاهرة في خمس مشاهد</p>

        <div className="mt-10 grid lg:grid-cols-[1fr_1fr] gap-8">
          <div className="relative hidden lg:block">
            <div className="sticky top-28 aspect-[3/4] overflow-hidden">
              {CAIRO_STORIES.map((s, i) => (
                <motion.img key={s.id} src={U(s.image, 1100)} alt={s.title} loading="lazy"
                  className="img-warm absolute inset-0 h-full w-full object-cover"
                  initial={false} animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.08 }}
                  transition={{ duration: 0.9, ease: EASE }} />
              ))}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="font-arabic text-2xl">{CAIRO_STORIES[active].ar}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {CAIRO_STORIES.map((s, i) => {
              const prod = PRODUCTS.find((p) => p.id === s.productId);
              return (
                <motion.div key={s.id}
                  onViewportEnter={() => setActive(i)} viewport={{ margin: "-40% 0px" }}
                  className={`border p-6 md:p-8 transition-colors duration-500 ${i === active ? "border-[#D8C5A9]/60 bg-white/[0.04]" : "border-white/12"}`}>
                  <p className="text-[11px] tracking-[0.28em] text-[#D8C5A9]">{s.kicker}</p>
                  <h3 className="font-display text-3xl md:text-5xl mt-2">{s.title}</h3>
                  <img src={U(s.image, 900)} alt={s.title} className="lg:hidden mt-4 aspect-[4/3] w-full object-cover img-warm" loading="lazy" />
                  <p className="mt-3 opacity-75 leading-relaxed max-w-[440px]">{s.text}</p>
                  {prod && (
                    <Link to={`/product/${prod.id}`} className="mt-5 flex items-center gap-4 border-t border-white/10 pt-5 group" data-cursor="view" data-cursor-label="SHOP">
                      <img src={prod.images[0]} alt={prod.name} className="w-14 h-[72px] object-cover img-warm" loading="lazy" />
                      <span className="flex-1"><span className="block font-semibold group-hover:underline underline-offset-4">{prod.name}</span><span className="text-sm opacity-60">{formatEGP(prod.price)}</span></span>
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

function CraftSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center" aria-label="Craft">
      <Reveal>
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">05 — MADE IN EGYPT, PROPERLY</p>
        <h2 className="font-display text-4xl md:text-6xl mt-3 leading-[1.02]">Cotton from the Delta.<br />Cut in Cairo.</h2>
        <ul className="mt-8 space-y-0 border-t rule border-t">
          {[["Giza 86 & 92", "Extra-long staple, traceable gins."], ["Woven in Mehalla", "A century of weaving know-how."], ["Sewn in Wasat El Balad", "Twelve hands per shirt, above-market pay."], ["Garment-washed", "Pre-shrunk. Soft on first wear."]].map(([t, d]) => (
            <li key={t} className="flex justify-between gap-6 py-4 border-b rule border-b">
              <span className="font-bold">{t}</span><span className="text-sm opacity-60 text-right">{d}</span>
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="grid grid-cols-2 gap-4">
        <ImageReveal src={U("photo-1452860606245-08befc0ff44b", 800)} alt="Hands finishing a garment" />
        <div className="pt-10"><ImageReveal src={U("photo-1591047139829-d91aecb6caea", 800)} alt="Work jacket detail" /></div>
      </div>
    </section>
  );
}

function JournalPreview() {
  return (
    <section className="border-t rule border-t bg-[#EAE0CE]/40" aria-label="Journal">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24">
        <SectionHead kicker="06 — JOURNAL" title="Notes from the atelier." link={<Link to="/journal" className="u-link text-[12px] font-bold tracking-[0.24em] inline-flex items-center gap-1">ALL ARTICLES <ArrowUpRight size={15} /></Link>} />
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08}>
              <Link to={`/journal/${a.id}`} className="group block" data-cursor="view" data-cursor-label="READ">
                <div className="overflow-hidden aspect-[4/3] bg-[#D8C5A9]/40"><img src={a.image} alt={a.title} loading="lazy" className="img-warm h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]" style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }} /></div>
                <p className="mt-4 text-[11px] font-bold tracking-[0.24em] text-[#A6533C]">{a.category.toUpperCase()} · {a.readingTime}</p>
                <h3 className="font-display text-2xl mt-1 leading-tight group-hover:italic transition">{a.title}</h3>
                <p className="text-sm opacity-60 mt-2 line-clamp-2">{a.excerpt}</p>
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
    <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 md:py-24 text-center" aria-label="Newsletter">
      <Reveal className="max-w-[640px] mx-auto">
        <p className="font-arabic text-xl opacity-60">رسائل من الاستوديو</p>
        <h2 className="font-display text-4xl md:text-6xl mt-2">Studio notes, once a month.</h2>
        <p className="mt-4 opacity-70">Fabric drops, open Saturdays, and 10% off your first order. No noise.</p>
        {done ? <p className="mt-6 border rule border px-6 py-4 font-semibold" role="status">Ahlan — you&apos;re on the list. Code CAIRO10 is yours.</p> : (
          <form className="mt-6 flex flex-col sm:flex-row gap-2 max-w-[480px] mx-auto" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <label htmlFor="nl" className="sr-only">Email</label>
            <input id="nl" required type="email" placeholder="your@email.com" className="field flex-1" />
            <button className="bg-[#171615] text-[#F2EBDD] px-8 py-3.5 text-[12px] font-bold tracking-[0.22em] btn-fill">JOIN</button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
