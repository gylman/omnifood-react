import React from "react";
import SocialLink from "./SocialLink";

const socialLinks = ["instagram", "facebook", "twitter"];

function SocialNetworks() {
  return (
    <ul className="social-links">
      {socialLinks.map(function(link) {
        return <SocialLink title={link} />;
      })}
    </ul>
  );
}

export default SocialNetworks;
