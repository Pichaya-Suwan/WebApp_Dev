import React from "react";
import data from "./new-product.json";
import "./newProduct.css";

class NewProduct extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  renderProduct = () => {
    let product = [];
    // console.log(data.product)
    data.product.map((item) => {
      console.log(item);
      product.push(
        <div className="product-container">
          <img className="product-img" src={item.img} />
          <a className="product-name">{item.name}</a>
          <a className="product-price">{item.price}</a>
          <button onClick={()=>{this.props.handleClick(item)}} style={{border:0, backgroundColor:"#1d3557", color:"white", fontSize:14, height:36, marginTop:10}}>ADD TO CART</button>
        </div>
      );
    });
    // console.log(product)
    return product;
  };

  render() {
    return (
      <div className="newProduct">
        <div id="newProduct-container">
          <div className="head-container">
            <h3 id="new-product">New Products</h3>
            <button className="view-all-button">View All</button>
          </div>
          <div className="row-container">
            <this.renderProduct />
          </div>
        </div>
      </div>
    );
  }
}

export default NewProduct;
