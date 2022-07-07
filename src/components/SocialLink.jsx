import React from "react";

function SocialLink({ title }) {
  return (
    <li>
      <a className="footer-link" href="/#">
        <ion-icon class="social-icon" name={`logo-${title}`}></ion-icon>
      </a>
    </li>
  );
}

export default SocialLink;
