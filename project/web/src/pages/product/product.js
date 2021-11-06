import React from "react";

import "./product-style.css";
import colors from "../../colors.json";
import SelectableButton from "../../components/selectable-button/SelectAbleButton";
import SABGroup from "../../components/selectable-button/sab-button-group";
import QuantityPicker from "../../components/quantity/quantity";

import { MdOutlineShoppingCart } from "react-icons/md";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://news.pdamobiz.com/wp-content/uploads/google-pixel-5a-5g-01-2021-08-19_14-17-51_102962.jpg",
      name: "Google Pixel 5a",
      price: 15900,
    };
  }

  toTHB = (price) => {
    return price.toLocaleString("th-TH", {
      //   style: "currency",
      //   currency: "THB",
    }); /* $2,500.00 */
  };

  onSelect = (e) => {
    console.log(e.target.name);
  };

  render() {
    return (
      <div className="product">
        <div className="product-body">
          <div className="product-main-con">
            <div className="product-img-con">
              <img className="product-img" src={this.state.image} />
            </div>
            <div className="product-detail-con">
              <label id="product-name-label">{this.state.name}</label>
              <label id="product-price-label">
                {this.toTHB(this.state.price)} ฿
              </label>
              <div className="product-option-con">
                <label className="product-option-label">Color</label>
                <div className="product-option-button-con">
                  <SABGroup
                    buttons={["Mostly Black"]}
                    onSelect={this.onSelect}
                  />
                </div>
              </div>
              <div className="product-option-con">
                <label className="product-option-label">Storage</label>
                <div className="product-option-button-con">
                  <SABGroup
                    buttons={["128 GB", "256 GB"]}
                    onSelect={this.onSelect}
                  />
                  {/* <SelectableButton name="128 GB" onSelect={this.onSelect} />
                <SelectableButton name="256 GB" onSelect={this.onSelect}/> */}
                </div>
              </div>
              <div className="product-option-con">
                <label className="product-option-label">Quantity</label>
                <div className="product-option-button-con">
                  <QuantityPicker />
                </div>
              </div>
              <div className="product-buy-con">
                <button className="product-add-cart-but">
                  <MdOutlineShoppingCart size={24} color={colors.primary} />
                  <label style={{ marginLeft: 20 }}>Add to Cart</label>
                </button>
                <button className="product-buy-but">
                  <label>Buy</label>
                </button>
              </div>
            </div>
          </div>
          <div className="product-spec-section">
            <label className="product-head-spec-label">Specification</label>
            <div className="product-spec-col-con">
              <div className="product-spec-col">
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">Display</label>
                  <p className="product-spec-val">HHHHHH</p>
                </div>
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">CPU</label>
                  <p className="product-spec-val">HHHHHH</p>
                </div>
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">RAM</label>
                  <p className="product-spec-val">HHHHHH</p>
                </div>
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">Battery</label>
                  <p className="product-spec-val">HHHHHHHHHHH</p>
                </div>
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">OS</label>
                  <p className="product-spec-val">HHHHHHHHHHH</p>
                </div>
              </div>
              <div className="product-spec-col">
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">Rare Camera</label>
                  <p className="product-spec-val">HHHHHHHHHHH</p>
                </div>
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">Front Camera</label>
                  <p className="product-spec-val">HHHHHHHHHHH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
