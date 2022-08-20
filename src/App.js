import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/recipe/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="recipe/:id" element={<Recipe />} />
    </Routes>
  );
};

export default App;
