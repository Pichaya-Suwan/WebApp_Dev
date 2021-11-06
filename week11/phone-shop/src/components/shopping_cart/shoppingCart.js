import { useState } from "react";
import React from "react";
import NewProduct from "../new_product/newProduct";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [itemInCart, setItemInCart] = useState([]);
  const [update, setUpdate] = useState(true);
  const [total, setTotal] = useState(0);

  
  const handleClick = (item) => {
    let deepCloneItem = JSON.parse(JSON.stringify(item));
    deepCloneItem.id = Date.now().toString()
    //console.log(item)
    let temp = cart;
    temp.push(deepCloneItem);
    setCart(temp);
    console.log(cart);
    // let tempCart = cart
    // setItemInCart(tempCart.push(RenderItemInCart))
    RenderItemInCart();
    let tempTotal = total + parseInt(deepCloneItem.price)
    setTotal(tempTotal)
    setUpdate(!update);
  };

  const handleRemove = (id, price) => {
    console.log("remove");
    let tempCart = cart;
    tempCart = tempCart.filter((item) => item.id != id);
    setCart(tempCart);
    let tempTotal = total - parseInt(price)
    setTotal(tempTotal)
  };

  const handleClearCart = () => {
    setCart([]);
    setTotal(0)
  };

  const RenderItemInCart = () => {
    let itemInCart = [];
    cart.map((item) => {
      console.log(item);
      itemInCart.push(
        <div
          key={item.id}
          style={{ display: "flex", marginBottom: 10, textAlign: "center" }}
        >
          <img
            src={item.img}
            style={{ objectFit: "cover", height: 120, width: 120 }}
          />
          <div
            style={{
              display: "flex",
              width: "50%",
              alignItems: "center",
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <a
              style={{
                display: "flex",
                fontSize: 20,
                width: "100%",
                height: "fit-content",
              }}
            >
              {item.name}
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <a
              style={{
                display: "flex",
                fontSize: 20,
                width: "100%",
                height: "fit-content",
              }}
            >
              {item.price}
            </a>
          </div>
          <button
            style={{
              height: 100,
              flex: 1,
              border: 0,
              backgroundColor: "#E63946",
              fontSize: 20,
              fontWeight: "500",
              color: "white",
            }}
            onClick={() => {
              handleRemove(item.id, item.price);
            }}
          >
            REMOVE
          </button>
        </div>
      );
    });
    return itemInCart;
  };

  return (
    <div
      style={{
        display: "flex",
        maxWidth: 1920,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <NewProduct handleClick={handleClick} />

      <div
        style={{
          display: "flex",
          width: "70%",
          alignSelf: "center",
          marginTop: 100,
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ marginRight: "auto" }}>SHOPPING CART</h3>
          <button
            style={{
              border: 0,
              height: 50,
              fontSize: 18,
              backgroundColor: "red",
              color: "white",
            }}

            onClick={()=>{handleClearCart()}}
          >
            CLEAR CART
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <RenderItemInCart />
        </div>
        <a style={{marginLeft:"auto", fontSize:20, marginTop:20}}>Total {total} Bath</a>
      </div>
    </div>
  );
};

export default ShoppingCart;
