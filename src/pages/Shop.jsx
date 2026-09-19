import { AnimatePresence, motion } from "framer-motion";
import { Filter, Grid, RefreshCw, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { CATEGORIES, COLLECTIONS, MATERIALS, PRODUCTS, SIZES } from "../data/products";

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const searchQ = params.get("q") || "";
  const initialCategory = params.get("cat") || "all";
  const initialCollection = params.get("col") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [collection, setCollection] = useState(initialCollection);
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [gender, setGender] = useState("all");
  const [search, setSearch] = useState(searchQ);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (collection !== "all" && p.collection !== collection) return false;
      if (gender !== "all" && p.gender !== "Unisex" && p.gender !== gender) return false;
      if (selectedSize !== "all" && !p.sizes.includes(selectedSize)) return false;
      if (selectedMaterial !== "all" && !p.materials.toLowerCase().includes(selectedMaterial.replace("-", " "))) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchAr = p.nameAr.includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchMat = p.materials.toLowerCase().includes(q);
        if (!matchName && !matchAr && !matchDesc && !matchMat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "newest") return b.isNew ? 1 : -1;
      return a.featured ? -1 : 1;
    });
  }, [category, collection, gender, selectedSize, selectedMaterial, search, sortBy]);

  const resetFilters = () => {
    setCategory("all");
    setCollection("all");
    setSelectedMaterial("all");
    setSelectedSize("all");
    setGender("all");
    setSearch("");
    setSortBy("featured");
    setParams({});
  };

  return (
    <div className="min-h-screen bg-[#F2EFE8] text-[#0C0C0B] pb-24">
      {/* Header */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 pt-16 pb-12 border-b border-[#0C0C0B]/10">
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43]">
          MAKAN CATALOGUE · MADE IN EGYPT
        </p>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl mt-2 leading-[0.95]">
          SHOP <span className="font-arabic text-4xl sm:text-6xl font-normal opacity-60">التسوق</span>
        </h1>
        <p className="mt-4 text-base opacity-75 max-w-lg leading-relaxed">
          Contemporary Egyptian garments cut from long-staple Giza cotton and washed linen. Designed for movement between the city and the coast.
        </p>
      </section>

      {/* Control Bar: Categories & Search/Sort */}
      <section className="sticky top-[72px] z-30 bg-[#F2EFE8]/95 backdrop-blur border-b border-[#0C0C0B]/10">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
          
          {/* Category Quick Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 flex-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 text-[11px] font-bold tracking-[0.18em] uppercase transition whitespace-nowrap border ${
                  category === cat.id
                    ? "bg-[#0C0C0B] text-[#F2EFE8] border-[#0C0C0B]"
                    : "bg-transparent text-[#0C0C0B] border-[#0C0C0B]/15 hover:border-[#0C0C0B]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search input */}
            <div className="relative hidden sm:block w-48">
              <input
                type="text"
                placeholder="Search garments..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/60 border border-[#0C0C0B]/15 pl-8 pr-3 py-1.5 text-xs focus:outline-none focus:border-[#0C0C0B]"
              />
              <Search size={14} className="absolute left-2.5 top-2.5 opacity-50" />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 text-[11px] font-bold tracking-[0.18em] border transition ${
                showFilters ? "bg-[#0C0C0B] text-[#F2EFE8]" : "border-[#0C0C0B]/15 hover:border-[#0C0C0B]"
              }`}
            >
              <SlidersHorizontal size={14} /> FILTERS
            </button>

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border border-[#0C0C0B]/15 px-3 py-2 text-[11px] font-bold tracking-[0.15em] focus:outline-none cursor-pointer"
            >
              <option value="featured">FEATURED</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
              <option value="rating">HIGHEST RATED</option>
              <option value="newest">NEW ARRIVALS</option>
            </select>
          </div>
        </div>

        {/* Expandable Filter Drawer */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-[#0C0C0B]/10 bg-white/40"
            >
              <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
                
                {/* Collection Filter */}
                <div>
                  <span className="font-bold tracking-widest text-[10px] uppercase block mb-3 text-[#A85C43]">
                    Collection
                  </span>
                  <div className="space-y-1.5">
                    <button
                      onClick={() => setCollection("all")}
                      className={`block text-left w-full hover:underline ${collection === "all" ? "font-bold underline" : "opacity-75"}`}
                    >
                      All Collections
                    </button>
                    {COLLECTIONS.map((col) => (
                      <button
                        key={col.id}
                        onClick={() => setCollection(col.id)}
                        className={`block text-left w-full hover:underline ${collection === col.id ? "font-bold underline text-[#A85C43]" : "opacity-75"}`}
                      >
                        {col.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gender Filter */}
                <div>
                  <span className="font-bold tracking-widest text-[10px] uppercase block mb-3 text-[#A85C43]">
                    Gender / Fit
                  </span>
                  <div className="space-y-1.5">
                    {["all", "Unisex", "Men", "Women"].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGender(g)}
                        className={`block text-left w-full hover:underline ${gender === g ? "font-bold underline text-[#A85C43]" : "opacity-75"}`}
                      >
                        {g === "all" ? "All Fits" : g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <span className="font-bold tracking-widest text-[10px] uppercase block mb-3 text-[#A85C43]">
                    Size
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => setSelectedSize("all")}
                      className={`px-2.5 py-1 border text-[10px] font-bold ${selectedSize === "all" ? "bg-[#0C0C0B] text-white" : "border-black/15"}`}
                    >
                      ALL
                    </button>
                    {SIZES.slice(0, 6).map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-2.5 py-1 border text-[10px] font-bold ${selectedSize === sz ? "bg-[#0C0C0B] text-white" : "border-black/15"}`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset Action */}
                <div className="flex flex-col justify-end">
                  <button
                    onClick={resetFilters}
                    className="flex items-center justify-center gap-2 border border-[#0C0C0B] py-2.5 text-[11px] font-bold tracking-[0.2em] hover:bg-[#0C0C0B] hover:text-[#F2EFE8] transition"
                  >
                    <RefreshCw size={13} /> RESET FILTERS
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-12">
        <div className="flex justify-between items-center text-xs tracking-wider opacity-60 mb-6 font-semibold">
          <span>SHOWING {filteredProducts.length} GARMENTS</span>
          {(category !== "all" || collection !== "all" || gender !== "all" || selectedSize !== "all" || search) && (
            <button onClick={resetFilters} className="underline text-[#A85C43] hover:opacity-100">
              CLEAR FILTERS
            </button>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
            {filteredProducts.map((p, index) => (
              <ProductCard key={p.id} product={p} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-[#0C0C0B]/20 my-8">
            <h3 className="font-display text-3xl">NO GARMENTS FOUND</h3>
            <p className="text-sm opacity-60 mt-2">Try clearing your search or adjusting filter parameters.</p>
            <button
              onClick={resetFilters}
              className="mt-6 bg-[#0C0C0B] text-[#F2EFE8] px-8 py-3 text-xs font-bold tracking-widest btn-fill"
            >
              SHOW ALL PRODUCTS
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
