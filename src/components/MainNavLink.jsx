import React from "react";

export default function MainNavLink(props) {
  return (
    <li>
      <a
        className={
          props.href === "#cta" ? "main-nav-link nav-cta" : "main-nav-link"
        }
        href={props.href}
      >
        {props.children}
      </a>
    </li>
  );
}
