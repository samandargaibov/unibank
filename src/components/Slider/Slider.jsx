import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';
import { banner } from "../../mockApi/mockApi";

const SimpleSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <div className="slider-w">
        <Slider {...settings}>
          {
            banner.map((item,id) => (
              <div className="slider-box">
                <div className="slider-left">
                    <img src={item.img} alt="" />
                </div>
                <div className="slider-right">
                  <div className="s-right-header">{item.bannerHeader}</div>
                  <div className="s-right-desc">{item.bannerDesc}</div>
                  <div className="s-right-btn"><a href="">{item.bannerBtn}</a></div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
      </div>
    );
  }

export default SimpleSlider