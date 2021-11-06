import React from "react";

import colors from "../../colors.json";
import "./sab-style.css";

class SelectableButton extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelect: false,
    };
    this.button = React.createRef();
  }

  handleClick = () => {
    if (!this.state.isSelect) {
      this.button.current.style.backgroundColor = colors.primary;
      this.button.current.style.color = "white";
      this.setState({ isSelect: true });
    } else {
      this.button.current.style.backgroundColor = "transparent";
      this.button.current.style.color = colors.primary;
      this.setState({ isSelect: false });
    }
  };

  render() {
    return (
      <div>
        <button
          ref={this.button}
          className="sab-button"
          style={{
            backgroundColor: "transparent",
            borderColor: colors.primary,
            borderStyle: "solid",
          }}
          onClick={this.handleClick}
        >
          <label>{this.props.name}</label>
        </button>
      </div>
    );
  }
}

export default SelectableButton;
