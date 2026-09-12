import { Link } from "react-router-dom";
import { Reveal } from "../components/ui/Reveal";
const U = (id, w = 1400) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export default function Story() {
  return (
    <div>
      <section className="relative min-h-[70vh] grid place-items-end overflow-hidden">
        <img src={U("photo-1445205170230-053b83016050", 1800)} alt="MAKAN atelier cutting table" className="img-warm absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-[#F2EBDD] px-5 md:px-10 pb-12 pt-32 max-w-[1440px] w-full mx-auto">
          <p className="text-[11px] tracking-[0.3em] font-bold">OUR STORY — WASAT EL BALAD, CAIRO</p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.95] mt-3">We don&apos;t recreate<br />Egypt. <span className="italic">We reinterpret it.</span></h1>
          <p className="font-arabic text-xl opacity-70 mt-3">إحنا مش بنعيد مصر. إحنا بنعيد تفسيرها.</p>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-5 md:px-10 py-14 md:py-20">
        <Reveal><p className="font-editorial text-2xl md:text-[28px] leading-relaxed">MAKAN means <em>place</em> — belonging. We started in 2021 in a second-floor flat off Kasr El Nil with one cutting table and a question: what does Egyptian identity look like when it stops performing the past?</p></Reveal>
        <div className="mt-10 space-y-6 text-[16px] leading-relaxed opacity-80 max-w-[680px]">
          <Reveal><p>Egyptian identity does not need to be preserved in a museum. It can evolve. It can be minimal. It can be global — cut from Giza cotton, sewn ten minutes from Tahrir, worn in Berlin or Jeddah without explanation.</p></Reveal>
          <Reveal><p>So we don&apos;t print pharaohs. We study proportion: the arch of a Downtown balcony becomes a neckline. The drape of a galabeya becomes a tailored silhouette. Mashrabiya geometry becomes a single seam line. If it could be sold as a souvenir, it doesn&apos;t leave the room.</p></Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4">
          <Reveal><div className="overflow-hidden aspect-[3/4] bg-[#EAE0CE]"><img src={U("photo-1487958449943-2429e8be8625", 800)} alt="Cairo architecture detail" loading="lazy" className="img-warm h-full w-full object-cover" /></div><p className="text-[12px] mt-2 opacity-60 tracking-[0.14em]">DOWNTOWN — THE ARCHIVE WE DESIGN FROM</p></Reveal>
          <Reveal delay={0.1}><div className="overflow-hidden aspect-[3/4] bg-[#EAE0CE] mt-8"><img src={U("photo-1523381210434-271e8be1f52b", 800)} alt="Egyptian cotton rolls" loading="lazy" className="img-warm h-full w-full object-cover" /></div><p className="text-[12px] mt-2 opacity-60 tracking-[0.14em]">DELTA COTTON — GIZA 86, TRACEABLE</p></Reveal>
        </div>
        <div className="mt-12 border-y rule border-y py-10 grid sm:grid-cols-3 gap-8 text-center">
          {[["100%", "Made in Egypt"], ["12", "Hands per shirt"], ["30km", "Entire supply chain"]].map(([n, l]) => (
            <Reveal key={l}><p className="font-display text-5xl">{n}</p><p className="text-[12px] tracking-[0.22em] opacity-60 mt-1 font-bold">{l.toUpperCase()}</p></Reveal>
          ))}
        </div>
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl mt-12">Built for Cairo.<br />Ready for anywhere.</h2>
          <p className="mt-4 opacity-80 leading-relaxed max-w-[640px]">Clothes that survive August heat, motorbike commutes and wedding dinners. Fewer, better pieces — garment-washed, pre-shrunk, repaired free for two years. Egyptian cotton, reconsidered.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="bg-[#171615] text-[#F2EBDD] px-8 py-4 text-[12px] font-bold tracking-[0.22em]">SHOP THE COLLECTION</Link>
            <Link to="/journal" className="border border-[#171615] px-8 py-4 text-[12px] font-bold tracking-[0.22em]">READ THE JOURNAL</Link>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#171615] text-[#F2EBDD]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-14 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-[11px] tracking-[0.3em] font-bold text-[#D8C5A9]">VISUAL IDENTITY</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2">A wordmark with an Arabic spine.</h2>
            <p className="mt-4 opacity-70 max-w-[480px]">Geometric construction, strong negative space, one terracotta full-stop. Latin and Arabic lockups share the same grid — neither is a translation, both are originals.</p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <span className="border border-white/20 px-6 py-4 tracking-[0.3em] font-bold">MAKAN</span>
              <span className="border border-white/20 px-6 py-4 font-arabic text-xl">مَكان</span>
              <span className="border border-white/20 px-6 py-4 font-bold">M.</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-[13px]">
            {[["Obsidian", "#171615", "#F2EBDD"], ["Sand", "#D8C5A9", "#171615"], ["Papyrus", "#F2EBDD", "#171615"], ["Terracotta", "#A6533C", "#fff"], ["Nile", "#365C61", "#fff"], ["Palm", "#626B55", "#fff"]].map(([n, h, fg]) => (
              <div key={n} className="border border-white/15 p-4" style={{ background: h, color: fg }}><p className="font-bold">{n}</p><p className="opacity-70 text-[12px]">{h}</p></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
