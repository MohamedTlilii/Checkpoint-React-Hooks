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
        <span className="you" style={{ color: "white" }}>
          You
        </span>
        <span style={{ color: "red" }}>video.</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <div className="icons">
        <FaFacebookF  color="#777" />
        <FaTwitter color="#777" />
        <FaLinkedinIn color="#777" />
        <FaTelegram color="#777" />
        </div>
        
      </div>
      <div>
        <h4>Movies</h4>
        <p>Drama</p>
        <p>Action</p>
        <p>Animation</p>
        <p>Comedy</p>
        <p>Crime</p>
        <p>Fantacy</p>
        <p>Horror</p>
        <p>Romance</p>
      </div>
    </div>
  );
}

export default FooterSection;
