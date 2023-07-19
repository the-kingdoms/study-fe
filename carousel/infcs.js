import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
const CenterMode = () => {
  const settings = {
    className: "center centerMode",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    slidesPerRow: 3,
    speed: 500,
  };

  return (
    <div style={{ height: "300px", width: "1920px" }}>
      <Slider {...settings}>
        <div className="inner" style={{ width: "10%" }}>
          <img src="img/fire.jpg"></img>
        </div>
        <div className="inner" style={{ width: "90%" }}>
          <img src="img/fire.jpg"></img>
        </div>
        <div className="inner" style={{ width: "10%" }}>
          <img src="img/fire.jpg"></img>
        </div>
        <div className="inner">
          <img src="img/fire.jpg"></img>
        </div>
        <div className="inner">
          <img src="img/fire.jpg"></img>
        </div>
        <div className="inner">
          <img src="img/fire.jpg"></img>
        </div>
      </Slider>
    </div>
  );
};

export default CenterMode;
