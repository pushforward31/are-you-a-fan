import React from "react";
import "./Titlebox.css";

const Titlebox = props => (
<div className = "jumbotron">
	<h1 className="title">{props.children}</h1>;


</div>	
export default Titlebox;
