import React from "react";

import colors from "../../colors.json";

class QuantityPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 180,
      quantity: 1,
    };
  }

  handleIncrease = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  handleDecrease = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          width: this.state.width,
          height: "45px",
          //   borderColor: colors.primary,
          //   borderWidth: 2,
          //   borderStyle: "solid",
          fontSize: 28,
        }}
      >
        <button
          style={{
            display: "flex",
            height: "100%",
            width: "30%",
            // backgroundColor: "green",
            backgroundColor: "transparent",
            margin: 0,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: colors.primary,
            borderStyle: "solid",
            fontSize:26
            // boxSizing:"content-box"
          }}
          onClick={()=>this.handleDecrease()}
        >
          -
        </button>
        <div
          style={{
            display: "flex",
            // height: "45px",
            width: "40%",
            // backgroundColor: "red",
            
            margin: 0,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: colors.primary,
            borderStyle: "solid",
            borderRight: 0,
            borderLeft: 0,
            fontSize: 18,
          }}
        >
          {this.state.quantity}
        </div>
        <button
          style={{
            display: "flex",
            height: "100%",
            width: "30%",
            backgroundColor: "transparent",
            margin: 0,
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            borderWidth: 2,
            borderColor: colors.primary,
            borderStyle: "solid",
          }}
          onClick={() => {
            this.handleIncrease();
          }}
          
        >
          +
        </button>
      </div>
    );
  }
}

export default QuantityPicker;
