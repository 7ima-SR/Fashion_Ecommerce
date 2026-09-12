import { Outlet, ScrollRestoration } from "react-router-dom";
import CartDrawer from "../cart/CartDrawer";
import SearchOverlay from "../navigation/SearchOverlay";
import Cursor from "../ui/Cursor";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-black focus:text-white focus:px-4 focus:py-2">Skip to content</a>
      <Cursor />
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
      <ScrollRestoration />
    </div>
  );
}
