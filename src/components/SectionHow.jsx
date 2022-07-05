import cuid from "cuid";
import React from "react";
import Step from "./Step";

const stepsArray = [
  {
    number: 1,

    headingTertiary: "Tell us what you like (and what not)",
    description:
      "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
    img: {
      src: "img/app/app-screen-1.png",
      className: "step-img",
      alt: "iPhone app preferences selection screen",
    },
  },
  {
    number: 2,
    headingTertiary: "Approve your weekly meal plan",
    description:
      "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
    img: {
      src: "img/app/app-screen-2.png",
      className: "step-img",
      alt: "iPhone app preferences selection screen",
    },
  },
  {
    number: 3,
    headingTertiary: "Receive meals at convenient time",
    description:
      "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
    img: {
      src: "img/app/app-screen-3.png",
      className: "step-img",
      alt: "iPhone app preferences selection screen",
    },
  },
];

function SectionHow() {
  return (
    <section className="section-how" id="how">
      <div className="container">
        <span className="subheading">How it works</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="container grid grid--2-cols grid--center-v">
        {stepsArray.map(function(step) {
          return <Step key={cuid()} step={step} />;
        })}
      </div>
    </section>
  );
}

export default SectionHow;
