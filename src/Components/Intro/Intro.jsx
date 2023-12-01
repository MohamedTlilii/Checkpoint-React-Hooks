import "./Style.css";
import React from "react";
import Button from "../Button/Button";
import List from "../Card/List";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-containr">
        <h2>Latest Movies</h2>
        <Button content="View All" />
      </div>
      <div >
        <List />
      </div>
    </div>
  );
}

export default Intro;
