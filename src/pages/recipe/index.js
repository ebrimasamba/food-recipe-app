import React from "react";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaClock,
  FaHeart,
  FaReact,
} from "react-icons/fa";
import Container from "../../components/global/Container";
import { Link } from "react-router-dom";
import img1 from "../../images/recipes/pizza-1.jpg";
const index = () => {
  return (
    <div>
      <div
        className="h-56 bg-gray-400 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-900/20 to-gray-900"></div>
        <Container className={"text-white py-6 relative z-10"}>
          <div className="flex justify-between items-center">
            <Link to="/">
              <FaArrowLeft />
            </Link>

            <h4 className="text-xl font-bold">Details</h4>
            <button>
              <FaHeart />
            </button>
          </div>
        </Container>
      </div>

      <div className="p-4">
        <div className="flex justify-between mb-2">
          <h4 className="text-2xl font-bold">Pepperoni Pizza</h4>
          <div className="flex space-x-1 items-center text-gray-500 text-sm">
            <FaClock /> <span>16 mins</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor illum
          in officia alias.
        </p>

        <div className="grid grid-cols-2 gap-5 mb-8">
          <div className="flex items-center gap-2">
            <span className="bg-orange-500/20 text-orange-500 w-8 h-8 rounded-md inline-flex items-center justify-center">
              <FaReact />
            </span>
            <span className="text-sm">15g Proteins</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-orange-500/20 text-orange-500 w-8 h-8 rounded-md inline-flex items-center justify-center">
              <FaReact />
            </span>
            <span className="text-sm">15g Proteins</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-orange-500/20 text-orange-500 w-8 h-8 rounded-md inline-flex items-center justify-center">
              <FaReact />
            </span>
            <span className="text-sm">15g Proteins</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-orange-500/20 text-orange-500 w-8 h-8 rounded-md inline-flex items-center justify-center">
              <FaReact />
            </span>
            <span className="text-sm">15g Proteins</span>
          </div>
        </div>

        <div className="grid grid-cols-2 bg-slate-100 mb-5">
          <button className="rounded-md py-2 font-semibold bg-orange-500 text-white">
            Ingredients
          </button>
          <button className="rounded-md py-2 font-semibold">Directions</button>
        </div>

        <div>
          <h6 className="text-lg font-bold mb-2">Ingredients</h6>
          <ul className="text-gray-500 text-sm flex flex-col gap-3">
            <li className="flex gap-3 items-center">
              <span className="text-green-500">
                <FaCheckCircle />
              </span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-green-500">
                <FaCheckCircle />
              </span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-green-500">
                <FaCheckCircle />
              </span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-green-500">
                <FaCheckCircle />
              </span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-green-500">
                <FaCheckCircle />
              </span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
