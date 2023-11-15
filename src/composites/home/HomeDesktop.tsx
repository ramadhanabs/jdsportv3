import React from "react";
import BannerSliderView from "./BannerSliderView";
import SectionBannerCategory from "./SectionBannerCategory";
import SectionBannerRaffle from "./SectionBannerRaffle";
import SectionBannerSeasonal from "./SectionBannerSeasonal";
import SectionBannerStrip from "./SectionBannerStrip";
import SectionBrandChoice from "./SectionBrandChoice";
import SectionContentSeasonal from "./SectionContentSeasonal";
import SectionExplore from "./SectionExplore";
import SectionFavoriteProduct from "./SectionFavoriteProduct";

const HomeDesktop = () => {
  return (
    <div>
      <BannerSliderView />
      <SectionBannerRaffle />
      <SectionBannerCategory />
      <SectionFavoriteProduct />
      <SectionBannerStrip />
      <SectionBannerSeasonal />
      <SectionContentSeasonal />
      <SectionBrandChoice />
      <SectionExplore />
    </div>
  );
};

export default HomeDesktop;
