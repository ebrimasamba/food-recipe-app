import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ searchRecipe, search }) => {
  return (
    <div className="mb-5 flex bg-white custom-shadow rounded-lg overflow-hidden px-3 py-1.5">
      <button className="">
        <BsSearch />
      </button>
      <input
        type="text"
        placeholder="Search for recipe"
        className="w-full border-none bg-transparent focus:ring-0 text-sm"
        value={search}
        onChange={(e) => searchRecipe(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
