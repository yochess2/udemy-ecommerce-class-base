import React from 'react'

export class Dashboard extends React.Component {
	componentDidMount() {
		document.title = "Dashboard - eCommerce"
	}
	render() {
		return (
			<div>
				<h2>Dashboard</h2>
			</div>
		)
	}
}

export default Dashboard