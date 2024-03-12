import React from "react";
import Slider from "react-slick";
import { useFetchData } from "../../hooks/useFetchData";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Banner = () => {
  const { data, isLoading } = useFetchData("banner", "banner");

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <Slider {...settings}>
      {data?.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.id} />
        </div>
      ))}
    </Slider>
  );
};
