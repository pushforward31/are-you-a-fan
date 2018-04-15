import React from "react";
import "./Titlebox.css";
import Counter from "../Counter"

const Titlebox = props => (
<div className = "jumbotron">
	<h1 className="title">{props.children}</h1>
	<Counter/>


</div>	
);
export default Titlebox;
