import React from "react";
import StepTextBox from "./StepTextBox";

const stepsArray = [
  {
    stepNumber: "01",
    headingTertiary: "Tell us what you like (and what not)",
    stepDescription:
      "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
  },
  {
    stepNumber: "02",
    headingTertiary: "Approve your weekly meal plan",
    stepDescription:
      "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
  },
  {
    stepNumber: "03",
    headingTertiary: "Receive meals at convenient time",
    stepDescription:
      "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
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

      {/* <!-- STEP 02 --> */}
      <div className="container grid grid--2-cols grid--center-v">
        <StepTextBox
          stepNumber={stepsArray[0].stepNumber}
          headingTertiary={stepsArray[0].headingTertiary}
          stepDescription={stepsArray[0].stepDescription}
        />

        <div className="step-img-box">
          <img
            src="img/app/app-screen-1.png"
            className="step-img"
            alt="iPhone app
    preferences selection screen"
          />
        </div>

        {/* <!-- STEP 02 --> */}
        <div className="step-img-box">
          <img
            src="img/app/app-screen-2.png"
            className="step-img"
            alt="iPhone app
    meal approving plan screen"
          />
        </div>
        <StepTextBox
          stepNumber={stepsArray[1].stepNumber}
          headingTertiary={stepsArray[1].headingTertiary}
          stepDescription={stepsArray[1].stepDescription}
        />

        {/* <!-- STEP 03 --> */}

        <StepTextBox
          stepNumber={stepsArray[2].stepNumber}
          headingTertiary={stepsArray[2].headingTertiary}
          stepDescription={stepsArray[2].stepDescription}
        />
        <div className="step-img-box">
          <img
            src="img/app/app-screen-3.png"
            className="step-img"
            alt="iPhone app
    delivery screen"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionHow;
