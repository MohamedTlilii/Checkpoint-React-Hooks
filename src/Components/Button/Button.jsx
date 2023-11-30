import React from "react";
import "./Style.css";

function Button(props) {
  return <button className="btn-hero">{props.content}</button>;
}

export default Button;
