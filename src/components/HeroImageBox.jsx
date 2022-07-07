import React from "react";

function HeroImageBox() {
  return (
    <div className="hero-img-box">
      <picture>
        <source srcSet="img/hero.webp" type="image/webp" />
        <source srcSet="img/hero-min.png" type="image/png" />
      </picture>
      <img
        src="img/hero-min.png"
        className="hero-img"
        alt="Woman enjoying food, meals in storage container, and food bowls on a table"
      />
    </div>
  );
}

export default HeroImageBox;
