import React from "react";
import { FaBell, FaCog, FaHeart, FaHome, FaPlus } from "react-icons/fa";
import Container from "../Container";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="fixed w-full  z-[100] bottom-0 left-0">
      {/* <div className="flex justify-center -mb-10">
        <Link
          to="/recipe/new"
          className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-2xl"
        >
          <FaPlus />
        </Link>
      </div> */}
      <div className="py-1  text-zinc-500 navigation-shadow bg-white">
        <Container className={"flex justify-between items-center"}>
          <Link to="/" className="flex-col flex items-center text-2xl">
            <FaHome />
            {/* <span className="text-sm mt-1">Home</span> */}
          </Link>
          <Link to="/" className="flex-col flex items-center text-2xl">
            <FaHeart />
            {/* <span className="text-sm mt-1">Saved</span> */}
          </Link>{" "}
          <Link
            to="/recipe/new"
            className="bg-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl -translate-y-4"
          >
            <FaPlus />
          </Link>
          <Link to="/" className="flex-col flex items-center text-2xl">
            <FaBell />
            {/* <span className="text-sm mt-1">Notification</span> */}
          </Link>{" "}
          <Link to="/" className="flex-col flex items-center text-2xl">
            <FaCog />
            {/* <span className="text-sm mt-1">Settings</span> */}
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Navigation;
