import cuid from "cuid";
import React from "react";

function Perks({ perks }) {
  return (
    <ul className="list">
      {perks.map(function(perk) {
        return perk ? (
          <li key={cuid()} className="list-item">
            <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
            <span>{perk}</span>
          </li>
        ) : (
          <li key={cuid()} className="list-item">
            <ion-icon class="list-icon" name="close-outline"></ion-icon>
          </li>
        );
      })}
    </ul>
  );
}

export default Perks;
