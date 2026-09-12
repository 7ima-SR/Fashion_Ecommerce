import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Banknote, CreditCard, MapPin, Smartphone, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EASE } from "../data/brand";
import { PRODUCTS, formatEGP } from "../data/products";
import { useStore } from "../store/useStore";

const CITIES = ["Cairo", "Giza", "Alexandria", "Mansoura", "Tanta", "Ismailia", "Port Said", "Suez", "Luxor", "Aswan", "Other Egypt"];
const SHIPPING = [
  { id: "standard", name: "Standard Egypt Delivery", desc: "2–4 working days, all governorates", price: 85 },
  { id: "express", name: "Express Cairo & Giza", desc: "Next-day in Cairo / Giza only", price: 140 },
];

export default function Checkout() {
  const { cart, promo, checkout, setCheckout, placeOrder } = useStore();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "+20 ", address: "", city: "Cairo", country: "Egypt", notes: "", ...checkout.info });
  const [pay, setPay] = useState(checkout.payment || "cod");
  const [ship, setShip] = useState(checkout.shipping || "standard");
  const [card, setCard] = useState({ n: "", e: "", c: "" });
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const detailed = cart.map((c) => ({ ...c, product: PRODUCTS.find((p) => p.id === c.id) })).filter((x) => x.product);
  const subtotal = detailed.reduce((a, c) => a + c.product.price * c.qty, 0);
  const discount = promo ? Math.round(subtotal * (promo.pct / 100)) : 0;
  const shipCost = subtotal - discount >= 3000 ? 0 : SHIPPING.find((s) => s.id === ship).price;
  const total = subtotal - discount + shipCost;

  if (cart.length === 0 && step < 3) {
    return <div className="mx-auto max-w-[700px] px-5 py-20 text-center"><p className="font-display text-4xl">Your bag is empty.</p><Link to="/shop" className="inline-block mt-6 bg-[#171615] text-[#F2EBDD] px-8 py-3.5 text-[12px] font-bold tracking-[0.22em]">SHOP</Link></div>;
  }

  const validInfo = () => {
    if (form.name.trim().length < 3) return "Please enter your full name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return "Please enter a valid email.";
    if (form.phone.replace(/\D/g, "").length < 10) return "Please enter a valid Egyptian phone (+20 …).";
    if (form.address.trim().length < 6) return "Please enter your street address.";
    return "";
  };

  const next = () => {
    if (step === 0) { const e = validInfo(); if (e) { setErr(e); return; } setErr(""); setCheckout({ info: form }); }
    if (step === 1) setCheckout({ shipping: ship });
    if (step === 2) {
      if (pay === "card" && (card.n.replace(/\s/g, "").length < 12 || !card.e || card.c.length < 3)) { setErr("Please enter a valid mock card."); return; }
      setErr(""); setCheckout({ payment: pay });
      const order = { id: "MK-" + Math.floor(100000 + Math.random() * 900000), date: new Date().toISOString(), items: detailed, total, city: form.city, name: form.name, payment: pay, shipping: ship };
      placeOrder(order);
      nav(`/order-confirmation/${order.id}`);
      return;
    }
    setStep((s) => s + 1); window.scrollTo(0, 0);
  };

  const field = (k, label, props = {}) => (
    <div>
      <label htmlFor={`co-${k}`} className="text-[11px] font-bold tracking-[0.2em] opacity-60">{label}</label>
      <input id={`co-${k}`} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} className="field mt-1.5" {...props} />
    </div>
  );

  return (
    <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-10 md:py-14 grid lg:grid-cols-[1fr_380px] gap-10">
      <div>
        <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">CHECKOUT — MOCK, NO REAL CHARGE</p>
        <h1 className="font-display text-5xl md:text-6xl mt-2">Almost yours.</h1>
        <ol className="mt-6 flex gap-2" aria-label="Checkout steps">
          {["Information", "Shipping", "Payment"].map((s, i) => (
            <li key={s} className="flex-1">
              <button onClick={() => i < step && setStep(i)} className={`w-full text-left text-[11px] font-bold tracking-[0.2em] pb-2 border-b-2 transition ${i <= step ? "border-[#171615]" : "border-black/10 opacity-40"}`}>0{i + 1} · {s.toUpperCase()}</button>
            </li>
          ))}
        </ol>

        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.45, ease: EASE }} className="mt-8">
            {step === 0 && (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {field("name", "FULL NAME", { placeholder: "Mariam El Masry", autoComplete: "name" })}
                  {field("phone", "PHONE (+20)", { placeholder: "+20 100 000 0000", inputMode: "tel", autoComplete: "tel" })}
                </div>
                {field("email", "EMAIL", { placeholder: "you@email.com", type: "email", autoComplete: "email" })}
                {field("address", "STREET ADDRESS", { placeholder: "12 Brazil St, Apt 4, Zamalek" })}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label htmlFor="co-city" className="text-[11px] font-bold tracking-[0.2em] opacity-60">CITY</label>
                    <select id="co-city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="field mt-1.5">{CITIES.map((c) => <option key={c}>{c}</option>)}</select></div>
                  <div><label className="text-[11px] font-bold tracking-[0.2em] opacity-60">COUNTRY</label><input value="Egypt" disabled className="field mt-1.5 opacity-60" /></div>
                </div>
                <div><label htmlFor="co-notes" className="text-[11px] font-bold tracking-[0.2em] opacity-60">DELIVERY NOTES (OPTIONAL)</label><textarea id="co-notes" rows={2} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Call on arrival, 3rd floor…" className="field mt-1.5" /></div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-3" role="radiogroup" aria-label="Shipping method">
                {SHIPPING.map((s) => (
                  <button key={s.id} role="radio" aria-checked={ship === s.id} onClick={() => setShip(s.id)} className={`w-full text-left border p-5 flex justify-between gap-4 transition ${ship === s.id ? "border-[#171615] bg-[#EAE0CE]/40" : "rule border"}`}>
                    <span className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0" /><span><span className="font-bold block">{s.name}</span><span className="text-sm opacity-60">{s.desc}</span></span></span>
                    <b>{subtotal - discount >= 3000 ? "Free" : formatEGP(s.price)}</b>
                  </button>
                ))}
                <p className="text-[13px] opacity-60">Free standard shipping over EGP 3,000. Express is Cairo & Giza only.</p>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-3" role="radiogroup" aria-label="Payment method">
                {[
                  { id: "cod", icon: Banknote, t: "Cash on Delivery", d: "Pay cash when your order arrives. Available across Egypt." },
                  { id: "card", icon: CreditCard, t: "Card (mock)", d: "Visa / Mastercard — demo only, no real charge." },
                  { id: "wallet", icon: Smartphone, t: "Mobile wallet (mock)", d: "Apple Pay / Google Pay style — demo button." },
                ].map((m) => (
                  <div key={m.id} className={`border p-5 transition ${pay === m.id ? "border-[#171615] bg-[#EAE0CE]/40" : "rule border"}`}>
                    <button role="radio" aria-checked={pay === m.id} onClick={() => setPay(m.id)} className="w-full flex gap-3 text-left"><m.icon size={19} className="mt-0.5 shrink-0" /><span><span className="font-bold block">{m.t}</span><span className="text-sm opacity-60">{m.d}</span></span></button>
                    {pay === m.id && m.id === "card" && (
                      <div className="grid sm:grid-cols-2 gap-3 mt-4">
                        <input aria-label="Card number" placeholder="4111 1111 1111 1111" value={card.n} onChange={(e) => setCard({ ...card, n: e.target.value })} className="field sm:col-span-2" inputMode="numeric" />
                        <input aria-label="Expiry" placeholder="MM / YY" value={card.e} onChange={(e) => setCard({ ...card, e: e.target.value })} className="field" />
                        <input aria-label="CVC" placeholder="CVC" value={card.c} onChange={(e) => setCard({ ...card, c: e.target.value })} className="field" inputMode="numeric" />
                      </div>
                    )}
                    {pay === m.id && m.id === "wallet" && <button onClick={next} className="mt-4 w-full bg-black text-white rounded-md py-3.5 text-sm font-semibold"> Pay with Mock Pay</button>}
                  </div>
                ))}
              </div>
            )}
            {err && <p className="mt-4 text-sm text-[#A6533C] font-semibold" role="alert">{err}</p>}
            <div className="mt-8 flex gap-3">
              {step > 0 && <button onClick={() => setStep((s) => s - 1)} className="border rule border px-6 py-4 text-[12px] font-bold tracking-[0.2em] inline-flex items-center gap-2"><ArrowLeft size={15} /> BACK</button>}
              <button onClick={next} className="flex-1 bg-[#171615] text-[#F2EBDD] py-4 text-[12px] font-bold tracking-[0.24em] inline-flex justify-center items-center gap-2 btn-fill">{step === 2 ? (pay === "cod" ? "PLACE ORDER — PAY ON DELIVERY" : "PAY " + formatEGP(total)) : "CONTINUE"} <ArrowRight size={15} /></button>
            </div>
            <p className="mt-4 text-[12px] opacity-50 flex items-center gap-2"><User size={13} /> Demo checkout — no real payment, no account needed.</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <aside className="border rule border p-6 h-fit lg:sticky lg:top-28 bg-[#EAE0CE]/30" aria-label="Order summary">
        <p className="text-[12px] font-bold tracking-[0.24em]">SUMMARY</p>
        <ul className="mt-4 space-y-4">
          {detailed.map((c) => (
            <li key={`${c.id}|${c.size}|${c.color}`} className="flex gap-3">
              <span className="relative shrink-0"><img src={c.product.images[0]} alt={c.product.name} className="w-14 h-[72px] object-cover img-warm" /><span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#171615] text-white text-[10px] grid place-items-center">{c.qty}</span></span>
              <span className="flex-1 text-sm"><b className="block leading-tight">{c.product.name}</b><span className="opacity-60">{c.color} · {c.size}</span></span>
              <b className="text-sm">{formatEGP(c.product.price * c.qty)}</b>
            </li>
          ))}
        </ul>
        <dl className="mt-5 pt-4 border-t rule border-t text-sm space-y-1.5">
          <div className="flex justify-between"><dt className="opacity-60">Subtotal</dt><dd><b>{formatEGP(subtotal)}</b></dd></div>
          {discount > 0 && <div className="flex justify-between text-[#A6533C]"><dt>Promo {promo.code}</dt><dd>−{formatEGP(discount)}</dd></div>}
          <div className="flex justify-between"><dt className="opacity-60">Shipping</dt><dd>{shipCost === 0 ? "Free" : formatEGP(shipCost)}</dd></div>
          <div className="flex justify-between text-lg pt-2"><dt><b>Total</b></dt><dd><b>{formatEGP(total)}</b></dd></div>
        </dl>
      </aside>
    </div>
  );
}
