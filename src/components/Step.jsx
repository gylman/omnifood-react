import React from "react";

function Step({ step }) {
  return step.number % 2 ? (
    <>
      <div className="step-text-box">
        <p className="step-number">{step.number.toString().padStart(2, "0")}</p>
        <h3 className="heading-tertiary">{step.headingTertiary}</h3>
        <p className="step-description">{step.description}</p>
      </div>
      <div className="step-img-box">
        <img src={step.img.src} className="step-img" alt={step.img.alt} />
      </div>
    </>
  ) : (
    <>
      <div className="step-img-box">
        <img src={step.img.src} className="step-img" alt={step.img.alt} />
      </div>
      <div className="step-text-box">
        <p className="step-number">{step.number.toString().padStart(2, "0")}</p>
        <h3 className="heading-tertiary">{step.headingTertiary}</h3>
        <p className="step-description">{step.description}</p>
      </div>
    </>
  );
}

export default Step;
