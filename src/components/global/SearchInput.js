import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <div className="mb-5 flex bg-gray-100 rounded-full overflow-hidden px-3 py-1.5">
      <button className="">
        <FaSearch />
      </button>
      <input
        type="text"
        placeholder="Search for recipe"
        className="w-full border-none bg-transparent focus:ring-0 "
      />
    </div>
  );
};

export default SearchInput;
