import React from "react";
import ProductCard from "../product-card/productCard";
import data from "./new-product.json";
import "./newProduct.css";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  renderProduct = () => {
    let product = [];
    // console.log(data.product)
    this.props.list.map((item) => {
      console.log(item);
      product.push(<ProductCard data={item} />);
    });
    // console.log(product)
    return product;
  };

  render() {
    return (
      <div className="newProduct">
        <div id="newProduct-container">
          <div className="head-container">
            <h3 id="new-product">{this.props.title}</h3>
            {this.props.extend && (
              <button className="view-all-button">View All</button>
            )}
          </div>
          <div className="row-container">
            <this.renderProduct />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
