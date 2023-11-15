import { RecursiveDataCategories, useCategories } from "@/api/Categories";
import HomeIcon from "@/components/icons/HomeIcon";
import React, { useCallback, useMemo, useState } from "react";
import { HiOutlineX, HiChevronRight, HiArrowLeft } from "react-icons/hi";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { generateCategoryURL, shimmer, toBase64 } from "@/utils/componentUtils";
import { useBlocks } from "@/api/Blocks";
import { twMerge } from "tailwind-merge";
import ContentLoader from "@/components/elements/ContentLoader";

interface OverlayMenuMobileProps {
  onClose: () => void;
}

interface MenuProps {
  data: RecursiveDataCategories | null;
  parent: RecursiveDataCategories | null;
  onClick: (menu: RecursiveDataCategories) => void;
  isFirstSubMenu: boolean;
  listCategoryNameSelected: string[];
}

const ID_CATEGORY_MEN = parseInt(process.env.NEXT_PUBLIC_ID_CAT_MEN || "");
const ID_CATEGORY_WOMEN = parseInt(process.env.NEXT_PUBLIC_ID_CAT_WOMEN || "");
const ID_CATEGORY_KIDS = parseInt(process.env.NEXT_PUBLIC_ID_CAT_KIDS || "");

const Loader = () => {
  return (
    <div className="p-2 flex flex-col gap-2">
      <ContentLoader width="100%" height="100px" />
      <ContentLoader width="100%" height="100px" />
      <ContentLoader width="100%" height="100px" />
      <ContentLoader width="100%" height="100px" />
    </div>
  );
};

const Menu = ({ data, onClick, parent, isFirstSubMenu, listCategoryNameSelected }: MenuProps) => {
  const router = useRouter();
  const { data: dataIconShopAll } = useBlocks("jd-icon-menu-shop-all", true);

  const iconShopAll = useMemo(() => {
    const listHomeBanners = dataIconShopAll?.data?.items?.home_banners;

    if (!listHomeBanners) return "";
    if (!isFirstSubMenu) return "";
    if (!parent) return "";

    if (parent.id === ID_CATEGORY_MEN) return listHomeBanners[0].file;
    if (parent.id === ID_CATEGORY_WOMEN) return listHomeBanners[1].file;
    if (parent.id === ID_CATEGORY_KIDS) return listHomeBanners[2].file;
  }, [dataIconShopAll, parent, isFirstSubMenu]);

  const handleClickShopAll = useCallback(() => {
    const cloneListMenu = [...listCategoryNameSelected];
    cloneListMenu.pop();

    const url = generateCategoryURL(data?.name ?? "", data?.id ?? 0, cloneListMenu);
    router.push(url);
  }, [data, listCategoryNameSelected, router]);

  return (
    <div className="py-2 px-4">
      <button
        className="py-2 w-full flex justify-between items-center"
        onClick={handleClickShopAll}
      >
        <div className="flex items-center gap-2">
          {iconShopAll && (
            <Image
              alt="Menu Image"
              src={iconShopAll}
              placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              width={40}
              height={40}
            />
          )}
          <p className="text-xs">Shop All</p>
        </div>
        <HiChevronRight className="w-5 h-5" />
      </button>
      {data?.children_data.map(menu => {
        return (
          <button
            className="py-2 w-full flex justify-between items-center"
            key={menu.id}
            onClick={() => onClick(menu)}
          >
            <div className="flex items-center gap-2">
              {menu?.image && (
                <Image
                  alt="Menu Image"
                  src={menu.image}
                  placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  width={40}
                  height={40}
                />
              )}

              <p className="text-xs">{menu?.name}</p>
            </div>

            <HiChevronRight className="w-5 h-5" />
          </button>
        );
      })}
    </div>
  );
};

const Breadcrumb = ({ list }: { list: RecursiveDataCategories[] }) => {
  return (
    <div className="flex items-center gap-2">
      {list.map((item, index) => (
        <>
          <p
            key={item.id}
            className={twMerge("text-xs", list.length - 1 === index && "font-semibold")}
          >
            {item.name}
          </p>

          {list.length - 1 !== index && <p className="text-xs">/</p>}
        </>
      ))}
    </div>
  );
};

const OverlayMenuMobile = (props: OverlayMenuMobileProps) => {
  const { onClose } = props;
  const router = useRouter();

  const [listMenuSelected, setListMenuSelected] = useState<RecursiveDataCategories[]>([]);

  // State for parent category: Men, Woman, Kids
  const [parentCategory, setParentCategory] = useState<RecursiveDataCategories | null>(null);

  const currentMenu = useMemo(() => {
    return listMenuSelected.at(-1) ?? null;
  }, [listMenuSelected]);

  const listCategoryNameSelected = useMemo(
    () => listMenuSelected.map(item => item.name),
    [listMenuSelected]
  );

  const { data, isError, isLoading } = useCategories();
  const dataCategories = useMemo(() => data?.data.children_data[0].children_data || [], [data]);

  const handleClickMenu = (menu: RecursiveDataCategories) => {
    if (menu.children_data.length === 0) {
      handleRedirect(menu);
      return;
    }

    if (menu.level === 3) {
      setParentCategory(menu);
    }

    setListMenuSelected(prev => [...prev, menu]);
  };

  const handleClickBack = () => {
    if (!currentMenu) return;

    if (currentMenu.level === 3) {
      setListMenuSelected([]);
      return;
    }

    setListMenuSelected(() => listMenuSelected.slice(0, -1));
  };

  const handleRedirect = (menu: RecursiveDataCategories) => {
    const url = generateCategoryURL(menu.name, menu.id, listCategoryNameSelected);
    router.push(url);
  };

  const headerMenuRenderer = () => {
    if (listMenuSelected.length > 0) {
      return (
        <div className="flex items-center justify-between p-3 border-b border-gray-200">
          <button onClick={handleClickBack}>
            <HiArrowLeft className="w-6 h-6" />
          </button>
          <Breadcrumb list={listMenuSelected}></Breadcrumb>
          <button onClick={onClose}>
            <HiOutlineX className="w-6 h-6" />
          </button>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <button>
          <HomeIcon className="w-6 h-6" />
        </button>
        <button onClick={onClose}>
          <HiOutlineX className="w-6 h-6" />
        </button>
      </div>
    );
  };

  const listMenuRenderer = () => {
    if (isError) return null;

    if (listMenuSelected.length > 0) {
      return (
        <Menu
          data={currentMenu}
          onClick={handleClickMenu}
          parent={parentCategory}
          isFirstSubMenu={currentMenu?.level === 3}
          listCategoryNameSelected={listCategoryNameSelected}
        />
      );
    }

    if (isLoading) return <Loader />;

    /* For first level category */
    return (
      <div className="p-2 flex flex-col gap-2">
        {dataCategories.map(menu => {
          return (
            <button
              key={menu.id}
              className="w-full bg-[#f2f2f2] relative"
              onClick={() => handleClickMenu(menu)}
            >
              <div className="h-[100px] relative">
                <Image
                  alt="Banner for Menu"
                  src={menu.icon_onmobile_homepage}
                  fill={true}
                  className="object-cover"
                />
              </div>
              <p className="absolute top-[40%] text-xs font-semibold left-[16px]">{menu.name}</p>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full overflow-y-scroll h-screen bg-white">
      {headerMenuRenderer()}
      {/* List Menu */}
      {listMenuRenderer()}

      <div className="p-2">
        <button className="w-full border-t border-gray-200 py-4 px-2 flex justify-between items-center">
          <p className="text-xs">My Account</p>
          <HiChevronRight className="w-5 h-5" />
        </button>
        <button className="w-full border-t border-gray-200 py-4 px-2 flex justify-between items-center">
          <p className="text-xs">MyEraspace</p>
          <HiChevronRight className="w-5 h-5" />
        </button>
        <button className="w-full border-t border-gray-200 py-4 px-2 flex justify-between items-center">
          <p className="text-xs">Help & Contact Us</p>
          <HiChevronRight className="w-5 h-5" />
        </button>
        <button className="w-full border-y border-gray-200 py-4 px-2 flex justify-between items-center">
          <p className="text-xs">Keluar</p>
        </button>
      </div>

      <div className="flex justify-center items-center py-6 gap-10">
        <button>
          <FaFacebook className="w-8 h-8"></FaFacebook>
        </button>
        <button>
          <BsInstagram className="w-8 h-8"></BsInstagram>
        </button>
        <button>
          <FaTwitter className="w-8 h-8"></FaTwitter>
        </button>
      </div>
    </div>
  );
};

export default OverlayMenuMobile;
