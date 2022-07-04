import cuid from "cuid";
import React from "react";
import Testimonial from "./Testimonial";

function Testimonials({ testimonials }) {
  return (
    <div className="testimonials-container">
      <span className="subheading">Testimonials</span>
      <h2 className="heading-secondary">Once you try it, you can't go back</h2>
      <div className="testimonials">
        {testimonials.map(function(testimonialItem) {
          return <Testimonial key={cuid()} testimonialItem={testimonialItem} />;
        })}
      </div>
    </div>
  );
}

export default Testimonials;
