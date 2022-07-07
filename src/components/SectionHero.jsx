import React from "react";
import HeroImageBox from "./HeroImageBox";
import HeroText from "./HeroText";

function SectionHero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <HeroText />
        <HeroImageBox />
      </div>
    </section>
  );
}

export default SectionHero;
