import React from "react";
import Container from "./Container";

const Tabs = () => {
  return (
    <div className="mb-5">
      <Container>
        <div className="flex space-x-3">
          <button className="custom-shadow flex-1 active-tab  font-semibold p-3 rounded-full text-sm">
            All
          </button>
          <button className="custom-shadow flex-1 font-semibold p-3 rounded-full text-sm">
            Sushi
          </button>
          <button className="custom-shadow flex-1 font-semibold p-3 rounded-full text-sm">
            Burger
          </button>
          <button className="custom-shadow flex-1 font-semibold p-3 rounded-full text-sm">
            Pizza
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Tabs;
