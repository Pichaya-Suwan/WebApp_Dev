import React from "react";

import "./productCard-style.css";

import { Link } from "react-router-dom";

class ProductCard extends React.Component {
  constructor() {
    super();
  }

  toTHB = (price) => {
    return price.toLocaleString("th-TH", {
      //   style: "currency",
      //   currency: "THB",
    }); /* $2,500.00 */
  };

  render() {
    return (
      <Link to={"/product/"+this.props.data.id} style={{ textDecoration: "none" }}>
        <div className="productCard-container">
          <img className="productCard-img" src={this.props.data.image} />
          <a className="productCard-name">{this.props.data.name}</a>
          <a className="productCard-price">
            {this.toTHB(this.props.data.price)} ฿
          </a>
        </div>
      </Link>
    );
  }
}

export default ProductCard;
