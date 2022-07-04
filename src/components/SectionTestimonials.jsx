import React from "react";
import Testimonial from "./Testimonial";
import cuid from "cuid";

const testimonialsArray = [
  {
    img: {
      alt: "Customer Dave Bryson",
      src: "img/customers/dave.jpg",
    },
    text:
      "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    name: "Dave Bryson",
  },
  {
    img: {
      alt: "Customer Ben Hadley",
      src: "img/customers/ben.jpg",
    },
    text:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: "Ben Hadley",
  },
  {
    img: {
      alt: "Customer Steve Miller",
      src: "img/customers/steve.jpg",
    },
    text:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: "Steve Miller",
  },
  {
    img: {
      alt: "Customer Hannah Smith",
      src: "img/customers/hannah.jpg",
    },
    text:
      "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    name: "Hannah Smith",
  },
];

function SectionTestimonials() {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>
        <div className="testimonials">
          {testimonialsArray.map(function(testimonialItem) {
            return (
              <Testimonial key={cuid()} testimonialItem={testimonialItem} />
            );
          })}
        </div>
      </div>

      <div className="gallery">
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-1.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-2.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-3.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-4.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-5.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-6.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-7.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-8.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-9.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-10.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-11.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
        <figure className="gallery-item">
          <img
            src="img/gallery/gallery-12.jpg"
            alt="Beautifully
    arranged food"
          />
        </figure>
      </div>
    </section>
  );
}

export default SectionTestimonials;
