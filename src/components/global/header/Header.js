import React, { useState } from "react";
import Container from "../Container";
import { FaBars, FaBell, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="">
      <Container className={"py-6 flex justify-between"}>
        <button className="" onClick={openMenu}>
          <FaBars className="text-xl" />
        </button>
        <div>
          <h1 className="text-xl font-semibold">Home</h1>
        </div>
        <FaBell className="text-xl" />
      </Container>

      <div
        className={`inset-0 absolute  backdrop-blur-sm z-[200] ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto transition-all duration-300 ease-in-out"
            : "opacity-0 pointer-events-none transition-all duration-300 ease-in-out"
        }`}
      >
        <div
          className={`h-full w-[80%] bg-white shadow-3xl ${
            isMenuOpen
              ? "translate-x-0 transition-all duration-500 ease-in-out"
              : "-translate-x-full transition-all duration-500 ease-in-out"
          }`}
        >
          <div className="p-4 py-6 bg-gray-100">
            <button>
              <FaTimes className="text-xl" onClick={closeMenu} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
