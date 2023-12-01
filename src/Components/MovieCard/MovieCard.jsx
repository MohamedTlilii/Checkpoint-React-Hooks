import React from "react";
import "./Style.css";
import ReactStars from "react-stars";

const MovieCard = ({ image, tittle, descrption, link }) => {
  return (
    <div className="card-containr">
      <div>
        <img src={image} alt="" />
      </div>
      <h6>{tittle}</h6>
      <ReactStars />
      <p>{descrption}</p>
      <link rel="stylesheet" href="" />
    </div>
  );
};

export default MovieCard;
