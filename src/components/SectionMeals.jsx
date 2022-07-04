import cuid from "cuid";
import React from "react";
import Diets from "./Diets";
import MealCard from "./MealCard";

const mealsArray = [
  {
    img: { src: "img/meals/meal-1.jpg", alt: "Japanese Gyozas" },
    title: "Avocado Salad",
    caloryAmount: 400,
    nutriScore: 74,
    rating: 4.9,
    numberOfReviews: 537,
    tags: ["Vegetarian"],
  },
  {
    img: { src: "img/meals/meal-2.jpg", alt: "Avocado Salad" },
    title: "Japanese Gyozas",
    caloryAmount: 650,
    nutriScore: 92,
    rating: 4.8,
    numberOfReviews: 441,
    tags: ["Vegan", "Paleo"],
  },
];

function SectionMeals() {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
        {mealsArray.map(function(meal) {
          return <MealCard meal={meal} key={cuid()} />;
        })}
        <Diets />
      </div>

      <div className="container all-recipes">
        <a href="/#" className="link">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}

export default SectionMeals;
