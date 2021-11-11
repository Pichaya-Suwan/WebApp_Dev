import React from "react";

import TextField from "@mui/material/TextField";

import "./shipping-style.css";

class ShippingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      tel: "",
      email: "",
      address: "",
      subDistrict: "",
      district: "",
      province: "",
      zipCode: "",
    };
  }

  render() {
    return (
      <div className="ship-container">
        <div className="ship-row">
          <TextField
            required
            sx={{ width: "32%" }}
            id="outlined-name"
            label="FirstName"
            value={this.state.firstname}
            onChange={(e) => this.setState({ firstname: e.target.value })}
          />
          <TextField
            required
            sx={{ width: "32%" }}
            id="outlined-name"
            label="Lastname"
            value={this.state.lastname}
            onChange={(e) => this.setState({ lastname: e.target.value })}
          />
          <TextField
            required
            sx={{ width: "32%" }}
            id="outlined-name"
            label="Tel"
            value={this.state.tel}
            type="tel"
            onChange={(e) => this.setState({ tel: e.target.value })}
          />
        </div>
        <div className="ship-row">
          <TextField
            required
            sx={{ width: "32%" }}
            id="outlined-name"
            label="Email"
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <TextField
            required
            sx={{ width: "66%" }}
            id="outlined-name"
            label="Address"
            value={this.state.address}
            onChange={(e) => this.setState({ address: e.target.value })}
          />
        </div>
        <div className="ship-row">
          <TextField
            required
            sx={{ width: "23%" }}
            id="outlined-name"
            label="District"
            value={this.state.district}
            onChange={(e) => this.setState({ district: e.target.value })}
          />
          <TextField
            required
            sx={{ width: "23%" }}
            id="outlined-name"
            label="Sub-District"
            value={this.state.subDistrict}
            onChange={(e) => this.setState({ subDistrict: e.target.value })}
          />
          <TextField
            required
            sx={{ width: "23%" }}
            id="outlined-name"
            label="Province"
            value={this.state.province}
            onChange={(e) => this.setState({ province: e.target.value })}
          />
          <TextField
            required
            sx={{ width: "23%" }}
            id="outlined-name"
            label="Zip Code"
            value={this.state.zipCode}
            onChange={(e) => this.setState({ zipCode: e.target.value })}
          />
        </div>
        <button
          className="ship-next-but"
          onClick={() => {
            this.props.getData(this.state);
            this.props.next();
          }}
        >
          NEXT
        </button>
      </div>
    );
  }
}

export default ShippingForm;
