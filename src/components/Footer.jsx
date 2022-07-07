import React from "react";
import LogoColumn from "./LogoColumn";
import OtherColumns from "./OtherColumns";

const columns = [
  {
    heading: "Account",
    items: ["Create account", "Sign in", "iOS app", "Android app"],
  },
  {
    heading: "Company",
    items: ["About Omnifood", "For Business", "Cooking partners", "Careers"],
  },
  {
    heading: "Resources",
    items: ["Recipe directory", "Help center", "Privacy & terms"],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <LogoColumn />
        <OtherColumns columns={columns} />
      </div>
    </footer>
  );
}

export default Footer;
