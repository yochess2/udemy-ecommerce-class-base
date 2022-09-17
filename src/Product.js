import React, { Component } from 'react'

export default class Product extends React.Component {
	state = { 
		product: this.props.product
	};

	render() {
		return (
			<div className="col-lg-6">
				<div className="card m-2">
					

					<div className="card-body">
						<div className="text-muted"># {this.state.product.id}</div>

						<h5 className="pt-2 border-top">
							{this.state.product.productName}
						</h5>

						<div>${this.state.product.price}</div>
					</div>
					{/* card body ends here */}


					<div className="card-footer">

						{/*replaces float-left in bootstrap5*/}
						<div className="float-start">
							{/*style added in because background of text is white by default*/}
							<span className="badge" style={{color:'black'}}>{this.state.product.quantity}</span>
							<div className="btn-group">
								<button 
									className="btn btn-outline-success" 
									onClick={() => {
										this.props.onIncrement(this.state.product, 10)
									}}>
										+
								</button>
								<button 
									className="btn btn-outline-success" 
									onClick={() => {
										this.props.onDecrement(this.state.product, 0)
									}}>
										-
								</button>
							</div>
						</div>
						{/* float-left ends here */}

						<div className ="float-end">
							{this.props.children}
						</div>
					
					</div>
					{/* card footer ends here */}
				</div>
			</div>
		);
	}
}