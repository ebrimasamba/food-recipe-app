import React from "react";
import { FaBell, FaCog, FaHeart, FaPlus, FaUtensils } from "react-icons/fa";
import Container from "../Container";

const Navigation = () => {
  return (
    <div className="fixed w-full shadow z-50 bottom-0 left-0">
      <div className="flex justify-center -mb-5">
        <button className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-2xl">
          <FaPlus />
        </button>
      </div>
      <div className="py-5 pt-9 bg-gray-900 text-white ">
        <Container className={"flex justify-between items-center"}>
          <a href="/" className="flex-col flex items-center">
            <FaUtensils />
            <span>Browse</span>
          </a>
          <a href="/" className="flex-col flex items-center">
            <FaHeart />
            <span>Saved</span>
          </a>{" "}
          <a href="/" className="flex-col flex items-center">
            <FaBell />
            <span>Notification</span>
          </a>{" "}
          <a href="/" className="flex-col flex items-center">
            <FaCog />
            <span>Settings</span>
          </a>
        </Container>
      </div>
    </div>
  );
};

export default Navigation;
