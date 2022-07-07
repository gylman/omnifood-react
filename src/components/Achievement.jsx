import cuid from "cuid";
import React from "react";

function Achievement() {
  return (
    <div className="delivered-meals">
      <div className="delivered-imgs">
        {new Array(6).fill().map(function(_, i) {
          return (
            <img
              key={cuid()}
              src={`img/customers/customer-${i + 1}.jpg`}
              alt="Customer"
            />
          );
        })}
      </div>
      <p className="delivered-text">
        <span>250,000+</span> meals delivered last year!
      </p>
    </div>
  );
}

export default Achievement;
