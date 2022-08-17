import React from "react";
import Container from "./Container";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Container className={"py-5"}>
        <FaBars className="text-xl" />
      </Container>
    </header>
  );
};

export default Header;
