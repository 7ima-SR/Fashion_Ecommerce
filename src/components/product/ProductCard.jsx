import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EASE } from "../../data/brand";
import { formatEGP } from "../../data/products";
import { useStore } from "../../store/useStore";

export default function ProductCard({ product, large = false, index = 0 }) {
  const { toggleWishlist, wishlist, addToCart } = useStore();
  const [added, setAdded] = useState(false);
  const wished = wishlist.includes(product.id);

  const quickAdd = (e) => {
    e.preventDefault(); e.stopPropagation();
    addToCart({ id: product.id, size: "M", color: product.colors[0].name, qty: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.06, ease: EASE }}
      className="group relative"
    >
      <Link to={`/product/${product.id}`} data-cursor="view" data-cursor-label="VIEW" aria-label={product.name} className="block">
        <div className={`relative overflow-hidden bg-[#EAE0CE] ${large ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
          <img src={product.images[0]} alt={product.name} loading="lazy" className="img-warm absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]" />
          <img src={product.images[1] || product.images[0]} alt="" aria-hidden="true" loading="lazy" className="img-warm absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          {product.badge && (
            <span className="absolute left-3 top-3 bg-[#F2EBDD] px-2.5 py-1 text-[10px] font-bold tracking-[0.2em]">{product.badge.toUpperCase()}</span>
          )}
          {product.compareAt && (
            <span className="absolute right-3 top-3 bg-[#A6533C] text-white px-2.5 py-1 text-[10px] font-bold tracking-[0.2em]">−{Math.round((1 - product.price / product.compareAt) * 100)}%</span>
          )}
          <span className={`absolute bottom-3 left-3 right-3 hidden md:flex translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}>
            <span onClick={quickAdd} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && quickAdd(e)} className="flex-1 bg-[#171615]/95 text-[#F2EBDD] text-center text-[11px] font-bold tracking-[0.24em] py-3 backdrop-blur hover:bg-[#A6533C] transition-colors">
              {added ? "ADDED ✓" : "QUICK ADD +"}
            </span>
          </span>
        </div>
        <div className="pt-3.5 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-[15px] leading-tight group-hover:underline underline-offset-4">{product.name}</h3>
            <p className="text-[12px] opacity-55 mt-1">{product.colors.map((c) => c.name).join(" · ")} · {product.category}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="flex gap-1.5" aria-label="Available colors">
                {product.colors.map((c) => <span key={c.name} title={c.name} className="w-3.5 h-3.5 rounded-full border border-black/20" style={{ background: c.hex }} />)}
              </span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className="font-bold text-[15px]">{formatEGP(product.price)}</p>
            {product.compareAt && <p className="text-[12px] line-through opacity-50">{formatEGP(product.compareAt)}</p>}
          </div>
        </div>
      </Link>
      <div className="absolute top-2.5 right-2.5 md:opacity-0 md:group-hover:opacity-100 transition">
        <motion.button
          whileTap={{ scale: 1.4 }}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={wished}
          onClick={() => toggleWishlist(product.id)}
          className={`p-2.5 rounded-full backdrop-blur transition ${wished ? "bg-[#A6533C] text-white md:opacity-100" : "bg-[#F2EBDD]/90 hover:bg-[#F2EBDD]"}`}
        >
          <motion.span animate={wished ? { scale: [1, 1.35, 1] } : {}} transition={{ duration: 0.4 }}>
            <Heart size={16} fill={wished ? "currentColor" : "none"} />
          </motion.span>
        </motion.button>
      </div>
      <button onClick={quickAdd} aria-label={`Quick add ${product.name}`} className="md:hidden mt-3 w-full border rule border py-2.5 text-[11px] font-bold tracking-[0.22em] flex items-center justify-center gap-1.5">
        <Plus size={14} /> {added ? "ADDED ✓" : "ADD"}
      </button>
    </motion.article>
  );
}
