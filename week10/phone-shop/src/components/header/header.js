import React from "react";
import "./header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <h3 className="logo">domo</h3>
          <nav>
            <a>Product</a>
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
            <div className="button">
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
