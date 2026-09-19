import { Link } from "react-router-dom";
import { BRAND } from "../../data/brand";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0B] text-[#F2EFE8] pt-20 pb-12 border-t border-white/10" aria-label="Footer">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        
        {/* Top Banner Quote */}
        <div className="border-b border-white/10 pb-16 grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <span className="text-[11px] font-bold tracking-[0.3em] text-[#C9B99A] block mb-3">
              MAKAN / Cairo · {BRAND.coordinates}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              MADE HERE.<br />
              <span className="italic text-[#C9B99A]">WORN EVERYWHERE.</span>
            </h2>
          </div>

          <div className="text-left lg:text-right">
            <p className="font-arabic text-2xl text-[#C9B99A] mb-2 leading-relaxed">
              من القاهرة، بقَصْدِ وابتكار.
            </p>
            <p className="text-sm opacity-60 max-w-[420px] lg:ml-auto leading-relaxed">
              A contemporary Egyptian fashion label shaped by place, identity, memory, culture, and movement.
            </p>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-sm">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" className="inline-block text-2xl font-bold tracking-[0.22em] mb-3">
              MAKAN <span className="font-arabic text-lg font-normal text-[#C9B99A]">مَكان</span>
            </Link>
            <p className="text-xs opacity-60 leading-relaxed max-w-[320px] mt-2">
              Kasr El Nil Atelier, Downtown Cairo.<br />
              Delta Flax Linen & Giza Cotton engineered for movement.
            </p>
            <div className="mt-6 text-[11px] tracking-[0.2em] text-[#C9B99A]">
              EST. 2021 — CAIRO, EGYPT
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-[#C9B99A] uppercase mb-4">Shop</h3>
            <ul className="space-y-2.5 opacity-75 text-xs tracking-wider">
              <li><Link to="/shop" className="hover:text-[#C9B99A] transition">New Arrivals</Link></li>
              <li><Link to="/shop?cat=shirts" className="hover:text-[#C9B99A] transition">Shirts & Tunics</Link></li>
              <li><Link to="/shop?cat=trousers" className="hover:text-[#C9B99A] transition">Trousers</Link></li>
              <li><Link to="/shop?cat=outerwear" className="hover:text-[#C9B99A] transition">Outerwear</Link></li>
              <li><Link to="/shop?cat=dresses" className="hover:text-[#C9B99A] transition">Dresses</Link></li>
            </ul>
          </div>

          {/* Editorial Column */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-[#C9B99A] uppercase mb-4">Editorial</h3>
            <ul className="space-y-2.5 opacity-75 text-xs tracking-wider">
              <li><Link to="/collections" className="hover:text-[#C9B99A] transition">Collections 01-05</Link></li>
              <li><Link to="/lookbook" className="hover:text-[#C9B99A] transition">Lookbook</Link></li>
              <li><Link to="/campaign" className="hover:text-[#C9B99A] transition">Campaign 001</Link></li>
              <li><Link to="/made-in-egypt" className="hover:text-[#C9B99A] transition">Made in Egypt</Link></li>
              <li><Link to="/story" className="hover:text-[#C9B99A] transition">Brand Story</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.25em] text-[#C9B99A] uppercase mb-4">Care & Contact</h3>
            <ul className="space-y-2.5 opacity-75 text-xs tracking-wider">
              <li><Link to="/support" className="hover:text-[#C9B99A] transition">Shipping & Returns</Link></li>
              <li><Link to="/support" className="hover:text-[#C9B99A] transition">Size Guide</Link></li>
              <li><Link to="/support" className="hover:text-[#C9B99A] transition">Cash on Delivery</Link></li>
              <li><Link to="/support" className="hover:text-[#C9B99A] transition">Contact Atelier</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] opacity-60 tracking-[0.18em] gap-4">
          <p>© {new Date().getFullYear()} MAKAN LABEL. ALL RIGHTS RESERVED. MADE IN EGYPT.</p>
          <div className="flex gap-6">
            <span>CAIRO</span>
            <span>ALEXANDRIA</span>
            <span>DUBAI</span>
            <span>LONDON</span>
            <span>PARIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
