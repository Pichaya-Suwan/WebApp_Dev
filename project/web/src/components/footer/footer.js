import React from "react";

import "./footer.css";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="block">
            <h3>About us</h3>
            <a className="a-support">Just a smartphone shop.</a>
          </div>
          <div className="block">
            <h3>Support</h3>
            <div>
              <a className="a-support">Tracking</a>
              <a className="a-support">Warranty</a>
              <a className="a-support">Contact</a>
            </div>
          </div>
          <div className="block">
            <h3>Follow me</h3>
            <div id="icon-group">
              <FaFacebook className="icon" size={30} />
              <FaTwitter className="icon" size={30} />
              <FaYoutube className="icon" size={30} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
