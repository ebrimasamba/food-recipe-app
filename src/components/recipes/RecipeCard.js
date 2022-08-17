import React from "react";
import { FaClock } from "react-icons/fa";

const RecipeCard = ({ image, name, noOfIngredients, duration }) => {
  return (
    <a href="/" className="block w-full relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/20 to-gray-900 text-white flex items-end z-10">
        <span className="flex space-x-2 items-center absolute top-2 right-2  text-gray-100 text-sm">
          <FaClock /> <span>{duration} mins</span>
        </span>

        <div className="p-2">
          <h2 className="text font-bold">{name}</h2>
          <div className="flex flex-wrap text-gray-400 text-sm font-medium   text-sn">
            <span className="">
              <span>{noOfIngredients} Ingredients</span>
            </span>
          </div>
        </div>
      </div>
      <div className="h-48 relative">
        <img src={image} className="w-full h-full object-cover " alt="recipe" />
      </div>
    </a>
  );
};

export default RecipeCard;
