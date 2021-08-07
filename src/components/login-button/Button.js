import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button onClick={props.onClick} className="login-btn">
      {props.label}
    </button>
  );
}

export default Button;
