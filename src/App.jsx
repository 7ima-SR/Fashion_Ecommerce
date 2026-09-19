import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Account, NotFound, OrderConfirmation, Orders } from "./pages/AccountOrders";
import Campaign from "./pages/Campaign";
import Checkout from "./pages/Checkout";
import { CollectionDetail, CollectionsList } from "./pages/Collections";
import Home from "./pages/Home";
import { Article, Journal } from "./pages/Journal";
import Lookbook from "./pages/Lookbook";
import MadeInEgypt from "./pages/MadeInEgypt";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Story from "./pages/Story";
import { Contact, FAQ, SizeGuide } from "./pages/Support";
import { CartPage, Wishlist } from "./pages/WishlistCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "collections", element: <CollectionsList /> },
      { path: "collections/:slug", element: <CollectionDetail /> },
      { path: "lookbook", element: <Lookbook /> },
      { path: "campaign", element: <Campaign /> },
      { path: "made-in-egypt", element: <MadeInEgypt /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <Checkout /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "story", element: <Story /> },
      { path: "about", element: <Story /> },
      { path: "journal", element: <Journal /> },
      { path: "journal/:id", element: <Article /> },
      { path: "size-guide", element: <SizeGuide /> },
      { path: "contact", element: <Contact /> },
      { path: "faq", element: <FAQ /> },
      { path: "order-confirmation/:id", element: <OrderConfirmation /> },
      { path: "account", element: <Account /> },
      { path: "orders", element: <Orders /> },
      { path: "search", element: <Shop /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
