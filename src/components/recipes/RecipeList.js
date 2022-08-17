import React from "react";
import Container from "../global/Container";
import RecipeCard from "./RecipeCard";
import "flickity/css/flickity.css";
import img1 from "../../images/recipes/sushi-1.jpg";
import img2 from "../../images/recipes/pizza-1.jpg";
import img3 from "../../images/recipes/burger-1.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const RecipeList = () => {
  const recipes = [
    {
      name: "Salmon Sushi Matcha",
      category: "sushi",
      image: img1,
      ingredients: [{}],
      duration: 15,
      directions: [{}],
    },
    {
      name: "Pepperomi Pizza",
      category: "sushi",
      image: img2,
      ingredients: [{}],
      duration: 15,
      directions: [{}],
    },
    {
      name: "Hamburger",
      category: "sushi",
      image: img3,
      ingredients: [{}],
      duration: 15,
      directions: [{}],
    },
    {
      name: "Pepperomi Pizza",
      category: "sushi",
      image: img2,
      ingredients: [{}],
      duration: 15,
      directions: [{}],
    },
    {
      name: "Sushi",
      category: "sushi",
      image: img1,
      ingredients: [{}],
      duration: 15,
      directions: [{}],
    },
    {
      name: "Sushi",
      category: "sushi",
      image: img1,
      ingredients: [{}],
      duration: 15,
      directions: [{}],
    },
  ];

  return (
    <section>
      <Container className={""}>
        <div className="grid grid-cols-2 gap-3">
          {recipes.map((recipe) => (
            <div>
              <RecipeCard
                name={recipe.name}
                image={recipe.image}
                noOfIngredients={recipe.ingredients.length}
                duration={recipe.duration}
              />
            </div>
          ))}
        </div>
        {/* <Splide
          className="rounded-lg"
          options={{
            rewind: true,
            gap: "1rem",
            pagination: false,
          }}
        >
          {recipes.map((recipe) => (
            <SplideSlide>
              <RecipeCard
                name={recipe.name}
                image={recipe.image}
                noOfIngredients={recipe.ingredients.length}
                duration={recipe.duration}
              />
            </SplideSlide>
          ))}
        </Splide> */}
      </Container>
    </section>
  );
};

export default RecipeList;
