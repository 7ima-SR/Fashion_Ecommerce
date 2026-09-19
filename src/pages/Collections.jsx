import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { EASE } from "../data/brand";
import { COLLECTIONS, PRODUCTS } from "../data/products";

export function CollectionsList() {
  return (
    <div className="min-h-screen bg-[#F2EFE8] text-[#0C0C0B] pb-24">
      {/* Header */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 pt-16 pb-12 border-b border-[#0C0C0B]/10">
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#A85C43]">
          MAKAN EDITORIAL ARCHIVE
        </p>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl mt-2 leading-[0.95]">
          COLLECTIONS <span className="font-arabic text-4xl sm:text-6xl font-normal opacity-60">المجموعات</span>
        </h1>
        <p className="mt-4 text-base opacity-75 max-w-xl leading-relaxed">
          Five thematic studies exploring Cairo architecture, Nile fluidity, sun-bleached desert dust, brutalist concrete, and traditional Egyptian silhouettes.
        </p>
      </section>

      {/* Grid of 5 Collections */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16 space-y-20">
        {COLLECTIONS.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
            className={`grid lg:grid-cols-12 gap-8 items-center border-b border-[#0C0C0B]/10 pb-16 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
              <Link
                to={`/collections/${c.slug}`}
                className="group relative block overflow-hidden aspect-[16/10] bg-[#C9B99A]/30 grain border border-[#0C0C0B]/10"
              >
                <img
                  src={`https://images.unsplash.com/${c.image}?q=80&w=1400&auto=format&fit=crop`}
                  alt={c.name}
                  loading="lazy"
                  className="img-warm h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
                />
              </Link>
            </div>

            <div className={`lg:col-span-5 space-y-5 ${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#A85C43]">
                {c.count} GARMENTS
              </span>
              <h2 className="font-display text-4xl sm:text-5xl leading-tight">
                {c.name}
              </h2>
              <p className="font-arabic text-2xl text-[#A85C43]">{c.nameAr}</p>
              <p className="text-sm opacity-80 leading-relaxed">{c.subtitle}</p>
              <p className="text-xs opacity-60 leading-relaxed font-light">{c.story}</p>

              <div className="pt-4">
                <Link
                  to={`/collections/${c.slug}`}
                  className="inline-flex items-center gap-2 bg-[#0C0C0B] text-[#F2EFE8] px-8 py-3.5 text-[11px] font-bold tracking-[0.24em] btn-fill"
                >
                  EXPLORE {c.name} <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export function CollectionDetail() {
  const { slug } = useParams();
  const collection = COLLECTIONS.find((c) => c.slug === slug || c.id === slug) || COLLECTIONS[0];
  const items = PRODUCTS.filter((p) => p.collection === collection.id);

  return (
    <div className="min-h-screen bg-[#F2EFE8] text-[#0C0C0B] pb-24">
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex flex-col justify-end p-6 sm:p-12 overflow-hidden bg-[#0C0C0B] text-[#F2EFE8] grain">
        <img
          src={`https://images.unsplash.com/${collection.image}?q=80&w=1800&auto=format&fit=crop`}
          alt={collection.name}
          className="absolute inset-0 h-full w-full object-cover img-warm opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0B] via-[#0C0C0B]/30 to-transparent" />

        <div className="relative z-10 max-w-3xl">
          <p className="text-[11px] font-bold tracking-[0.3em] text-[#C9B99A] uppercase mb-2">
            MAKAN COLLECTION ARCHIVE
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95]">
            {collection.name}
          </h1>
          <p className="font-arabic text-3xl text-[#C9B99A] mt-2">{collection.nameAr}</p>
          <p className="mt-4 text-base opacity-80 max-w-xl font-light leading-relaxed">
            {collection.story}
          </p>
        </div>
      </section>

      {/* Collection Garments */}
      <section className="mx-auto max-w-[1440px] px-5 md:px-10 py-16">
        <div className="flex justify-between items-center text-xs tracking-wider opacity-60 mb-8 font-semibold border-b border-[#0C0C0B]/10 pb-4">
          <span>{items.length} PIECES IN {collection.name}</span>
          <Link to="/collections" className="underline text-[#A85C43]">
            VIEW ALL COLLECTIONS
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
          {items.map((p, index) => (
            <ProductCard key={p.id} product={p} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
