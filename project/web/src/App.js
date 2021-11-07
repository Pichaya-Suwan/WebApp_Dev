import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";

import Footer from "./components/footer/footer";

import React from "react";

import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./redux/store";

import Home from "./pages/home/home";
import Product from "./pages/product/product";
import AllProduct from "./pages/all_product/allProduct";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={configureStore}>
        <div className="App">
          <div className="App-header">
            <Header />
          </div>
          <div className="App-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<AllProduct />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
