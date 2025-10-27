import { Outlet, Link, NavLink } from "react-router-dom";
import { NavBar } from "@/components/common/NavBar_bak";

export default function GlobalLayout_bak() {
  const navItems = [
    { title: "HOME", url: "/" },
    { title: "ALL", url: "/products" },
    {
      title: "WOMEN",
      url: "/products/women",
    },
    {
      title: "MEN",
      url: "/products/men",
    },
    {
      title: "KIDS",
      url: "/products/kids",
    },
    {
      title: "NEW",
      url: "/products/new",
    },
    {
      title: "BEST",
      url: "/products/best",
    },
    {
      title: "상품관리",
      url: "/mgr/prodcut",
      isRight: true,
    },
    {
      title: "매장관리",
      url: "/mgr/store",
      isRight: true,
    },
    {
      title: "장바구니",
      url: "/cart",
    },
  ];

  return (
    <div>
      <header className="p-4 border-b flex gap-4">
        <NavBar navItems={navItems} />
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}

// export default function GlobalLayout() {
//   return (
//     <div>
//       <nav className="p-4 border-b flex gap-4">
//         <Link to="/">Home</Link>
//         <Link to="/products">ALL</Link>
//         <Link to="/mgr/product">상품관리</Link>
//         <Link to="/mgr/store">매장관리</Link>
//       </nav>
//       <main className="p-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// }
