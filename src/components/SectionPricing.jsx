import cuid from "cuid";
import React from "react";
import Feature from "./Feature";
import PricingCard from "./PricingCard";

const pricingPlans = [
  {
    name: "Starter",
    price: 399,
    text: "per month. That's just $13 per meal!",
    perks: ["1 meal per day", "Order from 11am to 9pm", "Delivery is free", ""],
  },
  {
    name: "Complete",
    price: 649,
    text: "per month. That's just $11 per meal!",
    perks: [
      "**2** meals per day",
      "Order **24/7**",
      "Delivery is free",
      "Access the lastest recipes",
    ],
  },
];

const features = [
  {
    iconName: "infinite-outline",
    title: "Never cook again!",
    text:
      "Our subscriptions cover 365 days per year, even including major holidays.",
  },
  {
    iconName: "nutrition-outline",
    title: "Local and organic",
    text:
      "Our cooks only use local, fresh, and organic products to prepare your meals.",
  },
  {
    iconName: "leaf-outline",
    title: "No waste",
    text:
      "All our partners only use reusable containers to package all your meals.",
  },
  {
    iconName: "pause-outline",
    title: "Pause anytime",
    text:
      "Going on vacation? Just pause your subscription, and we refund unused days.",
  },
];

function SectionPricing() {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container grid grid--2-cols margin-bottom-md">
        {pricingPlans.map(function(plan) {
          return <PricingCard key={cuid()} plan={plan} />;
        })}
      </div>

      <div className="container grid">
        <aside className="plan-details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

      <div className="container grid grid--4-cols">
        {features.map(function(feature) {
          return <Feature key={cuid()} feature={feature} />;
        })}
      </div>
    </section>
  );
}

export default SectionPricing;
