import React, { Component } from "react";

class Assignment1 extends Component {
	//Question 1: JS doesn't have private methods right? 
	//  So I assume best practice is to denote private methods with an underscore.
	//Question 2: How do hoisting work in classes? 
	//  I think I would need to declare and define this method before it is called.
	//  I would receive an error if this method is declared before being invoked on line 26.

	//input: int a, int b
	//returns the product of num1 and num2
	_multiply = (a,b) => a*b;


	//Question 3: How do I grab the price of price and quantity dynamically within each object's netPrice?
	//  I had to hardcode the netPrice for each object.
	state = {
		pageTitle: "Assignment 1",
		productsCount: 3,
		products: [
		{
			id: 1,
			productName: "abc",
			price: 10,
			quantity: 1,
			netPrice: this._multiply(10,1), //how do i do this._multiply(price,quantity) efficiently?
		},
		{
			id: 2,
			productName: "abc",
			price: 20,
			quantity: 2,
			netPrice: this._multiply(20,2),
		},
		{
			id: 3,
			productName: "abc",
			price: 30,
			quantity: 3,
			netPrice: this._multiply(30,3),
		},
	]}


	//input: int price, string key, int id
	//side effect: updates the product key's value, and then re-renders
	onValueChange = (price, key, id) => {
		let products = this.state.products;

		let product = this.state.products.find(product => product.id === id);
		product[key] = price;
		product.netPrice = this._multiply(product.price, product.quantity);

		this.setState([...products])
	}

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
									<input 	type="text" 
											defaultValue={product.price} 
											onChange={
												e => { this.onValueChange(e.target.value, 'price', product.id) }
											}
									/>
								</td>
								<td>
									<input 	type="text" 
											defaultValue={product.quantity} 
											onChange={
												e => { this.onValueChange(e.target.value, 'quantity', product.id) }
											}
									/>
								</td>
								<td>{product.netPrice}</td>
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