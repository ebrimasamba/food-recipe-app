import React from "react";
import { FaClock, FaHeart, FaUtensilSpoon } from "react-icons/fa";

const RecipeCard = ({ image, name, noOfIngredients, duration }) => {
  return (
    <div className="w-full relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900 text-white flex items-end z-10">
        <button className="absolute top-5 right-5 text-xl">
          <FaHeart />
        </button>
        <div className="p-5">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="flex text-gray-400 text-sm font-medium divide-x divide-gray-500 mt-2">
            <span className="pr-3 flex space-x-2 items-center">
              <FaUtensilSpoon />
              <span>{noOfIngredients} Ingredients</span>
            </span>

            <span className="pl-3 flex space-x-2 items-center">
              <FaClock /> <span>{duration} mins</span>
            </span>
          </div>
        </div>
      </div>
      <div className="h-72 relative rounded-lg overflow-hidden">
        <img src={image} className="w-full h-full object-cover" alt="recipe" />
      </div>
    </div>
  );
};

export default RecipeCard;
