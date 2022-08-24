import React, { useRef, useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  BsClock,
  BsPencil,
  BsArrowLeft,
  BsCheckCircleFill,
} from "react-icons/bs";
import Container from "../../components/global/Container";
import { Link } from "react-router-dom";
import img1 from "../../images/recipes/pizza-1.jpg";
import { useParams } from "react-router-dom";

const Index = () => {
  const { id } = useParams();

  const [toggle, setToggle] = useState(true);
  const ingredientBtn = useRef();
  const directionBtn = useRef();
  const activeOverlay = useRef();

  const toggleIngredients = () => {
    setToggle(true);
    ingredientBtn.current.classList.add("text-white");
    directionBtn.current.classList.remove("text-white");
  };

  const toggleDirections = () => {
    setToggle(false);
    directionBtn.current.classList.add("text-white");
    ingredientBtn.current.classList.remove("text-white");
  };

  return (
    <div className="">
      <div
        className="h-56 bg-zinc-400 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-zinc-900/20 to-zinc-900/60"></div>
        <Container className={"text-white py-6 relative z-10"}>
          <div className="flex justify-between items-center">
            <Link to="/">
              <BsArrowLeft />
            </Link>

            <h4 className="text-xl font-semibold">Details</h4>
            <Link to={`/recipe/${id}/edit`}>
              <BsPencil />
            </Link>
          </div>
        </Container>
      </div>

      <div className="p-4 py-6 -mt-5 rounded-t-3xl relative z-10 bg-white">
        <div className="flex justify-between mb-2 items-center">
          <h4 className="text-2xl font-bold">Pepperoni Pizza</h4>
          <div className="flex space-x-2  text-zinc-500 text-sm">
            <BsClock /> <span>16 mins</span>
          </div>
        </div>

        <p className="text-zinc-500 text-sm mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor illum
          in officia alias.
        </p>

        <div className="grid grid-cols-2 gap-5 mb-8">
          <div className="flex items-center gap-2">
            <span className="bg-zinc-200 text-teal-600 w-8 h-8 rounded-lg inline-flex items-center justify-center">
              <FaReact />
            </span>
            <span className="text-sm font-semibold">15g Proteins</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-zinc-200 text-teal-600 w-8 h-8 rounded-lg inline-flex items-center justify-center">
              <FaReact />
            </span>
            <span className="text-sm font-semibold">15g Proteins</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-zinc-200 text-teal-600 w-8 h-8 rounded-lg inline-flex items-center justify-center">
              <FaReact />
            </span>
            <span className="text-sm font-semibold">15g Proteins</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-zinc-200 text-teal-600 w-8 h-8 rounded-lg inline-flex items-center justify-center">
              <FaReact />
            </span>
            <span className="text-sm font-semibold">15g Proteins</span>
          </div>
        </div>

        <div className="grid grid-cols-2 bg-zinc-200 rounded-lg p-1 overflow-hidden mb-5 relative">
          <div className="absolute inset-y-0 w-[51%] p-1">
            <div
              className={`active-tab w-full h-full rounded-lg pointer-events-none ${
                toggle
                  ? "translate-x-0 transition-transform duration-300 "
                  : "translate-x-full transition-transform duration-300 "
              }`}
              ref={activeOverlay}
            ></div>
          </div>
          <button
            className="rounded-lg py-2 font-semibold relative z-10 transition-colors duration-500 ease-in-out text-white"
            ref={ingredientBtn}
            onClick={toggleIngredients}
          >
            Ingredients
          </button>
          <button
            className="rounded-lg py-2 font-semibold relative z-10 transition-colors duration-500 ease-in-out"
            ref={directionBtn}
            onClick={toggleDirections}
          >
            Directions
          </button>
        </div>
        {toggle ? (
          <div>
            <h6 className="text-lg font-bold mb-2">Ingredients</h6>
            <ul className="text-zinc-500 text-sm flex flex-col gap-3">
              <li className="flex gap-3 items-center">
                <span className="text-green-500">
                  <BsCheckCircleFill />
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-500">
                  <BsCheckCircleFill />
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-500">
                  <BsCheckCircleFill />
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-500">
                  <BsCheckCircleFill />
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-500">
                  <BsCheckCircleFill />
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h6 className="text-lg font-bold mb-2">Directions</h6>
            <ul className="text-zinc-500 text-sm flex flex-col gap-3">
              <li className="flex gap-3 items-center">
                <span className="text-green-500">
                  <BsCheckCircleFill />
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-500">
                  <BsCheckCircleFill />
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-500">
                  <BsCheckCircleFill />
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-500">
                  <BsCheckCircleFill />
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-green-500">
                  <BsCheckCircleFill />
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
