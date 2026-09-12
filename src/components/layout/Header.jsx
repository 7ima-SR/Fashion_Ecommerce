import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { EASE } from "../../data/brand";
import { cartCount, useStore } from "../../store/useStore";
import { LogoFull } from "../brand/Logo";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/story", label: "Story" },
  { to: "/journal", label: "Journal" },
];

export default function Header() {
  const { cart, wishlist, setCartOpen, setSearchOpen, setMobileMenuOpen, mobileMenuOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const loc = useLocation();

  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setVisible(y < last || y < 200);
      last = y;
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [loc.pathname]); // eslint-disable-line

  return (
    <>
      <div className="bg-[#171615] text-[#F2EBDD] text-center text-[11px] tracking-[0.22em] py-2 px-4 font-medium">
        FREE CAIRO DELIVERY OVER EGP 3,000 · CASH ON DELIVERY AVAILABLE · <span className="font-arabic">صنع في مصر</span>
      </div>
      <motion.header
        animate={{ y: visible ? 0 : "-110%" }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`sticky top-0 z-50 border-b transition-colors duration-500 ${scrolled ? "bg-[#F2EBDD]/92 backdrop-blur-md border-[#171615]/15" : "bg-[#F2EBDD] border-transparent"}`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10 h-[68px]">
          <button className="lg:hidden p-2 -ml-2" aria-label="Open menu" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={22} strokeWidth={1.5} />
          </button>
          <LogoFull />
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-[0.18em]" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className="u-link py-1" data-active={loc.pathname.startsWith(l.to) ? "true" : "false"}>
                {l.label.toUpperCase()}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-1 md:gap-2">
            <button aria-label="Search" className="p-2.5 hover:opacity-60 transition" onClick={() => setSearchOpen(true)}><Search size={20} strokeWidth={1.5} /></button>
            <Link to="/account" aria-label="Account" className="p-2.5 hover:opacity-60 transition hidden sm:block"><User size={20} strokeWidth={1.5} /></Link>
            <Link to="/wishlist" aria-label={`Wishlist, ${wishlist.length} items`} className="relative p-2.5 hover:opacity-60 transition">
              <Heart size={20} strokeWidth={1.5} />
              {wishlist.length > 0 && <span className="absolute top-1 right-1 bg-[#A6533C] text-white text-[10px] w-4 h-4 rounded-full grid place-items-center">{wishlist.length}</span>}
            </Link>
            <button aria-label={`Cart, ${cartCount(cart)} items`} className="relative p-2.5 hover:opacity-60 transition" onClick={() => setCartOpen(true)}>
              <ShoppingBag size={20} strokeWidth={1.5} />
              <AnimatePresence>
                {cartCount(cart) > 0 && (
                  <motion.span key={cartCount(cart)} initial={{ scale: 0.4 }} animate={{ scale: 1 }} className="absolute top-1 right-1 bg-[#171615] text-[#F2EBDD] text-[10px] w-4 h-4 rounded-full grid place-items-center">
                    {cartCount(cart)}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>
      <MobileMenu open={mobileMenuOpen} />
    </>
  );
}

function MobileMenu({ open }) {
  const setMobileMenuOpen = useStore((s) => s.setMobileMenuOpen);
  const items = [
    { to: "/shop", label: "Shop", ar: "تسوق" },
    { to: "/shop?tag=new", label: "New Arrivals", ar: "وصل حديثاً" },
    { to: "/collections", label: "Collections", ar: "المجموعات" },
    { to: "/story", label: "Our Story", ar: "قصتنا" },
    { to: "/journal", label: "Journal", ar: "المدونة" },
    { to: "/contact", label: "Contact", ar: "تواصل" },
  ];
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[70] bg-[#171615] text-[#F2EBDD] flex flex-col" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.6, ease: EASE }} role="dialog" aria-modal="true" aria-label="Menu">
          <div className="flex items-center justify-between px-5 h-[68px] border-b border-white/15">
            <span className="tracking-[0.22em] font-bold">MAKAN <span className="font-arabic font-normal opacity-60">مَكان</span></span>
            <button aria-label="Close menu" onClick={() => setMobileMenuOpen(false)} className="p-2"><X size={24} strokeWidth={1.5} /></button>
          </div>
          <nav className="flex-1 overflow-auto px-6 py-8 flex flex-col gap-1" aria-label="Mobile">
            {items.map((it, i) => (
              <motion.div key={it.to + it.label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: EASE }}>
                <Link to={it.to} onClick={() => setMobileMenuOpen(false)} className="group flex items-baseline justify-between border-b border-white/10 py-4">
                  <span className="font-display text-4xl group-hover:italic transition">{it.label}</span>
                  <span className="font-arabic text-white/50">{it.ar}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="px-6 pb-8 text-sm text-white/60 flex justify-between">
            <span>Cairo · Alex · Everywhere</span><span className="font-arabic">من هنا. إلى كل مكان.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
