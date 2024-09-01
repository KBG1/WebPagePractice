"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./MainSlider.css";
import React, { ReactNode } from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,
    arrows: true,
    variableWidth: true,
    appendDots: (dots: ReactNode[]) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
        <div className="slick-page-text">
          {dots.findIndex(
            (dot) =>
              React.isValidElement(dot) &&
              dot.props?.className?.includes("slick-active")
          ) + 1}{" "}
          / {dots.length}
        </div>
      </div>
    ),
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="slider-container">
      <div className="slider-card" style={{ width: 700 }}>
        <Image
          className="slider-image"
          src="/images/slide.gif"
          alt="Slide 1"
          layout="responsive"
          width={700}
          height={184}
        />
      </div>
      <div className="slider-card" style={{ width: 700 }}>
        <Image
          className="slider-image"
          src="/images/slide1.png"
          alt="Slide 2"
          layout="responsive"
          width={700}
          height={184}
        />
      </div>
      <div className="slider-card" style={{ width: 700 }}>
        <Image
          className="slider-image"
          src="/images/slide2.png"
          alt="Slide 3"
          layout="responsive"
          width={700}
          height={184}
        />
      </div>
    </Slider>
  );
};

export default MainSlider;
