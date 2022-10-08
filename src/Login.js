import React from 'react'
import history from "./history"


export class Login extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			email: "scott@test.com",
			password: "scott123",
			message: "",
		}
	}

	componentDidMount() {
		document.title = "Login - eCommerce"
		console.log(this.state,this.props)
	}

	componentDidUpdate() {
		console.log('Login', this.state)
	}

	render() {
		return (
			<div className="row">
			<div className="col-lg-6 mx-auto">
				<h4 className="my-1 py-2 border-bottom">Login</h4>

				{/* Email Starts */}
				<div className="form-group form-row">
					<label className="col-lg-4">Email</label>
					<input 
						type="text" 
						className="form-control" 
						name="email"
						value={this.state.email}
						onChange={(e) => {this.setState({
							[e.target.name]: e.target.value
						})}}

					/>
				</div>
				{/* Email Ends */}

				{/* Password Starts */}
				<div className="form-group form-row">
					<label className="col-lg-4">Password</label>
					<input 
						type="password" 
						className="form-control"
						name="password" 
						value={this.state.password}
						onChange={(e) => {this.setState({
							[e.target.name]: e.target.value
						})}}
					/>
				</div>
				{/* Password Ends */}

				{/* Button */}
				<div className="text-right">
					<button className="btn btn-primary" onClick={this.onLoginClick}>
						Login
					</button>
				</div>
				{this.state.message}
			</div>
			</div>
		)
	}

	onLoginClick = async () => {
		console.log(this.state)
		
		let response = await fetch(
			`http://localhost:8000/users?email=${
				this.state.email
			}&password=${
				this.state.password
			}`, {
				Method:"GET"
			}
		)
		let body = await response.json()
		if (body.length > 0) {
			//success
			this.setState({
				message: (<span className="text-success">"Successfully logged in"</span>)
			})
			this.props.updateIsLoggedInStatus(true)
			history.replace("/dashboard")
		} else {
			//error
			this.setState({
				message: (<span className="text-danger">"Invalid Login"</span>)
			})

		}
	}
}

export default Login