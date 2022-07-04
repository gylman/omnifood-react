import React from "react";

function Step({ step }) {
  return step.stepNumber % 2 ? (
    <>
      <div className="step-img-box">
        <img
          src={step.img.src}
          className={step.img.className}
          alt={step.img.alt}
        />
      </div>
      <div className="step-text-box">
        <p className="step-number">
          {step.stepNumber.toString().padStart(2, "0")}
        </p>
        <h3 className="heading-tertiary">{step.headingTertiary}</h3>
        <p className="step-description">{step.stepDescription}</p>
      </div>
    </>
  ) : (
    <>
      <div className="step-text-box">
        <p className="step-number">
          {step.stepNumber.toString().padStart(2, "0")}
        </p>
        <h3 className="heading-tertiary">{step.headingTertiary}</h3>
        <p className="step-description">{step.stepDescription}</p>
      </div>
      <div className="step-img-box">
        <img
          src={step.img.src}
          className={step.img.className}
          alt={step.img.alt}
        />
      </div>
    </>
  );
}

export default Step;
