import React from "react";
import "./header.css";
import colors from "../../colors.json";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

import { NavLink } from "react-router-dom";

import Modal from "@mui/material/Modal";
import CartModal from "../cartModal/cartModal";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <div className="header">
        <Modal open={this.state.modal}>
          <div
            className="header-modal-body"
            // onClick={() => this.setState({ modal: false })}
          >
            <CartModal closeModal={this.closeModal} />
          </div>
        </Modal>
        <div className="container">
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: colors.primary }}
          >
            <h3 className="logo">domo</h3>
          </NavLink>
          <nav>
            <NavLink
              to="/product"
              style={{ textDecoration: "none", color: colors.primary }}
            >
              <a>Product</a>
            </NavLink>
          </nav>
          <div className="search">
            <div className="search-container">
              <IoSearchOutline size={20} />
              <input type="text" placeholder="Search"></input>
            </div>
          </div>
          <div className="button-group">
            <div className="button">
              <VscAccount size={26} />
              <a style={{ marginLeft: 8 }}>Account</a>
            </div>
            <div
              className="button"
              onClick={() => this.setState({ modal: true })}
            >
              <AiOutlineShoppingCart size={28} />
              <a style={{ marginLeft: 8 }}>Cart</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
