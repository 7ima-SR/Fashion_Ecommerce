import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus, ShoppingBag, Truck, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EASE } from "../../data/brand";
import { PRODUCTS, formatEGP } from "../../data/products";
import { useStore } from "../../store/useStore";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeFromCart, promo, applyPromo } = useStore();
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  const detailed = cart.map((c) => ({ ...c, product: PRODUCTS.find((p) => p.id === c.id) })).filter((x) => x.product);
  const subtotal = detailed.reduce((a, c) => a + c.product.price * c.qty, 0);
  const discount = promo ? Math.round(subtotal * (promo.pct / 100)) : 0;
  const shipping = subtotal === 0 ? 0 : subtotal - discount >= 3000 ? 0 : 85;
  const total = subtotal - discount + shipping;

  const submitPromo = (e) => {
    e.preventDefault();
    if (!code.trim()) return;
    const ok = applyPromo(code);
    setMsg(ok ? `Applied ${code.toUpperCase()} — ${promo?.pct || 10}% off.` : "That code doesn't look right. Try CAIRO10.");
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div className="fixed inset-0 z-[80] bg-black/45" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartOpen(false)} aria-hidden="true" />
          <motion.aside
            role="dialog" aria-modal="true" aria-label="Shopping bag"
            className="fixed right-0 top-0 z-[81] h-full w-full max-w-[440px] bg-[#F2EBDD] flex flex-col border-l border-[#171615]/15"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.55, ease: EASE }}
          >
            <div className="flex items-center justify-between px-6 h-[68px] border-b rule border-b">
              <p className="text-[12px] font-bold tracking-[0.28em]">BAG ({detailed.reduce((a, c) => a + c.qty, 0)})</p>
              <button aria-label="Close bag" onClick={() => setCartOpen(false)} className="p-2 hover:rotate-90 transition duration-300"><X size={20} /></button>
            </div>
            {detailed.length === 0 ? (
              <div className="flex-1 grid place-items-center px-8 text-center">
                <div>
                  <ShoppingBag size={34} strokeWidth={1} className="mx-auto opacity-40" />
                  <p className="font-display text-3xl mt-4">Your bag is empty.</p>
                  <p className="text-sm opacity-60 mt-2">Built for Cairo. Ready for anywhere.</p>
                  <button onClick={() => { setCartOpen(false); nav("/shop"); }} className="mt-6 bg-[#171615] text-[#F2EBDD] px-8 py-3.5 text-[12px] tracking-[0.22em] font-bold btn-fill">SHOP NEW ARRIVALS</button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-auto px-6 py-4 space-y-5">
                  {detailed.map((c) => {
                    const key = `${c.id}|${c.size}|${c.color}`;
                    return (
                      <motion.div key={key} layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4">
                        <Link to={`/product/${c.id}`} onClick={() => setCartOpen(false)} className="w-[84px] h-[108px] overflow-hidden bg-[#EAE0CE] shrink-0" data-cursor="view" data-cursor-label="VIEW">
                          <img src={c.product.images[0]} alt={c.product.name} className="h-full w-full object-cover img-warm" loading="lazy" />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between gap-2">
                            <p className="font-semibold text-[15px] leading-tight">{c.product.name}</p>
                            <button aria-label={`Remove ${c.product.name}`} onClick={() => removeFromCart(key)} className="opacity-50 hover:opacity-100 hover:text-[#A6533C] transition text-sm shrink-0">Remove</button>
                          </div>
                          <p className="text-[12px] opacity-60 mt-1">{c.color} · Size {c.size}</p>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border rule border rounded-none">
                              <button aria-label="Decrease quantity" className="p-2" onClick={() => updateQty(key, -1)}><Minus size={14} /></button>
                              <span className="w-8 text-center text-sm font-semibold">{c.qty}</span>
                              <button aria-label="Increase quantity" className="p-2" onClick={() => updateQty(key, 1)}><Plus size={14} /></button>
                            </div>
                            <p className="font-semibold text-[15px]">{formatEGP(c.product.price * c.qty)}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                  <div className="flex items-start gap-3 bg-[#EAE0CE]/60 border rule border p-3.5 text-[13px]">
                    <Truck size={17} className="mt-0.5 shrink-0" />
                    <p>{subtotal - discount >= 3000 ? "You've unlocked free Cairo delivery." : <>Add <b>{formatEGP(3000 - (subtotal - discount))}</b> more for free delivery in Cairo & Giza.</>}</p>
                  </div>
                </div>
                <div className="border-t rule border-t px-6 py-5 space-y-3 bg-[#F2EBDD]">
                  <form onSubmit={submitPromo} className="flex gap-2">
                    <label htmlFor="promo" className="sr-only">Promo code</label>
                    <input id="promo" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Promo — try CAIRO10" className="field !py-2.5 text-[13px] flex-1 uppercase placeholder:normal-case placeholder:tracking-normal" />
                    <button className="border border-[#171615] px-4 text-[12px] font-bold tracking-[0.18em] hover:bg-[#171615] hover:text-[#F2EBDD] transition">APPLY</button>
                  </form>
                  {msg && <p className="text-[12px] opacity-70" role="status">{msg}</p>}
                  <dl className="text-[14px] space-y-1.5">
                    <div className="flex justify-between"><dt className="opacity-60">Subtotal</dt><dd className="font-semibold">{formatEGP(subtotal)}</dd></div>
                    {discount > 0 && <div className="flex justify-between text-[#A6533C]"><dt>Promo {promo.code}</dt><dd>−{formatEGP(discount)}</dd></div>}
                    <div className="flex justify-between"><dt className="opacity-60">Shipping estimate</dt><dd>{shipping === 0 ? "Free" : formatEGP(shipping)}</dd></div>
                    <div className="flex justify-between text-[16px] pt-1 border-t rule border-t"><dt className="font-bold">Total</dt><dd className="font-bold">{formatEGP(total)}</dd></div>
                  </dl>
                  <button onClick={() => { setCartOpen(false); nav("/checkout"); }} className="w-full bg-[#171615] text-[#F2EBDD] py-4 text-[12px] font-bold tracking-[0.24em] flex items-center justify-center gap-2 btn-fill">CHECKOUT <ArrowRight size={16} /></button>
                  <button onClick={() => setCartOpen(false)} className="w-full text-center text-[12px] tracking-[0.2em] underline underline-offset-4 opacity-70 hover:opacity-100">CONTINUE SHOPPING</button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
