import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { EASE } from "../../data/brand";
import { PRODUCTS, formatEGP } from "../../data/products";
import { useStore } from "../../store/useStore";

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore();
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (s.length < 2) return [];
    return PRODUCTS.filter((p) => (p.name + " " + p.category + " " + p.collection).toLowerCase().includes(s)).slice(0, 6);
  }, [q]);

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div className="fixed inset-0 z-[75] bg-[#F2EBDD] flex flex-col" initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.45, ease: EASE }} role="dialog" aria-modal="true" aria-label="Search">
          <div className="mx-auto w-full max-w-[900px] px-5 pt-8">
            <div className="flex items-center justify-between">
              <p className="text-[11px] tracking-[0.3em] font-bold opacity-60">SEARCH MAKAN</p>
              <button aria-label="Close search" onClick={() => setSearchOpen(false)} className="p-2 border rule border rounded-full hover:bg-[#171615] hover:text-[#F2EBDD] transition"><X size={18} /></button>
            </div>
            <label htmlFor="site-search" className="sr-only">Search products</label>
            <input id="site-search" autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Linen, overshirt, Nile…" className="font-display w-full bg-transparent text-4xl md:text-6xl mt-6 pb-4 border-b border-[#171615]/20 placeholder:opacity-30 focus:outline-none" />
            <div className="flex flex-wrap gap-2 mt-5">
              {["Linen", "Cotton", "Nile", "Jacket", "Polo"].map((t) => (
                <button key={t} onClick={() => setQ(t)} className="border rule border px-4 py-1.5 text-[12px] tracking-[0.16em] hover:bg-[#171615] hover:text-[#F2EBDD] transition">{t.toUpperCase()}</button>
              ))}
            </div>
            <div className="mt-8 pb-16 grid sm:grid-cols-2 gap-4">
              {results.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} onClick={() => setSearchOpen(false)} className="flex gap-4 items-center border rule border p-3 hover:bg-[#EAE0CE]/50 transition group">
                  <img src={p.images[0]} alt={p.name} className="w-16 h-20 object-cover img-warm" loading="lazy" />
                  <div className="flex-1">
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-sm opacity-60">{formatEGP(p.price)}</p>
                  </div>
                  <ArrowUpRight size={18} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </Link>
              ))}
              {q.trim().length >= 2 && results.length === 0 && (
                <p className="opacity-60">No pieces for “{q}” yet. Try “linen” or “cotton”.</p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
