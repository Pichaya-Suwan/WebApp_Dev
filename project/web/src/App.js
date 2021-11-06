import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";

import Footer from "./components/footer/footer";

import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Product from "./pages/product/product";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
