import { RecursiveDataCategories, useCategories } from "@/api/Categories";
import { ContainerDesktop } from "@/components/elements/Container";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { USPBanner } from "./HeaderDesktop";
import Masonry from "react-responsive-masonry";
import BlocksView from "@/components/elements/BlocksView";
import ContentLoader from "@/components/elements/ContentLoader";

const ID_SALE_CATEGORY = parseInt(process.env.NEXT_PUBLIC_ID_CAT_SALE || "");

interface MenuProps {
  data: RecursiveDataCategories;
}

const Menu = ({ data }: MenuProps) => (
  <>
    <Link
      href="#"
      className={twMerge(
        "hover:underline",
        data.children_data.length > 0 ? "font-medium text-sm" : "text-xs"
      )}
    >
      {data.name}
    </Link>

    {data.children_data.length > 0 && (
      <>
        {data.children_data.map(item => (
          <Menu key={item.id} data={item} />
        ))}
      </>
    )}
  </>
);

const HeaderCategory = () => {
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);

  const { data, isError } = useCategories();

  const dataCategories = useMemo(() => data?.data.children_data[0].children_data || [], [data]);

  const listSubMenu = useMemo(() => {
    if (!hoveredMenu) return null;

    return dataCategories.find(item => item.id === hoveredMenu);
  }, [hoveredMenu, dataCategories]);

  if (isError || dataCategories.length === 0) return <></>;

  return (
    <div className="flex items-center justify-center relative">
      {dataCategories.map(menu => (
        <Link
          href="#"
          className={twMerge("p-4 font-semibold", menu.id === ID_SALE_CATEGORY && "text-red-500")}
          key={menu.id}
          onMouseOver={e => {
            e.stopPropagation();

            if (menu.children_data.length > 0) {
              setHoveredMenu(menu.id);
            } else {
              setHoveredMenu(null);
            }
          }}
        >
          {menu.name}
        </Link>
      ))}
      <div
        className={twMerge(
          "absolute w-screen top-[54px] left-0 bg-white border-y border-gray-200",
          hoveredMenu ? "block" : "hidden"
        )}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <ContainerDesktop className="flex pb-[100px] pt-6">
          <Masonry className="!w-[70%] masonry" columnsCount={4}>
            {listSubMenu?.children_data.map(submenu => (
              <div key={submenu.id} className="flex flex-col gap-3 pl-7 mb-8">
                <Menu data={submenu} />
              </div>
            ))}
          </Masonry>

          <div className="w-[30%] flex flex-col gap-4 px-10">
            <p className="text-sm font-semibold">Featured</p>
            <BlocksView
              loadingComponent={<ContentLoader isRounded width="100%" height="400px" />}
              identifier={`jd-cat-${hoveredMenu}-featured`}
            />
          </div>
        </ContainerDesktop>
        <div className="absolute bottom-0 left-0 w-full">
          <USPBanner />
        </div>
      </div>
    </div>
  );
};

export default HeaderCategory;
