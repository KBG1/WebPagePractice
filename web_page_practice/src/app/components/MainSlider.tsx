"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./MainSlider.css";
import React, { ReactNode } from "react";

//ssr환경에서 오류가 뜨길래 dynamic을 달아주었다.
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const MainSlider = () => {
  //slick-carousel 설정하는 부분
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,
    arrows: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    //세팅을 적용한 캐러셀
    <Slider {...settings} className="slider-container">
      <div className="slider-card" style={{ width: 700 }}>
        <Image
          className="slider-image"
          src="/images/slide.gif"
          alt="Slide 1"
          layout="responsive"
          width={500}
          height={184}
        />
      </div>
      <div className="slider-card" style={{ width: 700 }}>
        <Image
          className="slider-image"
          src="/images/slide1.png"
          alt="Slide 2"
          layout="responsive"
          width={500}
          height={184}
        />
      </div>
      <div className="slider-card" style={{ width: 700 }}>
        <Image
          className="slider-image"
          src="/images/slide2.png"
          alt="Slide 3"
          layout="responsive"
          width={500}
          height={184}
        />
      </div>
    </Slider>
  );
};

export default MainSlider;
