import React from "react";
import Perks from "./Perks";

function PricingCard({ plan }) {
  const className = "pricing-plan pricing-plan--" + plan.name.toLowerCase();
  return (
    <div className={className}>
      <header className="plan-header">
        <p className="plan-name">{plan.name}</p>
        <p className="plan-price">
          <span>$</span>
          {plan.price}
        </p>
        <p className="plan-text">{plan.text}</p>
      </header>
      <Perks perks={plan.perks} />
      <div className="plan-sign-up">
        <a href="/#" className="btn btn--full">
          Start eating well
        </a>
      </div>
    </div>
  );
}

export default PricingCard;
