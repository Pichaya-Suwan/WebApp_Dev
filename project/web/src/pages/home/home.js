import React from "react";

import CarouselComp from "../../components/carousel/carousel";
import NewProduct from "../../components/new_product/newProduct";
import BestSeller from "../../components/best_seller/bestSeller"


class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <CarouselComp />
        <NewProduct />
        <BestSeller />
      </div>
    );
  }
}
export default Home;
