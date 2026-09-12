import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { COLLECTIONS } from "../data/products";
const U = (id, w = 1000) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export function CollectionsList() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-10 md:py-14">
      <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">COLLECTIONS</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2">Six worlds, one city.</h1>
      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {COLLECTIONS.map((c, i) => (
          <Reveal key={c.id} delay={(i % 2) * 0.08}>
            <Link to={`/collections/${c.slug}`} data-cursor="view" data-cursor-label="OPEN" className="group relative block overflow-hidden aspect-[16/10] bg-[#EAE0CE]">
              <img src={U(c.image, 1100)} alt={c.name} loading="lazy" className="img-warm absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.06]" style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-[#F2EBDD] flex items-end justify-between gap-4">
                <div><p className="text-[11px] tracking-[0.28em] opacity-80">{c.count} PIECES</p>
                <h2 className="font-display text-4xl md:text-5xl">{c.name}</h2>
                <p className="font-arabic opacity-70">{c.nameAr}</p><p className="text-sm opacity-80 mt-2 max-w-[420px]">{c.story}</p></div>
                <span className="shrink-0 w-12 h-12 rounded-full border border-white/40 grid place-items-center group-hover:bg-[#F2EBDD] group-hover:text-black transition"><ArrowUpRight size={20} /></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { PRODUCTS } from "../data/products";

export function CollectionDetail() {
  const { slug } = useParams();
  const coll = COLLECTIONS.find((c) => c.slug === slug) || COLLECTIONS[0];
  const items = PRODUCTS.filter((p) => p.collection === coll.id);
  const shown = items.length ? items : PRODUCTS.slice(0, 6);
  return (
    <div>
      <div className="relative overflow-hidden min-h-[52vh] grid place-items-end">
        <img src={U(coll.image, 1800)} alt={coll.name} className="img-warm absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10 pb-10 pt-28 text-[#F2EBDD]">
          <p className="text-[11px] tracking-[0.3em] font-bold">COLLECTION — {coll.count} PIECES</p>
          <h1 className="font-display text-6xl md:text-8xl">{coll.name}</h1>
          <p className="font-arabic text-xl opacity-70">{coll.nameAr}</p>
          <p className="mt-3 max-w-[520px] opacity-85">{coll.story}</p>
        </div>
      </div>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
          {shown.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
        <div className="mt-10 flex gap-3">
          <Link to="/shop" className="border border-[#171615] px-8 py-3.5 text-[12px] font-bold tracking-[0.22em] hover:bg-[#171615] hover:text-[#F2EBDD] transition">SHOP ALL</Link>
          <Link to="/collections" className="u-link self-center text-[12px] font-bold tracking-[0.22em]">ALL COLLECTIONS</Link>
        </div>
      </div>
    </div>
  );
}
