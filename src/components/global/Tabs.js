import React from "react";
import Container from "./Container";

const Tabs = () => {
  return (
    <div className="mb-5">
      <Container>
        <div className="flex space-x-3">
          <button className="bg-white custom-shadow w-full active-tab  font-semibold p-2 rounded-lg text-sm">
            All
          </button>
          <button className="bg-white custom-shadow w-full font-semibold p-2 rounded-lg text-sm">
            Breakfast
          </button>
          <button className="bg-white custom-shadow w-full font-semibold p-2 rounded-lg text-sm">
            Lunch
          </button>
          <button className="bg-white custom-shadow w-full font-semibold p-2 rounded-lg text-sm">
            Dinner
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Tabs;
