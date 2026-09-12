import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Monogram } from "../brand/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#171615] text-[#F2EBDD] mt-0" aria-label="Footer">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-16 pb-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <Monogram />
              <div>
                <p className="tracking-[0.22em] font-bold text-lg">MAKAN</p>
                <p className="font-arabic text-sm opacity-60">مَكان · القاهرة</p>
              </div>
            </div>
            <p className="font-display text-2xl mt-6 leading-snug max-w-[320px]">Made here.<br />Worn everywhere.</p>
            <p className="font-arabic mt-2 opacity-60">من هنا. إلى كل مكان.</p>
            <form className="mt-6 flex max-w-[340px]" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="nl-email" className="sr-only">Email for newsletter</label>
              <input id="nl-email" type="email" required placeholder="Email for studio notes" className="field field-dark !border-r-0 flex-1" />
              <button className="border border-[#F2EBDD]/25 px-4 hover:bg-[#F2EBDD] hover:text-[#171615] transition" aria-label="Subscribe"><ArrowUpRight size={18} /></button>
            </form>
          </div>
          <nav aria-label="Shop">
            <p className="text-[11px] tracking-[0.28em] opacity-50 mb-4">SHOP</p>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link className="u-link" to="/shop">All pieces</Link></li>
              <li><Link className="u-link" to="/shop?tag=new">New arrivals</Link></li>
              <li><Link className="u-link" to="/collections">Collections</Link></li>
              <li><Link className="u-link" to="/size-guide">Size guide</Link></li>
              <li><Link className="u-link" to="/wishlist">Wishlist</Link></li>
            </ul>
          </nav>
          <nav aria-label="Brand">
            <p className="text-[11px] tracking-[0.28em] opacity-50 mb-4">BRAND</p>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link className="u-link" to="/story">Our story</Link></li>
              <li><Link className="u-link" to="/journal">Journal</Link></li>
              <li><Link className="u-link" to="/contact">Contact</Link></li>
              <li><Link className="u-link" to="/faq">FAQ & shipping</Link></li>
              <li><Link className="u-link" to="/orders">Track orders</Link></li>
            </ul>
          </nav>
          <div>
            <p className="text-[11px] tracking-[0.28em] opacity-50 mb-4">CAIRO ATELIER</p>
            <address className="not-italic text-[15px] leading-relaxed opacity-80">
              2nd floor, Kasr El Nil<br />Wasat El Balad, Cairo<br />
              <a href="tel:+201000000000" className="u-link">+20 100 000 0000</a><br />
              <a href="mailto:salam@makan-cairo.com" className="u-link">salam@makan-cairo.com</a>
            </address>
            <p className="mt-4 text-sm opacity-50">Sat–Thu · 10am–8pm<br />Cash on delivery across Egypt.</p>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/12 flex flex-col md:flex-row gap-3 justify-between text-[12px] tracking-[0.14em] opacity-60">
          <span>© 2026 MAKAN CAIRO · ALL GARMENTS MADE IN EGYPT</span>
          <span className="flex gap-5"><Link to="/faq">SHIPPING</Link><Link to="/faq">RETURNS</Link><Link to="/size-guide">SIZES</Link></span>
        </div>
      </div>
    </footer>
  );
}
