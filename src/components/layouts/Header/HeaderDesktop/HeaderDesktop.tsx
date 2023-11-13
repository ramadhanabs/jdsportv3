import { ContainerDesktop } from "@/components/elements/Container";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import HeaderSearchbar from "./HeaderSearchbar";
import HeaderMiniCart from "./HeaderMiniCart";
import BlocksView from "@/components/elements/BlocksView";
import HeaderCategory from "./HeaderCategory";

export const USPBanner = () => (
  <div className="bg-secondary">
    <ContainerDesktop className="py-4 px-8 ">
      <BlocksView
        identifier="jd-usp-three-items"
        className="flex items-center justify-between w-full"
      ></BlocksView>
    </ContainerDesktop>
  </div>
);

const HeaderDesktop = () => {
  return (
    <>
      <ContainerDesktop className="py-4 px-8">
        {/* Upper Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              className="text-xs font-semibold hover:underline"
              href="https://jdsports.id/page/hubungi-kami"
            >
              Help & Contact Us
            </Link>
            <Link
              className="text-xs font-semibold hover:underline"
              href="https://jdsports.id/page/hubungi-kami"
            >
              Store Location
            </Link>
            <Link
              className="text-xs font-semibold hover:underline"
              href="https://jdsports.id/page/hubungi-kami"
            >
              Track My Order
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs font-semibold">Hi, Ramadhana Bagus</p>
            <Link className="text-xs font-semibold hover:underline" href="/profile">
              My Account
            </Link>
            <Link
              className="text-xs font-semibold hover:underline"
              href="https://eraspace.com/myeraspace"
            >
              My Eraspace
            </Link>
            <p className="text-xs font-semibold hover:underline">Log Out</p>
            <Link className="text-xs font-semibold hover:underline" href="/profile/favorit">
              Favorite
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex items-center justify-between py-8">
          <Image src="/images/logo-jdsport.webp" width={218} height={32} alt="Logo JDSport 2023" />

          <div className="flex items-center gap-2">
            <HeaderSearchbar />
            <HeaderMiniCart />
          </div>
        </div>
      </ContainerDesktop>

      <HeaderCategory />

      <USPBanner />
    </>
  );
};

export default HeaderDesktop;
