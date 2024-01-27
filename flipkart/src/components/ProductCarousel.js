import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import CategoryBanner from "./CategoryBanner";
import "./ProductCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductCarousel({ BgImg, Title, Data }) {
  const settings = {
    dots: false,
    speed: 500,
    slideToShow: 4,
    infinte: false,
  };
  return (
    <div className="CategoryCarousel">
      <div
        className="CategoryCarousel-left"
        style={{ background: `url(${BgImg}) no-repeat 0px bottom` }}
      >
        <p className="CategoryCorousel-title">{Title}</p>
        <button className="CategoryCorousel-btn">View All</button>
      </div>
      <div className="CategoryCarousel-right">
        <Slider {...settings}>
          {Data.map((item, index) => (
            <Link to={"/products"} key={index}>
              <CategoryBanner
                Imgsrc={item.Imgsrc}
                Title={item.CategoryName}
                Brand={item.Brand}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}
