import { useBlocks } from "@/api/Blocks";
import React from "react";
import parse from "html-react-parser";
import { ContainerDesktop } from "@/components/elements/Container";
import Link from "next/link";

interface SectionProps {
  isMobile?: boolean;
}

const SectionExplore = ({ isMobile }: SectionProps) => {
  const url = isMobile ? "jd-home-shop-explore-mobile" : "jd-home-shop-explore";
  const { data, isError } = useBlocks(url);
  const block = data?.data.items?.content;

  if (isError || !data || !block) return null;

  return (
    <ContainerDesktop className="px-8 pt-8 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-sm lg:text-2xl">Discover JD Style</p>

        <Link
          href="/category/brand/hub-plp-banner-all-brand-222"
          className="font-semibold text-xs lg:text-sm"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6">{parse(block)}</div>
    </ContainerDesktop>
  );
};

export default SectionExplore;
