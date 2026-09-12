import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { CATEGORIES, COLLECTIONS, PRODUCTS } from "../data/products";

const U = (id, w = 1200) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const cat = params.get("cat") || "all";
  const coll = params.get("coll") || "all";
  const sort = params.get("sort") || "featured";
  const maxPrice = Number(params.get("max") || 4000);
  const onlyNew = params.get("tag") === "new";

  const set = (k, v) => {
    const n = new URLSearchParams(params);
    if (!v || v === "all") n.delete(k); else n.set(k, v);
    setParams(n, { replace: true });
  };

  const items = useMemo(() => {
    let list = [...PRODUCTS];
    if (onlyNew) list = list.filter((p) => p.isNew);
    if (cat !== "all") list = list.filter((p) => p.category === cat);
    if (coll !== "all") list = list.filter((p) => p.collection === coll);
    list = list.filter((p) => p.price <= maxPrice);
    if (sort === "low") list.sort((a, b) => a.price - b.price);
    if (sort === "high") list.sort((a, b) => b.price - a.price);
    if (sort === "new") list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    return list;
  }, [cat, coll, sort, maxPrice, onlyNew]);

  return (
    <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-10 md:py-14">
      <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">SHOP {onlyNew ? "— NEW ARRIVALS" : ""}</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2">All pieces <span className="font-arabic text-2xl md:text-3xl opacity-50">· كل القطع</span></h1>
      <p className="mt-3 opacity-60 max-w-[560px]">{items.length} pieces · Made in Egypt · Cash on delivery across Egypt.</p>

      <div className="mt-8 flex flex-wrap items-center gap-2 border-y rule border-y py-3 sticky top-[68px] z-30 bg-[#F2EBDD]/95 backdrop-blur">
        <button onClick={() => setFiltersOpen(true)} className="lg:hidden flex items-center gap-2 border rule border px-4 py-2 text-[12px] font-bold tracking-[0.18em]"><SlidersHorizontal size={15} /> FILTERS</button>
        <div className="hidden lg:flex flex-wrap gap-2 items-center">
          <FilterPills label="Category" value={cat} options={[{ id: "all", name: "All" }, ...CATEGORIES]} onChange={(v) => set("cat", v)} />
          <span className="w-px h-5 bg-black/15 mx-1" />
          <FilterPills label="Collection" value={coll} options={[{ id: "all", name: "All" }, ...COLLECTIONS.map((c) => ({ id: c.id, name: c.name }))]} onChange={(v) => set("coll", v)} />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <label htmlFor="sort" className="text-[11px] tracking-[0.2em] font-bold opacity-60">SORT</label>
          <select id="sort" value={sort} onChange={(e) => set("sort", e.target.value)} className="bg-transparent border rule border px-3 py-2 text-sm">
            <option value="featured">Featured</option><option value="new">Newest</option>
            <option value="low">Price low → high</option><option value="high">Price high → low</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-[220px_1fr] gap-10">
        <aside className="hidden lg:block space-y-7" aria-label="Filters">
          <FilterGroup title="Max price" >
            <input type="range" min={1300} max={4000} step={50} value={maxPrice} onChange={(e) => set("max", e.target.value)} aria-label="Maximum price" className="w-full accent-[#A6533C]" />
            <p className="text-sm mt-1">Up to EGP {maxPrice.toLocaleString()}</p>
            {maxPrice < 4000 && <button onClick={() => set("max", "")} className="text-[12px] underline underline-offset-4 opacity-60">Reset</button>}
          </FilterGroup>
          <FilterGroup title="Availability">
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={onlyNew} onChange={(e) => set("tag", e.target.checked ? "new" : "")} className="accent-[#171615]" /> New arrivals only</label>
          </FilterGroup>
          <div className="border rule border p-4 text-[13px] leading-relaxed bg-[#EAE0CE]/40">
            <p className="font-bold tracking-[0.18em] text-[11px]">CAIRO DELIVERY</p>
            <p className="mt-1 opacity-70">Standard 2–4 days · EGP 85. Express Cairo · EGP 140. Free over EGP 3,000.</p>
          </div>
        </aside>

        <div>
          {items.length === 0 ? (
            <p className="py-20 text-center opacity-60">Nothing matches those filters. <button className="underline" onClick={() => setParams({})}>Clear all</button></p>
          ) : (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10">
              {items.map((p, i) => (
                <div key={p.id} className={i === 2 ? "col-span-2 xl:col-span-1" : ""}>
                  <ProductCard product={p} index={i} large={false} />
                </div>
              ))}
              <div className="col-span-2 xl:col-span-3 grid md:grid-cols-2 gap-4 mt-2">
                <div className="relative overflow-hidden min-h-[280px] group">
                  <img src={U("photo-1441984904996-e0b6ba687e04", 1200)} alt="MAKAN Cairo collection editorial" loading="lazy" className="img-warm absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="relative p-8 text-[#F2EBDD] h-full flex flex-col justify-end min-h-[280px]">
                    <p className="text-[11px] tracking-[0.28em]">EDITORIAL — CAIRO / 01</p>
                    <p className="font-display text-3xl mt-1">Cut for Downtown life.</p>
                  </div>
                </div>
                <div className="bg-[#171615] text-[#F2EBDD] p-8 flex flex-col justify-center min-h-[280px]">
                  <p className="font-arabic text-lg opacity-60">صنع في مصر</p>
                  <p className="font-display text-3xl mt-1">Every piece, made in Egypt.</p>
                  <p className="text-sm opacity-70 mt-3 max-w-[380px]">Delta cotton, Mehalla weaving, Cairo stitching. Traceable mills, above-market pay, small runs.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {filtersOpen && (
          <>
            <motion.div className="fixed inset-0 z-[80] bg-black/45" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setFiltersOpen(false)} />
            <motion.div className="fixed bottom-0 inset-x-0 z-[81] bg-[#F2EBDD] rounded-t-2xl p-6 max-h-[85vh] overflow-auto" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 32 }} role="dialog" aria-modal="true" aria-label="Filters">
              <div className="flex justify-between items-center"><p className="font-bold tracking-[0.2em] text-[12px]">FILTERS</p><button aria-label="Close filters" onClick={() => setFiltersOpen(false)}><X size={20} /></button></div>
              <div className="mt-4 space-y-5">
                <div><p className="text-[11px] font-bold tracking-[0.2em] opacity-60 mb-2">CATEGORY</p><div className="flex flex-wrap gap-2">{[{ id: "all", name: "All" }, ...CATEGORIES].map((c) => <button key={c.id} onClick={() => set("cat", c.id)} className={`px-4 py-2 border text-sm ${cat === c.id ? "bg-[#171615] text-[#F2EBDD]" : "rule border"}`}>{c.name}</button>)}</div></div>
                <div><p className="text-[11px] font-bold tracking-[0.2em] opacity-60 mb-2">MAX PRICE — EGP {maxPrice.toLocaleString()}</p><input type="range" min={1300} max={4000} step={50} value={maxPrice} onChange={(e) => set("max", e.target.value)} className="w-full accent-[#A6533C]" aria-label="Maximum price" /></div>
                <button onClick={() => setFiltersOpen(false)} className="w-full bg-[#171615] text-[#F2EBDD] py-4 text-[12px] font-bold tracking-[0.24em]">SHOW {items.length} PIECES</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterPills({ value, options, onChange }) {
  return (
    <div className="flex flex-wrap gap-1.5" role="group">
      {options.slice(0, 8).map((o) => (
        <button key={o.id} onClick={() => onChange(o.id)} aria-pressed={value === o.id} className={`px-3.5 py-1.5 text-[12px] tracking-[0.08em] border transition ${value === o.id ? "bg-[#171615] text-[#F2EBDD] border-[#171615]" : "rule border hover:border-[#171615]"}`}>{o.name}</button>
      ))}
    </div>
  );
}
function FilterGroup({ title, children }) {
  return <div><p className="text-[11px] font-bold tracking-[0.24em] opacity-60 mb-2">{title.toUpperCase()}</p>{children}</div>;
}
