import React from "react";

import "./product-style.css";
import colors from "../../colors.json";
import SelectableButton from "../../components/selectable-button/SelectAbleButton";
import SABGroup from "../../components/selectable-button/sab-button-group";
import QuantityPicker from "../../components/quantity/quantity";

import { MdOutlineShoppingCart } from "react-icons/md";

import { withRouter } from "../../withRouter";
import { addToCart, updateCart } from "../../redux/actions/cart";
import { connect } from "react-redux";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://news.pdamobiz.com/wp-content/uploads/google-pixel-5a-5g-01-2021-08-19_14-17-51_102962.jpg",
      name: "Google Pixel 5a",
      price: 15900,
      colors: ["Default"],
      storage: ["Default"],
      display: " - ",
      cpu: " - ",
      ram: " - ",
      battery: " - ",
      os: " - ",
      rcamera: " - ",
      fcamera: " - ",
      selectedColor: "",
      selectedStorage: "",
      qty: 1,
    };
  }

  toTHB = (price) => {
    return price.toLocaleString("th-TH", {
      //   style: "currency",
      //   currency: "THB",
    }); /* $2,500.00 */
  };

  onSelectColor = (e) => {
    console.log(e.target.name);
    this.setState({ selectedColor: e.target.name });
  };

  onSelectStorage = (e) => {
    console.log(e.target.name);
    this.setState({ selectedStorage: e.target.name });
  };

  updateQty = (qty) => {
    console.log(qty);
    this.setState({ qty: qty });
  };

  handleAdd2Cart = () => {
  
    this.props.addToCart({
      id: Date.now().toString(),
      itemID: this.props.params.id,
      name: this.state.name,
      image: this.state.image,
      color: this.state.selectedColor,
      storage: this.state.selectedStorage,
      price: this.state.price,
      qty: this.state.qty,
    });
 
  };

  handleBuy=()=>{
    this.props.addToCart({
      id: Date.now().toString(),
      itemID: this.props.params.id,
      name: this.state.name,
      image: this.state.image,
      color: this.state.selectedColor,
      storage: this.state.selectedStorage,
      price: this.state.price,
      qty: this.state.qty,
    });
    this.props.navigate("/checkout")
  }

  fetchProduct = () => {
    fetch("http://localhost:5000/api/product/" + this.props.params.id)
      .then((res) => res.text())
      .then((res) => this.setData(res))
      .catch((err) => err);
  };

  setData = (res) => {
    let data = JSON.parse(res);
    data = data[0];
    // console.log(data)
    this.setState({ name: data.p_name });
    this.setState({ image: JSON.parse(data.p_img)[0] });
    this.setState({ price: data.p_price });
    this.setState({ colors: JSON.parse(data.p_colors) });
    this.setState({ storage: JSON.parse(data.p_storage) });
    this.setState({ display: data.p_display });
    this.setState({ cpu: data.p_cpu });
    this.setState({ ram: data.p_ram });
    this.setState({ battery: data.p_battery });
    this.setState({ os: data.p_os });
    this.setState({ fcamera: data.p_fcamera });
    this.setState({ rcamera: data.p_rcamera });
  };

  componentDidMount() {
    this.fetchProduct();
    console.log(this.props.params.id);
  }

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
                    buttons={this.state.colors}
                    onSelect={this.onSelectColor}
                  />
                </div>
              </div>
              <div className="product-option-con">
                <label className="product-option-label">Storage</label>
                <div className="product-option-button-con">
                  <SABGroup
                    buttons={this.state.storage}
                    onSelect={this.onSelectStorage}
                  />
                  {/* <SelectableButton name="128 GB" onSelect={this.onSelect} />
                <SelectableButton name="256 GB" onSelect={this.onSelect}/> */}
                </div>
              </div>
              <div className="product-option-con">
                <label className="product-option-label">Quantity</label>
                <div className="product-option-button-con">
                  <QuantityPicker updateQty={this.updateQty} />
                </div>
              </div>
              <div className="product-buy-con">
                <button
                  className="product-add-cart-but"
                  onClick={this.handleAdd2Cart}
                >
                  <MdOutlineShoppingCart size={24} color={colors.primary} />
                  <label style={{ marginLeft: 20 }}>Add to Cart</label>
                </button>
                <button className="product-buy-but" onClick={this.handleBuy}>
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
                  <p className="product-spec-val">{this.state.display}</p>
                </div>
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">CPU</label>
                  <p className="product-spec-val">{this.state.cpu}</p>
                </div>
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">RAM</label>
                  <p className="product-spec-val">{this.state.ram}</p>
                </div>
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">Battery</label>
                  <p className="product-spec-val">{this.state.battery}</p>
                </div>
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">OS</label>
                  <p className="product-spec-val">{this.state.os}</p>
                </div>
              </div>
              <div className="product-spec-col">
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">Rare Camera</label>
                  <p className="product-spec-val">{this.state.rcamera}</p>
                </div>
                <div className="product-spec-detail-con">
                  <label className="product-spec-key">Front Camera</label>
                  <p className="product-spec-val">{this.state.fcamera}</p>
                </div>
              </div>
            </div>
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateCart: (data) => dispatch(updateCart(data)),
    addToCart: (data) => dispatch(addToCart(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Product)
);
