import cuid from "cuid";
import React from "react";

const logosArray = [
  { src: "img/logos/techcrunch.png", alt: "Techcrunch logo" },
  { src: "img/logos/business-insider.png", alt: "Business Insider" },
  { src: "img/logos/the-new-york-times.png", alt: "The New York Times" },
  { src: "img/logos/forbes.png", alt: "Forbes" },
  { src: "img/logos/usa-today.png", alt: "USA Today" },
];

function SectionFeatured() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          {logosArray.map(function(logo) {
            return <img key={cuid()} src={logo.src} alt={logo.alt} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default SectionFeatured;
