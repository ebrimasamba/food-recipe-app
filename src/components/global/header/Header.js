import React from "react";
import Container from "../Container";
import { FaBars, FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="">
      <Container className={"py-6 flex justify-between"}>
        <FaBars className="text-xl" />
        <div>
          <h1 className="text-xl font-semibold">Home</h1>
        </div>
        <FaBell className="text-xl" />
      </Container>
    </header>
  );
};

export default Header;
