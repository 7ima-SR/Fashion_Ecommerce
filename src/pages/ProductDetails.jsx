import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, Heart, MapPin, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { EASE } from "../data/brand";
import { PRODUCTS, formatEGP } from "../data/products";
import { useStore } from "../store/useStore";

export default function ProductDetails() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const { addToCart, toggleWishlist, wishlist } = useStore();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const wished = wishlist.includes(product.id);

  const imageLabels = [
    "1. FULL SILHOUETTE",
    "2. FABRIC TEXTURE",
    "3. STITCH & CRAFT DETAIL",
    "4. CAIRO ENVIRONMENT",
    "5. BACK & SIDE DRAPE",
  ];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.collection === product.collection)
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F2EFE8] text-[#0C0C0B] pb-24">
      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1440px] px-5 md:px-10 pt-6 pb-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] opacity-60 hover:opacity-100 transition"
        >
          <ArrowLeft size={14} /> BACK TO SHOP
        </Link>
      </nav>

      {/* PDP Main Layout */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 grid lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: 5-Image Gallery (Thumbnails + Main View) */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
          
          {/* Vertical Thumbnail Strip */}
          <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto md:overflow-y-auto no-scrollbar max-h-[640px] shrink-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition ${
                  activeImageIndex === idx ? "border-[#0C0C0B] scale-95" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`View ${idx + 1}`} className="h-full w-full object-cover img-warm" />
                <span className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-[8px] font-bold text-center py-0.5">
                  0{idx + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Main Hero Viewer */}
          <div className="relative flex-1 aspect-[3/4] bg-[#C9B99A]/30 overflow-hidden grain order-1 md:order-2 border border-[#0C0C0B]/10">
            <motion.img
              key={activeImageIndex}
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              initial={{ opacity: 0.85, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="h-full w-full object-cover img-warm"
            />

            {/* Current Image Type Label */}
            <div className="absolute top-4 left-4 bg-[#0C0C0B]/80 text-[#F2EFE8] backdrop-blur px-3 py-1 text-[10px] font-bold tracking-[0.24em]">
              {imageLabels[activeImageIndex] || `SHOT 0${activeImageIndex + 1}`}
            </div>

            {product.badge && (
              <div className="absolute top-4 right-4 bg-[#F2EFE8] text-[#0C0C0B] px-3 py-1 text-[10px] font-bold tracking-[0.2em] shadow-sm">
                {product.badge.toUpperCase()}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Product Specs & Story */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#A85C43] uppercase">
                {product.collectionName || "MAKAN 001"}
              </span>
              <span className="text-[10px] tracking-wider opacity-50 uppercase">
                · {product.gender} FIT
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl mt-2 leading-[1.05]">
              {product.name}
            </h1>
            <p className="font-arabic text-xl text-[#A85C43] mt-1">{product.nameAr}</p>

            <div className="mt-4 flex items-baseline gap-4">
              <span className="text-2xl font-bold">{formatEGP(product.price)}</span>
              {product.compareAt && (
                <span className="text-base line-through opacity-50">{formatEGP(product.compareAt)}</span>
              )}
              <span className="text-[11px] tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 font-bold">
                IN STOCK · CAIRO ATELIER
              </span>
            </div>
          </div>

          <p className="text-sm opacity-80 leading-relaxed font-normal border-t border-[#0C0C0B]/10 pt-4">
            {product.description}
          </p>

          {/* Color Selector */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold tracking-[0.2em] block opacity-70">
              COLORWAY: <strong className="text-[#0C0C0B]">{selectedColor.toUpperCase()}</strong>
            </span>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  title={c.name}
                  className={`w-9 h-9 rounded-full border-2 transition-transform ${
                    selectedColor === c.name ? "border-[#0C0C0B] scale-110" : "border-transparent hover:scale-105"
                  }`}
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold tracking-[0.2em] opacity-70">
                SIZE: <strong className="text-[#0C0C0B]">{selectedSize}</strong>
              </span>
              <Link to="/size-guide" className="text-[11px] font-bold tracking-wider underline text-[#A85C43]">
                SIZE GUIDE
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-5 py-2.5 text-[12px] font-bold tracking-[0.18em] border transition ${
                    selectedSize === s
                      ? "bg-[#0C0C0B] text-[#F2EFE8] border-[#0C0C0B]"
                      : "border-[#0C0C0B]/20 hover:border-[#0C0C0B]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & CTA */}
          <div className="pt-4 flex items-center gap-3">
            {/* Quantity Selector */}
            <div className="flex items-center border border-[#0C0C0B]/20 h-[52px]">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-2 text-base font-bold hover:bg-black/5"
              >
                −
              </button>
              <span className="px-4 text-sm font-bold">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-2 text-base font-bold hover:bg-black/5"
              >
                +
              </button>
            </div>

            {/* Add to Bag Button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#0C0C0B] text-[#F2EFE8] h-[52px] text-[12px] font-bold tracking-[0.24em] btn-fill flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check size={18} /> ADDED TO BAG
                </>
              ) : (
                "ADD TO BAG"
              )}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`h-[52px] w-[52px] border flex items-center justify-center transition ${
                wished ? "bg-[#A85C43] text-white border-[#A85C43]" : "border-[#0C0C0B]/20 hover:border-[#0C0C0B]"
              }`}
              aria-label="Save to Wishlist"
            >
              <Heart size={20} fill={wished ? "currentColor" : "none"} />
            </button>
          </div>

          {/* Material & Production Origin Breakdown */}
          <div className="border-t border-[#0C0C0B]/10 pt-6 space-y-3 text-xs opacity-80">
            <div className="flex items-start gap-3">
              <ShieldCheck size={16} className="text-[#A85C43] shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-[#0C0C0B]">FABRIC & MATERIAL:</strong>
                <p className="mt-0.5">{product.materials}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#A85C43] shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-[#0C0C0B]">PRODUCTION ORIGIN:</strong>
                <p className="mt-0.5">{product.origin?.fabric} · {product.origin?.made}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Truck size={16} className="text-[#A85C43] shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-[#0C0C0B]">SHIPPING & RETURNS:</strong>
                <p className="mt-0.5">Free Cairo delivery over EGP 3,000. Cash on delivery available across Egypt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation Rail */}
      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-5 md:px-10 mt-28 border-t border-[#0C0C0B]/10 pt-16">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43]">
            COMPLETE THE LOOK
          </p>
          <h2 className="font-display text-3xl sm:text-5xl mt-2">YOU MAY ALSO LIKE</h2>
          <p className="font-arabic text-xl opacity-60 mt-1">قطع تكمل هذه الإطلالة</p>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
            {relatedProducts.map((p, idx) => (
              <ProductCard key={p.id} product={p} index={idx} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
