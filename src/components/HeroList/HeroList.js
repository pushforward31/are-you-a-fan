import React from "react";
import "./HeroList.css";

const HeroList = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.removeFriend(props.id)} className="remove"/>
    </div>
    </div>

    
    
);

export default HeroList;
