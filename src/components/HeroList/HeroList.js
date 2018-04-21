import React from "react";
import "./HeroList.css";


// const HeroList = props => (
// 	<div onClick={() => props.setClicked(props.id)} className="card">
// 		<div className="img-container">
//       		<img alt={props.name} src={props.image} />
//     	</div>
//   </div>
// );



const HeroList = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.getHero(props.id)} className="remove"/>
    </div>
    </div>

    
    
);



export default HeroList;


