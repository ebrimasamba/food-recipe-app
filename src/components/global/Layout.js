import React from "react";
import Footer from "./Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden pb-[145.9722px]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
