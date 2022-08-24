import React, { useState } from "react";
import Container from "../components/global/Container";
import Layout from "../components/global/Layout";
// import Navigation from "../components/global/navigation/Navigation";
import SearchInput from "../components/global/SearchInput";
import Tabs from "../components/global/Tabs";
import RecipeList from "../components/recipes/RecipeList";
import img1 from "../images/recipes/sushi-1.jpg";
import img2 from "../images/recipes/pizza-1.jpg";
import img3 from "../images/recipes/burger-1.jpg";

const recipes = [
  {
    name: "Salmon Sushi Matcha",
    category: "lunch",
    image: img1,
    ingredients: [{}],
    duration: 15,
    directions: [{}],
  },
  {
    name: "Pepperomi Pizza",
    category: "lunch",
    image: img2,
    ingredients: [{}],
    duration: 15,
    directions: [{}],
  },
  {
    name: "Hamburger",
    category: "lunch",
    image: img3,
    ingredients: [{}],
    duration: 15,
    directions: [{}],
  },
  {
    name: "Pepperomi Pizza",
    category: "lunch",
    image: img2,
    ingredients: [{}],
    duration: 15,
    directions: [{}],
  },
  {
    name: "Sushi",
    category: "lunch",
    image: img1,
    ingredients: [{}],
    duration: 15,
    directions: [{}],
  },
  {
    name: "Sushi",
    category: "dinner",
    image: img1,
    ingredients: [{}],
    duration: 15,
    directions: [{}],
  },
];

const Home = () => {
  const [search, setSearch] = useState("");
  const searchRecipe = (recipe) => {
    setSearch(recipe);
  };

  return (
    <Layout>
      <Container>
        {/* <h1 className="font-bold text-2xl max-w-xs mb-5">
          Find the best recipe for cooking.
        </h1> */}
        <SearchInput searchRecipe={searchRecipe} search={search} />
      </Container>
      {/* <Tabs /> */}
      <RecipeList recipes={recipes} search={search} />
      {/* <Navigation /> */}
    </Layout>
  );
};

export default Home;
