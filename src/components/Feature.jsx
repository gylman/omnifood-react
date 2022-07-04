import React from "react";

function Feature({ feature }) {
  return (
    <div className="feature">
      <ion-icon class="feature-icon" name={feature.iconName}></ion-icon>
      <p className="feature-title">{feature.title}</p>
      <p className="feature-text">{feature.text}</p>
    </div>
  );
}

export default Feature;
