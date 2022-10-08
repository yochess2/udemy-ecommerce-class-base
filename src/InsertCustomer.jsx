import React from 'react'

export class NewCustomer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {name: "", city: "", phone: "", photo: ""}
	}

	render() {
		return (

			<div className="row">
				<div className="col-lg-6 mx-auto">
					<h4 className="p-2 border-bottom">New Customer</h4>

					<form>

						{/*customer name starts here */}
						<div className="form-group form-row">
							<label className="col-lg-4">Customer Name</label>
							<div className="col-lg-8">
								<input 
									type="text" 
									className="form-control"
									name="name"
									value={this.state.name}
									onChange={(event) => {
										this.setState({[event.target.name]: event.target.value})
									}} >
								</input>
							</div>
						</div>
						{/* customer name ends here */}

						{/*city name starts here */}
						<div className="form-group form-row">
							<label className="col-lg-4">City</label>
							<div className="col-lg-8">
								<input 
									type="text" 
									className="form-control"
									name="city"
									value={this.state.city}
									onChange={(event) => {
										this.setState({[event.target.name]: event.target.value})
									}} >
								</input>
							</div>
						</div>
						{/* city name ends here */}

						{/*phone name starts here */}
						<div className="form-group form-row">
							<label className="col-lg-4">PHone</label>
							<div className="col-lg-8">
								<input 
									type="text" 
									className="form-control"
									name="phone"
									value={this.state.phone}
									onChange={(event) => {
										this.setState({[event.target.name]: event.target.value})
									}} >
								</input>
							</div>
						</div>
						{/* phone name ends here */}

						{/*phone name starts here */}
						<div className="form-group form-row">
							<label className="col-lg-4">Photo</label>
							<div className="col-lg-8">
								<input 
									type="text" 
									className="form-control"
									name="photo"
									value={this.state.photo}
									onChange={(event) => {
										this.setState({[event.target.name]: event.target.value})
									}} >
								</input>
							</div>
						</div>
						{/* phone name ends here */}

						<div className="border-top p-2">
							<button 
								className="btn btn-success"
								onClick={this.onSaveClick}
								>Save
							</button>
						</div>
					</form>

				</div>
			</div>				
		)
	}

	onSaveClick = async (event) => {
		event.preventDefault()

		let customer = {
			name: this.state.name, 
			address: {
				city: this.state.city
			}, 
			phone: this.state.phone, 
			photo: this.state.photo
		}
		let response = await fetch("http://localhost:8000/customers", {
			method:"POST", 
			body: JSON.stringify(customer),
			headers: {
				"Content-type":"application/json"
			}
		})

		let body = await response.json()
		console.log(body)

		if (body) {
			this.props.history.replace("/customers")
		}

	}
}

export default NewCustomer