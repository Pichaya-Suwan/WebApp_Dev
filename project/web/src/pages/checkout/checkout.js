import React from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { alpha, styled, makeStyles, withStyles } from "@mui/material/styles";

import { connect } from "react-redux";

import Swal from "sweetalert2";

import colors from "../../colors.json";

import "./checkout-style.css";
import ShippingForm from "../../components/shipping-form/shipping-form";
import OrderConfirmation from "../orderConfirmation/orderConfirmation";
import { color } from "@mui/system";

class CheckOut extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      data: {},
    };
    this.step = ["Shipping Info", "Order Confirmation", "Order Success"];
  }

  handleNext = () => {
    this.setState({ active: this.state.active + 1 });
    if (this.state.active + 1 == 2) {
      Swal.fire("Order Complete", "", "success");
      this.postData();
    }
  };

  getData = (data) => {
    this.setState({ data: data });
  };

  postData = () => {
    let data = {
      cart: this.props.cartData,
      ship: this.state.data,
    };
    // console.log(data);
    // console.log(JSON.stringify(data))
    const recipeUrl = "http://localhost:5000/api/order";
    let reqMetaData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    console.log(reqMetaData.body)
    fetch(recipeUrl, reqMetaData)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div className="checkout">
        <div className="checkout-body">
          <Stepper
            activeStep={this.state.active}
            alternativeLabel
            style={{ marginTop: 30 }}
            sx={{ width: "100%" }}
          >
            {this.step.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {this.state.active == 0 && (
            <ShippingForm next={this.handleNext} getData={this.getData} />
          )}
          {this.state.active == 1 && (
            <OrderConfirmation next={this.handleNext} data={this.state.data} />
          )}
          {this.state.active == 2 && (
            <h1 style={{ marginTop: 100, color: colors.primary }}>
              ORDER SUCCESS !!
            </h1>
          )}
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

export default connect(mapStateToProps)(CheckOut);
