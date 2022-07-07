import React from "react";
import MainNavLink from "./MainNavLink";
import cuid from "cuid";

const linkArray = [
  { href: "#how", children: "How it works" },
  { href: "#meals", children: "Meals" },
  {
    href: "#testimonials",
    children: "Testimonials",
  },
  { href: "#pricing", children: "Pricing" },
  {
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
              <MainNavLink key={cuid()} href={link.href}>
                {link.children}
              </MainNavLink>
            );
          })}
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>
  );
}
