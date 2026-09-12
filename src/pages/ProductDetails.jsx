import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Expand, Heart, Minus, Plus, Ruler, Truck, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { EASE } from "../data/brand";
import { PRODUCTS, formatEGP } from "../data/products";
import { useStore } from "../store/useStore";

export default function ProductDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [img, setImg] = useState(0);
  const [size, setSize] = useState(product.sizes.includes("M") ? "M" : product.sizes[0]);
  const [color, setColor] = useState(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [stage, setStage] = useState("idle");
  const [lightbox, setLightbox] = useState(false);
  const [tab, setTab] = useState("details");
  const wished = wishlist.includes(product.id);

  useEffect(() => { setImg(0); setSize(product.sizes.includes("M") ? "M" : product.sizes[0]); setColor(product.colors[0].name); setQty(1); window.scrollTo(0, 0); }, [id]); // eslint-disable-line

  useEffect(() => {
    const on = (e) => {
      if (e.key === "ArrowRight") setImg((v) => (v + 1) % product.images.length);
      if (e.key === "ArrowLeft") setImg((v) => (v - 1 + product.images.length) % product.images.length);
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [product]);

  const related = useMemo(() => PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.collection === product.collection)).slice(0, 4), [product]);

  const add = () => {
    if (stage !== "idle") return;
    setStage("adding");
    setTimeout(() => {
      addToCart({ id: product.id, size, color, qty });
      setStage("added");
      setTimeout(() => setStage("idle"), 1800);
    }, 650);
  };

  return (
    <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-6 md:py-10">
      <nav className="text-[12px] tracking-[0.14em] opacity-60 flex gap-2 items-center" aria-label="Breadcrumb">
        <Link to="/" className="hover:opacity-100">HOME</Link>/<Link to="/shop" className="hover:opacity-100">SHOP</Link>/<span className="text-[#171615] font-semibold">{product.name.toUpperCase()}</span>
      </nav>

      <div className="mt-6 grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14">
        <div>
          <div className="flex gap-4">
            <div className="hidden md:flex flex-col gap-3 w-[84px] shrink-0" role="tablist" aria-label="Product thumbnails">
              {product.images.map((s, i) => (
                <button key={i} role="tab" aria-selected={img === i} aria-label={`View image ${i + 1}`} onClick={() => setImg(i)} className={`aspect-[3/4] overflow-hidden border transition ${img === i ? "border-[#171615]" : "border-transparent opacity-60 hover:opacity-100"}`}>
                  <img src={s} alt="" className="h-full w-full object-cover img-warm" loading="lazy" />
                </button>
              ))}
            </div>
            <div className="relative flex-1 overflow-hidden bg-[#EAE0CE] aspect-[3/4] group" data-cursor="view" data-cursor-label="ZOOM" onClick={() => setLightbox(true)}>
              <AnimatePresence mode="wait">
                <motion.img key={img} src={product.images[img]} alt={product.name} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: EASE }} className="img-warm absolute inset-0 h-full w-full object-cover" />
              </AnimatePresence>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
                {product.images.map((_, i) => <span key={i} className={`h-1.5 rounded-full transition-all ${i === img ? "w-6 bg-[#171615]" : "w-1.5 bg-black/30"}`} />)}
              </div>
              <button aria-label="Open fullscreen" className="absolute top-3 right-3 bg-[#F2EBDD]/90 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition"><Expand size={16} /></button>
              {product.badge && <span className="absolute left-3 top-3 bg-[#F2EBDD] px-2.5 py-1 text-[10px] font-bold tracking-[0.2em]">{product.badge.toUpperCase()}</span>}
            </div>
          </div>
          <div className="flex md:hidden gap-2 mt-3 overflow-x-auto no-scrollbar snap-x">
            {product.images.map((s, i) => (
              <button key={i} onClick={() => setImg(i)} aria-label={`View image ${i + 1}`} className={`snap-center shrink-0 w-20 aspect-[3/4] overflow-hidden border ${img === i ? "border-[#171615]" : "border-black/10"}`}><img src={s} alt="" className="h-full w-full object-cover" loading="lazy" /></button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">{product.collection.replace("-", " ").toUpperCase()} · MADE IN EGYPT</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1] mt-2">{product.name}</h1>
          <p className="font-arabic text-lg opacity-50 mt-1">{product.nameAr}</p>
          <div className="flex items-center gap-3 mt-3">
            <p className="text-2xl font-bold">{formatEGP(product.price)}</p>
            {product.compareAt && <p className="line-through opacity-50">{formatEGP(product.compareAt)}</p>}
            <span className="text-[13px] opacity-60">★ {product.rating} ({product.reviews})</span>
          </div>
          <p className="mt-5 leading-relaxed opacity-80 max-w-[520px]">{product.description}</p>

          <div className="mt-6">
            <p className="text-[12px] font-bold tracking-[0.2em]">COLOR — <span className="opacity-60">{color.toUpperCase()}</span></p>
            <div className="flex gap-2.5 mt-2.5" role="radiogroup" aria-label="Color">
              {product.colors.map((c) => (
                <button key={c.name} role="radio" aria-checked={color === c.name} aria-label={c.name} title={c.name} onClick={() => setColor(c.name)} className={`w-9 h-9 rounded-full border-2 grid place-items-center transition ${color === c.name ? "border-[#171615]" : "border-black/15"}`}>
                  <span className="w-6 h-6 rounded-full border border-black/10" style={{ background: c.hex }} />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center">
              <p className="text-[12px] font-bold tracking-[0.2em]">SIZE — <span className="opacity-60">{size}</span></p>
              <Link to="/size-guide" className="text-[12px] underline underline-offset-4 inline-flex items-center gap-1 opacity-70 hover:opacity-100"><Ruler size={13} /> Size guide</Link>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2.5" role="radiogroup" aria-label="Size">
              {product.sizes.map((s) => (
                <button key={s} role="radio" aria-checked={size === s} onClick={() => setSize(s)} className={`py-3 border text-sm font-bold tracking-[0.1em] transition ${size === s ? "bg-[#171615] text-[#F2EBDD] border-[#171615]" : "rule border hover:border-[#171615]"}`}>{s}</button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-2.5">
            <div className="flex items-center border rule border" aria-label="Quantity">
              <button aria-label="Decrease quantity" className="px-3.5 py-3.5" onClick={() => setQty((q) => Math.max(1, q - 1))}><Minus size={15} /></button>
              <span className="w-8 text-center font-bold" aria-live="polite">{qty}</span>
              <button aria-label="Increase quantity" className="px-3.5 py-3.5" onClick={() => setQty((q) => Math.min(9, q + 1))}><Plus size={15} /></button>
            </div>
            <button onClick={add} className={`flex-1 text-[12px] font-bold tracking-[0.24em] transition-colors flex items-center justify-center gap-2 ${stage === "added" ? "bg-[#626B55] text-white" : "bg-[#171615] text-[#F2EBDD] btn-fill"}`} aria-live="polite">
              {stage === "idle" && "ADD TO BAG"} {stage === "adding" && "ADDING…"} {stage === "added" && <><Check size={16} /> ADDED ✓</>}
            </button>
            <motion.button whileTap={{ scale: 1.25 }} onClick={() => toggleWishlist(product.id)} aria-pressed={wished} aria-label="Toggle wishlist" className={`px-4 border transition ${wished ? "bg-[#A6533C] text-white border-[#A6533C]" : "rule border"}`}>
              <Heart size={18} fill={wished ? "currentColor" : "none"} />
            </motion.button>
          </div>

          <div className="mt-5 flex items-start gap-3 text-[13px] bg-[#EAE0CE]/50 border rule border p-3.5">
            <Truck size={17} className="shrink-0 mt-0.5" />
            <p><b>Standard Egypt 2–4 days · EGP 85.</b> Express Cairo · EGP 140. Free over EGP 3,000. Cash on delivery available. <Link to="/faq" className="underline underline-offset-4">Details</Link></p>
          </div>

          <div className="mt-6 border-t rule border-t">
            {[["details", "Details & fit"], ["origin", "Made in Egypt"], ["shipping", "Shipping & returns"]].map(([k, label]) => (
              <div key={k} className="border-b rule border-b">
                <button onClick={() => setTab(tab === k ? "" : k)} aria-expanded={tab === k} className="w-full flex justify-between py-4 text-[13px] font-bold tracking-[0.18em]">{label}<span>{tab === k ? "−" : "+"}</span></button>
                <AnimatePresence initial={false}>
                  {tab === k && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="overflow-hidden">
                      <div className="pb-5 text-[14px] leading-relaxed opacity-80 space-y-2">
                        {k === "details" && <><p><b>Materials:</b> {product.materials}</p><p><b>Fit:</b> {product.fit}</p><p><b>Care:</b> {product.care}</p></>}
                        {k === "origin" && <><p><b>Fabric:</b> {product.origin.fabric}</p><p><b>Made:</b> {product.origin.made}</p><p><b>Cotton:</b> {product.origin.cotton}</p><p className="font-arabic">صنع في مصر — بفخر.</p></>}
                        {k === "shipping" && <p>Try at home — 14-day free returns in Cairo & Giza, 30 EGP rest of Egypt. Refunds to card in 3–5 days, COD refunds via bank transfer or store credit.</p>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-16 md:mt-24" aria-label="You may also like">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl md:text-5xl">Pairs well with.</h2>
          <Link to="/shop" className="u-link text-[12px] font-bold tracking-[0.22em] hidden sm:inline-flex items-center gap-1">SHOP ALL <ArrowRight size={14} /></Link>
        </div>
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div className="fixed inset-0 z-[90] bg-[#171615]/95 grid place-items-center p-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(false)} role="dialog" aria-modal="true" aria-label="Image viewer">
            <button aria-label="Close viewer" className="absolute top-5 right-5 text-white p-2"><X size={26} /></button>
            <button aria-label="Previous image" onClick={(e) => { e.stopPropagation(); setImg((v) => (v - 1 + product.images.length) % product.images.length); }} className="absolute left-4 text-white p-3"><ArrowLeft size={24} /></button>
            <motion.img key={img} src={product.images[img]} alt={product.name} initial={{ scale: 0.96 }} animate={{ scale: 1 }} className="max-h-[86vh] max-w-[92vw] object-contain" onClick={(e) => e.stopPropagation()} />
            <button aria-label="Next image" onClick={(e) => { e.stopPropagation(); setImg((v) => (v + 1) % product.images.length); }} className="absolute right-4 text-white p-3"><ArrowRight size={24} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
