import React from "react";

export default function MainNavLink(props) {
  return (
    <li>
      <a className={props.className} href={props.href}>
        {props.children}
      </a>
    </li>
  );
}
