import React from "react";
import SocialNetworks from "./SocialNetworks";

function LogoColumn() {
  return (
    <div className="logo-col">
      <a href="/#" className="footer-logo">
        <img className="logo" alt="Omnifood" src="img/omnifood-logo.png" />
      </a>
      <SocialNetworks />
      <p className="copyright">
        Copyright &copy; <span className="year">2027</span> by Omnifood, Inc.
        All rights reserved.
      </p>
    </div>
  );
}

export default LogoColumn;
