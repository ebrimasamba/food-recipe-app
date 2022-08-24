import React, { useEffect, useRef } from "react";
import Container from "../global/Container";
import RecipeCard from "./RecipeCard";
import "flickity/css/flickity.css";
import Isotope from "isotope-layout";
const RecipeList = ({ recipes, search }) => {
  const isotopeRef = useRef();
  const allBtnRef = useRef();
  const breakfastBtnRef = useRef();
  const lunchBtnRef = useRef();
  const dinnerBtnRef = useRef();

  useEffect(() => {
    const iso = new Isotope(isotopeRef.current, {
      itemSelector: ".recipe-item",
      layoutMode: "masonry",
    });

    allBtnRef.current.addEventListener("click", (e) => {
      iso.arrange({ filter: "*" });
      e.target.classList.add("active-tab");
      breakfastBtnRef.current.classList.remove("active-tab");
      lunchBtnRef.current.classList.remove("active-tab");
      dinnerBtnRef.current.classList.remove("active-tab");
    });
    breakfastBtnRef.current.addEventListener("click", (e) => {
      iso.arrange({ filter: ".breakfast" });
      e.target.classList.add("active-tab");
      allBtnRef.current.classList.remove("active-tab");
      lunchBtnRef.current.classList.remove("active-tab");
      dinnerBtnRef.current.classList.remove("active-tab");
    });
    lunchBtnRef.current.addEventListener("click", (e) => {
      iso.arrange({ filter: ".lunch" });
      e.target.classList.add("active-tab");
      breakfastBtnRef.current.classList.remove("active-tab");
      allBtnRef.current.classList.remove("active-tab");
      dinnerBtnRef.current.classList.remove("active-tab");
    });
    dinnerBtnRef.current.addEventListener("click", (e) => {
      iso.arrange({ filter: ".dinner" });
      e.target.classList.add("active-tab");
      breakfastBtnRef.current.classList.remove("active-tab");
      lunchBtnRef.current.classList.remove("active-tab");
      allBtnRef.current.classList.remove("active-tab");
    });
  }, []);

  return (
    <section>
      <Container className={""}>
        <div className="mb-5">
          <div className="flex space-x-3">
            <button
              className="bg-white custom-shadow w-full active-tab  font-semibold p-2 rounded-lg text-sm"
              ref={allBtnRef}
            >
              All
            </button>
            <button
              className="bg-white custom-shadow w-full font-semibold p-2 rounded-lg text-sm"
              ref={breakfastBtnRef}
            >
              Breakfast
            </button>
            <button
              className="bg-white custom-shadow w-full font-semibold p-2 rounded-lg text-sm"
              ref={lunchBtnRef}
            >
              Lunch
            </button>
            <button
              className="bg-white custom-shadow w-full font-semibold p-2 rounded-lg text-sm"
              ref={dinnerBtnRef}
            >
              Dinner
            </button>
          </div>
        </div>
        <div className="-mx-1.5" ref={isotopeRef}>
          {recipes
            .filter((recipe, index) => {
              if (search === "") {
                return recipe;
              }

              return recipe.name
                .toLowerCase()
                .replace(/\s/g, "")
                .includes(search.replace(/\s/g, ""));
            })
            .map((recipe, index) => (
              <div
                className={`recipe-item w-1/2 px-1.5 mb-3 ${recipe.category}`}
                key={index}
              >
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
