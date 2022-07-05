import React from "react";

function LogoColumn() {
  return (
    <div className="logo-col">
      <a href="/#" className="footer-logo">
        <img className="logo" alt="Omnifood" src="img/omnifood-logo.png" />
      </a>

      <ul className="social-links">
        <li>
          <a className="footer-link" href="/#">
            <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li>
          <a className="footer-link" href="/#">
            <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a className="footer-link" href="/#">
            <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
          </a>
        </li>
      </ul>

      <p className="copyright">
        Copyright &copy; <span className="year">2027</span> by Omnifood, Inc.
        All rights reserved.
      </p>
    </div>
  );
}

export default LogoColumn;
