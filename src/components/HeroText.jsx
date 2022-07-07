import React from "react";
import Achievement from "./Achievement";

function HeroText() {
  return (
    <div className="hero-text-box">
      <h1 className="heading-primary">
        A healthy meal delivered to your door, every single day
      </h1>
      <p className="hero-description">
        The smart 365-days-per-year food subscription that will make you eat
        healthy again. Tailored to your personal tastes and nutritional needs.
      </p>
      <a href="#cta" className="btn btn--full margin-right-sm">
        Start eating well
      </a>
      <a href="#how" className="btn btn--outline">
        Learn more &darr;
      </a>
      <Achievement />
    </div>
  );
}

export default HeroText;
