import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

import Assignment1 from "./Assignment1"

class App extends Component {
	render() {
		return <>
			<NavBar />
			<Assignment1 />
		</>
	}
}

export default App;