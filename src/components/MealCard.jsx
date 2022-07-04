import cuid from "cuid";
import React from "react";
import MealTag from "./MealTag";

function MealCard({ meal }) {
  return (
    <div className="meal">
      <img src={meal.img.src} className="meal-img" alt={meal.img.alt} />
      <div className="meal-content">
        <div className="meal-tags">
          {meal.tags.map(function(tag) {
            return <MealTag key={cuid()}>{tag}</MealTag>;
          })}
        </div>
        <p className="meal-title">{meal.title}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
            <span>
              <strong>{meal.caloryAmount}</strong> calories
            </span>
          </li>
          <li className="meal-attribute">
            <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
            <span>
              NutriScore &reg; <strong>{meal.nutriScore}</strong>
            </span>
          </li>
          <li className="meal-attribute">
            <ion-icon class="meal-icon" name="star-outline"></ion-icon>
            <span>
              <strong>{meal.rating}</strong> rating ({meal.numberOfReviews})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MealCard;
