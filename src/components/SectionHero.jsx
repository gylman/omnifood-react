import cuid from "cuid";
import React from "react";

function SectionHero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#cta" className="btn btn--full margin-right-sm">
            Start eating well
          </a>
          <a href="#how" className="btn btn--outline">
            Learn more &darr;
          </a>
          <div className="delivered-meals">
            <div className="delivered-imgs">
              {new Array(6).fill().map(function(_, i) {
                return (
                  <img
                    key={cuid()}
                    src={`img/customers/customer-${i + 1}.jpg`}
                    alt="Customer"
                  />
                );
              })}
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
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
      </div>
    </section>
  );
}

export default SectionHero;
