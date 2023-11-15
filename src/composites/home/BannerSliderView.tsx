import { useBlocks } from "@/api/Blocks";
import React from "react";
import Slider from "react-slick";
import parse from "html-react-parser";
import PreviousIcon from "@/components/icons/PreviousIcon";
import NextIcon from "@/components/icons/NextIcon";

export const settings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: (
    <div className="absolute top-[50%]">
      <PreviousIcon className="w-6 h-6 text-white" />
    </div>
  ),
  nextArrow: (
    <div className="absolute top-[50%]">
      <NextIcon className="w-6 h-6 text-white" />
    </div>
  ),
};

const BannerSliderView = () => {
  const { data } = useBlocks("jd-home-banner");
  const banners = data?.data.items?.content ?? "";

  return (
    <Slider {...settings} className="relative slider-custom z-10">
      {parse(banners)}
    </Slider>
  );
};

export default BannerSliderView;
