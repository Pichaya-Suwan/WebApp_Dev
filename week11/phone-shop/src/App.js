import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import CarouselComp from "./components/carousel/carousel";
import NewProduct from "./components/new_product/newProduct";
import BestSeller from "./components/best_seller/bestSeller";
import Footer from "./components/footer/footer";
import ShoppingCart from "./components/shopping_cart/shoppingCart";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <CarouselComp />
      <NewProduct />
      <BestSeller /> */}
      <ShoppingCart/>
      <Footer />
    </div>
  );
}

export default App;
