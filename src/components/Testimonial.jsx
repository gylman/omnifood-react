import React from "react";

function Testimonial({ testimonialItem }) {
  return (
    <figure className="testimonial">
      <img
        className="testimonial-img"
        alt={testimonialItem.img.alt}
        src={testimonialItem.img.src}
      />
      <blockquote className="testimonial-text">
        {testimonialItem.text}
      </blockquote>
      <p className="testimonial-name">&mdash; {testimonialItem.name}</p>
    </figure>
  );
}

export default Testimonial;
