import React from "react";
import Footer from "./Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-zinc-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
