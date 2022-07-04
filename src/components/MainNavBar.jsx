import React from "react";
import MainNavLink from "./MainNavLink";
import cuid from "cuid";

const linkArray = [
  { className: "main-nav-link", href: "#how", children: "How it works" },
  { className: "main-nav-link", href: "#meals", children: "Meals" },
  {
    className: "main-nav-link",
    href: "#testimonials",
    children: "Testimonials",
  },
  { className: "main-nav-link", href: "#pricing", children: "Pricing" },
  {
    className: "main-nav-link nav-cta",
    href: "#cta",
    children: "Try for free",
  },
];

export default function NavigationBar() {
  return (
    <header className="header">
      <a href="/#">
        <img className="logo" alt="Omnifood" src="img/omnifood-logo.png" />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          {linkArray.map(function(link) {
            return (
              <MainNavLink
                key={cuid()}
                className={link.className}
                href={link.href}
              >
                {link.children}
              </MainNavLink>
            );
          })}
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
}
