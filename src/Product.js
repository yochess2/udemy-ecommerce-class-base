import React, { Component } from 'react'

export default class Product extends React.Component {
	state = { 
		id: this.props.id, 
		productName: this.props.productName,
		price: this.props.price,  
	};

	render() {
		console.log(this.props);

		return (
			<div className="col-lg-6">
			<div className="card m-2">
				<div className="card-body">
					<div className="text-muted"># {this.state.id}</div>

					<h5 className="pt-2 border-top">{this.state.productName}</h5>

					<div>${this.state.price}</div>
				</div>
			</div>
			</div>
		);
	}
}