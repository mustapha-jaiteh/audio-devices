import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CartProvider from "./Provider";

const Layout = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default Layout;
