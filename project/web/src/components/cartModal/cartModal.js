import React from "react";

import "./cartModal-style.css";
import colors from "../../colors.json";

import { AiOutlineShoppingCart, AiOutlineCloseSquare } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

import { connect } from "react-redux";
import { addToCart, updateCart, removeCart } from "../../redux/actions/cart";

import { Link } from "react-router-dom";
import { withRouter } from "../../withRouter";

class CartModal extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [
        {
          cid: Date.now().toString(),
          itemID: 1,
          name: "Google Pixel 5a",
          image:
            "https://news.pdamobiz.com/wp-content/uploads/google-pixel-5a-5g-01-2021-08-19_14-17-51_102962.jpg",
          color: "Mostly Black",
          storage: "128 GB",
          price: 15900,
          qty: 2,
        },
        {
          cid: Date.now().toString(),
          itemID: 1,
          name: "Google Pixel 5a",
          image:
            "https://news.pdamobiz.com/wp-content/uploads/google-pixel-5a-5g-01-2021-08-19_14-17-51_102962.jpg",
          color: "Mostly Black",
          storage: "128 GB",
          price: 15900,
          qty: 2,
        },
      ],
      list: [],
      total: 0,
    };
  }

  toTHB = (price) => {
    return price.toLocaleString("th-TH", {
      //   style: "currency",
      //   currency: "THB",
    }); /* $2,500.00 */
  };

  //   getProduct = (pid) => {
  //     fetch("http://localhost:5000/api/product/" + pid)
  //       .then((res) => res.text())
  //       .then((res) =>
  //         this.setState({ list: this.state.list.concat[this.convertData(res)] })
  //       )
  //       .catch((err) => err);
  //   };

  //   convertData = (res) => {
  //     let data = JSON.parse(res);
  //     data = data[0];
  //     return {
  //       name: data.p_name,
  //       image: JSON.parse(data.p_img)[0],
  //       price: data.p_price,
  //     };
  //   };

  handleRemoveItem = (id, price, qty) => {
    console.log(id);
    this.props.removeCart(id);
    this.setState({ total: this.state.total - price * qty });
    console.log(this.props.cartData);
  };

  componentDidMount() {
    console.log(this.props.cartData);
    let total = 0;
    if (this.props.cartData) {
      this.props.cartData.map((item) => {
        total += item.price * item.qty;
      });
      this.setState({ total: total });
    }
  }

  renderList = () => {
    if (this.props.cartData) {
      return this.props.cartData.map((item) => (
        <div className="cm-list">
          <img className="cm-list-img" src={item.image} />
          <div className="cm-list-detail">
            <label className="cm-product-name">{item.name}</label>
            <label className="cm-product-option">
              {item.color}&nbsp;&nbsp;&nbsp;
              {item.storage}
            </label>
          </div>
          <div className="cm-list-qty">
            <label className="cm-product-name">{item.qty}</label>
          </div>
          <div className="cm-list-price">
            <label className="cm-product-price">
              {this.toTHB(item.price * item.qty)} ฿
            </label>
          </div>
          <button
            className="cm-remove-b"
            onClick={() => this.handleRemoveItem(item.id, item.price, item.qty)}
          >
            <BiTrash color="white" size={28} />
          </button>
        </div>
      ));
    } else return <div></div>;
  };

  render() {
    return (
      <div className="cm-container">
        <div className="cm-title">
          <AiOutlineShoppingCart color={colors.primary} size={32} />
          <label className="cm-title-label">SHOPPING CART</label>
          <button
            style={{
              marginLeft: "auto",
              border: 0,
              backgroundColor: "transparent",
            }}
            onClick={() => this.props.closeModal()}
          >
            <AiOutlineCloseSquare color={colors.primary} size={32} />
          </button>
        </div>
        <div className="cm-lists-container">
          <this.renderList />
        </div>
        <div
          style={{
            borderWidth: 2,
            borderTopColor: colors.primary,
            borderTopStyle: "solid",
            marginTop: 16,
          }}
        />
        <label className="cm-total-label">
          Total&nbsp;&nbsp;{this.toTHB(this.state.total)} ฿
        </label>
        <div className="cm-button-con">
          <button
            id="cm-back-shop"
            className="cm-button"
            onClick={() => this.props.closeModal()}
          >
            Back to Shop
          </button>
          <button
            className="cm-button"
            onClick={() => {
              this.props.navigate("/checkout");
              this.props.closeModal();
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cartReducer.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (data) => dispatch(updateCart(data)),
    addToCart: (data) => dispatch(addToCart(data)),
    removeCart: (id) => dispatch(removeCart(id)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartModal)
);
