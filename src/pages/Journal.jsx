import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { ARTICLES } from "../data/journal";

export function Journal() {
  const [f, setF] = useState("All");
  const cats = ["All", ...new Set(ARTICLES.map((a) => a.category))];
  const list = f === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === f);
  const [feat, ...rest] = list;
  return (
    <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-10 md:py-14">
      <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">JOURNAL — NOTES FROM THE ATELIER</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2">Read slow.</h1>
      <div className="mt-6 flex gap-2 flex-wrap">{cats.map((c) => <button key={c} onClick={() => setF(c)} aria-pressed={f === c} className={`px-4 py-2 border text-[12px] tracking-[0.16em] font-bold ${f === c ? "bg-[#171615] text-[#F2EBDD]" : "rule border"}`}>{c.toUpperCase()}</button>)}</div>
      {feat && (
        <Link to={`/journal/${feat.id}`} className="group grid lg:grid-cols-2 gap-6 mt-8 border rule border p-3 md:p-4" data-cursor="view" data-cursor-label="READ">
          <div className="overflow-hidden aspect-[16/10]"><img src={feat.image} alt={feat.title} className="img-warm h-full w-full object-cover transition-transform duration-[1.3s] group-hover:scale-105" /></div>
          <div className="p-2 md:p-6 flex flex-col justify-center">
            <p className="text-[11px] font-bold tracking-[0.24em] text-[#A6533C]">{feat.category.toUpperCase()} · {feat.date} · {feat.readingTime}</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2 leading-tight group-hover:italic transition">{feat.title}</h2>
            <p className="mt-3 opacity-70 max-w-[480px]">{feat.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.22em]">READ ARTICLE <ArrowRight size={15} /></span>
          </div>
        </Link>
      )}
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {rest.map((a, i) => (
          <Reveal key={a.id} delay={(i % 3) * 0.07}>
            <Link to={`/journal/${a.id}`} className="group block border rule border p-3" data-cursor="view" data-cursor-label="READ">
              <div className="overflow-hidden aspect-[4/3]"><img src={a.image} alt={a.title} loading="lazy" className="img-warm h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" /></div>
              <p className="mt-4 text-[11px] font-bold tracking-[0.22em] text-[#A6533C] px-1">{a.category.toUpperCase()} · {a.readingTime}</p>
              <h3 className="font-display text-2xl mt-1 px-1 leading-tight">{a.title}</h3>
              <p className="text-sm opacity-60 mt-2 px-1 pb-2 line-clamp-2">{a.excerpt}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";

export function Article() {
  const { id } = useParams();
  const art = ARTICLES.find((a) => a.id === id) || ARTICLES[0];
  const idx = ARTICLES.findIndex((a) => a.id === art.id);
  const next = ARTICLES[(idx + 1) % ARTICLES.length];
  return (
    <article>
      <div className="relative min-h-[56vh] grid place-items-end overflow-hidden">
        <img src={art.image} alt={art.title} className="img-warm absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-[860px] mx-auto w-full px-5 pb-10 pt-32 text-[#F2EBDD]">
          <Link to="/journal" className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] font-bold opacity-80 hover:opacity-100"><ArrowLeft size={14} /> JOURNAL</Link>
          <p className="mt-4 text-[11px] tracking-[0.26em] font-bold text-[#D8C5A9]">{art.category.toUpperCase()} · {art.date} · {art.readingTime} READ</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] mt-2">{art.title}</h1>
          <p className="font-arabic text-lg opacity-70 mt-2">{art.titleAr}</p>
        </div>
      </div>
      <div className="max-w-[700px] mx-auto px-5 py-12">
        <p className="font-editorial text-xl md:text-2xl leading-relaxed border-l-2 border-[#A6533C] pl-5">{art.excerpt}</p>
        {art.body.map((p, i) => <p key={i} className={`mt-6 leading-[1.85] opacity-85 ${i === 0 ? "dropcap" : ""}`}>{p}</p>)}
        <p className="font-arabic mt-8 text-lg opacity-60">صنع في مصر — مَكان، القاهرة.</p>
        <Link to={`/journal/${next.id}`} className="mt-10 group flex items-center justify-between border rule border p-5">
          <span><span className="text-[11px] tracking-[0.24em] font-bold opacity-60">NEXT ARTICLE</span><span className="font-display text-2xl block group-hover:italic">{next.title}</span></span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </article>
  );
}
