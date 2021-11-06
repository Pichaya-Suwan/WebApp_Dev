import React from "react";

import colors from "../../colors.json";
import "./sab-style.css";

import SelectableButton from "./SelectAbleButton";

class SABGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelect: false,
      selectID: -1,
    };
  }

  handleClick = (e, i) => {
    this.setState({ selectID: i });
    this.props.onSelect(e);
  };

  render() {
    // console.log(this.props.buttons);
    return (
      <>
        {this.props.buttons.map((button, i) => (
          <button
            key={i}
            name={button}
            onClick={(e) => this.handleClick(e, i)}
            className="sab-button"
            id={i === this.state.selectID ? "sabActive" : "sabInActive"}
          >
            {button}
          </button>
        ))}
      </>
    );
  }
}

export default SABGroup;
