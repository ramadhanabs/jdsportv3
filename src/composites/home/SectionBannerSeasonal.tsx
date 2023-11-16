import { useBlocks } from "@/api/Blocks";
import React from "react";
import parse from "html-react-parser";
import { ContainerDesktop } from "@/components/elements/Container";
import Slider from "react-slick";
import { settings } from "./BannerSliderView";

interface SectionProps {
  isMobile?: boolean;
}

const SectionBannerSeasonal = ({ isMobile }: SectionProps) => {
  const url = isMobile ? "jd-mid-seasonal-banner-mobile" : "jd-home-mid-seasonal-banner-dekstop";
  const { data, isError } = useBlocks(url);
  const banners = data?.data.items?.content;

  if (isError || !data || !banners) return null;

  return (
    <ContainerDesktop className="px-8 pt-8">
      <Slider {...settings} className="relative slider-custom z-10">
        {parse(banners)}
      </Slider>
    </ContainerDesktop>
  );
};

export default SectionBannerSeasonal;
