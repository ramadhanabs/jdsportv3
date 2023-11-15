import { useBlocks } from "@/api/Blocks";
import React from "react";
import parse from "html-react-parser";
import { ContainerDesktop } from "@/components/elements/Container";

interface SectionProps {
  isMobile?: boolean;
}

const SectionBannerStrip = ({ isMobile }: SectionProps) => {
  const url = isMobile ? "jd-home-strip-banner-mobile" : "jd-home-strip-banner-dekstop";
  const { data, isError } = useBlocks(url);
  const block = data?.data.items?.content;

  if (isError || !data || !block) return null;

  return <ContainerDesktop className="px-8 pt-8">{parse(block)}</ContainerDesktop>;
};

export default SectionBannerStrip;
