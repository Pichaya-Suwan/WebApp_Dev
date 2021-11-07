import React from "react";
import ProductList from "../../components/product-list/productList";

class AllProduct extends React.Component {
  constructor() {
    super();
    this.state={
        list : []
    }
  }

  fetchProduct = () => {
    fetch("http://localhost:5000/api/product")
      .then((res) => res.text())
      .then((res) => this.setData(res))
      .catch((err) => err);
  };

  setData = (res) => {
    let resList = JSON.parse(res);
    let list = []
    console.log(resList);
    resList.map((data) => {
      let item = {
        id: data.p_id,
        name: data.p_name,
        image: JSON.parse(data.p_img)[0],
        price: data.p_price,
      };
      list.push(item)
    });
    this.setState({list : list})
  };

  componentDidMount() {
    this.fetchProduct();
  }

  render() {
    return (
      <div>
        <ProductList list={this.state.list} title="Products" extend={false}/>
      </div>
    );
  }
}

export default AllProduct;
