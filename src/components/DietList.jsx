import cuid from "cuid";
import React from "react";
import DietItem from "./DietItem";

const diets = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "Lactose-free",
  "Keto",
  "Paleo",
  "Low FODMAP",
  "Kid-friendly",
];

function DietList() {
  return (
    <div className="diets">
      <h3 className="heading-tertiary">Works with any diet:</h3>
      <ul className="list">
        {diets.map(function(diet) {
          return <DietItem key={cuid()}>{diet}</DietItem>;
        })}
      </ul>
    </div>
  );
}

export default DietList;
