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
  { to: "/lookbook", label: "Lookbook" },
  { to: "/campaign", label: "Campaign" },
  { to: "/made-in-egypt", label: "Made in Egypt" },
  { to: "/story", label: "Story" },
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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [loc.pathname, setMobileMenuOpen]);

  return (
    <>
      <div className="bg-[#0C0C0B] text-[#F2EFE8] text-center text-[11px] tracking-[0.24em] py-2 px-4 font-medium flex justify-center items-center gap-3">
        <span>EXPRESS EGYPTIAN DELIVERY & WORLDWIDE SHIPPING</span>
        <span className="hidden md:inline text-[#A85C43]">·</span>
        <span className="hidden md:inline font-arabic">صُنِعَ في مصر. يُرتَدى في كل مكان.</span>
      </div>

      <motion.header
        animate={{ y: visible ? 0 : "-110%" }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
          scrolled ? "bg-[#F2EFE8]/92 backdrop-blur-md border-[#0C0C0B]/15" : "bg-[#F2EFE8] border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10 h-[72px]">
          <button
            className="xl:hidden p-2 -ml-2 hover:opacity-70 transition"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <LogoFull />

          <nav className="hidden xl:flex items-center gap-7 text-[12px] font-semibold tracking-[0.2em]" aria-label="Primary">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="u-link py-1"
                data-active={loc.pathname.startsWith(l.to) ? "true" : "false"}
              >
                {l.label.toUpperCase()}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            <button
              aria-label="Search"
              className="p-2.5 hover:opacity-60 transition"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <Link
              to="/account"
              aria-label="Account"
              className="p-2.5 hover:opacity-60 transition hidden sm:block"
            >
              <User size={20} strokeWidth={1.5} />
            </Link>

            <Link
              to="/wishlist"
              aria-label={`Wishlist, ${wishlist.length} items`}
              className="relative p-2.5 hover:opacity-60 transition"
            >
              <Heart size={20} strokeWidth={1.5} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-[#A85C43] text-white text-[10px] w-4 h-4 rounded-full grid place-items-center font-bold">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <button
              aria-label={`Cart, ${cartCount(cart)} items`}
              className="relative p-2.5 hover:opacity-60 transition"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              <AnimatePresence>
                {cartCount(cart) > 0 && (
                  <motion.span
                    key={cartCount(cart)}
                    initial={{ scale: 0.4 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 bg-[#0C0C0B] text-[#F2EFE8] text-[10px] w-4 h-4 rounded-full grid place-items-center font-bold"
                  >
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
    { to: "/shop", label: "Shop Collection", ar: "التسوق" },
    { to: "/collections", label: "Collections", ar: "المجموعات" },
    { to: "/lookbook", label: "Lookbook", ar: "كتالوج الإطلالات" },
    { to: "/campaign", label: "Campaign 001", ar: "الحملة الإعلانية" },
    { to: "/made-in-egypt", label: "Made in Egypt", ar: "صُنِعَ في مصر" },
    { to: "/story", label: "Brand Story", ar: "قصتنا" },
    { to: "/journal", label: "Journal", ar: "المدونة" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] bg-[#0C0C0B] text-[#F2EFE8] flex flex-col"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: EASE }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/15">
            <span className="tracking-[0.24em] font-bold text-lg">
              MAKAN <span className="font-arabic font-normal opacity-60 text-sm">مَكان</span>
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:opacity-60"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 overflow-auto px-6 py-8 flex flex-col gap-1" aria-label="Mobile">
            {items.map((it, i) => (
              <motion.div
                key={it.to + it.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.06, duration: 0.5, ease: EASE }}
              >
                <Link
                  to={it.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-baseline justify-between border-b border-white/10 py-4"
                >
                  <span className="font-display text-3xl group-hover:translate-x-2 transition-transform">
                    {it.label}
                  </span>
                  <span className="font-arabic text-white/50 text-sm">{it.ar}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="px-6 pb-8 text-xs tracking-[0.18em] text-white/60 flex justify-between border-t border-white/10 pt-4">
            <span>CAIRO · 30.04° N</span>
            <span className="font-arabic">صُنِعَ هنا. يُرتَدى في كل مكان.</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
