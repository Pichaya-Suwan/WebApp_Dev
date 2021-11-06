import React from "react";

import "./productCard-style.css";

import { Link } from "react-router-dom";

class ProductCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Link to="/product" style={{ textDecoration: "none" }}>
        <div className="productCard-container">
          <img className="productCard-img" src={this.props.data.img} />
          <a className="productCard-name">{this.props.data.name}</a>
          <a className="productCard-price">{this.props.data.price}</a>
        </div>
      </Link>
    );
  }
}

export default ProductCard;
