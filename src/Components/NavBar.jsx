// import React, { useState } from "react";
import "./Style.css";
import ReactStars from "react-stars";

function NavBar({ setSearch}) {
 
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <span style={{ color: "white" }}>You</span>
        <span style={{ color: "red" }}>video.</span>
      </div>
      <ReactStars
        count={5}
        
        size={24}
        color2={"#ffd700"}
        className="stars"
      />
      <input
        type="text"
        id="searchInput"
        placeholder="Search.."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
      <ul>
        <li>Demos</li>
        <li>Movies</li>
        <li>Shows</li>
        <li>Premium</li>
        <li>Pages</li>
        <li>Admin</li>
        <li>Contact Us</li>
        <li>
          {" "}
          <button>Login</button>{" "}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;