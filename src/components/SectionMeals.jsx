import React from "react";
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
          return <MealCard meal={meal} />;
        })}
        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet:</h3>
          <ul className="list">
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Vegetarian</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Vegan</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Pescatarian</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Gluten-free</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Lactose-free</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Keto</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Paleo</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Low FODMAP</span>
            </li>
            <li className="list-item">
              <ion-icon
                className="list-icon"
                name="checkmark-outline"
              ></ion-icon>
              <span>Kid-friendly</span>
            </li>
          </ul>
        </div>
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
