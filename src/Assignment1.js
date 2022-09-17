import React, { Component } from "react";

class Assignment1 extends Component {
	state = {
		pageTitle: "Assignment 1",
		productsCount: 3,
		products: [
		{
			id: 1,
			productName: "abc",
			price: 10,
			quantity: 1,
		},
		{
			id: 2,
			productName: "abc",
			price: 20,
			quantity: 2,
		},
		{
			id: 3,
			productName: "abc",
			price: 30,
			quantity: 3,
		},
	]}

	render() {
		return <>
			<h4>Buy Products</h4>
			<hr/>
			<table>
				<thead>
					<tr>
						<td style={ {fontWeight: "bold"} }>#</td>
						<td style={ {fontWeight: "bold"} }>Product Name</td>
						<td style={ {fontWeight: "bold"} }>Price</td>
						<td style={ {fontWeight: "bold"} }>Quantity</td>
						<td style={ {fontWeight: "bold"} }>Net Price</td>
					</tr>
				</thead>
				<tbody>
				{
					this.state.products.map((product) => {
						return (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>
									{product.price}
								</td>
								<td>
									{product.quantity}
								</td>
								<td>{product.price * product.quantity}</td>
							</tr>
						)
					})
				}
				<tr></tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td>Total</td>
					<td>
						{
							this.state.products
								.map(product => product.price * product.quantity)
								.reduce((memo,num) => memo+num)
						}
					</td>
				</tr>
				</tbody>
			</table>
		</>
	}
}

export default Assignment1;