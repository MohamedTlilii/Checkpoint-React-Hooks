import React from 'react' 
import "./Style.css";
import ReactStars from "react-stars";


function Card(props) {
  return (
    <div className='card-containr'>
        <div>
            <img src={props.img} alt="" />
        </div>
       <h6>{props.tittle}eaeaz</h6>
        <ReactStars/>
        <p>eazeza{props.descrption}</p>
        <link rel="stylesheet" href="" />
        
          
    </div>
  )
}

export default Card