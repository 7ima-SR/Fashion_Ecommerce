import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      cart: [], // {id, size, color, qty}
      wishlist: [],
      promo: null,
      checkout: { info: {}, shipping: "standard", payment: "cod" },
      orders: [],
      searchOpen: false,
      cartOpen: false,
      mobileMenuOpen: false,

      setSearchOpen: (v) => set({ searchOpen: v }),
      setCartOpen: (v) => set({ cartOpen: v }),
      setMobileMenuOpen: (v) => set({ mobileMenuOpen: v }),

      addToCart: (item) => {
        const cart = [...get().cart];
        const key = `${item.id}|${item.size}|${item.color}`;
        const found = cart.find((c) => `${c.id}|${c.size}|${c.color}` === key);
        if (found) found.qty += item.qty || 1;
        else cart.push({ ...item, qty: item.qty || 1 });
        set({ cart, cartOpen: true });
      },
      updateQty: (key, delta) => {
        const cart = get()
          .cart.map((c) =>
            `${c.id}|${c.size}|${c.color}` === key
              ? { ...c, qty: Math.max(1, Math.min(9, c.qty + delta)) }
              : c
          )
          .filter(Boolean);
        set({ cart });
      },
      removeFromCart: (key) =>
        set({ cart: get().cart.filter((c) => `${c.id}|${c.size}|${c.color}` !== key) }),
      clearCart: () => set({ cart: [], promo: null }),

      toggleWishlist: (id) => {
        const w = get().wishlist;
        set({ wishlist: w.includes(id) ? w.filter((x) => x !== id) : [...w, id] });
      },

      applyPromo: (code) => {
        const c = (code || "").trim().toUpperCase();
        if (c === "CAIRO10") { set({ promo: { code: c, pct: 10 } }); return true; }
        if (c === "NILE15") { set({ promo: { code: c, pct: 15 } }); return true; }
        return false;
      },
      setCheckout: (patch) => set({ checkout: { ...get().checkout, ...patch } }),
      placeOrder: (order) => set({ orders: [order, ...get().orders], cart: [], promo: null }),
    }),
    { name: "makan-store-v1", partialize: (s) => ({ cart: s.cart, wishlist: s.wishlist, orders: s.orders }) }
  )
);

export const cartCount = (cart) => cart.reduce((a, c) => a + c.qty, 0);
