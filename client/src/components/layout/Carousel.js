import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import { Redirect } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items }) => {
  const [data, setData] = useState({
    Id: ""
  });

  const { Id } = data;

  const onClick = e => {
    const imageId = e.target.alt;
  
    setData({ ...data, Id: imageId });
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (Id) {
    return <Redirect to={`/items/${Id}`} />
  }

  return (
    <Fragment>
      <Slider {...settings}>
        {items.map(item => (
          <div key={item._id}>
            <img className="Homepage-Image" src={item.image} alt={item._id} onClick={e => onClick(e)}/>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default Carousel;