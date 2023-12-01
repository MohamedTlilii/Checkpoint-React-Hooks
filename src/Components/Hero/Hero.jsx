import React from "react";
import "./Style.css";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";
import Searchh from "../Search/Searchh";
function Hero() {
  return (
    <div className="hero">
      <NavBar />
      <Searchh/>
      <div className="hero-containt">
      <h1>Movies</h1>
      <h4>Genre:</h4>
      <div className="btns-hero">
        <Button content="Action" />
        <Button content="Adventure" />
        <Button content="Comedy" />
        <Button content="Romance" />
        <Button content="Sci-Fi" />
        <Button content="Horro" />
        <Button content="Fantacy" />
      </div>
      </div>
    </div>
  );
}

export default Hero;
