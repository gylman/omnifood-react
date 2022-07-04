import React from "react";

function MealTag({ children }) {
  const className = "tag tag--" + children.toLowerCase();
  return <span className={className}>{children}</span>;
}

export default MealTag;
