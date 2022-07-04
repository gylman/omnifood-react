import React from "react";

function SectionFeatured() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src="img/logos/techcrunch.png" alt="Techcrunch logo" />
          <img src="img/logos/business-insider.png" alt="Business Insider" />
          <img
            src="img/logos/the-new-york-times.png"
            alt="The New York Times"
          />
          <img src="img/logos/forbes.png" alt="Forbes" />
          <img src="img/logos/usa-today.png" alt="USA Today" />
        </div>
      </div>
    </section>
  );
}

export default SectionFeatured;
