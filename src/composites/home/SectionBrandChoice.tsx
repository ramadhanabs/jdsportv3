import { useBlocks } from "@/api/Blocks";
import React from "react";
import parse from "html-react-parser";
import { ContainerDesktop } from "@/components/elements/Container";
import Slider from "react-slick";
import PreviousIcon from "@/components/icons/PreviousIcon";
import NextIcon from "@/components/icons/NextIcon";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import Link from "next/link";

interface SectionProps {
  isMobile?: boolean;
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: "5",
  prevArrow: (
    <div>
      <HiArrowCircleLeft className="w-12 h-12 text-white" />
    </div>
  ),
  nextArrow: (
    <div>
      <HiArrowCircleRight className="w-12 h-12 text-white" />
    </div>
  ),
};

const SectionBrandChoice = ({ isMobile }: SectionProps) => {
  const url = isMobile ? "jd-home-brand-choices-mobile" : "jd-home-brand-choices";
  const { data, isError } = useBlocks(url);
  const banners = data?.data.items?.content;

  if (isError || !data || !banners) return null;

  return (
    <ContainerDesktop className="px-8 pt-8 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-sm lg:text-2xl">The Brands You Love</p>

        <Link
          href="/category/brand/hub-plp-banner-all-brand-222"
          className="font-semibold text-xs lg:text-sm"
        >
          View All
        </Link>
      </div>
      
      <Slider {...settings} className="relative slider-custom offset-right z-10 mr-[-25px]">
        {parse(banners)}
      </Slider>
    </ContainerDesktop>
  );
};

export default SectionBrandChoice;
