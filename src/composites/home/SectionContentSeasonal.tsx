import { useBlocks } from "@/api/Blocks";
import React from "react";
import parse from "html-react-parser";
import { ContainerDesktop } from "@/components/elements/Container";

interface SectionProps {
  isMobile?: boolean;
}

const SectionContentSeasonal = ({ isMobile }: SectionProps) => {
  const url = "jd-home-shop-seasonals";
  const { data, isError } = useBlocks(url);
  const block = data?.data.items?.content;

  if (isError || !data || !block) return null;

  return (
    <ContainerDesktop className="px-8 pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">{parse(block)}</div>
    </ContainerDesktop>
  );
};

export default SectionContentSeasonal;
