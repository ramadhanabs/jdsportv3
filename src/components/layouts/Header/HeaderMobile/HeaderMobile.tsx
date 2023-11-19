import React, { useEffect } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import CartIcon from "@/components/icons/CartIcon";
import UserIcon from "@/components/icons/UserIcon";
import useDisclosure from "@/hooks/useDisclosure";
import OverlayMenuMobile from "./OverlayMenuMobile";
import SuggestionSearchView from "@/components/views/SuggestionSearchView";
import { useRouter } from "next/router";
import { route } from "@/utils/routes";
import Link from "next/link";
import { useStoreState } from "@/store";

const HeaderMobile = () => {
  const { isLogin } = useStoreState(state => state);
  const router = useRouter();
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    onClose();
  }, [router.pathname]);

  return (
    <div className="h-[54px] grid grid-cols-3 px-2 bg-white fixed top-0 right-0 w-full">
      <div className="flex items-center">
        <button className="p-2" onClick={onOpen}>
          <GiHamburgerMenu className="w-[22px] h-[22px]" />
          <p className="text-[7px]">MENU</p>
        </button>
        <SuggestionSearchView />
      </div>

      <Link href={route("home")} className="flex items-center justify-center">
        <Image src="/images/logo-jdsport.webp" width={136} height={20} alt="Logo JDSport 2023" />
      </Link>

      <div className="flex items-center justify-end">
        <Link href={isLogin ? route("favorit") : route("login")} className="p-2">
          <AiOutlineHeart className="w-[22px] h-[22px]" />
        </Link>
        <Link href={isLogin ? route("profile") : route("login")} className="p-2">
          <UserIcon className="w-[22px] h-[22px]" />
        </Link>

        <div className="relative">
          <button className="p-2">
            <CartIcon className="w-[22px] h-[22px]" />
          </button>

          <div className="text-xs text-white flex items-center justify-center absolute top-0 right-[-4px] w-6 h-6 bg-[#ef144a] rounded-full border-2 border-white">
            1
          </div>
        </div>
      </div>

      <OverlayMenuMobile isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default HeaderMobile;
