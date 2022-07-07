import cuid from "cuid";
import React from "react";
import SocialLink from "./SocialLink";

const socialLinks = ["instagram", "facebook", "twitter"];

function SocialNetworks() {
  return (
    <ul className="social-links">
      {socialLinks.map(function(link) {
        return <SocialLink key={cuid()} title={link} />;
      })}
    </ul>
  );
}

export default SocialNetworks;
