import React from "react";
import TextField from "@mui/material/TextField";
import "./order-conf-style.css";
import "../../components/cartModal/cartModal-style.css";

import { connect } from "react-redux";

import colors from "../../colors.json";
import { touchRippleClasses } from "@mui/material";
class OrderConfirmation extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
    };
  }

  toTHB = (price) => {
    return price.toLocaleString("th-TH", {
      //   style: "currency",
      //   currency: "THB",
    }); /* $2,500.00 */
  };

  componentDidMount() {
    let total = 0;
    if (this.props.cartData) {
      this.props.cartData.map((item) => {
        total += item.price * item.qty;
      });
      this.setState({ total: total });
    }
  }

  RenderList = () => {
    return this.props.cartData.map((item) => (
      <div className="order-list">
        <div>
          <img className="order-list-img" src={item.image} />
        </div>

        <div className="order-list-detail">
          <label className="order-product-name">{item.name}</label>
          <label className="order-product-option">
            {item.color}&nbsp;&nbsp;&nbsp;
            {item.storage}
          </label>
          <label className="order-product-option">X {item.qty}</label>

          <label className="order-product-price">
            {this.toTHB(item.price * item.qty)} ฿
          </label>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="order-c-con">
        <div className="order-c-ship">
          <label
            style={{
              alignSelf: "flex-start",
              margin: 12,
              marginLeft: 20,
              fontSize: 20,
            }}
          >
            SHIPPING INFO
          </label>
          <div className="order-ship-row">
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={this.props.data.firstname}
              label="Firstname"
              size="small"
              sx={{ width: "45%" }}
            />
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={this.props.data.lastname}
              label="Lastname"
              size="small"
              sx={{ width: "45%", marginLeft: 3 }}
            />
          </div>
          <div className="order-ship-row">
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={this.props.data.tel}
              label="Tel"
              size="small"
              sx={{ width: "45%" }}
            />
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={this.props.data.email}
              label="Email"
              size="small"
              sx={{ width: "45%", marginLeft: 3 }}
            />
          </div>
          <div className="order-ship-row">
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={this.props.data.address}
              label="Address"
              size="small"
              sx={{ width: "94%" }}
            />
          </div>
          <div className="order-ship-row">
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={this.props.data.district}
              label="District"
              size="small"
              sx={{ width: "45%" }}
            />
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={this.props.data.subDistrict}
              label="Sub-District"
              size="small"
              sx={{ width: "45%", marginLeft: 3 }}
            />
          </div>
          <div className="order-ship-row">
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={this.props.data.province}
              label="Province"
              size="small"
              sx={{ width: "45%" }}
            />
            <TextField
              InputProps={{
                readOnly: true,
              }}
              value={this.props.data.zipCode}
              label="Zip Code"
              size="small"
              sx={{ width: "45%", marginLeft: 3 }}
            />
          </div>
        </div>
        <div className="order-cart-con">
          <div className="order-cart-list-con">
            <this.RenderList />
            <div
              style={{
                borderWidth: 2,
                borderTopColor: "white",
                borderTopStyle: "solid",
                marginTop: 16,
                width: "88%",
                alignSelf: "center",
              }}
            />
            <div className="order-total-con">
              <label className="order-total-label">Total</label>
              <label
                className="order-total-label"
                style={{ marginLeft: "auto" }}
              >
                {this.state.total} ฿
              </label>
            </div>
          </div>
          <button className="order-con-button" onClick={()=>this.props.next()}>CONFIRM ORDER</button>
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

export default connect(mapStateToProps)(OrderConfirmation);
