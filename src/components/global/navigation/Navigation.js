import React from "react";
import { FaBell, FaCog, FaHeart, FaPlus, FaUtensils } from "react-icons/fa";
import Container from "../Container";

const Navigation = () => {
  return (
    <div className="fixed w-full  z-[100] bottom-0 left-0">
      <div className="flex justify-center -mb-5">
        <button className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-2xl">
          <FaPlus />
        </button>
      </div>
      <div className="py-5 pt-9 text-gray-700 navigation-shadow bg-white">
        <Container className={"flex justify-between items-center"}>
          <a href="/" className="flex-col flex items-center">
            <FaUtensils />
            <span className="text-sm mt-1">Browse</span>
          </a>
          <a href="/" className="flex-col flex items-center">
            <FaHeart />
            <span className="text-sm mt-1">Saved</span>
          </a>{" "}
          <a href="/" className="flex-col flex items-center">
            <FaBell />
            <span className="text-sm mt-1">Notification</span>
          </a>{" "}
          <a href="/" className="flex-col flex items-center">
            <FaCog />
            <span className="text-sm mt-1">Settings</span>
          </a>
        </Container>
      </div>
    </div>
  );
};

export default Navigation;
