import React, { useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { BsList, BsX, BsPlus } from "react-icons/bs";

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
          <BsList className="text-2xl" />
        </button>
        <div>
          <h1 className="text-xl font-semibold">Home</h1>
        </div>
        <Link
          to="/recipe/new"
          className="w-7 h-7 border-[1.5px] border-black rounded-full flex items-center justify-center"
        >
          <BsPlus className="text-3xl" />
        </Link>
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
          <div className="p-4  bg-zinc-100">
            <button>
              <BsX className="text-3xl" onClick={closeMenu} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
