import React from "react";

import "./carousel.css";

class CarouselComp extends React.Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      activeIdx: 0,
    };
    this.imgs = [
      "https://thethaiger.com/th/wp-content/uploads/sites/9/2021/05/182495108_1359724297732714_4614408048330021757_n.jpeg",
      "https://images.droidsans.com/wp-content/uploads/2021/09/apple-iphone-13-series-officially-announced-00.jpg",
      "https://images.droidsans.com/wp-content/uploads/2021/06/iphone-13-1280x720.jpg",
      "https://www.macthai.com/wp-content/uploads/2021/08/iPhone-13-Dummy-Thumbnail-2.jpeg",
      "https://i.imgur.com/HLnALBO.jpg",
      "https://i.imgur.com/oEmnZ7p.png",
    ];
  }

  render() {
    return (
      <div className="carousel">
        <div id="carousel-container">
          <img src={this.imgs[0]}></img>
        </div>
      </div>
    );
  }
}

export default CarouselComp;
