import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Heart, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EASE } from "../../data/brand";
import { formatEGP } from "../../data/products";
import { useStore } from "../../store/useStore";

export default function QuickViewModal({ product, onClose }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const wished = wishlist.includes(product.id);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      qty: 1,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0C0C0B]/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="relative w-full max-w-4xl bg-[#F2EFE8] text-[#0C0C0B] shadow-2xl overflow-hidden border border-[#0C0C0B]/10 max-h-[90vh] flex flex-col md:flex-row z-10"
        >
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 p-2 bg-[#F2EFE8]/80 backdrop-blur hover:bg-[#0C0C0B] hover:text-[#F2EFE8] transition"
          >
            <X size={20} />
          </button>

          {/* Left: Images */}
          <div className="md:w-1/2 p-6 flex flex-col bg-[#C9B99A]/20">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#C9B99A]/40 mb-4">
              <img
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover img-warm transition-all duration-500"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-14 h-18 shrink-0 overflow-hidden border transition ${
                    selectedImage === idx ? "border-[#0C0C0B] scale-95" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product details */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#A85C43]">
                  {product.collectionName?.toUpperCase() || "MAKAN / 001"}
                </span>
                {product.badge && (
                  <span className="bg-[#0C0C0B] text-[#F2EFE8] text-[10px] font-bold px-2 py-0.5 tracking-[0.2em]">
                    {product.badge.toUpperCase()}
                  </span>
                )}
              </div>

              <h2 className="font-display text-2xl sm:text-3xl mt-2 leading-tight">
                {product.name}
              </h2>
              <p className="font-arabic text-sm opacity-60 mt-1">{product.nameAr}</p>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-xl font-bold">{formatEGP(product.price)}</span>
                {product.compareAt && (
                  <span className="text-sm line-through opacity-50">
                    {formatEGP(product.compareAt)}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm opacity-75 leading-relaxed">
                {product.description}
              </p>

              {/* Color Selector */}
              <div className="mt-6">
                <span className="text-[11px] font-bold tracking-[0.2em] block mb-2 opacity-70">
                  COLOR: {selectedColor.toUpperCase()}
                </span>
                <div className="flex gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      title={c.name}
                      className={`w-8 h-8 rounded-full border-2 transition-transform ${
                        selectedColor === c.name ? "border-[#0C0C0B] scale-110" : "border-transparent hover:scale-105"
                      }`}
                      style={{ background: c.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-6">
                <span className="text-[11px] font-bold tracking-[0.2em] block mb-2 opacity-70">
                  SIZE: {selectedSize}
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-4 py-2 text-[12px] font-bold tracking-[0.15em] border transition ${
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

              {/* Specs */}
              <div className="mt-6 pt-4 border-t border-[#0C0C0B]/10 text-[12px] space-y-1.5 opacity-70">
                <p><strong className="font-semibold">Material:</strong> {product.materials}</p>
                <p><strong className="font-semibold">Origin:</strong> {product.origin?.made}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-4 border-t border-[#0C0C0B]/10 flex gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 bg-[#0C0C0B] text-[#F2EFE8] py-3.5 text-[11px] font-bold tracking-[0.24em] btn-fill flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check size={16} /> ADDED TO BAG
                  </>
                ) : (
                  "ADD TO BAG"
                )}
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-3.5 border transition ${
                  wished ? "bg-[#A85C43] text-white border-[#A85C43]" : "border-[#0C0C0B]/20 hover:border-[#0C0C0B]"
                }`}
                aria-label="Wishlist"
              >
                <Heart size={18} fill={wished ? "currentColor" : "none"} />
              </button>

              <Link
                to={`/product/${product.id}`}
                onClick={onClose}
                className="p-3.5 border border-[#0C0C0B]/20 hover:border-[#0C0C0B] hover:bg-[#0C0C0B] hover:text-[#F2EFE8] transition flex items-center justify-center"
                title="View Full Product Page"
              >
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
