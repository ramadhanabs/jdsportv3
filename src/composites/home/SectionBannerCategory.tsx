import { useBlocks } from "@/api/Blocks";
import React from "react";
import parse from "html-react-parser";
import { ContainerDesktop } from "@/components/elements/Container";

interface SectionProps {
  isMobile?: boolean;
}

const SectionBannerCategory = ({ isMobile }: SectionProps) => {
  const url = isMobile ? "jd-home-shop-by-category-mobile" : "jd-home-shop-by-category";
  const { data, isError } = useBlocks(url);
  const block = data?.data.items?.content;

  if (isError || !data || !block) return null;

  return (
    <ContainerDesktop className="px-8 pt-[28px]">
      <h2 className="text-[20px] font-semibold mb-4">Shop By Category</h2>
      <div className="grid grid-cols-3 gap-6">{parse(block)}</div>
    </ContainerDesktop>
  );
};

export default SectionBannerCategory;
