import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";

class App extends Component {
	render() {
		return <>
			<NavBar />
			<MainContent />
		</>
	}
}

export default App;