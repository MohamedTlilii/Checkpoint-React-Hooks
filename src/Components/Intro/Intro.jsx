import "./Style.css";
import React from "react";
import Button from "../Button/Button";
import MovieCard from "../MovieCard/MovieCard";
function Intro() {
  return (
    <div className="intro">
      <div className="intro-containr">
        <h2>Latest Movies</h2>
        <Button content="View All" />
      </div>
      <div>
        <MovieCard />
      </div>
    </div>
  );
}

export default Intro;
