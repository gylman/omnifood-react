import React from "react";

function StepTextBox(props) {
  return (
    <div className="step-text-box">
      <p className="step-number">{props.stepNumber}</p>
      <h3 className="heading-tertiary">{props.headingTertiary}</h3>
      <p className="step-description">{props.stepDescription}</p>
    </div>
  );
}

export default StepTextBox;
