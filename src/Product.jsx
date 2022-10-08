import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: this.props.product,
    };
   }

    componentDidMount() {
      document.title = "Product - eCommerce"
    }

   componentDidCatch(error, info) {
    console.log('compodidntWillCatch - product')
    console.log(error, info)
    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
   }

  render(props) {
    console.log(this.props)
    // console.log('product component', this.props, this.state);

    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              # {this.state.product.id}
              {/* delete button starts */}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
              {/* delete button ends */}
            </div>

            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>

            <div>$ {this.state.product.price}</div>
          </div>
          {/* card body ends here */}

          <div className="card-footer">
            
            <div className="float-start">
              <span className="badge text-bg-light">{this.state.product.quantity}</span>

              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>

                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            {/* float-left ends here */}

            <div className="float-end">
              <Link to={`product/${this.state.product.id}`}>Details</Link>
              {this.props.children}
            </div>
          {/* card-footer ends here */}
          </div>
        </div>
      </div>
    );
  }
}
