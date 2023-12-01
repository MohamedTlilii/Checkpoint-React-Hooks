import "./Style.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import React from "react";

function FooterSection() {
  return (
    <div className="footerSection">
      <div className="footer-containr">
        <span className="you" style={{ color: "black" }}>
          You
        </span>
        <span style={{ color: "red" }}>video.</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <div className="icons">
          <FaFacebookF className="icon" color="#8f8f8f" fontSize="18px" />
          <FaTwitter className="icon" color="#8f8f8f" fontSize="18px" />
          <FaLinkedinIn className="icon" color="#8f8f8f" fontSize="18px" />
          <FaTelegram className="icon" color="#8f8f8f"  fontSize="18px"/>
        </div>
      </div>
      <div className="footermovie">
        <h4>Movies</h4>
       <div className="genrlist">
       <p className="genre">Drama</p>
        <p className="genre">Action</p>
        <p className="genre">Animation</p>
        <p className="genre">Comedy</p> <br />
        <p className="genre">Crime</p>
        <p className="genre">Fantacy</p>
        <p className="genre">Horror</p>
        <p className="genre">Romance</p>
       </div>
      </div>
      
    </div>
  );
}

export default FooterSection;
