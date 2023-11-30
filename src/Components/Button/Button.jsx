import React from "react";
import "./Style.css";

function Button(props) {
  return <button className="btn-btn">{props.content}</button>;
}

export default Button;
