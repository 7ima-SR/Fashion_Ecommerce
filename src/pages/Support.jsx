import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "../components/ui/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-10 md:py-14 grid lg:grid-cols-[1fr_1fr] gap-12">
      <div>
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">CONTACT — SALAM</p>
        <h1 className="font-display text-5xl md:text-7xl mt-2">Talk to a human.</h1>
        <p className="mt-4 opacity-70 max-w-[440px]">Sizing help, order issues, wholesale, press — we reply within one working day, Sat–Thu.</p>
        <ul className="mt-8 space-y-4 text-[15px]">
          <li className="flex gap-3"><MapPin size={18} className="shrink-0 mt-0.5" /><span>2nd floor, Kasr El Nil, Wasat El Balad, Cairo<br /><span className="opacity-60">Open Sat · 12–6pm, or by appointment.</span></span></li>
          <li className="flex gap-3"><Phone size={18} className="shrink-0 mt-0.5" /><a href="tel:+201000000000" className="u-link">+20 100 000 0000</a></li>
          <li className="flex gap-3"><Mail size={18} className="shrink-0 mt-0.5" /><a href="mailto:salam@makan-cairo.com" className="u-link">salam@makan-cairo.com</a></li>
        </ul>
        <div className="mt-8 border rule border p-5 text-sm bg-[#EAE0CE]/40"><b>WhatsApp fastest:</b> message +20 100 000 0000 with your order number (MK-…) for delivery changes.</div>
      </div>
      <Reveal>
        {sent ? <div className="border rule border p-10 text-center" role="status"><p className="font-display text-4xl">Shokran — received.</p><p className="opacity-60 mt-2">We&apos;ll reply within one working day.</p></div> : (
          <form className="border rule border p-6 md:p-8 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label htmlFor="c-name" className="text-[11px] font-bold tracking-[0.2em] opacity-60">NAME</label><input id="c-name" required className="field mt-1.5" placeholder="Your name" /></div>
              <div><label htmlFor="c-email" className="text-[11px] font-bold tracking-[0.2em] opacity-60">EMAIL</label><input id="c-email" required type="email" className="field mt-1.5" placeholder="you@email.com" /></div>
            </div>
            <div><label htmlFor="c-topic" className="text-[11px] font-bold tracking-[0.2em] opacity-60">TOPIC</label><select id="c-topic" className="field mt-1.5"><option>Order help</option><option>Sizing</option><option>Returns</option><option>Wholesale</option><option>Press</option></select></div>
            <div><label htmlFor="c-msg" className="text-[11px] font-bold tracking-[0.2em] opacity-60">MESSAGE</label><textarea id="c-msg" required rows={5} className="field mt-1.5" placeholder="How can we help?" /></div>
            <button className="w-full bg-[#171615] text-[#F2EBDD] py-4 text-[12px] font-bold tracking-[0.24em] btn-fill">SEND MESSAGE</button>
          </form>
        )}
      </Reveal>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  const groups = [
    { q: "How long is delivery in Egypt?", a: "Standard 2–4 working days everywhere in Egypt (EGP 85). Express next-day in Cairo & Giza (EGP 140). Free standard shipping over EGP 3,000. You'll get an SMS with tracking from our courier." },
    { q: "Do you offer Cash on Delivery?", a: "Yes — COD is available in all governorates. Please keep the exact amount ready; our couriers carry limited change. Cards and mobile wallets are also accepted online (demo checkout)." },
    { q: "What is your return policy?", a: "14 days, unworn with tags. Free pickup in Cairo & Giza; 30 EGP elsewhere. Card refunds in 3–5 working days; COD orders refunded via bank transfer or instant store credit +10% bonus." },
    { q: "How do MAKAN sizes run?", a: "Egyptian-regular with a relaxed top block. Our shirts and overshirts are boxy — take your normal size for drape. Models' heights and sizes are on every product page. Between sizes? Size down. Full chart on the Size Guide page." },
    { q: "Where are your clothes made?", a: "100% in Egypt. Cotton from the Delta, weaving in Mehalla, knitting in Alexandria/10th of Ramadan, cutting and finishing in our Wasat El Balad atelier. We list origin on every product." },
    { q: "Do you ship outside Egypt?", a: "Currently Egypt only while we keep quality tight. Join the newsletter — Gulf + EU shipping opens late 2026." },
  ];
  return (
    <div className="mx-auto max-w-[800px] px-5 md:px-10 py-10 md:py-14">
      <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">HELP — SHIPPING · RETURNS · SIZES</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2">Questions.</h1>
      <div className="mt-8 border-t rule border-t">
        {groups.map((g, i) => (
          <div key={i} className="border-b rule border-b">
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="w-full text-left py-5 flex justify-between gap-4 font-bold text-[17px]">{g.q}<span>{open === i ? "−" : "+"}</span></button>
            {open === i && <p className="pb-6 opacity-75 leading-relaxed">{g.a}</p>}
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm opacity-60">Still stuck? <Link to="/contact" className="underline underline-offset-4 font-semibold">Contact us</Link> or WhatsApp +20 100 000 0000.</p>
    </div>
  );
}

export function SizeGuide() {
  const rows = [["XS", "84", "66", "62"], ["S", "90", "72", "63"], ["M", "96", "78", "64"], ["L", "104", "86", "66"], ["XL", "112", "94", "67"], ["XXL", "120", "102", "68"]];
  return (
    <div className="mx-auto max-w-[900px] px-5 md:px-10 py-10 md:py-14">
      <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">FIT — MEASURED ON REAL BODIES</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2">Size guide.</h1>
      <p className="mt-4 opacity-70">MAKAN cuts relaxed. If you&apos;re between sizes, size down. Overshirts and work jackets are intentionally boxy.</p>
      <div className="mt-8 overflow-x-auto border rule border">
        <table className="w-full text-sm min-w-[560px]">
          <thead><tr className="bg-[#171615] text-[#F2EBDD] text-left text-[11px] tracking-[0.2em]"><th className="p-4">SIZE</th><th className="p-4">CHEST (CM)</th><th className="p-4">WAIST (CM)</th><th className="p-4">SHIRT LENGTH</th></tr></thead>
          <tbody>{rows.map((r) => <tr key={r[0]} className="border-t rule border-t odd:bg-[#EAE0CE]/30"><td className="p-4 font-bold">{r[0]}</td><td className="p-4">{r[1]}</td><td className="p-4">{r[2]}</td><td className="p-4">{r[3]}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
        <div className="border rule border p-5"><b>How to measure</b><p className="opacity-70 mt-1">Chest: tape under arms, relaxed. Waist: where you wear trousers, not where you wish. Compare to a shirt you love, not your body alone.</p></div>
        <div className="border rule border p-5"><b>Model refs</b><p className="opacity-70 mt-1">Salma is 172cm, wears S. Youssef is 188cm, wears M in shirts, L in outerwear for drape.</p></div>
      </div>
    </div>
  );
}
