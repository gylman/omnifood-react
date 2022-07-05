import cuid from "cuid";
import React from "react";

function DefaultColumn({ column }) {
  return (
    <nav className="nav-col">
      <p className="footer-heading">{column.heading}</p>
      <ul className="footer-nav">
        {column.items.map(function(item) {
          return (
            <li key={cuid()}>
              <a className="footer-link" href="/#">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DefaultColumn;
