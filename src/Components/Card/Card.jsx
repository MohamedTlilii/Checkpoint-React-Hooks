import React from "react";
import "./Style.css";
import ReactStars from "react-stars";

const Card = ({ image, tittle, descrption,  }) => {
  return (
    <div className="card-containr">
      <div>
        <img src={image} alt={tittle} />
      </div>
      <h6>{tittle}eaze</h6>
      <ReactStars />
      <p>{descrption}</p>
      {/* <link rel="stylesheet" href="" /> */}
    </div>
  );
};

export default Card;
