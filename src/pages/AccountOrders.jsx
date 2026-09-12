import { Link, useParams } from "react-router-dom";
import { CheckCircle2, Package } from "lucide-react";
import { formatEGP } from "../data/products";
import { useStore } from "../store/useStore";

export function OrderConfirmation() {
  const { id } = useParams();
  const { orders } = useStore();
  const order = orders.find((o) => o.id === id) || orders[0];
  if (!order) return <div className="px-5 py-20 text-center"><p className="font-display text-4xl">No order found.</p><Link to="/shop" className="underline">Shop</Link></div>;
  return (
    <div className="mx-auto max-w-[760px] px-5 md:px-10 py-12 md:py-16 text-center">
      <CheckCircle2 size={44} strokeWidth={1.2} className="mx-auto text-[#626B55]" />
      <p className="mt-4 text-[11px] font-bold tracking-[0.3em] text-[#626B55]">ORDER {order.id} — CONFIRMED</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2">Shokran, {String(order.name).split(" ")[0]}.</h1>
      <p className="font-arabic text-xl opacity-60 mt-2">شكراً — طلبك اتأكد.</p>
      <p className="mt-4 opacity-70 max-w-[520px] mx-auto">We&apos;re cutting the tissue and folding your pieces{order.payment === "cod" ? " — pay cash on delivery" : ""}. SMS tracking to your +20 number within 24h. Delivering to <b>{order.city}</b>.</p>
      <div className="mt-8 border rule border text-left divide-y rule divide-y">
        {order.items.map((c) => (
          <div key={`${c.id}|${c.size}|${c.color}`} className="p-4 flex gap-4 items-center">
            <img src={c.product.images[0]} alt={c.product.name} className="w-14 h-[72px] object-cover img-warm" />
            <div className="flex-1"><p className="font-bold text-[15px]">{c.product.name}</p><p className="text-[13px] opacity-60">{c.color} · {c.size} · ×{c.qty}</p></div>
            <b>{formatEGP(c.product.price * c.qty)}</b>
          </div>
        ))}
        <div className="p-4 flex justify-between"><span className="opacity-60">Total {order.payment === "cod" ? "(pay on delivery)" : "(paid — mock)"}</span><b className="text-lg">{formatEGP(order.total)}</b></div>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/orders" className="bg-[#171615] text-[#F2EBDD] px-8 py-4 text-[12px] font-bold tracking-[0.22em] inline-flex justify-center gap-2 items-center"><Package size={15} /> TRACK ORDERS</Link>
        <Link to="/shop" className="border border-[#171615] px-8 py-4 text-[12px] font-bold tracking-[0.22em]">KEEP SHOPPING</Link>
      </div>
    </div>
  );
}

export function Orders() {
  const { orders } = useStore();
  return (
    <div className="mx-auto max-w-[900px] px-5 md:px-10 py-10 md:py-14">
      <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">ACCOUNT — ORDERS</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2">Orders.</h1>
      {orders.length === 0 ? <div className="py-14 text-center opacity-70"><p className="font-display text-3xl">No orders yet.</p><Link to="/shop" className="inline-block mt-5 bg-[#171615] text-[#F2EBDD] px-8 py-3.5 text-[12px] font-bold tracking-[0.22em]">START WITH ESSENTIALS</Link></div> : (
        <div className="mt-8 space-y-4">
          {orders.map((o) => (
            <Link key={o.id} to={`/order-confirmation/${o.id}`} className="block border rule border p-5 flex flex-wrap justify-between gap-4 hover:bg-[#EAE0CE]/40 transition">
              <span><b>{o.id}</b><span className="block text-sm opacity-60">{new Date(o.date).toLocaleDateString("en-EG")} · {o.items.reduce((a, c) => a + c.qty, 0)} items · {o.city}</span></span>
              <span className="text-right"><b>{formatEGP(o.total)}</b><span className="block text-[12px] tracking-[0.18em] opacity-60">{o.payment === "cod" ? "CASH ON DELIVERY" : "PAID (MOCK)"}</span></span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Account() {
  const { orders, wishlist } = useStore();
  return (
    <div className="mx-auto max-w-[900px] px-5 md:px-10 py-10 md:py-14">
      <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">ACCOUNT — DEMO, NO LOGIN NEEDED</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2">Ahlan.</h1>
      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        {[["Orders", orders.length, "/orders"], ["Wishlist", wishlist.length, "/wishlist"], ["City", "Cairo", "/faq"]].map(([t, v, to]) => (
          <Link key={t} to={to} className="border rule border p-6 hover:bg-[#EAE0CE]/40 transition"><p className="font-display text-4xl">{v}</p><p className="text-[11px] tracking-[0.24em] font-bold opacity-60 mt-1">{t.toUpperCase()}</p></Link>
        ))}
      </div>
      <div className="mt-6 border rule border p-6 text-sm opacity-75">Demo account — everything is stored locally in your browser. No password, no backend. Your orders and wishlist survive refresh.</div>
    </div>
  );
}

export function NotFound() {
  return <div className="px-5 py-24 text-center"><p className="font-display text-7xl">404</p><p className="opacity-60 mt-2">That page walked out of the atelier.</p><Link to="/" className="inline-block mt-6 bg-[#171615] text-[#F2EBDD] px-8 py-3.5 text-[12px] font-bold tracking-[0.22em]">BACK HOME</Link></div>;
}
