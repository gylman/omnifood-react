import React from "react";

function DietItem({ children }) {
  return (
    <li className="list-item">
      <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
      <span>{children}</span>
    </li>
  );
}

export default DietItem;
