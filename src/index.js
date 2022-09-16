import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client"; 
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./App";

// ReactDOM.render(<NavBar/>, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NavBar/>
	</React.StrictMode>
)