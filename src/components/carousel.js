import React from "react";
import Slider from "react-slick";

import MenuItem from "./menuItem";

const Carousel = (props) => {

  const menuType = {
    "category1": ["category1.1","category1.2","category1.3","category1.4","category1.5"],
    "category2": ["category2.1","category2.2","category2.3","category2.4","category2.5"],
    "category3": ["category3.1","category3.2","category3.3","category3.4","category3.5"],
    "category4": ["category4.1","category4.2","category4.3","category4.4","category4.5"]
  }
  const itemList = menuType[props.type]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    centerMode: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.04,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };
  {console.log("props",props)}
  return (
    <div className="Carousel ">
      <Slider {...settings} className="">
        {itemList.map(n=>{ return <MenuItem name={n}/>})}     
      </Slider>
    </div>
  );
};

export default Carousel;
