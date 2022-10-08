import React, { Component } from "react";
import { Route, Switch  } from "react-router"
import { Router } from "react-router-dom"

import NavBar from "./NavBar";

import Login from "./Login"
import Dashboard from "./Dashboard"
import ShoppingCart from "./ShoppingCart"
import CustomersList from "./CustomersList"
import NoMatchPage from "./NoMatchPage"
import Sidebar from "./Sidebar"
import ProductById from "./ProductById"
import NewCustomer from "./InsertCustomer"
import UpdateCustomer from "./UpdateCustomer"

import history from "./history"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      <Router history={history}>
        <NavBar 
          isLoggedIn={this.state.isLoggedIn} 
          updateIsLoggedInStatus={this.updateIsLoggedInStatus}
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              {this.state.isLoggedIn ?
              <Sidebar />          
              :
              ""
              }
            </div>
            <div className="col-lg-9">
              <Switch>
                <Route 
                  path="/" 
                  exact 
                  render={(props) => (
                    <Login 
                      {...props}
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  )} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/customers" exact component={CustomersList} />
                <Route path="/cart" exact component={ShoppingCart} />
                <Route path="/product/:id" component={ProductById} />
                <Route path="/new-customer" exact component={NewCustomer} />
                <Route 
                  exact 
                  path="/edit-customer/:id" 
                  component={UpdateCustomer} />
                <Route path="*" component={NoMatchPage} />
              </Switch>
              
            </div>
          </div>




        </div>
      </Router>
    );
  }

  updateIsLoggedInStatus = (status) => {
    this.setState({isLoggedIn: status})
  }
}
