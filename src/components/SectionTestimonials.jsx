import React from "react";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

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
      <Testimonials testimonials={testimonialsArray} />
      <Gallery />
    </section>
  );
}

export default SectionTestimonials;
