import React from "react";
import { CarouselWrapper } from "react-pretty-carousel";

import "./Slider.scss";
const Slider = () => {
  return (
    <>
      <div>
        <CarouselWrapper items={2} mode="gallery">
          <div className="image image1"></div>
          <div className="image image2"></div>
          <div className="image image3"></div>
          <div className="image image4"></div>
          <div className="image image5"></div>
          <div className="image image6"></div>
        </CarouselWrapper>
      </div>
      <h2>The most popular cources</h2>
      <div className="pop-cources">
        <p>
          Have a glimpse of some of our finest courses. Pursuing these courses
          will set your career on the right path to success, and we guarantee
          you.
        </p>
        <div className="pop-item">1</div>
        <div className="pop-item">2</div>
        <div className="pop-item">3</div>
        <div className="pop-item">4</div>
      </div>
    </>
  );
};

export default Slider;
