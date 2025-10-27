import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout.jsx";
import Home from "./pages/Home.jsx";
import MgrProduct from "./pages/MgrProduct.jsx";
import MgrStore from "./pages/MgrStore.jsx";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./hooks/useCart.jsx";
import StoreList from "./pages/StoreList.jsx";
import StoreDetail from "./pages/StoreDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products", element: <ProductList /> },
      { path: "/products/:category", element: <ProductList /> },
      { path: "/products/detail/:id", element: <ProductDetail /> },
      { path: "/stores", element: <StoreList /> },
      { path: "/stores/detail/:id", element: <StoreDetail /> },

      { path: "/mgr/product", element: <MgrProduct /> },
      { path: "/mgr/store", element: <MgrStore /> },
    ],
  },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </QueryClientProvider>
  );
}
