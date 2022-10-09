import React from 'react'

export class Register extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			password: "",
			fullName: "",
			dateOfBirth: "",
			gender: "",
			country: "",
			receiveNewsLetters: false,
			controls: ["email", "password", "fullName", "dateOfBirth", "gender", "country", "receiveNewsLetters"],
			errors: {
				email: [],
				password: [],
				fullName: [],
				dateOfBirth: [],
				gender: [],
				country: [],
				receiveNewsLetters: [],
			},
			message: "",
			dirty: {
				email: false,
				password: false,
				fullName: false,
				dateOfBirth: false,
				gender: false,
				country: false,
				receiveNewsLetters: false
			}
		}
	}
	render() {
		// console.log(this.state)
		return (
			<div className="row" style={{border:'solid'}}>
				<div className="col-lg-6 mx-auto">
					<h1>Register</h1>

					
					<label htmlFor="email">Email</label>
					<div className="input-group">
						<span className="input-group-text" id="register-email">@</span>
						<input 
							type="text" 
							autoFocus="autofocus"
							id="email" 
							name="email"
							className="form-control" 
							value={this.state.email}
							onChange={(e) => {
								let dirty = this.state.dirty
								dirty.email = true
								this.setState({ 
									[e.target.name]: e.target.value,
									dirty: dirty,
								}, this.validate)
							}}
							onBlur={event => {
								let dirty = this.state.dirty
								dirty.email = true
								this.setState({dirty}, this.validate)
							}}
							>
						</input>
					</div>
					<div className="text-danger mb-3">
						{this.state.errors.email[0] && this.state.dirty.email ? 
							this.state.errors["email"] : ""
						}
					</div>

					<label htmlFor="password">Password</label>
					<div className="input-group">
						<input 
							type="text" 
							id="password" 
							name="password"
							className="form-control" 
							value={this.state.password}
							onChange={(e) => {
								let dirty = this.state.dirty
								dirty.password = true
								this.setState({ 
									[e.target.name]: e.target.value,
									dirty: dirty,
								}, this.validate)
							}}
							onBlur={event => {
								let dirty = this.state.dirty
								dirty.password = true
								this.setState({dirty}, this.validate)
							}}

						>
						</input>
					</div>
					<div className="text-danger mb-3">
						{this.state.errors.password[0] && this.state.dirty.password ? 
							this.state.errors["password"] : ""
						}
					</div>

					<label htmlFor="fullName">Full Name</label>
					<div className="input-group">
						<input 
							type="text" 
							id="fullName" 
							name="fullName"
							className="form-control" 
							value={this.state.fullName}
							onChange={(e) => {
								let dirty = this.state.dirty
								dirty.fullName = true
								this.setState({ 
									[e.target.name]: e.target.value,
									dirty: dirty,
								}, this.validate) 
							}}
							onBlur={event => {
								let dirty = this.state.dirty
								dirty.fullName = true
								this.setState({dirty}, this.validate)
							}}
						>
						</input>
					</div>
					<div className="text-danger mb-3">
						{this.state.errors.fullName[0] && this.state.dirty.fullName ? 
							this.state.errors["fullName"] : ""
						}
					</div>

					<label htmlFor="dateOfBirth">Date of Birth</label>
					<div className="input-group">
						<input 
							type="date" 
							id="dateOfBirth" 
							name="dateOfBirth"
							className="form-control" 
							value={this.state.dateOfBirth}
							onChange={(e) => {
								let dirty = this.state.dirty
								dirty.dateOfBirth = true
								this.setState({ 
									[e.target.name]: e.target.value,
									dirty: dirty,
								},this.validate) 
							}}
							onBlur={event => {
								let dirty = this.state.dirty
								dirty.dateOfBirth = true
								this.setState({dirty}, this.validate)
							}}
						>
						</input>
					</div>
					<div className="text-danger mb-3">
						{this.state.errors.dateOfBirth[0] && this.state.dirty.dateOfBirth ? 
							this.state.errors["dateOfBirth"] : ""
						}
					</div>

					<label>Gender</label>
					<div className="form-check">
						<input 
							id="gender-male"
							className="form-check-input" 
							type="radio" 
							name="gender"
							value="male"
							checked={this.state.gender === "male" ? true : false}
							onChange={(e) => {
								let dirty = this.state.dirty
								this.setState({gender: e.target.value, dirty: dirty}, this.validate)
							}}
							onBlur={e => {
								let dirty = this.state.dirty
								dirty.gender = true
								this.setState({dirty}, this.validate)
							}}
						/>
						<label className="form-check-label" htmlFor="gender-male">Male</label>
					</div>

					<div className="form-check">
						<input 
							id="gender-female"
							className="form-check-input" 
							type="radio" 
							name="gender"
							value="female"
							checked={this.state.gender === "female" ? true : false}
							onChange={(e) => {
								let dirty = this.state.dirty
								this.setState({gender: e.target.value, dirty:dirty}, this.validate)
							}}
							onBlur={e => {
								let dirty = this.state.dirty
								dirty.gender = true
								this.setState({dirty}, this.validate)
							}}
						/>
						<label className="form-check-label" htmlFor="gender-female">Female</label>
					</div>
					<div className="text-danger mb-3">
						{this.state.errors.gender[0] && this.state.dirty.gender ? 
							this.state.errors["gender"] : ""
						}
					</div>


					<label htmlFor="country">Country</label>
					<div className="input-group">
						<select 
							id="country"
							className="form-control"
							value={this.state.country}
							onChange={e => {
								let dirty = this.state.dirty
								dirty.country = true
								this.setState({country:e.target.value, dirty:dirty}, this.validate)								
							}}
							onBlur={e => {
								let dirty = this.state.dirty
								this.setState({dirty})
							}}
						>
							<option value="">Please Select</option>
							<option value="India">India</option>
							<option value="USA">USA</option>
							<option value="UK">UK</option>
							<option value="Japan">Japan</option>
							<option value="France">France</option>
							<option value="Brazil">Brazil</option>
							<option value="Mexico">Mexico</option>
							<option value="Canada">Canada</option>
						</select>
					</div> 
					<div className="text-danger mb-3">
						{this.state.errors.country[0] && this.state.dirty.country ? 
							this.state.errors["country"] : ""
						}
					</div>


					<div className="form-check">
						<input 
							id="receiveNewsLetters"
							className="form-check-input" 
							type="checkbox" 
							value=""
							checked={this.state.receiveNewsLetters}
							onChange={e => {
								let dirty = this.state.dirty
								dirty.receiveNewsLetters = true
								this.setState({receiveNewsLetters: e.target.checked}, this.validate)
							}}
							onBlur={e => {
								let dirty = this.state.dirty
								dirty.receiveNewsLetters = true
								this.setState({dirty})
							}}
						/>
						<label className="form-check-label" htmlFor="receiveNewsLetters">
							Receive Newsletters
						</label>
					</div>


					<div className="row">
						<div className="col-lg-12">
							<div className="text-end">{this.state.message}</div>
							<div className="text-end">
								<button 
									className="btn btn-success m-2" 
									onClick={this.onRegisterClick}
								>
									Register
								</button>
							</div>
							<ul className="text-danger">
								{Object.keys(this.state.errors).map((control) => {
									if (this.state.dirty[control]) {
										return this.state.errors[control].map((err) => {
											return <li key={err}>{err}</li>
										})
									} else {
										return ""
									}
								})}
							</ul>
						</div>
						{/*{JSON.stringify(this.state)}*/}
					</div>

				</div>
			</div>
		)
	}

	validate = () => {
		const validEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	    const validPasswordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;

		let errors = {}

		this.state.controls.forEach((control) => {
			errors[control] = []

			switch (control) {
				case "email":
					if (!this.state[control]) {
						errors[control].push("Email cannot be blank")
					}
					if (this.state.email) {
						if (!validEmailRegex.test(this.state[control])) {
							errors[control].push("Proper email address is expected")
						}
					}
					break;

				case "password":
					if (!this.state[control]) {
						errors[control].push("Password cannot be blank")
					}
					if (this.state.password) {
						if (!validPasswordRegex.test(this.state[control])) {
							errors[control].push("Password should be 6 to 15 characters with at least 1 uppercase letter, 1 lowercase letter, and 1 digit")
						}
					}
					break;

				case "fullName":
					if (!this.state[control]) {
						errors[control].push("Full Name cannot be blank")
					}
					break;

				case "dateOfBirth":
					if (!this.state[control]) {
						errors[control].push("Date of birth cannot be blank")
					}
					if (this.state[control]) {
						let dob = new Date (this.state[control]).getTime()
						let today = new Date().getTime()
						if (today - (18 * 365.25 * 24 * 60 * 60 * 1000) < dob) {
							errors[control].push("Minimum age is 18 years old")
						}
					}
					break;
				case "gender":
					if (!this.state[control]) {
						errors[control].push("Gender cannot be blank")
					}
					break;

				case "country":
					if (!this.state[control]) {
						errors[control].push("Country cannot be blank")
					}
					break;

				default:
					break;
			}
		})

		this.setState({ errors })
	}

	isValid = () => {
		let valid = true

		for (let control in this.state.errors) {
			if (this.state.errors[control].length > 0) {
				valid = false
			}
		}

		return valid
	}

	onRegisterClick = async () => {
		let dirty = this.state.dirty

		Object.keys(this.state.dirty).forEach(control => {
			dirty[control] = true
		})
		this.setState({dirty: dirty})
		this.validate()


		if (this.isValid()) {
			let user = {
				email: this.state.email,
				password: this.state.password,
				fullname: this.state.fullName,
				dateOfBirth: this.state.dateOfBirth,
				gender: this.state.gender,
				country: this.state.country,
				receiveNewsLetters: this.state.receiveNewsLetters,
			}

			let response = await fetch(`http://localhost:8000/users`, {
				method:"POST",
				body:JSON.stringify(user),
				headers: {
					"Content-type": "application/json"
				}
			})
			let body = await response.json()
			if (response.ok) {
				this.setState({message: "Successfully Registered"})
			} else {
				console.log('not successful', response, body)
				this.setState({
					message: <span className="text-danger">Error in Registration</span>
				})
			}

		} else {
			this.setState({message: "Invalid"})
		}
	}
}

export default Register