import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewRecipe from "./pages/recipe/create";
import EditRecipe from "./pages/recipe/edit";
import Recipe from "./pages/recipe/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="recipe">
        <Route path=":id" element={<Recipe />} />
        <Route path=":id/edit" element={<EditRecipe />} />
        <Route path="new" element={<NewRecipe />} />
      </Route>
      {/* <Route path="recipe/:id" element={<Recipe />} /> */}
      {/* <Route path="recipe/:id/edit" element={<EditRecipe />} /> */}
      {/* <Route path="recipe/new" element={<NewRecipe />} /> */}
    </Routes>
  );
};

export default App;
