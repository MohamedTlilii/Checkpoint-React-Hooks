import React from "react";
import "./Style.css";
import Button from "../Button/Button";
function Intro() {
  return (
    <div className="intro">
      <div className="intro-containr">
      <h2>Latest Movies</h2>
      <Button content="View All"/>
      </div>
    </div>
  );
}

export default Intro;
