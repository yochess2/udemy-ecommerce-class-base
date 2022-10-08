import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class CustomersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageTitle: "Customers",
      customersCount: 5,
      customers: [],
    };
  }

  async componentDidMount() {
    document.title = "Customers - eCommerce"
    let response = await fetch("http://localhost:8000/customers", {method:"GET"})

    if (response.ok) {
      let body = await response.json()
      console.log('>>', body)
      console.log(this.state)
      this.setState({customers: body, customersCount: body.length})

    } else {
      console.log("error" + response.status)
    }


  }

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}

          <span className="badge text-bg-light badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <Link to="/new-customer" className="btn btn-primary">New Customer</Link>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }


  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
          <td>
            <Link className="btn btn-info" to={`/edit-customer/${cust.id}`}>Edit</Link>
            <button className="btn btn-danger" onClick={(e) => { this.onDeleteClick(cust.id) }}>Delete</button>
          </td>
        </tr>
      );
    });
  };

  onDeleteClick = async (id) => {
    if (window.confirm("Are you sure you wanna delete this customer?")) {
      let response = await fetch(`http://localhost:8000/customers/${id}`, {method: "DELETE"})

      if (response.ok) {
        let allCustomers = [...this.state.customers]
        allCustomers = allCustomers.filter(cust => cust.id !== id)
        this.setState({customers: allCustomers, customersCount: allCustomers.length})
      }
    }
  }

  //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);

    //get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";

    //update "customers" array in the state
    this.setState({ customers: custArr });
  };
}
