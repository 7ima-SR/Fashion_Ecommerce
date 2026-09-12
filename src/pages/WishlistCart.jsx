import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/product/ProductCard";
import { PRODUCTS, formatEGP } from "../data/products";
import { cartCount, useStore } from "../store/useStore";

export function Wishlist() {
  const { wishlist } = useStore();
  const items = PRODUCTS.filter((p) => wishlist.includes(p.id));
  return (
    <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-10 md:py-14 min-h-[60vh]">
      <p className="text-[11px] font-bold tracking-[0.3em] text-[#A6533C]">SAVED</p>
      <h1 className="font-display text-5xl md:text-7xl mt-2">Wishlist ({items.length})</h1>
      {items.length === 0 ? (
        <div className="py-16 text-center">
          <Heart size={32} className="mx-auto opacity-30" />
          <p className="font-display text-3xl mt-4">Nothing saved yet.</p>
          <p className="opacity-60 mt-2">Tap the heart on any piece to keep it here.</p>
          <Link to="/shop" className="inline-block mt-6 bg-[#171615] text-[#F2EBDD] px-8 py-3.5 text-[12px] font-bold tracking-[0.22em]">FIND SOMETHING</Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
          {items.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      )}
    </div>
  );
}

export function CartPage() {
  const { cart, updateQty, removeFromCart } = useStore();
  const detailed = cart.map((c) => ({ ...c, product: PRODUCTS.find((p) => p.id === c.id) })).filter((x) => x.product);
  const subtotal = detailed.reduce((a, c) => a + c.product.price * c.qty, 0);
  return (
    <div className="mx-auto max-w-[1100px] px-5 md:px-10 py-10 md:py-14">
      <h1 className="font-display text-5xl md:text-7xl">Bag ({cartCount(cart)})</h1>
      {detailed.length === 0 ? (
        <div className="py-16 text-center"><ShoppingBag size={32} className="mx-auto opacity-30" /><p className="font-display text-3xl mt-4">Your bag is empty.</p><Link to="/shop" className="inline-block mt-6 bg-[#171615] text-[#F2EBDD] px-8 py-3.5 text-[12px] font-bold tracking-[0.22em]">SHOP NEW ARRIVALS</Link></div>
      ) : (
        <div className="mt-8 grid lg:grid-cols-[1fr_320px] gap-10">
          <ul className="divide-y rule divide-y">
            {detailed.map((c) => {
              const key = `${c.id}|${c.size}|${c.color}`;
              return (
                <li key={key} className="py-5 flex gap-5">
                  <Link to={`/product/${c.id}`}><img src={c.product.images[0]} alt={c.product.name} className="w-24 h-32 object-cover img-warm bg-[#EAE0CE]" /></Link>
                  <div className="flex-1">
                    <div className="flex justify-between gap-3"><p className="font-bold">{c.product.name}</p><button onClick={() => removeFromCart(key)} className="text-sm opacity-50 hover:opacity-100">Remove</button></div>
                    <p className="text-sm opacity-60">{c.color} · {c.size}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <div className="flex items-center border rule border"><button aria-label="Decrease" className="px-3 py-2" onClick={() => updateQty(key, -1)}>−</button><span className="w-8 text-center font-bold">{c.qty}</span><button aria-label="Increase" className="px-3 py-2" onClick={() => updateQty(key, 1)}>+</button></div>
                      <p className="font-bold">{formatEGP(c.product.price * c.qty)}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="border rule border p-6 h-fit space-y-3">
            <p className="font-bold tracking-[0.2em] text-[12px]">SUMMARY</p>
            <div className="flex justify-between text-sm"><span className="opacity-60">Subtotal</span><b>{formatEGP(subtotal)}</b></div>
            <Link to="/checkout" className="block text-center bg-[#171615] text-[#F2EBDD] py-4 text-[12px] font-bold tracking-[0.24em]">CHECKOUT</Link>
            <Link to="/shop" className="block text-center text-[12px] underline underline-offset-4 opacity-70">Continue shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function SearchPage() {
  return <div className="p-10 text-center opacity-60">Use the search icon in the header for live search.</div>;
}
