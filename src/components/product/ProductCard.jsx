import { motion } from "framer-motion";
import { Eye, Heart, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EASE } from "../../data/brand";
import { formatEGP } from "../../data/products";
import { useStore } from "../../store/useStore";
import QuickViewModal from "./QuickViewModal";

export default function ProductCard({ product, large = false, index = 0 }) {
  const { toggleWishlist, wishlist, addToCart } = useStore();
  const [added, setAdded] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  if (!product) return null;

  const wished = wishlist.includes(product.id);

  const quickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0] || "M",
      color: product.colors[0]?.name || "Default",
      qty: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewOpen(true);
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-6%" }}
        transition={{ duration: 0.8, delay: (index % 4) * 0.06, ease: EASE }}
        className="group relative flex flex-col justify-between"
      >
        <Link
          to={`/product/${product.id}`}
          data-cursor="view"
          data-cursor-label="VIEW"
          aria-label={product.name}
          className="block"
        >
          {/* Image Container with hover swap */}
          <div className={`relative overflow-hidden bg-[#C9B99A]/20 ${large ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
            <img
              src={product.images[0]}
              alt={product.name}
              loading="lazy"
              className="img-warm absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
            <img
              src={product.images[1] || product.images[0]}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="img-warm absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />

            {/* Badges */}
            <div className="absolute left-3 top-3 flex flex-col gap-1 z-10">
              {product.badge && (
                <span className="bg-[#F2EFE8] text-[#0C0C0B] px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] shadow-sm">
                  {product.badge.toUpperCase()}
                </span>
              )}
              {product.collectionName && (
                <span className="bg-[#0C0C0B]/80 backdrop-blur text-[#F2EFE8] px-2 py-0.5 text-[9px] font-bold tracking-[0.2em]">
                  {product.collectionName}
                </span>
              )}
            </div>

            {product.compareAt && (
              <span className="absolute right-3 top-3 bg-[#A85C43] text-white px-2.5 py-1 text-[10px] font-bold tracking-[0.2em]">
                −{Math.round((1 - product.price / product.compareAt) * 100)}%
              </span>
            )}

            {/* Hover Action Bar */}
            <div className="absolute bottom-3 left-3 right-3 hidden md:flex gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
              <button
                onClick={quickAdd}
                className="flex-1 bg-[#0C0C0B]/95 text-[#F2EFE8] text-center text-[11px] font-bold tracking-[0.22em] py-3 backdrop-blur hover:bg-[#A85C43] transition-colors"
              >
                {added ? "ADDED ✓" : "QUICK ADD +"}
              </button>
              <button
                onClick={handleQuickView}
                title="Quick View"
                className="p-3 bg-[#F2EFE8]/95 text-[#0C0C0B] backdrop-blur hover:bg-[#0C0C0B] hover:text-[#F2EFE8] transition-colors"
              >
                <Eye size={16} />
              </button>
            </div>
          </div>

          {/* Product Meta */}
          <div className="pt-4 flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-[15px] leading-tight group-hover:underline underline-offset-4">
                {product.name}
              </h3>
              <p className="text-[12px] opacity-55 mt-1 font-arabic">
                {product.nameAr}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex gap-1.5" aria-label="Available colors">
                  {product.colors.map((c) => (
                    <span
                      key={c.name}
                      title={c.name}
                      className="w-3.5 h-3.5 rounded-full border border-black/20"
                      style={{ background: c.hex }}
                    />
                  ))}
                </span>
              </div>
            </div>

            <div className="text-right shrink-0">
              <p className="font-bold text-[15px]">{formatEGP(product.price)}</p>
              {product.compareAt && (
                <p className="text-[12px] line-through opacity-50">{formatEGP(product.compareAt)}</p>
              )}
            </div>
          </div>
        </Link>

        {/* Wishlist Button */}
        <div className="absolute top-2.5 right-2.5 md:opacity-0 md:group-hover:opacity-100 transition z-10">
          <motion.button
            whileTap={{ scale: 1.3 }}
            aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className={`p-2.5 rounded-full backdrop-blur transition ${
              wished ? "bg-[#A85C43] text-white md:opacity-100" : "bg-[#F2EFE8]/90 hover:bg-[#F2EFE8]"
            }`}
          >
            <Heart size={16} fill={wished ? "currentColor" : "none"} />
          </motion.button>
        </div>

        {/* Mobile Quick Add */}
        <button
          onClick={quickAdd}
          aria-label={`Quick add ${product.name}`}
          className="md:hidden mt-3 w-full border border-[#0C0C0B]/20 py-2.5 text-[11px] font-bold tracking-[0.22em] flex items-center justify-center gap-1.5 hover:bg-[#0C0C0B] hover:text-[#F2EFE8] transition"
        >
          <Plus size={14} /> {added ? "ADDED ✓" : "QUICK ADD"}
        </button>
      </motion.article>

      {/* Quick View Modal */}
      {quickViewOpen && (
        <QuickViewModal product={product} onClose={() => setQuickViewOpen(false)} />
      )}
    </>
  );
}
