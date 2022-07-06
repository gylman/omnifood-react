import React from "react";

function Input(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        required={props.required}
      />
    </div>
  );
}

export default Input;
