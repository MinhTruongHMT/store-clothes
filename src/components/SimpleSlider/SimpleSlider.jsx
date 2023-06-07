import { Card } from "components/Card";
import React, { Component } from "react";
import Slider from "react-slick";
export default class SimpleSlider extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <div>
        <h2>Best sellers</h2>
        <Slider {...settings}>
          <div>
          <Card price={"$212"} tagcolor={"#FF6F61"} title={"HOT"} />
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card pricesale={"$100"} price={"$212"} tagcolor={"#000"} title={"SALE"} />
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
          <div>
          <Card/>
          </div>
        </Slider>
      </div>
    );
  }
}