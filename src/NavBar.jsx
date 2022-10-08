import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import history from "./history"

class NavBar extends Component {
  render() {
  console.log('hi')
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <NavLink to="/" className="nav-link" activeclassname="active">
            eCommerce
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div 
            className="collapse navbar-collapse " 
            id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {!this.props.isLoggedIn ? 
              <li className="nav-item">
                <NavLink exact
                  className="nav-link" 
                  to="/"
                  activeclassname="active"
                >
                  Login
                </NavLink>
              </li>
              :
              ""
              }
              {this.props.isLoggedIn ? 
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard" activeclassname="active">
                  Dashboard
                </NavLink>
              </li>
              :
              ""
              }
              {this.props.isLoggedIn ?
              <li className="nav-item">
                <NavLink className="nav-link" to="/customers" activeclassname="active">
                  Customers
                </NavLink>
              </li>
              :
              ""
              }
              {this.props.isLoggedIn ?
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart" activeclassname="active">
                  Shopping Cart
                </NavLink>
              </li>
              :
              ""
              }
              {this.props.isLoggedIn ?
              <li className="nav-item">
                <a 
                  href="/#" 
                  className="nav-link" 
                  activeclassname="active"
                  onClick={this.onLogoutClick}
                >
                  Logout
                </a>
              </li>
              :
              ""
              }
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }

  onLogoutClick = (event) => {
    event.preventDefault()
    this.props.updateIsLoggedInStatus(false)
    history.replace("/")
  }
}

export default NavBar;
