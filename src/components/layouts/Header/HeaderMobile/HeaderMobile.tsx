import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import CartIcon from "@/components/icons/CartIcon";
import UserIcon from "@/components/icons/UserIcon";
import useDisclosure from "@/hooks/useDisclosure";
import OverlayMenuMobile from "./OverlayMenuMobile";

const HeaderMobile = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div className="h-[54px] grid grid-cols-3 px-2 bg-white fixed top-0 right-0 w-full">
      <div className="flex items-center">
        <button className="p-2" onClick={onOpen}>
          <GiHamburgerMenu className="w-[22px] h-[22px]" />
          <p className="text-[7px]">MENU</p>
        </button>
        <button className="p-2">
          <FiSearch className="w-[22px] h-[22px]" />
        </button>
      </div>

      <div className="flex items-center justify-center">
        <Image src="/images/logo-jdsport.webp" width={136} height={20} alt="Logo JDSport 2023" />
      </div>

      <div className="flex items-center justify-end">
        <button className="p-2">
          <AiOutlineHeart className="w-[22px] h-[22px]" />
        </button>
        <button className="p-2">
          <UserIcon className="w-[22px] h-[22px]" />
        </button>

        <div className="relative">
          <button className="p-2">
            <CartIcon className="w-[22px] h-[22px]" />
          </button>

          <div className="text-xs text-white flex items-center justify-center absolute top-0 right-[-4px] w-6 h-6 bg-[#ef144a] rounded-full border-2 border-white">
            1
          </div>
        </div>
      </div>

      {isOpen && <OverlayMenuMobile onClose={onClose} />}
    </div>
  );
};

export default HeaderMobile;
