import React from "react";
import { BsClock } from "react-icons/bs";

import { Link } from "react-router-dom";

const RecipeCard = ({ image, name, noOfIngredients, duration }) => {
  return (
    <Link
      to={`/recipe/${name}`}
      className="block w-full h-full relative overflow-hidden rounded-lg custom-shadow bg-white p-2"
    >
      <div className="h-32 relative">
        <img
          src={image}
          className="w-full h-full object-cover rounded-md"
          alt="recipe"
        />
        <span className="flex space-x-2 items-center absolute bottom-2 right-2  text-zinc-300 bg-primary text-xs font-semibold p-1 rounded-md">
          <BsClock /> <span>{duration} mins</span>
        </span>
      </div>

      <div className="">
        <div className="py-2 px-1">
          <h2 className="text font-bold">{name}</h2>
          <div className="flex flex-wrap text-zinc-400 text-sm text-sn">
            <span className="">
              <span>{noOfIngredients} Ingredients</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
