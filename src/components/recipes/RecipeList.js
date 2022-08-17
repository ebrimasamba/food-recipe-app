import React, { useEffect } from "react";
import Container from "../global/Container";
import RecipeCard from "./RecipeCard";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import img1 from "../../images/recipes/sushi-1.jpg";

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
  useEffect(() => {
    const elem = document.querySelector(".main-carousel");
    //eslint-disable-next-line
    const flkty = new Flickity(elem, {
      cellAlign: "center",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
    });
  }, []);
  return (
    <section>
      <Container>
        <div class="main-carousel -mx-2">
          {recipes.map((recipe) => (
            <div className="carousel-cell w-[95%] px-2">
              <RecipeCard
                name={recipe.name}
                image={recipe.image}
                noOfIngredients={recipe.ingredients.length}
                duration={recipe.duration}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RecipeList;
