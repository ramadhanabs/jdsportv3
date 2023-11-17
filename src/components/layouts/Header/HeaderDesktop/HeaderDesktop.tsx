import { ContainerDesktop } from "@/components/elements/Container";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import HeaderSearchbar from "./HeaderSearchbar";
import HeaderMiniCart from "./HeaderMiniCart";
import BlocksView from "@/components/elements/BlocksView";
import HeaderCategory from "./HeaderCategory";
import { useCustomerProfile } from "@/api/Customer";
import { route } from "@/utils/routes";
import { useAuthContext } from "@/contexts/AuthContextProvider";

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
  const { data } = useCustomerProfile();
  const profile = data?.data;
  const { logout } = useAuthContext();

  return (
    <>
      <ContainerDesktop className="py-4 px-8">
        {/* Upper Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link className="text-xs font-semibold hover:underline" href={route("hubungi_kami")}>
              Help & Contact Us
            </Link>
            <Link className="text-xs font-semibold hover:underline" href={route("lokasi_toko")}>
              Store Location
            </Link>
            <Link className="text-xs font-semibold hover:underline" href={route("track_order")}>
              Track My Order
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {profile && (
              <p className="text-xs font-semibold">
                Hi, {profile?.firstname} {profile?.lastname}
              </p>
            )}

            <Link className="text-xs font-semibold hover:underline" href={route("profile")}>
              My Account
            </Link>
            <Link
              className="text-xs font-semibold hover:underline"
              href="https://eraspace.com/myeraspace"
            >
              My Eraspace
            </Link>

            {profile ? (
              <button className="text-xs font-semibold hover:underline" onClick={logout}>
                Log Out
              </button>
            ) : (
              <Link className="text-xs font-semibold hover:underline" href={route("login")}>
                Login
              </Link>
            )}

            <Link className="text-xs font-semibold hover:underline" href={route("favorit")}>
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
